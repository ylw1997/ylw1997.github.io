import{_ as t,c as a,o as s,a4 as e}from"./chunks/framework.FFX0tUBF.js";const E=JSON.parse('{"title":"usePage 钩子","description":"","frontmatter":{},"headers":[],"relativePath":"profield/usePage.md","filePath":"profield/usePage.md","lastUpdated":1666927999000}'),d={name:"profield/usePage.md"},i=e(`<h1 id="usepage-钩子" tabindex="-1">usePage 钩子 <a class="header-anchor" href="#usepage-钩子" aria-label="Permalink to &quot;usePage 钩子&quot;">​</a></h1><ul><li>用来生成表格组件的事件</li></ul><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { usePage } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;profield&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//table方法封装</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tableLoading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pagination</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tableData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">getData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">changeParamsCleanPage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  usePage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    AJAXFunc: categoryList,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span></code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>AJAXFunc</td><td>请求函数</td><td><code>(page: PageInterFace) =&gt; Promise&lt;AxiosResponse&lt;PageAjax&lt;T&gt;&gt;&gt;</code></td><td>-</td></tr><tr><td>params</td><td>默认参数</td><td><code>PageInterFace</code></td><td>-</td></tr><tr><td>runOnMounted</td><td>是否在组件挂载时执行</td><td><code>Boolean</code></td><td><code>true</code></td></tr><tr><td>callBackFunc</td><td>请求成功后的回调函数</td><td><code>(data: T[]) =&gt; void</code></td><td><code>undefined</code></td></tr><tr><td>watchParams</td><td>参数监听</td><td><code>Boolean</code></td><td><code>true</code></td></tr></tbody></table><h2 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>rowskeys</td><td>表格行选择的 key</td><td><code>Array</code></td></tr><tr><td>tableLoading</td><td>表格加载状态</td><td><code>Boolean</code></td></tr><tr><td>pagination</td><td>表格分页参数</td><td><code>PaginationInterFace</code></td></tr><tr><td>tableData</td><td>表格数据</td><td><code>T[]</code></td></tr><tr><td>getData</td><td>获取表格数据</td><td><code>(params?: PageInterFace) =&gt; Promise&lt;void&gt;</code></td></tr><tr><td>changeParamsCleanPage</td><td>改变参数并清空分页</td><td><code>(cleanParams: {}) =&gt; void</code></td></tr><tr><td>handleTableChange</td><td>表格分页事件</td><td><code>(pagination: PaginationConfig) =&gt; void</code></td></tr></tbody></table>`,8),n=[i];function h(l,r,o,p,c,k){return s(),a("div",null,n)}const u=t(d,[["render",h]]);export{E as __pageData,u as default};
