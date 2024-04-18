# wsl

## 介绍

:::tip 介绍

- [Windows Subsystem for Linux](https://learn.microsoft.com/zh-cn/windows/wsl/about) (WSL) 是一个为在 Windows 10 上能够原生运行 Linux 二进制可执行文件 ( ELF 格式) 的兼容层。

- wsl1 和 wsl2 对比,推荐使用 wsl2

| 功能                                           | wsl1 | wsl2 |
| :--------------------------------------------- | :--- | :--- |
| Windows 和 Linux 之间的集成                    | ✅   | ✅   |
| 启动时间短                                     | ✅   | ✅   |
| 与传统虚拟机相比，占用的资源量少               | ✅   | ✅   |
| 可以与当前版本的 VMware 和 VirtualBox 一起运行 | ✅   | ✅   |
| 托管 VM                                        | ❌   | ✅   |
| 完整的 Linux 内核                              | ❌   | ✅   |
| 完全的系统调用兼容性                           | ❌   | ✅   |
| 跨 OS 文件系统的性能                           | ✅   | ❌   |

:::

## 安装

```bash
wsl --install
```

## 安装其他发行版

```bash
wsl.exe --install -d <Distribution Name>
```

## 列出可用的发行版

```bash
wsl.exe --list --online
```

## 列出已安装的发行版

```bash
wsl.exe --list --all
```

## 卸载发行版

```bash
wsl.exe --uninstall <Distribution Name>
```

## 启动发行版

```bash

wsl.exe -d <Distribution Name>
```

## 设置默认发行版

```bash
wsl.exe --set-default <Distribution Name>
# wsl --set-version Ubuntu-22.04 2 
```

## 设置发行版版本

```bash
wsl.exe --set-version <Distribution Name> <Version Number>
```

## 取消注册

```bash
wsl.exe --unregister <Distribution Name>
```

## 强制停止wsl

```bash
# cmd管理员权限
net stop LxssManager 
```

## 重启wsl

```bash
# cmd管理员权限
net start LxssManager 
```
