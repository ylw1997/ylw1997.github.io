import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.FFX0tUBF.js";const g=JSON.parse('{"title":"KubeSphere","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"other/kubesphere.md","filePath":"other/kubesphere.md","lastUpdated":1718596614000}'),p={name:"other/kubesphere.md"},l=n(`<h1 id="kubesphere" tabindex="-1">KubeSphere <a class="header-anchor" href="#kubesphere" aria-label="Permalink to &quot;KubeSphere&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>KubeSphere 是一个开源的容器平台，旨在帮助企业快速部署容器化应用，并支持容器应用的持续集成、持续交付、持续部署。</p></li><li><p>本文档在已经安装好k8s的情况下，介绍如何安装KubeSphere。</p></li><li><p><a href="https://kubesphere.io/zh/docs/v3.4/quick-start/minimal-kubesphere-on-k8s/" target="_blank" rel="noreferrer">https://kubesphere.io/zh/docs/v3.4/quick-start/minimal-kubesphere-on-k8s/</a></p></li></ul><table><thead><tr><th>主机IP</th><th>主机名</th><th>角色</th></tr></thead><tbody><tr><td>192.168.0.238</td><td>control plane</td><td>control plane, etcd</td></tr><tr><td>192.168.0.236</td><td>node1</td><td>worker</td></tr><tr><td>192.168.0.79</td><td>node2</td><td>worker</td></tr></tbody></table></div><p><img src="https://i0.hdslb.com/bfs/article/866140fd0c7c5ae5ac21534e7e8648a8102411794.png" alt="kubesphere"></p><h2 id="_1-安装" tabindex="-1">1,安装 <a class="header-anchor" href="#_1-安装" aria-label="Permalink to &quot;1,安装&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apply</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/kubesphere/ks-installer/releases/download/v3.4.1/kubesphere-installer.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apply</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/kubesphere/ks-installer/releases/download/v3.4.1/cluster-configuration.yaml</span></span></code></pre></div><h2 id="_2-检查日志" tabindex="-1">2,检查日志 <a class="header-anchor" href="#_2-检查日志" aria-label="Permalink to &quot;2,检查日志&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kubesphere-system</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get pod </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kubesphere-system </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-l</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;app in (ks-install, ks-installer)&#39; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jsonpath=&#39;{.items[0].metadata.name}&#39;)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装成功#####################################################                                                                                                           </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">###              Welcome to KubeSphere!           ###                                                                                                           </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#####################################################                                                                             </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Console: http://192.168.1.238:30880</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Account: admin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Password: P@88w0rd</span></span></code></pre></div><h2 id="_3-查看服务" tabindex="-1">3,查看服务 <a class="header-anchor" href="#_3-查看服务" aria-label="Permalink to &quot;3,查看服务&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> svc/ks-console</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kubesphere-system</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># NAME         TYPE       CLUSTER-IP     EXTERNAL-IP   PORT(S)        AGE</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ks-console   NodePort   10.98.129.12   &lt;none&gt;        80:30880/TCP   2d22h</span></span></code></pre></div><h2 id="_4-浏览器打开" tabindex="-1">4,浏览器打开 <a class="header-anchor" href="#_4-浏览器打开" aria-label="Permalink to &quot;4,浏览器打开&quot;">​</a></h2><p><code>http://192.168.1.238:30880</code>,默认账号密码: <code>admin/P@88w0rd</code></p><p><img src="https://i0.hdslb.com/bfs/article/548235ed507cdb589ea9bac963893584102411794.png" alt="img"></p><h2 id="_5-启用devops" tabindex="-1">5,启用DevOps <a class="header-anchor" href="#_5-启用devops" aria-label="Permalink to &quot;5,启用DevOps&quot;">​</a></h2><p><a href="https://kubesphere.io/zh/docs/v3.4/pluggable-components/devops/" target="_blank" rel="noreferrer">https://kubesphere.io/zh/docs/v3.4/pluggable-components/devops/</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1,登录控制平台</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2,打开定制资源定义,搜索 clusterconfiguration</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3,点击编辑YAML,修改devops配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">devops:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  enabled:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4,点击保存</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 5,查看过程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kubesphere-system</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get pod </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kubesphere-system </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-l</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;app in (ks-install, ks-installer)&#39; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jsonpath=&#39;{.items[0].metadata.name}&#39;)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 6,查看结果</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kubesphere-devops-system</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># NAME                                 READY   STATUS      RESTARTS   AGE</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># devops-28590180-cnshn                0/1     Completed   0          80m</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># devops-28590210-8bqgk                0/1     Completed   0          50m</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># devops-28590240-kxwpw                0/1     Completed   0          20m</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># devops-apiserver-57b84ddf48-7rnv6    1/1     Running     0          2d22h</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># devops-controller-7779fd7c4f-rjwq7   1/1     Running     0          2d22h</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># devops-jenkins-8646748f6-97lj2       1/1     Running     0          28h</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># s2ioperator-0                        1/1     Running     0          2d22h</span></span></code></pre></div><h2 id="_6-自定义jenkins-agent" tabindex="-1">6,自定义jenkins Agent <a class="header-anchor" href="#_6-自定义jenkins-agent" aria-label="Permalink to &quot;6,自定义jenkins Agent&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>1,平台管理，选择集群管理，然后在左侧导航栏点击配置下的配置字典</p></li><li><p>2,找到配置jenkins-casc-config,点击编辑YAML</p></li><li><p>3,在data.jenkins_user.yaml:jenkins.clouds.kubernetes.templates下添加自己的配置</p></li></ul><p><a href="https://kubesphere.io/zh/docs/v3.4/devops-user-guide/how-to-use/pipelines/customize-jenkins-agent/" target="_blank" rel="noreferrer">https://kubesphere.io/zh/docs/v3.4/devops-user-guide/how-to-use/pipelines/customize-jenkins-agent/</a></p></div><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mvn17&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 镜像名称,下方所有containers.name 都为该镜像名称</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  namespace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;kubesphere-devops-worker&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mvn17&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #标签,后续使用这个标签来选择环境并创建pod</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  nodeUsageMode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;EXCLUSIVE&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  idleMinutes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  containers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mvn17&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ylw1280426581/jdk17-mvn-docker:v1&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #自定义镜像</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cat&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ttyEnabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    privileged</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    resourceRequestCpu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100m&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    resourceLimitCpu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;4000m&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    resourceRequestMemory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100Mi&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    resourceLimitMemory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;8192Mi&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;jnlp&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;jenkins/inbound-agent:4.10-2&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^\${computer.jnlpmac} ^\${computer.name}&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    resourceRequestCpu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;50m&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    resourceLimitCpu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;500m&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    resourceRequestMemory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;400Mi&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    resourceLimitMemory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1536Mi&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  workspaceVolume</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    emptyDirWorkspaceVolume</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      memory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">hostPathVolume</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      hostPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/var/run/docker.sock&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #映射docker,如果要使用docker,需要镜像本身有docker,不然会报docker命令找不到</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      mountPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/var/run/docker.sock&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">hostPathVolume</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      hostPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/var/data/jenkins_maven_cache&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      mountPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/root/.m2&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">hostPathVolume</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      hostPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/var/data/jenkins_sonar_cache&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      mountPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/root/.sonar/cache&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  yaml</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    spec:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      affinity:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        nodeAffinity:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          preferredDuringSchedulingIgnoredDuringExecution:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          - weight: 1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            preference:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              matchExpressions:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              - key: node-role.kubernetes.io/worker</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                operator: In</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                values:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                - ci</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      tolerations:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      - key: &quot;node.kubernetes.io/ci&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        operator: &quot;Exists&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        effect: &quot;NoSchedule&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      - key: &quot;node.kubernetes.io/ci&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        operator: &quot;Exists&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        effect: &quot;PreferNoSchedule&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      containers:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      - name: &quot;mvn17&quot; </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        resources:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          requests:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            ephemeral-storage: &quot;1Gi&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          limits:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            ephemeral-storage: &quot;10Gi&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        volumeMounts:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        - name: config-volume</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          mountPath: /opt/apache-maven-3.5.3/conf/settings.xml</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          subPath: settings.xml</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      volumes:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        - name: config-volume</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          configMap:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            name: ks-devops-agent</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            items:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            - key: MavenSetting</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              path: settings.xml</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      securityContext:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        fsGroup: 1000</span></span></code></pre></div><h2 id="_7-java项目实例" tabindex="-1">7,JAVA项目实例 <a class="header-anchor" href="#_7-java项目实例" aria-label="Permalink to &quot;7,JAVA项目实例&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>本项目使用了java17,maven3.9.6,docker,k8s,原生提供的环境不支持,需要增加Jenkins agent 配置</p></li><li><p>包含整套持续集成配置</p></li></ul></div><p><img src="https://i0.hdslb.com/bfs/article/17edcdc6e3a4716c40bee551baa160e7102411794.png" alt="java"></p><div class="language-jenkinsfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jenkinsfile</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pipeline {</span></span>
<span class="line"><span>  agent {</span></span>
<span class="line"><span>    node {</span></span>
<span class="line"><span>      label &#39;mvn17&#39;  #使用自定义的agent标签</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  stages {</span></span>
<span class="line"><span>    stage(&#39;拉取代码&#39;) {</span></span>
<span class="line"><span>      agent none</span></span>
<span class="line"><span>      steps {</span></span>
<span class="line"><span>        git(url: &#39;http://xxxx/product.git&#39;, credentialsId: &#39;1023650d-328e-48d8-8d4f-a23b37486d2d&#39;, branch: &#39;master&#39;, changelog: true, poll: false)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    stage(&#39;预编译&#39;) {</span></span>
<span class="line"><span>      steps {</span></span>
<span class="line"><span>        container(&#39;mvn17&#39;) {</span></span>
<span class="line"><span>          sh &#39;mvn compile&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    stage(&#39;测试&#39;) {</span></span>
<span class="line"><span>      steps {</span></span>
<span class="line"><span>        container(&#39;mvn17&#39;) {</span></span>
<span class="line"><span>          sh &#39;mvn clean test&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    stage(&#39;打包&#39;) {</span></span>
<span class="line"><span>      steps {</span></span>
<span class="line"><span>        container(&#39;mvn17&#39;) {</span></span>
<span class="line"><span>          sh &#39;mvn package&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    stage(&#39;制作镜像&#39;) {</span></span>
<span class="line"><span>      steps {</span></span>
<span class="line"><span>        container(&#39;mvn17&#39;) {</span></span>
<span class="line"><span>          sh &#39;docker build -t xxxx/library/product:$BUILD_NUMBER .&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    stage(&#39;推送镜像&#39;) {</span></span>
<span class="line"><span>      agent none</span></span>
<span class="line"><span>      steps {</span></span>
<span class="line"><span>        container(&#39;mvn17&#39;) {</span></span>
<span class="line"><span>          withCredentials([usernamePassword(credentialsId: &#39;harbor-login-info&#39;, passwordVariable: &#39;PASSWD&#39;, usernameVariable: &#39;USER&#39;)]) {</span></span>
<span class="line"><span>            sh &#39;echo &quot;$PASSWD&quot; | docker login xxxx -u &quot;$USER&quot; --password-stdin&#39;</span></span>
<span class="line"><span>            sh &#39;docker push xxxx/library/product:$BUILD_NUMBER&#39;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    stage(&#39;打最新版标签并推送&#39;) {</span></span>
<span class="line"><span>      agent none</span></span>
<span class="line"><span>      steps {</span></span>
<span class="line"><span>        container(&#39;mvn17&#39;) {</span></span>
<span class="line"><span>          sh &#39;docker tag xxxx/library/product:$BUILD_NUMBER xxxx/library/product:latest&#39;</span></span>
<span class="line"><span>          sh &#39;docker push xxxx/library/product:latest&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    stage(&#39;部署到k8s&#39;) {</span></span>
<span class="line"><span>      agent none</span></span>
<span class="line"><span>      steps {</span></span>
<span class="line"><span>        container(&#39;mvn17&#39;) {</span></span>
<span class="line"><span>          withCredentials([kubeconfigContent(credentialsId: &#39;my-kubeconfig&#39;, variable: &#39;KUBECONFIG_CONFIG&#39;)]) {</span></span>
<span class="line"><span>            sh &#39;echo &quot;$BUILD_NUMBER&quot;&#39;</span></span>
<span class="line"><span>            sh &#39;mkdir -p ~/.kube/&#39;</span></span>
<span class="line"><span>            sh &#39;echo &quot;$KUBECONFIG_CONFIG&quot; &gt; ~/.kube/config&#39;</span></span>
<span class="line"><span>            sh &#39;envsubst &lt; devops.yaml | kubectl apply -f -&#39;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    stage(&#39;保存制品&#39;) {</span></span>
<span class="line"><span>      agent none</span></span>
<span class="line"><span>      steps {</span></span>
<span class="line"><span>        archiveArtifacts(artifacts: &#39;target/*.jar&#39;, followSymlinks: false)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_8-遇到的问题" tabindex="-1">8,遇到的问题 <a class="header-anchor" href="#_8-遇到的问题" aria-label="Permalink to &quot;8,遇到的问题&quot;">​</a></h2><h3 id="_1-没有默认storageclass" tabindex="-1">1,没有默认storageClass <a class="header-anchor" href="#_1-没有默认storageclass" aria-label="Permalink to &quot;1,没有默认storageClass&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://kubernetes.io/zh-cn/docs/concepts/storage/storage-classes/#local</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建yaml文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> storageclass.yaml</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># storageclass.yaml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apiVersion:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> storage.k8s.io/v1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kind:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> StorageClass</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">metadata:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> local-storage</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  annotations:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   https://kubernetes.io/zh-cn/docs/tasks/administer-cluster/change-default-storage-class/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    storageclass.kubernetes.io/is-default-class:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;true&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 设置为默认存储类</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">provisioner:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kubernetes.io/no-provisioner</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">volumeBindingMode:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Immediate</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apply</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> storageclass.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># NAME                      PROVISIONER                    RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># local-storage (default)   kubernetes.io/no-provisioner   Delete          Immediate           false                  72m</span></span></code></pre></div><h3 id="_2-pvc错误" tabindex="-1">2.pvc错误 <a class="header-anchor" href="#_2-pvc错误" aria-label="Permalink to &quot;2.pvc错误&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pv.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># pv.yml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apiVersion:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kind:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PersistentVolume</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">metadata:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pv5</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  labels:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">local</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">spec:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  storageClassName:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> local-storage</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  capacity:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    storage:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 30Gi</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  accessModes:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ReadWriteOnce</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  volumeMode:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Filesystem</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  persistentVolumeReclaimPolicy:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Delete</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  local:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    path:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root/pv</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  nodeAffinity:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    required:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      nodeSelectorTerms:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> matchExpressions:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> disktype</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          operator:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> In</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          values:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hdd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建pv</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apply</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pv.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># NAME   CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                                                             STORAGECLASS    REASON   AGE</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># pv1    20Gi       RWO            Delete           Bound    kubesphere-monitoring-system/prometheus-k8s-db-prometheus-k8s-0   local-storage            2d22h</span></span></code></pre></div><h3 id="_3-流水线没有docker服务" tabindex="-1">3,流水线没有docker服务 <a class="header-anchor" href="#_3-流水线没有docker服务" aria-label="Permalink to &quot;3,流水线没有docker服务&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>1,使用自定义镜像时,需要安装docker,不然使用docker时会报错</li><li>2,不安装k8s,使用kubectl也会报错</li><li>3,下面来创建自定义镜像,包含docker,k8s服务</li></ul></div><p>1,编辑Dockerfile:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> maven:3.9.6-sapmachine-17</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Install envsubst</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RUN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RUN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gettext-base</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Install Docker</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RUN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://download.docker.com/linux/static/stable/x86_64/docker-24.0.9.tgz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xvz</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker/docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Install K8s</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RUN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -LO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://dl.k8s.io/release/$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kubectl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Install Helm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RUN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get_helm.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 700</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get_helm.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./get_helm.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Install kubesphere</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RUN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/kubesphere-sigs/ks/releases/download/v0.0.71/ks-linux-amd64.tar.gz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xzv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ks</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Install kustomize</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RUN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/kubernetes-sigs/kustomize/releases/download/kustomize%2Fv5.4.1/kustomize_v5.4.1_linux_amd64.tar.gz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xzv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kustomize</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CMD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docker&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>2,打包镜像:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ylw1280426581/jdk17-mvn-docker:v1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 打包镜像,镜像名称:ylw1280426581/jdk17-mvn-docker:v1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> login</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 登录docker hub</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ylw1280426581/jdk17-mvn-docker:v1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 推送镜像到docker hub</span></span></code></pre></div>`,33),e=[l];function t(h,k,r,d,F,c){return i(),a("div",null,e)}const y=s(p,[["render",t]]);export{g as __pageData,y as default};