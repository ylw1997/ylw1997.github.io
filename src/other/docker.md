# docker

## 安装docker

:::tip 安装

* 两种安装方法

* 1, yum安装

* [切换源](https://developer.aliyun.com/mirror/centos?spm=a2c6h.13651102.0.0.27311b11e58Kkv)

* 安装 `yum install docker`

* 2,官方脚本

* `curl -fsSL https://get.docker.com | bash -s docker`

:::

```bash
# yum安装
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup

curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo

yum install -y yum-utils device-mapper-persistent-data lvm2

yum install -y docker-ce

docker -v

```

```bash
# 官方脚本
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

## 搜索镜像

```bash
docker search nginx
```

## 拉取镜像

```bash
docker pull nginx:1.12.1
```

## 删除镜像

```bash
docker rmi nginx:1.12.1
```

## 运行镜像

```bash
# -d 后台运行 -p 端口映射
docker run -d -p 80:80 nginx:1.12.1
```

## 查看容器

```bash
docker ps -a

CONTAINER ID   IMAGE          COMMAND                  CREATED              STATUS                        PORTS
       NAMES
2267a160b66d   nginx:1.12.1   "nginx -g 'daemon of…"   About a minute ago   Up About a minute             0.0.0.0:80->80/tcp   relaxed_snyder
5ef980bacfb0   mysql:8.0.28   "docker-entrypoint.s…"   8 days ago           Exited (137) 12 minutes ago

```

## 给容器起名字

```bash
docker rename 2267a160b66d mynginx

CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS                        PORTS                NAMES
2267a160b66d   nginx:1.12.1   "nginx -g 'daemon of…"   7 minutes ago   Up 7 minutes                  0.0.0.0:80->80/tcp   mynginx
5ef980bacfb0   mysql:8.0.28   "docker-entrypoint.s…"   8 days ago      Exited (137) 18 minutes ago                        docker_mysql
```

## 停止容器

```bash
docker stop mynginx
# 或者
docker stop 2267a160b66d
```

## 启动容器

```bash
docker start mynginx
```

## 重启

```bash
docker restart mynginx
```

## 更新容器自动重启

```bash
docker update --restart=always mynginx
```

## 查看容器日志

```bash
docker logs mynginx
```

## 进入容器

```bash
docker exec -it mynginx /bin/bash
# 退出
exit
```

## 拷贝文件到容器

```bash
docker cp /Users/xxx/xxx.txt mynginx:/usr/share/nginx/html
```

## 创建 dockerfile 文件

```shell
# Dockerfile
FROM nginx

LABEL MAINTAINER="yangliwei"

RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx /usr/share/nginx/html/

ENV TZ=Asia/Shanghai

COPY dist/  /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

## docker 命令摘要

:::tip 命令摘要

* FROM- 镜像从那里来
* MAINTAINER- 镜像维护者信息
* RUN- 构建镜像执行的命令，每一次 RUN 都会构建一层
* CMD- 容器启动的命令，如果有多个则以最后一个为准，也可以为 ENTRYPOINT 提供参数
* VOLUME- 定义数据卷，如果没有定义则使用默认
* USER- 指定后续执行的用户组和用户
* WORKDIR- 切换当前执行的工作目录
* HEALTHCHECH- 健康检测指令
* ARG- 变量属性值，但不在容器内部起作用
* EXPOSE- 暴露端口
* ENV- 变量属性值，容器内部也会起作用
* ADD- 添加文件，如果是压缩文件也解压
* COPY- 添加文件，以复制的形式
* ENTRYPOINT- 容器进入时执行的命令
  :::

## dockerfile 创建镜像

```bash
# 创建镜像
docker build -t mynginx .

# 查看镜像
docker images

# 结果
REPOSITORY           TAG             IMAGE ID       CREATED          SIZE
mynginx              latest          c8c87fb396ce   43 seconds ago   146MB
```

## docker compose

:::tip 简介
Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有服务。
大致步骤:

* 使用 Dockerfile 定义应用程序的环境
* 使用 docker-compose.yml 定义构成应用程序的服务，这样它们可以在隔离环境中一起运行。
* 使用 docker-compose up 命令来启动应用程序。
  :::

## docker-compose.yml

```bash
# 用上面那个 Dockerfile 创建的镜像
version: '3'
services:
  web:
    build: .
    ports:
      - "80:80"
```

## 启动

```bash
docker-compose up -d

# 如果是自定义名称启动
docker-compose -f .\php.yml up -d
```

## 全部停止

```bash
docker stop $(docker ps -a -q)
```

## 全部删除容器

```bash
docker rm $(docker ps -aq)
```

## 全部删除镜像

```bash
docker rmi -f $(docker images -qa)
```

## 查看运行状态

```bash
docker-compose ps
```

## 限制内存大小

```bash
# docker限制内存大小
docker update jenkins -m 3g  --memory-swap -1

# 命令详解
--memory 或 -m  限制容器的内存使用量
--memory-swap  限制内存和 Swap 的总和，不设置的话默认为--memory的两倍
```

## mysql compose文件实例

```bash
version: "3"
services:
  docker_mysql:
    user: root
    restart: always
    image: mysql:8.0.28
    container_name: docker_mysql
    ports:
      - "3306:3306"
    command: 
      --default-authentication-plugin=mysql_native_password
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_general_ci
      --explicit_defaults_for_timestamp=true
      --lower_case_table_names=1
    environment:
      LANG: en_US.UTF-8
      TZ: Asia/Shanghai
      MYSQL_ROOT_PASSWORD: 123456
    volumes:
      - D:/docker/mysql/data:/var/lib/mysql
      - D:/docker/mysql/conf:/etc/mysql/conf.d
```

## nacos compose文件实例

```bash
version: "3"
services:
  nacos:
    image: nacos/nacos-server
    hostname: nacos-server01
    container_name: nacos-standalone-mysql
    restart: always
    environment: 
      - MODE=standalone
      - PREFER_HOST_MODE=hostname
      - SPRING_DATASOURCE_PLATFORM=mysql
      - MYSQL_SERVICE_HOST=172.19.0.3
      - MYSQL_SERVICE_PORT=3306
      - MYSQL_SERVICE_USER=root
      - MYSQL_SERVICE_PASSWORD=123456
      - MYSQL_SERVICE_DB_NAME=nacos
      - JVM_XMS=512m
      - JVM_XMX=512m
      - JVM_XMN=512m
    volumes:
      - D:/docker/nacos/logs:/home/nacos/logs
    ports:
      - 8848:8848
      - 9848:9848
      - 9555:9555
    depends_on:
      - docker_mysql
    restart: always
    networks:
      app_net:
        ipv4_address: 172.19.0.2
  docker_mysql:
    user: root
    restart: always
    image: mysql:8.0.28
    container_name: docker_mysql
    ports:
      - "3306:3306"
    command: 
      --default-authentication-plugin=mysql_native_password
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_general_ci
      --explicit_defaults_for_timestamp=true
      --lower_case_table_names=1
    environment:
      LANG: en_US.UTF-8
      TZ: Asia/Shanghai
      MYSQL_ROOT_PASSWORD: 123456
    volumes:
      - D:/docker/mysql/data:/var/lib/mysql
      - D:/docker/mysql/conf:/etc/mysql/conf.d
    networks:
      app_net:
        ipv4_address: 172.19.0.3
networks:
  app_net:
    ipam:
      config:
        - subnet: 172.19.0.0/16
```

## jenkins compose文件实例

```bash
version: '3'
services:
  docker_jenkins:
    user: root
    restart: always
    image: jenkins/jenkins:latest
    container_name: docker_jenkins
    ports:
      - "8080:8080"
      - "50000:50000"
    volumes:
      - D:/docker/jenkins/jenkins_home:/var/jenkins_home # 把jenkins_home映射到本地
  docer_nginx:
    user: root
    restart: always
    image: nginx
    container_name: docer_nginx
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - D:/docker/nginx/www:/usr/share/nginx/html
      - D:/docker/nginx/conf.d:/etc/nginx/conf.d
  docker_mysql:
    user: root
    restart: always
    image: mysql:8.0.28
    container_name: docker_mysql
    ports:
      - "3306:3306"
    command: 
      --default-authentication-plugin=mysql_native_password
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_general_ci
      --explicit_defaults_for_timestamp=true
      --lower_case_table_names=1
    environment:
      LANG: en_US.UTF-8
      TZ: Asia/Shanghai
      MYSQL_ROOT_PASSWORD: 123456
    volumes:
      - D:/docker/mysql/data:/var/lib/mysql
      - D:/docker/mysql/conf:/etc/mysql/conf.d
```
