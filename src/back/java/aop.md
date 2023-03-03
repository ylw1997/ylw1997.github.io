# AOP

:::tip

- AOP 是 Aspect Oriented Programming 的缩写，意为面向切面编程。
- AOP 是一种编程思想，它将程序中的各个模块划分为不同的层次，将不同的功能封装到不同的层次中，从而实现模块化编程。
- AOP 通过预编译方式和运行期动态代理实现程序功能的统一维护的一种技术。
:::

## 1,编写注解

:::tip

- @Target：注解的作用目标(类、方法、属性等)
- @Retention：注解的保留位置
- 作用是：在运行时通过反射获取注解的信息
:::

```java
// SystemLog.java
@Target({ElementType.ANNOTATION_TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface SystemLog {
    //业务名称
    String businessName() default "";
}

```

## 2,编写切面类

```java
// LogAspect.java
@Component
@Aspect
@Slf4j
public class LogAspect {
    @Pointcut("@annotation(com.yangliwei.product.annotation.SystemLog)")
    public void pt(){}

    @Around("pt()")
    public Object around(ProceedingJoinPoint joinPoint) throws Throwable {
        Object proceed;
        try {
            //前置处理
            handleBefore(joinPoint);
            //执行方法
            proceed = joinPoint.proceed();
            //后置处理
            handleAfter(proceed);
        }finally {
            log.info("==========finish=========="+System.lineSeparator());
        }
        return proceed;
    }

    /**
     * 处理前置通知
     * @param joinPoint joinPoint
     */
    private void handleBefore(ProceedingJoinPoint joinPoint) {
        log.info("==========start==========");
        ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes)  RequestContextHolder.getRequestAttributes();
        log.info("业务名称:{}",getSystemLog(joinPoint).businessName());
        HttpServletRequest request = null;
        if (servletRequestAttributes != null) {
            request = servletRequestAttributes.getRequest();
        }
        if (request != null) {
            log.info("请求地址：{}",request.getRequestURL());
        }
        if (request != null) {
            log.info("请求方式：{}",request.getMethod());
        }
        log.info("请求类方法：{}",joinPoint.getSignature());
        log.info("请求类方法参数：{}",joinPoint.getArgs());
        log.info("请求类方法参数类型：{}",joinPoint.getSignature().getName());
    }

    /**
     * 处理后置通知
     * @param proceed proceed
     */
    private void handleAfter(Object proceed) {
        log.info("==========end==========");
        log.info("Response：{}", JSON.toJSONString(proceed));
    }

    /**
     *  获取注解对象
     * @param joinPoint joinPoint
     * @return SystemLog
     */
    private SystemLog getSystemLog(ProceedingJoinPoint joinPoint) {
        MethodSignature methodSignature = (MethodSignature) joinPoint.getSignature();
        return methodSignature.getMethod().getAnnotation(SystemLog.class);
    }

}
```

## 3,使用注解

```java
@GetMapping
@SystemLog(businessName = "查询所有数据")
public AjaxResponse selectAll(Page<PrdLabel> page, PrdLabel prdLabel) {
    log.info("查询所有数据{}",prdLabel);
    log.info("查询所有分页{}",page.getSize());
    return AjaxResponse.success(this.prdLabelService.page(page, new QueryWrapper<>(prdLabel)));
}
```

## 4,结果

```java
com.yangliwei.product.aspect.LogAspect   : ==========start==========
com.yangliwei.product.aspect.LogAspect   : 业务名称:查询所有数据
com.yangliwei.product.aspect.LogAspect   : 请求地址：http://192.168.0.177:8080/prdLabel
com.yangliwei.product.aspect.LogAspect   : 请求方式：GET
com.yangliwei.product.aspect.LogAspect   : 请求类方法：AjaxResponse com.yangliwei.product.controller.PrdLabelController.selectAll(Page,PrdLabel)
com.yangliwei.product.aspect.LogAspect   : 请求类方法参数：com.baomidou.mybatisplus.extension.plugins.pagination.Page@74b35579
com.yangliwei.product.aspect.LogAspect   : 请求类方法参数类型：selectAll
c.y.p.controller.PrdLabelController      : 查询所有数据PrdLabel(id=null, labelName=测试2, labelAttr=null, status=null)
c.y.p.controller.PrdLabelController      : 查询所有分页9
...
com.yangliwei.product.aspect.LogAspect   : ==========end==========
com.yangliwei.product.aspect.LogAspect   : Response：...
com.yangliwei.product.aspect.LogAspect   : ==========finish==========
```
