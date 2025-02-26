# vite + vue3 + ts 开发npm包

:::tip

* proField组件已经发布到npm,[npm地址](https://www.npmjs.com/package/profield),[github地址](https://github.com/ylw1997/profield)

* proField-editor组件已经发布到npm,[npm地址](https://www.npmjs.com/package/profield-editor),[github地址](https://github.com/ylw1997/vite-editor)

:::

## vite创建项目

```bash
yarn create vite

# √ Project name: ... vite-project
# √ Select a framework: » Vue
# √ Select a variant: » TypeScript

# cd vite-project
# yarn
# yarn dev
```

## 创建组件

```vue
<!-- src\components\testBtn.vue -->
<template>
  <div>{{ message }}</div>
</template>

<script lang='ts'>
import { message } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'testBtn',
  setup() {
    const message = ref('hello world!');
    return {
      ref,
      message,
    };
  },
});
</script>
<style lang='less'>

</style>
```

## 创建入口文件

```ts
// src\index.ts
import { App } from 'vue';
import testBtn from "./components/TestBtn.vue";

export { testBtn } //实现按需引入*


const components = [testBtn];

const install = (app:App) => {
    components.forEach((component) => {
        app.component(component.name,component);
    });
};
export default { install } // 批量的引入*

```

## 修改打包配置

```ts
// vite.config.ts
export default defineConfig({
  plugins: [vue(),vueJsx()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'lib',
      fileName: (format) => `lib.${format}.js`,
    },
    rollupOptions:{
      external:['vue'],
      output:{
        globals:{
          vue:'Vue'
        }
      }
    },
  },
})
```

## 修改package.json

```json
{
  "name": "profield", // 组件名字
  "version": "1.10.3",
  "type": "module",
  "main": "./dist/lib.umd.js",
  "module": "./dist/lib.es.js",
  "types": "./dist/index.d.ts",
  "files": [
    "dist/*"
  ],
  "exports": {
    ".": {
      "import": "./dist/lib.es.js",
      "require": "./dist/lib.umd.js"
    },
    "./readme.md": "./readme.md"
  },
}
```

## ts类型

:::tip ts类型

* vite 有一个专门插件来解决ts类型的问题
* [vite-plugin-dts](https://github.com/qmhc/vite-plugin-dts)
* 一款用于在 库模式 中，从 .ts(x) 或 .vue 源文件生成类型文件（.d.ts）的 Vite 插件。
:::

```bash
yarn add vite-plugin-dts -D
```

```ts
// vite.config.ts
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
  // dts 插件,
  plugins: [vue(),vueJsx(),dts({ tsconfigPath: './tsconfig.app.json' })],
  // ...
})
```

## 打包

```bash
yarn build
```

![打包后](https://article.biliimg.com/bfs/article/c019175cea7d90da5ef57cf4ac0a87c917731e23.png)

## 减小体积

:::tip 减小体积

* vite打包后的文件体积比较大

* 可以使用rollupOptions选项中的external和manualChunks来减小体积
:::

```ts
// vite.config.ts
export default defineConfig({
  plugins: [vue(),vueJsx(),dts({
    outputDir:"dist",
  })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'lib',
      fileName: (format) => `lib.${format}.js`,
    },
    rollupOptions: {
      // 不打包vue和ant-design-vue,减少体积
      external: ['vue','ant-design-vue'],
      input: ["src/index.ts"],
      output: [{
        format: "es",
        entryFileNames: '[name].js',
        dir: 'dist',
        manualChunks(id){
          if(id.includes('node_modules')){
            return 'vendor'
          }
        }
      }],
    },
  },
})
```

## npm 登陆

```bash
npm login 

# Username: ...
# Password: ...
# Email: (this IS public) ...

# !! 会发一个邮件到邮箱，点击链接验证
```

## 发布

:::warning 发布

* 需要先修改package.json中的版本号
* 发布前需要先打包
:::

```bash
npm publish
```

![img](https://article.biliimg.com/bfs/article/1da4f4a4e7d48b24ad74af112955491efe3f5f69.png)

**发布成功,可以在npm官网查看[链接](https://www.npmjs.com/package/profield)**

![img](https://article.biliimg.com/bfs/article/8f62cc540c59cd948f20e118bb903dec4086ee87.png)

## 安装组件

```bash
yarn add profield
```

## 全局使用

```ts

import { createApp } from 'vue'
import App from './App.vue'
import TestBtn from 'profield'

const app = createApp(App)
app.use(TestBtn)

app.mount('#app')

```

## 按需引入

```ts

<script setup>
import { TestBtn } from 'profield'
</script>
```

> 可以看到组件类型已经被识别了

![img](https://article.biliimg.com/bfs/article/9f8717a2ae39deebc210761eeb8a508d5e7e9bef.png)

## 参考

:::tip 参考

* 感谢这几篇文章
* [使用Vite和TypeScript带你从零打造一个属于自己的Vue3组件库](https://juejin.cn/post/7117886038126624805)
* [基于vite + Vue3.2 组件开发 并发布 npm 包](https://blog.csdn.net/weixin_53312997/article/details/126631365)
:::
