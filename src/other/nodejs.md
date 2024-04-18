# centos 安装 nodejs

:::tip

* 使用centos 的yum 安装nodejs

* 使用tar.gz包安装也可以,但没必要

:::

## 查询nodejs的yum源

:::tip 地址

* `https://github.com/nodesource/distributions#rpminstall`

:::

## 设置地址

```bash

curl -fsSL https://rpm.nodesource.com/setup_19.x | bash -

```

## 安装nodejs

```bash

yum -y install nodejs

```

## node 版本查看

```bash

node -v

#v19.3.0

```
