# Hardor

## Hardor介绍

:::tip 介绍

* Hardor 是一个基于 [Docker](https://www.docker.com/) 的开源项目，它可以帮助你快速搭建一个私有化[Docker](https://www.docker.com/)镜像仓库，你可以在这个集群上部署你的应用，也可以在这个集群上运行你的服务。

* Hardor 提供了一个简单的Web界面，你可以在这个界面上管理你的集群，包括镜像管理、容器管理、节点管理、用户管理等。

:::

## 安装条件

:::tip 条件

* 一台或多台服务器，每台服务器都需要安装 [Docker](https://www.docker.com/) 和 [Docker Compose](https://docs.docker.com/compose/)。

* 硬件配置：每台服务器至少需要 2GB 内存，2 核 CPU，20GB 硬盘空间。

:::

## 1,下载安装包

```bash

# 下载安装包, 下载地址: https://github.com/goharbor/harbor/releases ,下载offline安装包
wget https://github.com/goharbor/harbor/releases/download/v2.8.0/harbor-offline-installer-v2.8.0.tgz
```

## 2,解压安装包

```bash
tar xzvf harbor-offline-installer-v2.8.0.tgz
```

## 3,修改配置文件

```bash
# 进入解压后的目录
cd harbor
# 复制配置文件
cp harbor.yml.tmpl harbor.yml
# 修改配置文件
vim harbor.yml
```

```yml
# 配置访问地址
hostname: yangliwei.top
# 配置端口
http:
  # port for http, default is 80. If https enabled, this port will redirect to https port
  port: 7000
# 配置https
https:
  # https port for harbor, default is 443
  port: 7443
  # The path of cert and key files for nginx
  certificate: /root/apps/nginx/conf.d/ssh/certificate.crt
  private_key: /root/apps/nginx/conf.d/ssh/private.key

# 配置admin密码
harbor_admin_password: Harbor12345

# 配置数据库
database:
  # The password for the root user of Harbor DB. Change this before any production use.
  password: 123456

# 配置数据存储
data_volume: /root/apps/harbor/data

# 其他不用修改
```

## 4,安装

```bash
# 安装
./install.sh
```

> 查看运行状态

```bash
docker ps

[root@localhost checkout-admin]# docker ps | grep goharbor
fe582573ac6a   goharbor/harbor-jobservice:v2.8.0    "/harbor/entrypoint.…"   16 hours ago   Up 15 hours (healthy)                                                                                              harbor-jobservice
d8e56940829c   goharbor/nginx-photon:v2.8.0         "nginx -g 'daemon of…"   16 hours ago   Up 15 hours (healthy)   0.0.0.0:7000->8080/tcp, :::7000->8080/tcp, 0.0.0.0:7443->8443/tcp, :::7443->8443/tcp       nginx
33c2ec192b4b   goharbor/harbor-core:v2.8.0          "/harbor/entrypoint.…"   16 hours ago   Up 15 hours (healthy)                                                                                              harbor-core
eb6a6e86bde4   goharbor/registry-photon:v2.8.0      "/home/harbor/entryp…"   16 hours ago   Up 15 hours (healthy)                                                                                              registry
e082ae24e9b1   goharbor/harbor-registryctl:v2.8.0   "/home/harbor/start.…"   16 hours ago   Up 15 hours (healthy)                                                                                              registryctl
0cc677b0d61f   goharbor/harbor-db:v2.8.0            "/docker-entrypoint.…"   16 hours ago   Up 15 hours (healthy)                                                                                              harbor-db
0511077ce7d6   goharbor/harbor-portal:v2.8.0        "nginx -g 'daemon of…"   16 hours ago   Up 15 hours (healthy)                                                                                              harbor-portal
159bb041de91   goharbor/redis-photon:v2.8.0         "redis-server /etc/r…"   16 hours ago   Up 15 hours (healthy)                                                                                              redis
0212e519e233   goharbor/harbor-log:v2.8.0           "/bin/sh -c /usr/loc…"   16 hours ago   Up 15 hours (healthy)   127.0.0.1:1514->10514/tcp                                                                  harbor-log

```

## 5,访问

```bash
# 访问地址
https://yangliwei.top:7443
```

![harbor](https://article.biliimg.com/bfs/article/09b2172151c2e6a8326242fb8c2bc856f8074e53.png)

## 6,配置docker 仓库

```bash
# 配置docker仓库
vim /etc/docker/daemon.json
```

```json
{
  "insecure-registries": ["https://yangliwei.top:7443"]
}
```

## 7,重启docker

```bash
systemctl restart docker
```

## 8,登录

```bash
# 登录
docker login https://yangliwei.top:7443
Username: admin
Password: Harbor12345 # 这个是你在安装的时候配置的密码
Login Succeeded
```

## 9,推送镜像

```bash
# 推送镜像, 这里我推送的是nginx镜像
docker tag nginx:1.19 yangliwei.top:7443/library/nginx:1.19

docker push yangliwei.top:7443/library/nginx:1.19
```

![harbor](https://article.biliimg.com/bfs/article/f4e1f5ff804bed2f64808bff41cb8e6fe40c8b0a.png)

## 10,从私有仓库拉取镜像

```bash
# 从私有仓库拉取镜像
docker pull yangliwei.top:7443/library/nginx:1.19
```
