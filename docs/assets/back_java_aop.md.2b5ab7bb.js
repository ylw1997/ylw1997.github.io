import{_ as s,o as n,c as a,d as l}from"./app.b9a5d55a.js";const i=JSON.parse('{"title":"AOP","description":"","frontmatter":{},"headers":[{"level":2,"title":"0,引入依赖","slug":"_0-引入依赖","link":"#_0-引入依赖","children":[]},{"level":2,"title":"1,编写注解","slug":"_1-编写注解","link":"#_1-编写注解","children":[]},{"level":2,"title":"2,编写切面类","slug":"_2-编写切面类","link":"#_2-编写切面类","children":[]},{"level":2,"title":"3,使用注解","slug":"_3-使用注解","link":"#_3-使用注解","children":[]},{"level":2,"title":"4,结果","slug":"_4-结果","link":"#_4-结果","children":[]}],"relativePath":"back/java/aop.md","lastUpdated":1677834162000}'),p={name:"back/java/aop.md"},o=l(`<h1 id="aop" tabindex="-1">AOP <a class="header-anchor" href="#aop" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>AOP 是 Aspect Oriented Programming 的缩写，意为面向切面编程。</li><li>AOP 是一种编程思想，它将程序中的各个模块划分为不同的层次，将不同的功能封装到不同的层次中，从而实现模块化编程。</li><li>AOP 通过预编译方式和运行期动态代理实现程序功能的统一维护的一种技术。</li></ul></div><h2 id="_0-引入依赖" tabindex="-1">0,引入依赖 <a class="header-anchor" href="#_0-引入依赖" aria-hidden="true">#</a></h2><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">org.springframework.boot</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">spring-boot-starter-aop</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="_1-编写注解" tabindex="-1">1,编写注解 <a class="header-anchor" href="#_1-编写注解" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>@Target：注解的作用目标(类、方法、属性等)</li><li>@Retention：注解的保留位置</li><li>作用是：在运行时通过反射获取注解的信息</li></ul></div><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// SystemLog.java</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Target</span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;">ElementType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ANNOTATION_TYPE</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ElementType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">METHOD</span><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Retention</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">RetentionPolicy</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">RUNTIME</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">SystemLog</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//业务名称</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">businessName</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="_2-编写切面类" tabindex="-1">2,编写切面类 <a class="header-anchor" href="#_2-编写切面类" aria-hidden="true">#</a></h2><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// LogAspect.java</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Component</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Aspect</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Slf4j</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LogAspect</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Pointcut</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@annotation(com.yangliwei.product.annotation.SystemLog)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pt</span><span style="color:#89DDFF;">(){}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Around</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pt()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Object</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">around</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">ProceedingJoinPoint</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">joinPoint</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">throws</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Throwable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Object</span><span style="color:#A6ACCD;"> proceed</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">//前置处理</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">handleBefore</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">joinPoint</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">//执行方法</span></span>
<span class="line"><span style="color:#A6ACCD;">            proceed </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> joinPoint</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">proceed</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">//后置处理</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">handleAfter</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">proceed</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">finally</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">==========finish==========</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lineSeparator</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> proceed</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 处理前置通知</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">joinPoint</span><span style="color:#676E95;font-style:italic;"> joinPoint</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">handleBefore</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">ProceedingJoinPoint</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">joinPoint</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">==========start==========</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">ServletRequestAttributes</span><span style="color:#A6ACCD;"> servletRequestAttributes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ServletRequestAttributes</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  RequestContextHolder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getRequestAttributes</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">业务名称:{}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">getSystemLog</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">joinPoint</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">businessName</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">HttpServletRequest</span><span style="color:#A6ACCD;"> request </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">servletRequestAttributes </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            request </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> servletRequestAttributes</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getRequest</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">request </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">请求地址：{}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getRequestURL</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">request </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">请求方式：{}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getMethod</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">请求类方法：{}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">joinPoint</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getSignature</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">        log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">请求类方法参数：{}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">joinPoint</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getArgs</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">        log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">请求类方法参数类型：{}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">joinPoint</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getSignature</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">getName</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 处理后置通知</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">proceed</span><span style="color:#676E95;font-style:italic;"> proceed</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">handleAfter</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Object</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">proceed</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">==========end==========</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Response：{}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toJSONString</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">proceed</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     *  获取注解对象</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">joinPoint</span><span style="color:#676E95;font-style:italic;"> joinPoint</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * </span><span style="color:#F78C6C;font-style:italic;">@return</span><span style="color:#676E95;font-style:italic;"> SystemLog</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">SystemLog</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getSystemLog</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">ProceedingJoinPoint</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">joinPoint</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">MethodSignature</span><span style="color:#A6ACCD;"> methodSignature </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">MethodSignature</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> joinPoint</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getSignature</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> methodSignature</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getMethod</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">getAnnotation</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">SystemLog</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="_3-使用注解" tabindex="-1">3,使用注解 <a class="header-anchor" href="#_3-使用注解" aria-hidden="true">#</a></h2><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">GetMapping</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">SystemLog</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">businessName</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">查询所有数据</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">AjaxResponse</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">selectAll</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Page</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">PrdLabel</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> page</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">PrdLabel</span><span style="color:#A6ACCD;"> prdLabel</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">查询所有数据{}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">prdLabel</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">查询所有分页{}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">page</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getSize</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> AjaxResponse</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">(this.</span><span style="color:#A6ACCD;">prdLabelService</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">page</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">page</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">QueryWrapper</span><span style="color:#89DDFF;">&lt;&gt;(</span><span style="color:#A6ACCD;">prdLabel</span><span style="color:#89DDFF;">)));</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="_4-结果" tabindex="-1">4,结果 <a class="header-anchor" href="#_4-结果" aria-hidden="true">#</a></h2><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">com</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">yangliwei</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">product</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">aspect</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">LogAspect   </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==========</span><span style="color:#A6ACCD;">start</span><span style="color:#89DDFF;">==========</span></span>
<span class="line"><span style="color:#A6ACCD;">com</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">yangliwei</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">product</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">aspect</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">LogAspect   </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> 业务名称</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;">查询所有数据</span></span>
<span class="line"><span style="color:#A6ACCD;">com</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">yangliwei</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">product</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">aspect</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">LogAspect   </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> 请求地址：http</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#676E95;font-style:italic;">//192.168.0.177:8080/prdLabel</span></span>
<span class="line"><span style="color:#A6ACCD;">com</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">yangliwei</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">product</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">aspect</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">LogAspect   </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> 请求方式：</span><span style="color:#C792EA;">GET</span></span>
<span class="line"><span style="color:#A6ACCD;">com</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">yangliwei</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">product</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">aspect</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">LogAspect   </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> 请求类方法：</span><span style="color:#C792EA;">AjaxResponse</span><span style="color:#A6ACCD;"> com</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">yangliwei</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">product</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PrdLabelController</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">selectAll</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Page</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">PrdLabel</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">com</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">yangliwei</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">product</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">aspect</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">LogAspect   </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> 请求类方法参数：com</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">baomidou</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">mybatisplus</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">extension</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">plugins</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pagination</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Page</span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">74b35579</span></span>
<span class="line"><span style="color:#A6ACCD;">com</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">yangliwei</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">product</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">aspect</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">LogAspect   </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> 请求类方法参数类型：selectAll</span></span>
<span class="line"><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PrdLabelController      </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> 查询所有数据</span><span style="color:#82AAFF;">PrdLabel</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">=null,</span><span style="color:#A6ACCD;"> labelName</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">测试2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> labelAttr</span><span style="color:#89DDFF;">=null,</span><span style="color:#A6ACCD;"> status</span><span style="color:#89DDFF;">=null)</span></span>
<span class="line"><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PrdLabelController      </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> 查询所有分页9</span></span>
<span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">com</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">yangliwei</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">product</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">aspect</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">LogAspect   </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==========</span><span style="color:#A6ACCD;">end</span><span style="color:#89DDFF;">==========</span></span>
<span class="line"><span style="color:#A6ACCD;">com</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">yangliwei</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">product</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">aspect</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">LogAspect   </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> Response：</span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">com</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">yangliwei</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">product</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">aspect</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">LogAspect   </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==========</span><span style="color:#A6ACCD;">finish</span><span style="color:#89DDFF;">==========</span></span>
<span class="line"></span></code></pre></div>`,13),e=[o];function t(c,r,D,y,F,A){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
