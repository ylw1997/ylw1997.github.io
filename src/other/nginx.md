# nginx

## centos 8 yum 安装

```bash
yum install -y nginx
```

:::tip 错误处理
可能会遇到 CentOS 8: No URLs in mirrorlist error 这个错误
解决方法:运行以下命令

也可以按照阿里云文档操作:
https://developer.aliyun.com/mirror/centos?spm=a2c6h.13651102.0.0.3e221b11mKWxVs
:::

```bash
# sudo sed -i -e "s|mirrorlist=|#mirrorlist=|g" /etc/yum.repos.d/CentOS-*
# sudo sed -i -e "s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g" /etc/yum.repos.d/CentOS-*
```

```bash
# 启动
systemctl start nginx.service
# 设置开始自动启动
systemctl enable nginx.service
# 停止
systemctl stop nginx.service
# 停止自动启动
systemctl disable nginx.service
# 查看状态
systemctl status nginx.service

# 如果使用docker报错 System has not been booted with systemd as init system (PID 1). Can't operate.
# 用这个命令来解决
docker run -itd   --privileged --name myCentos centos /usr/sbin/init
```

## 反向代理

:::tip 反向代理
反向代理就是将客户端的请求转发到服务端接口上

一般用于解决跨域问题
:::

```bash
server {
    listen   80;
    server_name   localhost; # 用户访问 localhost，反向代理到 http://webcanteen.com
    location / {
        proxy_pass http://baidu.com
    }
}
```

## GZIP

:::tip GZIP
GZIP 是一种压缩算法，它可以在传输过程中加速数据的传输。
:::

```bash
  gzip on;
  gzip_types application/octet-stream application/javascript text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
```

## 负载均衡

:::tip 负载均衡
负载均衡是一种让多个服务器上的资源随机分配的方式。
:::

```bash
http {
  upstream myserver {
  	# ip_hash;  # ip_hash 方式
    # fair;   # fair 方式
    server 127.0.0.1:8081;  # 负载均衡目的服务地址
    server 127.0.0.1:8080;
    server 127.0.0.1:8082 weight=10;  # weight 方式，不写默认为 1
  }

  server {
    location / {
    	proxy_pass http://myserver;
      proxy_connect_timeout 10;
    }
  }
}
```

## ssl

:::tip ssl
ssl 是一种安全的通信协议，它可以使用加密的通信方式，以保证数据的安全。
:::

```bash
server {
        listen 443 ssl;
        server_name baidu.com;
        ssl_certificate      /etc/nginx/conf/xxx.com.pem;
        ssl_certificate_key  /etc/nginx/conf/xxx.com.key;
        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers  on;

        access_log  logs/nginx_sys.log;
        client_max_body_size 100M;

        location / {
            root   /root/admin;
            try_files $uri $uri/ @router;
            index  index.html index.htm;
            add_header Cache-Control no-cache;
        }
        location /bg/api/ {
           proxy_pass http://127.0.0.1:18099/;
                }
        location /api/file/upload/ {
           proxy_method POST;
           proxy_pass http://172.29.128.143:18099/api/file/upload/;
        }
        # history路由
        location @router {
              rewrite ^.*$ /index.html last;
        }
    }
```

## 静态服务

:::tip 静态服务
静态服务是一种把静态资源放在服务器上的方式。
:::

```bash
server {
  listen       80;
  server_name  static.sherlocked93.club;
  charset utf-8;    # 防止中文文件名乱码

  location /upload {
    alias	          /usr/share/nginx/html/static;  # 静态资源目录
    autoindex               on;    # 开启静态资源列目录
    autoindex_exact_size    off;   # on(默认)显示文件的确切大小，单位是byte；off显示文件大概大小，单位KB、MB、GB
    autoindex_localtime     off;   # off(默认)时显示的文件时间为GMT时间；on显示的文件时间为服务器时间
  }
}
```

## http 转 https

```bash
server {
        listen       80;
        server_name  baidu.com;
        rewrite ^(.*)$ https://${server_name}$1 permanent;
    }
```
或者
```bash
server {
    listen      80;
    server_name www.baidu.club;

    # 或者全部重定向
    return 301 https://$server_name$request_uri;
}
```