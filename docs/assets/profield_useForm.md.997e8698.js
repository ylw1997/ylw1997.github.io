import{_ as t,o as s,c as e,d as a}from"./app.5c84acb7.js";const u=JSON.parse('{"title":"useForm \u94A9\u5B50","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":2,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C","link":"#\u8FD4\u56DE\u503C","children":[]}],"relativePath":"profield/useForm.md","lastUpdated":1666927999000}'),o={name:"profield/useForm.md"},d=a(`<h1 id="useform-\u94A9\u5B50" tabindex="-1">useForm \u94A9\u5B50 <a class="header-anchor" href="#useform-\u94A9\u5B50" aria-hidden="true">#</a></h1><ul><li>\u7528\u4E8E\u751F\u6210\u8868\u5355\u76F8\u5173\u4E8B\u4EF6\u65B9\u6CD5</li></ul><h1 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h1><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useForm</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">profield</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> formref</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> formModel </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useForm</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th></tr></thead><tbody><tr><td>emit</td><td>\u8868\u5355\u63D0\u4EA4\u4E8B\u4EF6</td><td>emit</td><td>-</td><td>\u5426</td></tr><tr><td>props</td><td>\u8868\u5355\u5C5E\u6027</td><td>props</td><td>-</td><td>\u5426</td></tr><tr><td>columns</td><td>\u8868\u5355\u5B57\u6BB5</td><td>columnItem[]</td><td>-</td><td>\u5426</td></tr></tbody></table><h2 id="\u8FD4\u56DE\u503C" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>formref</td><td>\u8868\u5355ref</td><td><code>Ref&lt;ElForm&gt;</code></td></tr><tr><td>formModel</td><td>\u8868\u5355\u6570\u636E</td><td><code>Ref&lt;Recordable&gt;</code></td></tr><tr><td>submit</td><td>\u8868\u5355\u63D0\u4EA4\u65B9\u6CD5</td><td>(e: Event) =&gt; void</td></tr><tr><td>reset</td><td>\u8868\u5355\u91CD\u7F6E\u65B9\u6CD5</td><td>() =&gt; void</td></tr><tr><td>makeRule</td><td>\u751F\u6210\u89C4\u5219</td><td>(rule: columnItem) =&gt; RuleObject[]</td></tr></tbody></table>`,8),l=[d];function n(r,p,c,i,h,D){return s(),e("div",null,l)}const m=t(o,[["render",n]]);export{u as __pageData,m as default};