import{_ as a,o as s,c as e,d as o}from"./app.d78673fc.js";const F=JSON.parse('{"title":"proEditor \u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6837\u4F8B","slug":"\u6837\u4F8B","link":"#\u6837\u4F8B","children":[]},{"level":2,"title":"\u5F15\u5165","slug":"\u5F15\u5165","link":"#\u5F15\u5165","children":[]},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528","link":"#\u4F7F\u7528","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[]}],"relativePath":"profield/proEditor.md","lastUpdated":null}'),t={name:"profield/proEditor.md"},l=o(`<h1 id="proeditor-\u7EC4\u4EF6" tabindex="-1">proEditor \u7EC4\u4EF6 <a class="header-anchor" href="#proeditor-\u7EC4\u4EF6" aria-hidden="true">#</a></h1><ul><li>\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u5C01\u88C5\u7EC4\u4EF6</li><li>\u57FA\u4E8E <a href="https://www.wangeditor.com/" target="_blank" rel="noreferrer">wangEditor</a>\u5B9E\u73B0</li><li>\u529F\u80FD\u5F3A\u5927,\u652F\u6301\u591A\u79CD\u683C\u5F0F\u7684\u6587\u672C\u7F16\u8F91</li></ul><h2 id="\u6837\u4F8B" tabindex="-1">\u6837\u4F8B <a class="header-anchor" href="#\u6837\u4F8B" aria-hidden="true">#</a></h2><iframe src="https://codesandbox.io/embed/infallible-mirzakhani-ht47t0?fontsize=14&amp;hidenavigation=1&amp;theme=dark" style="width:100%;height:500px;border:0;border-radius:4px;overflow:hidden;" title="infallible-mirzakhani-ht47t0" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe><h2 id="\u5F15\u5165" tabindex="-1">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">proEditor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">profield-editor</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">profield-editor/dist/style.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">proEditor</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:upload-func</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">upload</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:readonly</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">readonly</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">v-model:value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">editorData</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value(v-model)</td><td>\u7F16\u8F91\u5668\u5185\u5BB9</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>readonly</td><td>\u662F\u5426\u53EA\u8BFB</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>upload-func</td><td>\u4E0A\u4F20\u56FE\u7247\u7684\u65B9\u6CD5</td><td><code>(file:File)=&gt;Promise&lt;string&gt;</code></td><td><code>()=&gt;{}</code></td></tr></tbody></table>`,10),n=[l];function r(p,d,i,c,h,D){return s(),e("div",null,n)}const u=a(t,[["render",r]]);export{F as __pageData,u as default};
