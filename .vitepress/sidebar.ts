/*
 * @Author: YangLiwei
 * @Date: 2022-08-22 09:42:22
 * @LastEditTime: 2022-09-15 10:20:17
 * @LastEditors: yangliwei 1280426581@qq.com
 * @FilePath: \vitepress-starter\.vitepress\sidebar.ts
 * @Description: 
 */
 const a =  {
  "/other/": [
    {
      text: '其他',
      items:[
        {
          text: 'git使用',
          link: '/other/git'
        },
        {
          text:'docker使用',
          link:'/other/docker'
        },{
          text:'nginx配置',
          link:'/other/nginx'
        },
        {
          text:'algolia搜索',
          link:'/other/algolia'
        },
        {
          text:'linux命令',
          link:'/other/linux'
        },
        {
          text:'linux磁盘监控',
          link:'/other/linux-disk'
        },
        {
          text:'vscode插件开发',
          link:'/other/vscode'
        },
        {
          text:'jenkins',
          link:'/other/jenkins'
        },
        {
          text:'jenkins高级',
          link:'/other/jenkins_advanced'
        }
      ]
    }
  ],
  '/front/': [
    {
      text: 'VUE',
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
        },
        {
          text:'vite插件',
          link:'/front/vue/plugin'
        },
        {
          text:"新框架总结",
          link:"/front/vue/scm"
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
        },
        {
          text:'RSA加密',
          link:'/front/other/encrypt'
        },
      ]
    },
    {
      text: 'REACT',
      items: [
        {
          text: 'React和TS',
          link: '/front/react/ts'
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
export default a;

