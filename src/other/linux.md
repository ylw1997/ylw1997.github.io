# linux 常用命令

## 查看文件

```bash
# 查看文件
cat /etc/hosts
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