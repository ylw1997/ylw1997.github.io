# redux & toolkit 使用

:::tip redux
* 可以理解为一个状态管理器
* 通过 store 来管理状态
* 通过 reducer 来管理状态的变化
* 通过 action 来定义状态的变化方法
* 通过 dispatch 来触发 action
* 可以在chrome安装redux插件来直观查看变化
:::

## 创建项目

```bash

# 使用typescript模板创建项目
npx create-react-app my-app --template typescript

# 进入项目
cd my-app

# 安装redux 和 toolkit
yarn add react-redux @reduxjs/toolkit

```

## 创建store

```typescript

// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})

// 从store本身推断 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>
// 推断类型：{posts：PostsState，comments：CommentsState，users：UsersState}
export type AppDispatch = typeof store.dispatch
```
## 全局使用store

```typescript
// src/index.tsx
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

```

## 创建reducer

```typescript
// src/features/counter/counterSlice.ts
import { AnyAction, createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
}

export const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    addByCount: (state, action:PayloadAction<number>) => {
      state.count += action.payload
    }
  }
})

// 异步
export const incrementAsync = (val: number):any => {
  console.log(val)
  return (dispatch: Dispatch<AnyAction>) => {
    setTimeout(() => {
      dispatch(addByCount(val))
    }, 1000)
  } 
}

export const {increment,decrement,addByCount} = countSlice.actions;

export default countSlice.reducer
```

## 将reducer添加到store

```typescript
// store/index.ts
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

```

## 使用

```typescript
// src/App.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/index';
import { Button,InputNumber } from 'antd';
import { addByCount, decrement, increment, incrementAsync } from './store/modules/couter';
export function Count(){
  const count = useSelector((state:RootState)=>state.counter.count)
  const dispatch = useDispatch()
  const [countValue,setCountValue] = useState(0)
  return (
    <div>
      {count}
      <br/>
      <Button onClick={()=>dispatch(increment())} >增加</Button>
      <Button onClick={()=>dispatch(decrement())}>减少</Button>
      <br/>
      <InputNumber onChange={(val)=>{setCountValue(val)}} value={countValue} ></InputNumber>
      <Button onClick={()=>dispatch(addByCount(countValue))} >提交</Button>
      <br/>
      <Button onClick={()=>dispatch(incrementAsync(countValue))} >异步提交</Button>
    </div>
  )
}
```

## 官方样例

[点击这里](https://codesandbox.io/embed/github/reduxjs/redux-essentials-counter-example/tree/master/?fontsize=14&hidenavigation=1&theme=dark)
