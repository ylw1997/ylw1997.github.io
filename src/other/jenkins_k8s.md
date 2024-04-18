# jenkins+harbor+gitlab+k8s 实现自动化部署

:::tip

* 提交代码到gitlab，触发jenkins构建镜像并推送到harbor，然后通过k8s部署到k8s集群中

* 前提: k8s集群已经搭建好，harbor已经搭建好，gitlab已经搭建好，jenkins已经搭建好

:::

## 1. 在k8s 所有节点登录harbor

:::tip

* 为了让k8s集群中的所有节点都能拉取harbor中的镜像，需要在所有节点上登录harbor

:::

```bash
docker login -u admin -p Harbor12345 harbor.abc.com
```

## 2, 在k8s 所有docker修改daemon.json

:::tip

* 为了让k8s集群中的所有节点都能拉取harbor中的镜像，需要在所有节点上修改docker的配置文件
* 修改后重启docker

:::

```bash
vim /etc/docker/daemon.json
```

```json
{
  "insecure-registries": ["harbor.abc.com"]
}
```

## 3, 修改jenkins的docker compose配置文件

:::tip

* 注意:这里jenkins是其他服务器docker安装的,直接安装jenkins有docker环境则不需要
* 为了让jenkins能够打包推送镜像，需要在jenkins的docker compose配置文件中映射docker运行文件
* 修改后重启jenkins

:::

```yml
# docker-compose.yml
version: '3'
services:
  docker_jenkins:
    user: root
    restart: always
    image: jenkins/jenkins:jdk17
    container_name: docker_jenkins
    ports:
      - "8080:8080"
    volumes:
      - /root/apps/jenkins/jenkins_home:/var/jenkins_home # 把jenkins_home映射到本地
      - /usr/bin/docker:/usr/bin/docker # 把docker映射到jenkins内
      - /var/run/docker.sock:/var/run/docker.sock
```

## 4, jenkins 安装插件

:::tip

* 安装 docker-build-step 插件 <https://plugins.jenkins.io/docker-build-step/>

* 插件包含了docker build、docker push、docker tag等命令

:::

## 5, jenkins 配置

### 5.1 打包镜像配置

![build image](https://i0.hdslb.com/bfs/article/350492110988710f34b3c8c74c9b2dab102411794.png)

### 5.2推送镜像配置

![push image](https://i0.hdslb.com/bfs/article/5f9d3f88d03680bf7f94c4e4a19b39b8102411794.png)

### 5.3 部署k8s配置

![k8s deploy](https://i0.hdslb.com/bfs/article/6bcf7535a8c75a7466c7245c6a895711102411794.png)

## 6,查看harbor是否有镜像

* harbor中有镜像
![harbor image](https://i0.hdslb.com/bfs/article/a3063a352ab5398014b473e7e0b7122d102411794.png)

## 7,k8s yml文件

```yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: product-deployment
  labels:
    app: product
spec:
  replicas: 2
  selector:
    matchLabels:
      app: product
  template:
    metadata:
      labels:
        app: product
    spec:
      containers:
      - name: product
        image: dev.qmsznj.com:7443/library/product:80
        imagePullPolicy: Always
        ports:
          - containerPort: 8000
---
apiVersion: v1
kind: Service
metadata:
  name: product-service
spec:
  selector:
    app: product
  type: NodePort
  ports:
  - port: 8000 
    targetPort: 8000 # 指定容器端口
    nodePort: 30001 # 指定对外端口
```

## 8,查看k8s是否有镜像

* 在k8s集群中查看镜像

```bash
[root@master ~]# kubectl get pods
NAME                                 READY   STATUS    RESTARTS   AGE
product-deployment-9b86d5657-nfgz6   1/1     Running   0          9d
product-deployment-9b86d5657-xrtsx   1/1     Running   0          9d
```

## 9,访问k8s服务

* 访问k8s服务

![k8s service](https://i0.hdslb.com/bfs/article/13f90870ad366678af06842bab42bdb9102411794.png)

## 10,查看k8s日志

* 查看k8s日志

```bash
[root@master ~]# kubectl logs product-deployment-9b86d5657-nfgz6
```

## 问题

### 1, jenkins 没有docker命令

* 必须映射docker到jenkins内

### 2, jenkins ssh执行kubectl 命令报错

* 因为 linux ssh@192.168.0.238 'kubectl get pods' 和 登陆后再执行 kubectl get pods 是不一样的

* 直接修改.bashrc文件,添加kubernetes对应的环境变量

* 参考: <https://www.jianshu.com/p/f24c7445c4db>

```bash
[root@master ~]# cat .bashrc
# .bashrc

# User specific aliases and functions

alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'

# Source global definitions
if [ -f /etc/bashrc ]; then
        . /etc/bashrc
fi
source <(kubectl completion bash)

export KUBECONFIG=/etc/kubernetes/admin.conf
```
