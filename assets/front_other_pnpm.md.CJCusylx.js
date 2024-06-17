import{_ as s,c as a,o as p,a4 as i}from"./chunks/framework.FFX0tUBF.js";const g=JSON.parse('{"title":"pnpm && monorepo","description":"","frontmatter":{},"headers":[],"relativePath":"front/other/pnpm.md","filePath":"front/other/pnpm.md","lastUpdated":1718595028000}'),n={name:"front/other/pnpm.md"},e=i(`<h1 id="pnpm-monorepo" tabindex="-1">pnpm &amp;&amp; monorepo <a class="header-anchor" href="#pnpm-monorepo" aria-label="Permalink to &quot;pnpm &amp;&amp; monorepo&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p><a href="https://pnpm.js.org/zh/" target="_blank" rel="noreferrer">pnpm</a></p></li><li><p>pnpm 是一个快速、零配置的 JavaScript 项目管理工具。</p></li><li><p>pnpm 使用硬链接和符号链接来将项目中的依赖安装到一个共享的存储空间中。当你安装一个依赖时，它就会被链接到这个存储空间中。这意味着，如果你有 100 个项目使用同一个版本的 lodash，那么这些 lodash 的文件只会在磁盘上存储一次。</p></li><li><p>monorepo 多包单仓库的开发模式</p></li><li><p>pnpm 自带 monorepo 的支持</p></li></ul></div><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span></span></code></pre></div><h2 id="初始化package-json" tabindex="-1">初始化package.json <a class="header-anchor" href="#初始化package-json" aria-label="Permalink to &quot;初始化package.json&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><h2 id="workspace-monorepo" tabindex="-1">workspace,monorepo <a class="header-anchor" href="#workspace-monorepo" aria-label="Permalink to &quot;workspace,monorepo&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 新建pnpm-workspace.yaml文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">touch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm-workspace.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编辑pnpm-workspace.yaml文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm-workspace.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 写入内容</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">packages:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # packages/* 表示packages文件夹下的所有文件夹</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;packages/*&#39;</span></span></code></pre></div><h2 id="pnpm-workspace-给子模块-安装依赖" tabindex="-1">pnpm workspace 给子模块 安装依赖 <a class="header-anchor" href="#pnpm-workspace-给子模块-安装依赖" aria-label="Permalink to &quot;pnpm workspace 给子模块 安装依赖&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --filter</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;app1&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @umijs/plugins</span></span></code></pre></div>`,10),l=[e];function t(h,o,r,k,c,d){return p(),a("div",null,l)}const F=s(n,[["render",t]]);export{g as __pageData,F as default};
