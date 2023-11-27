# 服务器运行环境搭建

## 1,安装系统

::: tip

* 推荐使用CentOS7
* 这里使用Centos8.5作为示例
:::

## 2,安装docker环境

```bash
# 安装必要依赖
yum install -y yum-utils device-mapper-persistent-data lvm2

# 添加docker源
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

#安装docker
yum install -y docker-ce docker-ce-cli containerd.io

#启动docker
systemctl start docker

#设置开机启动
systemctl enable docker

#查看docker版本
docker version
```

## 3,安装mysql环境

```bash
#安装mysql
yum install -y mysql-server

#启动mysql
systemctl start mysqld

#设置开机启动
systemctl enable mysqld

#查看mysql版本
mysql --version
```

## 4,安装docker compose

```bash
# 安装
curl -SL https://github.com/docker/compose/releases/download/v2.23.1/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose

# 赋予执行权限
chmod +x /usr/local/bin/docker-compose

# 查看版本
docker-compose --version
```

## 5,安装java环境

```bash
yum install java-1.8.0-openjdk
```

## 6,更换国内源

```bash
#备份
cp /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak

#下载阿里云的源
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo

# 更新下载源地址
sed -i -e"s|mirrors.cloud.aliyuncs.com|mirrors.aliyun.com|g " /etc/yum.repos.d/CentOS-*
sed -i -e "s|releasever|releasever-stream|g" /etc/yum.repos.d/CentOS-*

# 生成缓存
yum clean all && yum makecache

```

## 7,安装htop

```bash

# 安装第三方依赖
yum install -y epel-release

# 安装htop
yum install -y htop

# 启动
htop
```

## 8,禁用防火墙

```bash
# 查看防火墙状态
systemctl status firewalld

# 停止防火墙
systemctl stop firewalld

# 禁用防火墙
systemctl disable firewalld
```

## 9,使用docker-compose 安装 mysql,redis,mq,nginx

> yml文件

```yml
version: "3"
services:
  mysql:
    user: root
    restart: always
    image: mysql:8.0.28
    container_name: smysql
    ports:
      - "3306:3306"
    command: 
      --default-authentication-plugin=mysql_native_password
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_general_ci
      --explicit_defaults_for_timestamp=true
      --lower_case_table_names=1
    environment:
      LANG: en_US.UTF-8
      TZ: Asia/Shanghai
      MYSQL_ROOT_PASSWORD: 123456
    volumes:
      - /root/apps/mysql/data:/var/lib/mysql
      - /root/apps/mysql/conf:/etc/mysql/conf.d
  redis:
    image: redis:latest
    container_name: sredis
    restart: always
    command: redis-server --requirepass qmszNJ2020
    ports:
      - 6379:6379
    volumes:
      - /root/apps/redis:/data
  rabbitmq:
    image: rabbitmq:3.8.3-management
    container_name: srabbitmq
    restart: always
    hostname: srabbitmq
    ports:
      - 15672:15672
      - 5672:5672
    volumes:
      - /root/apps/rabbitmq:/var/lib/rabbitmq
    environment:
      - RABBITMQ_DEFAULT_USER=test
      - RABBITMQ_DEFAULT_PASS=test
  nginx:
    user: root
    restart: always
    image: nginx
    container_name: docer_nginx
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /root/apps/nginx/www:/usr/share/nginx/html
      - /root/apps/nginx/conf.d:/etc/nginx/conf.d
```

> 启动

```bash
docker-compose up -d
```
