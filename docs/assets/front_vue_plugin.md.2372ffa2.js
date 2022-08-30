import{_ as s,o as n,c as a,d as l}from"./app.d4f75ab4.js";const A=JSON.parse('{"title":"vite \u63D2\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"vue \u63D2\u4EF6","slug":"vue-\u63D2\u4EF6","link":"#vue-\u63D2\u4EF6","children":[]},{"level":2,"title":"jsx \u63D2\u4EF6","slug":"jsx-\u63D2\u4EF6","link":"#jsx-\u63D2\u4EF6","children":[]},{"level":2,"title":"name \u63D2\u4EF6","slug":"name-\u63D2\u4EF6","link":"#name-\u63D2\u4EF6","children":[]},{"level":2,"title":"gzip\u63D2\u4EF6","slug":"gzip\u63D2\u4EF6","link":"#gzip\u63D2\u4EF6","children":[]},{"level":2,"title":"\u5206\u6790\u63D2\u4EF6","slug":"\u5206\u6790\u63D2\u4EF6","link":"#\u5206\u6790\u63D2\u4EF6","children":[]},{"level":2,"title":"\u81EA\u5DF1\u5199\u63D2\u4EF6","slug":"\u81EA\u5DF1\u5199\u63D2\u4EF6","link":"#\u81EA\u5DF1\u5199\u63D2\u4EF6","children":[]}],"relativePath":"front/vue/plugin.md","lastUpdated":1661774130000}'),p={name:"front/vue/plugin.md"},o=l(`<h1 id="vite-\u63D2\u4EF6" tabindex="-1">vite \u63D2\u4EF6 <a class="header-anchor" href="#vite-\u63D2\u4EF6" aria-hidden="true">#</a></h1><h2 id="vue-\u63D2\u4EF6" tabindex="-1">vue \u63D2\u4EF6 <a class="header-anchor" href="#vue-\u63D2\u4EF6" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u7528\u6765\u652F\u6301 vue \u7EC4\u4EF6</p></div><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">// \u5B89\u88C5</span></span>
<span class="line"><span style="color:#676E95;">// yarn add @vitejs/plugin-vue;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// vite.config.js</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> vue </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@vitejs/plugin-vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">vue</span><span style="color:#A6ACCD;">()]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="jsx-\u63D2\u4EF6" tabindex="-1">jsx \u63D2\u4EF6 <a class="header-anchor" href="#jsx-\u63D2\u4EF6" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u7528\u6765\u652F\u6301 jsx\u8BED\u6CD5</p></div><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">// \u5B89\u88C5</span></span>
<span class="line"><span style="color:#676E95;">// yarn add @vitejs/plugin-vue-jsx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// vite.config.js</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> vueJsx </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@vitejs/plugin-vue-jsx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">vueJsx</span><span style="color:#A6ACCD;">()]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="name-\u63D2\u4EF6" tabindex="-1">name \u63D2\u4EF6 <a class="header-anchor" href="#name-\u63D2\u4EF6" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u7528\u6765\u652F\u6301 script setup \u8BED\u6CD5\u8BBE\u7F6E\u7EC4\u4EF6name</p></div><div class="language-tsx"><button class="copy"></button><span class="lang">tsx</span><pre><code><span class="line"><span style="color:#676E95;">// \u5B89\u88C5</span></span>
<span class="line"><span style="color:#676E95;">// tyarn add vite-plugin-vue-setup-extend</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// vite.config.js</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> vueSetupExtend </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vite-plugin-vue-setup-extend</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">vueSetupExtend</span><span style="color:#A6ACCD;">()]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4F7F\u7528</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Category</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="gzip\u63D2\u4EF6" tabindex="-1">gzip\u63D2\u4EF6 <a class="header-anchor" href="#gzip\u63D2\u4EF6" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u7528\u6765\u652F\u6301 vite\u6253\u5305\u7269\u538B\u7F29\u6210gz\u683C\u5F0F</p></div><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">// \u5B89\u88C5</span></span>
<span class="line"><span style="color:#676E95;">// yarn add rollup-plugin-gzip;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// vite.config.js</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> gzip </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rollup-plugin-gzip</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">gzip</span><span style="color:#A6ACCD;">()]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5206\u6790\u63D2\u4EF6" tabindex="-1">\u5206\u6790\u63D2\u4EF6 <a class="header-anchor" href="#\u5206\u6790\u63D2\u4EF6" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u7528\u6765\u652F\u6301 vite\u6253\u5305\u540E\u6253\u5305\u7269\u7EC4\u6210</p></div><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">// \u5B89\u88C5</span></span>
<span class="line"><span style="color:#676E95;">// yarn add rollup-plugin-visualizer;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// vite.config.js</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">visualizer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rollup-plugin-visualizer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">visualizer</span><span style="color:#A6ACCD;">()]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u81EA\u5DF1\u5199\u63D2\u4EF6" tabindex="-1">\u81EA\u5DF1\u5199\u63D2\u4EF6 <a class="header-anchor" href="#\u81EA\u5DF1\u5199\u63D2\u4EF6" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u65B9\u4FBF\u5B9E\u73B0\u81EA\u5DF1\u7684\u529F\u80FD \u8FD9\u91CC\u5199\u4E00\u4E2A\u53BB\u6389\u6240\u6709\u7684console.log\u7684\u63D2\u4EF6</p></div><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">* </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;">:\u53BB\u6389console</span></span>
<span class="line"><span style="color:#676E95;">* </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">confirmRemoveConsole</span><span style="color:#676E95;"> \u786E\u5B9A\u53BB\u6389\u5417?</span></span>
<span class="line"><span style="color:#676E95;">* </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">*</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">*/</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">confirmRemoveConsole</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">remove-console</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u5FC5\u987B\u7684\uFF0C\u5C06\u4F1A\u663E\u793A\u5728 warning \u548C error \u4E2D</span></span>
<span class="line"><span style="color:#F07178;">  transform</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">filePath</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">confirmRemoveConsole</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">filePath</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">consoStr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">console</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;">\\(</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">*?</span><span style="color:#A6ACCD;">\\)</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">consoStr</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4F7F\u7528</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> RemoveConsole </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./src/utils/RemoveConsole</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">RemoveConsole</span><span style="color:#A6ACCD;">(mode </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,19),e=[o];function t(c,r,D,F,y,i){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{A as __pageData,u as default};
