/*
 * @Author: yangliwei 1280426581@qq.com
 * @Date: 2022-08-19 16:28:44
 * @LastEditTime: 2022-08-25 10:14:13
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
  lang: 'es',
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
      apiKey: '24e31d15f9782558a719309c6a2a81e9',
      searchParameters: {
        facetFilters: ['version:v3']
      }
    }
  }
} as UserConfig