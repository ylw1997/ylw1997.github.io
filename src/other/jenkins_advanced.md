# jenkins 高级配置

## 自动化项目构建

### 1,配置项目

:::tip 配置项目

* 1,点击项目的配置

* 2,点击构建触发器,勾选`Build when a change is pushed to GitLab.GitLab webhook URL: http://XXX Enabled GitLab triggers`

* 3,点击 高级 按钮 , 找到 Secret token 点击 generate , 生成一个 token , 然后然后点击保存
:::

![i](https://article.biliimg.com/bfs/article/289300a91a3ae7a4cc9c1426c58b5dd720399732.png)

### 2,配置 GitLab

:::tip gitlb配置

* 1,进入 GitLab 项目的设置页面

* 2,进入webhooks页面,点击add webhook

* 3,填写URL,URL是Jenkins的webhook地址,格式为`http://XXX/project/项目名`,Secret Token是Jenkins生成的token

* 4,去掉SSL验证

* 5,点击保存

* 6,点击测试下拉框,点击Push events,进入jenkins主页,查看构建执行状态,如果有对应的项目正在构建,代表创建自动化成功

:::

![img](https://article.biliimg.com/bfs/article/8aacaff0700e110c89e176cbe15562f59ed115a6.png)

## 邮件通知

### 1,邮箱配置

:::tip 邮箱配置

* 1,进入系统管理,点击系统配置,找到Extended E-mail Notification

* 2,在SMTP Serve 输入你的邮箱的服务器地址(文中用的163邮箱,可以在163邮箱的设置页面找到,其他邮箱也是同理)

* 3,在SMTP Port输入框中填写465端口(这是SMTP协议通用的端口,如果不同就填写自己邮箱的)

* 4,点击高级,选择凭证(如果没有凭证可以添加一个凭证,输入自己的用户名和密码)

* 5,勾选Use ssl

* 6,Default Content Type 选择text/html

* 7,在Default Recipients 输入要发送的邮箱,逗号分隔(在项目中发送邮件可以用$DEFAULT_RECIPIENTS来使用这里的邮箱,也可以直接覆盖)

:::

![i](https://article.biliimg.com/bfs/article/87fb0629eb0ffe2a8f9fc81fd7b8e23907a9daee.png)

![i](https://article.biliimg.com/bfs/article/47b58e57b4d70bb52a585bad318883107bf36d1f.png)

### 2,项目配置

:::tip 项目配置

* 1,打开任务的配置页面,在最下面找到增加构建后操作步骤,选择Editable Email Notification

* 2,在Editable Email Notification 配置项中,找到并点击 Advanced Settings 按钮

* 3,在Content Type中选择HTML类型

* 4,在Content中输入以下内容(也可以不改,不改内容较少)

* 5,点击Attach Build Log 选择 Attach Build Log 可以携带构建日志

:::

```shell
<hr/>

(本邮件是程序自动下发的，请勿回复！)<br/><hr/>

项目名称：$PROJECT_NAME<br/><hr/>

构建编号：test_$BUILD_NUMBER<br/><hr/>

构建状态：$BUILD_STATUS<br/><hr/>

触发原因：${CAUSE}<br/><hr/>

构建日志地址：<a href="${BUILD_URL}console">${BUILD_URL}console</a><br/><hr/>

构建地址：<a href="$BUILD_URL">$BUILD_URL</a><br/><hr/>

变更集:${JELLY_SCRIPT,template="html"}<br/><hr/>
```

### 3,查看是否成功

:::tip

* 1,点击立即构建

* 2,登录邮箱
:::

![i](https://article.biliimg.com/bfs/article/00bab6a852b689f9b80eba7b58419f41bf86518b.png)

## jenkins 版本升级

### 下载jenkins.war

:::tip 下载

* 进入jenkins ,点击系统管理 ,如果有升级版本,会自动提示,点击下载即可
* 也可以 直接点 [这里](http://mirrors.jenkins.io/war/latest/jenkins.war) 下载
:::

### 升级

> 使用root用户访问docker容器

```shell
docker exec -it -u root myjenkins bin/bash

```

> 进入 /usr/share/jenkins/目录，备份jenkins.war文件

```shell
cd  /usr/share/jenkins
mv jenkins.war jenkins.war.bak
```

> 退出重启jenkins

```shell
exit
docker restart myjenkins
```

### 查看是否成功

> 进入jenkins主页,查看页面底部

![i](https://article.biliimg.com/bfs/article/993efc73e791142ab40f1877cc16dd2f6166f17b.png)

## 多POM的MAVEN项目打包

:::tip 多POM的MAVEN项目

* 在部署spring cloud项目的时候,往往会存在多个pom文件,jenkins可以多次打包,然后部署

* 1,点击进入项目的配置,找到Pre Steps,选择 调用顶层maven目标 选项

* 2,在调用顶层 Maven 目标的Maven版本中选择自己版本

* 3,在目标框中输入 clean install

* 4,在pom框中输入 要运行的pom地址 例如:mall-parent/mall-H5service/pom.xml

:::

![i](https://article.biliimg.com/bfs/article/40d76408b0eeab975d5dd6371c3f5e7316eb3261.png)
![i](https://article.biliimg.com/bfs/article/c4e36e3da58bd6bf662c4a08107ab5210882f888.png)

:::warning 注意

* 可以配置多个Pre Steps
* 最后一个pom项目,必须在项目的 Build 项中配置
:::

![i](https://article.biliimg.com/bfs/article/0781cf07f761ccedcccc53ef113380fa98f5f38e.png)

## 清理jenkins

> 1,可以在设置中设置丢弃旧的构建

![i](https://article.biliimg.com/bfs/article/4987771061496b0129cca15df17498387e44116b.png)

> 2,可以删除工作区文件

![i](https://article.biliimg.com/bfs/article/0c684c5e77a9b6be3b8ec6948fe9a0f97a1353b1.png)

> 3,优化项目配置,例如:打包spring cloud 可以不全局打包,只打包其中几个pom

## 备份jenkins任务

> 1, 可以在/var/jenkins/jobs 目录下查看当前jenkins的任务

> 2,直接打包jobs文件夹即可备份

```bash
tar -zcvf job.tar.gz jobs
```

## 恢复jenkins任务

> 1,把打包的job.tar.gz 解压复制到现有的jenkins jobs目录下

> 2,打开jenkins的系统管理->读取设置,重启jenkins即可
