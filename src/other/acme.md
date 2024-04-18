# acme.sh 证书申请

:::tip

* acme.sh 是一个开源的证书申请工具，支持多种 DNS API 申请证书，支持自动续期。

* 本文档介绍如何使用 acme.sh 申请证书。

* 文档地址：[文档](https://github.com/acmesh-official/acme.sh/wiki/%E8%AF%B4%E6%98%8E)

:::

## 1,安装

:::tip

* 会安装在 `~/.acme.sh` 目录下。

* 会自动创建一个 cronjob，每天 0:00 自动检测是否需要更新证书。

:::

```bash
curl https://get.acme.sh | sh
```

## 2,配置邮箱
  
```bash
acme.sh --register-account -m my@example.com
```

## 3,申请证书

:::tip

* 默认生成的证书在 `~/.acme.sh/mydomain.com` 目录下。

* 默认zerossl申请的证书有效期为3个月,可以修改为letsencrypt申请的证书有效期为3个月。

* 修改默认server命令: `acme.sh --set-default-ca --server letsencrypt`

:::

```bash
acme.sh --issue -d mydomain.com --nginx
```

## 4,安装证书

```bash
acme.sh --install-cert -d yangliwei.top --key-file /usr/share/nginx/ssl/ylw.key --fullchain-file /usr/share/nginx/ssl/ylw.crt --reloadcmd "nginx -s reload"
```

## 6,nginx配置

:::tip

* acme申请证书后会检查地址,需要nginx配置一个地址用于检查,这里配置的是`/.well-known/acme-challenge`。

* nginx配置好后,需要重启nginx: `nginx -s reload`

:::

```bash
server {
  listen     80;
  server_name  yangliwei.top, www.yangliwei.top;
  
  location / {
   root   /usr/share/nginx/html/blog;
   try_files $uri $uri/ /index.html;
   index  index.html index.htm;
  }

  location /.well-known/acme-challenge {
        # 自己定义的位置，用于校验服务器所有权
        root /root/www/letsencrypt;
    }
  
 }

server {
  listen 443 ssl;
  server_name  yangliwei.top, www.yangliwei.top;
   ssl_certificate /usr/share/nginx/ssl/ylw.crt;     
   ssl_certificate_key  /usr/share/nginx/ssl/ylw.key;       
   ssl_session_timeout 5m;
   ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
   ssl_protocols TLSv1 TLSv1.1 TLSv1.2;      
   ssl_prefer_server_ciphers on;  

   location / {
     try_files $uri $uri/ @router;
     root   /usr/share/nginx/html/blog;
     index index.html;
   }

}
```

## 7,自动续期

:::tip

* 会自动创建一个 cronjob，每天 0:00 自动检测是否需要更新证书。

* 不需要手动续期，acme.sh 会自动续期。

* 证书续期后，会自动重启 nginx。

:::

## 8,其他

:::tip

* 查看证书信息: `acme.sh --list`

* 查看已安装信息: `acme.sh --info -d yangliwei.top`

* 出错了怎么办: `acme.sh --issue  .....  --debug`
