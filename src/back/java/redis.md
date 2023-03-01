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
