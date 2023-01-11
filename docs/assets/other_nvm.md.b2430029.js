import{_ as s,o as n,c as a,d as l}from"./app.9637bb6b.js";const A=JSON.parse('{"title":"NVM nodejs管理工具","description":"","frontmatter":{},"headers":[{"level":2,"title":"windows 安装","slug":"windows-安装","link":"#windows-安装","children":[]},{"level":2,"title":"linux 安装","slug":"linux-安装","link":"#linux-安装","children":[]},{"level":2,"title":"安装nodejs 版本","slug":"安装nodejs-版本","link":"#安装nodejs-版本","children":[]},{"level":2,"title":"使用 nodejs 版本","slug":"使用-nodejs-版本","link":"#使用-nodejs-版本","children":[]},{"level":2,"title":"其他指令","slug":"其他指令","link":"#其他指令","children":[]}],"relativePath":"other/nvm.md","lastUpdated":null}'),o={name:"other/nvm.md"},p=l(`<h1 id="nvm-nodejs管理工具" tabindex="-1">NVM nodejs管理工具 <a class="header-anchor" href="#nvm-nodejs管理工具" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>nvm 是一个管理 nodejs 版本的工具</p></li><li><p>可以让多个nodejs 版本在一个系统内共存</p></li><li><p>解决旧项目与新项目 nodejs 冲突问题</p></li></ul></div><h2 id="windows-安装" tabindex="-1">windows 安装 <a class="header-anchor" href="#windows-安装" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">windows</p><ul><li>一定要卸载已安装的 NodeJS，否则会发生冲突。然后下载 nvm-windows 最新安装包，直接安装即可。</li></ul></div><h2 id="linux-安装" tabindex="-1">linux 安装 <a class="header-anchor" href="#linux-安装" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">linux</p><ul><li><p>github 地址 <code>https://github.com/nvm-sh/nvm</code></p></li><li><p>1, 运行安装命令</p></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/nvm-sh/nvm/v0.</span><span style="color:#F78C6C;">39.3</span><span style="color:#C3E88D;">/install.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 或者</span></span>
<span class="line"><span style="color:#FFCB6B;">wget</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-qO-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/nvm-sh/nvm/v0.</span><span style="color:#F78C6C;">39.3</span><span style="color:#C3E88D;">/install.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></div><ul><li>2, linux 故障排除 <code>nvm: command not found</code></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.bashrc</span></span>
<span class="line"></span></code></pre></div><h2 id="安装nodejs-版本" tabindex="-1">安装nodejs 版本 <a class="header-anchor" href="#安装nodejs-版本" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 安装nodejs 12 并 使用 12 版本nodejs</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Now using node v12.22.6 (npm v6.14.5)</span></span>
<span class="line"></span></code></pre></div><h2 id="使用-nodejs-版本" tabindex="-1">使用 nodejs 版本 <a class="header-anchor" href="#使用-nodejs-版本" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 使用 12 版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="其他指令" tabindex="-1">其他指令 <a class="header-anchor" href="#其他指令" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uninstall</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">6.11.0</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">移除</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">6.11.0</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ls</span><span style="color:#A6ACCD;">                   </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">查看目前已安装的</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">及当前所使用的</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ls-remote</span><span style="color:#A6ACCD;">            </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">查看目前线上所能安装的所有</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">6.11.0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">使用</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">6.11.0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">作为预设使用的</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">版本</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,14),e=[p];function t(c,r,i,C,d,y){return n(),a("div",null,e)}const D=s(o,[["render",t]]);export{A as __pageData,D as default};
