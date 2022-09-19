# jenkins 

> jenkins 是一个开源的持续集成工具，可以用来自动化构建、测试、部署项目

> 这里用docker-compose 部署jenkins,并把jenkins文件夹映射到外部,方便管理

## docker 安装jenkins

```bash
# 获取镜像
docker pull jenkins/jenkins:lts
# 运行
docker run -d -p 8080:8080 -p 50000:50000 -v /root/mydocker/jenkins:/var/jenkins_home --name myjenkins jenkins/jenkins:lts
```

## docker-compose安装jenkins

### 1,创建文件夹

```bash
|-- demo
    |-- compose //存放docker-compose.yml文件
    |-- jenkins //jenkins文件夹
        |-- jenkins_home //jenkins运行环境外部映射文件夹
```

### 2,创建docker-compose.yml文件

在compose文件夹下创建docker-compose.yml文件

```shell
version: '3'
services:
  docker_jenkins:
    user: root # 使用root用户运行docker
    restart: always # 重启时重新启动
    image: jenkins/jenkins:lts # 镜像
    container_name: docker_jenkins # 容器名称
    ports:
      - "8080:8080" # 容器端口映射到主机端口
      - "50000:50000" # 容器端口映射到主机端口
    volumes:
      - /demo/jenkins/jenkins_home:/var/jenkins_home  # 把jenkins_home映射到本地
```
![图片](https://article.biliimg.com/bfs/article/7ac8eae312c980d5a080416637471ee85895ff1a.png)

### 3,运行docker-compose.yml文件,启动jenkins

```shell
docker-compose up -d
```
![图片](https://article.biliimg.com/bfs/article/49bd4814740253982e822cc907f315f6b07c69eb.png)

> 查看是否启动成功
  
  ```shell
  docker ps -a
  ```
![img](https://article.biliimg.com/bfs/article/4e699dec924b35da5e332f85d0c37461cfea990d.png)
  
> 启动成功,并且端口8080已经和本地8080映射了


## 1,访问jenkins

> 浏览器打开 `http://localhost:8080`

![img](https://article.biliimg.com/bfs/article/c6f0fc3de62db66c7e897ae0feebeb359b5a4d7d.png)

## 2,解锁jenkins

> 进入jenkins后,会提示解锁jenkins,需要在docker容器中找到解锁密码

```shell
# 进入docker容器
docker exec -it docker_jenkins /bin/bash
# 找到解锁密码
cat /var/jenkins_home/secrets/initialAdminPassword
```

## 3,选择插件安装

> 选择自己需要的插件安装,也可以直接安装后面再安装

![img](https://article.biliimg.com/bfs/article/fb1d668ccd564924202d3aacf41630db83035ccd.png)


## 4,创建管理员账号

> 创建管理员账号

![img](https://article.biliimg.com/bfs/article/a5b03d494be52fee197f7b73b6aa2e4afb10cbed.png)


## 5,安装完成

> 安装完成,进入jenkins

![img](https://article.biliimg.com/bfs/article/10866b6f646647b93d9c72b1c5ad50c15b4beb0c.png)


## 6,安装插件

:::tip 安装插件
 * Localization: Chinese (Simplified) 中文语言包
 * Publish Over SSH 通过ssh上传打包产物
 * github plugin 
 * gitlab plugin
 * gitee plugin
 * nodejs plugin
 * Maven Integration
:::

## 7,配置nodejs

> 配置nodejs,主要是前端项目使用

> 打开系统管理 -> 全局工具配置 -> nodejs

> 按照如下配置

![img](https://article.biliimg.com/bfs/article/3dfc98a8dc0793bc9898142b4e50baaa9ab4fd5c.png)


## 8,配置maven

:::tip
* 主要是后端java项目使用

* 打开系统管理 -> 全局工具配置 -> Maven

* 如下配置
:::


![img](https://article.biliimg.com/bfs/article/50c9258868972806cf4f6450043213ee6b5ba973.png)


## 9,配置JDK

:::tip 配置JDK
* 主要是后端java项目使用

* 打开系统管理 -> 全局工具配置 -> JDK

* 需要登录甲骨文账号,点击下图红色区域输入甲骨文账号密码
:::

![i](https://article.biliimg.com/bfs/article/8837d02222be566a9789a02d08b1ba6042a29451.png)

![i](https://article.biliimg.com/bfs/article/275948e8d33132f4febd552139c139129be38c1c.png)


## 10,配置SSH服务器

:::tip 服务器
* 配置服务器是为了自动化部署使用

* 打开系统管理 -> 系统管理 -> 系统配置 -> SSH Servers

* 注意配置时,点击高级,选择Use password authentication, or use a different key,并输入密码

* 配置完点击Test Configuration 如果出现Success 表示添加ssh服务器成功

* 按照下图配置
:::

![i](https://article.biliimg.com/bfs/article/428bdb69861ad45d17aed71de29b9de6952f666f.png)



## 11,新建任务

:::tip 新建任务

* 点击新建任务按钮

* 输入任务名称

* 选择构建一个maven项目

* 点击确定
:::

![i](https://article.biliimg.com/bfs/article/7cce44a5094d6123af38fef4d2802c602738c037.png)


## 12,配置git地址

:::tip
* 进入项目 -> 设置 -> 源码管理

* 点击git,Repository URL栏输入项目git地址

* Credentials选择一个用户名密码,没有的点击下方添加按钮添加

* 如果没有红色报错,表示添加git成功

* 指定分支写 */master 默认主分支

:::

![i](https://article.biliimg.com/bfs/article/16ec8812dd5b8f2cf4f2ca543d16a275c9924c4e.png)


## 13,打包配置

:::tip 打包配置
* Root POM 输入pom.xml的地址

* Goals and options 输入 打包命令 clean install

* 如下配置
:::

![i](https://article.biliimg.com/bfs/article/dc21ad148c416491ed940b9061ccb1ce3ed88296.png)

## 14,配置SSH上传

:::tip SSH上传
* 点击 增加构建后操作步骤 按钮

* 选择 Send build artifacts over SSH 选项

* 在SSH-SERVER中选择要上传的服务器

* 在Source files中输入打包的产物的径

* 在Remove prefix 输入产物前路径,不然会连着文件夹一起传输

* 在 Remote directory 输入 服务器当前用户目录下面的某一个文件夹

**例如上传到 /root/jobs 用户文件夹根目录是 /root 那就此处填写 jobs**

* 在 Exec command 输入上传完成后需要执行的命令,一般是执行命令

**如果填写了Remote directory,那就要先进入这个文件夹,例如 # cd jobs**

:::

![i](https://article.biliimg.com/bfs/article/70b458f265c83cebcbfad6b474f3e72d95ca3fb1.png)

:::tip 提示
* 如果有多个文件需要上传,可以点击下方 Add Transfer Set 按钮新增上传
:::

## 15,构建

:::tip 构建
* 返回项目目录,点击 立即构建 按钮
:::

![i](https://article.biliimg.com/bfs/article/a245aa1f3b9e4b29b3b701d8cbd66736890b73bd.png)


## 注意

:::tip 注意
* 1, 配置完Maven和JDK以后,jenkins并不会在配置完就安装,而是在第一次运行任务的时候自动安装

* 2,docker-compose是定义和编排docker镜像的工具,通过使用 YML 文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有服务

* 3,第一次运行任务会需要较长时间用来下载依赖和安装Maven,JDK,第二次以后就会快很多
:::

## 错误处理

### java.net.UnknownHostException: updates.jenkins.io

:::warning 联网错误
* 如果出现:WARNING	hudson.model.UpdateCenter#updateDefaultSite: Upgrading Jenkins. Failed to update the default Update Site 'default'. Plugin upgrades may fail.
java.net.UnknownHostException: updates.jenkins.io

可能是jenkins没有联网,有两个方法

1,打开 localhost:8080/pluginManager/advanced 修改 update Site URL 为 http://updates.jenkins.io/update-center.json

2,进入jenkins服务器,修改/etc/resolv.conf 文件,添加 nameserver
nameserver 8.8.8.8
nameserver 114.114.114.114
:::

### No valid crumb was included in request

:::warning 新版本Jenkins的CSRF安全校验的问题
* 出现No valid crumb was included in request for /pluginManager/installPlugins by admin. Returning 403.

* 进入/jenkins_home/

* 编辑config.xml
:::

```xml
<crumbIssuer class="hudson.security.csrf.DefaultCrumbIssuer">
    <excludeClientIPFromCrumb>true</excludeClientIPFromCrumb>
  </crumbIssuer>
  ```