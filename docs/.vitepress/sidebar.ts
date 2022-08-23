/*
 * @Author: YangLiwei
 * @Date: 2022-08-22 09:42:22
 * @LastEditTime: 2022-08-23 17:39:42
 * @LastEditors: yangliwei 1280426581@qq.com
 * @FilePath: \vitepress-starter\docs\.vitepress\sidebar.ts
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
          text: 'tsx',
          link: '/front/vue/tsx'
        }, {
          text: 'glob',
          link: '/front/vue/glob'
        }, {
          text: 'library',
          link: '/front/vue/library'
        }
      ]
    },{
      text: 'REACTJS',
      items: [
        {
          text: 'react',
          link: '/front/react/'
        }, {
          text: 'umi',
          link: '/front/react/umi'
        }, {
          text: 'library',
          link: '/front/react/library'
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