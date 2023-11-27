# mysql 常见问题

## 1. 如何查看mysql的版本？

```bash
mysql --version
```

## 2. 如何查看mysql的安装目录？

```bash
which mysql
```

## 3. 如何查看mysql的配置文件？

```bash
cat /etc/my.cnf
```

## 4. 如何查看mysql的运行状态？

```bash
service mysql status
```

## 5. 如何启动mysql？

```bash
service mysql start
```

## 6. 如何停止mysql？

```bash
service mysql stop
```

## 7. 如何重启mysql？

```bash
service mysql restart
```

## 8. 如何设置mysql的root密码？

```bash
mysqladmin -u root password 'root'
```

## 9. 如何设置mysql的root密码？

```bash
mysqladmin -u root -p password 'root'
```

## 10. 如何查看mysql的数据库？

```bash
mysql -u root -p
show databases;
```

## 11. 如何创建mysql的数据库？

```bash
mysql -u root -p
create database test;
```

## 12. 如何删除mysql的数据库？

```bash
mysql -u root -p
drop database test;
```

## 13. 如何查看mysql的表？

```bash
mysql -u root -p
use test;
show tables;
```

## 14. 如何创建mysql的表？

```bash
mysql -u root -p
use test;
create table user(id int, name varchar(20));
```

## 15. 如何删除mysql的表？

```bash
mysql -u root -p
use test;
drop table user;
```

## 16. 如何查看mysql的表结构？

```bash
mysql -u root -p
use test;
desc user;
```

## 17. 如何查看mysql的表数据？

```bash
mysql -u root -p
use test;
select * from user;
```

## 18. 如何插入mysql的表数据？

```bash
mysql -u root -p
use test;
insert into user values(1, 'zhangsan');
```

## 19. 如何更新mysql的表数据？

```bash
mysql -u root -p
use test;
update user set name='lisi' where id=1;
```

## 20. 如何删除mysql的表数据？

```bash
mysql -u root -p
use test;
delete from user where id=1;
```

## 21. 如何查看mysql的错误日志？

```bash
tail -f /var/log/mysql/error.log
```

## 22. 如何查看mysql的慢日志？

```bash
tail -f /var/log/mysql/slow.log
```

## 23. 如何查看mysql的binlog日志？
  
```bash
tail -f /var/log/mysql/mysql-bin.log
```

## 24. 如何关闭mysql的binlog日志？

```bash
vim /etc/my.cnf
# 注释掉下面这行
#log-bin=mysql-bin
# 增加下面这行
skip-log-bin
# 重启mysql
service mysql restart
# 查看mysql的binlog是否关闭
show variables like 'log_bin';
```

## 25. 如何清理mysql的binlog日志？

```bash
mysql -u root -p
# 清理2023年1月1日之前的binlog日志
purge binary logs before '2023-01-01 00:00:00';

# 清理所有的binlog日志
reset master;
```
