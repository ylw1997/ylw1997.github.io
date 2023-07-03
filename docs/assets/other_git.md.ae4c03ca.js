import{_ as s,o as a,c as l,V as n}from"./chunks/framework.5a3bb230.js";const A=JSON.parse('{"title":"GIT","description":"","frontmatter":{},"headers":[],"relativePath":"other/git.md","filePath":"other/git.md","lastUpdated":1665194434000}'),o={name:"other/git.md"},p=n(`<h1 id="git" tabindex="-1">GIT <a class="header-anchor" href="#git" aria-label="Permalink to &quot;GIT&quot;">​</a></h1><h2 id="git-基础" tabindex="-1">git 基础 <a class="header-anchor" href="#git-基础" aria-label="Permalink to &quot;git 基础&quot;">​</a></h2><h3 id="基础配置" tabindex="-1">基础配置 <a class="header-anchor" href="#基础配置" aria-label="Permalink to &quot;基础配置&quot;">​</a></h3><p>配置 username 和 email</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">your_name</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.email</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">your_email</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h3 id="创建本地-git-仓库" tabindex="-1">创建本地 git 仓库 <a class="header-anchor" href="#创建本地-git-仓库" aria-label="Permalink to &quot;创建本地 git 仓库&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span></code></pre></div><h2 id="git-添加远程仓库" tabindex="-1">git 添加远程仓库 <a class="header-anchor" href="#git-添加远程仓库" aria-label="Permalink to &quot;git 添加远程仓库&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://gitee.com/yhyYLW/234.git</span></span></code></pre></div><h3 id="查看远程仓库" tabindex="-1">查看远程仓库 <a class="header-anchor" href="#查看远程仓库" aria-label="Permalink to &quot;查看远程仓库&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span></code></pre></div><h2 id="git-提交" tabindex="-1">git 提交 <a class="header-anchor" href="#git-提交" aria-label="Permalink to &quot;git 提交&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">message</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h3 id="添加文件" tabindex="-1">添加文件 <a class="header-anchor" href="#添加文件" aria-label="Permalink to &quot;添加文件&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span></code></pre></div><h3 id="推送" tabindex="-1">推送 <a class="header-anchor" href="#推送" aria-label="Permalink to &quot;推送&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">master</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><h3 id="删除远程仓库" tabindex="-1">删除远程仓库 <a class="header-anchor" href="#删除远程仓库" aria-label="Permalink to &quot;删除远程仓库&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span></span></code></pre></div><h3 id="删除本地仓库" tabindex="-1">删除本地仓库 <a class="header-anchor" href="#删除本地仓库" aria-label="Permalink to &quot;删除本地仓库&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span></code></pre></div><h3 id="强制推送" tabindex="-1">强制推送 <a class="header-anchor" href="#强制推送" aria-label="Permalink to &quot;强制推送&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span></span></code></pre></div><h3 id="推送日志" tabindex="-1">推送日志 <a class="header-anchor" href="#推送日志" aria-label="Permalink to &quot;推送日志&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--graph</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--pretty=format:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)&lt;%an&gt;%Creset</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--abbrev-commit</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">872</span><span style="color:#C3E88D;">a820</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> (HEAD -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin/master</span><span style="color:#A6ACCD;">) 更新中文,更新开始 </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">20</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hours</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ago</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">yangliwei</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">178</span><span style="color:#C3E88D;">f001</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">修复开始按钮</span><span style="color:#A6ACCD;"> (21 </span><span style="color:#C3E88D;">hours</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ago</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">yangliwei</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">b27102b</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fix:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">修复图片路径问题</span><span style="color:#A6ACCD;"> (22 </span><span style="color:#C3E88D;">hours</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ago</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">yangliwei</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#C3E88D;">f0188e</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">初始化文档</span><span style="color:#A6ACCD;"> (22 </span><span style="color:#C3E88D;">hours</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ago</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">yangliwei</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="git-分支" tabindex="-1">git 分支 <a class="header-anchor" href="#git-分支" aria-label="Permalink to &quot;git 分支&quot;">​</a></h2><h3 id="创建分支" tabindex="-1">创建分支 <a class="header-anchor" href="#创建分支" aria-label="Permalink to &quot;创建分支&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span></span></code></pre></div><h3 id="切换分支" tabindex="-1">切换分支 <a class="header-anchor" href="#切换分支" aria-label="Permalink to &quot;切换分支&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span></code></pre></div><h3 id="删除分支" tabindex="-1">删除分支 <a class="header-anchor" href="#删除分支" aria-label="Permalink to &quot;删除分支&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span></code></pre></div><h3 id="合并分支" tabindex="-1">合并分支 <a class="header-anchor" href="#合并分支" aria-label="Permalink to &quot;合并分支&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">merge</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span></code></pre></div><h3 id="设置代理" tabindex="-1">设置代理 <a class="header-anchor" href="#设置代理" aria-label="Permalink to &quot;设置代理&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http.proxy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://127.0.0.1:10809</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https.proxy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://127.0.0.1:10809</span></span></code></pre></div><h3 id="取消代理" tabindex="-1">取消代理 <a class="header-anchor" href="#取消代理" aria-label="Permalink to &quot;取消代理&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--unset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http.proxy</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--unset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https.proxy</span></span></code></pre></div><h2 id="git-问题解决" tabindex="-1">git 问题解决 <a class="header-anchor" href="#git-问题解决" aria-label="Permalink to &quot;git 问题解决&quot;">​</a></h2><h3 id="git-lf-和-crlf" tabindex="-1">git LF 和 CRLF <a class="header-anchor" href="#git-lf-和-crlf" aria-label="Permalink to &quot;git LF 和 CRLF&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>crlf 和 lf 是文本换行的不同方式：</p></li><li><p>crlf: &quot;\\r\\n&quot;, windows 系统的换行方式</p></li><li><p>lf: &quot;\\n&quot;, Linux 系统的换行方式</p></li></ul><p>在你使用 git 拉取代码的时候，git 会自动将代码当中与你当前系统不同的换行方式转化成你当前系统的换行方式，从而造成这种冲突。</p></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 修改 git 全局配置，禁止 git 自动将 lf 转换成 crlf</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">core.autocrlf</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span></code></pre></div><h2 id="gitignore-不生效" tabindex="-1">.gitignore 不生效 <a class="header-anchor" href="#gitignore-不生效" aria-label="Permalink to &quot;.gitignore 不生效&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>.gitignore 文件只会在第一次提交项目的时候写入缓存，也就是说如果你第一次提交项目时候忘记写.gitignore 文件，后来再补上是没有用的，.gitignore 文件是不生效的。因为在缓存中已经标记该项目不存在 ignore 文件了</p></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 清除缓存文件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--cached</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.gitignore重写缓存成功</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span></span></code></pre></div>`,46),e=[p];function t(c,r,i,C,y,D){return a(),l("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
