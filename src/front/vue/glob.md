# vite Glob 导入页面

## vite 动态导入页面

:::tip 原因
在做权限的时候，从后台获取路由表，然后动态引入组件，之前 webpack 是可以直接用的，但是 vite 不行，需要用特殊的方法
:::

## 获取 vite 下所有的文件对应的路径

```ts
//引入所有views下.vue文件
// https://cn.vitejs.dev/guide/features.html#glob-import
const views = import.meta.glob("../**/**/**.vue");
// 获取到的是一个数组，里面是所有的文件路径
{
  "../views/reseller/list.vue": () => import("/src/views/reseller/list.vue")
  "../views/supplier/list/index.vue": () => import("/src/views/supplier/list/index.vue")
  "../views/system/config/index.vue": () => import("/src/views/system/config/index.vue")
  "../views/system/dict/index.vue": () => import("/src/views/system/dict/index.vue")
  "../views/404.vue": () => import("/src/views/404.vue")
}
```

## 解析路由表

```ts
/**
 * 把后台获取的路由表转换成 vite 可以识别的路由表
 * @param routerMap 后台请求的路由表
 * @returns 系统路由
 */
export const routerFilterFunc = (routerMap: RouterItem[]) => {
  const arr: RouterItem[] = [];
  routerMap.forEach((item) => {
    const obj: RouterItem = {
      ...item,
      beforeComponent: item.component,
      meta: { ...item.meta, hidden: item.hidden },
    };
    if (obj.children) {
      obj.children = routerFilterFunc(obj.children);
    }
    if (item.component == "Layout") {
      obj.component = views[`../layout/index.vue`];
    } else {
      const component = views[`../views/${obj.component}.vue`] as any;
      if (component) {
        obj.component = views[`../views/${obj.component}.vue`];
      } else {
        obj.component = () => import("@/views/404.vue");
      }
    }
    arr.push(obj);
  });
  return arr;
};
```
<img src="/glob1.png">