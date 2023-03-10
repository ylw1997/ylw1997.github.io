import{_ as s,o as a,c as n,d as l}from"./app.b9a5d55a.js";const y=JSON.parse('{"title":"spring boot 3.0 + swagger 3.0","description":"","frontmatter":{},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]}],"relativePath":"back/java/swagger.md","lastUpdated":1676447200000}'),e={name:"back/java/swagger.md"},o=l(`<h1 id="spring-boot-3-0-swagger-3-0" tabindex="-1">spring boot 3.0 + swagger 3.0 <a class="header-anchor" href="#spring-boot-3-0-swagger-3-0" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>spring boot 3 不能使用 springdoc-openapi-ui</li><li>需要使用springdoc-openapi v2</li><li><a href="https://springdoc.org/v2/" target="_blank" rel="noreferrer">openapi v2 地址</a></li><li>浏览地址：<a href="http://localhost:8080/swagger-ui/index.html" target="_blank" rel="noreferrer">http://localhost:8080/swagger-ui/index.html</a></li></ul></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-hidden="true">#</a></h2><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">org.springdoc</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">springdoc-openapi-starter-webmvc-ui</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">2.0.2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span></span>
<span class="line"></span></code></pre></div>`,4),t=[o];function p(r,c,i,d,g,D){return a(),n("div",null,t)}const h=s(e,[["render",p]]);export{y as __pageData,h as default};
