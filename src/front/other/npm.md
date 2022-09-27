# vite + vue3 + ts 开发npm包

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
  "files": [
    "dist/*",
    "*.d.ts"
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

## 打包

```bash
yarn build
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

## ts类型

:::danger ts类型
还没有实现 
:::