import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.FFX0tUBF.js";const o=JSON.parse('{"title":"zsh","description":"","frontmatter":{},"headers":[],"relativePath":"other/zsh.md","filePath":"other/zsh.md","lastUpdated":1718595028000}'),h={name:"other/zsh.md"},l=n(`<h1 id="zsh" tabindex="-1">zsh <a class="header-anchor" href="#zsh" aria-label="Permalink to &quot;zsh&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>zsh 是一款强大的 shell 工具，可以替代 bash</p></li><li><p>zsh 的配置文件是 <code>~/.zshrc</code></p></li></ul></div><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># mac</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ubuntu</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># centos</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh</span></span></code></pre></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><blockquote><p>设置 zsh 为默认 shell</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chsh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /bin/zsh</span></span></code></pre></div><blockquote><p>安装 oh-my-zsh</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># curl</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># wget</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -)&quot;</span></span></code></pre></div><h2 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># zsh-syntax-highlighting</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/zsh-users/zsh-syntax-highlighting.git</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${ZSH_CUSTOM</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">~</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.oh-my-zsh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">custom}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/plugins/zsh-syntax-highlighting</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># zsh-autosuggestions</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/zsh-users/zsh-autosuggestions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${ZSH_CUSTOM</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">~</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.oh-my-zsh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">custom}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/plugins/zsh-autosuggestions</span></span></code></pre></div><blockquote><p>配置插件</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编辑 ~/.zshrc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">plugins</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh-syntax-highlighting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh-autosuggestions</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> autojump</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> )</span></span></code></pre></div><h2 id="默认bash" tabindex="-1">默认bash <a class="header-anchor" href="#默认bash" aria-label="Permalink to &quot;默认bash&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看当前默认shell</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $SHELL</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看所有shell</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/shells</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切换默认shell</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chsh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /bin/zsh</span></span></code></pre></div><h2 id="安装autojump" tabindex="-1">安装autojump <a class="header-anchor" href="#安装autojump" aria-label="Permalink to &quot;安装autojump&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">autojump</p><ul><li><p>如果 Linux CentOS安装zsh插件提示/usr/bin/env: python: No such file or directory。</p></li><li><p>需要安装python</p></li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置系统默认 python 版本为 python3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alternatives</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/python3</span></span></code></pre></div></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://gitee.com/atiasn/autojump.git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> autojump</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./install.py</span></span></code></pre></div><blockquote><p>安装完成后，需要在.zshrc中添加以下内容</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[[ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /root/.autojump/etc/profile.d/autojump.sh ]] &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root/.autojump/etc/profile.d/autojump.sh</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoload</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -U</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compinit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">compinit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span></span></code></pre></div><h2 id="安装-figlet-cli" tabindex="-1">安装 figlet-cli <a class="header-anchor" href="#安装-figlet-cli" aria-label="Permalink to &quot;安装 figlet-cli&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> figlet-cli</span></span></code></pre></div><blockquote><p>配置zshrc</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># figlet</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">figlet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hi , YangLiwei&quot;</span></span></code></pre></div><blockquote><p>效果</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Last</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> login:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Mon</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 24</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 14:14:40</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2023</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.0.177</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  _</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   _</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      __</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   __</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                _</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     _</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              _</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)     </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\\</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /_</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   __</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      _____</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      \\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> V</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _\` </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> &#39;_ \\ / _\` | |   | \\ \\ /\\ / / _ \\ |</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> |  _  | |  _    | | (_| | | | | (_| | |___| |\\ V  V /  __/ |</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> |_| |_|_| ( )   |_|\\__,_|_| |_|\\__, |_____|_| \\_/\\_/ \\___|_|</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">           |/                   |___/</span></span></code></pre></div><h2 id="安装-zsh-nvm" tabindex="-1">安装 zsh-nvm <a class="header-anchor" href="#安装-zsh-nvm" aria-label="Permalink to &quot;安装 zsh-nvm&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装 zsh-nvm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/lukechilds/zsh-nvm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ZSH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/custom/plugins/zsh-nvm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置zshrc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">plugins</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh-syntax-highlighting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh-autosuggestions</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> autojump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh-nvm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 延迟启动</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NVM_LAZY_LOAD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">true</span></span></code></pre></div><h2 id="zshrc示例" tabindex="-1">zshrc示例 <a class="header-anchor" href="#zshrc示例" aria-label="Permalink to &quot;zshrc示例&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ZSH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.oh-my-zsh&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ZSH_THEME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;robbyrussell&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">plugins</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh-syntax-highlighting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh-autosuggestions</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> autojump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh-nvm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 延迟启动</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NVM_LAZY_LOAD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ZSH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/oh-my-zsh.sh</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [[ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /root/.autojump/etc/profile.d/autojump.sh ]] &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root/.autojump/etc/profile.d/autojump.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        autoload</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -U</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compinit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">compinit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">figlet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hi , YangLiwei&quot;</span></span></code></pre></div><h2 id="重新加载配置" tabindex="-1">重新加载配置 <a class="header-anchor" href="#重新加载配置" aria-label="Permalink to &quot;重新加载配置&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span></code></pre></div>`,32),t=[l];function p(k,e,d,r,F,g){return a(),i("div",null,t)}const y=s(h,[["render",p]]);export{o as __pageData,y as default};
