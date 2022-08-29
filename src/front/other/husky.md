# 提交规范验证

:::tip 提交规范化
在我们提交代码之前的检查,控制提交到仓库代码的规范性和准确性,以及提交信息的规范性进行规范
:::

:::info 用到的工具

- husky
  操作 git 的工具
- lint-staged
  暂存代码检查
- commitlint
  提交信息检查
- commitizen
  辅助生成提交信息
  :::

## 安装 Husky

### 安装依赖

```shell
yarn add husky -D
```

### 在 package.json 中添加脚本 prepare 并运行

```shell
npm pkg set scripts.prepare="husky install"
npm run prepare
```

:::tip
运行后会生成一个.husky 文件夹
:::

### 添加 git 验证钩子

```shell
npx husky add .husky/pre-commit "npm run lint"
```

:::tip
添加 hook 之后，每次 git commit 之前都会先运行 npm run lint，通过之后才会提交代码。
(是否是 lint 要看 package.json 中的 lint 配置)
:::

## 安装 lint-staged

### 安装依赖

```shell
yarn add lint-staged -D
```

### 在 package.json 中添加配置

配置按自己项目需要而定，比如：

```json
"lint-staged": {
  "*.{js,ts,tsx,vue}": [
    "eslint --fix --ext .js,.vue,.ts,.tsx ./src"
  ],
  "*.{scss,less,styl,html,vue}": [
    "stylelint --fix"
  ],
  "*.md": [
    "prettier --write"
  ]
}
```

### 在 package.json 中添加脚本 lint:lint-staged

```shell
npm pkg set scripts.lint:lint-staged="lint-staged"
```

### 修改 husky 配置

并在 .husky/pre-commit 中替换 npm run lint 为 npm run lint:lint-staged。现在我们每次提交代码前都会对改动的文件进行 Lint 检查。

```shell
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
npm run lint:lint-staged
```

## 安装 commitlint

### 安装依赖

```shell
yarn add @commitlint/cli @commitlint/config-conventional -D
```

### 安装 cz-git

```shell
yarn add cz-git -D
```

### 修改 package.json 添加 config 指定使用的适配器

```json
"config": {
  "commitizen": {
    "path": "node_modules/cz-git"
  }
}
```

### 添加配置文件

在根目录创建配置文件 commitlint.config.js

```js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  prompt: {
    useEmoji: true,
    //option...
  },
};
```
### 添加git hook

把 commitlint 命令也添加 Husky Hook

```shell
npx husky add .husky/commit-msg "npx --no-install commitlint -e $HUSKY_GIT_PARAMS"
```

