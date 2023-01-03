import{_ as s,o as a,c as n,d as l}from"./app.987649b4.js";const u=JSON.parse('{"title":"linux 常用命令","description":"","frontmatter":{},"headers":[{"level":2,"title":"查看文件","slug":"查看文件","link":"#查看文件","children":[]},{"level":2,"title":"查看端口","slug":"查看端口","link":"#查看端口","children":[]},{"level":2,"title":"查看进程","slug":"查看进程","link":"#查看进程","children":[]},{"level":2,"title":"查看内存","slug":"查看内存","link":"#查看内存","children":[]},{"level":2,"title":"查看磁盘","slug":"查看磁盘","link":"#查看磁盘","children":[]},{"level":2,"title":"查看 cpu","slug":"查看-cpu","link":"#查看-cpu","children":[]},{"level":2,"title":"查看系统版本","slug":"查看系统版本","link":"#查看系统版本","children":[]},{"level":2,"title":"查看当前路径","slug":"查看当前路径","link":"#查看当前路径","children":[]},{"level":2,"title":"tar 压缩解压","slug":"tar-压缩解压","link":"#tar-压缩解压","children":[]},{"level":2,"title":"查看文件夹大小","slug":"查看文件夹大小","link":"#查看文件夹大小","children":[]},{"level":2,"title":"查看文件大小","slug":"查看文件大小","link":"#查看文件大小","children":[]},{"level":2,"title":"查看文件夹下文件","slug":"查看文件夹下文件","link":"#查看文件夹下文件","children":[]},{"level":2,"title":"修改权限","slug":"修改权限","link":"#修改权限","children":[]}],"relativePath":"other/linux.md","lastUpdated":1663222400000}'),e={name:"other/linux.md"},p=l(`<h1 id="linux-常用命令" tabindex="-1">linux 常用命令 <a class="header-anchor" href="#linux-常用命令" aria-hidden="true">#</a></h1><h2 id="查看文件" tabindex="-1">查看文件 <a class="header-anchor" href="#查看文件" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看文件</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/hosts</span></span>
<span class="line"></span></code></pre></div><h2 id="查看端口" tabindex="-1">查看端口 <a class="header-anchor" href="#查看端口" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看端口</span></span>
<span class="line"><span style="color:#FFCB6B;">netstat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-anp</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8080</span></span>
<span class="line"></span></code></pre></div><h2 id="查看进程" tabindex="-1">查看进程 <a class="header-anchor" href="#查看进程" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看进程</span></span>
<span class="line"><span style="color:#FFCB6B;">ps</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ef</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">java</span></span>
<span class="line"></span></code></pre></div><h2 id="查看内存" tabindex="-1">查看内存 <a class="header-anchor" href="#查看内存" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看内存</span></span>
<span class="line"><span style="color:#FFCB6B;">free</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span></span>
<span class="line"></span></code></pre></div><h2 id="查看磁盘" tabindex="-1">查看磁盘 <a class="header-anchor" href="#查看磁盘" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看磁盘</span></span>
<span class="line"><span style="color:#FFCB6B;">df</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-h</span></span>
<span class="line"></span></code></pre></div><h2 id="查看-cpu" tabindex="-1">查看 cpu <a class="header-anchor" href="#查看-cpu" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看cpu</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/cpuinfo</span></span>
<span class="line"></span></code></pre></div><h2 id="查看系统版本" tabindex="-1">查看系统版本 <a class="header-anchor" href="#查看系统版本" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看系统版本</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/redhat-release</span></span>
<span class="line"></span></code></pre></div><h2 id="查看当前路径" tabindex="-1">查看当前路径 <a class="header-anchor" href="#查看当前路径" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">pwd</span></span>
<span class="line"></span></code></pre></div><h2 id="tar-压缩解压" tabindex="-1">tar 压缩解压 <a class="header-anchor" href="#tar-压缩解压" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 压缩</span></span>
<span class="line"><span style="color:#FFCB6B;">tar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-zcvf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test.tar.gz</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 解压</span></span>
<span class="line"><span style="color:#FFCB6B;">tar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-zxvf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test.tar.gz</span></span>
<span class="line"></span></code></pre></div><h2 id="查看文件夹大小" tabindex="-1">查看文件夹大小 <a class="header-anchor" href="#查看文件夹大小" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">du</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-sh</span></span>
<span class="line"></span></code></pre></div><h2 id="查看文件大小" tabindex="-1">查看文件大小 <a class="header-anchor" href="#查看文件大小" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-lh</span></span>
<span class="line"></span></code></pre></div><h2 id="查看文件夹下文件" tabindex="-1">查看文件夹下文件 <a class="header-anchor" href="#查看文件夹下文件" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-l</span></span>
<span class="line"></span></code></pre></div><h2 id="修改权限" tabindex="-1">修改权限 <a class="header-anchor" href="#修改权限" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">777</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test.sh</span></span>
<span class="line"></span></code></pre></div>`,27),t=[p];function c(o,i,r,d,h,C){return a(),n("div",null,t)}const g=s(e,[["render",c]]);export{u as __pageData,g as default};
