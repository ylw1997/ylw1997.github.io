# lombok

## @Data 注解

:::tip Data

- 在 java 类上使用@Data 注解，将为我们在编译期自动生成

- 成员变量的 get 和 set 方法
- equals 方法
- canEqual 方法
- hashCode 方法
- toString 方法
  :::

## @Builder 注解

:::tip Builder

- 在 Java 类上使用 Builder 注解之后，我们可以使用如下代码为对象属性赋值
  :::

```java
User daiyu = User.builder().name("daiyu").age(18).build();
```

## @AllArgsConstructor注解

:::tip AllArgsConstructor

- AllArgsConstructor注解将为我们在编译期自动生成：全参构造函数。

- 有全参构造函数注解，自然就有无参构造函数注解：NoArgsConstructor注解。
:::

```java
new User("yangliwei", 18)

```

## @toSting注解

:::tip toString

- 覆盖默认的toString()方法，将呈现类的基本信息
:::

```java

@Test
public void main() throws Exception{
    User user=new User();
    user.setId(1);
    user.setName("bb");
    System.out.println(user.toString());
}

//输出:User(id=1, name=Asens)

```

## @Log,@Slf4j,@Log4j

:::tip

- 可用于打印日志，但是更推荐使用@Slf4j
:::

```java
log.info(String.valueOf(users));
```
