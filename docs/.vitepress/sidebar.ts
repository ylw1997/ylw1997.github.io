/*
 * @Author: YangLiwei
 * @Date: 2022-08-22 09:42:22
 * @LastEditTime: 2022-08-22 17:14:34
 * @LastEditors: yangliwei 1280426581@qq.com
 * @FilePath: \vitepress-starter\docs\.vitepress\sidebar.ts
 * @Description: 
 */
export default {
  '/front/': [
    {
      text: 'VUEJS',
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