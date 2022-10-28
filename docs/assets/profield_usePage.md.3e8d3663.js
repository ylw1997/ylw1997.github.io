import{_ as t,o as a,c as s,d as e}from"./app.6ff2635c.js";const F=JSON.parse('{"title":"usePage \u94A9\u5B50","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7528\u6CD5","slug":"\u7528\u6CD5","link":"#\u7528\u6CD5","children":[]},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":2,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C","link":"#\u8FD4\u56DE\u503C","children":[]}],"relativePath":"profield/usePage.md","lastUpdated":null}'),n={name:"profield/usePage.md"},o=e(`<h1 id="usepage-\u94A9\u5B50" tabindex="-1">usePage \u94A9\u5B50 <a class="header-anchor" href="#usepage-\u94A9\u5B50" aria-hidden="true">#</a></h1><ul><li>\u7528\u6765\u751F\u6210\u8868\u683C\u7EC4\u4EF6\u7684\u4E8B\u4EF6</li></ul><h2 id="\u7528\u6CD5" tabindex="-1">\u7528\u6CD5 <a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">usePage</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">profield</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//table\u65B9\u6CD5\u5C01\u88C5</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> tableLoading</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> pagination</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> tableData</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> getData</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> changeParamsCleanPage </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">usePage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">AJAXFunc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> categoryList</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>AJAXFunc</td><td>\u8BF7\u6C42\u51FD\u6570</td><td><code>(page: PageInterFace) =&gt; Promise&lt;AxiosResponse&lt;PageAjax&lt;T&gt;&gt;&gt;</code></td><td>-</td></tr><tr><td>params</td><td>\u9ED8\u8BA4\u53C2\u6570</td><td><code>PageInterFace</code></td><td>-</td></tr><tr><td>runOnMounted</td><td>\u662F\u5426\u5728\u7EC4\u4EF6\u6302\u8F7D\u65F6\u6267\u884C</td><td><code>Boolean</code></td><td><code>true</code></td></tr><tr><td>callBackFunc</td><td>\u8BF7\u6C42\u6210\u529F\u540E\u7684\u56DE\u8C03\u51FD\u6570</td><td><code>(data: T[]) =&gt; void</code></td><td><code>undefined</code></td></tr><tr><td>watchParams</td><td>\u53C2\u6570\u76D1\u542C</td><td><code>Boolean</code></td><td><code>true</code></td></tr></tbody></table><h2 id="\u8FD4\u56DE\u503C" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>rowskeys</td><td>\u8868\u683C\u884C\u9009\u62E9\u7684 key</td><td><code>Array</code></td></tr><tr><td>tableLoading</td><td>\u8868\u683C\u52A0\u8F7D\u72B6\u6001</td><td><code>Boolean</code></td></tr><tr><td>pagination</td><td>\u8868\u683C\u5206\u9875\u53C2\u6570</td><td><code>PaginationInterFace</code></td></tr><tr><td>tableData</td><td>\u8868\u683C\u6570\u636E</td><td><code>T[]</code></td></tr><tr><td>getData</td><td>\u83B7\u53D6\u8868\u683C\u6570\u636E</td><td><code>(params?: PageInterFace) =&gt; Promise&lt;void&gt;</code></td></tr><tr><td>changeParamsCleanPage</td><td>\u6539\u53D8\u53C2\u6570\u5E76\u6E05\u7A7A\u5206\u9875</td><td><code>(cleanParams: {}) =&gt; void</code></td></tr><tr><td>handleTableChange</td><td>\u8868\u683C\u5206\u9875\u4E8B\u4EF6</td><td><code>(pagination: PaginationConfig) =&gt; void</code></td></tr></tbody></table>`,8),d=[o];function l(r,c,p,i,D,h){return a(),s("div",null,d)}const A=t(n,[["render",l]]);export{F as __pageData,A as default};
