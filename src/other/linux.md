# linux 常用命令

## 查看文件

```bash
# 查看文件
cat /etc/hosts
```

## 查看打开的应用占用的端口

```bash
# 查看打开的端口
lsof -i -P -n |grep docker
```

## 查看端口

```bash
# 查看端口
netstat -anp | grep 8080
```

## 查看进程

```bash
# 查看进程
ps -ef | grep java
```

## 查看内存

```bash
# 查看内存
free -m
```

## 查看磁盘

```bash

# 查看磁盘
df -h
```

## 查看 cpu

```bash
# 查看cpu
cat /proc/cpuinfo
```

## 查看系统版本

```bash

# 查看系统版本
cat /etc/redhat-release
```

## 查看当前路径

```bash
pwd
```

## tar 压缩解压

```bash
# 压缩
tar -zcvf test.tar.gz test

# 解压
tar -zxvf test.tar.gz
```

## 查看文件夹大小

```bash
du -sh
```

## 查看文件大小

```bash
ls -lh
```

## 查看文件夹下文件

```bash
ls -l
```

## 修改权限

```bash
chmod 777 test.sh
```

## 查看目录下每个文件及文件夹大小

```bash
du -sh *
```

## 删除 指定目录下 30天之前的 log 文件

```bash
#!/bin/bash
find /home/logs -mtime +30 -name "*.log" -exec rm -rf {} \;
```

## 定时任务

```bash
#添加定时任务
crontab -e

# 每天凌晨 1 点执行
0 1 * * * /root/log-dellogs.sh

```

## 系统流量监测

```bash
yum install -y bmon

# 监测网卡流量
bmon
```
