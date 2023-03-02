import{_ as s,o as l,c as a,d as n}from"./app.20b6c612.js";const C=JSON.parse('{"title":"jenkins 高级配置","description":"","frontmatter":{},"headers":[{"level":2,"title":"自动化项目构建","slug":"自动化项目构建","link":"#自动化项目构建","children":[{"level":3,"title":"1,配置项目","slug":"_1-配置项目","link":"#_1-配置项目","children":[]},{"level":3,"title":"2,配置 GitLab","slug":"_2-配置-gitlab","link":"#_2-配置-gitlab","children":[]}]},{"level":2,"title":"邮件通知","slug":"邮件通知","link":"#邮件通知","children":[{"level":3,"title":"1,邮箱配置","slug":"_1-邮箱配置","link":"#_1-邮箱配置","children":[]},{"level":3,"title":"2,项目配置","slug":"_2-项目配置","link":"#_2-项目配置","children":[]},{"level":3,"title":"3,查看是否成功","slug":"_3-查看是否成功","link":"#_3-查看是否成功","children":[]}]},{"level":2,"title":"jenkins 版本升级","slug":"jenkins-版本升级","link":"#jenkins-版本升级","children":[{"level":3,"title":"下载jenkins.war","slug":"下载jenkins-war","link":"#下载jenkins-war","children":[]},{"level":3,"title":"升级","slug":"升级","link":"#升级","children":[]},{"level":3,"title":"查看是否成功","slug":"查看是否成功","link":"#查看是否成功","children":[]}]},{"level":2,"title":"多POM的MAVEN项目打包","slug":"多pom的maven项目打包","link":"#多pom的maven项目打包","children":[]},{"level":2,"title":"清理jenkins","slug":"清理jenkins","link":"#清理jenkins","children":[]},{"level":2,"title":"备份jenkins任务","slug":"备份jenkins任务","link":"#备份jenkins任务","children":[]},{"level":2,"title":"恢复jenkins任务","slug":"恢复jenkins任务","link":"#恢复jenkins任务","children":[]}],"relativePath":"other/jenkins_advanced.md","lastUpdated":1674960244000}'),e={name:"other/jenkins_advanced.md"},t=n(`<h1 id="jenkins-高级配置" tabindex="-1">jenkins 高级配置 <a class="header-anchor" href="#jenkins-高级配置" aria-hidden="true">#</a></h1><h2 id="自动化项目构建" tabindex="-1">自动化项目构建 <a class="header-anchor" href="#自动化项目构建" aria-hidden="true">#</a></h2><h3 id="_1-配置项目" tabindex="-1">1,配置项目 <a class="header-anchor" href="#_1-配置项目" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">配置项目</p><ul><li><p>1,点击项目的配置</p></li><li><p>2,点击构建触发器,勾选<code>Build when a change is pushed to GitLab.GitLab webhook URL: http://XXX Enabled GitLab triggers</code></p></li><li><p>3,点击 高级 按钮 , 找到 Secret token 点击 generate , 生成一个 token , 然后然后点击保存</p></li></ul></div><p><img src="https://article.biliimg.com/bfs/article/289300a91a3ae7a4cc9c1426c58b5dd720399732.png" alt="i"></p><h3 id="_2-配置-gitlab" tabindex="-1">2,配置 GitLab <a class="header-anchor" href="#_2-配置-gitlab" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">gitlb配置</p><ul><li><p>1,进入 GitLab 项目的设置页面</p></li><li><p>2,进入webhooks页面,点击add webhook</p></li><li><p>3,填写URL,URL是Jenkins的webhook地址,格式为<code>http://XXX/project/项目名</code>,Secret Token是Jenkins生成的token</p></li><li><p>4,去掉SSL验证</p></li><li><p>5,点击保存</p></li><li><p>6,点击测试下拉框,点击Push events,进入jenkins主页,查看构建执行状态,如果有对应的项目正在构建,代表创建自动化成功</p></li></ul></div><p><img src="https://article.biliimg.com/bfs/article/8aacaff0700e110c89e176cbe15562f59ed115a6.png" alt="img"></p><h2 id="邮件通知" tabindex="-1">邮件通知 <a class="header-anchor" href="#邮件通知" aria-hidden="true">#</a></h2><h3 id="_1-邮箱配置" tabindex="-1">1,邮箱配置 <a class="header-anchor" href="#_1-邮箱配置" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">邮箱配置</p><ul><li><p>1,进入系统管理,点击系统配置,找到Extended E-mail Notification</p></li><li><p>2,在SMTP Serve 输入你的邮箱的服务器地址(文中用的163邮箱,可以在163邮箱的设置页面找到,其他邮箱也是同理)</p></li><li><p>3,在SMTP Port输入框中填写465端口(这是SMTP协议通用的端口,如果不同就填写自己邮箱的)</p></li><li><p>4,点击高级,选择凭证(如果没有凭证可以添加一个凭证,输入自己的用户名和密码)</p></li><li><p>5,勾选Use ssl</p></li><li><p>6,Default Content Type 选择text/html</p></li><li><p>7,在Default Recipients 输入要发送的邮箱,逗号分隔(在项目中发送邮件可以用$DEFAULT_RECIPIENTS来使用这里的邮箱,也可以直接覆盖)</p></li></ul></div><p><img src="https://article.biliimg.com/bfs/article/87fb0629eb0ffe2a8f9fc81fd7b8e23907a9daee.png" alt="i"></p><p><img src="https://article.biliimg.com/bfs/article/47b58e57b4d70bb52a585bad318883107bf36d1f.png" alt="i"></p><h3 id="_2-项目配置" tabindex="-1">2,项目配置 <a class="header-anchor" href="#_2-项目配置" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">项目配置</p><ul><li><p>1,打开任务的配置页面,在最下面找到增加构建后操作步骤,选择Editable Email Notification</p></li><li><p>2,在Editable Email Notification 配置项中,找到并点击 Advanced Settings 按钮</p></li><li><p>3,在Content Type中选择HTML类型</p></li><li><p>4,在Content中输入以下内容(也可以不改,不改内容较少)</p></li><li><p>5,点击Attach Build Log 选择 Attach Build Log 可以携带构建日志</p></li></ul></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">hr/</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">本邮件是程序自动下发的，请勿回复！</span><span style="color:#89DDFF;">)&lt;</span><span style="color:#A6ACCD;">br/&gt;&lt;hr/</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">项目名称：</span><span style="color:#A6ACCD;">$PROJECT_NAME</span><span style="color:#FFCB6B;">&lt;br/&gt;&lt;hr/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">构建编号：test_</span><span style="color:#A6ACCD;">$BUILD_NUMBER</span><span style="color:#FFCB6B;">&lt;br/&gt;&lt;hr/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">构建状态：</span><span style="color:#A6ACCD;">$BUILD_STATUS</span><span style="color:#FFCB6B;">&lt;br/&gt;&lt;hr/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">触发原因：$</span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">CAUSE</span><span style="color:#89DDFF;">}&lt;</span><span style="color:#A6ACCD;">br/&gt;&lt;hr/</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">构建日志地址：&lt;a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">href=</span><span style="color:#89DDFF;">&quot;\${</span><span style="color:#C3E88D;">BUILD_URL</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">console</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;\${</span><span style="color:#A6ACCD;">BUILD_URL</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">console</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;">a&gt;&lt;</span><span style="color:#C3E88D;">br</span><span style="color:#A6ACCD;">/&gt;&lt;</span><span style="color:#C3E88D;">hr</span><span style="color:#A6ACCD;">/</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">构建地址：&lt;a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">href=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$BUILD_URL</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">$BUILD_URL</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;">a&gt;&lt;</span><span style="color:#C3E88D;">br</span><span style="color:#A6ACCD;">/&gt;&lt;</span><span style="color:#C3E88D;">hr</span><span style="color:#A6ACCD;">/</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">变更集:$</span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">JELLY_SCRIPT,template=&quot;html&quot;</span><span style="color:#89DDFF;">}&lt;</span><span style="color:#A6ACCD;">br/&gt;&lt;hr/</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-查看是否成功" tabindex="-1">3,查看是否成功 <a class="header-anchor" href="#_3-查看是否成功" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>1,点击立即构建</p></li><li><p>2,登录邮箱</p></li></ul></div><p><img src="https://article.biliimg.com/bfs/article/00bab6a852b689f9b80eba7b58419f41bf86518b.png" alt="i"></p><h2 id="jenkins-版本升级" tabindex="-1">jenkins 版本升级 <a class="header-anchor" href="#jenkins-版本升级" aria-hidden="true">#</a></h2><h3 id="下载jenkins-war" tabindex="-1">下载jenkins.war <a class="header-anchor" href="#下载jenkins-war" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">下载</p><ul><li>进入jenkins ,点击系统管理 ,如果有升级版本,会自动提示,点击下载即可</li><li>也可以 直接点 <a href="http://mirrors.jenkins.io/war/latest/jenkins.war" target="_blank" rel="noreferrer">这里</a> 下载</li></ul></div><h3 id="升级" tabindex="-1">升级 <a class="header-anchor" href="#升级" aria-hidden="true">#</a></h3><blockquote><p>使用root用户访问docker容器</p></blockquote><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">myjenkins</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bin/bash</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><blockquote><p>进入 /usr/share/jenkins/目录，备份jenkins.war文件</p></blockquote><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">/usr/share/jenkins</span></span>
<span class="line"><span style="color:#FFCB6B;">mv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jenkins.war</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jenkins.war.bak</span></span>
<span class="line"></span></code></pre></div><blockquote><p>退出重启jenkins</p></blockquote><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">exit</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">myjenkins</span></span>
<span class="line"></span></code></pre></div><h3 id="查看是否成功" tabindex="-1">查看是否成功 <a class="header-anchor" href="#查看是否成功" aria-hidden="true">#</a></h3><blockquote><p>进入jenkins主页,查看页面底部</p></blockquote><p><img src="https://article.biliimg.com/bfs/article/993efc73e791142ab40f1877cc16dd2f6166f17b.png" alt="i"></p><h2 id="多pom的maven项目打包" tabindex="-1">多POM的MAVEN项目打包 <a class="header-anchor" href="#多pom的maven项目打包" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">多POM的MAVEN项目</p><ul><li><p>在部署spring cloud项目的时候,往往会存在多个pom文件,jenkins可以多次打包,然后部署</p></li><li><p>1,点击进入项目的配置,找到Pre Steps,选择 调用顶层maven目标 选项</p></li><li><p>2,在调用顶层 Maven 目标的Maven版本中选择自己版本</p></li><li><p>3,在目标框中输入 clean install</p></li><li><p>4,在pom框中输入 要运行的pom地址 例如:mall-parent/mall-H5service/pom.xml</p></li></ul></div><p><img src="https://article.biliimg.com/bfs/article/40d76408b0eeab975d5dd6371c3f5e7316eb3261.png" alt="i"><img src="https://article.biliimg.com/bfs/article/c4e36e3da58bd6bf662c4a08107ab5210882f888.png" alt="i"></p><div class="warning custom-block"><p class="custom-block-title">注意</p><ul><li>可以配置多个Pre Steps</li><li>最后一个pom项目,必须在项目的 Build 项中配置</li></ul></div><p><img src="https://article.biliimg.com/bfs/article/0781cf07f761ccedcccc53ef113380fa98f5f38e.png" alt="i"></p><h2 id="清理jenkins" tabindex="-1">清理jenkins <a class="header-anchor" href="#清理jenkins" aria-hidden="true">#</a></h2><blockquote><p>1,可以在设置中设置丢弃旧的构建</p></blockquote><p><img src="https://article.biliimg.com/bfs/article/4987771061496b0129cca15df17498387e44116b.png" alt="i"></p><blockquote><p>2,可以删除工作区文件</p></blockquote><p><img src="https://article.biliimg.com/bfs/article/0c684c5e77a9b6be3b8ec6948fe9a0f97a1353b1.png" alt="i"></p><blockquote><p>3,优化项目配置,例如:打包spring cloud 可以不全局打包,只打包其中几个pom</p></blockquote><h2 id="备份jenkins任务" tabindex="-1">备份jenkins任务 <a class="header-anchor" href="#备份jenkins任务" aria-hidden="true">#</a></h2><blockquote><p>1, 可以在/var/jenkins/jobs 目录下查看当前jenkins的任务</p></blockquote><blockquote><p>2,直接打包jobs文件夹即可备份</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-zcvf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">job.tar.gz</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jobs</span></span>
<span class="line"></span></code></pre></div><h2 id="恢复jenkins任务" tabindex="-1">恢复jenkins任务 <a class="header-anchor" href="#恢复jenkins任务" aria-hidden="true">#</a></h2><blockquote><p>1,把打包的job.tar.gz 解压复制到现有的jenkins jobs目录下</p></blockquote><blockquote><p>2,打开jenkins的系统管理-&gt;读取设置,重启jenkins即可</p></blockquote>`,50),p=[t];function i(o,c,r,d,h,b){return l(),a("div",null,p)}const u=s(e,[["render",i]]);export{C as __pageData,u as default};