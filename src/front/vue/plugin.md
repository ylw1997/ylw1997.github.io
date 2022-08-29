# vite 插件

## vue 插件

:::tip
用来支持 vue 组件
:::

```ts
// 安装
// yarn add @vitejs/plugin-vue;

// vite.config.js
import vue from "@vitejs/plugin-vue";
return defineConfig({
  plugins: [vue()],
});
```

## jsx 插件

:::tip
用来支持 jsx语法
:::

```ts
// 安装
// yarn add @vitejs/plugin-vue-jsx;

// vite.config.js
import vueJsx from "@vitejs/plugin-vue-jsx";
return defineConfig({
  plugins: [vueJsx()],
});
```
## name 插件

:::tip
用来支持 script setup 语法设置组件name
:::

```tsx
// 安装
// tyarn add vite-plugin-vue-setup-extend

// vite.config.js
import vueSetupExtend from "vite-plugin-vue-setup-extend";
return defineConfig({
  plugins: [vueSetupExtend()],
});

// 使用
<script lang="ts" setup name="Category">
```

## gzip插件

:::tip
用来支持 vite打包物压缩成gz格式
:::

```ts
// 安装
// yarn add rollup-plugin-gzip;

// vite.config.js
import gzip from "rollup-plugin-gzip";
return defineConfig({
  plugins: [gzip()],
});
```

## 分析插件

:::tip
用来支持 vite打包后打包物组成
:::

```ts
// 安装
// yarn add rollup-plugin-visualizer;

// vite.config.js
import { visualizer } from "rollup-plugin-visualizer";
return defineConfig({
  plugins: [visualizer()],
});
```

## 自己写插件

:::tip
方便实现自己的功能
这里写一个去掉所有的console.log的插件
:::
  
  ```ts
  /**
 * @description:去掉console
 * @param {boolean} confirmRemoveConsole 确定去掉吗?
 * @return {*}
 */
export default (confirmRemoveConsole = true): any => {
  return {
    name: "remove-console", // 必须的，将会显示在 warning 和 error 中
    transform(file: string, filePath: string) {
      if (confirmRemoveConsole && !filePath.includes("node_modules")) {
        const consoStr = /console\.log\(.*?\)/g;
        return file.replace(consoStr, "");
      }
      return file;
    },
  };
};

// 使用
import RemoveConsole from "./src/utils/RemoveConsole";
return defineConfig({
  plugins: [RemoveConsole(mode == "build")],
});

```