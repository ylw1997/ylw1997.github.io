# NVM nodejs管理工具

:::tip

* nvm 是一个管理 nodejs 版本的工具

* 可以让多个nodejs 版本在一个系统内共存

* 解决旧项目与新项目 nodejs 冲突问题

:::

## windows 安装

:::tip windows

* 一定要卸载已安装的 NodeJS，否则会发生冲突。然后下载 nvm-windows 最新安装包，直接安装即可。
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

nvm uninstall 6.11.0     // 移除 node 6.11.0
nvm ls                   // 查看目前已安装的 node 及当前所使用的 node
nvm ls-remote            // 查看目前线上所能安装的所有 node 版本
nvm alias default 6.11.0 // 使用 6.11.0 作为预设使用的 node 版本

```
