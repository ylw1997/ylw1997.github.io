# redis

## 1,整合redis

```xml
// pom.xml
<!--        redis-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-redis</artifactId>
        </dependency>

<!-- redis连接池-->
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-pool2</artifactId>
        </dependency>
```

## 2,配置redis

```yaml
spring:
  redis:
    database: 0 # Redis 数据库索引（默认为 0）
    host: 192.168.161.3 # Redis 服务器地址
    port: 6379 # Redis 服务器连接端口
    password: 123456 # Redis 服务器连接密码（默认为空）
    timeout:  5000  # 连接超时，单位ms
    lettuce:
      pool:
        max-active: 8 # 连接池最大连接数（使用负值表示没有限制） 默认 8
        max-wait: -1 # 连接池最大阻塞等待时间（使用负值表示没有限制） 默认 -1
        max-idle: 8 # 连接池中的最大空闲连接 默认 8
        min-idle: 0 # 连接池中的最小空闲连接 默认 0
```

## 3,redis配置类

> 使用fastjson序列化
> 解决乱码

```java
@Configuration
public class MyRedisConfig {

    @Bean
    public RedisTemplate<String,Object> redisTemplate(RedisConnectionFactory redisConnectionFactory){
        RedisTemplate<String,Object> redisTemplate = new RedisTemplate<>();
        redisTemplate.setConnectionFactory(redisConnectionFactory);
// key 序列化
        redisTemplate.setKeySerializer(new GenericFastJsonRedisSerializer());
//        值序列化
        GenericFastJsonRedisSerializer genericFastJsonRedisSerializer = new GenericFastJsonRedisSerializer();
        redisTemplate.setValueSerializer(genericFastJsonRedisSerializer);
//        hash key 序列化
        redisTemplate.setHashKeySerializer(new GenericFastJsonRedisSerializer());
//        hash value 序列化
        redisTemplate.setHashValueSerializer(genericFastJsonRedisSerializer);
        return redisTemplate;
    }
}

```

## 4,测试

```java

@SpringBootTest
class ProductApplicationTests {

    @Resource
    private RedisTemplate<String, Object> redisTemplate;

    // 存
    @Test
    void contextLoads() {
        User yangliwei = new User("杨利伟", 18);
        redisTemplate.opsForValue().set("user:ylw", yangliwei,20,
                TimeUnit.MINUTES);
    }

    // 取

    @Test
    void redisGetTest(){
        User o = (User)redisTemplate.opsForValue().get("user:ylw");
        System.err.println(o);
    }

}

```

## 解决redis redistemplate KEY为字符串是多双引号的问题

```java

@Configuration
public class MyRedisConfig {

    @Bean
    public RedisTemplate<String,Object> redisTemplate(RedisConnectionFactory redisConnectionFactory){
       ...
// 修改序列化方式
//        redisTemplate.setKeySerializer(new GenericFastJsonRedisSerializer());
        redisTemplate.setKeySerializer(new StringRedisSerializer());
        ...
    }
}

```

## redis 定时任务实现

:::tip

* 使用了redis的发布订阅模式。将redis中key过期作为一个事件发布出来，监听程序收到这key过期的消息。
:::

### 1,redis增加消息监听器配置

```java

@Configuration
public class MyRedisConfig {
        ...
         /**
     * redis 消息监听器
     * @return RedisMessageListenerContainer
     */
    @Bean
    public RedisMessageListenerContainer redisMessageListenerContainer(RedisConnectionFactory redisConnectionFactory){
        RedisMessageListenerContainer redisMessageListenerContainer = new RedisMessageListenerContainer();
        redisMessageListenerContainer.setConnectionFactory(redisConnectionFactory);
        return redisMessageListenerContainer;
    }
}
```

### 2,创建redis超时消息监听器

```java

// RedisExpirationListener.java

/**
 * redis 监听器
 * 监听redis key 失效事件
 * @author ylw
 */
@Slf4j
@Component
public class RedisExpirationListener extends KeyExpirationEventMessageListener {
    public RedisExpirationListener(RedisMessageListenerContainer listenerContainer) {
        super(listenerContainer);
    }

    /**
     * 针对 redis 数据失效事件，进行数据处理
     * @param message 消息
     * @param pattern 模式
     */
    @Override
    public void onMessage(@NotNull Message message, byte[] pattern) {
        log.info("失效key：{}", message);
        // 判断message是否包含REDIS_TASK_KEY前缀
        if (message.toString().startsWith(Constant.REDIS_TASK_KEY)) {
            // 获取key
            String key = message.toString().replaceAll(Constant.REDIS_TASK_KEY,"");
            try {
                // 反射调用
                JobInvokeUtil.invokeMethod(key);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }else{
            log.info("不包含");
        }
    }
}

```

### 3,创建任务调度工具类

```java

// JobInvokeUtil.java

/**
 * 定时任务工具类
 * 通过反射调用定时任务方法
 */
public class JobInvokeUtil
{

    /**
     * 执行方法
     *
     */
    public static <T> T invokeMethod(String invokeTarget) throws Exception
    {
        String beanName = getBeanName(invokeTarget);
        if (StringUtils.isEmpty(beanName)) {
            return null;
        }
        String methodName = getMethodName(invokeTarget);
        List<Object[]> methodParams = getMethodParams(invokeTarget);
        if(methodParams==null){
            return null;
        }
        if (!isValidClassName(beanName))
        {
            Object bean = SpringUtils.getBean(beanName);
            return invokeMethod(bean, methodName, methodParams);
        }
        else
        {
            Object bean = Class.forName(beanName).newInstance();
            return invokeMethod(bean, methodName, methodParams);
        }
    }

    /**
     * 调用任务方法
     *
     * @param bean 目标对象
     * @param methodName 方法名称
     * @param methodParams 方法参数
     */
    private static <T> T invokeMethod(Object bean, String methodName, List<Object[]> methodParams)
            throws NoSuchMethodException, SecurityException, IllegalAccessException, IllegalArgumentException,
            InvocationTargetException
    {
        if (StringUtils.isNotNull(methodParams) && methodParams.size() > 0)
        {
            Method method = bean.getClass().getDeclaredMethod(methodName, getMethodParamsType(methodParams));
            return (T) method.invoke(bean, getMethodParamsValue(methodParams));
        }
        else
        {
            Method method = bean.getClass().getDeclaredMethod(methodName);
            return (T) method.invoke(bean);
        }
    }

    /**
     * 校验是否为为class包名
     *
     * @return true是 false否
     */
    public static boolean isValidClassName(String invokeTarget)
    {
        return StringUtils.countMatches(invokeTarget, ".") > 1;
    }

    /**
     * 获取bean名称
     *
     * @param invokeTarget 目标字符串
     * @return bean名称
     */
    public static String getBeanName(String invokeTarget)
    {
        String beanName = StringUtils.substringBefore(invokeTarget, "(");
        return StringUtils.substringBeforeLast(beanName, ".");
    }

    /**
     * 获取bean方法
     *
     * @param invokeTarget 目标字符串
     * @return method方法
     */
    public static String getMethodName(String invokeTarget)
    {
        String methodName = StringUtils.substringBefore(invokeTarget, "(");
        return StringUtils.substringAfterLast(methodName, ".");
    }

    /**
     * 获取method方法参数相关列表
     *
     * @param invokeTarget 目标字符串
     * @return method方法相关参数列表
     */
    public static List<Object[]> getMethodParams(String invokeTarget)
    {
        String methodStr = StringUtils.substringBetween(invokeTarget, "(", ")");
        if (StringUtils.isEmpty(methodStr))
        {
            return null;
        }
        String[] methodParams = methodStr.split("#");
        List<Object[]> classs = new LinkedList<>();
        for (int i = 0; i < methodParams.length; i++)
        {
            String str = StringUtils.trimToEmpty(methodParams[i]);
            // String字符串类型，包含'
            if (StringUtils.contains(str, "'"))
            {
                classs.add(new Object[] { StringUtils.replace(str, "'", ""), String.class });
            }
            // boolean布尔类型，等于true或者false
            else if (StringUtils.equals(str, "true") || StringUtils.equalsIgnoreCase(str, "false"))
            {
                classs.add(new Object[] { Boolean.valueOf(str), Boolean.class });
            }
            // long长整形，包含L
            else if (StringUtils.containsIgnoreCase(str, "L"))
            {
                classs.add(new Object[] { Long.valueOf(StringUtils.replaceIgnoreCase(str, "L", "")), Long.class });
            }
            // double浮点类型，包含D
            else if (StringUtils.containsIgnoreCase(str, "D"))
            {
                classs.add(new Object[] { Double.valueOf(StringUtils.replaceIgnoreCase(str, "D", "")), Double.class });
            }
            // 其他类型归类为整形
            else
            {
                classs.add(new Object[] { Integer.valueOf(str), Integer.class });
            }
        }
        return classs;
    }

    /**
     * 获取参数类型
     *
     * @param methodParams 参数相关列表
     * @return 参数类型列表
     */
    public static Class<?>[] getMethodParamsType(List<Object[]> methodParams)
    {
        Class<?>[] classs = new Class<?>[methodParams.size()];
        int index = 0;
        for (Object[] os : methodParams)
        {
            classs[index] = (Class<?>) os[1];
            index++;
        }
        return classs;
    }

    /**
     * 获取参数值
     *
     * @param methodParams 参数相关列表
     * @return 参数值列表
     */
    public static Object[] getMethodParamsValue(List<Object[]> methodParams)
    {
        Object[] classs = new Object[methodParams.size()];
        int index = 0;
        for (Object[] os : methodParams)
        {
            classs[index] = (Object) os[0];
            index++;
        }
        return classs;
    }
}

```

### 4,创建测试类

```java

@Test
    public void testRedisTimer(){
        String action = Constant.REDIS_TASK_KEY + "sysRoleService.test({}#{})";
        redisTemplate.opsForValue().set(StrUtil.format(action, 2,1), 1, 10, TimeUnit.SECONDS);
        Object o = redisTemplate.opsForValue().get(StrUtil.format(action, 2,1));
        System.err.println(o);
    }

```

### 5,创建实际调用类

```java

@Service("sysRoleService")
public class SysRoleServiceImpl implements SysRoleService {
    @Resource
    private SysRoleDao sysRoleDao;

    public void test(Integer arg1,Integer arg2){
        log.info("arg1:{},arg2:{}",arg1,arg2);
    }
}

```

### 6,测试结果

```java
2023-11-14T10:59:25.837+08:00  INFO 19336 --- [enerContainer-1] c.y.p.common.RedisExpirationListener     : 失效key：task:sysRoleService.test(2#1)
2023-11-14T10:59:25.839+08:00  INFO 19336 --- [enerContainer-1] c.y.p.service.impl.SysRoleServiceImpl    : arg1:2,arg2:1
```
