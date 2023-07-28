# 前端漏洞修复

## 1,启用不安全的TLS1.0协议

:::tip 说明
TLS全称为：Transport Layer Security——安全传输层协议，用于在两个通信应用程序之间提供保密性和数据完整性。TLS 1.0是于1996年发布的老版协议，使用的是弱加密算法和系统。比如SHA-1和MD5，这些算法和系统十分脆弱，存在重大安全漏洞，容易受到降级攻击的严重影响。

修复建议:采用2008年和2017年发布的协议新版本，分为TLS 1.2和TLS 1.3。
:::

```bash
# 1,修改配置文件
vim /etc/nginx/nginx.conf

# 2,添加如下配置
ssl_protocols TLSv1.2;

# 3,重启nginx
nginx -s reload
```

## 2,会话Cookie中缺少secure属性

:::tip 说明
secure属性是指定浏览器只有在请求使用SSL和HTTPS协议的时候才会把Cookie发送到服务器，如果是HTTP请求则不会发送。如果没有设置secure属性，那么浏览器会在HTTP和HTTPS两种协议下都发送Cookie，这样会增加Cookie被盗取的风险。
:::

```js
// 修改设置cookie方式
Cookies.set('unionId', value, { expires: 7, secure: true });"
```

## 3,HTTP Referrer-Policy缺失

:::tip 说明
Web 服务器对于 HTTP 请求的响应头中缺少 Referrer-Policy，这将导致浏览器提供的安全特性失效。 当用户在浏览器上点击一个链接时，会产生一个 HTTP 请求，用于获取新的页面内容，而在该请求的报头中，会包含一个 Referrer，用以指定该请求是从哪个页面跳转页来的，常被用于分析用户来源等信息。但是也成为了一个不安全的因素，所以就有了 Referrer-Policy，用于过滤 Referrer 报头内容，其可选的项有： no-referrer no-referrer-when-downgrade origin origin-when-cross-origin same-origin strict-origin strict-origin-when-cross-origin unsafe-url 漏洞危害： Web 服务器对于 HTTP 请求的响应头中缺少 Referrer-Policy，这将导致浏览器提供的安全特性失效，更容易遭受 Web 前端黑客攻击的影响。

:::

```bash

# 1,修改配置文件
vim /etc/nginx/nginx.conf

# 2,添加如下配置
add_header Referrer-Policy origin;

# 3,重启nginx
nginx -s reload
```

## 4, HTTP X-XSS-Protection缺失

:::tip 说明
HTTP X-XSS-Protection 响应头是 Internet Explorer，Chrome 和 Safari 的一个特性，当检测到跨站脚本攻击 (XSS)时，浏览器将停止加载页面。若网站设置了良好的 Content-Security-Policy 来禁用内联 JavaScript ('unsafe-inline')，现代浏览器不太需要这些保护， 但其仍然可以为尚不支持 CSP 的旧版浏览器的用户提供保护。

:::

```bash

# 1,修改配置文件
vim /etc/nginx/nginx.conf

# 2,添加如下配置
add_header X-XSS-Protection "1; mode=block";

# 3,重启nginx
nginx -s reload
```

## 5,HTTP Content-Security-Policy缺失

:::tip 说明

内容安全策略 (CSP) 是一个额外的安全层，用于检测并削弱某些特定类型的攻击，包括跨站脚本 (XSS) 和数据注入攻击等。无论是数据盗取、网站内容污染还是散发恶意软件，这些攻击都是主要的手段。CSP 的实质就是白名单制度，开发者明确告诉客户端，哪些外部资源可以加载和执行，等同于提供白名单。它的实现和执行全部由浏览器完成，开发者只需提供配置。CSP 大大增强了网页的安全性。攻击者即使发现了漏洞，也没法注入脚本，除非还控制了一台列入了白名单的可信主机。CSP开启可能会导致js、css出现报错。

:::

```bash

# 1,修改配置文件

vim /etc/nginx/nginx.conf

# 2,添加如下配置

add_header Content-Security-Policy "script-src https: 'unsafe-inline'; frame-ancestors 'self'";

# 3,重启nginx

nginx -s reload
```

## 6,HTTP X-Permitted-Cross-Domain-Policies缺失

:::tip 说明

Web 服务器对于 HTTP 请求的响应头中缺少 X-Permitted-Cross-Domain-Policies，这将导致浏览器提供的安全特性失效。 当一些在线的 Web Flash 需要加载其他域的内容时，很多 Web 会通过设置一个 crossdomain.xml 文件的方式来控制其跨域方式。很有可能有些开发者并没有修改 crossdomain.xml 文件的权限，但是又有和跨域的 Flash 共享数据的需求，这时候可以通过设置 X-Permitted-Cross-Domain-Policies 头的方式来替代 crossdomain.xml 文件，其可选的值有： none master-only by-content-type by-ftp-filename all。Web 服务器对于 HTTP 请求的响应头中缺少 X-Permitted-Cross-Domain-Policies，这将导致浏览器提供的安全特性失效，更容易遭受 Web 前端黑客攻击的影响。

:::

```bash

# 1,修改配置文件

vim /etc/nginx/nginx.conf

# 2,添加如下配置

add_header X-Permitted-Cross-Domain-Policies none;

# 3,重启nginx

nginx -s reload
```

## 7,  X-Frame-Options Header未配置

:::tip 说明

X-Frame-Options HTTP响应头可以指示浏览器是否允许当前网页在“frame”或“iframe”标签中显示，以此使网站内容不被其他站点引用和免于点击劫持攻击。

:::

```bash

# 1,修改配置文件

vim /etc/nginx/nginx.conf

# 2,添加如下配置

add_header X-Frame-Options "SAMEORIGIN";

# 3,重启nginx

nginx -s reload
```

## 8,Host头攻击

:::tip 说明

Host头攻击是指攻击者通过伪造HTTP请求的Host头，使得服务器无法正确识别出客户端的请求地址，从而导致服务器返回非预期的内容。例如，攻击者通过伪造Host头，使得服务器返回了攻击者指定的网站内容，从而达到攻击的目的。

:::

```bash

# 1,修改配置文件

vim /etc/nginx/nginx.conf

# 2,添加如下配置

"修改nginx配置
default_server"

# 3,重启nginx

nginx -s reload
```

## 9, HTTP Strict-Transport-Security缺失

:::tip 说明

HTTP Strict-Transport-Security (HSTS) 是一个安全功能，旨在保护用户免受“中间人攻击”。 它通过强制客户端（例如浏览器）使用HTTPS与服务器进行连接，来防止HTTP的窥探攻击。 该功能通过HTTP响应头中的strict-transport-security策略来实现。 该策略指示浏览器在未来的请求中仅使用HTTPS与服务器进行连接，即使在用户输入URL时，也是如此。 该策略还指示浏览器将尝试使用HTTPS与服务器进行连接，而不是HTTP。 如果无法建立安全连接，则浏览器将不会尝试使用HTTP连接，从而防止中间人攻击。 该策略还可以防止用户点击“继续”按钮，从而防止中间人攻击。

:::

```bash

# 1,修改配置文件

vim /etc/nginx/nginx.conf

# 2,添加如下配置

add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

# 3,重启nginx

nginx -s reload
```

## 10, HTTP X-Content-Type-Options缺失

:::tip 说明
通过设置"X-Content-Type-Options: nosniff"响应标头，对 script 和 styleSheet 在执行是通过MIME 类型来过滤掉不安全的文件。设置X-Content-Type-Options，可能导致IE9、IE11拒绝加载没有返回Content-Type的相关资源。

:::

```bash

# 1,修改配置文件

vim /etc/nginx/nginx.conf

# 2,添加如下配置

add_header X-Content-Type-Options nosniff;

# 3,重启nginx

nginx -s reload
```

## 11,HTTP X-Download-Options缺失

:::tip 说明

X-Download-Options HTTP响应头是一个微软特有的非标准的响应头，它指示浏览器是否应该阻止对下载的文件的执行。 它可以有两个值：noopen和nosniff。

:::

```bash

# 1,修改配置文件

vim /etc/nginx/nginx.conf

# 2,添加如下配置

add_header X-Download-Options noopen;

# 3,重启nginx

nginx -s reload
```

## nginx配置实例

```bash

location / {
            root   /root/front;
            #try_files $uri $uri/ @router;
            try_files $uri $uri/ /index.html;
            index  index.html index.htm;
            add_header Cache-Control no-cache;
            add_header Referrer-Policy origin;
            add_header X-XSS-Protection "1;mode=block";
            add_header Content-Security-Policy "script-src https: 'unsafe-inline'; frame-ancestors 'self'";
            add_header X-Permitted-Cross-Domain-Policies master-only;
            add_header X-Frame-Options SAMEORIGIN;
            add_header Strict-Transport-Security "max-age=63072000; includeSubdomains; preload";
            add_header X-Content-Type-Options "nosniff";
            add_header X-Download-Options noopen;
       } 

```
