import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.FFX0tUBF.js";const c=JSON.parse('{"title":"linux 磁盘监控预警","description":"","frontmatter":{},"headers":[],"relativePath":"other/linux-disk.md","filePath":"other/linux-disk.md","lastUpdated":1723441040000}'),h={name:"other/linux-disk.md"},l=n(`<h1 id="linux-磁盘监控预警" tabindex="-1">linux 磁盘监控预警 <a class="header-anchor" href="#linux-磁盘监控预警" aria-label="Permalink to &quot;linux 磁盘监控预警&quot;">​</a></h1><h2 id="查看磁盘" tabindex="-1">查看磁盘 <a class="header-anchor" href="#查看磁盘" aria-label="Permalink to &quot;查看磁盘&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看磁盘</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">df</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Filesystem      Size  Used Avail Use% Mounted on</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># devtmpfs        1.8G     0  1.8G   0% /dev</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># tmpfs           1.8G     0  1.8G   0% /dev/shm</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># tmpfs           1.8G  612K  1.8G   1% /run</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># tmpfs           1.8G     0  1.8G   0% /sys/fs/cgroup</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># /dev/vda1        40G   34G  3.7G  91% /</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># tmpfs           365M     0  365M   0% /run/user/0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># overlay          40G   34G  3.7G  91% /var/lib/docker/overlay2/012a6c14c2a6baf44675415a596766f5c8eb4c275809a304b54197f73d47f1ac/merged</span></span></code></pre></div><h2 id="获取根目录磁盘使用百分比" tabindex="-1">获取根目录磁盘使用百分比 <a class="header-anchor" href="#获取根目录磁盘使用百分比" aria-label="Permalink to &quot;获取根目录磁盘使用百分比&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取根目录磁盘使用百分比</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">df</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> overlay</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">awk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{print $5}&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cut</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 91</span></span></code></pre></div><h2 id="获取内存使用百分比" tabindex="-1">获取内存使用百分比 <a class="header-anchor" href="#获取内存使用百分比" aria-label="Permalink to &quot;获取内存使用百分比&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取内存使用百分比</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">free</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Mem</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">awk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{print $3/$2*100}&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 34.6133</span></span></code></pre></div><h2 id="crontab-定时任务-每分钟执行一次" tabindex="-1">crontab 定时任务 每分钟执行一次 <a class="header-anchor" href="#crontab-定时任务-每分钟执行一次" aria-label="Permalink to &quot;crontab 定时任务 每分钟执行一次&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># crontab 定时任务 每分钟执行一次</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编辑用户的定时任务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">crontab</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加定时任务</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /bin/bash /root/mail.sh</span></span></code></pre></div><h2 id="安装sendmail" tabindex="-1">安装sendmail <a class="header-anchor" href="#安装sendmail" aria-label="Permalink to &quot;安装sendmail&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装sendmail</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sendmail</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div><h2 id="修改执行权限" tabindex="-1">修改执行权限 <a class="header-anchor" href="#修改执行权限" aria-label="Permalink to &quot;修改执行权限&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修改执行权限</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 777</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mail.sh</span></span></code></pre></div><h2 id="编写邮件发送脚本" tabindex="-1">编写邮件发送脚本 <a class="header-anchor" href="#编写邮件发送脚本" aria-label="Permalink to &quot;编写邮件发送脚本&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">account</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;dubiao@qmsznj.com&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">password</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;123&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">to</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;18305181878@139.com&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">to1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ylw19970206@163.com&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">to2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;13913308358@139.com&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">subject</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;磁盘内存监控&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">serverName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;福利测试服39.106.206.3&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ROOT_DISK</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">df</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/vda1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">awk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{print $5}&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cut</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%&quot; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-f1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MEM_STATUS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">free</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Mem</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">awk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{print $3/$2*100}&#39;\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">content</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;h1&gt;磁盘使用率超过预警值!&lt;/h1&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;hr/&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    (本邮件是程序自动下发的，请勿回复！)&lt;br/&gt;&lt;hr/&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    服务器名称: </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$serverName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;br/&gt; &lt;hr/&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    磁盘使用率: </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ROOT_DISK</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">% &lt;br/&gt; &lt;hr/&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    内存使用率: </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$MEM_STATUS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">% &lt;br/&gt; &lt;hr/&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果超过95%则发送邮件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ $ROOT_DISK </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-ge</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 95</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ];</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    sendemail</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $account </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $to $to1 $to2 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tls=yes</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> smtp.exmail.qq.com:587</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $subject </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> message-content-type=html</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> message-charset=utf8</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $account </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-xp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $password </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $content</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">serverName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}磁盘空间使用:\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ROOT_DISK</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fi</span></span></code></pre></div>`,15),t=[l];function p(k,e,r,d,F,g){return a(),i("div",null,t)}const o=s(h,[["render",p]]);export{c as __pageData,o as default};