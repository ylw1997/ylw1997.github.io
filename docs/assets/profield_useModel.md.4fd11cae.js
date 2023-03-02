import{_ as t,o as s,c as e,d as a}from"./app.20b6c612.js";const F=JSON.parse('{"title":"useModel 钩子","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"返回值","slug":"返回值","link":"#返回值","children":[]}],"relativePath":"profield/useModel.md","lastUpdated":1668497496000}'),o={name:"profield/useModel.md"},l=a(`<h1 id="usemodel-钩子" tabindex="-1">useModel 钩子 <a class="header-anchor" href="#usemodel-钩子" aria-hidden="true">#</a></h1><ul><li>用于生成弹窗和抽屉的事件</li></ul><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useModel</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">profield</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> visible</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> modelData</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> add</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> edit</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">look </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useModel</span><span style="color:#A6ACCD;">(columns</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>columns</td><td>表格列</td><td><code>columnItem[]</code></td><td>-</td></tr></tbody></table><h2 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-hidden="true">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>visible</td><td>弹窗和抽屉的显示状态</td><td><code>Boolean</code></td></tr><tr><td>modelData</td><td>弹窗和抽屉的数据</td><td><code>Object</code></td></tr><tr><td>add</td><td>添加事件</td><td><code>(params?: any) =&gt; void</code></td></tr><tr><td>edit</td><td>编辑事件</td><td><code>(record: {[text: string]: any}) =&gt; void</code></td></tr><tr><td>look</td><td>查看事件</td><td><code>(record: {[text: string]: any}) =&gt; void</code></td></tr></tbody></table>`,8),n=[l];function d(r,p,c,i,h,D){return s(),e("div",null,n)}const A=t(o,[["render",d]]);export{F as __pageData,A as default};