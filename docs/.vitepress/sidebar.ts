/*
 * @Author: YangLiwei
 * @Date: 2022-08-22 09:42:22
 * @LastEditTime: 2022-08-22 10:35:05
 * @LastEditors: YangLiwei
 * @FilePath: \vitepress-starter\docs\.vitepress\sidebar.ts
 * @Description: 
 */
export default {
  '/front/': [
    {
      text: 'VUE',
      items: [
        {
          text: 'vue',
          link: '/front/vue/'
        }, {
          text: 'vite',
          link: '/front/vue/vite'
        }, {
          text: 'library',
          link: '/front/vue/library'
        }
      ]
    },{
      text: 'REACT',
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
    }],
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