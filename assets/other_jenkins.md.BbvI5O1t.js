import{_ as i,c as s,o as a,a4 as e}from"./chunks/framework.FFX0tUBF.js";const g=JSON.parse('{"title":"jenkins","description":"","frontmatter":{},"headers":[],"relativePath":"other/jenkins.md","filePath":"other/jenkins.md","lastUpdated":1718595028000}'),l={name:"other/jenkins.md"},t=e(`<h1 id="jenkins" tabindex="-1">jenkins <a class="header-anchor" href="#jenkins" aria-label="Permalink to &quot;jenkins&quot;">​</a></h1><blockquote><p>jenkins 是一个开源的持续集成工具，可以用来自动化构建、测试、部署项目 这里用docker-compose 部署jenkins,并把jenkins文件夹映射到外部,方便管理</p></blockquote><h2 id="docker-安装jenkins" tabindex="-1">docker 安装jenkins <a class="header-anchor" href="#docker-安装jenkins" aria-label="Permalink to &quot;docker 安装jenkins&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取镜像</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jenkins/jenkins:lts</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8080:8080</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 50000:50000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root/mydocker/jenkins:/var/jenkins_home</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> myjenkins</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --privileged=true</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart=always</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jenkins/jenkins:lts</span></span></code></pre></div><h2 id="docker-compose安装jenkins" tabindex="-1">docker-compose安装jenkins <a class="header-anchor" href="#docker-compose安装jenkins" aria-label="Permalink to &quot;docker-compose安装jenkins&quot;">​</a></h2><h3 id="_1-创建文件夹" tabindex="-1">1,创建文件夹 <a class="header-anchor" href="#_1-创建文件夹" aria-label="Permalink to &quot;1,创建文件夹&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> demo</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //存放docker-compose.yml文件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jenkins</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //jenkins文件夹</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jenkins_home</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //jenkins运行环境外部映射文件夹</span></span></code></pre></div><h3 id="_2-创建docker-compose-yml文件" tabindex="-1">2,创建docker-compose.yml文件 <a class="header-anchor" href="#_2-创建docker-compose-yml文件" aria-label="Permalink to &quot;2,创建docker-compose.yml文件&quot;">​</a></h3><p>在compose文件夹下创建docker-compose.yml文件</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">version:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;3&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">services:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  docker_jenkins:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    user:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 使用root用户运行docker</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    restart:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> always</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 重启时重新启动</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    image:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jenkins/jenkins:lts</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 镜像</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    container_name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker_jenkins</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 容器名称</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ports:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;8080:8080&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 容器端口映射到主机端口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;50000:50000&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 容器端口映射到主机端口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    volumes:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /demo/jenkins/jenkins_home:/var/jenkins_home</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 把jenkins_home映射到本地</span></span></code></pre></div><p><img src="https://article.biliimg.com/bfs/article/7ac8eae312c980d5a080416637471ee85895ff1a.png" alt="图片"></p><h3 id="_3-运行docker-compose-yml文件-启动jenkins" tabindex="-1">3,运行docker-compose.yml文件,启动jenkins <a class="header-anchor" href="#_3-运行docker-compose-yml文件-启动jenkins" aria-label="Permalink to &quot;3,运行docker-compose.yml文件,启动jenkins&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span></span></code></pre></div><p><img src="https://article.biliimg.com/bfs/article/49bd4814740253982e822cc907f315f6b07c69eb.png" alt="图片"></p><blockquote><p>查看是否启动成功</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ps</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span></span></code></pre></div><p><img src="https://article.biliimg.com/bfs/article/4e699dec924b35da5e332f85d0c37461cfea990d.png" alt="img"></p><blockquote><p>启动成功,并且端口8080已经和本地8080映射了</p></blockquote><h2 id="_1-访问jenkins" tabindex="-1">1,访问jenkins <a class="header-anchor" href="#_1-访问jenkins" aria-label="Permalink to &quot;1,访问jenkins&quot;">​</a></h2><blockquote><p>浏览器打开 <code>http://localhost:8080</code></p></blockquote><p><img src="https://article.biliimg.com/bfs/article/c6f0fc3de62db66c7e897ae0feebeb359b5a4d7d.png" alt="img"></p><h2 id="_2-解锁jenkins" tabindex="-1">2,解锁jenkins <a class="header-anchor" href="#_2-解锁jenkins" aria-label="Permalink to &quot;2,解锁jenkins&quot;">​</a></h2><blockquote><p>进入jenkins后,会提示解锁jenkins,需要在docker容器中找到解锁密码</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入docker容器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker_jenkins</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /bin/bash</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 找到解锁密码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/jenkins_home/secrets/initialAdminPassword</span></span></code></pre></div><h2 id="_3-选择插件安装" tabindex="-1">3,选择插件安装 <a class="header-anchor" href="#_3-选择插件安装" aria-label="Permalink to &quot;3,选择插件安装&quot;">​</a></h2><blockquote><p>选择自己需要的插件安装,也可以直接安装后面再安装</p></blockquote><p><img src="https://article.biliimg.com/bfs/article/fb1d668ccd564924202d3aacf41630db83035ccd.png" alt="img"></p><h2 id="_4-创建管理员账号" tabindex="-1">4,创建管理员账号 <a class="header-anchor" href="#_4-创建管理员账号" aria-label="Permalink to &quot;4,创建管理员账号&quot;">​</a></h2><blockquote><p>创建管理员账号</p></blockquote><p><img src="https://article.biliimg.com/bfs/article/a5b03d494be52fee197f7b73b6aa2e4afb10cbed.png" alt="img"></p><h2 id="_5-安装完成" tabindex="-1">5,安装完成 <a class="header-anchor" href="#_5-安装完成" aria-label="Permalink to &quot;5,安装完成&quot;">​</a></h2><blockquote><p>安装完成,进入jenkins</p></blockquote><p><img src="https://article.biliimg.com/bfs/article/10866b6f646647b93d9c72b1c5ad50c15b4beb0c.png" alt="img"></p><h2 id="_6-安装插件" tabindex="-1">6,安装插件 <a class="header-anchor" href="#_6-安装插件" aria-label="Permalink to &quot;6,安装插件&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">安装插件</p><ul><li>Localization: Chinese (Simplified) 中文语言包</li><li>Publish Over SSH 通过ssh上传打包产物</li><li>github plugin</li><li>gitlab plugin</li><li>gitee plugin</li><li>nodejs plugin</li><li>Maven Integration</li></ul></div><h2 id="_7-配置nodejs" tabindex="-1">7,配置nodejs <a class="header-anchor" href="#_7-配置nodejs" aria-label="Permalink to &quot;7,配置nodejs&quot;">​</a></h2><blockquote><p>配置nodejs,主要是前端项目使用 打开系统管理 -&gt; 全局工具配置 -&gt; nodejs 按照如下配置</p></blockquote><p><img src="https://article.biliimg.com/bfs/article/3dfc98a8dc0793bc9898142b4e50baaa9ab4fd5c.png" alt="img"></p><h2 id="_8-配置maven" tabindex="-1">8,配置maven <a class="header-anchor" href="#_8-配置maven" aria-label="Permalink to &quot;8,配置maven&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>主要是后端java项目使用</p></li><li><p>打开系统管理 -&gt; 全局工具配置 -&gt; Maven</p></li><li><p>如下配置</p></li></ul></div><p><img src="https://article.biliimg.com/bfs/article/50c9258868972806cf4f6450043213ee6b5ba973.png" alt="img"></p><h2 id="_9-配置jdk" tabindex="-1">9,配置JDK <a class="header-anchor" href="#_9-配置jdk" aria-label="Permalink to &quot;9,配置JDK&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">配置JDK</p><ul><li><p>主要是后端java项目使用</p></li><li><p>打开系统管理 -&gt; 全局工具配置 -&gt; JDK</p></li><li><p>需要登录甲骨文账号,点击下图红色区域输入甲骨文账号密码</p></li></ul></div><p><img src="https://article.biliimg.com/bfs/article/8837d02222be566a9789a02d08b1ba6042a29451.png" alt="i"></p><p><img src="https://article.biliimg.com/bfs/article/275948e8d33132f4febd552139c139129be38c1c.png" alt="i"></p><h2 id="_10-配置ssh服务器" tabindex="-1">10,配置SSH服务器 <a class="header-anchor" href="#_10-配置ssh服务器" aria-label="Permalink to &quot;10,配置SSH服务器&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">服务器</p><ul><li><p>配置服务器是为了自动化部署使用</p></li><li><p>打开系统管理 -&gt; 系统管理 -&gt; 系统配置 -&gt; SSH Servers</p></li><li><p>注意配置时,点击高级,选择Use password authentication, or use a different key,并输入密码</p></li><li><p>配置完点击Test Configuration 如果出现Success 表示添加ssh服务器成功</p></li><li><p>按照下图配置</p></li></ul></div><p><img src="https://article.biliimg.com/bfs/article/428bdb69861ad45d17aed71de29b9de6952f666f.png" alt="i"></p><h2 id="_11-新建任务" tabindex="-1">11,新建任务 <a class="header-anchor" href="#_11-新建任务" aria-label="Permalink to &quot;11,新建任务&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">新建任务</p><ul><li><p>点击新建任务按钮</p></li><li><p>输入任务名称</p></li><li><p>选择构建一个maven项目</p></li><li><p>点击确定</p></li></ul></div><p><img src="https://article.biliimg.com/bfs/article/7cce44a5094d6123af38fef4d2802c602738c037.png" alt="i"></p><h2 id="_12-配置git地址" tabindex="-1">12,配置git地址 <a class="header-anchor" href="#_12-配置git地址" aria-label="Permalink to &quot;12,配置git地址&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>进入项目 -&gt; 设置 -&gt; 源码管理</p></li><li><p>点击git,Repository URL栏输入项目git地址</p></li><li><p>Credentials选择一个用户名密码,没有的点击下方添加按钮添加</p></li><li><p>如果没有红色报错,表示添加git成功</p></li><li><p>指定分支写 */master 默认主分支</p></li></ul></div><p><img src="https://article.biliimg.com/bfs/article/16ec8812dd5b8f2cf4f2ca543d16a275c9924c4e.png" alt="i"></p><h2 id="_13-打包配置" tabindex="-1">13,打包配置 <a class="header-anchor" href="#_13-打包配置" aria-label="Permalink to &quot;13,打包配置&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">打包配置</p><ul><li><p>Root POM 输入pom.xml的地址</p></li><li><p>Goals and options 输入 打包命令 clean install</p></li><li><p>如下配置</p></li></ul></div><p><img src="https://article.biliimg.com/bfs/article/dc21ad148c416491ed940b9061ccb1ce3ed88296.png" alt="i"></p><h2 id="_14-配置ssh上传" tabindex="-1">14,配置SSH上传 <a class="header-anchor" href="#_14-配置ssh上传" aria-label="Permalink to &quot;14,配置SSH上传&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">SSH上传</p><ul><li><p>点击 增加构建后操作步骤 按钮</p></li><li><p>选择 Send build artifacts over SSH 选项</p></li><li><p>在SSH-SERVER中选择要上传的服务器</p></li><li><p>在Source files中输入打包的产物的径</p></li><li><p>在Remove prefix 输入产物前路径,不然会连着文件夹一起传输</p></li><li><p>在 Remote directory 输入 服务器当前用户目录下面的某一个文件夹</p></li><li><p>例如上传到 /root/jobs 用户文件夹根目录是 /root 那就此处填写 jobs**</p></li><li><p>在 Exec command 输入上传完成后需要执行的命令,一般是执行命令</p></li><li><p>如果填写了Remote directory,那就要先进入这个文件夹,例如 # cd jobs**</p></li></ul></div><p><img src="https://article.biliimg.com/bfs/article/70b458f265c83cebcbfad6b474f3e72d95ca3fb1.png" alt="i"></p><div class="tip custom-block"><p class="custom-block-title">提示</p><ul><li>如果有多个文件需要上传,可以点击下方 Add Transfer Set 按钮新增上传</li></ul></div><h2 id="_15-构建" tabindex="-1">15,构建 <a class="header-anchor" href="#_15-构建" aria-label="Permalink to &quot;15,构建&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">构建</p><ul><li>返回项目目录,点击 立即构建 按钮</li></ul></div><p><img src="https://article.biliimg.com/bfs/article/a245aa1f3b9e4b29b3b701d8cbd66736890b73bd.png" alt="i"></p><h2 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">注意</p><ul><li><p>1, 配置完Maven和JDK以后,jenkins并不会在配置完就安装,而是在第一次运行任务的时候自动安装</p></li><li><p>2,docker-compose是定义和编排docker镜像的工具,通过使用 YML 文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有服务</p></li><li><p>3,第一次运行任务会需要较长时间用来下载依赖和安装Maven,JDK,第二次以后就会快很多</p></li></ul></div><h2 id="自定义maven路径" tabindex="-1">自定义Maven路径 <a class="header-anchor" href="#自定义maven路径" aria-label="Permalink to &quot;自定义Maven路径&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">路径</p><ul><li><p>系统管理 -&gt; 系统设置 -&gt; Local Maven Repository 选择 <code>Default (&quot;~/.m2/repository&quot;, or the value of &#39;localRepository&#39; in Maven&#39;s settings file, if defined)</code></p></li><li><p>如果想修改maven配置文件可以在 /var/jenkins_home/tools/hudson.tasks.Maven_MavenInstallation/3.8.6/conf 路径下找到setting.xml</p></li><li><p>修改本地仓库路径: <code>&lt;localRepository&gt;/root/mvnrep&lt;/localRepository&gt;</code></p></li><li><p>修改阿里云镜像</p></li></ul><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mirror</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;aliyunmaven&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mirrorOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;*&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mirrorOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;阿里云公共仓库&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;https://maven.aliyun.com/repository/public&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mirror</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></div><h2 id="自定义jdk" tabindex="-1">自定义jdk <a class="header-anchor" href="#自定义jdk" aria-label="Permalink to &quot;自定义jdk&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">jdk</p><ul><li><p>1,下载jdk解压复制到镜像jenkins内部</p></li><li><p>2,配置jenkins 系统管理 -&gt; 全局工具配置 -&gt; jdk 把自动安装去掉,JAVA_HOME填写自己的jdk路径</p></li><li><p>3,保存</p></li></ul></div><h2 id="java-net-unknownhostexception-updates-jenkins-io" tabindex="-1">java.net.UnknownHostException: updates.jenkins.io <a class="header-anchor" href="#java-net-unknownhostexception-updates-jenkins-io" aria-label="Permalink to &quot;java.net.UnknownHostException: updates.jenkins.io&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">联网错误</p><ul><li>如果出现:WARNING hudson.model.UpdateCenter#updateDefaultSite: Upgrading Jenkins. Failed to update the default Update Site &#39;default&#39;. Plugin upgrades may fail. java.net.UnknownHostException: updates.jenkins.io</li></ul><p>可能是jenkins没有联网,有两个方法</p><p>1,打开 localhost:8080/pluginManager/advanced 修改 update Site URL 为 <a href="http://updates.jenkins.io/update-center.json" target="_blank" rel="noreferrer">http://updates.jenkins.io/update-center.json</a></p><p>2,进入jenkins服务器,修改/etc/resolv.conf 文件,添加 nameserver nameserver 8.8.8.8 nameserver 114.114.114.114</p></div><h2 id="no-valid-crumb-was-included-in-request" tabindex="-1">No valid crumb was included in request <a class="header-anchor" href="#no-valid-crumb-was-included-in-request" aria-label="Permalink to &quot;No valid crumb was included in request&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">新版本Jenkins的CSRF安全校验的问题</p><ul><li><p>出现No valid crumb was included in request for /pluginManager/installPlugins by admin. Returning 403.</p></li><li><p>进入/jenkins_home/</p></li><li><p>编辑config.xml</p></li></ul></div><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">crumbIssuer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hudson.security.csrf.DefaultCrumbIssuer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">excludeClientIPFromCrumb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;true&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">excludeClientIPFromCrumb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">crumbIssuer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="_553-mail-from-must-equal-authorized-user" tabindex="-1">553 mail from must equal authorized user <a class="header-anchor" href="#_553-mail-from-must-equal-authorized-user" aria-label="Permalink to &quot;553 mail from must equal authorized user&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">测试邮件出现553 mail from must equal authorized user</p><ul><li><p>出现553 mail from must equal authorized user</p></li><li><p>在 系统管理（Manage Jenkins）的&quot;系统设置（Configure system）&quot;中&quot;Jenkins Location&quot;添加系统管理员邮件地址（System Admin e-mail address）</p></li><li><p>System Admin e-mail address要和邮件服务器的用户名一致</p></li></ul></div><h2 id="maven-jvm-terminated-unexpectedly-with-exit-code-137" tabindex="-1">Maven JVM terminated unexpectedly with exit code 137 <a class="header-anchor" href="#maven-jvm-terminated-unexpectedly-with-exit-code-137" aria-label="Permalink to &quot;Maven JVM terminated unexpectedly with exit code 137&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Maven JVM terminated unexpectedly with exit code 137</p><ul><li><p>有可能是服务器内存不足</p></li><li><p>docker update jenkins -m 3g --memory-swap -1</p></li><li><p>重启服务</p></li></ul></div><h2 id="jenkins-ssh连接超时-ssh-disconnecting-configuration" tabindex="-1">jenkins ssh连接超时 SSH: Disconnecting configuration <a class="header-anchor" href="#jenkins-ssh连接超时-ssh-disconnecting-configuration" aria-label="Permalink to &quot;jenkins ssh连接超时 SSH: Disconnecting configuration&quot;">​</a></h2><p>:::SSH: Disconnecting configuration</p><ul><li><p>可能是权限问题,例如执行脚本没有给权限</p></li><li><p>chmod 777 myshell.sh</p></li><li><p>重启服务</p></li></ul><p>:::</p><h2 id="jenkins-java-io-eofexception-unexpected-stream-termination" tabindex="-1">jenkins java.io.EOFException: unexpected stream termination <a class="header-anchor" href="#jenkins-java-io-eofexception-unexpected-stream-termination" aria-label="Permalink to &quot;jenkins java.io.EOFException: unexpected stream termination&quot;">​</a></h2><p>::: java.io.EOFException: unexpected stream termination</p><ul><li><p>可能是jdk问题</p></li><li><p>重新启动再次打包即可</p></li><li><p>重启服务</p></li></ul><p>:::</p><h2 id="jenkins-推送自动打包功能报500问题" tabindex="-1">jenkins 推送自动打包功能报500问题 <a class="header-anchor" href="#jenkins-推送自动打包功能报500问题" aria-label="Permalink to &quot;jenkins 推送自动打包功能报500问题&quot;">​</a></h2><p>::: 推送自动打包功能报500</p><ul><li><p>配置完成后需要重启jenkins</p></li><li><p>重启jenins服务后可用</p></li></ul><p>:::</p><h2 id="jenkins-打包后日志乱码问题" tabindex="-1">jenkins 打包后日志乱码问题 <a class="header-anchor" href="#jenkins-打包后日志乱码问题" aria-label="Permalink to &quot;jenkins 打包后日志乱码问题&quot;">​</a></h2><p>::: 打包后日志乱码问题</p><ul><li>运行脚本增加 export LANG=zh_CN.UTF-8; nohup java -Dfile.encoding=UTF-8</li></ul><p>:::</p>`,95),n=[t];function p(h,o,k,r,c,d){return a(),s("div",null,n)}const m=i(l,[["render",p]]);export{g as __pageData,m as default};
