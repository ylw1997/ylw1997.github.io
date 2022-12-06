# openEuler 编译安装 Nginx

:::tip 提示

* 本文基于 openEuler 20.03
* centos 等系统也可以参考

:::

## 1,升级系统软件

```bash
sudo yum -y update
```

## 2,安装依赖

```bash
sudo yum -y install gcc gcc-c++ make cmake zlib zlib-devel openssl openssl-devel pcre-devel vim net-tools man wget tar
```

## 3,添加用户

:::tip 添加用户

* 如果已经有 nginx 用户,可以跳过这一步
* 可以用 `cat /etc/passwd` 查看用户
* 可以用 `groups` 查看当前用户所在的组
  :::

```bash
groupadd nginx
useradd nginx -g nginx -s /sbin/nologin -M
```

## 4,下载源码

```bash
sudo wget https://nginx.org/download/nginx-1.20.1.tar.gz

sudo tar -zxvf nginx-1.20.1.tar.gz

cd nginx-1.20.1
```

## 5,编译安装

:::tip 编译安装

* prefix 指定安装目录
* user 指定用户
* group 指定用户组
* with-http_stub_status_module 开启状态模块
* with-http_ssl_module 开启 ssl 模块
* with-http_realip_module 开启真实 ip 模块
* with-http_gzip_static_module 开启 gzip 模块
* with-file-aio 开启异步 io
  :::

```bash

./configure --prefix=/opt/nginx  \
 --user=adminweihuds --group=adminweihuds \
 --with-http_stub_status_module --with-http_ssl_module \
 --with-http_realip_module --with-http_gzip_static_module \
 --with-file-aio 

```

:::tip 查看是否成功
echo $?

// 成功会显示数字零

0
:::

## 6,编译

```bash
sudo make -j4

sudo make -j4 install
```

:::tip 查看是否成功
sudo /opt/nginx/sbin/nginx -t

// 成功会显示

nginx: the configuration file /opt/nginx/conf/nginx.conf syntax is ok

nginx: configuration file /opt/nginx/conf/nginx.conf test is successful
:::

## 7,启动

```bash
sudo /opt/nginx/sbin/nginx

sudo /opt/nginx/sbin/nginx -s reload // 重启

sudo /opt/nginx/sbin/nginx -s stop // 停止

sudo /opt/nginx/sbin/nginx -s quit // 退出
```

## 8,查看进程

```bash
ps -ef | grep nginx
```

## 9,查看端口

```bash
netstat -tunlp | grep nginx
```

## 10,查看日志

```bash
sudo tail -f /opt/nginx/logs/error.log
```

## 11,配置文件

```bash /opt/nginx/conf/nginx.conf


#user  nobody;
worker_processes  1;

events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;

    keepalive_timeout  65;

    server {
        listen       80;
        server_name  hlmall.wandinghk.com;

        rewrite ^(.*)$ https://${server_name}$1 permanent;
    }


    server {
        listen       443 ssl;
        server_name  hlmall.wandinghk.com;

        ssl_certificate      /opt/nginx/conf/hlmall.pem;
        ssl_certificate_key  /opt/nginx/conf/hlmall.key;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers  on;

            location / {
                root   /app/vue;
                index  index.html index.htm;
            }
        }

}


```
