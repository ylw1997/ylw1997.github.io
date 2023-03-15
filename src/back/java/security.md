# Security 6 + Spring Boot 3.0 + JWT

:::tip Spring Security 6 + Spring Boot 3.0 + JWT

- spring security 是一个基于spring的安全框架

- 配合jwt,spring boot 3.0 使用

- jwt文档地址: [jwt](./jwt.md)

- spring security 需要JDK 17 ,文档地址: <https://docs.spring.io/spring-security/reference/getting-spring-security.html>

- 参考文章1: [SpringBoot整合Spring Security + JWT实现用户认证](https://blog.csdn.net/qq_44709990/article/details/123082560)

- 参考文章2: [Spring Security 6.0(spring boot 3.0) 下认证配置流程](https://blog.csdn.net/hjg719/article/details/128302584)

:::

:::tip 大概流程

- 1,拦截未登录和token失效--->实现AuthenticationEntryPoint
- 2,拦截未授权的请求--->实现AccessDeniedHandler
- 3,修改配置类--->配置MySecurityConfig
- 4,用户增删改查--->完成sysUser CRUD
- 5,完成认证管理器--->配置 AuthenticationManager
- 6,编写登录和登出--->实现login,logout方法
- 7,自定义用户信息类--->实现UserDetails
- 8,实现根据username查询用户,从数据库中验证用户名密码--->实现UserDetailsService
- 9,配置密码加密方式--->配置PasswordEncoder
- 10,配置jwt过滤器--->实现OncePerRequestFilter接口
:::

## 1,引入依赖

```xml
<!--        解决jwt java.lang.NoClassDefFoundError: javax/xml/bind/DatatypeConverter 错误-->
        <dependency>
            <groupId>javax.xml.bind</groupId>
            <artifactId>jaxb-api</artifactId>
            <version>2.3.1</version>
        </dependency>
<!--        jwt-->
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt</artifactId>
            <version>0.9.1</version>
        </dependency>
<!--        spring security-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
<!--        hutool-->
        <dependency>
            <groupId>cn.hutool</groupId>
            <artifactId>hutool-all</artifactId>
            <version>5.8.4</version>
        </dependency>
```

## 2,配置jwt

:::tip jwt

- 配置jwt请查看文档 [jwt](./jwt.md)
- 1, 编写jwt工具类
- 2, 配置jwt

:::

## 3,拦截未登录和token失效

:::tip

- AccessDeniedHandler接口,当权限不足时，我们需要设置权限不足状态码403，并将错误信息返回给前端
- AuthenticationEntryPoint接口,当认证失败时,返回401状态码,并返回给前端
:::

```java

// MySecurityAuthenticationHandler.java
@Component
public class MySecurityAuthenticationHandler implements AccessDeniedHandler, AuthenticationEntryPoint {
    /**
     * 未登录或者token失效时访问接口时，自定义的返回结果
     * AuthenticationEntryPoint
     * @param request 请求
     * @param response 响应
     * @param authException 权限异常
     * @throws IOException IO异常
     * @throws ServletException Servlet异常
     */
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        System.out.println("request = " + authException.getMessage());
        AjaxResponse ajaxResponse = AjaxResponse.error(new CustomException(CustomExceptionType.USER_UNAUTHORIZED));
        ObjectMapper mapper = new ObjectMapper();
        String errorString = mapper.writeValueAsString(ajaxResponse);
        WebUtil.renderString(response, errorString);
    }

    /**
     * 无权限访问接口时，返回403结果
     * AccessDeniedHandler
     * @param request 请求
     * @param response 响应
     * @param accessDeniedException 权限异常
     * @throws IOException IO异常
     * @throws ServletException Servlet异常
     */
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
        System.out.println("request = " + accessDeniedException.getMessage());
        AjaxResponse ajaxResponse = AjaxResponse.error(new CustomException(CustomExceptionType.USER_ACCESS_DENIED));
        ObjectMapper mapper = new ObjectMapper();
        String errorString = mapper.writeValueAsString(ajaxResponse);
        WebUtil.renderString(response, errorString);
    }

}
```

## 4,修改配置类

:::tip security配置类

- 配置白名单
- 配置密码加密方式
- 配置AuthenticationManager
- 配置错误处理器
:::

```java
// MySecurityConfig.java
@Configuration
public class MySecurityConfig  {

    /**
     * 白名单
     */
    public static final List<String> API_WHITE_LIST = List.of("/hello","/testJwt",
            "/sysUser/login","/sysUser/logout",
            "/swagger-ui.html","/swagger-ui/**","/swagger-resources/**","/v3/api-docs/**","/webjars/**",
            "/static/**","/resources/**");

    /**
     * 配置密码加密方式
     * @return PasswordEncoder
     */
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }


    /**
     * 配置AuthenticationManager
     * @param authenticationConfiguration AuthenticationConfiguration
     * @return AuthenticationManager
     * @throws Exception 异常
     */
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    /**
     * 配置拦截规则
     * @param http httpSecurity
     * @param mySecurityAuthenticationHandler 自定义的权限处理器
     * @return SecurityFilterChain
     * @throws Exception 异常
     */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http,MySecurityAuthenticationHandler mySecurityAuthenticationHandler) throws Exception {
        //权限配置
        http.authorizeHttpRequests(auth->{
            try {
                auth.requestMatchers(API_WHITE_LIST.toArray(new String[0])).permitAll()
                        .anyRequest().authenticated().and().csrf(AbstractHttpConfigurer::disable);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        });
       // 错误处理
       http.exceptionHandling()
               // 注册未登录或者token失效时访问接口时，自定义的返回结果
               .accessDeniedHandler(mySecurityAuthenticationHandler)
               // 注册无权限访问接口时，自定义的返回结果
               .authenticationEntryPoint(mySecurityAuthenticationHandler);
       // 允许跨域
       http.cors();
       return http.build();
    }
}
```

## 5,用户增删改查

:::tip
使用mybatis-plus 生成的代码,此处不再赘述

- 1,创建sysUser实体类
- 2,创建sysUserMapper
- 3,创建sysUserService
- 4,创建sysUserController
:::

## 6, 配置AuthenticationManager

```java

// MySecurityConfig.java
@Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
```

## 7,编写用户登录和登出接口

```java
// SysUserServiceImpl.java

@Override
public String login(SysUser sysUser) {
    // 1,使用AuthenticationManager类的 authenticate方法进行认证,如果认证成功，返回一个Authentication对象，否则返回null
    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(sysUser.getUserName(), sysUser.getPassword());
    Authentication authenticate = authenticationManager.authenticate(usernamePasswordAuthenticationToken);
    // 2, 如果没通过抛出异常
    if(Objects.isNull(authenticate)){
        throw new CustomException(CustomExceptionType.USER_LOGIN_EXCEPTION);
    }
    MyUserDetails UserDetail = (MyUserDetails) authenticate.getPrincipal();
    String UserId = UserDetail.getUser().getUserId().toString();
    // 3,如果通过使用jwt生成token,把token返回给前端
    String jwt = jwtUtil.createJwt(UserId);
    // 4,redis中存储token,userid作为key
    redisCache.setCacheObject(Constant.REDIS_LOGIN_KEY +UserId, UserDetail);
    return jwt;
}
@Override
public String logout() {
    // 1,获取当前登录用户认证信息
    UsernamePasswordAuthenticationToken authentication = (UsernamePasswordAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();
    // 2,获取当前登录用户信息
    MyUserDetails loginUser = (MyUserDetails) authentication.getPrincipal();
    // 3,获取当前登录用户id
    Long id = loginUser.getUser().getUserId();
    // 4,删除redis中的token
    redisCache.deleteObject(Constant.REDIS_LOGIN_KEY +id);
    // 5,清除当前登录用户认证信息
    SecurityContextHolder.clearContext();
    return "登出成功";
}
```

## 8,自定义用户信息类,实现UserDetails接口

```java
@Data
@NoArgsConstructor
public class MyUserDetails implements UserDetails {

    private SysUser user;

    private List<String> permissions;

    @JsonIgnore
    List<SimpleGrantedAuthority> authorities;

    /**
     * 构造方法
     * @param user 用户信息
     * @param permissions 权限集合
     */
    public MyUserDetails(SysUser user, List<String> permissions) {
        this.user = user;
        this.permissions = permissions;
    }

    /**
     * 获取用户权限
     * @return 权限集合
     */
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if(authorities == null){
            authorities = permissions.stream()
                    .map(SimpleGrantedAuthority::new)
                    .collect(Collectors.toList());
        }
        return authorities;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getUserName();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
```

## 9,实现UserDetailsService接口,查询用户信息

```java
@Service
@Slf4j
public class MyUserDetailServiceImpl implements UserDetailsService {

    @Resource
    SysUserDao sysUserDao;
    private List<String> permissions;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // 查询用户信息
        SysUser sysUser = sysUserDao.SelectUserByName(username);
        log.info("用户信息：{}", sysUser);
        // 判断用户是否存在
        if (Objects.isNull(sysUser)) {
            throw new RuntimeException("用户不存在");
        }
//        查询用户权限
//        List<String> permissions = sysUserService.getPermissionsByUserId(sysUser.getUserId());
        List<String> permissions = new ArrayList<>();
        permissions.add("**");
        return new MyUserDetails(sysUser, permissions);
    }
}
```

## 10,配置密码加密方式

```java
// MySecurityConfig.java
@Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
```

## 11,配置拦截规则

```java
//JwtAuthenticationTokenFilter.java

@Component
public class JwtAuthenticationTokenFilter extends OncePerRequestFilter {

    @Resource
    private JwtUtil jwtUtil;

    @Resource
    private RedisCache redisCache;
    /**
     * jwt请求过滤器
     * @param request 请求
     * @param response 响应
     * @param filterChain 过滤器链
     * @throws ServletException 异常
     * @throws IOException 异常
     */
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
//        1,获取请求头中的token
        String token = request.getHeader("Authorization");
//        2,判断token是否为空,是否以Bearer开头
        if(!StringUtils.hasText(token) ||  !token.startsWith("Bearer ")){
            filterChain.doFilter(request, response);
            return;
        }
//        3,解析token
        String userId;
        try {
            Claims claims = jwtUtil.parseJwt(token.substring(7));
            userId = claims.getSubject();
        } catch (Exception e) {
            throw new RuntimeException("令牌不正确");
        }
//        4,从redis 获取用户信息
        MyUserDetails myUserDetails = redisCache.getCacheObject(Constant.REDIS_LOGIN_KEY + userId);
        if(Objects.isNull(myUserDetails)){
            throw new RuntimeException("用户不存在");
        }
        System.out.println("用户验证通过：" + myUserDetails);
//        5,构造UsernamePasswordAuthenticationToken对象,并设置到SecurityContextHolder中
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(myUserDetails, null, myUserDetails.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
//        6,放行
        filterChain.doFilter(request, response);
    }
}

```

## 12,配置拦截器

```java
// MySecurityConfig.java

@Configuration
public class MySecurityConfig  {

    @Resource
    private JwtAuthenticationTokenFilter jwtAuthenticationFilter;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http,MySecurityAuthenticationHandler mySecurityAuthenticationHandler) throws Exception {
    
    ...
    // jwt过滤器
    http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
    // 允许跨域
    http.cors();
    return http.build();
    }

}
