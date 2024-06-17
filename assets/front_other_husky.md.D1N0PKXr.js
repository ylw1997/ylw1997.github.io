import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.FFX0tUBF.js";const u=JSON.parse('{"title":"提交规范验证","description":"","frontmatter":{},"headers":[],"relativePath":"front/other/husky.md","filePath":"front/other/husky.md","lastUpdated":1718596614000}'),n={name:"front/other/husky.md"},l=t(`<h1 id="提交规范验证" tabindex="-1">提交规范验证 <a class="header-anchor" href="#提交规范验证" aria-label="Permalink to &quot;提交规范验证&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">提交规范化</p><p>在我们提交代码之前的检查,控制提交到仓库代码的规范性和准确性,以及提交信息的规范性进行规范</p></div><div class="info custom-block"><p class="custom-block-title">用到的工具</p><ul><li>husky 操作 git 的工具</li><li>lint-staged 暂存代码检查</li><li>commitlint 提交信息检查</li><li>commitizen 辅助生成提交信息</li></ul></div><h2 id="安装-husky" tabindex="-1">安装 Husky <a class="header-anchor" href="#安装-husky" aria-label="Permalink to &quot;安装 Husky&quot;">​</a></h2><h3 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> husky</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span></span></code></pre></div><h3 id="在-package-json-中添加脚本-prepare-并运行" tabindex="-1">在 package.json 中添加脚本 prepare 并运行 <a class="header-anchor" href="#在-package-json-中添加脚本-prepare-并运行" aria-label="Permalink to &quot;在 package.json 中添加脚本 prepare 并运行&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pkg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scripts.prepare=&quot;husky install&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prepare</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>运行后会生成一个.husky 文件夹</p></div><h3 id="添加-git-验证钩子" tabindex="-1">添加 git 验证钩子 <a class="header-anchor" href="#添加-git-验证钩子" aria-label="Permalink to &quot;添加 git 验证钩子&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> husky</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .husky/pre-commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;npm run lint&quot;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>添加 hook 之后，每次 git commit 之前都会先运行 npm run lint，通过之后才会提交代码。 (是否是 lint 要看 package.json 中的 lint 配置)</p></div><h2 id="安装-lint-staged" tabindex="-1">安装 lint-staged <a class="header-anchor" href="#安装-lint-staged" aria-label="Permalink to &quot;安装 lint-staged&quot;">​</a></h2><h3 id="安装依赖-1" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖-1" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lint-staged</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span></span></code></pre></div><h3 id="在-package-json-中添加配置" tabindex="-1">在 package.json 中添加配置 <a class="header-anchor" href="#在-package-json-中添加配置" aria-label="Permalink to &quot;在 package.json 中添加配置&quot;">​</a></h3><p>配置按自己项目需要而定，比如：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lint-staged&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;*.{js,ts,tsx,vue}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;eslint --fix --ext .js,.vue,.ts,.tsx ./src&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;*.{scss,less,styl,html,vue}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;stylelint --fix&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;*.md&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;prettier --write&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="在-package-json-中添加脚本-lint-lint-staged" tabindex="-1">在 package.json 中添加脚本 lint:lint-staged <a class="header-anchor" href="#在-package-json-中添加脚本-lint-lint-staged" aria-label="Permalink to &quot;在 package.json 中添加脚本 lint:lint-staged&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pkg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scripts.lint:lint-staged=&quot;lint-staged&quot;</span></span></code></pre></div><h3 id="修改-husky-配置" tabindex="-1">修改 husky 配置 <a class="header-anchor" href="#修改-husky-配置" aria-label="Permalink to &quot;修改 husky 配置&quot;">​</a></h3><p>并在 .husky/pre-commit 中替换 npm run lint 为 npm run lint:lint-staged。现在我们每次提交代码前都会对改动的文件进行 Lint 检查。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/usr/bin/env sh</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dirname</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lint:lint-staged</span></span></code></pre></div><h2 id="安装-commitlint" tabindex="-1">安装 commitlint <a class="header-anchor" href="#安装-commitlint" aria-label="Permalink to &quot;安装 commitlint&quot;">​</a></h2><h3 id="安装依赖-2" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖-2" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @commitlint/cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @commitlint/config-conventional</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span></span></code></pre></div><h3 id="安装-cz-git" tabindex="-1">安装 cz-git <a class="header-anchor" href="#安装-cz-git" aria-label="Permalink to &quot;安装 cz-git&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cz-git</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span></span></code></pre></div><h3 id="修改-package-json-添加-config-指定使用的适配器" tabindex="-1">修改 package.json 添加 config 指定使用的适配器 <a class="header-anchor" href="#修改-package-json-添加-config-指定使用的适配器" aria-label="Permalink to &quot;修改 package.json 添加 config 指定使用的适配器&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;config&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;commitizen&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node_modules/cz-git&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="添加配置文件" tabindex="-1">添加配置文件 <a class="header-anchor" href="#添加配置文件" aria-label="Permalink to &quot;添加配置文件&quot;">​</a></h3><p>在根目录创建配置文件 commitlint.config.js</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {import(&#39;cz-git&#39;).UserConfig}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  extends: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@commitlint/config-conventional&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  prompt: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    useEmoji: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //option...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h3 id="添加git-hook" tabindex="-1">添加git hook <a class="header-anchor" href="#添加git-hook" aria-label="Permalink to &quot;添加git hook&quot;">​</a></h3><p>把 commitlint 命令也添加 Husky Hook</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> husky</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .husky/commit-msg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;npx --no-install commitlint -e </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HUSKY_GIT_PARAMS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span></code></pre></div>`,36),e=[l];function h(p,k,o,d,r,c){return a(),i("div",null,e)}const F=s(n,[["render",h]]);export{u as __pageData,F as default};