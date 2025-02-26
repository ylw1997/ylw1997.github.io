import{_ as a,c as i,o as t,ag as e}from"./chunks/framework.BZemHgQ6.js";const g=JSON.parse('{"title":"wsl","description":"","frontmatter":{},"headers":[],"relativePath":"other/wsl.md","filePath":"other/wsl.md","lastUpdated":1740542037000}'),l={name:"other/wsl.md"};function h(n,s,d,p,k,r){return t(),i("div",null,s[0]||(s[0]=[e(`<h1 id="wsl" tabindex="-1">wsl <a class="header-anchor" href="#wsl" aria-label="Permalink to &quot;wsl&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">介绍</p><ul><li><p><a href="https://learn.microsoft.com/zh-cn/windows/wsl/about" target="_blank" rel="noreferrer">Windows Subsystem for Linux</a> (WSL) 是一个为在 Windows 10 上能够原生运行 Linux 二进制可执行文件 ( ELF 格式) 的兼容层。</p></li><li><p>wsl1 和 wsl2 对比,推荐使用 wsl2</p></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">功能</th><th style="text-align:left;">wsl1</th><th style="text-align:left;">wsl2</th></tr></thead><tbody><tr><td style="text-align:left;">Windows 和 Linux 之间的集成</td><td style="text-align:left;">✅</td><td style="text-align:left;">✅</td></tr><tr><td style="text-align:left;">启动时间短</td><td style="text-align:left;">✅</td><td style="text-align:left;">✅</td></tr><tr><td style="text-align:left;">与传统虚拟机相比，占用的资源量少</td><td style="text-align:left;">✅</td><td style="text-align:left;">✅</td></tr><tr><td style="text-align:left;">可以与当前版本的 VMware 和 VirtualBox 一起运行</td><td style="text-align:left;">✅</td><td style="text-align:left;">✅</td></tr><tr><td style="text-align:left;">托管 VM</td><td style="text-align:left;">❌</td><td style="text-align:left;">✅</td></tr><tr><td style="text-align:left;">完整的 Linux 内核</td><td style="text-align:left;">❌</td><td style="text-align:left;">✅</td></tr><tr><td style="text-align:left;">完全的系统调用兼容性</td><td style="text-align:left;">❌</td><td style="text-align:left;">✅</td></tr><tr><td style="text-align:left;">跨 OS 文件系统的性能</td><td style="text-align:left;">✅</td><td style="text-align:left;">❌</td></tr></tbody></table></div><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wsl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --install</span></span></code></pre></div><h2 id="安装其他发行版" tabindex="-1">安装其他发行版 <a class="header-anchor" href="#安装其他发行版" aria-label="Permalink to &quot;安装其他发行版&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wsl.exe</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Distribution</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h2 id="列出可用的发行版" tabindex="-1">列出可用的发行版 <a class="header-anchor" href="#列出可用的发行版" aria-label="Permalink to &quot;列出可用的发行版&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wsl.exe</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --list</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --online</span></span></code></pre></div><h2 id="列出已安装的发行版" tabindex="-1">列出已安装的发行版 <a class="header-anchor" href="#列出已安装的发行版" aria-label="Permalink to &quot;列出已安装的发行版&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wsl.exe</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --list</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --all</span></span></code></pre></div><h2 id="卸载发行版" tabindex="-1">卸载发行版 <a class="header-anchor" href="#卸载发行版" aria-label="Permalink to &quot;卸载发行版&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wsl.exe</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --uninstall</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Distribution</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h2 id="启动发行版" tabindex="-1">启动发行版 <a class="header-anchor" href="#启动发行版" aria-label="Permalink to &quot;启动发行版&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wsl.exe</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Distribution</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h2 id="设置默认发行版" tabindex="-1">设置默认发行版 <a class="header-anchor" href="#设置默认发行版" aria-label="Permalink to &quot;设置默认发行版&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wsl.exe</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --set-default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Distribution</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># wsl --set-version Ubuntu-22.04 2</span></span></code></pre></div><h2 id="设置发行版版本" tabindex="-1">设置发行版版本 <a class="header-anchor" href="#设置发行版版本" aria-label="Permalink to &quot;设置发行版版本&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wsl.exe</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --set-version</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Distribution</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Numbe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h2 id="取消注册" tabindex="-1">取消注册 <a class="header-anchor" href="#取消注册" aria-label="Permalink to &quot;取消注册&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wsl.exe</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --unregister</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Distribution</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h2 id="强制停止wsl" tabindex="-1">强制停止wsl <a class="header-anchor" href="#强制停止wsl" aria-label="Permalink to &quot;强制停止wsl&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># cmd管理员权限</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">net</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> LxssManager</span></span></code></pre></div><h2 id="重启wsl" tabindex="-1">重启wsl <a class="header-anchor" href="#重启wsl" aria-label="Permalink to &quot;重启wsl&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># cmd管理员权限</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">net</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> LxssManager</span></span></code></pre></div>`,25)]))}const c=a(l,[["render",h]]);export{g as __pageData,c as default};
