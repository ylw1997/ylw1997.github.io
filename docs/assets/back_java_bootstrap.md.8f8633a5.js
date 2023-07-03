import{_ as s,o as a,c as n,V as l}from"./chunks/framework.5a3bb230.js";const A=JSON.parse('{"title":"spring cloud bootstrap.yml多环境配置","description":"","frontmatter":{},"headers":[],"relativePath":"back/java/bootstrap.md","filePath":"back/java/bootstrap.md","lastUpdated":1675671779000}'),p={name:"back/java/bootstrap.md"},o=l(`<h1 id="spring-cloud-bootstrap-yml多环境配置" tabindex="-1">spring cloud bootstrap.yml多环境配置 <a class="header-anchor" href="#spring-cloud-bootstrap-yml多环境配置" aria-label="Permalink to &quot;spring cloud bootstrap.yml多环境配置&quot;">​</a></h1><h2 id="spring-boot-多环境配置" tabindex="-1">spring boot 多环境配置 <a class="header-anchor" href="#spring-boot-多环境配置" aria-label="Permalink to &quot;spring boot 多环境配置&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>application.yml #主配置</li><li>application-dev.yml #开发配置</li><li>application-test.yml #测试配置</li><li>application-prod.yml #正式配置</li></ul></div><h2 id="spring-cloud-多环境配置" tabindex="-1">spring cloud 多环境配置 <a class="header-anchor" href="#spring-cloud-多环境配置" aria-label="Permalink to &quot;spring cloud 多环境配置&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>spring cloud 使用配置中心,使用bootstrap.yml来配置</li><li>bootstrap.yml 先加载 application.yml后加载</li><li>Bootstrap 属性有高优先级，默认情况下，它们不会被本地配置覆盖。</li></ul></div><h2 id="配置方法" tabindex="-1">配置方法 <a class="header-anchor" href="#配置方法" aria-label="Permalink to &quot;配置方法&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">配置方法</p><ul><li>多个配置以 <code>---</code>分开</li><li>通过spring.profiles.active 来使用配置</li><li>通过config.activate.on-profile 来命名环境</li></ul></div><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Tomcat</span></span>
<span class="line"><span style="color:#F07178;">server</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9300</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">spring</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">profiles</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># 环境配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">active</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Spring</span></span>
<span class="line"><span style="color:#F07178;">spring</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">application</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># 应用名称</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">scm-eco</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cloud</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">nacos</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">discovery</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># 服务注册地址</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx.xxx.xxx.xxx:18848</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">group</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DEFAULT_GROUP</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">#        namespace: 9e764c45-6965-47b3-9da2-efd95dc0c384</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">config</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># 配置中心地址</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx.xxx.xxx.xxx:18848</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># 配置文件格式</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">file-extension</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yml</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># 共享配置</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">shared-configs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">application-\${spring.profiles.active}.\${spring.cloud.nacos.config.file-extension}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#        namespace: 9e764c45-6965-47b3-9da2-efd95dc0c384</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#指定配置群组 --如果是Public命名空间 则可以省略群组配置</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">group</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DEFAULT_GROUP</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">config</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">activate</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># 环境名称</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">on-profile</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Spring</span></span>
<span class="line"><span style="color:#F07178;">spring</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">application</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># 应用名称</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">scm-eco</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cloud</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">nacos</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">discovery</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># 服务注册地址</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx.xxx.xxx.xxx:18848</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">group</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DEFAULT_GROUP</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">namespace</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">9e764c45-6965-47b3-9da2-efd95dc0c384</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">config</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># 配置中心地址</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx.xxx.xxx.xxx:18848</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># 配置文件格式</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">file-extension</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yml</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># 共享配置</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">shared-configs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">application-\${spring.profiles.active}.\${spring.cloud.nacos.config.file-extension}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">namespace</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">9e764c45-6965-47b3-9da2-efd95dc0c384</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#指定配置群组 --如果是Public命名空间 则可以省略群组配置</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">group</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DEFAULT_GROUP</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">config</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">activate</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># 环境名称</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">on-profile</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">prod</span></span></code></pre></div><h2 id="使用配置" tabindex="-1">使用配置 <a class="header-anchor" href="#使用配置" aria-label="Permalink to &quot;使用配置&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">使用</p><ul><li><code>java -jar -Dspring.profiles.active=prod *****.jar</code></li></ul></div>`,10),e=[o];function c(t,r,i,y,D,F){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{A as __pageData,d as default};
