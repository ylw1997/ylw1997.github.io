<!--
 * @Author: YangLiwei
 * @Date: 2022-08-22 09:51:04
 * @LastEditTime: 2023-02-06 16:19:43
 * @LastEditors: yangliwei 1280426581@qq.com
 * @FilePath: /vitepress-blog/src/back/java/index.md
 * @Description: 
-->
# spring cloud bootstrap.yml多环境配置

## spring boot 多环境配置

:::tip

* application.yml #主配置
* application-dev.yml #开发配置
* application-test.yml #测试配置
* application-prod.yml #正式配置
:::

## spring cloud 多环境配置

:::tip

* spring cloud 使用配置中心,使用bootstrap.yml来配置
* bootstrap.yml 先加载 application.yml后加载
* Bootstrap 属性有高优先级，默认情况下，它们不会被本地配置覆盖。
:::

## 配置方法

:::tip 配置方法

* 多个配置以 `---`分开
* 通过spring.profiles.active 来使用配置
* 通过config.activate.on-profile 来命名环境
:::

```yml
# Tomcat
server:
  port: 9300

spring:
  profiles:
    # 环境配置
    active: dev
---
# Spring
spring:
  application:
    # 应用名称
    name: scm-eco
  cloud:
    nacos:
      discovery:
        # 服务注册地址
        server-addr: xxx.xxx.xxx.xxx:18848
        group: DEFAULT_GROUP
      #        namespace: 9e764c45-6965-47b3-9da2-efd95dc0c384
      config:
        # 配置中心地址
        server-addr: xxx.xxx.xxx.xxx:18848
        # 配置文件格式
        file-extension: yml
        # 共享配置
        shared-configs:
          - application-${spring.profiles.active}.${spring.cloud.nacos.config.file-extension}
        #        namespace: 9e764c45-6965-47b3-9da2-efd95dc0c384
        #指定配置群组 --如果是Public命名空间 则可以省略群组配置
        group: DEFAULT_GROUP
  config:
    activate:
      # 环境名称
      on-profile: dev

---
# Spring
spring:
  application:
    # 应用名称
    name: scm-eco
  cloud:
    nacos:
      discovery:
        # 服务注册地址
        server-addr: xxx.xxx.xxx.xxx:18848
        group: DEFAULT_GROUP
        namespace: 9e764c45-6965-47b3-9da2-efd95dc0c384
      config:
        # 配置中心地址
        server-addr: xxx.xxx.xxx.xxx:18848
        # 配置文件格式
        file-extension: yml
        # 共享配置
        shared-configs:
          - application-${spring.profiles.active}.${spring.cloud.nacos.config.file-extension}
        namespace: 9e764c45-6965-47b3-9da2-efd95dc0c384
        #指定配置群组 --如果是Public命名空间 则可以省略群组配置
        group: DEFAULT_GROUP
  config:
    activate:
      # 环境名称
      on-profile: prod
```

## 使用配置

:::tip 使用

* `java -jar -Dspring.profiles.active=prod *****.jar`
:::
