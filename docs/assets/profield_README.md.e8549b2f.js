import{_ as e,o as a,c as l,d as s}from"./app.9637bb6b.js";const f=JSON.parse('{"title":"proField 库","description":"","frontmatter":{},"headers":[{"level":2,"title":"实例","slug":"实例","link":"#实例","children":[]},{"level":2,"title":"独立组件","slug":"独立组件","link":"#独立组件","children":[]},{"level":2,"title":"内置组件","slug":"内置组件","link":"#内置组件","children":[]},{"level":2,"title":"内置钩子","slug":"内置钩子","link":"#内置钩子","children":[]},{"level":2,"title":"内置类型","slug":"内置类型","link":"#内置类型","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"在项目中使用","slug":"在项目中使用","link":"#在项目中使用","children":[]}],"relativePath":"profield/README.md","lastUpdated":1668131857000}'),o={name:"profield/README.md"},p=s(`<h1 id="profield-库" tabindex="-1">proField 库 <a class="header-anchor" href="#profield-库" aria-hidden="true">#</a></h1><img src="https://article.biliimg.com/bfs/article/b2fca8e0d573c6c4b23f8dbefc656b3bb845a6f8.png" width="200" style="display:block;margin:0 auto;"><ul><li><p>npm: <a href="https://www.npmjs.com/package/profield" target="_blank" rel="noreferrer">profield</a></p></li><li><p>github: <a href="https://github.com/ylw1997/profield" target="_blank" rel="noreferrer">profield</a></p></li><li><p>proField 是一系列基于 ant design vue 的 组件库</p></li><li><p>旨在提供一套快速生成增删改查,表单,弹窗,上传组件,以及一些常用的 hooks 和工具函数</p></li><li><p>使用前需要安装<code>vue</code>, <code>ant-design-vue</code> 库</p></li><li><p>富文本编辑器封装: <a href="https://www.npmjs.com/package/profield-editor" target="_blank" rel="noreferrer">profield-editor</a></p></li></ul><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-hidden="true">#</a></h2><iframe src="https://codesandbox.io/embed/profield-7k8f4x?fontsize=14&amp;hidenavigation=1&amp;theme=dark" style="width:100%;height:500px;border:0;border-radius:4px;overflow:hidden;" title="profield" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe><h2 id="独立组件" tabindex="-1">独立组件 <a class="header-anchor" href="#独立组件" aria-hidden="true">#</a></h2><ul><li><code>profield-editor</code> 组件，基于wangEditor的vue3富文本编辑器组件 <a href="https://www.npmjs.com/package/profield-editor" target="_blank" rel="noreferrer">profield-editor</a></li></ul><h2 id="内置组件" tabindex="-1">内置组件 <a class="header-anchor" href="#内置组件" aria-hidden="true">#</a></h2><ul><li><p><code>proField</code> 组件，统一 proForm,proTable 的字段 <a href="./proField.html">proField</a>。</p></li><li><p><code>proForm</code> 组件,用于生成弹窗表单,抽屉表单,普通表单 <a href="./proForm.html">proForm</a>。</p></li><li><p><code>proTable</code> 组件,用于生成表格以及查询和工具栏 <a href="./proTable.html">proTable</a>。</p></li><li><p><code>proPanel</code> 组件,用于生成弹窗和抽屉 <a href="./proPanel.html">proPanel</a> 。</p></li><li><p><code>lookField</code>组件,用来查看,复制数据 <a href="./lookField.html">lookField</a> 。</p></li></ul><h2 id="内置钩子" tabindex="-1">内置钩子 <a class="header-anchor" href="#内置钩子" aria-hidden="true">#</a></h2><ul><li><p><code>useTable</code> 表格钩子 <a href="./useTable.html">useTable</a> 。</p></li><li><p><code>useAjax</code> 请求钩子 <a href="./useAjax.html">useAjax</a> 。</p></li><li><p><code>useAjaxSim</code> 请求钩子简化板 <a href="./useAjax.html#useajaxsim-hook">useAjaxSim</a> 。</p></li><li><p><code>useModel</code> 弹窗钩子<a href="./useModel.html">useModal</a> 。</p></li><li><p><code>usePage</code> 分页钩子 <a href="./usePage.html">usePage</a> 。</p></li><li><p><code>useForm</code> 表单钩子 <a href="./useForm.html">useForm</a> 。</p></li></ul><h2 id="内置类型" tabindex="-1">内置类型 <a class="header-anchor" href="#内置类型" aria-hidden="true">#</a></h2><ul><li><p><code>ColumnsTypes</code> 表格字段类型集合 <a href="./types.html#columnstypes">ColumnsTypes</a> 。</p></li><li><p><code>columnItem</code> 表格字段定义接口类型 <a href="./types.html#columnitem">columnItem</a> 。</p></li><li><p><code>ValidateType</code> 表单验证类型 <a href="./types.html#validatetype">ValidateType</a> 。</p></li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">profield</span></span>
<span class="line"></span></code></pre></div><h2 id="在项目中使用" tabindex="-1">在项目中使用 <a class="header-anchor" href="#在项目中使用" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// main.ts 引入antd样式</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ant-design-vue/dist/antd.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 页面组件 引入proField</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">columnItem</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">proTable</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">proForm</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">usePage</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useModel</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">profield</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,17),n=[p];function r(i,t,c,d,h,m){return a(),l("div",null,n)}const y=e(o,[["render",r]]);export{f as __pageData,y as default};