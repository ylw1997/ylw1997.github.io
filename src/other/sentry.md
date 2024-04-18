# Sentry

:::tip 介绍

* Sentry 是一个开源的实时错误报告系统，可以帮助开发者快速定位错误，提高开发效率。

* 可以通过自己搭建 sentry 服务，也可以通过 sentry.io 提供的服务。

* 自己搭建的 sentry 服务，可以通过 docker-compose 快速搭建(不要直接用dockerhub镜像安装,版本太老)。

* windows 下需要使用wsl2功能(**因为要运行linux下的命令,windows不能直接运行**)

:::

## 前置工作

:::tip 前置工作

* 安装docker, docker-compose

* 安装wsl2

* windows 商店安装一个linux发行版,如ubuntu

* 设置wsl2为默认的linux发行版

:::

## 设置wsl2默认发行版

```bash
# Ubuntu-22.04 是你的发行版名称
wsl --set-version Ubuntu-22.04 2 
```

> 查看docker 设置

![img](https://article.biliimg.com/bfs/article/93e386b896592e4bcffbb401142bfb24181457be.png)

## 1,拉取sentry镜像

:::tip 拉取sentry镜像

* 由于sentry官方镜像太老,所以需要自己拉取最新的镜像
* [github地址](https://github.com/getsentry/self-hosted.git)
:::

```bash
git clone https://github.com/getsentry/self-hosted.git
```

## 2,wsl下安装

:::tip wsl下安装

* wsl一般会把windows的文件系统映射到linux的`/mnt`目录下
* 进入到`self-hosted`目录下
* 执行`./install.sh`脚本
:::

```bash
cd self-hosted
./install.sh
```

## 3,创建用户名和密码

```bash
# 现在是否需要创建你的账户？默认：是
Would you like to create a user account now? [Y/n]:

# 输入邮箱
Email: 

# 输入密码，注意密码输入是不可见的，所以注意大小写。输入完成后会再确认。
Password:
```

## 4,使用docker-compose启动

```bash
docker-compose up -d
```

![img](https://article.biliimg.com/bfs/article/965df056b8080559e918f27e7e342ae4c5313a95.png)

## 5,访问

:::tip 访问

* 访问地址: `http://localhost:9000`
:::

![img](https://article.biliimg.com/bfs/article/d64b9170d06757751d6437028049c1555bf8f7a7.png)

## 6,配置中文

:::tip 配置中文

* 进入用户设置 -> 账户详情 -> PREFERENCES -> LANGUAGE
:::

![img](https://article.biliimg.com/bfs/article/4791f0973ce83f0b2baa6650e9db3193a70fdf0b.png)

## 7,添加项目

:::tip 添加项目

* 点击`创建项目`按钮,添加项目
* 选择vue项目
:::

![img](https://article.biliimg.com/bfs/article/4fb3e059919983a05cd0f51bfa2cdac8fcb0adb9.png)

## 8,配置vue项目

```bash
yarn add @sentry/vue @sentry/tracing
```

```js
// main.js
import * as Sentry from '@sentry/vue';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  Vue: Vue,
  dsn: "http://XXXX@localhost:9000/2",
  integrations: [
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ['localhost', 'https://my-site-url.com/api'],
      trackComponents: true,
    }),
  ],
  tracesSampleRate: 1.0,
});
```

```ts
// vite.config.ts
export default {
  build: {
    // 开启sourcemap,否则无法定位到源码
    sourcemap: true,
  },
}
```

## 9,测试

```ts
// app.tsx
export default defineComponent({
  mounted() {
    throw new Error("test Sentry");
  },
  setup() {
    return () => (
      <ConfigProvider locale={zhCN}>
        <RouterView />
      </ConfigProvider>
    );
  },
});
```

## 10,查看错误

:::tip 查看错误

* 点击 `问题` 按钮,查看错误
:::

![img](https://article.biliimg.com/bfs/article/73bf30dd590c3e064969d255e2119b10055e9aaf.png)
