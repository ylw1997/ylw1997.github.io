# fastJson

## 1,引入依赖

```xml
<!--        fastjson-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>fastjson</artifactId>
            <version>1.2.79</version>
        </dependency>
```

## 2,使用

```java

// 1,对象转json
        User user = new User();
        user.setAge(18);
        user.setName("张三");
        String json = JSON.toJSONString(user);
        System.out.println(json);

        // 2,json转对象
        User user1 = JSON.parseObject(json, User.class);
        System.out.println(user1);
```

## 3,问题

### 3.1 org.springframework.data.redis.serializer.SerializationException: Could not deserialize: autoType is not support. com.yangliwei.product.entity.User

> 解决方案: 在实体类上加上NoArgsConstructor注解

```java

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable {
    private String name;

    private Integer age;
}

```
