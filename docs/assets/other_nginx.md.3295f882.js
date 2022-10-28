import{_ as s,o as n,c as a,d as l}from"./app.5c84acb7.js";const F=JSON.parse('{"title":"nginx","description":"","frontmatter":{},"headers":[{"level":2,"title":"centos 8 yum \u5B89\u88C5","slug":"centos-8-yum-\u5B89\u88C5","link":"#centos-8-yum-\u5B89\u88C5","children":[]},{"level":2,"title":"yum \u6CA1\u6709nginx","slug":"yum-\u6CA1\u6709nginx","link":"#yum-\u6CA1\u6709nginx","children":[]},{"level":2,"title":"\u57FA\u672Cnginx\u914D\u7F6E","slug":"\u57FA\u672Cnginx\u914D\u7F6E","link":"#\u57FA\u672Cnginx\u914D\u7F6E","children":[]},{"level":2,"title":"\u53CD\u5411\u4EE3\u7406","slug":"\u53CD\u5411\u4EE3\u7406","link":"#\u53CD\u5411\u4EE3\u7406","children":[]},{"level":2,"title":"GZIP","slug":"gzip","link":"#gzip","children":[]},{"level":2,"title":"\u8D1F\u8F7D\u5747\u8861","slug":"\u8D1F\u8F7D\u5747\u8861","link":"#\u8D1F\u8F7D\u5747\u8861","children":[]},{"level":2,"title":"ssl","slug":"ssl","link":"#ssl","children":[]},{"level":2,"title":"\u9759\u6001\u670D\u52A1","slug":"\u9759\u6001\u670D\u52A1","link":"#\u9759\u6001\u670D\u52A1","children":[]},{"level":2,"title":"http \u8F6C https","slug":"http-\u8F6C-https","link":"#http-\u8F6C-https","children":[]},{"level":2,"title":"alias \u548C root","slug":"alias-\u548C-root","link":"#alias-\u548C-root","children":[]},{"level":2,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B","link":"#\u6848\u4F8B","children":[]},{"level":2,"title":"\u95EE\u9898","slug":"\u95EE\u9898","link":"#\u95EE\u9898","children":[{"level":3,"title":"\u4EE3\u7406\u540E\u62A5502\u9519\u8BEF","slug":"\u4EE3\u7406\u540E\u62A5502\u9519\u8BEF","link":"#\u4EE3\u7406\u540E\u62A5502\u9519\u8BEF","children":[]}]}],"relativePath":"other/nginx.md","lastUpdated":1664266858000}'),p={name:"other/nginx.md"},e=l(`<h1 id="nginx" tabindex="-1">nginx <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h1><h2 id="centos-8-yum-\u5B89\u88C5" tabindex="-1">centos 8 yum \u5B89\u88C5 <a class="header-anchor" href="#centos-8-yum-\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">yum install -y nginx</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u9519\u8BEF\u5904\u7406</p><p>\u53EF\u80FD\u4F1A\u9047\u5230 CentOS 8: No URLs in mirrorlist error \u8FD9\u4E2A\u9519\u8BEF \u89E3\u51B3\u65B9\u6CD5:\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4</p><p>\u4E5F\u53EF\u4EE5\u6309\u7167\u963F\u91CC\u4E91\u6587\u6863\u64CD\u4F5C: <a href="https://developer.aliyun.com/mirror/centos?spm=a2c6h.13651102.0.0.3e221b11mKWxVs" target="_blank" rel="noreferrer">https://developer.aliyun.com/mirror/centos?spm=a2c6h.13651102.0.0.3e221b11mKWxVs</a></p></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># sudo sed -i -e &quot;s|mirrorlist=|#mirrorlist=|g&quot; /etc/yum.repos.d/CentOS-*</span></span>
<span class="line"><span style="color:#676E95;"># sudo sed -i -e &quot;s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g&quot; /etc/yum.repos.d/CentOS-*</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start nginx.service</span></span>
<span class="line"><span style="color:#676E95;"># \u8BBE\u7F6E\u5F00\u59CB\u81EA\u52A8\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl </span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;"> nginx.service</span></span>
<span class="line"><span style="color:#676E95;"># \u505C\u6B62</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop nginx.service</span></span>
<span class="line"><span style="color:#676E95;"># \u505C\u6B62\u81EA\u52A8\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl disable nginx.service</span></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status nginx.service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5982\u679C\u4F7F\u7528docker\u62A5\u9519 System has not been booted with systemd as init system (PID 1). Can&#39;t operate.</span></span>
<span class="line"><span style="color:#676E95;"># \u7528\u8FD9\u4E2A\u547D\u4EE4\u6765\u89E3\u51B3</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -itd   --privileged --name myCentos centos /usr/sbin/init</span></span>
<span class="line"></span></code></pre></div><h2 id="yum-\u6CA1\u6709nginx" tabindex="-1">yum \u6CA1\u6709nginx <a class="header-anchor" href="#yum-\u6CA1\u6709nginx" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">CentOS8\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">$ vi /etc/yum.repos.d/nginx.repo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">nginx</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">name=nginx repo</span></span>
<span class="line"><span style="color:#A6ACCD;">baseurl=http://nginx.org/packages/centos/8/</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">basearch/</span></span>
<span class="line"><span style="color:#A6ACCD;">gpgcheck=0</span></span>
<span class="line"><span style="color:#A6ACCD;">enabled=1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">CentOS7\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">$ vi /etc/yum.repos.d/nginx.repo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">nginx</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">name=nginx repo</span></span>
<span class="line"><span style="color:#A6ACCD;">baseurl=http://nginx.org/packages/centos/7/</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">basearch/</span></span>
<span class="line"><span style="color:#A6ACCD;">gpgcheck=0</span></span>
<span class="line"><span style="color:#A6ACCD;">enabled=1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">CentOS6\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">$ vi /etc/yum.repos.d/nginx.repo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">nginx</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">name=nginx repo</span></span>
<span class="line"><span style="color:#A6ACCD;">baseurl=http://nginx.org/packages/centos/6/</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">basearch/</span></span>
<span class="line"><span style="color:#A6ACCD;">gpgcheck=0</span></span>
<span class="line"><span style="color:#A6ACCD;">enabled=1</span></span>
<span class="line"></span></code></pre></div><h2 id="\u57FA\u672Cnginx\u914D\u7F6E" tabindex="-1">\u57FA\u672Cnginx\u914D\u7F6E <a class="header-anchor" href="#\u57FA\u672Cnginx\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># nginx.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen 80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    location / </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        root /usr/share/nginx/html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        index index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        try_files </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri/ /index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53CD\u5411\u4EE3\u7406" tabindex="-1">\u53CD\u5411\u4EE3\u7406 <a class="header-anchor" href="#\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u53CD\u5411\u4EE3\u7406</p><p>\u53CD\u5411\u4EE3\u7406\u5C31\u662F\u5C06\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u8F6C\u53D1\u5230\u670D\u52A1\u7AEF\u63A5\u53E3\u4E0A</p><p>\u4E00\u822C\u7528\u4E8E\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898</p></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">server\xA0</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0\xA0\xA0\xA0listen\xA0\xA0\xA080</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0\xA0\xA0\xA0server_name\xA0\xA0\xA0localhost</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#676E95;">#\xA0\u7528\u6237\u8BBF\u95EE\xA0localhost\uFF0C\u53CD\u5411\u4EE3\u7406\u5230\xA0http://webcanteen.com</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0\xA0\xA0\xA0location\xA0/\xA0</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0proxy_pass\xA0http://baidu.com</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0\xA0\xA0\xA0</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="gzip" tabindex="-1">GZIP <a class="header-anchor" href="#gzip" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">GZIP</p><p>GZIP \u662F\u4E00\u79CD\u538B\u7F29\u7B97\u6CD5\uFF0C\u5B83\u53EF\u4EE5\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u52A0\u901F\u6570\u636E\u7684\u4F20\u8F93\u3002</p></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">  gzip on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  gzip_types application/octet-stream application/javascript text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8D1F\u8F7D\u5747\u8861" tabindex="-1">\u8D1F\u8F7D\u5747\u8861 <a class="header-anchor" href="#\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u8D1F\u8F7D\u5747\u8861</p><p>\u8D1F\u8F7D\u5747\u8861\u662F\u4E00\u79CD\u8BA9\u591A\u4E2A\u670D\u52A1\u5668\u4E0A\u7684\u8D44\u6E90\u968F\u673A\u5206\u914D\u7684\u65B9\u5F0F\u3002</p><ul><li>\u8D1F\u8F7D\u5747\u8861\u9ED8\u8BA4\u662F\u8F6E\u8BE2\u7684\u65B9\u5F0F</li><li>ip_hash \u65B9\u5F0F\uFF0C\u6839\u636E\u5BA2\u6237\u7AEF\u7684 ip \u5730\u5740\u6765\u5206\u914D (\u901A\u8FC7\u5BA2\u6237\u7AEF\u8BF7\u6C42ip\u8FDB\u884Chash\uFF0C\u518D\u901A\u8FC7hash\u503C\u9009\u62E9\u540E\u7AEFserver)</li><li>fair \u65B9\u5F0F\uFF0C\u6839\u636E\u670D\u52A1\u5668\u7684\u54CD\u5E94\u65F6\u95F4\u6765\u5206\u914D (\u54CD\u5E94\u65F6\u95F4\u77ED\u7684\u4F18\u5148\u5206\u914D)</li><li>url_hash \u65B9\u5F0F\uFF0C\u6839\u636E\u8BF7\u6C42\u7684 url \u6765\u5206\u914D (\u901A\u8FC7\u5BA2\u6237\u7AEF\u8BF7\u6C42url\u8FDB\u884Chash\uFF0C\u518D\u901A\u8FC7hash\u503C\u9009\u62E9\u540E\u7AEFserver)</li></ul></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">http </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  upstream myserver </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  	</span><span style="color:#676E95;"># ip_hash;  # ip_hash \u65B9\u5F0F</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># fair;   # fair \u65B9\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    server 127.0.0.1:8081</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># \u8D1F\u8F7D\u5747\u8861\u76EE\u7684\u670D\u52A1\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">    server 127.0.0.1:8080</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server 127.0.0.1:8082 weight=10</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># weight \u65B9\u5F0F\uFF0C\u4E0D\u5199\u9ED8\u8BA4\u4E3A 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    location / </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    	proxy_pass http://myserver</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      proxy_connect_timeout 10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="ssl" tabindex="-1">ssl <a class="header-anchor" href="#ssl" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">ssl</p><p>ssl \u662F\u4E00\u79CD\u5B89\u5168\u7684\u901A\u4FE1\u534F\u8BAE\uFF0C\u5B83\u53EF\u4EE5\u4F7F\u7528\u52A0\u5BC6\u7684\u901A\u4FE1\u65B9\u5F0F\uFF0C\u4EE5\u4FDD\u8BC1\u6570\u636E\u7684\u5B89\u5168\u3002</p></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen 443 ssl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name baidu.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ssl_certificate      /etc/nginx/conf/xxx.com.pem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ssl_certificate_key  /etc/nginx/conf/xxx.com.key</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ssl_session_cache    shared:SSL:1m</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ssl_session_timeout  5m</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        ssl_ciphers  HIGH:</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">aNULL:</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">MD5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ssl_prefer_server_ciphers  on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        access_log  logs/nginx_sys.log</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        client_max_body_size 100M</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        location / </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            root   /root/admin</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            try_files </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri/ @router</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            index  index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            add_header Cache-Control no-cache</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        location /bg/api/ </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">           proxy_pass http://127.0.0.1:18099/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        location /api/file/upload/ </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">           proxy_method POST</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">           proxy_pass http://172.29.128.143:18099/api/file/upload/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;"># history\u8DEF\u7531</span></span>
<span class="line"><span style="color:#A6ACCD;">        location @router </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">              rewrite ^.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">$ /index.html last</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u9759\u6001\u670D\u52A1" tabindex="-1">\u9759\u6001\u670D\u52A1 <a class="header-anchor" href="#\u9759\u6001\u670D\u52A1" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u9759\u6001\u670D\u52A1</p><p>\u9759\u6001\u670D\u52A1\u662F\u4E00\u79CD\u628A\u9759\u6001\u8D44\u6E90\u653E\u5728\u670D\u52A1\u5668\u4E0A\u7684\u65B9\u5F0F\u3002</p></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen       80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_name  static.sherlocked93.club</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  charset utf-8</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># \u9632\u6B62\u4E2D\u6587\u6587\u4EF6\u540D\u4E71\u7801</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  location /upload </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;">	          /usr/share/nginx/html/static</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># \u9759\u6001\u8D44\u6E90\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">    autoindex               on</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># \u5F00\u542F\u9759\u6001\u8D44\u6E90\u5217\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">    autoindex_exact_size    off</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;"># on(\u9ED8\u8BA4)\u663E\u793A\u6587\u4EF6\u7684\u786E\u5207\u5927\u5C0F\uFF0C\u5355\u4F4D\u662Fbyte\uFF1Boff\u663E\u793A\u6587\u4EF6\u5927\u6982\u5927\u5C0F\uFF0C\u5355\u4F4DKB\u3001MB\u3001GB</span></span>
<span class="line"><span style="color:#A6ACCD;">    autoindex_localtime     off</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;"># off(\u9ED8\u8BA4)\u65F6\u663E\u793A\u7684\u6587\u4EF6\u65F6\u95F4\u4E3AGMT\u65F6\u95F4\uFF1Bon\u663E\u793A\u7684\u6587\u4EF6\u65F6\u95F4\u4E3A\u670D\u52A1\u5668\u65F6\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="http-\u8F6C-https" tabindex="-1">http \u8F6C https <a class="header-anchor" href="#http-\u8F6C-https" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen       80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name  baidu.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        rewrite ^</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">*)</span><span style="color:#A6ACCD;">$ https://</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">server_name</span><span style="color:#89DDFF;">}$</span><span style="color:#A6ACCD;">1 permanent</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6216\u8005</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen      80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name www.baidu.club</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u6216\u8005\u5168\u90E8\u91CD\u5B9A\u5411</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> 301 https://</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">server_name</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request_uri</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="alias-\u548C-root" tabindex="-1">alias \u548C root <a class="header-anchor" href="#alias-\u548C-root" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">alias \u548C root</p><ul><li>alias \u548C root \u90FD\u662F\u7528\u6765\u6307\u5B9A\u9759\u6001\u8D44\u6E90\u7684\u76EE\u5F55</li><li>root\u4E0Ealias\u4E3B\u8981\u533A\u522B\u5728\u4E8Enginx\u5982\u4F55\u89E3\u91CAlocation\u540E\u9762\u7684uri\uFF0C\u8FD9\u4F1A\u4F7F\u4E24\u8005\u5206\u522B\u4EE5\u4E0D\u540C\u7684\u65B9\u5F0F\u5C06\u8BF7\u6C42\u6620\u5C04\u5230\u670D\u52A1\u5668\u6587\u4EF6\u4E0A\u3002</li><li>root\u7684\u5904\u7406\u7ED3\u679C\u662F\uFF1Aroot\u8DEF\u5F84\uFF0Blocation\u8DEF\u5F84</li><li>alias\u7684\u5904\u7406\u7ED3\u679C\u662F\uFF1A\u4F7F\u7528alias\u8DEF\u5F84\u66FF\u6362location\u8DEF\u5F84</li></ul></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#A6ACCD;">location ^~ /t/ </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     root /www/root/html/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;"># /t/a.html \u4F1A\u6620\u5C04\u5230 /www/root/html/t/a.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">location ^~ /t/ </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> /www/root/html/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;"># /t/a.html \u4F1A\u6620\u5C04\u5230 /www/root/html/a.html</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u6848\u4F8B</p><ul><li>\u4E00\u4E2AH5\u4E00\u4E2A\u540E\u53F0\u7BA1\u7406\u4E00\u4E2A\u4EE3\u7406\u540E\u7AEFapi</li></ul></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen       80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name  localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    location /api/ </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_pass http://localhost:18098/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    location / </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        root /usr/share/nginx/html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        index  index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        try_files </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri/ @router</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        add_header Cache-Control no-cache</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    location /admin{</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> /usr/share/nginx/html/admin</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">         index index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">         try_files </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri/ /admin/index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    location @router </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        rewrite ^.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">$ /index.html last</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u95EE\u9898" tabindex="-1">\u95EE\u9898 <a class="header-anchor" href="#\u95EE\u9898" aria-hidden="true">#</a></h2><h3 id="\u4EE3\u7406\u540E\u62A5502\u9519\u8BEF" tabindex="-1">\u4EE3\u7406\u540E\u62A5502\u9519\u8BEF <a class="header-anchor" href="#\u4EE3\u7406\u540E\u62A5502\u9519\u8BEF" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">\u95EE\u9898</p><ul><li>\u53CD\u5411\u4EE3\u7406\u540E\u8BBF\u95EEapi\u4E00\u76F4\u62A5502\u9519\u8BEF</li></ul></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">getsebool httpd_can_network_connect</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># httpd_can_network_connect --&gt; off</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># SELinux\u914D\u7F6E\u5C06httpd\u7F51\u7EDC\u8FDE\u63A5\u5173\u95ED\uFF0C\u6240\u4EE5\u5F88\u81EA\u7136\u5C06\u5176\u542F\u7528\u5373\u53EF\uFF1A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">setsebool -P httpd_can_network_connect 1</span></span>
<span class="line"></span></code></pre></div>`,39),o=[e];function c(t,r,i,D,y,C){return n(),a("div",null,o)}const h=s(p,[["render",c]]);export{F as __pageData,h as default};
