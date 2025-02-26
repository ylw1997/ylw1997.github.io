/*
 * @Author: YangLiwei
 * @Date: 2022-08-22 09:42:22
 * @LastEditTime: 2025-02-26 15:55:14
 * @LastEditors: YangLiwei 1280426581@qq.com
 * @FilePath: \blog\.vitepress\sidebar.ts
 * @Description: 
 */
 const a =  {
  "/ai/":[
    {
      text: 'AI',
      items: [
        {
          text: 'uv虚拟环境',
          link: '/ai/uv'
        },
        {
          text:'OmniParser V2',
          link:'/ai/omniparser'
        },
        {
          text:'browser use',
          link:'/ai/browser-use'
        },
        {
          text:'open-interpreter',
          link:'/ai/open-interpreter'
        },
        {
          text:'dify',
          link:'/ai/dify'
        }
      ]
    }
  ],
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
          text:'编译安装nginx',
          link:'/other/openEuler'
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
          text:'jenkins基础',
          link:'/other/jenkins'
        },
        {
          text:'jenkins高级',
          link:'/other/jenkins_advanced'
        },

        {
          text:'sentry错误监控',
          link:'/other/sentry'
        },
        {
          text:'centos安装nodejs',
          link:'/other/nodejs'
        },{
          text:'vscode 远程开发',
          link:'/other/remote'
        },{
          text:'nvm 使用',
          link:'/other/nvm'
        },{
          text:'linuxLVM 扩展分区',
          link:'/other/linuxLVM'
        },{
          text:'Hardor 私有docker仓库',
          link:'/other/hardor'
        },{
          text:'ZSH',
          link:'/other/zsh'
        },{
          text:'ELK',
          link:'/other/elk'
        },{
          text:'acme',
          link:'/other/acme'
        },
        {
          text:'wsl配置',
          link:'/other/wsl'
        },
        {
          text:'mysql',
          link:'/other/mysql'
        },
        {
          text:"服务器初始化",
          link:"/other/server"
        },{
          text:'k8s',
          link:'/other/k8s'
        },{
          text:'jenkins+k8s+hardor+gitlab',
          link:'/other/jenkins_k8s'
        },{
          text:"prometheus+grafana",
          link:'/other/prometheus'
        },{
          text:"kubesphere",
          link:'/other/kubesphere'
        },{
          text:'gpt',
          link:'/other/gpt'
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
    },{
      text: 'REACT',
      items: [
        {
          text: 'React和TS',
          link: '/front/react/ts'
        },
        {
          text:'redux&toolkit',
          link:'/front/react/redux'
        },
        {
          text:'react router 6',
          link:'/front/react/router'
        },{
          text:'react hooks',
          link:'/front/react/hooks'
        }
      ]
    },{
      text: '其他',
      items: [
        {
          text:"vite+ts+vue3 npm包",
          link:"/front/other/npm"
        },
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
        {
          text:'pnpm & monorepo',
          link:'/front/other/pnpm'
        },{
          text:'前端漏洞修复',
          link:'/front/other/bug'
        }
      ]
    }
  ],
  "/back/": [
    {
      text: 'JAVA',
      items:[
        {
          text: 'bootstrap.yml多环境配置',
          link: '/back/java/bootstrap'
        },
        {
          text: 'Lombok',
          link: '/back/java/lombok'
        },{
          text:"Spring Boot 基础注解",
          link:"/back/java/annotations"
        },{
          text:'Swagger 3',
          link:'/back/java/swagger'
        },{
          text:"PageHelper",
          link:"/back/java/pageHelper"
        },{
          text:"Mybatis-plus",
          link:"/back/java/mybatisPlus"
        },{
          text:'CRUD',
          link:'/back/java/CRUD'
        },{
          text:'Exception',
          link:'/back/java/exception'
        },{
          text:"Redis",
          link:"/back/java/redis"
        },{
          text:"Upload",
          link:"/back/java/upload"
        },{
          text:"AOP",
          link:"/back/java/aop"
        },{
          text:"WebSocket",
          link:"/back/java/websocket"
        },{
          text:"JWT",
          link:"/back/java/jwt"
        },{
          text:"Spring Security",
          link:"/back/java/security"
        }
      ]
    }
  ],
  "/profield/": [
    {
      text: 'profield',
      items:[
        {
          text: '介绍',
          link: '/profield/README'
        }
        ,{
          text: 'proEditor',
          link: '/profield/proEditor'
        },{
          text: 'proField',
          link: '/profield/proField'
        },{
          text: 'proForm',
          link: '/profield/proForm'
        },{
          text: 'proTable',
          link: '/profield/proTable'
        },{
          text:"proPanel",
          link:"/profield/proPanel"
        },{
          text:"lookField",
          link:"/profield/lookField"
        }
      ]
    },{
      text: 'hooks',
      items:[
        {
          text: 'useAjax',
          link: '/profield/useAjax'
        },
        {
          text: 'useTable',
          link: '/profield/useTable'
        },
        {
          text: 'useModel',
          link: '/profield/useModel'
        },
        {
          text: 'usePage',
          link: '/profield/usePage'
        },
        {
          text: 'useForm',
          link: '/profield/useForm'
        }
      ]
    },{
      text: 'types',
      items:[
        {
          text:'types',
          link:'/profield/types'
        }
      ]
    }
  ]
}
export default a;

