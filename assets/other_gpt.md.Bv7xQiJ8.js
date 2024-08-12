import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.FFX0tUBF.js";const l="/assets/ollama.CPRQ6vE7.png",p="/assets/openwebui.CDkRLmLh.png",E=JSON.parse('{"title":"本地部署自己的gpt","description":"","frontmatter":{},"headers":[],"relativePath":"other/gpt.md","filePath":"other/gpt.md","lastUpdated":1723441040000}'),t={name:"other/gpt.md"},h=n(`<h1 id="本地部署自己的gpt" tabindex="-1">本地部署自己的gpt <a class="header-anchor" href="#本地部署自己的gpt" aria-label="Permalink to &quot;本地部署自己的gpt&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>使用ollama 部署本地gpt</li><li>使用openwebui 图形化界面</li><li>使用nginx代理openwebui</li></ul></div><h2 id="安装ollama" tabindex="-1">安装ollama <a class="header-anchor" href="#安装ollama" aria-label="Permalink to &quot;安装ollama&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装ollama</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://ollama.com/download/linux</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://ollama.com/install.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sh</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">可能会遇到网络错误下载不下来或者太慢,可以离线安装ollama</p><ul><li><p>下载安装包</p></li><li><p>1,进入<a href="https://github.com/ollama/ollama/releases/" target="_blank" rel="noreferrer">https://github.com/ollama/ollama/releases/</a></p></li><li><p>2,找到最新版本,下载ollama-linux-amd64 版本</p></li><li><p>3,上传到服务器</p></li></ul><p><img src="`+l+`" alt="ollama"></p><ul><li>install.sh 脚本</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Downloading ollama...&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 在install.sh的第65行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#curl --fail --show-error --location --progress-bar -o $TEMP_DIR/ollama &quot;https://ollama.com/download/ollama-linux-\${ARCH}\${VER_PARAM}&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Installing ollama to </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$BINDIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">...&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$SUDO install -o0 -g0 -m755 -d $BINDIR</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 在install.sh的第73行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#$SUDO install -o0 -g0 -m755 $TEMP_DIR/ollama $BINDIR/ollama</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$SUDO install -o0 -g0 -m755 ./ollama-linux-amd64  $BINDIR/ollama</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span></code></pre></div><ul><li>运行install.sh脚本</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行install.sh脚本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./install.sh</span></span></code></pre></div></div><h2 id="下载并运行模型" tabindex="-1">下载并运行模型 <a class="header-anchor" href="#下载并运行模型" aria-label="Permalink to &quot;下载并运行模型&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下载并运行模型</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ollama</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qwen2</span></span></code></pre></div><h2 id="ollama-管理命令" tabindex="-1">ollama 管理命令 <a class="header-anchor" href="#ollama-管理命令" aria-label="Permalink to &quot;ollama 管理命令&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ollama</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重启ollama</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systmctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ollama</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看ollama状态</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ollama</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 关闭ollama</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ollama</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动ollama</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ollama</span></span></code></pre></div><h2 id="安装openwebui" tabindex="-1">安装openwebui <a class="header-anchor" href="#安装openwebui" aria-label="Permalink to &quot;安装openwebui&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">安装openwebui</p><ul><li>安装openwebui,这里使用本地ollama</li><li><a href="https://docs.openwebui.com/getting-started/" target="_blank" rel="noreferrer">https://docs.openwebui.com/getting-started/</a></li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3000:8080</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add-host=host.docker.internal:host-gateway</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> open-webui:/app/backend/data</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> open-webui</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> always</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ghcr.io/open-webui/open-webui:main</span></span></code></pre></div></div><p><img src="`+p+`" alt="openwebui"></p><h2 id="nginx代理" tabindex="-1">nginx代理 <a class="header-anchor" href="#nginx代理" aria-label="Permalink to &quot;nginx代理&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">nginx代理的问题</p><ul><li>nginx 代理很简单,这里遇到一个问题:</li><li>1,回答完问题后,无法输入下一个问题</li><li>2,刷新后出现[object Object]错误</li><li>解决办法:</li></ul></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#nginx 配置增加如下配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># WebSocket support</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Upgrade</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $http_upgrade;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Connection</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;upgrade&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>完整配置如下</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        listen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       443</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        server_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  xxxx.com</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #charset koi8-r;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        access_log</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  logs/nginx_sys_h5.log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ssl_certificate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      /etc/nginx/conf/xxx.pem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ssl_certificate_key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  /etc/nginx/conf/xxx.key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ssl_session_timeout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1440m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ssl_protocols</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TLSv1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TLSv1.1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TLSv1.2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TLSv1.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ssl_prefer_server_ciphers</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ssl_session_cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    shared:SSL:1m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ssl_ciphers</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  HIGH:!aNULL:!MD5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            proxy_pass</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://xxx:xx/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $host;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $host;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> X-Real-IP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> X-Forwarded-For</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> X-Forwarded-Proto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $scheme;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            proxy_buffering</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> off</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            proxy_cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> off</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            proxy_http_version</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Upgrade</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $http_upgrade;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Connection</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;upgrade&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,17),e=[h];function k(r,d,o,F,g,c){return a(),i("div",null,e)}const C=s(t,[["render",k]]);export{E as __pageData,C as default};
