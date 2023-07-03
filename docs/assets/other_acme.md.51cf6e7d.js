import{_ as s,o as a,c as l,V as n}from"./chunks/framework.5a3bb230.js";const h=JSON.parse('{"title":"acme.sh 证书申请","description":"","frontmatter":{},"headers":[],"relativePath":"other/acme.md","filePath":"other/acme.md","lastUpdated":1687329147000}'),p={name:"other/acme.md"},o=n(`<h1 id="acme-sh-证书申请" tabindex="-1">acme.sh 证书申请 <a class="header-anchor" href="#acme-sh-证书申请" aria-label="Permalink to &quot;acme.sh 证书申请&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>acme.sh 是一个开源的证书申请工具，支持多种 DNS API 申请证书，支持自动续期。</p></li><li><p>本文档介绍如何使用 acme.sh 申请证书。</p></li><li><p>文档地址：<a href="https://github.com/acmesh-official/acme.sh/wiki/%E8%AF%B4%E6%98%8E" target="_blank" rel="noreferrer">文档</a></p></li></ul></div><h2 id="_1-安装" tabindex="-1">1,安装 <a class="header-anchor" href="#_1-安装" aria-label="Permalink to &quot;1,安装&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>会安装在 <code>~/.acme.sh</code> 目录下。</p></li><li><p>会自动创建一个 cronjob，每天 0:00 自动检测是否需要更新证书。</p></li></ul></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://get.acme.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sh</span></span></code></pre></div><h2 id="_2-配置邮箱" tabindex="-1">2,配置邮箱 <a class="header-anchor" href="#_2-配置邮箱" aria-label="Permalink to &quot;2,配置邮箱&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">acme.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--register-account</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">my@example.com</span></span></code></pre></div><h2 id="_3-申请证书" tabindex="-1">3,申请证书 <a class="header-anchor" href="#_3-申请证书" aria-label="Permalink to &quot;3,申请证书&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>默认生成的证书在 <code>~/.acme.sh/mydomain.com</code> 目录下。</p></li><li><p>默认zerossl申请的证书有效期为3个月,可以修改为letsencrypt申请的证书有效期为3个月。</p></li><li><p>修改默认server命令: <code>acme.sh --set-default-ca --server letsencrypt</code></p></li></ul></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">acme.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--issue</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mydomain.com</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--nginx</span></span></code></pre></div><h2 id="_4-安装证书" tabindex="-1">4,安装证书 <a class="header-anchor" href="#_4-安装证书" aria-label="Permalink to &quot;4,安装证书&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">acme.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--install-cert</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yangliwei.top</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--key-file</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/share/nginx/ssl/ylw.key</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--fullchain-file</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/share/nginx/ssl/ylw.crt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--reloadcmd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nginx -s reload</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><h2 id="_6-nginx配置" tabindex="-1">6,nginx配置 <a class="header-anchor" href="#_6-nginx配置" aria-label="Permalink to &quot;6,nginx配置&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>acme申请证书后会检查地址,需要nginx配置一个地址用于检查,这里配置的是<code>/.well-known/acme-challenge</code>。</p></li><li><p>nginx配置好后,需要重启nginx: <code>nginx -s reload</code></p></li></ul></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;">     </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">server_name</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">yangliwei.top,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">www.yangliwei.top</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">/usr/share/nginx/html/blog</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">try_files</span><span style="color:#A6ACCD;"> $uri $uri</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">index</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">index.html</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/.well-known/acme-challenge</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 自己定义的位置，用于校验服务器所有权</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/root/www/letsencrypt</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">443</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ssl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">server_name</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">yangliwei.top,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">www.yangliwei.top</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">ssl_certificate</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/share/nginx/ssl/ylw.crt</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">ssl_certificate_key</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">/usr/share/nginx/ssl/ylw.key</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">       </span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">ssl_session_timeout</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#C3E88D;">m</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">ssl_ciphers</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">ssl_protocols</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TLSv1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TLSv1.1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TLSv1.2</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">      </span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">ssl_prefer_server_ciphers</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">try_files</span><span style="color:#A6ACCD;"> $uri $uri</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@router</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">/usr/share/nginx/html/blog</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">index</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="_7-自动续期" tabindex="-1">7,自动续期 <a class="header-anchor" href="#_7-自动续期" aria-label="Permalink to &quot;7,自动续期&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>会自动创建一个 cronjob，每天 0:00 自动检测是否需要更新证书。</p></li><li><p>不需要手动续期，acme.sh 会自动续期。</p></li><li><p>证书续期后，会自动重启 nginx。</p></li></ul></div><h2 id="_8-其他" tabindex="-1">8,其他 <a class="header-anchor" href="#_8-其他" aria-label="Permalink to &quot;8,其他&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>查看证书信息: <code>acme.sh --list</code></p></li><li><p>查看已安装信息: <code>acme.sh --info -d yangliwei.top</code></p></li><li><p>出错了怎么办: <code>acme.sh --issue ..... --debug</code></p></li></ul></div>`,19),e=[o];function c(t,r,C,i,y,D){return a(),l("div",null,e)}const d=s(p,[["render",c]]);export{h as __pageData,d as default};
