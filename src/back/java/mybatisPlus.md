# mybatisPlus

:::tip 说明

- mybatisPlus 是一个基于mybatis的增强工具,它可以很方便的实现CRUD功能，只需要继承BaseMapper接口即可，非常方便。

- 官网地址：<https://baomidou.com/>

:::

## 整合Mybatis

### 引入依赖

```xml
<!--mybatis plus-->
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
            <version>3.5.3.1</version>
        </dependency>
<!--mysql-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>
```

### 配置

> application.yml

```yaml
spring:
  # 数据库配置
  datasource:
    url: jdbc:mysql://192.168.0.251:3306/product?useUnicode=true&characterEncoding=utf-8&useSSL=false
    username: root
    password: 123456
    driver-class-name: com.mysql.cj.jdbc.Driver
mybatis-plus:
  # mapper接口的包路径,去哪里扫描xml文件
  mapper-locations: classpath:mapper/*.xml
  # 打印sql
  configuration:
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
```

> Application.java

```java
@SpringBootApplication
// 扫描mapper接口
@MapperScan("com.yangliwei.product.dao")
public class ProductApplication {
    public static void main(String[] args) {
        SpringApplication.run(ProductApplication.class, args);
    }
}

```

## 编码

### 实体类

```java
@Data
@TableName("product")
public class Product {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private String name;
    private String description;
    private Integer price;
    private Integer stock;
    private Integer status;
    private Date createTime;
    private Date updateTime;
}
```

### mapper接口

```java
public interface ProductMapper extends BaseMapper<Product> {
}
```

### 测试

```java
@SpringBootTest
class ProductApplicationTests {
    @Autowired
    private ProductMapper productMapper;

    @Test
    void contextLoads() {
        Product product = new Product();
        product.setName("测试商品");
        product.setDescription("测试商品描述");
        product.setPrice(100);
        product.setStock(100);
        product.setStatus(1);
        product.setCreateTime(new Date());
        product.setUpdateTime(new Date());
        int insert = productMapper.insert(product);
        System.out.println(insert);
    }
}
```

## 分页查询

### 配置拦截器

> MybatisPlusConfig.java

```java

@Configuration
public class MyBatisPlusPageConfig {
    @Bean
    public MybatisPlusInterceptor paginationInterceptor() {
        //  插件
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        // 分页插件
        PaginationInnerInterceptor paginationInnerInterceptor = new PaginationInnerInterceptor(DbType.MYSQL);
        // 添加分页插件
        interceptor.addInnerInterceptor(paginationInnerInterceptor);
        return interceptor;
    }
}

```

### 分页测试

```java

@SpringBootTest
class ProductApplicationTests {
    @Autowired
    private ProductMapper productMapper;

    @Test
    void testPage() {
        Page<Product> page = new Page<>(1, 2);
        IPage<Product> productIPage = productMapper.selectPage(page, null);
        System.out.println(productIPage.getRecords());
    }
}

```

## 字段填充

### 字段处理

> Product.java

```java

@Data
@TableName("product")
public class Product {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private String name;
    private String description;
    private Integer price;
    private Integer stock;
    private Integer status;
    @TableField(fill = FieldFill.INSERT)
    private Date createTime;
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private Date updateTime;
    @TableLogic(value = "1", delval = "0")
    private Integer enabledFlag;
}

```

### 自定义填充

> MyMetaObjectHandler.java

```java

@Component
public class MyMetaObjectHandler implements MetaObjectHandler {
    @Override
    public void insertFill(MetaObject metaObject) {
        this.strictInsertFill(metaObject, "createTime", Date.class, new Date());
        this.strictInsertFill(metaObject, "updateTime", Date.class, new Date());
    }

    @Override
    public void updateFill(MetaObject metaObject) {
        this.strictUpdateFill(metaObject, "updateTime", Date.class, new Date());
    }
}

```
