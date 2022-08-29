# GIT

## git 基础

### 基础配置

配置 username 和 email

```bash
git config --global user.name 'your_name'
git config --global user.email 'your_email'
```

### 创建本地 git 仓库

```bash
git init
```

## git 添加远程仓库

```bash
git remote add origin https://gitee.com/yhyYLW/234.git
```

### 查看远程仓库

```bash
git remote -v
```

## git提交

```bash
git commit -m 'message'
```

### 添加文件

```bash
git add .
```

### 推送

```bash
git push -u origin "master"
```

### 删除远程仓库

```bash
git remote rm origin
```

### 删除本地仓库

```bash
git rm -rf .
```

### 强制推送

```bash
git push -f
```

### 推送日志

```bash
git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
```

```bash
  - 872a820 - (HEAD -> master, origin/master) 更新中文,更新开始 (20 hours ago) <yangliwei>
  - 178f001 - 修复开始按钮 (21 hours ago) <yangliwei>
  - b27102b - fix: 修复图片路径问题 (22 hours ago) <yangliwei>
  - 4f0188e - 初始化文档 (22 hours ago) <yangliwei>
```

## git 分支

### 创建分支

```bash
git branch
```

### 切换分支

```bash
git checkout -b dev
```

### 删除分支

```bash
git branch -d dev
```

### 合并分支

```bash
git merge dev
```

## git 问题解决

### git LF和CRLF


:::tip

* crlf 和 lf 是文本换行的不同方式：

* crlf: "\r\n", windows 系统的换行方式

* lf: "\n", Linux 系统的换行方式

在你使用 git 拉取代码的时候，git 会自动将代码当中与你当前系统不同的换行方式转化成你当前系统的换行方式，从而造成这种冲突。
:::

```bash
# 修改 git 全局配置，禁止 git 自动将 lf 转换成 crlf
git config --global core.autocrlf false
```

## .gitignore 不生效

:::tip
.gitignore文件只会在第一次提交项目的时候写入缓存，也就是说如果你第一次提交项目时候忘记写.gitignore文件，后来再补上是没有用的，.gitignore文件是不生效的。因为在缓存中已经标记该项目不存在ignore文件了
:::


```bash
# 清除缓存文件
git rm -r --cached .
git add .
git commit -m ".gitignore重写缓存成功"
git push
```
