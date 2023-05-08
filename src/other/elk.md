# elk

:::tip

* elk 是一款日志分析工具
* elk = elasticsearch + logstash + kibana
* elasticsearch 是一个基于 Lucene 的搜索服务器
* logstash 是一个日志收集工具
* kibana 是一个数据可视化工具
* 参考文档:
* <https://github.com/deviantony/docker-elk> 安装文档
* <https://github.com/logfellow/logstash-logback-encoder> 日志
:::

## 1,安装

:::tip 安装

* 使用docker-compose 直接安装,所以必须要有docker-compose环境
* 会占用 50000,5601,9200等端口
* 会占用 3G 左右的内存
:::

```bash
# 下载 整个项目
git clone <https://github.com/deviantony/docker-elk.git>

# 进入项目目录
cd docker-elk

# 启动
docker-compose up -d

```

## 2,访问

:::tip 访问

* 默认在 5601 端口
* 默认账号是 elastic,密码是 changeme
* 有可能存在无法访问,请更换浏览器,或者修改配置文件

:::

```bash
# 访问
http://localhost:5601

```

![elk](https://article.biliimg.com/bfs/article/25980a93ea8dd4b1ddf34fc9a71b18e79e07305b.png)

## 3, 配置

:::tip 配置

* 配置中文
* 配置pipeline.conf
:::

### 3.1, 配置中文

```bash

cd docker-elk/kibana/config

# 编辑 kibana.yml
vim kibana.yml

# 添加
i18n.locale: "zh-CN"

```

### 3.2, 配置pipeline.conf

```bash

cd docker-elk/logstash/pipeline

# 编辑 pipeline.conf
vim pipeline.conf

```

```json
input {
        beats {
                port => 5044
        }

        tcp {
                port => 50000
                codec => json_lines
        }
}

## Add your filters / logstash plugins configuration here

##  index => "logstash-%{appname}-%{+YYYY.MM.dd}" 会自动创建索引

output {
        elasticsearch {
                index => "logstash-%{appname}-%{+YYYY.MM.dd}"
                hosts => "elasticsearch:9200"
                user => "logstash_internal"
                password => "${LOGSTASH_INTERNAL_PASSWORD}"
        }
}
  
```

## 4, 在项目中使用

:::tip 在项目中使用

* 在spring boot 项目中使用

:::

### 4.1, 添加依赖

```xml
https://github.com/logfellow/logstash-logback-encoder#including-it-in-your-project

<dependency>
  <groupId>net.logstash.logback</groupId>
  <artifactId>logstash-logback-encoder</artifactId>
  <version>7.3</version>
</dependency>
```

### 4.2, 添加配置

```xml
<!-- logback.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <appender name="stash" class="net.logstash.logback.appender.LogstashTcpSocketAppender">
        <destination>192.168.0.251:50000</destination>

        <!-- encoder is required -->
        <encoder class="net.logstash.logback.encoder.LogstashEncoder" >
            <customFields>{"appname":"product"}</customFields>
        </encoder>
    </appender>

    <root level="DEBUG">
        <appender-ref ref="stash" />
    </root>
</configuration>

```

### 4.3, 为项目添加数据视图

:::tip

* 配置数据视图

* 索引模式填写为: logstash-{你的appname}*例如: logstash-product*

:::

![elk](https://article.biliimg.com/bfs/article/b648dd0d7eb60c51d412ca0a90296509bdce5a64.png)

## 5, 查看日志

> 在kibana中查看日志

![elk](https://article.biliimg.com/bfs/article/ef5317ab7422c5c538dace729f289f9caec53800.png)

## 6, spring cloud 中使用

:::tip

* 在spring cloud 中使用

* 大致和spring boot 一样

:::

### 6.1, 添加依赖

```xml
<!-- pom.xml -->
<dependency>
            <groupId>net.logstash.logback</groupId>
            <artifactId>logstash-logback-encoder</artifactId>
            <version>7.3</version>
        </dependency>

```

### 6.2, 添加配置

```xml
<!-- logback.xml -->
<?xml version="1.0" encoding="UTF-8"?>

<configuration scan="true" scanPeriod="60 seconds" debug="false">
    <appender name="LOGSTASH" class="net.logstash.logback.appender.LogstashTcpSocketAppender">
        <destination>122.194.15.6:50000</destination>    <!--指定logstash ip：监听端口 tcpAppender  可自己实现如kafka传输等-->
        <encoder charset="UTF-8" class="net.logstash.logback.encoder.LogstashEncoder" >
            <customFields>{"appname":"payeco"}</customFields>
        </encoder>
    </appender>

    <include resource="org/springframework/boot/logging/logback/base.xml"/>      <!--引用springboot默认配置-->

    <root level="INFO">
        <appender-ref ref="LOGSTASH" />                                           <!--使用上述订阅logstash数据tcp传输 -->
<!--        <appender-ref ref="CONSOLE" />                                            &lt;!&ndash;使用springboot默认配置 调试窗口输出&ndash;&gt;-->
    </root>

</configuration>
```

### 6.3 配置mybatisplus 打印sql

```yml
# application.yml
mybatis-plus:
    # 搜索指定包别名
  typeAliasesPackage: com.infrastructure.system,com.infrastructure.job.domain
  configuration:
    # log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
    log-impl: org.apache.ibatis.logging.slf4j.Slf4jImpl
    # 配置mapper的扫描，找到所有的mapper.xml映射文件
  mapperLocations: classpath*:mapper/**/*.xml

logging:
  level:
    com.qm.pay.mapper: debug
```

### 6.4 配置环境变量

```xml

# logback.xml

<!--prod springboot环境-->
    <springProfile name="prod">
        <appender name="LOGSTASH" class="net.logstash.logback.appender.LogstashTcpSocketAppender">
            <destination>122.194.15.6:50000</destination>    <!--指定logstash ip：监听端口 tcpAppender  可自己实现如kafka传输等-->
            <encoder charset="UTF-8" class="net.logstash.logback.encoder.LogstashEncoder" >
                <customFields>{"appname":"payeco-prod"}</customFields>
            </encoder>
        </appender>
    </springProfile>

    <!--dev springboot环境-->
    <springProfile name="dev,local">
        <appender name="LOGSTASH" class="net.logstash.logback.appender.LogstashTcpSocketAppender">
            <destination>122.194.15.6:50000</destination>    <!--指定logstash ip：监听端口 tcpAppender  可自己实现如kafka传输等-->
            <encoder charset="UTF-8" class="net.logstash.logback.encoder.LogstashEncoder" >
                <customFields>{"appname":"payeco-dev"}</customFields>
            </encoder>
        </appender>
    </springProfile>

```

> 往下配置参考4.3,4.4
