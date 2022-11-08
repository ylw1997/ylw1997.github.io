import{_ as e,o as s,c as l,d as a}from"./app.5c84acb7.js";const k=JSON.parse('{"title":"jenkins","description":"","frontmatter":{},"headers":[{"level":2,"title":"docker \u5B89\u88C5jenkins","slug":"docker-\u5B89\u88C5jenkins","link":"#docker-\u5B89\u88C5jenkins","children":[]},{"level":2,"title":"docker-compose\u5B89\u88C5jenkins","slug":"docker-compose\u5B89\u88C5jenkins","link":"#docker-compose\u5B89\u88C5jenkins","children":[{"level":3,"title":"1,\u521B\u5EFA\u6587\u4EF6\u5939","slug":"_1-\u521B\u5EFA\u6587\u4EF6\u5939","link":"#_1-\u521B\u5EFA\u6587\u4EF6\u5939","children":[]},{"level":3,"title":"2,\u521B\u5EFAdocker-compose.yml\u6587\u4EF6","slug":"_2-\u521B\u5EFAdocker-compose-yml\u6587\u4EF6","link":"#_2-\u521B\u5EFAdocker-compose-yml\u6587\u4EF6","children":[]},{"level":3,"title":"3,\u8FD0\u884Cdocker-compose.yml\u6587\u4EF6,\u542F\u52A8jenkins","slug":"_3-\u8FD0\u884Cdocker-compose-yml\u6587\u4EF6-\u542F\u52A8jenkins","link":"#_3-\u8FD0\u884Cdocker-compose-yml\u6587\u4EF6-\u542F\u52A8jenkins","children":[]}]},{"level":2,"title":"1,\u8BBF\u95EEjenkins","slug":"_1-\u8BBF\u95EEjenkins","link":"#_1-\u8BBF\u95EEjenkins","children":[]},{"level":2,"title":"2,\u89E3\u9501jenkins","slug":"_2-\u89E3\u9501jenkins","link":"#_2-\u89E3\u9501jenkins","children":[]},{"level":2,"title":"3,\u9009\u62E9\u63D2\u4EF6\u5B89\u88C5","slug":"_3-\u9009\u62E9\u63D2\u4EF6\u5B89\u88C5","link":"#_3-\u9009\u62E9\u63D2\u4EF6\u5B89\u88C5","children":[]},{"level":2,"title":"4,\u521B\u5EFA\u7BA1\u7406\u5458\u8D26\u53F7","slug":"_4-\u521B\u5EFA\u7BA1\u7406\u5458\u8D26\u53F7","link":"#_4-\u521B\u5EFA\u7BA1\u7406\u5458\u8D26\u53F7","children":[]},{"level":2,"title":"5,\u5B89\u88C5\u5B8C\u6210","slug":"_5-\u5B89\u88C5\u5B8C\u6210","link":"#_5-\u5B89\u88C5\u5B8C\u6210","children":[]},{"level":2,"title":"6,\u5B89\u88C5\u63D2\u4EF6","slug":"_6-\u5B89\u88C5\u63D2\u4EF6","link":"#_6-\u5B89\u88C5\u63D2\u4EF6","children":[]},{"level":2,"title":"7,\u914D\u7F6Enodejs","slug":"_7-\u914D\u7F6Enodejs","link":"#_7-\u914D\u7F6Enodejs","children":[]},{"level":2,"title":"8,\u914D\u7F6Emaven","slug":"_8-\u914D\u7F6Emaven","link":"#_8-\u914D\u7F6Emaven","children":[]},{"level":2,"title":"9,\u914D\u7F6EJDK","slug":"_9-\u914D\u7F6Ejdk","link":"#_9-\u914D\u7F6Ejdk","children":[]},{"level":2,"title":"10,\u914D\u7F6ESSH\u670D\u52A1\u5668","slug":"_10-\u914D\u7F6Essh\u670D\u52A1\u5668","link":"#_10-\u914D\u7F6Essh\u670D\u52A1\u5668","children":[]},{"level":2,"title":"11,\u65B0\u5EFA\u4EFB\u52A1","slug":"_11-\u65B0\u5EFA\u4EFB\u52A1","link":"#_11-\u65B0\u5EFA\u4EFB\u52A1","children":[]},{"level":2,"title":"12,\u914D\u7F6Egit\u5730\u5740","slug":"_12-\u914D\u7F6Egit\u5730\u5740","link":"#_12-\u914D\u7F6Egit\u5730\u5740","children":[]},{"level":2,"title":"13,\u6253\u5305\u914D\u7F6E","slug":"_13-\u6253\u5305\u914D\u7F6E","link":"#_13-\u6253\u5305\u914D\u7F6E","children":[]},{"level":2,"title":"14,\u914D\u7F6ESSH\u4E0A\u4F20","slug":"_14-\u914D\u7F6Essh\u4E0A\u4F20","link":"#_14-\u914D\u7F6Essh\u4E0A\u4F20","children":[]},{"level":2,"title":"15,\u6784\u5EFA","slug":"_15-\u6784\u5EFA","link":"#_15-\u6784\u5EFA","children":[]},{"level":2,"title":"\u6CE8\u610F","slug":"\u6CE8\u610F","link":"#\u6CE8\u610F","children":[]},{"level":2,"title":"\u9519\u8BEF\u5904\u7406","slug":"\u9519\u8BEF\u5904\u7406","link":"#\u9519\u8BEF\u5904\u7406","children":[{"level":3,"title":"java.net.UnknownHostException: updates.jenkins.io","slug":"java-net-unknownhostexception-updates-jenkins-io","link":"#java-net-unknownhostexception-updates-jenkins-io","children":[]},{"level":3,"title":"No valid crumb was included in request","slug":"no-valid-crumb-was-included-in-request","link":"#no-valid-crumb-was-included-in-request","children":[]},{"level":3,"title":"553 mail from must equal authorized user","slug":"_553-mail-from-must-equal-authorized-user","link":"#_553-mail-from-must-equal-authorized-user","children":[]},{"level":3,"title":"Maven JVM terminated unexpectedly with exit code 137","slug":"maven-jvm-terminated-unexpectedly-with-exit-code-137","link":"#maven-jvm-terminated-unexpectedly-with-exit-code-137","children":[]}]}],"relativePath":"other/jenkins.md","lastUpdated":1663902827000}'),n={name:"other/jenkins.md"},i=a(`<h1 id="jenkins" tabindex="-1">jenkins <a class="header-anchor" href="#jenkins" aria-hidden="true">#</a></h1><blockquote><p>jenkins \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u6301\u7EED\u96C6\u6210\u5DE5\u5177\uFF0C\u53EF\u4EE5\u7528\u6765\u81EA\u52A8\u5316\u6784\u5EFA\u3001\u6D4B\u8BD5\u3001\u90E8\u7F72\u9879\u76EE</p></blockquote><blockquote><p>\u8FD9\u91CC\u7528docker-compose \u90E8\u7F72jenkins,\u5E76\u628Ajenkins\u6587\u4EF6\u5939\u6620\u5C04\u5230\u5916\u90E8,\u65B9\u4FBF\u7BA1\u7406</p></blockquote><h2 id="docker-\u5B89\u88C5jenkins" tabindex="-1">docker \u5B89\u88C5jenkins <a class="header-anchor" href="#docker-\u5B89\u88C5jenkins" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u83B7\u53D6\u955C\u50CF</span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull jenkins/jenkins:lts</span></span>
<span class="line"><span style="color:#676E95;"># \u8FD0\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -d -p 8080:8080 -p 50000:50000 -v /root/mydocker/jenkins:/var/jenkins_home --name myjenkins -u root --privileged=true --restart=always jenkins/jenkins:lts</span></span>
<span class="line"></span></code></pre></div><h2 id="docker-compose\u5B89\u88C5jenkins" tabindex="-1">docker-compose\u5B89\u88C5jenkins <a class="header-anchor" href="#docker-compose\u5B89\u88C5jenkins" aria-hidden="true">#</a></h2><h3 id="_1-\u521B\u5EFA\u6587\u4EF6\u5939" tabindex="-1">1,\u521B\u5EFA\u6587\u4EF6\u5939 <a class="header-anchor" href="#_1-\u521B\u5EFA\u6587\u4EF6\u5939" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">-- demo</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">-- compose //\u5B58\u653Edocker-compose.yml\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">-- jenkins //jenkins\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">-- jenkins_home //jenkins\u8FD0\u884C\u73AF\u5883\u5916\u90E8\u6620\u5C04\u6587\u4EF6\u5939</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-\u521B\u5EFAdocker-compose-yml\u6587\u4EF6" tabindex="-1">2,\u521B\u5EFAdocker-compose.yml\u6587\u4EF6 <a class="header-anchor" href="#_2-\u521B\u5EFAdocker-compose-yml\u6587\u4EF6" aria-hidden="true">#</a></h3><p>\u5728compose\u6587\u4EF6\u5939\u4E0B\u521B\u5EFAdocker-compose.yml\u6587\u4EF6</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">version: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">services:</span></span>
<span class="line"><span style="color:#A6ACCD;">  docker_jenkins:</span></span>
<span class="line"><span style="color:#A6ACCD;">    user: root </span><span style="color:#676E95;"># \u4F7F\u7528root\u7528\u6237\u8FD0\u884Cdocker</span></span>
<span class="line"><span style="color:#A6ACCD;">    restart: always </span><span style="color:#676E95;"># \u91CD\u542F\u65F6\u91CD\u65B0\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">    image: jenkins/jenkins:lts </span><span style="color:#676E95;"># \u955C\u50CF</span></span>
<span class="line"><span style="color:#A6ACCD;">    container_name: docker_jenkins </span><span style="color:#676E95;"># \u5BB9\u5668\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">    ports:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">8080:8080</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u5BB9\u5668\u7AEF\u53E3\u6620\u5C04\u5230\u4E3B\u673A\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">      - </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">50000:50000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u5BB9\u5668\u7AEF\u53E3\u6620\u5C04\u5230\u4E3B\u673A\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">    volumes:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - /demo/jenkins/jenkins_home:/var/jenkins_home  </span><span style="color:#676E95;"># \u628Ajenkins_home\u6620\u5C04\u5230\u672C\u5730</span></span>
<span class="line"></span></code></pre></div><p><img src="https://article.biliimg.com/bfs/article/7ac8eae312c980d5a080416637471ee85895ff1a.png" alt="\u56FE\u7247"></p><h3 id="_3-\u8FD0\u884Cdocker-compose-yml\u6587\u4EF6-\u542F\u52A8jenkins" tabindex="-1">3,\u8FD0\u884Cdocker-compose.yml\u6587\u4EF6,\u542F\u52A8jenkins <a class="header-anchor" href="#_3-\u8FD0\u884Cdocker-compose-yml\u6587\u4EF6-\u542F\u52A8jenkins" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">docker-compose up -d</span></span>
<span class="line"></span></code></pre></div><p><img src="https://article.biliimg.com/bfs/article/49bd4814740253982e822cc907f315f6b07c69eb.png" alt="\u56FE\u7247"></p><blockquote><p>\u67E5\u770B\u662F\u5426\u542F\u52A8\u6210\u529F</p></blockquote><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">docker ps -a</span></span>
<span class="line"></span></code></pre></div><p><img src="https://article.biliimg.com/bfs/article/4e699dec924b35da5e332f85d0c37461cfea990d.png" alt="img"></p><blockquote><p>\u542F\u52A8\u6210\u529F,\u5E76\u4E14\u7AEF\u53E38080\u5DF2\u7ECF\u548C\u672C\u57308080\u6620\u5C04\u4E86</p></blockquote><h2 id="_1-\u8BBF\u95EEjenkins" tabindex="-1">1,\u8BBF\u95EEjenkins <a class="header-anchor" href="#_1-\u8BBF\u95EEjenkins" aria-hidden="true">#</a></h2><blockquote><p>\u6D4F\u89C8\u5668\u6253\u5F00 <code>http://localhost:8080</code></p></blockquote><p><img src="https://article.biliimg.com/bfs/article/c6f0fc3de62db66c7e897ae0feebeb359b5a4d7d.png" alt="img"></p><h2 id="_2-\u89E3\u9501jenkins" tabindex="-1">2,\u89E3\u9501jenkins <a class="header-anchor" href="#_2-\u89E3\u9501jenkins" aria-hidden="true">#</a></h2><blockquote><p>\u8FDB\u5165jenkins\u540E,\u4F1A\u63D0\u793A\u89E3\u9501jenkins,\u9700\u8981\u5728docker\u5BB9\u5668\u4E2D\u627E\u5230\u89E3\u9501\u5BC6\u7801</p></blockquote><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u8FDB\u5165docker\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> -it docker_jenkins /bin/bash</span></span>
<span class="line"><span style="color:#676E95;"># \u627E\u5230\u89E3\u9501\u5BC6\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">cat /var/jenkins_home/secrets/initialAdminPassword</span></span>
<span class="line"></span></code></pre></div><h2 id="_3-\u9009\u62E9\u63D2\u4EF6\u5B89\u88C5" tabindex="-1">3,\u9009\u62E9\u63D2\u4EF6\u5B89\u88C5 <a class="header-anchor" href="#_3-\u9009\u62E9\u63D2\u4EF6\u5B89\u88C5" aria-hidden="true">#</a></h2><blockquote><p>\u9009\u62E9\u81EA\u5DF1\u9700\u8981\u7684\u63D2\u4EF6\u5B89\u88C5,\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5B89\u88C5\u540E\u9762\u518D\u5B89\u88C5</p></blockquote><p><img src="https://article.biliimg.com/bfs/article/fb1d668ccd564924202d3aacf41630db83035ccd.png" alt="img"></p><h2 id="_4-\u521B\u5EFA\u7BA1\u7406\u5458\u8D26\u53F7" tabindex="-1">4,\u521B\u5EFA\u7BA1\u7406\u5458\u8D26\u53F7 <a class="header-anchor" href="#_4-\u521B\u5EFA\u7BA1\u7406\u5458\u8D26\u53F7" aria-hidden="true">#</a></h2><blockquote><p>\u521B\u5EFA\u7BA1\u7406\u5458\u8D26\u53F7</p></blockquote><p><img src="https://article.biliimg.com/bfs/article/a5b03d494be52fee197f7b73b6aa2e4afb10cbed.png" alt="img"></p><h2 id="_5-\u5B89\u88C5\u5B8C\u6210" tabindex="-1">5,\u5B89\u88C5\u5B8C\u6210 <a class="header-anchor" href="#_5-\u5B89\u88C5\u5B8C\u6210" aria-hidden="true">#</a></h2><blockquote><p>\u5B89\u88C5\u5B8C\u6210,\u8FDB\u5165jenkins</p></blockquote><p><img src="https://article.biliimg.com/bfs/article/10866b6f646647b93d9c72b1c5ad50c15b4beb0c.png" alt="img"></p><h2 id="_6-\u5B89\u88C5\u63D2\u4EF6" tabindex="-1">6,\u5B89\u88C5\u63D2\u4EF6 <a class="header-anchor" href="#_6-\u5B89\u88C5\u63D2\u4EF6" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u5B89\u88C5\u63D2\u4EF6</p><ul><li>Localization: Chinese (Simplified) \u4E2D\u6587\u8BED\u8A00\u5305</li><li>Publish Over SSH \u901A\u8FC7ssh\u4E0A\u4F20\u6253\u5305\u4EA7\u7269</li><li>github plugin</li><li>gitlab plugin</li><li>gitee plugin</li><li>nodejs plugin</li><li>Maven Integration</li></ul></div><h2 id="_7-\u914D\u7F6Enodejs" tabindex="-1">7,\u914D\u7F6Enodejs <a class="header-anchor" href="#_7-\u914D\u7F6Enodejs" aria-hidden="true">#</a></h2><blockquote><p>\u914D\u7F6Enodejs,\u4E3B\u8981\u662F\u524D\u7AEF\u9879\u76EE\u4F7F\u7528</p></blockquote><blockquote><p>\u6253\u5F00\u7CFB\u7EDF\u7BA1\u7406 -&gt; \u5168\u5C40\u5DE5\u5177\u914D\u7F6E -&gt; nodejs</p></blockquote><blockquote><p>\u6309\u7167\u5982\u4E0B\u914D\u7F6E</p></blockquote><p><img src="https://article.biliimg.com/bfs/article/3dfc98a8dc0793bc9898142b4e50baaa9ab4fd5c.png" alt="img"></p><h2 id="_8-\u914D\u7F6Emaven" tabindex="-1">8,\u914D\u7F6Emaven <a class="header-anchor" href="#_8-\u914D\u7F6Emaven" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>\u4E3B\u8981\u662F\u540E\u7AEFjava\u9879\u76EE\u4F7F\u7528</p></li><li><p>\u6253\u5F00\u7CFB\u7EDF\u7BA1\u7406 -&gt; \u5168\u5C40\u5DE5\u5177\u914D\u7F6E -&gt; Maven</p></li><li><p>\u5982\u4E0B\u914D\u7F6E</p></li></ul></div><p><img src="https://article.biliimg.com/bfs/article/50c9258868972806cf4f6450043213ee6b5ba973.png" alt="img"></p><h2 id="_9-\u914D\u7F6Ejdk" tabindex="-1">9,\u914D\u7F6EJDK <a class="header-anchor" href="#_9-\u914D\u7F6Ejdk" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u914D\u7F6EJDK</p><ul><li><p>\u4E3B\u8981\u662F\u540E\u7AEFjava\u9879\u76EE\u4F7F\u7528</p></li><li><p>\u6253\u5F00\u7CFB\u7EDF\u7BA1\u7406 -&gt; \u5168\u5C40\u5DE5\u5177\u914D\u7F6E -&gt; JDK</p></li><li><p>\u9700\u8981\u767B\u5F55\u7532\u9AA8\u6587\u8D26\u53F7,\u70B9\u51FB\u4E0B\u56FE\u7EA2\u8272\u533A\u57DF\u8F93\u5165\u7532\u9AA8\u6587\u8D26\u53F7\u5BC6\u7801</p></li></ul></div><p><img src="https://article.biliimg.com/bfs/article/8837d02222be566a9789a02d08b1ba6042a29451.png" alt="i"></p><p><img src="https://article.biliimg.com/bfs/article/275948e8d33132f4febd552139c139129be38c1c.png" alt="i"></p><h2 id="_10-\u914D\u7F6Essh\u670D\u52A1\u5668" tabindex="-1">10,\u914D\u7F6ESSH\u670D\u52A1\u5668 <a class="header-anchor" href="#_10-\u914D\u7F6Essh\u670D\u52A1\u5668" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u670D\u52A1\u5668</p><ul><li><p>\u914D\u7F6E\u670D\u52A1\u5668\u662F\u4E3A\u4E86\u81EA\u52A8\u5316\u90E8\u7F72\u4F7F\u7528</p></li><li><p>\u6253\u5F00\u7CFB\u7EDF\u7BA1\u7406 -&gt; \u7CFB\u7EDF\u7BA1\u7406 -&gt; \u7CFB\u7EDF\u914D\u7F6E -&gt; SSH Servers</p></li><li><p>\u6CE8\u610F\u914D\u7F6E\u65F6,\u70B9\u51FB\u9AD8\u7EA7,\u9009\u62E9Use password authentication, or use a different key,\u5E76\u8F93\u5165\u5BC6\u7801</p></li><li><p>\u914D\u7F6E\u5B8C\u70B9\u51FBTest Configuration \u5982\u679C\u51FA\u73B0Success \u8868\u793A\u6DFB\u52A0ssh\u670D\u52A1\u5668\u6210\u529F</p></li><li><p>\u6309\u7167\u4E0B\u56FE\u914D\u7F6E</p></li></ul></div><p><img src="https://article.biliimg.com/bfs/article/428bdb69861ad45d17aed71de29b9de6952f666f.png" alt="i"></p><h2 id="_11-\u65B0\u5EFA\u4EFB\u52A1" tabindex="-1">11,\u65B0\u5EFA\u4EFB\u52A1 <a class="header-anchor" href="#_11-\u65B0\u5EFA\u4EFB\u52A1" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u65B0\u5EFA\u4EFB\u52A1</p><ul><li><p>\u70B9\u51FB\u65B0\u5EFA\u4EFB\u52A1\u6309\u94AE</p></li><li><p>\u8F93\u5165\u4EFB\u52A1\u540D\u79F0</p></li><li><p>\u9009\u62E9\u6784\u5EFA\u4E00\u4E2Amaven\u9879\u76EE</p></li><li><p>\u70B9\u51FB\u786E\u5B9A</p></li></ul></div><p><img src="https://article.biliimg.com/bfs/article/7cce44a5094d6123af38fef4d2802c602738c037.png" alt="i"></p><h2 id="_12-\u914D\u7F6Egit\u5730\u5740" tabindex="-1">12,\u914D\u7F6Egit\u5730\u5740 <a class="header-anchor" href="#_12-\u914D\u7F6Egit\u5730\u5740" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>\u8FDB\u5165\u9879\u76EE -&gt; \u8BBE\u7F6E -&gt; \u6E90\u7801\u7BA1\u7406</p></li><li><p>\u70B9\u51FBgit,Repository URL\u680F\u8F93\u5165\u9879\u76EEgit\u5730\u5740</p></li><li><p>Credentials\u9009\u62E9\u4E00\u4E2A\u7528\u6237\u540D\u5BC6\u7801,\u6CA1\u6709\u7684\u70B9\u51FB\u4E0B\u65B9\u6DFB\u52A0\u6309\u94AE\u6DFB\u52A0</p></li><li><p>\u5982\u679C\u6CA1\u6709\u7EA2\u8272\u62A5\u9519,\u8868\u793A\u6DFB\u52A0git\u6210\u529F</p></li><li><p>\u6307\u5B9A\u5206\u652F\u5199 */master \u9ED8\u8BA4\u4E3B\u5206\u652F</p></li></ul></div><p><img src="https://article.biliimg.com/bfs/article/16ec8812dd5b8f2cf4f2ca543d16a275c9924c4e.png" alt="i"></p><h2 id="_13-\u6253\u5305\u914D\u7F6E" tabindex="-1">13,\u6253\u5305\u914D\u7F6E <a class="header-anchor" href="#_13-\u6253\u5305\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u6253\u5305\u914D\u7F6E</p><ul><li><p>Root POM \u8F93\u5165pom.xml\u7684\u5730\u5740</p></li><li><p>Goals and options \u8F93\u5165 \u6253\u5305\u547D\u4EE4 clean install</p></li><li><p>\u5982\u4E0B\u914D\u7F6E</p></li></ul></div><p><img src="https://article.biliimg.com/bfs/article/dc21ad148c416491ed940b9061ccb1ce3ed88296.png" alt="i"></p><h2 id="_14-\u914D\u7F6Essh\u4E0A\u4F20" tabindex="-1">14,\u914D\u7F6ESSH\u4E0A\u4F20 <a class="header-anchor" href="#_14-\u914D\u7F6Essh\u4E0A\u4F20" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">SSH\u4E0A\u4F20</p><ul><li><p>\u70B9\u51FB \u589E\u52A0\u6784\u5EFA\u540E\u64CD\u4F5C\u6B65\u9AA4 \u6309\u94AE</p></li><li><p>\u9009\u62E9 Send build artifacts over SSH \u9009\u9879</p></li><li><p>\u5728SSH-SERVER\u4E2D\u9009\u62E9\u8981\u4E0A\u4F20\u7684\u670D\u52A1\u5668</p></li><li><p>\u5728Source files\u4E2D\u8F93\u5165\u6253\u5305\u7684\u4EA7\u7269\u7684\u5F84</p></li><li><p>\u5728Remove prefix \u8F93\u5165\u4EA7\u7269\u524D\u8DEF\u5F84,\u4E0D\u7136\u4F1A\u8FDE\u7740\u6587\u4EF6\u5939\u4E00\u8D77\u4F20\u8F93</p></li><li><p>\u5728 Remote directory \u8F93\u5165 \u670D\u52A1\u5668\u5F53\u524D\u7528\u6237\u76EE\u5F55\u4E0B\u9762\u7684\u67D0\u4E00\u4E2A\u6587\u4EF6\u5939</p></li></ul><p><strong>\u4F8B\u5982\u4E0A\u4F20\u5230 /root/jobs \u7528\u6237\u6587\u4EF6\u5939\u6839\u76EE\u5F55\u662F /root \u90A3\u5C31\u6B64\u5904\u586B\u5199 jobs</strong></p><ul><li>\u5728 Exec command \u8F93\u5165\u4E0A\u4F20\u5B8C\u6210\u540E\u9700\u8981\u6267\u884C\u7684\u547D\u4EE4,\u4E00\u822C\u662F\u6267\u884C\u547D\u4EE4</li></ul><p><strong>\u5982\u679C\u586B\u5199\u4E86Remote directory,\u90A3\u5C31\u8981\u5148\u8FDB\u5165\u8FD9\u4E2A\u6587\u4EF6\u5939,\u4F8B\u5982 # cd jobs</strong></p></div><p><img src="https://article.biliimg.com/bfs/article/70b458f265c83cebcbfad6b474f3e72d95ca3fb1.png" alt="i"></p><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><ul><li>\u5982\u679C\u6709\u591A\u4E2A\u6587\u4EF6\u9700\u8981\u4E0A\u4F20,\u53EF\u4EE5\u70B9\u51FB\u4E0B\u65B9 Add Transfer Set \u6309\u94AE\u65B0\u589E\u4E0A\u4F20</li></ul></div><h2 id="_15-\u6784\u5EFA" tabindex="-1">15,\u6784\u5EFA <a class="header-anchor" href="#_15-\u6784\u5EFA" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u6784\u5EFA</p><ul><li>\u8FD4\u56DE\u9879\u76EE\u76EE\u5F55,\u70B9\u51FB \u7ACB\u5373\u6784\u5EFA \u6309\u94AE</li></ul></div><p><img src="https://article.biliimg.com/bfs/article/a245aa1f3b9e4b29b3b701d8cbd66736890b73bd.png" alt="i"></p><h2 id="\u6CE8\u610F" tabindex="-1">\u6CE8\u610F <a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u6CE8\u610F</p><ul><li><p>1, \u914D\u7F6E\u5B8CMaven\u548CJDK\u4EE5\u540E,jenkins\u5E76\u4E0D\u4F1A\u5728\u914D\u7F6E\u5B8C\u5C31\u5B89\u88C5,\u800C\u662F\u5728\u7B2C\u4E00\u6B21\u8FD0\u884C\u4EFB\u52A1\u7684\u65F6\u5019\u81EA\u52A8\u5B89\u88C5</p></li><li><p>2,docker-compose\u662F\u5B9A\u4E49\u548C\u7F16\u6392docker\u955C\u50CF\u7684\u5DE5\u5177,\u901A\u8FC7\u4F7F\u7528 YML \u6587\u4EF6\u6765\u914D\u7F6E\u5E94\u7528\u7A0B\u5E8F\u9700\u8981\u7684\u6240\u6709\u670D\u52A1\u3002\u7136\u540E\uFF0C\u4F7F\u7528\u4E00\u4E2A\u547D\u4EE4\uFF0C\u5C31\u53EF\u4EE5\u4ECE YML \u6587\u4EF6\u914D\u7F6E\u4E2D\u521B\u5EFA\u5E76\u542F\u52A8\u6240\u6709\u670D\u52A1</p></li><li><p>3,\u7B2C\u4E00\u6B21\u8FD0\u884C\u4EFB\u52A1\u4F1A\u9700\u8981\u8F83\u957F\u65F6\u95F4\u7528\u6765\u4E0B\u8F7D\u4F9D\u8D56\u548C\u5B89\u88C5Maven,JDK,\u7B2C\u4E8C\u6B21\u4EE5\u540E\u5C31\u4F1A\u5FEB\u5F88\u591A</p></li></ul></div><h2 id="\u9519\u8BEF\u5904\u7406" tabindex="-1">\u9519\u8BEF\u5904\u7406 <a class="header-anchor" href="#\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a></h2><h3 id="java-net-unknownhostexception-updates-jenkins-io" tabindex="-1">java.net.UnknownHostException: <a href="http://updates.jenkins.io" target="_blank" rel="noreferrer">updates.jenkins.io</a> <a class="header-anchor" href="#java-net-unknownhostexception-updates-jenkins-io" aria-hidden="true">#</a></h3><div class="warning custom-block"><p class="custom-block-title">\u8054\u7F51\u9519\u8BEF</p><ul><li>\u5982\u679C\u51FA\u73B0:WARNING hudson.model.UpdateCenter#updateDefaultSite: Upgrading Jenkins. Failed to update the default Update Site &#39;default&#39;. Plugin upgrades may fail. java.net.UnknownHostException: <a href="http://updates.jenkins.io" target="_blank" rel="noreferrer">updates.jenkins.io</a></li></ul><p>\u53EF\u80FD\u662Fjenkins\u6CA1\u6709\u8054\u7F51,\u6709\u4E24\u4E2A\u65B9\u6CD5</p><p>1,\u6253\u5F00 localhost:8080/pluginManager/advanced \u4FEE\u6539 update Site URL \u4E3A <a href="http://updates.jenkins.io/update-center.json" target="_blank" rel="noreferrer">http://updates.jenkins.io/update-center.json</a></p><p>2,\u8FDB\u5165jenkins\u670D\u52A1\u5668,\u4FEE\u6539/etc/resolv.conf \u6587\u4EF6,\u6DFB\u52A0 nameserver nameserver 8.8.8.8 nameserver 114.114.114.114</p></div><h3 id="no-valid-crumb-was-included-in-request" tabindex="-1">No valid crumb was included in request <a class="header-anchor" href="#no-valid-crumb-was-included-in-request" aria-hidden="true">#</a></h3><div class="warning custom-block"><p class="custom-block-title">\u65B0\u7248\u672CJenkins\u7684CSRF\u5B89\u5168\u6821\u9A8C\u7684\u95EE\u9898</p><ul><li><p>\u51FA\u73B0No valid crumb was included in request for /pluginManager/installPlugins by admin. Returning 403.</p></li><li><p>\u8FDB\u5165/jenkins_home/</p></li><li><p>\u7F16\u8F91config.xml</p></li></ul></div><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">crumbIssuer</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hudson.security.csrf.DefaultCrumbIssuer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">excludeClientIPFromCrumb</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">true</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">excludeClientIPFromCrumb</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">crumbIssuer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="_553-mail-from-must-equal-authorized-user" tabindex="-1">553 mail from must equal authorized user <a class="header-anchor" href="#_553-mail-from-must-equal-authorized-user" aria-hidden="true">#</a></h3><div class="warning custom-block"><p class="custom-block-title">\u6D4B\u8BD5\u90AE\u4EF6\u51FA\u73B0553 mail from must equal authorized user</p><ul><li><p>\u51FA\u73B0553 mail from must equal authorized user</p></li><li><p>\u5728 \u7CFB\u7EDF\u7BA1\u7406\uFF08Manage Jenkins\uFF09\u7684&quot;\u7CFB\u7EDF\u8BBE\u7F6E\uFF08Configure system\uFF09&quot;\u4E2D&quot;Jenkins Location&quot;\u6DFB\u52A0\u7CFB\u7EDF\u7BA1\u7406\u5458\u90AE\u4EF6\u5730\u5740\uFF08System Admin e-mail address\uFF09</p></li><li><p>System Admin e-mail address\u8981\u548C\u90AE\u4EF6\u670D\u52A1\u5668\u7684\u7528\u6237\u540D\u4E00\u81F4</p></li></ul></div><h3 id="maven-jvm-terminated-unexpectedly-with-exit-code-137" tabindex="-1">Maven JVM terminated unexpectedly with exit code 137 <a class="header-anchor" href="#maven-jvm-terminated-unexpectedly-with-exit-code-137" aria-hidden="true">#</a></h3><div class="warning custom-block"><p class="custom-block-title">Maven JVM terminated unexpectedly with exit code 137</p><ul><li><p>\u6709\u53EF\u80FD\u662F\u670D\u52A1\u5668\u5185\u5B58\u4E0D\u8DB3</p></li><li><p>docker update jenkins -m 3g --memory-swap -1</p></li><li><p>\u91CD\u542F\u670D\u52A1</p></li></ul></div>`,79),t=[i];function o(c,p,r,d,u,h){return s(),l("div",null,t)}const b=e(n,[["render",o]]);export{k as __pageData,b as default};