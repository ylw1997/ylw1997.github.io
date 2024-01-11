import{_ as s,o as a,c as e,V as o}from"./chunks/framework.b1ba171e.js";const y=JSON.parse('{"title":"centos 安装 nodejs","description":"","frontmatter":{},"headers":[],"relativePath":"other/nodejs.md","filePath":"other/nodejs.md","lastUpdated":1672716031000}'),n={name:"other/nodejs.md"},l=o(`<h1 id="centos-安装-nodejs" tabindex="-1">centos 安装 nodejs <a class="header-anchor" href="#centos-安装-nodejs" aria-label="Permalink to &quot;centos 安装 nodejs&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>使用centos 的yum 安装nodejs</p></li><li><p>使用tar.gz包安装也可以,但没必要</p></li></ul></div><h2 id="查询nodejs的yum源" tabindex="-1">查询nodejs的yum源 <a class="header-anchor" href="#查询nodejs的yum源" aria-label="Permalink to &quot;查询nodejs的yum源&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">地址</p><ul><li><code>https://github.com/nodesource/distributions#rpminstall</code></li></ul></div><h2 id="设置地址" tabindex="-1">设置地址 <a class="header-anchor" href="#设置地址" aria-label="Permalink to &quot;设置地址&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-fsSL</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://rpm.nodesource.com/setup_19.x</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span></span></code></pre></div><h2 id="安装nodejs" tabindex="-1">安装nodejs <a class="header-anchor" href="#安装nodejs" aria-label="Permalink to &quot;安装nodejs&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nodejs</span></span></code></pre></div><h2 id="node-版本查看" tabindex="-1">node 版本查看 <a class="header-anchor" href="#node-版本查看" aria-label="Permalink to &quot;node 版本查看&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#v19.3.0</span></span></code></pre></div>`,10),t=[l];function c(p,r,i,d,h,u){return a(),e("div",null,t)}const m=s(n,[["render",c]]);export{y as __pageData,m as default};