# vscode 远程办公

:::tip 远程

* vscode远程办公是指在远程电脑上打开代码运行代码等操作

* 资源占用更少,更加安全,运行速度更快

* 缺点是依赖网络,网络质量不好容易出问题

:::

## 安装vscode插件

:::tip

* 插件名称: Remote - SSH
* 插件地址: <https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh>
:::

## 配置远程连接

:::tip

* 修改ssh配置文件 "C:\users\用户名\.ssh\config"

* 配置文件如下:
:::

```bash
Host 192.168.0.251
  HostName 192.168.0.251
  Port 22
  User root
```

![config](https://article.biliimg.com/bfs/article/cd7d8bce83b2b4b12c455ceea66556ddbb9c5e59.png)

## 配置ssh免密登录

:::tip

* 1, cmd 输入 `ssh-keygen -t rsa` 生成密钥对

* 2, 打开 id_rsa.pub

* 3, 把 id_rsa.pub 内容添加到服务器 `~/.ssh/authorized_keys` 文件后面

* 4, 如果没有 authorized_keys 可以直接创建

* 5, 再次连接就不用输入密码了
:::
