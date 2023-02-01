import{_ as s,o as t,c as a,d as o}from"./app.9637bb6b.js";const h=JSON.parse('{"title":"proForm 组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"引入","slug":"引入","link":"#引入","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[]},{"level":2,"title":"事件","slug":"事件","link":"#事件","children":[]}],"relativePath":"profield/proForm.md","lastUpdated":1666927999000}'),e={name:"profield/proForm.md"},l=o(`<h1 id="proform-组件" tabindex="-1">proForm 组件 <a class="header-anchor" href="#proform-组件" aria-hidden="true">#</a></h1><ul><li><p>proForm 是一系列基于 ant design vue 的 组件库</p></li><li><p>用来生成弹窗表单,抽屉表单,普通表单</p></li></ul><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">proForm</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">profield</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">proForm</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">700</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">规格管理</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">v-memo</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[modelData, visible, crudLoading]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">v-model:visible</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">visible</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">v-model:data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">modelData</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:loading</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">crudLoading</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">@ok</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ModelOk</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:columns</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">columns</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><blockquote><p>内置所有 ant design vue form 的属性,<a href="https://antdv.com/components/form-cn" target="_blank" rel="noreferrer">文档</a></p></blockquote><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>弹窗,抽屉标题</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>visible(v-model)</td><td>弹窗,抽屉是否显示</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>data(v-model)</td><td>表单数据</td><td><code>object</code></td><td><code>{}</code></td></tr><tr><td>loading</td><td>表单加载状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>width</td><td>弹窗,抽屉宽度</td><td><code>number</code> |<code>string</code></td><td><code>800</code></td></tr><tr><td>columns <a href="./types.html#columnitem">文档</a></td><td>表单字段</td><td><code>columnItem[]</code></td><td><code>[]</code></td></tr><tr><td>useDrawer</td><td>是否使用抽屉</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>colSpan</td><td>表单字段占比</td><td><code>number</code></td><td><code>12</code></td></tr><tr><td>noDrawerOrModal</td><td>是否不使用弹窗,抽屉</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-hidden="true">#</a></h2><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>ok</td><td>点击确定按钮</td><td><code>data</code></td></tr><tr><td>cancelFunc</td><td>点击取消按钮</td><td>无</td></tr></tbody></table>`,11),n=[l];function d(p,r,c,i,D,F){return t(),a("div",null,n)}const u=s(e,[["render",d]]);export{h as __pageData,u as default};