/*
 * @Author: YangLiwei
 * @Date: 2022-08-22 09:42:22
 * @LastEditTime: 2022-08-24 17:16:05
 * @LastEditors: yangliwei 1280426581@qq.com
 * @FilePath: \vitepress-starter\.vitepress\sidebar.ts
 * @Description: 
 */
export default {
  "/other/": [
    {
      text: '其他',
      items:[
        {
          text: 'git',
          link: '/other/git'
        }
      ]
    }
  ],
  '/front/': [
    {
      text: 'VUEJS',
      items: [
        {
          text: 'tsx语法',
          link: '/front/vue/tsx'
        }, {
          text: 'vite动态页面',
          link: '/front/vue/glob'
        }, {
          text: 'pinia状态管理',
          link: '/front/vue/pinia'
        }
      ]
    }
    ,{
      text: '其他',
      items: [
        {
          text: '提交验证',
          link: '/front/other/husky'
        },
        {
          text: '暗黑主题切换',
          link: '/front/other/dark'
        },{
          text: '项目优化',
          link: '/front/other/optimization'
        }
      ]
    }
  ],
  "/back/": [
    {
      text: 'NODE',
      items:[
        {
          text: 'nodejs',
          link: '/back/nodejs/'
        }
      ]
    },{
      text: 'JAVA',
      items:[
        {
          text: 'java',
          link: '/back/java/'
        }
      ]
    }
  ]
}