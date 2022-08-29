# 暗黑主题实现

## 实现原理

:::tip
实现黑暗模式主要是对 css 变量的抽取和全局 css 的替换
:::

## 编写一个全局的 css 变量 css 文件

```css
:root {
  --page-bg-color: #fff;
  --head-bg-color: rgba(255, 255, 255, 0.7);
  --text-color: rgba(0, 0, 0, 0.85);
  --line-color: #e8e8e8;
  --content-bg-color: #f0f2f5;
}
```

## 创建 dark.less 和 light.less 文件

```less
// dark.less
@import "../../node_modules/ant-design-vue/dist/antd.dark.less";
@import "./index.css";
@import "./base.less";
@import "./vars.css";
```

```less
// light.less
@import "../../node_modules/ant-design-vue/dist/antd.less";
@import "./index.css";
@import "./base.less";
@import "./vars.css";
```

## 在 css 和 less 文件中使用变量

```css
.pagemodal {
  background: white;
  background: var(--page-bg-color);
  border-radius: 5px;
  padding: 10px;
}
```

## 编写切换css方法

```ts
// 切换css
export const changeTheme = (theme: string) => {
  const head = document.head;
  document.getElementById("theme")?.remove();
  const styleDom = document.createElement("style");
  styleDom.id = "theme";
  styleDom.innerHTML = theme;
  head.appendChild(styleDom);
};
 
// 改变css变量
export const changeCss = (css: string, value: string) => {
  const body = document.body.style;
  body.setProperty(css, value);
};
```

## 编写切换主题方法

```ts
// 切换黑暗模式或者白天模式
export const DarkMode = async (isDark: boolean) => {
  if (isDark) {
    changeTheme((await import("../less/dark.less?inline")).default);
    changeCss("--page-bg-color", "#141414");
    changeCss("--head-bg-color", "rgba(0, 0, 0, 0.5)");
    changeCss("--line-color", "#2e2e2e");
    changeCss("--content-bg-color", "rgb(255 255 255 / 4%)");
    changeCss("--text-color", "rgba(255, 255, 255, 0.85)");
  } else {
    changeTheme((await import("../less/light.less?inline")).default);
    changeCss("--page-bg-color", "white");
    changeCss("--head-bg-color", "rgba(255, 255, 255, 0.7)");
    changeCss("--line-color", "#e8e8e8");
    changeCss("--content-bg-color", "#f0f2f5");
    changeCss("--text-color", "rgba(0, 0, 0, 0.85)");
  }
};
```

## 使用

```ts
// 白色
DarkMode(false);
 
// 黑色
DarkMode(true);
```

## 效果
![效果](https://s3.bmp.ovh/imgs/2022/08/29/e351f245f37b6a1a.gif)