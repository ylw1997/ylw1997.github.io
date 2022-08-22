/*
 * @Author: yangliwei 1280426581@qq.com
 * @Date: 2022-08-19 16:28:44
 * @LastEditTime: 2022-08-22 17:01:27
 * @LastEditors: yangliwei 1280426581@qq.com
 * @FilePath: \vitepress-starter\docs\.vitepress\config.ts
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
  outDir: './dist',
  themeConfig:{
    siteTitle:' blog',
    logo:'/logo-sm.png',
    nav,
    sidebar,
  }
} as UserConfig