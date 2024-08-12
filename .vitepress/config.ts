/*
 * @Author: yangliwei 1280426581@qq.com
 * @Date: 2022-08-19 16:28:44
 * @LastEditTime: 2024-08-12 11:37:05
 * @LastEditors: yangliwei 1280426581@qq.com
 * @FilePath: \blog\.vitepress\config.ts
 * Copyright (c) 2022 by yangliwei 1280426581@qq.com, All Rights Reserved. 
 * @Description: 
 */
import {UserConfig} from 'vitepress'
import nav from './nav'
import sidebar from './sidebar'


export default {
  title: 'ylw blog',
  description: 'Just Thinking',
  lang: 'zh-CN',
  ignoreDeadLinks: true,
  lastUpdated: true,
  outDir: './docs',
  srcDir: './src',
  head:[
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'keywords', content: 'yangliwei,ylw,ylwblog,ylwblog,vitepress,vitepress-starter' }],
    ['meta',{name:'referrer',content:'no-referrer'}],
    ['meta',{name:'baidu-site-verification',content:'code-lFJu7SoWOc'}]
  ],
  themeConfig:{
    siteTitle:' blog',
    logo:'/logo-sm.png',
    socialLinks: [{ icon: "github", link: "https://github.com/ylw1997/ylw1997.github.io" }],
    nav,
    sidebar,
    // algolia:{
    //   indexName: 'yangliwei',
    //   appId: 'IO7XWXF7SS',
    //   apiKey: '96eddc6de0f913ef9e004ad7141dddd5',
    //   searchPagePath: false,
    //   contextualSearch: false,
    //   searchParameters: {}
    // },
    footer: {
      message: '杨利伟的博客',
      copyright: '版权所有 © 2022-至今 Yangliwei'
    },
    docFooter:{
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdatedText:'最后更新于',
    search: {
      provider: 'local'
    },
    outline: {
      label: '页面导航'
    },
  }
} as UserConfig