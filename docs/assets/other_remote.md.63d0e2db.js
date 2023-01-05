import{_ as s,o as e,c as l,d as a}from"./app.33845605.js";const v=JSON.parse('{"title":"vscode 远程办公","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装vscode插件","slug":"安装vscode插件","link":"#安装vscode插件","children":[]},{"level":2,"title":"配置远程连接","slug":"配置远程连接","link":"#配置远程连接","children":[]},{"level":2,"title":"配置ssh免密登录","slug":"配置ssh免密登录","link":"#配置ssh免密登录","children":[]},{"level":2,"title":"复制文件到本地","slug":"复制文件到本地","link":"#复制文件到本地","children":[]},{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]}],"relativePath":"other/remote.md","lastUpdated":1672735792000}'),t={name:"other/remote.md"},o=a(`<h1 id="vscode-远程办公" tabindex="-1">vscode 远程办公 <a class="header-anchor" href="#vscode-远程办公" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">远程</p><ul><li><p>vscode远程办公是指在远程电脑上打开代码运行代码等操作</p></li><li><p>资源占用更少,更加安全,运行速度更快</p></li><li><p>缺点是依赖网络,网络质量不好容易出问题</p></li></ul></div><h2 id="安装vscode插件" tabindex="-1">安装vscode插件 <a class="header-anchor" href="#安装vscode插件" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>插件名称: Remote - SSH</li><li>插件地址: <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh" target="_blank" rel="noreferrer">https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh</a></li></ul></div><h2 id="配置远程连接" tabindex="-1">配置远程连接 <a class="header-anchor" href="#配置远程连接" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>修改ssh配置文件 &quot;C:\\users\\用户名.ssh\\config&quot;</p></li><li><p>配置文件如下:</p></li></ul></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">Host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">192.168.0.251</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">HostName</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">192.168.0.251</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Port</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">User</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span></span>
<span class="line"></span></code></pre></div><p><img src="https://article.biliimg.com/bfs/article/cd7d8bce83b2b4b12c455ceea66556ddbb9c5e59.png" alt="config"></p><h2 id="配置ssh免密登录" tabindex="-1">配置ssh免密登录 <a class="header-anchor" href="#配置ssh免密登录" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>1, cmd 输入 <code>ssh-keygen -t rsa</code> 生成密钥对</p></li><li><p>2, 打开 id_rsa.pub</p></li><li><p>3, 把 id_rsa.pub 内容添加到服务器 <code>~/.ssh/authorized_keys</code> 文件后面</p></li><li><p>4, 如果没有 authorized_keys 可以直接创建</p></li><li><p>5, 再次连接就不用输入密码了</p></li></ul></div><h2 id="复制文件到本地" tabindex="-1">复制文件到本地 <a class="header-anchor" href="#复制文件到本地" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">复制文件</p><ul><li><code>scp -r root@192.168.0.251:/root/qm/vite-admin/scm .</code></li></ul></div><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">git一直需要登录</p><ul><li>在 git clone 的时候，不用HTTP形式 ,用SSH</li></ul></div>`,14),i=[o];function c(n,p,r,d,h,u){return e(),l("div",null,i)}const b=s(t,[["render",c]]);export{v as __pageData,b as default};
