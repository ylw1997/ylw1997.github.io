# 集成algolia搜索

## algolia介绍

:::tip
algolia 是一个网站全局搜索工具

能够提供毫秒级的数据库搜索服务，并且其服务能以 API 的形式方便地布局到网页、客户端、APP 等多种场景
:::

## 爬取网站数据

:::tip
有两种办法爬取网站数据

* 使用官方的自动爬取工具docsearch ,爬取完成以后可以直接使用
* 自己使用官方的docker镜像爬取,这个比较麻烦

:::

## 官方爬取

:::tip
1, <https://docsearch.algolia.com/apply/> 提交网站信息

2,如果申请通过，我们就会收到邮件

3,回复确认你是站长网站的维护者并可以更改代码并简单说明要用 DocSearch 产品即可，之后就会得到官方发送的 AppID 等信息

4,接下来就可以使用了
:::

## docker爬取

:::tip 官网文档
文档地址 <https://docsearch.algolia.com/docs/legacy/run-your-own/>
:::

1, 到官网注册账号
<https://www.algolia.com/>

2, 下载jq工具,放在根目录
<https://stedolan.github.io/jq/>

3,新建.env文件放在根目录

```shell
# .env
APPLICATION_ID=xxx
API_KEY=xxx
```

4,新建config.json放在跟目录

:::tip 配置文件实例
<https://github.com/algolia/docsearch-configs/tree/master/configs>
:::

```json
{
  "index_name": "blog",
  "start_urls": ["https://ylw1997.github.io/"],
  "stop_urls": [],
  "selectors": {
    "lvl0": {
      "selector": "",
      "global": true,
      "default_value": "Documentation"
    },
    "lvl1": ".content h1",
    "lvl2": ".content h2",
    "lvl3": ".content h3",
    "lvl4": ".content h4",
    "lvl5": ".content h5",
    "text": ".content p, .content li"
  }
}
```

4,运行docker

:::warning
  使用powershell或者cmd运行如果报错,使用git bash运行(命令行前面加winpty)
:::

官网命令

```shell
docker run -it --env-file=.env -e "CONFIG=$(cat /path/to/your/config.json | jq -r tostring)" algolia/docsearch-scraper
```

windows命令

```shell
docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | ./jq -r tostring)" algolia/docsearch-scraper
```

git bash命令

```shell
winpty docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | ./jq -r tostring)" algolia/docsearch-scraper
```

![运行图](https://s3.bmp.ovh/imgs/2022/08/29/6c8b2dbd7b7be171.png)

## 查看数据

登录自己账号查看数据

![数据](https://s3.bmp.ovh/imgs/2022/08/29/191c240b08ea83ee.png)

## 获取appid和key

登录自己账号 <https://www.algolia.com/>

进入以下地址
<https://www.algolia.com/account/api-keys/all>

查看自己的appid和key
![key](https://s3.bmp.ovh/imgs/2022/08/29/2b8d3b200fcfc88a.png)

## vitepress集成algolia搜索

在config.ts 中配置

```typescript
export default {
  ...
  themeConfig:{
    siteTitle:' blog',
    logo:'/logo-sm.png',
    nav,
    sidebar,
    algolia:{
      indexName: 'xxx',
      appId: 'xxx',
      apiKey: 'xxx',
      searchPagePath: false,
      contextualSearch: false,
      searchParameters: {}
    }
  }
  ...
}
```

## 效果

![效果](https://s3.bmp.ovh/imgs/2022/08/29/2bbe79d5833424d6.png)
