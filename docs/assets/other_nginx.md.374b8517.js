import{_ as s,o as n,c as a,d as l}from"./app.898f90a6.js";const F=JSON.parse('{"title":"nginx","description":"","frontmatter":{},"headers":[{"level":2,"title":"centos 8 yum \u5B89\u88C5","slug":"centos-8-yum-\u5B89\u88C5","link":"#centos-8-yum-\u5B89\u88C5","children":[]},{"level":2,"title":"\u53CD\u5411\u4EE3\u7406","slug":"\u53CD\u5411\u4EE3\u7406","link":"#\u53CD\u5411\u4EE3\u7406","children":[]},{"level":2,"title":"GZIP","slug":"gzip","link":"#gzip","children":[]},{"level":2,"title":"\u8D1F\u8F7D\u5747\u8861","slug":"\u8D1F\u8F7D\u5747\u8861","link":"#\u8D1F\u8F7D\u5747\u8861","children":[]},{"level":2,"title":"ssl","slug":"ssl","link":"#ssl","children":[]},{"level":2,"title":"\u9759\u6001\u670D\u52A1","slug":"\u9759\u6001\u670D\u52A1","link":"#\u9759\u6001\u670D\u52A1","children":[]},{"level":2,"title":"http \u8F6C https","slug":"http-\u8F6C-https","link":"#http-\u8F6C-https","children":[]}],"relativePath":"other/nginx.md","lastUpdated":1661420259000}'),p={name:"other/nginx.md"},e=l(`<h1 id="nginx" tabindex="-1">nginx <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h1><h2 id="centos-8-yum-\u5B89\u88C5" tabindex="-1">centos 8 yum \u5B89\u88C5 <a class="header-anchor" href="#centos-8-yum-\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yum install -y nginx</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u9519\u8BEF\u5904\u7406</p><p>\u53EF\u80FD\u4F1A\u9047\u5230 CentOS 8: No URLs in mirrorlist error \u8FD9\u4E2A\u9519\u8BEF \u89E3\u51B3\u65B9\u6CD5:\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4</p><p>\u4E5F\u53EF\u4EE5\u6309\u7167\u963F\u91CC\u4E91\u6587\u6863\u64CD\u4F5C: <a href="https://developer.aliyun.com/mirror/centos?spm=a2c6h.13651102.0.0.3e221b11mKWxVs" target="_blank" rel="noreferrer">https://developer.aliyun.com/mirror/centos?spm=a2c6h.13651102.0.0.3e221b11mKWxVs</a></p></div><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># sudo sed -i -e &quot;s|mirrorlist=|#mirrorlist=|g&quot; /etc/yum.repos.d/CentOS-*</span></span>
<span class="line"><span style="color:#676E95;"># sudo sed -i -e &quot;s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g&quot; /etc/yum.repos.d/CentOS-*</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u542F\u52A8</span></span>
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
<span class="line"></span></code></pre></div><h2 id="\u53CD\u5411\u4EE3\u7406" tabindex="-1">\u53CD\u5411\u4EE3\u7406 <a class="header-anchor" href="#\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u53CD\u5411\u4EE3\u7406</p><p>\u53CD\u5411\u4EE3\u7406\u5C31\u662F\u5C06\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u8F6C\u53D1\u5230\u670D\u52A1\u7AEF\u63A5\u53E3\u4E0A</p><p>\u4E00\u822C\u7528\u4E8E\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898</p></div><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">server\xA0</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0\xA0\xA0\xA0listen\xA0\xA0\xA080</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0\xA0\xA0\xA0server_name\xA0\xA0\xA0localhost</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#676E95;">#\xA0\u7528\u6237\u8BBF\u95EE\xA0localhost\uFF0C\u53CD\u5411\u4EE3\u7406\u5230\xA0http://webcanteen.com</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0\xA0\xA0\xA0location\xA0/\xA0</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0proxy_pass\xA0http://baidu.com</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0\xA0\xA0\xA0</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="gzip" tabindex="-1">GZIP <a class="header-anchor" href="#gzip" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">GZIP</p><p>GZIP \u662F\u4E00\u79CD\u538B\u7F29\u7B97\u6CD5\uFF0C\u5B83\u53EF\u4EE5\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u52A0\u901F\u6570\u636E\u7684\u4F20\u8F93\u3002</p></div><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">  gzip on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  gzip_types application/octet-stream application/javascript text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8D1F\u8F7D\u5747\u8861" tabindex="-1">\u8D1F\u8F7D\u5747\u8861 <a class="header-anchor" href="#\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u8D1F\u8F7D\u5747\u8861</p><p>\u8D1F\u8F7D\u5747\u8861\u662F\u4E00\u79CD\u8BA9\u591A\u4E2A\u670D\u52A1\u5668\u4E0A\u7684\u8D44\u6E90\u968F\u673A\u5206\u914D\u7684\u65B9\u5F0F\u3002</p></div><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">http </span><span style="color:#89DDFF;">{</span></span>
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
<span class="line"></span></code></pre></div><h2 id="ssl" tabindex="-1">ssl <a class="header-anchor" href="#ssl" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">ssl</p><p>ssl \u662F\u4E00\u79CD\u5B89\u5168\u7684\u901A\u4FE1\u534F\u8BAE\uFF0C\u5B83\u53EF\u4EE5\u4F7F\u7528\u52A0\u5BC6\u7684\u901A\u4FE1\u65B9\u5F0F\uFF0C\u4EE5\u4FDD\u8BC1\u6570\u636E\u7684\u5B89\u5168\u3002</p></div><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
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
<span class="line"></span></code></pre></div><h2 id="\u9759\u6001\u670D\u52A1" tabindex="-1">\u9759\u6001\u670D\u52A1 <a class="header-anchor" href="#\u9759\u6001\u670D\u52A1" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u9759\u6001\u670D\u52A1</p><p>\u9759\u6001\u670D\u52A1\u662F\u4E00\u79CD\u628A\u9759\u6001\u8D44\u6E90\u653E\u5728\u670D\u52A1\u5668\u4E0A\u7684\u65B9\u5F0F\u3002</p></div><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
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
<span class="line"></span></code></pre></div><h2 id="http-\u8F6C-https" tabindex="-1">http \u8F6C https <a class="header-anchor" href="#http-\u8F6C-https" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen       80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name  baidu.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        rewrite ^</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">*)</span><span style="color:#A6ACCD;">$ https://</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">server_name</span><span style="color:#89DDFF;">}$</span><span style="color:#A6ACCD;">1 permanent</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6216\u8005</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen      80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name www.baidu.club</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u6216\u8005\u5168\u90E8\u91CD\u5B9A\u5411</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> 301 https://</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">server_name</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request_uri</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,25),o=[e];function c(t,r,i,D,y,C){return n(),a("div",null,o)}const d=s(p,[["render",c]]);export{F as __pageData,d as default};
