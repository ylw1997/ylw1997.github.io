# NVM nodejs管理工具

:::tip

* nvm 是一个管理 nodejs 版本的工具

* 可以让多个nodejs 版本在一个系统内共存

* 解决旧项目与新项目 nodejs 冲突问题

:::

## windows 安装

:::tip windows

* github 地址 `https://github.com/coreybutler/nvm-windows/releases`

* 查看版本 `nvm -v`

:::

## linux 安装

:::tip linux

* github 地址 `https://github.com/nvm-sh/nvm`

* 1, 运行安装命令

```bash

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
# 或者
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

```

:::

* 2, linux 故障排除 `nvm: command not found`

```bash
source ~/.bashrc
```

## 安装nodejs 版本

```bash
# 安装nodejs 12 并 使用 12 版本nodejs
nvm install 12
# Now using node v12.22.6 (npm v6.14.5)
```

## 使用 nodejs 版本

```bash
# 使用 12 版本
nvm use 12

```

## 其他指令

```bash

nvm off                     // 禁用node.js版本管理(不卸载任何东西)
nvm on                      // 启用node.js版本管理
nvm install <version>       // 安装node.js的命名 version是版本号 例如：nvm install 8.12.0
nvm uninstall <version>     // 卸载node.js是的命令，卸载指定版本的nodejs，当安装失败时卸载使用
nvm ls                      // 显示所有安装的node.js版本
nvm list available          // 显示可以安装的所有node.js的版本
nvm use <version>           // 切换到使用指定的nodejs版本
nvm v                       // 显示nvm版本
nvm install stable          // 安装最新稳定版

```
