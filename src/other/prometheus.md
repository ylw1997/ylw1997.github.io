---
outline: deep
---

# Prometheus + Grafana

::: tip Prometheus + Grafana介绍

* Prometheus 是一个开源的监控系统，可以监控任何可以提供指标数据的应用。
* Grafana 是一个开源的度量分析与可视化套件，可以通过将数据查询到 Prometheus 来展示。
* 通常Prometheus和Grafana是一起使用的，Prometheus负责收集数据，Grafana负责展示数据。
* github地址：[Prometheus](https://github.com/prometheus/prometheus)
* github地址：[Grafana](https://github.com/grafana/grafana)
:::

![Prometheus + Grafana](https://i0.hdslb.com/bfs/article/e735b258fea40c859eafd5eb611c9ecb102411794.png)

## 前言:选型

### 1,为什么要使用监控系统

::: tip 为什么要使用监控系统

* 了解系统的运行状态
* 及时发现问题
* 预测问题
* 了解系统的性能
* 持续优化系统
* 及时收到告警
* 了解系统的历史数据
:::

### 2,监控什么指标

::: tip 监控什么指标

* 服务器的CPU、内存、磁盘、网络等
* 应用的QPS、响应时间、错误率等
* 数据库的连接数、事务数、错误率等
* 缓存的命中率、丢失率等
* 消息队列的消息堆积、消费速度等
:::

### 3,监控系统选型

* zabbix

:::tip zabbix

优点:

「产品成熟」：由于诞生时间长且使用广泛，拥有丰富的文档资料以及各种开源的数据采集插件，能覆盖绝大部分监控场景。

「采集方式丰富」：支持Agent、SNMP、JMX、SSH等多种采集方式，以及主动和被动的数据传输方式。

缺点:

需要在被监控主机上安装Agent，所有的数据都存在数据库里，产生的数据很大，瓶颈主要在数据库。
:::

![zabbix](https://i0.hdslb.com/bfs/article/803474d87b5531d054ae314ff1d3fe8f102411794.png)

* Open-Falcon

:::tip Open-Falcon

优点:

「自动采集能力」：Falcon-agent 能自动采集服务器的200多个基础指标（比如CPU、内存等），无需在server上做任何配置，这一点可以秒杀Zabbix.

「强大的存储能力」：底层采用RRDTool，并且通过一致性hash进行数据分片，构建了一个分布式的时序数据存储系统，可扩展性强。

「灵活的数据模型」：借鉴OpenTSDB，数据模型中引入了tag，这样能支持多维度的聚合统计以及告警规则设置，大大提高了使用效率。

「插件统一管理」：Open-Falcon的插件机制实现了对用户自定义脚本的统一化管理，可通过HeartBeat Server分发给agent，减轻了使用者自主维护脚本的成本。

「个性化监控支持」：基于Proxy-gateway，很容易通过自主埋点实现应用层的监控（比如监控接口的访问量和耗时）和其他个性化监控需求，集成方便。

缺点:

「监控类型较少」: 不支持常用应用服务器如tomcat、apache、jetty等的监控。

「整体发展一般，社区活跃度低」: 没有专门的运维支持，代码更新较少，没有一个较大的社区来维护，后续想要有什么新的能力基本只能指望自己扩展。

:::

![open-Falcon](https://i0.hdslb.com/bfs/article/735c084e30be9812102e4de0e7662e35102411794.png)

* uptime robot

:::tip uptime robot

优点:

「配置简单」: 无需安装agent，只需要在网站上注册账号，添加需要监控的站点即可。

「免费」: 提供免费的监控服务，每5分钟检测一次，每次检测时间为50秒。

「支持多种通知方式」: 支持邮件、短信、Twitter、Slack、Webhook等多种通知方式。

「支持多种监控方式」: 支持HTTP、HTTPS、Ping、Keyword、Port等多种监控方式。

缺点:

「监控频率低」: 免费版每5分钟检测一次，每次检测时间为50秒，对于一些对监控频率要求较高的场景不适用。

「监控类型单一」: 只支持站点的监控，不支持服务器、数据库等其他类型的监控。

:::
![uptime](https://i0.hdslb.com/bfs/article/3f6a72de224309dccdd77f71968cb0b5102411794.png)

* Prometheus + Grafana

:::tip Prometheus + Grafana

优点:

「社区活跃度高」: github start超过40k，且一直在维护。

「基于时序数据库，存储效率高」:Prometheus核心部分只有一个单独的二进制文件，不存在任何的第三方依赖(数据库，缓存等等)。唯一需要的就是 本地磁盘，因此不会有潜在级联故障的风险。

「很好地支持容器监控」: 能自动发现容器，同时k8s和etcd等项目都提供了对Prometheus的原生支持，是目前容器监控最流行的方案。

「基于Pull模型的架构」: Prometheus基于Pull模型的架构方式，可以在任何地方（本地电脑，开发环境，测试环境）搭建我们的监控系统。

缺点:

Prometheus 是基于 Metric 的监控，不适用于日志（Logs）、事件(Event)、调用链(Tracing)。

由于Prometheus采用的是Pull模型拉取数据，意味着所有被监控的endpoint必须是可达的，需要合理规划网络的安全配置。

指标众多，需进行适当裁剪。
:::
![Prometheus + Grafana](https://i0.hdslb.com/bfs/article/e735b258fea40c859eafd5eb611c9ecb102411794.png)

## Prometheus安装

这里使用docker compose 安装

```bash
docker compose -f prometheus.yml up -d
```

### prometheus.yml

```yaml
version: '3'
services:
# Prometheus: 监控系统
    prometheus:
        image: prom/prometheus
        container_name: prometheus
        hostname: prometheus
        restart: always
        volumes:
            - /root/apps/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml
        ports:
            - 9099:9090

# Alertmanager: 告警管理
    alertmanager:
        image: prom/alertmanager
        container_name: alertmanager
        hostname: alertmanager
        restart: always
        ports:
            - 9093:9093

# node-exporter: 服务器监控
    node-exporter:
        image: prom/node-exporter
        container_name: node-exporter
        hostname: node-exporter
        restart: always
        ports:
            - 9100:9100

# cadvisor: 容器监控
    cadvisor:
        image: google/cadvisor:latest
        container_name: cadvisor
        hostname: cadvisor
        restart: always
        volumes:
            - /:/rootfs:ro
            - /var/run:/var/run:rw
            - /sys:/sys:ro
            - /var/lib/docker/:/var/lib/docker:ro
        ports:
            - 8899:8080

# mysql-exporter: mysql监控
    mysqld-exporter:
        image: prom/mysqld-exporter
        container_name: mysqld-exporter
        environment:
            - DATA_SOURCE_NAME=root:123456@(192.168.0.251:3306)/
        command:
            - --config.my-cnf=/etc/.my.cnf
        ports:
            - 9104:9104
        volumes:
            - /root/apps/prometheus/.my.cnf:/etc/.my.cnf

# blackbox: 黑盒监控
    blackbox:
        image: prom/blackbox-exporter
        ports:
            - 9115:9115
        command:
            - --config.file=/etc/blackbox/blackbox.yml
        volumes:
            - /root/apps/prometheus/blackbox.yml:/etc/blackbox/blackbox.yml
```

### /root/apps/prometheus/prometheus.yml

```yaml
global: # 全局配置
  scrape_interval:     15s # 拉取数据的时间间隔
  evaluation_interval: 15s # 评估规则的时间间隔
scrape_configs: # 采集配置
  - job_name: 'prometheus' # 任务名称
    static_configs: # 静态配置
    - targets: ['192.168.0.251:9099'] # 目标地址
  - job_name: 'cadvisor'
    static_configs:
    - targets: ['192.168.0.251:8899']
  - job_name: '251'
    static_configs:
    - targets: ['192.168.0.251:9100']
  - job_name: '241'
    static_configs:
    - targets: ['192.168.0.241:9100']
  - job_name: 'k8s'
    metrics_path: '/actuator/prometheus'
    static_configs:
    - targets: ['192.168.0.238:30001']
  - job_name: 'blackbox_exporter'
    static_configs:
    - targets: ['192.168.0.251:9115']
  - job_name: 'mysqld_exporter_251' # 任务名称
    params: # 参数
      auth_module: [client]
    static_configs:
      - targets:
        - 192.168.0.251:3306
    relabel_configs: # 重写配置
      - source_labels: [__address__]
        target_label: __param_target
      - source_labels: [__param_target]
        target_label: instance
      - target_label: __address__
        replacement: 192.168.0.251:9104
  - job_name: 'blackbox'
    metrics_path: /probe
    params:
      module: [http_2xx] 
    static_configs:
      - targets: # 需要监控的URL
        - https://xxx
        - https://xxx
        - https://xxx
    relabel_configs:
      - source_labels: [__address__]
        target_label: __param_target
      - source_labels: [__param_target]
        target_label: instance
      - target_label: __address__
        replacement: 192.168.0.251:9115
  - job_name: 'eureka_server'
    metrics_path: /metrics
    eureka_sd_configs: # eureka配置
      - server: http://192.168.0.177:9900/eureka
    relabel_configs:
    # 重写 metrics 的路径
      - source_labels: ["__meta_eureka_app_instance_metadata_prometheus_path"]
        action: replace
        target_label: __metrics_path__
        regex: (.+)
        # 重写管理端口
      - source_labels: [__address__, __meta_eureka_app_instance_metadata_prometheus_port]
        action: replace
        regex: ([^:]+)(?::\d+)?;(\d+)
        replacement: $1:$2
        target_label: __address__
```

## Grafana安装

这里使用docker compose 安装

```bash
docker compose -f grafana.yml up -d
```

### grafana.yml

```yaml
version: '3'
services:
  home:
    container_name: grafana
    image: grafana/grafana
    volumes:
      - /root/apps/grafana/grafana.ini:/etc/grafana/grafana.ini
    ports:
      - 3000:3000
    restart: always
    privileged: true
```

### /root/apps/grafana/grafana.ini

配置grafana.ini 的email部分,以支持邮件告警

```ini
###SMTP / Emailing ###
[smtp]
enabled = true
host = smtp.163.com:465 #这里换成自己的smtp及端口
user = xxx@163.com #这里换成自己的邮箱地址
password =xxx #这里换成自己的邮箱密码
;cert_file =
;key_file =
;skip_verify = false
from_address = xxx@163.com #一般与上面的邮箱地址一致
from_name = Grafana
ehlo_identity = 
startTLS_policy = 

[emails]
welcome_email_on_sign_up = true
templates_pattern = emails/*.html, emails/*.txt
content_types = text/html

[server]
protocol = http
http_port = 3000
domain = xxx
```

## 安装验证

访问地址

:::tip 验证

* 这里访问的端口是yml配置的端口,实际请参考配置

* 访问prometheus: <http://192.168.0.251:9099>

* 访问grafana: <http://192.168.0.251:3000>

* 访问blackbox: <http://192.168.0.251:9115>

* 访问alertmanager <http://192.168.0.251:9093/#/alerts>

* 访问node_exporter: <http://192.168.0.251:9100>

* 访问mysql_exporter: <http://192.168.0.251:9104>

* 访问cadvisor: <http://192.168.0.251:8899>
:::

访问<http://192.168.0.251:9099/targets>,如果都是UP状态,则安装成功
![targets](https://i0.hdslb.com/bfs/article/d46ef712f35d7b63069ff4a157729b20102411794.png)

## Grafana面板配置

### 1,打开grafana

<http://192.168.0.251:3000>

### 2,添加数据源

![数据源](https://i0.hdslb.com/bfs/article/95810039637be3f53182ebfc99fe2f20102411794.png)

### 3,输入数据源信息

![数据源信息](https://i0.hdslb.com/bfs/article/3d5a442ff842adf37f6d64321aee7367102411794.png)

### 4,添加dashboard

![dashboard](https://i0.hdslb.com/bfs/article/f93d805c2bfa33741e06b8d43c2a3916102411794.png)

### 5,仪表板编号

* 13659 :Blackbox Exporter 接口状态监控面板
![blackbox](https://i0.hdslb.com/bfs/article/3bc27d0ce05ddbdff630c3186e1c3b9f102411794.png)

* 893 : docker 容器监控面板
![docker](https://i0.hdslb.com/bfs/article/f68033f2eb58c6ebe78ca7462af3ae1e102411794.png)

* 12856 : jvm监控面板
![jvm](https://i0.hdslb.com/bfs/article/6dc9e7d79ebe9664fcbcaea1288a220b102411794.png)

* 12633 : linux主机监控面板
![linux](https://i0.hdslb.com/bfs/article/126552903daac3055cde4013183157c0102411794.png)

* 7362 : mysql监控面板
![myql](https://i0.hdslb.com/bfs/article/1e2d25bab34b5928f326102945a062ca102411794.png)

## 搭建 Blackbox Exporter监控

### 1,创建blackbox配置文件

blackbox.yml

```yaml
modules:
  http_2xx:
    prober: http
    timeout: 5s
    http:
      method: GET
```

### 2,修改prometheus.yml 增加配置

```yaml
  - job_name: 'blackbox_exporter'
    static_configs:
    - targets: ['192.168.0.251:9115']
  - job_name: 'blackbox'
    metrics_path: /probe
    params:
      module: [http_2xx] 
    static_configs:
      - targets: # 需要监控的URL
        - https://xxx
        - https://xxx
        - https://xxx
    relabel_configs:
      - source_labels: [__address__]
        target_label: __param_target
      - source_labels: [__param_target]
        target_label: instance
      - target_label: __address__
        replacement: 192.168.0.251:9115
```

### 3,重启prometheus

```bash
docker restart prometheus
```

### 4,查看prometheus是否有数据

![blackbox](https://i0.hdslb.com/bfs/article/1aa12560a157a73f43c32d967ecdf949102411794.png)

## 搭建 node_exporter监控

### 1,docker安装node_exporter

```bash
docker run -d -p 9100:9100 --name=node_exporter prom/node-exporter
```

### 2,prometheus配置node_exporter

```yaml
  - job_name: '251'
    static_configs:
    - targets: ['192.168.1.251:9100']
```

### 3,重启prometheus

```bash
docker restart prometheus
```

### 4,查看prometheus是否有数据

![node](https://i0.hdslb.com/bfs/article/0e19f43ddaba2d7b9a6638c5456ab412102411794.png)

## 搭建 mysqld_exporter监控

### 1,docker安装mysqld_exporter

```bash
docker run -d -p 9104:9104 --name=mysqld_exporter prom/mysqld-exporter
```

### 2,修改mysqld_exporter的配置文件
  
```bash
vim /root/apps/prometheus/.my.cnf
```

```ini
[client]
user=root
password=123456
```

### 3,prometheus配置mysqld_exporter
  
```yaml
- job_name: 'mysqld_exporter_251' # 任务名称
  params: # 参数
    auth_module: [client]
  static_configs:
    - targets:
      - 192.168.0.251:3306
  relabel_configs: # 重写配置
    - source_labels: [__address__]
      target_label: __param_target
    - source_labels: [__param_target]
      target_label: instance
    - target_label: __address__
      replacement: 192.168.0.251:9104
```

### 4,重启prometheus

```bash
docker restart prometheus
```

### 5,查看prometheus是否有数据

![mysql](https://i0.hdslb.com/bfs/article/a54031c0ef37623bd781cb0047552f94102411794.png)

## 搭建 Eureka Server监控

### 1,eureka服务端配置

application.yml

```yaml
spring:
  application:
    name: EUREKA_SERVER
  mvc:
    async:
      request-timeout: -1
eureka:
  server:
    enable-self-preservation: false #设置为false表示关闭保护模式.在保护模式下，如因为网络或其它问题服务提供者掉线的话，eureka不会立即清空服务列表
  instance:
    hostname: 192.168.0.177
    ip-address: 192.168.0.177
  client:
    register-with-eureka: false
    fetch-registry: false
    service-url:
      defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/
server:
  port: 9900
```

### 2,所有子模块配置

pom.xml 增加依赖

```xml
        <dependency>
            <groupId>io.micrometer</groupId>
            <artifactId>micrometer-registry-prometheus</artifactId>
            <version>1.12.5</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
```

application.yml 增加配置

```yaml
spring:
  application:
    name: product
server:
  port: 9902
eureka:
  client:
    service-url:
      defaultZone: http://192.168.0.177:9900/eureka/
  instance:
    instance-id: ${spring.application.name}:${server.port}
    prefer-ip-address: true
    ip-address: 192.168.0.177
    metadata-map:
      "prometheus.scrape": "true"
      "prometheus.path": "/actuator/prometheus"
      "prometheus.port": ${server.port}

management:
  endpoint:
    health:
      show-details: always
  endpoints:
    enabled-by-default: true
    web:
      base-path: /actuator
      exposure:
        include: '*'
  metrics:
    tags:
        application: ${spring.application.name}
```

### 3,prometheus配置

```yaml
  - job_name: 'eureka_server'
    metrics_path: /metrics
    eureka_sd_configs: # eureka配置
      - server: http://192.168.0.177:9900/eureka
    relabel_configs:
    # 重写 metrics 的路径
      - source_labels: ["__meta_eureka_app_instance_metadata_prometheus_path"]
        action: replace
        target_label: __metrics_path__
        regex: (.+)
        # 重写管理端口
      - source_labels: [__address__, __meta_eureka_app_instance_metadata_prometheus_port]
        action: replace
        regex: ([^:]+)(?::\d+)?;(\d+)
        replacement: $1:$2
        target_label: __address__
```

### 4,重启prometheus

```bash
docker restart prometheus
```

### 5,查看prometheus是否有数据

![eureka](https://i0.hdslb.com/bfs/article/7f5874733174eea6efffa4cbb9f4e24d102411794.png)

## 配置grafana 告警

### 1,配置grafana联络点

![联络点](https://i0.hdslb.com/bfs/article/5a128d3a235b6698a4717bc9fbfa97d0102411794.png)

### 2,配置告警通知

![创建通知](https://i0.hdslb.com/bfs/article/8f2b8041ce8c6d87374a24fcde9bf139102411794.png)

### 3,添加通知策略

![通知策略](https://i0.hdslb.com/bfs/article/6c3497c0af4ee14f9b160d6aebc2d3b2102411794.png)

### 4,配置告警规则

告警规则

![告警规则](https://i0.hdslb.com/bfs/article/3c80b556cafc92d1fb872941ac2d6553102411794.png)

通知策略

![通知策略](https://i0.hdslb.com/bfs/article/f61f49cd7b3fba150f2efe879473e4f1102411794.png)

添加解释
![添加解释](https://i0.hdslb.com/bfs/article/6e3b2b34de39a3a0a77dd9badccc1f4e102411794.png)

完成效果
![效果](https://i0.hdslb.com/bfs/article/30e5487f338f0b6c5f3fdf0fe466c43f102411794.png)

### 5,告警效果

![告警效果](https://i0.hdslb.com/bfs/article/9ab53ca7bfa4bb6fa1933bac2fa8a7d7102411794.png)

## 配置钉钉告警

### 1. 配置钉钉机器人地址

  ![配置钉钉机器人地址](https://i0.hdslb.com/bfs/article/ba94e4a456c173f88665283f9e49d0e2102411794.png)

### 2. 配置grafana

  ![配置grafana](https://i0.hdslb.com/bfs/article/dedb5e120cf8f6ac482fd47db2a13ddd102411794.png)

### 3. 效果

  ![效果](https://i0.hdslb.com/bfs/article/afc5b9dd79030534b508a8a3d0c82d82102411794.png)
