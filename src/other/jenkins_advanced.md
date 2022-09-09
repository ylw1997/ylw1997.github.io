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