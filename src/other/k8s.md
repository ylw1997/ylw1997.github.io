# Kubernetes 初始化

:::tip

* 本文档基于 Kubernetes v1.18.2
* 本文档基于 CentOS 8.5

* k8s 文档：<https://kubernetes.io/zh/docs/home/>
* 参考文档: <https://zhuanlan.zhihu.com/p/641521752>
* 参考文档: <https://k8s.easydoc.net/docs/dRiQjyTY/28366845/6GiNOzyZ/nd7yOvdY>

:::

## 1,创建虚拟机

:::tip

* **创建三台在统一局域网的虚拟机**
* 系统: CentOS 8.5
* 内存: 8G(主节点),4G
* CPU: 4核
* 硬盘: 50G
* 网络: 192.168.0.238,192.168.0.79,192.168.0.236
* 主机名: master,node1,node2

:::

## 2,安装docker

```bash
# 1,安装docker
yum install -y yum-utils device-mapper-persistent-data lvm2
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# 2,启动docker
systemctl start docker
systemctl enable docker
sudo systemctl status docker
# ● docker.service - Docker Application Container Engine
#    Loaded: loaded (/usr/lib/systemd/system/docker.service; enabled; vendor preset: disabled)
#    Active: active (running) since Tue 2023-12-19 09:41:30 CST; 2h 7min ago
#      Docs: https://docs.docker.com
#  Main PID: 1633 (dockerd)
#     Tasks: 33
#    Memory: 155.3M
#    CGroup: /system.slice/docker.service
#            └─1633 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
```

## 3,安装cri-docker

:::tip

* cri-docker 是一个 CRI 的实现，它允许 Kubernetes 使用 Docker 作为底层容器运行时。
* cri-docker 项目地址：<https://github.com/Mirantis/cri-dockerd>

:::

```bash
# 1,下载cri-docker
wget  https://github.com/Mirantis/cri-dockerd/releases/download/v0.3.8/cri-dockerd-0.3.8-3.el7.x86_64.rpm

# 2,安装cri-docker
rpm -ivh cri-dockerd-0.3.8-3.el7.x86_64.rpm

# 3,启动cri-docker
systemctl daemon-reload # 重载系统守护进程
systemctl enable cri-docker.socket cri-docker # 设置cri-dockerd自启动
systemctl start cri-docker.socket cri-docker # 启动cri-dockerd
# ● cri-docker.socket - CRI Docker Socket for the API
#    Loaded: loaded (/usr/lib/systemd/system/cri-docker.socket; enabled; vendor preset: disabled)
#    Active: active (running) since Tue 2023-12-19 09:41:16 CST; 2h 16min ago
#    Listen: /run/cri-dockerd.sock (Stream)
#     Tasks: 0 (limit: 49355)
#    Memory: 4.0K
#    CGroup: /system.slice/cri-docker.socket

# 4, 设置cri-docker代理
vi /usr/lib/systemd/system/cri-docker.service
# 5,修改第10行
ExecStart=/usr/bin/cri-dockerd --network-plugin=cni --pod-infra-container-image=registry.aliyuncs.com/google_containers/pause:3.7
# 6,重启cri-docker
systemctl daemon-reload && systemctl restart cri-docker.service

```

## 4,安装kubeadm,kubelet,kubectl

```bash
# 1,添加kubernetes源
cat <<EOF | sudo tee /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=1
gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg
        http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
exclude=kubelet kubeadm kubectl
EOF

# 2,安装
sudo yum install -y kubelet kubeadm kubectl --disableexcludes=kubernetes

# 3,设置kubelet自启动
sudo systemctl enable --now kubelet

# 5,关闭防火墙

```bash

# 1,关闭防火墙
systemctl stop firewalld

# 2,禁用防火墙
systemctl disable firewalld

# 3,查看防火墙状态
systemctl status firewalld

# 4,禁用SELinux
setenforce 0
sed -i's/^SELINUX=enforcing$/SELINUX=permissive/' /etc/selinux/config

# 5,重启系统
reboot
```

## 5,禁用swap分区

```bash
# 1,临时关闭swap分区
swapoff -a 

# 2,永久关闭swap分区

vi /etc/fstab # 永久关闭swap分区，注释掉fstab中包含swap的这一行即可
# /dev/mapper/centos-swap swap                    swap    defaults        0 0\

# 3,重启使其生效
reboot

```

## 6,设置hostname

```bash

# 每个节点分别设置对应主机名
hostnamectl set-hostname master
hostnamectl set-hostname node1
hostnamectl set-hostname node2

```

## 7,下载k8s需要的镜像

```bash
sudo kubeadm config images pull --image-repository registry.aliyuncs.com/google_containers --cri-socket unix:///var/run/cri-dockerd.sock
```

## 8,初始化k8s控制节点(master节点)

:::tip

* 这一步是最关键的一步,前面都是为这个做准备,这一步成功基本k8s基本完成
* 一定要关闭swap并重启,cri一定要配置阿里云加速
* container runtime is not running

```bash
vim /etc/containerd/config.toml
# 注释
#disabled_plugins = ["cri"]
```

* 忘记kubeadm join 可以用以下命令打印

```bash
kubeadm token create --print-join-command
```

:::

```bash
# 参数详解 
--image-repository=registry.aliyuncs.com/google_containers # 从阿里云下载镜像
--cri-socket=unix:///var/run/cri-dockerd.sock # 这是指定容器运行时，因为containerd也是Docker的组件之一，下载Docker会一并将containerd下载下来，在执行初始化时当Kubernetes检测到有多个容器运行时环境，就必须要手动选择一个。这里也可以看出containerd实际上比Docker更轻量得多。
--apiserver-advertise-address=192.168.0.238 # master 地址 
--pod-network-cidr=10.244.0.0/16 # 指明 pod 网络可以使用的 IP 地址段，暂时不清楚的可以先不管就用这个值。
--service-cidr=10.96.0.0/12 # 为服务的虚拟 IP 地址另外指定 IP 地址段，暂时不清楚的可以先不管就用这个值。
--v=6 #调试模式,能看到报错
```

```bash
# 运行以下初始化命令
kubeadm init --node-name=master --image-repository=registry.aliyuncs.com/google_containers --cri-socket=unix:///var/run/cri-dockerd.sock --apiserver-advertise-address=192.168.0.238 --pod-network-cidr=10.244.0.0/16 --service-cidr=10.96.0.0/12 --v=6

#如果成功会看到以下内容
# Your Kubernetes control-plane has initialized successfully!

# To start using your cluster, you need to run the following as a regular user:

#   mkdir -p $HOME/.kube
#   sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
#   sudo chown $(id -u):$(id -g) $HOME/.kube/config

# Alternatively, if you are the root user, you can run:

#   export KUBECONFIG=/etc/kubernetes/admin.conf

# You should now deploy a pod network to the cluster.
# Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
#   https://kubernetes.io/docs/concepts/cluster-administration/addons/

# Then you can join any number of worker nodes by running the following on each as root:

# kubeadm join 192.168.0.238:6443 --token m1x69o.k4hc2s4bwhrurf14  --discovery-token-ca-cert-hash sha256:6503eacbb2f1486babbd04d80084af58591a9ed7ea7749b9a59c4097cb1439ef --cri-socket=unix:///var/run/cri-dockerd.sock


# 在master运行以下命令
export KUBECONFIG=/etc/kubernetes/admin.conf # 临时生效.
echo "export KUBECONFIG=/etc/kubernetes/admin.conf" >>  ~/.bash_profile # 写入用户配置
source ~/.bash_profile # 生效用户配置

```

## 9,安装网络插件(master节点)

```bash
# 1,安装网络插件
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml

# 2,查看网络插件是否安装成功
kubectl get ds -n kube-system

# 3,查看网络插件是否运行成功
kubectl get pods -n kube-system

# 4,查看网络插件是否配置成功
kubectl get pods -n kube-system -o wide
```

## 10,子节点加入(node节点)

:::tip

* 如果不把master节点的admin.conf传到node节点会导致以下错误

```bash
E0704 21:50:22.095009   28309 memcache.go:265] couldn't get current server API group list: Get "<http://localhost:8080/api?timeout=32s>": dial tcp [::1]:8080: connect: connection refused
```

* 如果要重置node节点运行以下命令

```bash
kubeadm reset --cri-socket unix:///var/run/cri-dockerd.sock
```

:::

```bash

# 1,把master节点的 /etc/kubernetes/admin.conf 文件传到 node节点/etc/kubernetes/目录下
scp /etc/kubernetes/admin.conf 192.168.0.79:/etc/kubernetes/

# 2,在node节点运行以下命令
cd /etc/kubenetes 
ls
# admin.conf ... 表示已经传递过来
echo "export KUBECONFIG=/etc/kubernetes/admin.conf" >>  ~/.bash_profile # 写入用户配置
source ~/.bash_profile # 启用配置


# 3,在master节点运行获取kubeadm join命令
kubeadm token create --print-join-command

# 4,复制kubeadm join命令

# 5,在node节点执行kubeadm join命令
kubeadm join 192.168.0.238:6443 --token m1x69o.k4hc2s4bwhrurf14  --discovery-token-ca-cert-hash sha256:6503eacbb2f1486babbd04d80084af58591a9ed7ea7749b9a59c4097cb1439ef --cri-socket=unix:///var/run/cri-dockerd.sock

# 6,运行成功会打印以下内容
# [preflight] Running pre-flight checks
# [preflight] Reading configuration from the cluster...
# [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
# [kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
# [kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
# [kubelet-start] Starting the kubelet
# [kubelet-start] Waiting for the kubelet to perform the TLS Bootstrap...

# This node has joined the cluster:
# * Certificate signing request was sent to apiserver and a response was received.
# * The Kubelet was informed of the new secure connection details.

# Run 'kubectl get nodes' on the control-plane to see this node join the cluster.

# 7,运行以下命令查看node节点是否加入成功
kubectl get nodes
# NAME     STATUS   ROLES           AGE     VERSION
# master   Ready    control-plane   4h39m   v1.28.2
# node1    Ready    <none>          4h3m    v1.28.2
# node2    Ready    <none>          4h36m   v1.28.2

# 8,运行以下命令查看node节点是否运行成功
kubectl get pods -A
# NAMESPACE      NAME                             READY   STATUS    RESTARTS   AGE
# kube-flannel   kube-flannel-ds-4nwrl            1/1     Running   0          4h5m
# kube-flannel   kube-flannel-ds-s762z            1/1     Running   0          4h5m
# kube-flannel   kube-flannel-ds-wzwv5            1/1     Running   0          4h5m
# kube-system    coredns-66f779496c-ghwmx         1/1     Running   0          4h40m
# kube-system    coredns-66f779496c-kk4jd         1/1     Running   0          4h40m
# kube-system    etcd-master                      1/1     Running   0          4h40m
# kube-system    kube-apiserver-master            1/1     Running   0          4h40m
# kube-system    kube-controller-manager-master   1/1     Running   0          4h40m
# kube-system    kube-proxy-6kxwf                 1/1     Running   0          4h40m
# kube-system    kube-proxy-9lcgf                 1/1     Running   0          4h36m
# kube-system    kube-proxy-ndw9x                 1/1     Running   0          4h16m
# kube-system    kube-scheduler-master            1/1     Running   0          4h40m

# 9,运行以下命令查看node节点是否配置成功
kubectl get pods -A -o wide
# NAMESPACE      NAME                             READY   STATUS    RESTARTS   AGE     IP              NODE     NOMINATED NODE   READINESS GATES
# kube-flannel   kube-flannel-ds-4nwrl            1/1     Running   0          4h6m    192.168.0.238   master   <none>           <none>
# kube-flannel   kube-flannel-ds-s762z            1/1     Running   0          4h6m    192.168.0.79    node1    <none>           <none>
# kube-flannel   kube-flannel-ds-wzwv5            1/1     Running   0          4h6m    192.168.0.236   node2    <none>           <none>
# kube-system    coredns-66f779496c-ghwmx         1/1     Running   0          4h40m   10.244.0.8      master   <none>           <none>
# kube-system    coredns-66f779496c-kk4jd         1/1     Running   0          4h40m   10.244.0.9      master   <none>           <none>
# kube-system    etcd-master                      1/1     Running   0          4h40m   192.168.0.238   master   <none>           <none>
# kube-system    kube-apiserver-master            1/1     Running   0          4h40m   192.168.0.238   master   <none>           <none>
# kube-system    kube-controller-manager-master   1/1     Running   0          4h40m   192.168.0.238   master   <none>           <none>
# kube-system    kube-proxy-6kxwf                 1/1     Running   0          4h40m   192.168.0.238   master   <none>           <none>
# kube-system    kube-proxy-9lcgf                 1/1     Running   0          4h36m   192.168.0.236   node2    <none>           <none>
# kube-system    kube-proxy-ndw9x                 1/1     Running   0          4h16m   192.168.0.79    node1    <none>           <none>
# kube-system    kube-scheduler-master            1/1     Running   0          4h40m   192.168.0.238   master   <none>           <none>

```

## 11,常见命令

```bash
# 1,查看节点
kubectl get nodes

# 2,查看pod
kubectl get pods -A

# 3,查看pod详细信息
kubectl get pods -A -o wide

# 4,查看节点
kubectl get nodes

# 5,查看节点详细信息
kubectl get nodes -o wide

# 6,查看服务
kubectl get svc

# 7,查看服务详细信息
kubectl get svc -o wide

# 8,查看详细信息
kubectl describe pod podname

# 9,查看pod日志
kubectl logs podname

# 10,查看pod的yaml文件
kubectl get pod podname -o yaml

# 11,扩容pod
kubectl scale deployment nginx --replicas=3

# 12,删除pod
kubectl delete pod podname

# 13,删除deployment
kubectl delete deployment nginx

# 14,删除service
kubectl delete service nginx

# 15,重启pod
kubectl rollout restart deployment nginx
