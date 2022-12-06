import{_ as s,o as n,c as a,d as l}from"./app.abd192b6.js";const D=JSON.parse('{"title":"openEuler \u7F16\u8BD1\u5B89\u88C5 Nginx","description":"","frontmatter":{},"headers":[{"level":2,"title":"1,\u5347\u7EA7\u7CFB\u7EDF\u8F6F\u4EF6","slug":"_1-\u5347\u7EA7\u7CFB\u7EDF\u8F6F\u4EF6","link":"#_1-\u5347\u7EA7\u7CFB\u7EDF\u8F6F\u4EF6","children":[]},{"level":2,"title":"2,\u5B89\u88C5\u4F9D\u8D56","slug":"_2-\u5B89\u88C5\u4F9D\u8D56","link":"#_2-\u5B89\u88C5\u4F9D\u8D56","children":[]},{"level":2,"title":"3,\u6DFB\u52A0\u7528\u6237","slug":"_3-\u6DFB\u52A0\u7528\u6237","link":"#_3-\u6DFB\u52A0\u7528\u6237","children":[]},{"level":2,"title":"4,\u4E0B\u8F7D\u6E90\u7801","slug":"_4-\u4E0B\u8F7D\u6E90\u7801","link":"#_4-\u4E0B\u8F7D\u6E90\u7801","children":[]},{"level":2,"title":"5,\u7F16\u8BD1\u5B89\u88C5","slug":"_5-\u7F16\u8BD1\u5B89\u88C5","link":"#_5-\u7F16\u8BD1\u5B89\u88C5","children":[]},{"level":2,"title":"6,\u7F16\u8BD1","slug":"_6-\u7F16\u8BD1","link":"#_6-\u7F16\u8BD1","children":[]},{"level":2,"title":"7,\u542F\u52A8","slug":"_7-\u542F\u52A8","link":"#_7-\u542F\u52A8","children":[]},{"level":2,"title":"8,\u67E5\u770B\u8FDB\u7A0B","slug":"_8-\u67E5\u770B\u8FDB\u7A0B","link":"#_8-\u67E5\u770B\u8FDB\u7A0B","children":[]},{"level":2,"title":"9,\u67E5\u770B\u7AEF\u53E3","slug":"_9-\u67E5\u770B\u7AEF\u53E3","link":"#_9-\u67E5\u770B\u7AEF\u53E3","children":[]},{"level":2,"title":"10,\u67E5\u770B\u65E5\u5FD7","slug":"_10-\u67E5\u770B\u65E5\u5FD7","link":"#_10-\u67E5\u770B\u65E5\u5FD7","children":[]},{"level":2,"title":"11,\u914D\u7F6E\u6587\u4EF6","slug":"_11-\u914D\u7F6E\u6587\u4EF6","link":"#_11-\u914D\u7F6E\u6587\u4EF6","children":[]}],"relativePath":"other/openEuler.md","lastUpdated":null}'),e={name:"other/openEuler.md"},p=l(`<h1 id="openeuler-\u7F16\u8BD1\u5B89\u88C5-nginx" tabindex="-1">openEuler \u7F16\u8BD1\u5B89\u88C5 Nginx <a class="header-anchor" href="#openeuler-\u7F16\u8BD1\u5B89\u88C5-nginx" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><ul><li>\u672C\u6587\u57FA\u4E8E openEuler 20.03</li><li>centos \u7B49\u7CFB\u7EDF\u4E5F\u53EF\u4EE5\u53C2\u8003</li></ul></div><h2 id="_1-\u5347\u7EA7\u7CFB\u7EDF\u8F6F\u4EF6" tabindex="-1">1,\u5347\u7EA7\u7CFB\u7EDF\u8F6F\u4EF6 <a class="header-anchor" href="#_1-\u5347\u7EA7\u7CFB\u7EDF\u8F6F\u4EF6" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo yum -y update</span></span>
<span class="line"></span></code></pre></div><h2 id="_2-\u5B89\u88C5\u4F9D\u8D56" tabindex="-1">2,\u5B89\u88C5\u4F9D\u8D56 <a class="header-anchor" href="#_2-\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo yum -y install gcc gcc-c++ make cmake zlib zlib-devel openssl openssl-devel pcre-devel vim net-tools man wget tar</span></span>
<span class="line"></span></code></pre></div><h2 id="_3-\u6DFB\u52A0\u7528\u6237" tabindex="-1">3,\u6DFB\u52A0\u7528\u6237 <a class="header-anchor" href="#_3-\u6DFB\u52A0\u7528\u6237" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u6DFB\u52A0\u7528\u6237</p><ul><li>\u5982\u679C\u5DF2\u7ECF\u6709 nginx \u7528\u6237,\u53EF\u4EE5\u8DF3\u8FC7\u8FD9\u4E00\u6B65</li><li>\u53EF\u4EE5\u7528 <code>cat /etc/passwd</code> \u67E5\u770B\u7528\u6237</li><li>\u53EF\u4EE5\u7528 <code>groups</code> \u67E5\u770B\u5F53\u524D\u7528\u6237\u6240\u5728\u7684\u7EC4</li></ul></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">groupadd nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">useradd nginx -g nginx -s /sbin/nologin -M</span></span>
<span class="line"></span></code></pre></div><h2 id="_4-\u4E0B\u8F7D\u6E90\u7801" tabindex="-1">4,\u4E0B\u8F7D\u6E90\u7801 <a class="header-anchor" href="#_4-\u4E0B\u8F7D\u6E90\u7801" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo wget https://nginx.org/download/nginx-1.20.1.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sudo tar -zxvf nginx-1.20.1.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> nginx-1.20.1</span></span>
<span class="line"></span></code></pre></div><h2 id="_5-\u7F16\u8BD1\u5B89\u88C5" tabindex="-1">5,\u7F16\u8BD1\u5B89\u88C5 <a class="header-anchor" href="#_5-\u7F16\u8BD1\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u7F16\u8BD1\u5B89\u88C5</p><ul><li>prefix \u6307\u5B9A\u5B89\u88C5\u76EE\u5F55</li><li>user \u6307\u5B9A\u7528\u6237</li><li>group \u6307\u5B9A\u7528\u6237\u7EC4</li><li>with-http_stub_status_module \u5F00\u542F\u72B6\u6001\u6A21\u5757</li><li>with-http_ssl_module \u5F00\u542F ssl \u6A21\u5757</li><li>with-http_realip_module \u5F00\u542F\u771F\u5B9E ip \u6A21\u5757</li><li>with-http_gzip_static_module \u5F00\u542F gzip \u6A21\u5757</li><li>with-file-aio \u5F00\u542F\u5F02\u6B65 io</li></ul></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">./configure --prefix=/opt/nginx  \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> --user=adminweihuds --group=adminweihuds \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> --with-http_stub_status_module --with-http_ssl_module \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> --with-http_realip_module --with-http_gzip_static_module \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> --with-file-aio </span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u67E5\u770B\u662F\u5426\u6210\u529F</p><p>echo $?</p><p>// \u6210\u529F\u4F1A\u663E\u793A\u6570\u5B57\u96F6</p><p>0</p></div><h2 id="_6-\u7F16\u8BD1" tabindex="-1">6,\u7F16\u8BD1 <a class="header-anchor" href="#_6-\u7F16\u8BD1" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo make -j4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sudo make -j4 install</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u67E5\u770B\u662F\u5426\u6210\u529F</p><p>sudo /opt/nginx/sbin/nginx -t</p><p>// \u6210\u529F\u4F1A\u663E\u793A</p><p>nginx: the configuration file /opt/nginx/conf/nginx.conf syntax is ok</p><p>nginx: configuration file /opt/nginx/conf/nginx.conf test is successful</p></div><h2 id="_7-\u542F\u52A8" tabindex="-1">7,\u542F\u52A8 <a class="header-anchor" href="#_7-\u542F\u52A8" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo /opt/nginx/sbin/nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sudo /opt/nginx/sbin/nginx -s reload // \u91CD\u542F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sudo /opt/nginx/sbin/nginx -s stop // \u505C\u6B62</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sudo /opt/nginx/sbin/nginx -s quit // \u9000\u51FA</span></span>
<span class="line"></span></code></pre></div><h2 id="_8-\u67E5\u770B\u8FDB\u7A0B" tabindex="-1">8,\u67E5\u770B\u8FDB\u7A0B <a class="header-anchor" href="#_8-\u67E5\u770B\u8FDB\u7A0B" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">ps -ef </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep nginx</span></span>
<span class="line"></span></code></pre></div><h2 id="_9-\u67E5\u770B\u7AEF\u53E3" tabindex="-1">9,\u67E5\u770B\u7AEF\u53E3 <a class="header-anchor" href="#_9-\u67E5\u770B\u7AEF\u53E3" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">netstat -tunlp </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep nginx</span></span>
<span class="line"></span></code></pre></div><h2 id="_10-\u67E5\u770B\u65E5\u5FD7" tabindex="-1">10,\u67E5\u770B\u65E5\u5FD7 <a class="header-anchor" href="#_10-\u67E5\u770B\u65E5\u5FD7" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo tail -f /opt/nginx/logs/error.log</span></span>
<span class="line"></span></code></pre></div><h2 id="_11-\u914D\u7F6E\u6587\u4EF6" tabindex="-1">11,\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#_11-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="language-bash /opt/nginx/conf/nginx.conf"><button title="Copy Code" class="copy"></button><span class="lang">bash /opt/nginx/conf/nginx.conf</span><pre class="shiki"><code><span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#user  nobody;</span></span>
<span class="line"><span style="color:#A6ACCD;">worker_processes  1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">events </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    worker_connections  1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">http </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    include       mime.types</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default_type  application/octet-stream</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    sendfile        on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    keepalive_timeout  65</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen       80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name  hlmall.wandinghk.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        rewrite ^</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">*)</span><span style="color:#A6ACCD;">$ https://</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">server_name</span><span style="color:#89DDFF;">}$</span><span style="color:#A6ACCD;">1 permanent</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen       443 ssl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name  hlmall.wandinghk.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        ssl_certificate      /opt/nginx/conf/hlmall.pem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ssl_certificate_key  /opt/nginx/conf/hlmall.key</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        ssl_session_cache    shared:SSL:1m</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ssl_session_timeout  5m</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        ssl_ciphers  HIGH:</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">aNULL:</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">MD5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ssl_prefer_server_ciphers  on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">            location / </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                root   /app/vue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                index  index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,28),o=[p];function i(c,t,r,d,h,C){return n(),a("div",null,o)}const y=s(e,[["render",i]]);export{D as __pageData,y as default};
