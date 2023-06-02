# react Hooks API

:::tip

* Hooks 是 React 16.8 的新增特性，它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

* Hooks 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。

* Hooks 不能在 class 组件中使用 —— 这使得你不使用 class 也能使用 React。

* 包含 useState、useEffect、useContext、useReducer、useCallback、useMemo、useRef、useImperativeHandle、useLayoutEffect、useDebugValue 等。

:::

## useState

:::tip

* useState 可以使函数组件像类组件一样拥有 state，函数组件通过 useState 可以让组件重新渲染，更新视图。

:::

```ts
const [ ①state , ②dispatch ] = useState(③initData)
```

| 参数 | 说明 |
| --- | --- |
| ①state | 目的提供给 UI ，作为渲染视图的数据源 |
| ②dispatch | 用于触发 state 的更新 |
| ③initData | state 的初始值 |

```tsx
const DemoState = (props) => {
   /* number为此时state读取值 ，setNumber为派发更新的函数 */
   let [number, setNumber] = useState(0) /* 0为初始值 */
   return (<div>
       <span>{ number }</span>
       <button onClick={ ()=> {
         setNumber(number+1)
         console.log(number) /* 这里的number是不能够即使改变的  */
       } } ></button>
   </div>)
}
```

## useReducer

:::tip

* useReducer 是 useState 的替代方案，它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法。

:::

```ts
const [ ①state , ②dispatch ] = useReducer(③reducer, ④initData)
```

| 参数 | 说明 |
| --- | --- |
| ①state | 目的提供给 UI ，作为渲染视图的数据源 |
| ②dispatch | 用于触发 state 的更新,和useState的dispatch本质一样 |
| ③reducer | 一个函数，接收state和action，返回新的state |
| ④initData | state 的初始值 |

```tsx
const DemoReducer = (props) => {
   /* number为此时state读取值 ，dispatch为派发更新的函数 */
   let [state, dispatch] = useReducer((state, action) => {
      switch (action.type) {
         case 'add':
            return state + 1
         case 'sub':
            return state - 1
         default:
            return state
      }
   }, 0) /* 0为初始值 */
   return (<div>
      <span>{state}</span>
      <button onClick={() => {
         dispatch({ type: 'add' })
      }}></button>
      <button onClick={() => {
         dispatch({ type: 'sub' })
      }}></button>
   </div>)
}
```

## useEffect

:::tip

* useEffect 是一个函数，它接收一个函数作为参数，这个函数就是我们的副作用函数，useEffect 会在组件渲染到屏幕之后才执行它。

* useEffect 会在每次渲染之后执行，包括第一次渲染的时候。

* useEffect 会在组件卸载的时候执行清除操作。

* useEffect 可以返回一个函数，这个函数会在组件卸载的时候执行。

:::

```ts

useEffect(①副作用函数, ②依赖项数组)

// useEffect(()=>{
//     return destory
// },dep)

```

| 参数 | 说明 |
| --- | --- |
| ①副作用函数 | 用于执行副作用操作的函数,返回一个清理函数,在下一次执行之前调用,清除产生的副作用 |
| ②依赖项数组 | 用于控制副作用函数的执行时机 |

```tsx
const DemoEffect = (props) => {
   let [number, setNumber] = useState(0)
   useEffect(() => {
      console.log('副作用函数')
      return () => {
         console.log('清理函数')
      }
   }, [number]) /* 依赖项数组 */
   return (<div>
      <span>{number}</span>
      <button onClick={() => {
         setNumber(number + 1)
      }}></button>
   </div>)
}
```

## useLayoutEffect

:::tip

* useLayoutEffect 和 useEffect 的执行时机是不一样的，useLayoutEffect 会在所有的 DOM 变更之后，同步调用副作用函数。

:::

```ts

useLayoutEffect(①副作用函数, ②依赖项数组)

// useLayoutEffect(()=>{
//     return destory
// },dep)

```

| 参数 | 说明 |
| --- | --- |
| ①副作用函数 | 用于执行副作用操作的函数,返回一个清理函数,在下一次执行之前调用,清除产生的副作用 |
| ②依赖项数组 | 用于控制副作用函数的执行时机 |

```tsx
const DemoUseLayoutEffect = () => {
    const target = useRef()
    useLayoutEffect(() => {
        /*我们需要在dom绘制之前，移动dom到制定位置*/
        const { x ,y } = getPositon() /* 获取要移动的 x,y坐标 */
        animate(target.current,{ x,y })
    }, []);
    return (
        <div >
            <span ref={ target } className="animate"></span>
        </div>
    )
}
```

## useContext

:::tip

* useContext 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。

* 当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。

* 当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context value 值。

:::

```ts

// 创建一个context
const createContext = React.createContext(①initData)

// 使用
const ②context = useContext(createContext)


```

| 参数 | 说明 |
| --- | --- |
| ①initData | context 的初始值 |
| ②context | context 的当前值 |

```tsx

// 创建一个context
const MyContext = React.createContext('默认值');

// 提供
const DemoUseContextProvider = () => {
    return (
        <MyContext.Provider value="我是context的值">
            <DemoUseContext />
        </MyContext.Provider>
    )
}

const DemoUseContext = () => {
    const context = useContext(MyContext)
    return (
        <div >
            {/* 我是context的值 */}
            <span>{ context }</span>
        </div>
    )
}
```

## useRef

:::tip

* useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。

* 返回的 ref 对象在组件的整个生命周期内保持不变。

:::

```ts

const ①ref = useRef(②initData)

```

| 参数 | 说明 |
| --- | --- |
| ①ref | 返回的 ref 对象 |
| ②initData | ref 的初始值 |

```tsx

const DemoUseRef = () => {
    const ref = useRef(null)
    return (
        <div >
            <span ref={ ref }></span>
            <button onClick={()=>{
                console.log(ref.current)
            }}></button>
        </div>
    )
}
```

## useImperativeHandle

:::tip

* useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。

* 在大多数情况下，应当避免使用 ref 这样的命令式代码。

* useImperativeHandle 应当与 forwardRef 一起使用。

:::

```ts

useImperativeHandle(①ref, ②createHandle, ③依赖项数组)

```

| 参数 | 说明 |
| --- | --- |
| ①ref | 一个 ref 对象，通过 React.forwardRef() 创建。 |
| ②createHandle | 一个函数，返回值将会被用于暴露给父组件。 |
| ③依赖项数组 | 用于控制副作用函数的执行时机 |

```tsx

const DemoUseImperativeHandle = () => {
    const ref = useRef(null)
    return (
        <div >
            <Child ref={ ref } />
            <button onClick={()=>{
                ref.current.focus()
            }}></button>
        </div>
    )
}

const Child = forwardRef((props, ref) => {
    const inputRef = useRef(null)
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus()
        }
    }), [])
    return (
        <div >
            <input ref={ inputRef } />
        </div>
    )
})
```

## useMemo

:::tip

* useMemo 作用是用来缓存计算结果，只有当依赖项数组发生变化时，才会重新计算。

* useMemo 会在渲染期间执行，不会阻塞浏览器。

:::

```ts

const ①memo = useMemo(②createMemo, ③依赖项数组)

```

| 参数 | 说明 |
| --- | --- |
| ①memo | 缓存的计算结果 |
| ②createMemo | 一个函数，返回值将会被缓存。 |
| ③依赖项数组 | 用于控制副作用函数的执行时机,发生改变将重新执行②createMemo |

```tsx

const DemoUseMemo = () => {
    const [number, setNumber] = useState(0)
    const [name, setName] = useState('张三')
    const memo = useMemo(() => {
        return number * 2
    }, [number])
    return (
        <div >
            <span>{ memo }</span>
            <button onClick={() => {
                setNumber(number + 1)
            }}></button>
            <button onClick={() => {
                setName('李四')
            }}></button>
        </div>
    )
}
```

## useCallback

:::tip

* useCallback 作用是缓存函数，只有当依赖项数组发生变化时，才会重新创建。

* useCallback 会在渲染期间执行，不会阻塞浏览器。

* useCallback和useMemo的区别在于，useMemo返回的是一个值，useCallback返回的是一个函数。

:::

```ts

const ①callback = useCallback(②createCallback, ③依赖项数组)

```

| 参数 | 说明 |
| --- | --- |
| ①callback | 缓存的函数 |
| ②createCallback | 一个函数，返回值将会被缓存。 |
| ③依赖项数组 | 用于控制副作用函数的执行时机,发生改变将重新执行②createCallback |

```tsx

const DemoUseCallback = () => {
    const [number, setNumber] = useState(0)
    const [name, setName] = useState('张三')
    const callback = useCallback(() => {
        return number * 2
    }, [number])
    return (
        <div >
            <span>{ callback() }</span>
            <button onClick={() => {
                setNumber(number + 1)
            }}></button>
            <button onClick={() => {
                setName('李四')
            }}></button>
        </div>
    )
}
```
