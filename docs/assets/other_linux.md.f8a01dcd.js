import{_ as s,o as a,c as n,V as l}from"./chunks/framework.b1ba171e.js";const A=JSON.parse('{"title":"linux 常用命令","description":"","frontmatter":{},"headers":[],"relativePath":"other/linux.md","filePath":"other/linux.md","lastUpdated":1689906459000}'),e={name:"other/linux.md"},p=l(`<h1 id="linux-常用命令" tabindex="-1">linux 常用命令 <a class="header-anchor" href="#linux-常用命令" aria-label="Permalink to &quot;linux 常用命令&quot;">​</a></h1><h2 id="查看文件" tabindex="-1">查看文件 <a class="header-anchor" href="#查看文件" aria-label="Permalink to &quot;查看文件&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看文件</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/hosts</span></span></code></pre></div><h2 id="查看打开的应用占用的端口" tabindex="-1">查看打开的应用占用的端口 <a class="header-anchor" href="#查看打开的应用占用的端口" aria-label="Permalink to &quot;查看打开的应用占用的端口&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看打开的端口</span></span>
<span class="line"><span style="color:#FFCB6B;">lsof</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-P</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-n</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span></span></code></pre></div><h2 id="查看端口" tabindex="-1">查看端口 <a class="header-anchor" href="#查看端口" aria-label="Permalink to &quot;查看端口&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看端口</span></span>
<span class="line"><span style="color:#FFCB6B;">netstat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-anp</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8080</span></span></code></pre></div><h2 id="查看进程" tabindex="-1">查看进程 <a class="header-anchor" href="#查看进程" aria-label="Permalink to &quot;查看进程&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看进程</span></span>
<span class="line"><span style="color:#FFCB6B;">ps</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ef</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">java</span></span></code></pre></div><h2 id="查看内存" tabindex="-1">查看内存 <a class="header-anchor" href="#查看内存" aria-label="Permalink to &quot;查看内存&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看内存</span></span>
<span class="line"><span style="color:#FFCB6B;">free</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span></span></code></pre></div><h2 id="查看磁盘" tabindex="-1">查看磁盘 <a class="header-anchor" href="#查看磁盘" aria-label="Permalink to &quot;查看磁盘&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看磁盘</span></span>
<span class="line"><span style="color:#FFCB6B;">df</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-h</span></span></code></pre></div><h2 id="查看-cpu" tabindex="-1">查看 cpu <a class="header-anchor" href="#查看-cpu" aria-label="Permalink to &quot;查看 cpu&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看cpu</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/cpuinfo</span></span></code></pre></div><h2 id="查看系统版本" tabindex="-1">查看系统版本 <a class="header-anchor" href="#查看系统版本" aria-label="Permalink to &quot;查看系统版本&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看系统版本</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/redhat-release</span></span></code></pre></div><h2 id="查看当前路径" tabindex="-1">查看当前路径 <a class="header-anchor" href="#查看当前路径" aria-label="Permalink to &quot;查看当前路径&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">pwd</span></span></code></pre></div><h2 id="tar-压缩解压" tabindex="-1">tar 压缩解压 <a class="header-anchor" href="#tar-压缩解压" aria-label="Permalink to &quot;tar 压缩解压&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 压缩</span></span>
<span class="line"><span style="color:#FFCB6B;">tar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-zcvf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test.tar.gz</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 解压</span></span>
<span class="line"><span style="color:#FFCB6B;">tar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-zxvf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test.tar.gz</span></span></code></pre></div><h2 id="查看文件夹大小" tabindex="-1">查看文件夹大小 <a class="header-anchor" href="#查看文件夹大小" aria-label="Permalink to &quot;查看文件夹大小&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">du</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-sh</span></span></code></pre></div><h2 id="查看文件大小" tabindex="-1">查看文件大小 <a class="header-anchor" href="#查看文件大小" aria-label="Permalink to &quot;查看文件大小&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-lh</span></span></code></pre></div><h2 id="查看文件夹下文件" tabindex="-1">查看文件夹下文件 <a class="header-anchor" href="#查看文件夹下文件" aria-label="Permalink to &quot;查看文件夹下文件&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-l</span></span></code></pre></div><h2 id="修改权限" tabindex="-1">修改权限 <a class="header-anchor" href="#修改权限" aria-label="Permalink to &quot;修改权限&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">777</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test.sh</span></span></code></pre></div><h2 id="查看目录下每个文件及文件夹大小" tabindex="-1">查看目录下每个文件及文件夹大小 <a class="header-anchor" href="#查看目录下每个文件及文件夹大小" aria-label="Permalink to &quot;查看目录下每个文件及文件夹大小&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">du</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-sh</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span></span></code></pre></div><h2 id="删除-指定目录下-30天之前的-log-文件" tabindex="-1">删除 指定目录下 30天之前的 log 文件 <a class="header-anchor" href="#删除-指定目录下-30天之前的-log-文件" aria-label="Permalink to &quot;删除 指定目录下 30天之前的 log 文件&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="color:#FFCB6B;">find</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/logs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-mtime</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+30</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*.log</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{}</span><span style="color:#A6ACCD;"> \\;</span></span></code></pre></div><h2 id="定时任务" tabindex="-1">定时任务 <a class="header-anchor" href="#定时任务" aria-label="Permalink to &quot;定时任务&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#添加定时任务</span></span>
<span class="line"><span style="color:#FFCB6B;">crontab</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 每天凌晨 1 点执行</span></span>
<span class="line"><span style="color:#FFCB6B;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/root/log-dellogs.sh</span></span></code></pre></div><h2 id="系统流量监测" tabindex="-1">系统流量监测 <a class="header-anchor" href="#系统流量监测" aria-label="Permalink to &quot;系统流量监测&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bmon</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 监测网卡流量</span></span>
<span class="line"><span style="color:#FFCB6B;">bmon</span></span></code></pre></div><h2 id="防火墙" tabindex="-1">防火墙 <a class="header-anchor" href="#防火墙" aria-label="Permalink to &quot;防火墙&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看防火墙状态</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">iptables</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 关闭防火墙</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">iptables</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 禁止开机启动</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">disable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">chkconfig</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">iptables</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">off</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 开启防火墙</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">iptables</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 开机启动</span></span>
<span class="line"><span style="color:#FFCB6B;">chkconfig</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">iptables</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">firewalld</span></span></code></pre></div>`,39),o=[p];function t(c,r,i,C,y,h){return a(),n("div",null,o)}const D=s(e,[["render",t]]);export{A as __pageData,D as default};