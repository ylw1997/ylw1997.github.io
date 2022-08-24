# pinia

## 为什么使用pinia,而不是vuex

::: tip PINIA的好处
  * 更好的开发工具支持
  * 更好的热更新
  * 更好的类型推断
  * 更加灵活
  * 服务端渲染支持
:::

## 安装 pinia

```bash
npm install pinia
```

## 使用

```ts
//main.ts
import { createPinia } from "pinia";

// 创建pinia插件
const pinia = createPinia();
app.use(pinia);
```

## 基本写法

### 普通写法

```ts
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})
```
### hooks写法(推荐)
```ts
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})
```

## 使用

```ts
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const counter = useCounterStore()
    counter.count++
    // with autocompletion ✨
    counter.$patch({ count: counter.count + 1 })
    // or using an action instead
    counter.increment()
  },
}
```