# react router 6.4

## 安装

:::tip react router
* react router 是一个路由库

* 安装 `yarn add react-router-dom`

* 文档地址: https://reactrouter.com/en/main/start/overview
:::

## 使用

```tsx
// index.tsx
// 1,创建路由表
const router = createBrowserRouter([
  {
    path: "/",
    element: Permission(<App />),
    children: [
      {
        path: "about",
        element: <About />
      },
      {
        path: "count",
        element: <Count />
      }
    ]
  },
  {
    path:"/login",
    element:<Login/>
  }
])

// 2,渲染路由
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider value={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
```
## 页面显示区域

```tsx
// App.tsx
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Outlet />
      </header>
    </div>
  );
}

export default App;

```


## 鉴权

```tsx
// Permission.tsx

import React, { ReactElement } from 'react'
import { Navigate } from 'react-router-dom';

// 权限校验
const Permission = (element: ReactElement) => {
  // 判断是否登录
  const token = localStorage.getItem('token');
  console.log('token', token);
  if (token) {
    return (
      <>鉴权{element}</>
    )
  } else {
    return <Navigate to="/login" replace />
  }
}

export default Permission

// 在路由表中添加鉴权

{
    path: "/",
    element: Permission(<App />),
}

```