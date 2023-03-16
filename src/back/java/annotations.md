# Spring 基本注解

## 传参接受注解

| 传参方式 | 示例 | 注解|
|:---|:---|:---|
| 路径 | /user/1 | @PathVariable("id") Integer id |
| 请求体 |`{ "name": "张三" }` | @RequestBody User user |
| 请求参数 | /user?id=1 | @RequestParam("id") Integer id |
| 表单传文件  | `<form action="/upload" method="post" enctype="multipart/form-data">` | @RequestParam("file") MultipartFile file |
| 请求头 | /user | @RequestHeader("token") String token |

## @RestController注解

:::tip @RestController

`@RestController`注解相当于`@Controller`和`@ResponseBody`的结合，返回的数据不会被解析为跳转路径，而是直接写入HTTP response body中。一般在异步获取数据时使用，在使用@RequestMapping后，返回值通常解析为跳转路径，加上@ResponseBody后返回结果不会被解析为跳转路径，而是直接写入HTTP response body中。比如异步获取json数据，加上@ResponseBody后，会直接返回json数据。

:::

```java

@RestController
public class UserController {

    @RequestMapping("/list")
    public String list() {
        return "list";
    }

    @RequestMapping("/add")
    public String add() {
        return "add";
    }
}

```

## @RequestMapping注解

:::tip @RequestMapping

`@RequestMapping`注解是一个用来处理请求地址映射的注解，可用于类或方法上。用于类上，表示类中的所有响应请求的方法都是以该地址作为父路径。

:::

```java

@RestController
@RequestMapping("/user")
public class UserController {

    @RequestMapping("/list")
    public String list() {
        return "list";
    }

    @RequestMapping("/add")
    public String add() {
        return "add";
    }
}

```

## @GetMapping、@PostMapping、@PutMapping、@DeleteMapping注解

:::tip @GetMapping

- `@GetMapping`注解是`@RequestMapping(method = RequestMethod.GET)`的缩写。

- `@PostMapping`注解是`@RequestMapping(method = RequestMethod.POST)`的缩写。

- `@PutMapping`注解是`@RequestMapping(method = RequestMethod.PUT)`的缩写。

- `@DeleteMapping`注解是`@RequestMapping(method = RequestMethod.DELETE)`的缩写。

:::

```java

@RestController
@RequestMapping("/user")
public class UserController {

    @GetMapping("/list")
    public String list() {
        return "list";
    }

    @PostMapping("/add")
    public String add() {
        return "add";
    }
}

```

## 1,防止重复提交注解

```java
// AvoidRepeatSubmit.java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface AvoidRepeatSubmit {

    long time() default 3;
}

```

## 2,创建切片类实现

```java
// AvoidRepeatSubmitAspect.java
@Aspect
@Component
@Slf4j
public class AvoidRepeatSubmitAspect {

    @Resource
    RedisCache redisCache;

    @Before("@annotation(com.yangliwei.product.annotation.AvoidRepeatSubmit)")
    public void repeatSubmitIntercept(JoinPoint joinPoint){
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        String ip = WebUtil.IpAddressUtils(request);
        String className = joinPoint.getTarget().getClass().getName();
        String methodName = joinPoint.getSignature().getName();
        AvoidRepeatSubmit avoidRepeatSubmit = this.getAvoidRepeatSubmit(joinPoint);
        long time = avoidRepeatSubmit.time();
        String key = ip + className + methodName;
        log.info("key:{}",key);
        String value = redisCache.getCacheObject(key);
        if (value != null) {
            throw new CustomException(500,"请勿重复提交");
        }
        redisCache.setCacheObject(key,key, time, TimeUnit.SECONDS);
    }

    private AvoidRepeatSubmit getAvoidRepeatSubmit(JoinPoint joinPoint) {
        MethodSignature methodSignature = (MethodSignature) joinPoint.getSignature();
        return methodSignature.getMethod().getAnnotation(AvoidRepeatSubmit.class);
    }
}

```

// 查询ip地址

```java

    public static String IpAddressUtils(HttpServletRequest request){
        String ip = request.getHeader("x-forwarded-for");
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        return ip;
    }
```

## 3,使用

```java
// HelloController.java
@GetMapping("hello")
@AvoidRepeatSubmit(time = 5)
public String hello(){
    return "hello world";
}
```
