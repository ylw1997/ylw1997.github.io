# linux 磁盘监控预警

## 查看磁盘

```bash
# 查看磁盘
df -h

# Filesystem      Size  Used Avail Use% Mounted on
# devtmpfs        1.8G     0  1.8G   0% /dev
# tmpfs           1.8G     0  1.8G   0% /dev/shm
# tmpfs           1.8G  612K  1.8G   1% /run
# tmpfs           1.8G     0  1.8G   0% /sys/fs/cgroup
# /dev/vda1        40G   34G  3.7G  91% /
# tmpfs           365M     0  365M   0% /run/user/0
# overlay          40G   34G  3.7G  91% /var/lib/docker/overlay2/012a6c14c2a6baf44675415a596766f5c8eb4c275809a304b54197f73d47f1ac/merged
```

## 获取根目录磁盘使用百分比

```bash
# 获取根目录磁盘使用百分比
df -h|grep overlay|awk '{print $5}'|cut -d"%" -f1

# 91
```

## 获取内存使用百分比

```bash
# 获取内存使用百分比
free -m|grep Mem|awk '{print $3/$2*100}'

# 34.6133
```

## crontab 定时任务 每分钟执行一次

```bash
# crontab 定时任务 每分钟执行一次

# 编辑用户的定时任务
crontab -e

# 添加定时任务
*/1 * * * * /bin/bash /root/mail.sh

```

## 安装sendmail

```bash
# 安装sendmail
yum install sendmail -y
```

## 修改执行权限

```bash
# 修改执行权限
chmod 777 mail.sh
```

## 编写邮件发送脚本

```bash
#!/bin/bash
account='dubiao@qmsznj.com'
password='123'
to='18305181878@139.com'
to1='ylw19970206@163.com'
to2='13913308358@139.com'
subject='磁盘内存监控'
serverName='福利测试服39.106.206.3'
ROOT_DISK=`df -h|grep /dev/vda1|awk '{print $5}'|cut -d"%" -f1`
MEM_STATUS=`free -m|grep Mem|awk '{print $3/$2*100}'`
content="<h1>磁盘使用率超过预警值!</h1>
    <hr/>
    (本邮件是程序自动下发的，请勿回复！)<br/><hr/>
    服务器名称: $serverName <br/> <hr/>
    磁盘使用率: $ROOT_DISK% <br/> <hr/>
    内存使用率: $MEM_STATUS% <br/> <hr/>
    "

# 如果超过95%则发送邮件
if [ $ROOT_DISK -ge 95 ];then
    sendemail -f $account -t $to $to1 $to2 -o tls=yes -s smtp.exmail.qq.com:587 -u $subject -o message-content-type=html -o message-charset=utf8 -xu $account -xp $password -m $content
else
    echo "${serverName}磁盘空间使用:${ROOT_DISK}"
fi
```
