import{_ as a,o as s,c as p,V as n}from"./chunks/framework.b1ba171e.js";const C=JSON.parse('{"title":"pnpm && monorepo","description":"","frontmatter":{},"headers":[],"relativePath":"front/other/pnpm.md","filePath":"front/other/pnpm.md","lastUpdated":1685957264000}'),o={name:"front/other/pnpm.md"},l=n(`<h1 id="pnpm-monorepo" tabindex="-1">pnpm &amp;&amp; monorepo <a class="header-anchor" href="#pnpm-monorepo" aria-label="Permalink to &quot;pnpm &amp;&amp; monorepo&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p><a href="https://pnpm.js.org/zh/" target="_blank" rel="noreferrer">pnpm</a></p></li><li><p>pnpm 是一个快速、零配置的 JavaScript 项目管理工具。</p></li><li><p>pnpm 使用硬链接和符号链接来将项目中的依赖安装到一个共享的存储空间中。当你安装一个依赖时，它就会被链接到这个存储空间中。这意味着，如果你有 100 个项目使用同一个版本的 lodash，那么这些 lodash 的文件只会在磁盘上存储一次。</p></li><li><p>monorepo 多包单仓库的开发模式</p></li><li><p>pnpm 自带 monorepo 的支持</p></li></ul></div><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm</span></span></code></pre></div><h2 id="初始化package-json" tabindex="-1">初始化package.json <a class="header-anchor" href="#初始化package-json" aria-label="Permalink to &quot;初始化package.json&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span></code></pre></div><h2 id="workspace-monorepo" tabindex="-1">workspace,monorepo <a class="header-anchor" href="#workspace-monorepo" aria-label="Permalink to &quot;workspace,monorepo&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 新建pnpm-workspace.yaml文件</span></span>
<span class="line"><span style="color:#FFCB6B;">touch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm-workspace.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 编辑pnpm-workspace.yaml文件</span></span>
<span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm-workspace.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 写入内容</span></span>
<span class="line"><span style="color:#FFCB6B;">packages:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># packages/* 表示packages文件夹下的所有文件夹</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">packages/*</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h2 id="pnpm-workspace-给子模块-安装依赖" tabindex="-1">pnpm workspace 给子模块 安装依赖 <a class="header-anchor" href="#pnpm-workspace-给子模块-安装依赖" aria-label="Permalink to &quot;pnpm workspace 给子模块 安装依赖&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 安装依赖</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--filter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@umijs/plugins</span></span></code></pre></div>`,10),e=[l];function t(c,r,i,m,h,y){return s(),p("div",null,e)}const u=a(o,[["render",t]]);export{C as __pageData,u as default};