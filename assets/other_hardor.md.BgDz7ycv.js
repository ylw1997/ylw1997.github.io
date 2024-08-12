import{_ as s,c as i,o as a,a4 as h}from"./chunks/framework.FFX0tUBF.js";const c=JSON.parse('{"title":"Hardor","description":"","frontmatter":{},"headers":[],"relativePath":"other/hardor.md","filePath":"other/hardor.md","lastUpdated":1723441040000}'),n={name:"other/hardor.md"},t=h(`<h1 id="hardor" tabindex="-1">Hardor <a class="header-anchor" href="#hardor" aria-label="Permalink to &quot;Hardor&quot;">​</a></h1><h2 id="hardor介绍" tabindex="-1">Hardor介绍 <a class="header-anchor" href="#hardor介绍" aria-label="Permalink to &quot;Hardor介绍&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">介绍</p><ul><li><p>Hardor 是一个基于 <a href="https://www.docker.com/" target="_blank" rel="noreferrer">Docker</a> 的开源项目，它可以帮助你快速搭建一个私有化<a href="https://www.docker.com/" target="_blank" rel="noreferrer">Docker</a>镜像仓库，你可以在这个集群上部署你的应用，也可以在这个集群上运行你的服务。</p></li><li><p>Hardor 提供了一个简单的Web界面，你可以在这个界面上管理你的集群，包括镜像管理、容器管理、节点管理、用户管理等。</p></li></ul></div><h2 id="安装条件" tabindex="-1">安装条件 <a class="header-anchor" href="#安装条件" aria-label="Permalink to &quot;安装条件&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">条件</p><ul><li><p>一台或多台服务器，每台服务器都需要安装 <a href="https://www.docker.com/" target="_blank" rel="noreferrer">Docker</a> 和 <a href="https://docs.docker.com/compose/" target="_blank" rel="noreferrer">Docker Compose</a>。</p></li><li><p>硬件配置：每台服务器至少需要 2GB 内存，2 核 CPU，20GB 硬盘空间。</p></li></ul></div><h2 id="_1-下载安装包" tabindex="-1">1,下载安装包 <a class="header-anchor" href="#_1-下载安装包" aria-label="Permalink to &quot;1,下载安装包&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下载安装包, 下载地址: https://github.com/goharbor/harbor/releases ,下载offline安装包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/goharbor/harbor/releases/download/v2.8.0/harbor-offline-installer-v2.8.0.tgz</span></span></code></pre></div><h2 id="_2-解压安装包" tabindex="-1">2,解压安装包 <a class="header-anchor" href="#_2-解压安装包" aria-label="Permalink to &quot;2,解压安装包&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xzvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> harbor-offline-installer-v2.8.0.tgz</span></span></code></pre></div><h2 id="_3-修改配置文件" tabindex="-1">3,修改配置文件 <a class="header-anchor" href="#_3-修改配置文件" aria-label="Permalink to &quot;3,修改配置文件&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入解压后的目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> harbor</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 复制配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> harbor.yml.tmpl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> harbor.yml</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修改配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> harbor.yml</span></span></code></pre></div><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置访问地址</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">hostname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">yangliwei.top</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置端口</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # port for http, default is 80. If https enabled, this port will redirect to https port</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7000</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置https</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">https</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # https port for harbor, default is 443</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7443</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # The path of cert and key files for nginx</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  certificate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/root/apps/nginx/conf.d/ssh/certificate.crt</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  private_key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/root/apps/nginx/conf.d/ssh/private.key</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置admin密码</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">harbor_admin_password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Harbor12345</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置数据库</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">database</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # The password for the root user of Harbor DB. Change this before any production use.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">123456</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置数据存储</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">data_volume</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/root/apps/harbor/data</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 其他不用修改</span></span></code></pre></div><h2 id="_4-安装" tabindex="-1">4,安装 <a class="header-anchor" href="#_4-安装" aria-label="Permalink to &quot;4,安装&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./install.sh</span></span></code></pre></div><blockquote><p>查看运行状态</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ps</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@localhost checkout-admin]# docker ps </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> goharbor</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fe582573ac6a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   goharbor/harbor-jobservice:v2.8.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;/harbor/entrypoint.…&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   16</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hours</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ago</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 15</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hours</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (healthy)                                                                                              harbor-jobservice</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">d8e56940829c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   goharbor/nginx-photon:v2.8.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         &quot;nginx -g &#39;daemon of…&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   16</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hours</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ago</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 15</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hours</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (healthy)   0.0.0.0:7000-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">8080/tcp, :::7000-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">8080/tcp, 0.0.0.0:7443-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">8443/tcp, :::7443-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">8443/tcp       nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">33c2ec192b4b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   goharbor/harbor-core:v2.8.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          &quot;/harbor/entrypoint.…&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   16</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hours</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ago</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 15</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hours</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (healthy)                                                                                              harbor-core</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eb6a6e86bde4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   goharbor/registry-photon:v2.8.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;/home/harbor/entryp…&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   16</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hours</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ago</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 15</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hours</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (healthy)                                                                                              registry</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">e082ae24e9b1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   goharbor/harbor-registryctl:v2.8.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   &quot;/home/harbor/start.…&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   16</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hours</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ago</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 15</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hours</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (healthy)                                                                                              registryctl</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0cc677b0d61f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   goharbor/harbor-db:v2.8.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;/docker-entrypoint.…&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   16</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hours</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ago</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 15</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hours</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (healthy)                                                                                              harbor-db</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0511077ce7d6</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   goharbor/harbor-portal:v2.8.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;nginx -g &#39;daemon of…&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   16</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hours</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ago</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 15</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hours</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (healthy)                                                                                              harbor-portal</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">159bb041de91</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   goharbor/redis-photon:v2.8.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         &quot;redis-server /etc/r…&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   16</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hours</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ago</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 15</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hours</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (healthy)                                                                                              redis</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0212e519e233</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   goharbor/harbor-log:v2.8.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           &quot;/bin/sh -c /usr/loc…&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   16</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hours</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ago</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 15</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hours</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (healthy)   127.0.0.1:1514-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">10514/tcp                                                                  harbor-log</span></span></code></pre></div><h2 id="_5-访问" tabindex="-1">5,访问 <a class="header-anchor" href="#_5-访问" aria-label="Permalink to &quot;5,访问&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 访问地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https://yangliwei.top:7443</span></span></code></pre></div><p><img src="https://article.biliimg.com/bfs/article/09b2172151c2e6a8326242fb8c2bc856f8074e53.png" alt="harbor"></p><h2 id="_6-配置docker-仓库" tabindex="-1">6,配置docker 仓库 <a class="header-anchor" href="#_6-配置docker-仓库" aria-label="Permalink to &quot;6,配置docker 仓库&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置docker仓库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/docker/daemon.json</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;insecure-registries&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://yangliwei.top:7443&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_7-重启docker" tabindex="-1">7,重启docker <a class="header-anchor" href="#_7-重启docker" aria-label="Permalink to &quot;7,重启docker&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span></span></code></pre></div><h2 id="_8-登录" tabindex="-1">8,登录 <a class="header-anchor" href="#_8-登录" aria-label="Permalink to &quot;8,登录&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 登录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> login</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://yangliwei.top:7443</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Username:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> admin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Password:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Harbor12345</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 这个是你在安装的时候配置的密码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Login</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Succeeded</span></span></code></pre></div><h2 id="_9-推送镜像" tabindex="-1">9,推送镜像 <a class="header-anchor" href="#_9-推送镜像" aria-label="Permalink to &quot;9,推送镜像&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 推送镜像, 这里我推送的是nginx镜像</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx:1.19</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yangliwei.top:7443/library/nginx:1.19</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yangliwei.top:7443/library/nginx:1.19</span></span></code></pre></div><p><img src="https://article.biliimg.com/bfs/article/f4e1f5ff804bed2f64808bff41cb8e6fe40c8b0a.png" alt="harbor"></p><h2 id="_10-从私有仓库拉取镜像" tabindex="-1">10,从私有仓库拉取镜像 <a class="header-anchor" href="#_10-从私有仓库拉取镜像" aria-label="Permalink to &quot;10,从私有仓库拉取镜像&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 从私有仓库拉取镜像</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yangliwei.top:7443/library/nginx:1.19</span></span></code></pre></div>`,31),l=[t];function p(e,k,r,d,o,F){return a(),i("div",null,l)}const y=s(n,[["render",p]]);export{c as __pageData,y as default};