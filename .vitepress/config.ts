/*
 * @Author: yangliwei 1280426581@qq.com
 * @Date: 2022-08-19 16:28:44
 * @LastEditTime: 2022-08-29 16:16:19
 * @LastEditors: yangliwei 1280426581@qq.com
 * @FilePath: \vitepress-starter\.vitepress\config.ts
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
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig:{
    siteTitle:' blog',
    logo:'/logo-sm.png',
    nav,
    sidebar,
    algolia:{
      indexName: 'blog',
      appId: 'PJWQBWKA61',
      apiKey: 'd583955019fcfd82d770661d4f36a8e4',
      searchPagePath: false,
      contextualSearch: false,
      searchParameters: {}
    },
    footer: {
      message: '杨利伟的博客',
      copyright: '版权所有 © 2022-至今 Yangliwei'
    },
    docFooter:{
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdatedText:'最后更新于',
  }
} as UserConfig