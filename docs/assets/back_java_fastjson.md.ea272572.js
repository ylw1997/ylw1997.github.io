import{_ as s,o as a,c as n,d as l}from"./app.b9a5d55a.js";const C=JSON.parse('{"title":"fastJson","description":"","frontmatter":{},"headers":[{"level":2,"title":"1,引入依赖","slug":"_1-引入依赖","link":"#_1-引入依赖","children":[]},{"level":2,"title":"2,使用","slug":"_2-使用","link":"#_2-使用","children":[]},{"level":2,"title":"3,问题","slug":"_3-问题","link":"#_3-问题","children":[{"level":3,"title":"3.1 org.springframework.data.redis.serializer.SerializationException: Could not deserialize: autoType is not support. com.yangliwei.product.entity.User","slug":"_3-1-org-springframework-data-redis-serializer-serializationexception-could-not-deserialize-autotype-is-not-support-com-yangliwei-product-entity-user","link":"#_3-1-org-springframework-data-redis-serializer-serializationexception-could-not-deserialize-autotype-is-not-support-com-yangliwei-product-entity-user","children":[]}]}],"relativePath":"back/java/fastjson.md","lastUpdated":1677660152000}'),o={name:"back/java/fastjson.md"},p=l(`<h1 id="fastjson" tabindex="-1">fastJson <a class="header-anchor" href="#fastjson" aria-hidden="true">#</a></h1><h2 id="_1-引入依赖" tabindex="-1">1,引入依赖 <a class="header-anchor" href="#_1-引入依赖" aria-hidden="true">#</a></h2><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!--        fastjson--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">com.alibaba</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">fastjson</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">1.2.79</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="_2-使用" tabindex="-1">2,使用 <a class="header-anchor" href="#_2-使用" aria-hidden="true">#</a></h2><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1,对象转json</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">User</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">User</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        user</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAge</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        user</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setName</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">张三</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> json </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toJSONString</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">json</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 2,json转对象</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">User</span><span style="color:#A6ACCD;"> user1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parseObject</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">json</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> User</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">user1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h2 id="_3-问题" tabindex="-1">3,问题 <a class="header-anchor" href="#_3-问题" aria-hidden="true">#</a></h2><h3 id="_3-1-org-springframework-data-redis-serializer-serializationexception-could-not-deserialize-autotype-is-not-support-com-yangliwei-product-entity-user" tabindex="-1">3.1 org.springframework.data.redis.serializer.SerializationException: Could not deserialize: autoType is not support. com.yangliwei.product.entity.User <a class="header-anchor" href="#_3-1-org-springframework-data-redis-serializer-serializationexception-could-not-deserialize-autotype-is-not-support-com-yangliwei-product-entity-user" aria-hidden="true">#</a></h3><blockquote><p>解决方案: 在实体类上加上NoArgsConstructor注解</p></blockquote><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Data</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Builder</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">NoArgsConstructor</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">AllArgsConstructor</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Serializable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Integer</span><span style="color:#A6ACCD;"> age</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,9),e=[p];function t(r,c,i,y,D,F){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};
