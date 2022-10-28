import{_ as s,o as t,c as a,d as o}from"./app.6ff2635c.js";const h=JSON.parse('{"title":"proForm \u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5F15\u5165","slug":"\u5F15\u5165","link":"#\u5F15\u5165","children":[]},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528","link":"#\u4F7F\u7528","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[]},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6","link":"#\u4E8B\u4EF6","children":[]}],"relativePath":"profield/proForm.md","lastUpdated":null}'),e={name:"profield/proForm.md"},n=o(`<h1 id="proform-\u7EC4\u4EF6" tabindex="-1">proForm \u7EC4\u4EF6 <a class="header-anchor" href="#proform-\u7EC4\u4EF6" aria-hidden="true">#</a></h1><ul><li><p>proForm \u662F\u4E00\u7CFB\u5217\u57FA\u4E8E ant design vue \u7684 \u7EC4\u4EF6\u5E93</p></li><li><p>\u7528\u6765\u751F\u6210\u5F39\u7A97\u8868\u5355,\u62BD\u5C49\u8868\u5355,\u666E\u901A\u8868\u5355</p></li></ul><h2 id="\u5F15\u5165" tabindex="-1">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">proForm</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">profield</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">proForm</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">700</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u89C4\u683C\u7BA1\u7406</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">v-memo</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[modelData, visible, crudLoading]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">v-model:visible</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">visible</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">v-model:data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">modelData</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:loading</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">crudLoading</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">@ok</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ModelOk</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:columns</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">columns</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><blockquote><p>\u5185\u7F6E\u6240\u6709 ant design vue form \u7684\u5C5E\u6027,<a href="https://antdv.com/components/form-cn" target="_blank" rel="noreferrer">\u6587\u6863</a></p></blockquote><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u5F39\u7A97,\u62BD\u5C49\u6807\u9898</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>visible(v-model)</td><td>\u5F39\u7A97,\u62BD\u5C49\u662F\u5426\u663E\u793A</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>data(v-model)</td><td>\u8868\u5355\u6570\u636E</td><td><code>object</code></td><td><code>{}</code></td></tr><tr><td>loading</td><td>\u8868\u5355\u52A0\u8F7D\u72B6\u6001</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>width</td><td>\u5F39\u7A97,\u62BD\u5C49\u5BBD\u5EA6</td><td><code>number</code> |<code>string</code></td><td><code>800</code></td></tr><tr><td>columns <a href="./types.html#columnitem">\u6587\u6863</a></td><td>\u8868\u5355\u5B57\u6BB5</td><td><code>columnItem[]</code></td><td><code>[]</code></td></tr><tr><td>useDrawer</td><td>\u662F\u5426\u4F7F\u7528\u62BD\u5C49</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>colSpan</td><td>\u8868\u5355\u5B57\u6BB5\u5360\u6BD4</td><td><code>number</code></td><td><code>12</code></td></tr><tr><td>noDrawerOrModal</td><td>\u662F\u5426\u4E0D\u4F7F\u7528\u5F39\u7A97,\u62BD\u5C49</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h2 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>ok</td><td>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE</td><td><code>data</code></td></tr><tr><td>cancelFunc</td><td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE</td><td>\u65E0</td></tr></tbody></table>`,11),l=[n];function d(p,r,c,D,i,F){return t(),a("div",null,l)}const u=s(e,[["render",d]]);export{h as __pageData,u as default};
