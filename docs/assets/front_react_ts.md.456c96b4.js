import{_ as s,o as n,c as a,d as l}from"./app.d4f75ab4.js";const A=JSON.parse('{"title":"React\u548CTS\u6700\u5C0F\u77E5\u8BC6\u96C6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840react\u7EC4\u4EF6","slug":"\u57FA\u7840react\u7EC4\u4EF6","link":"#\u57FA\u7840react\u7EC4\u4EF6","children":[]},{"level":2,"title":"\u6DFB\u52A0typeScript","slug":"\u6DFB\u52A0typescript","link":"#\u6DFB\u52A0typescript","children":[]},{"level":2,"title":"\u7EC4\u4EF6\u5C5E\u6027TS\u7C7B\u578B","slug":"\u7EC4\u4EF6\u5C5E\u6027ts\u7C7B\u578B","link":"#\u7EC4\u4EF6\u5C5E\u6027ts\u7C7B\u578B","children":[]},{"level":2,"title":"react\u6DFB\u52A0children\u5C5E\u6027","slug":"react\u6DFB\u52A0children\u5C5E\u6027","link":"#react\u6DFB\u52A0children\u5C5E\u6027","children":[]},{"level":2,"title":"\u4F7F\u7528\u539F\u751F\u5C5E\u6027","slug":"\u4F7F\u7528\u539F\u751F\u5C5E\u6027","link":"#\u4F7F\u7528\u539F\u751F\u5C5E\u6027","children":[]}],"relativePath":"front/react/ts.md","lastUpdated":1661774130000}'),p={name:"front/react/ts.md"},o=l(`<h1 id="react\u548Cts\u6700\u5C0F\u77E5\u8BC6\u96C6" tabindex="-1">React\u548CTS\u6700\u5C0F\u77E5\u8BC6\u96C6 <a class="header-anchor" href="#react\u548Cts\u6700\u5C0F\u77E5\u8BC6\u96C6" aria-hidden="true">#</a></h1><h2 id="\u57FA\u7840react\u7EC4\u4EF6" tabindex="-1">\u57FA\u7840react\u7EC4\u4EF6 <a class="header-anchor" href="#\u57FA\u7840react\u7EC4\u4EF6" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">// Hello.tsx</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> React </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Hello </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> &lt;</span><span style="color:#FFCB6B;">div</span><span style="color:#F07178;">&gt;</span><span style="color:#A6ACCD;">Hello</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6DFB\u52A0typescript" tabindex="-1">\u6DFB\u52A0typeScript <a class="header-anchor" href="#\u6DFB\u52A0typescript" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>React.FC \u8868\u793A Function Component \u51FD\u6570\u5F0F\u7EC4\u4EF6</li></ul></div><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">// Hello.tsx</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> React </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// React.FC \u8868\u793A Function Component \u51FD\u6570\u5F0F\u7EC4\u4EF6</span></span>
<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Hello</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">FC</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> &lt;</span><span style="color:#FFCB6B;">div</span><span style="color:#F07178;">&gt;</span><span style="color:#A6ACCD;">Hello</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7EC4\u4EF6\u5C5E\u6027ts\u7C7B\u578B" tabindex="-1">\u7EC4\u4EF6\u5C5E\u6027TS\u7C7B\u578B <a class="header-anchor" href="#\u7EC4\u4EF6\u5C5E\u6027ts\u7C7B\u578B" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>React.FC&lt;HelloProps&gt; \u8868\u793A Function Component \u63A5\u53D7 HelloProps \u7C7B\u578B\u7684 props</li></ul></div><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">// Hello.tsx</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> React </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5B9A\u4E49\u63A5\u53E3</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HelloProps</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Hello</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">FC</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">HelloProps</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> &lt;</span><span style="color:#FFCB6B;">div</span><span style="color:#F07178;">&gt;</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">Hello, </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">!</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="react\u6DFB\u52A0children\u5C5E\u6027" tabindex="-1">react\u6DFB\u52A0children\u5C5E\u6027 <a class="header-anchor" href="#react\u6DFB\u52A0children\u5C5E\u6027" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>PropsWithChildren \u8BA9 props.children \u5E26\u7C7B\u578B</li></ul></div><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">// Hello.tsx</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> React</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">PropsWithChildren</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HelloProps</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Hello</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">FC</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PropsWithChildren</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">HelloProps</span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">children</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">        &lt;</span><span style="color:#FFCB6B;">div</span><span style="color:#F07178;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">            &lt;</span><span style="color:#FFCB6B;">div</span><span style="color:#F07178;">&gt;</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">Hello, </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">!</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">children</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="\u4F7F\u7528\u539F\u751F\u5C5E\u6027" tabindex="-1">\u4F7F\u7528\u539F\u751F\u5C5E\u6027 <a class="header-anchor" href="#\u4F7F\u7528\u539F\u751F\u5C5E\u6027" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>HTMLAttributes&lt;HTMLDivElement&gt; \u8BA9 props \u53EF\u4EE5\u4F7F\u7528 html \u5C5E\u6027\u6BD4\u5982 className</li></ul></div><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">// Hello.tsx</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> React</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">HTMLAttributes</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">PropsWithChildren</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HelloProps</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HTMLAttributes</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">HTMLDivElement</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Hello</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">FC</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PropsWithChildren</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">HelloProps</span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    name</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    children</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">rest</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">        &lt;</span><span style="color:#FFCB6B;">div</span><span style="color:#F07178;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">div</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{...</span><span style="color:#A6ACCD;">rest</span><span style="color:#89DDFF;">}&gt;{</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">Hello, </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">!</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">children</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,15),e=[o];function t(c,r,F,D,y,C){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
