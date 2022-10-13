# VITE项目优化

## 页面加载优化

### gzip 压缩打包文件

安装

```bash
tyarn add rollup-plugin-gzip -D
```

使用

```ts
// vite.config.ts
import gzip from "rollup-plugin-gzip";

const config = {
  plugins: [gzip()],
};
```

## 打包大小优化

### 思路

1. 全局引入的 ant design vue 改为组件局部引入

:::tip 局部引入

- 优点: 更小的打包大小,更快的启动速度,更好的 tree-shaking,更准确的类型推测
- 缺点: 每个文件多一行导入代码,如果大量文件修改费时间
  :::

```tsx
import { ConfigProvider } from "ant-design-vue";

export default defineComponent({
  setup() {
    return () => (
      <ConfigProvider locale={zhCN}>
        <RouterView />
      </ConfigProvider>
    );
  },
});
```

2. 全局图标改为网络图标

:::tip 网络图标

- 优点: 打包大小变小,选择更多
- 缺点: 依赖网络,网络不好容易加载不出来
  :::

这里使用 iconify 图标

安装

```bash
yarn add @iconify/iconify
yarn add vite-plugin-purge-icons @iconify/json -D
```

vite 全局配置

```ts
// vite.config.ts
import PurgeIcons from "vite-plugin-purge-icons";

export default {
  plugins: [
    PurgeIcons({
      /* PurgeIcons Options */
    }),
  ],
};
```

写一个全局 Icon 组件

```vue
<template>
  <span ref="elRef" class="anticon"></span>
</template>
<script lang="ts" setup>
import Iconify from "@purge-icons/generated";
import { nextTick, ref, unref, watchEffect } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: () => "",
  },
  prefix: {
    type: String,
    default: () => "ant-design",
  },
});

const elRef = ref<Element>();

const update = async () => {
  const el = unref(elRef);
  if (!el) return;

  await nextTick();
  const icon = props.prefix + ":" + props.name;
  if (!icon) return;

  const svg = Iconify.renderSVG(icon, {
    width: "1.2em",
    height: "1.2em",
  });
  if (svg) {
    el.textContent = "";
    el.appendChild(svg);
  } else {
    const span = document.createElement("span");
    span.className = "iconify";
    span.dataset.icon = icon;
    el.textContent = "";
    el.appendChild(span);
  }
};

watchEffect(() => update());
</script>
```

使用

```tsx
<Icon name="edit-outlined" class="mr-2" />
```

## 动态加载 css

:::tip 提取 css
不要直接导入 css,而是动态导入 css,这样可以减少打包大小,例如切换黑暗模式的 css
:::

```ts
// 切换黑暗模式或者白天模式
export const DarkMode = async (isDark: boolean) => {
  if (isDark) {
    // 动态加载css
    changeTheme((await import("../less/dark.less?inline")).default);
    // ...
  } else {
    // 动态加载css
    changeTheme((await import("../less/light.less?inline")).default);
    // ...
  }
};
```

## 动态加载组件

:::tip 动态加载组件
* 优点: 在运行时是懒加载,减少启动时间
* [文档](https://cn.vuejs.org/api/general.html#defineasynccomponent)
:::

```ts
const goodsDetail = defineAsyncComponent(
  () => import("./components/goodsDetail.vue")
);
```

## 产物分块

:::tip 产物分块
* 优点: 减少首屏加载时间,减少包数量,减少包大小
* [文档](https://cn.vitejs.dev/guide/build.html#chunking-strategy)
:::

```ts
export default {
  ...
  build: {
      sourcemap: true,
      outDir: "scm",
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          // 产物分块
          manualChunks: {
            vue: ["vue"],
            lodash: ["lodash-es"],
            antd: ["ant-design-vue"],
            icon: ["@ant-design/icons-vue"],
          },
        },
      },
    },
}
```

## 代码组件代码封装npm包

:::tip 代码组件代码封装npm包
* 把一些公共的代码提取出来,放到 npm 包中,减少打包大小,减少重复代码,提高开发效率
* [文档](https://cn.vitejs.dev/config/build-options.html#build-lib)
:::

## 查看打包文件结构图
安装

```bash
tyarn run rollup-plugin-visualizer
```

使用

```ts
import { visualizer } from "rollup-plugin-visualizer";
return defineConfig({
  plugins: [vue(), visualizer()],
});
```
打包完成后会在项目根目录生成一个stats.html文件,可以根据图中项目结构来针对优化

<img src="/stats.jpg"/>