# pnpm && monorepo

::: tip

* [pnpm](https://pnpm.js.org/zh/)

* pnpm 是一个快速、零配置的 JavaScript 项目管理工具。

* pnpm 使用硬链接和符号链接来将项目中的依赖安装到一个共享的存储空间中。当你安装一个依赖时，它就会被链接到这个存储空间中。这意味着，如果你有 100 个项目使用同一个版本的 lodash，那么这些 lodash 的文件只会在磁盘上存储一次。

* monorepo 多包单仓库的开发模式

* pnpm 自带 monorepo 的支持

:::

## 安装

```bash

npm install -g pnpm

```

## 初始化package.json

```bash

pnpm init

```

## workspace,monorepo

```bash

# 新建pnpm-workspace.yaml文件
touch pnpm-workspace.yaml

# 编辑pnpm-workspace.yaml文件
vim pnpm-workspace.yaml

# 写入内容
packages:
  # packages/* 表示packages文件夹下的所有文件夹
  - 'packages/*'
```

## pnpm workspace 给子模块 安装依赖

```bash

# 安装依赖
pnpm --filter "app1" add @umijs/plugins

```
