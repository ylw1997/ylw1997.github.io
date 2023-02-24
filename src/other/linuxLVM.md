# linux 磁盘空间扩展

:::tip 说明

- 本文主要介绍如何扩展 linux 磁盘空间

- 把/home 的空间 转移30G到 /root 下

- 参考 <http://www.manongjc.com/detail/28-yplerbafsuqedeb.html>
:::

## LVM 管理工具

|功能| 物理卷管理| 卷组管理 |逻辑卷管理|
|:---|:---|:---|:---|
|扫描| pvscan | vgscan | lvscan |
|创建| pvcreate | vgcreate | lvcreate |
|显示| pvdisplay | vgdisplay | lvdisplay |
|删除| pvremove | vgremove | lvremove |
|扩展|          | vgextend | lvextend |

## 1, 查看磁盘空间

```bash
[root@localhost ~]# df -h
文件系统             容量  已用  可用 已用% 挂载点
devtmpfs             7.6G     0  7.6G    0% /dev
tmpfs                7.6G     0  7.6G    0% /dev/shm
tmpfs                7.6G   35M  7.6G    1% /run
tmpfs                7.6G     0  7.6G    0% /sys/fs/cgroup
/dev/mapper/cl-root   70G  6.9G   64G   10% /
/dev/sda2           1014M  313M  702M   31% /boot
/dev/mapper/cl-home  121G  908M  120G    1% /home
/dev/sda1            599M  7.3M  592M    2% /boot/efi
tmpfs                1.6G   44K  1.6G    1% /run/user/1000
```

## 2,卸载/home

:::tip 说明

- 为了安全起见，先卸载/home

- /home 里面是用户的数据，卸载后，用户的数据就会丢失

- 如果不想丢失数据，可以先备份数据，然后再卸载

- 如果有人正在使用/home，卸载会失败

- `w`命令可以查看有哪些用户在线

```bash
[root@localhost ~]# w
21:29:01 up 42 days, 20:52,  2 users,  load average: 0.06, 0.02, 0.00
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
admin    tty2     tty2             121月23 42days  2:44m  0.01s /usr/libexec/gsd-disk-utility-notify
root     pts/0    192.168.0.177    21:16    0.00s  0.10s  0.03s w
```

- 强制退出某个用户 `pkill -kill -t tty2`
:::

```bash
[root@localhost ~]# umount /home
```

## 3,删除/home 逻辑卷

> /home 的逻辑卷是在 /dev/mapper/cl-home

```bash

[root@localhost ~]# lvremove /dev/mapper/cl-home
Do you really want to remove active logical volume cl/home? [y/n]: y
  Logical volume "home" successfully removed.

```

## 4,扩展 /root 逻辑卷

> /root 的逻辑卷是在 /dev/mapper/cl-root

```bash

[root@localhost /]# lvextend -L +30G /dev/mapper/cl-root
  Size of logical volume cl/root changed from 70.00 GiB (17920 extents) to 100.00 GiB (25600 extents).
  Logical volume cl/root successfully resized.

```

## 5,扩展 /root 文件系统

> #使用xfs_growfs命令扩展xfs文件系统,如果是ext4文件系统，则使用resize2fs  /dev/mapper/cl-root

```bash

[root@localhost /]# xfs_growfs /dev/mapper/cl-root
meta-data=/dev/mapper/cl-root    isize=512    agcount=4, agsize=4587520 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=1        finobt=1, sparse=1, rmapbt=0
         =                       reflink=1
data     =                       bsize=4096   blocks=18350080, imaxpct=25
         =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0, ftype=1
log      =internal log           bsize=4096   blocks=8960, version=2
         =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
data blocks changed from 18350080 to 26214400

```

## 6,查看磁盘空间

> 已经扩展到 100G

```bash
[root@localhost /]# df -Th
文件系统            类型      容量  已用  可用 已用% 挂载点
devtmpfs            devtmpfs  7.6G     0  7.6G    0% /dev
tmpfs               tmpfs     7.6G     0  7.6G    0% /dev/shm
tmpfs               tmpfs     7.6G   35M  7.6G    1% /run
tmpfs               tmpfs     7.6G     0  7.6G    0% /sys/fs/cgroup
/dev/mapper/cl-root xfs       100G  7.1G   93G    8% /
/dev/sda2           xfs      1014M  313M  702M   31% /boot
/dev/sda1           vfat      599M  7.3M  592M    2% /boot/efi
tmpfs               tmpfs     1.6G   16K  1.6G    1% /run/user/42

```

## 7,查看物理卷

> 可以看到，/dev/sda3 的空间还有 90G,用于创建新的逻辑卷

```bash

[root@localhost /]# pvs
  PV         VG Fmt  Attr PSize   PFree  
  /dev/sda3  cl lvm2 a--  198.41g <90.71

```

## 8, 创建新的逻辑卷

> 创建新的逻辑卷，大小为 90G

```bash

[root@localhost /]# lvcreate -L 90G -n newhome cl
  Logical volume "newhome" created.

```

## 9,查看逻辑卷

```bash

[root@localhost /]# lvs
  LV      VG Attr       LSize   Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert
  newhome cl -wi-a-----  90.00g                                                    
  root    cl -wi-ao---- 100.00g                                                    
  swap    cl -wi-ao----   7.70g                                                    
```

## 10,查看 newhome 逻辑卷信息

> 可以看到，newhome 逻辑卷的路径是 /dev/cl/newhome

```bash

[root@localhost /]# lvdisplay 
  ...
  --- Logical volume ---
  LV Path                /dev/cl/newhome
  LV Name                newhome
  VG Name                cl
  LV UUID                eaHeN9-w5O4-VJoo-KAQR-LqKF-6lA0-b3NSFQ
  LV Write Access        read/write
  LV Creation host, time localhost.localdomain, 2023-02-23 21:56:20 -0500
  LV Status              available
  # open                 0
  LV Size                90.00 GiB
  Current LE             23040
  Segments               1
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     8192
  Block device           253:2
```

11,格式化 newhome 逻辑卷

> 格式化为 xfs 文件系统

```bash

[root@localhost /]# mkfs.xfs /dev/cl/newhome
meta-data=/dev/cl/newhome        isize=512    agcount=4, agsize=5898240 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=1        finobt=1, sparse=1, rmapbt=0
         =                       reflink=1
data     =                       bsize=4096   blocks=23592960, imaxpct=25
         =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0, ftype=1
log      =internal log           bsize=4096   blocks=11520, version=2
         =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0

```

## 12,创建挂载点

```bash

[root@localhost /]# mkdir /home

```

## 13,挂载 newhome 逻辑卷

```bash

[root@localhost /]# mount /dev/cl/newhome /home

```

## 14,修改系统文件 /etc/fstab

> 添加 /home 的挂载信息

```bash


[root@localhost /]# cat /etc/fstab

/dev/mapper/cl-root /                       xfs     defaults        1 1
UUID=3f0d9f0a-3b5f-4b5a-9b5a-8b5a8b5a8b5a /boot                   xfs     defaults        1 2
UUID=3f0d9f0a-3b5f-4b5a-9b5a-8b5a8b5a8b5a /boot/efi               vfat    umask=0077      0 2
/dev/mapper/cl-swap swap                    swap    defaults        0 0
/dev/cl/newhome /home xfs defaults 0 0

```

## 15,保存后，重启系统

```bash

[root@localhost /]# reboot

```

## 16,查看挂载信息

> 可以看到，/home 已经挂载到 /dev/cl/newhome

```bash

[root@localhost ~]# df -h
文件系统                容量  已用  可用 已用% 挂载点
devtmpfs                7.6G     0  7.6G    0% /dev
tmpfs                   7.6G     0  7.6G    0% /dev/shm
tmpfs                   7.6G   18M  7.6G    1% /run
tmpfs                   7.6G     0  7.6G    0% /sys/fs/cgroup
/dev/mapper/cl-root     100G  7.1G   93G    8% /
/dev/mapper/cl-newhome   90G  675M   90G    1% /home
/dev/sda2              1014M  341M  674M   34% /boot
/dev/sda1               599M  7.3M  592M    2% /boot/efi
tmpfs                   1.6G   44K  1.6G    1% /run/user/

```
