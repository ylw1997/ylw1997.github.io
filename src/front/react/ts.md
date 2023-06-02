# React和TS最小知识集

## 基础react组件

```ts
// Hello.tsx
import React from 'react';
const Hello = () => {
    return <div>Hello</div>;
};
```

## 添加typeScript

:::tip

* React.FC 表示 Function Component 函数式组件
:::

```ts{4}
// Hello.tsx
import React from 'react';
// React.FC 表示 Function Component 函数式组件
const Hello: React.FC = () => {
    return <div>Hello</div>;
};
```

## 组件属性TS类型

:::tip

* React.FC\<HelloProps\> 表示 Function Component 接受 HelloProps 类型的 props
:::

```ts{9}
// Hello.tsx
import React from 'react';

// 定义接口
interface HelloProps {
    name: string;
}

const Hello: React.FC<HelloProps> = ({ name }) => {
    return <div>{`Hello, ${name}!`}</div>;
};
```

## react添加children属性

:::tip

* PropsWithChildren 让 props.children 带类型
:::

```ts{2,8}
// Hello.tsx
import React, { PropsWithChildren } from 'react';

interface HelloProps {
    name: string;
}

const Hello: React.FC<PropsWithChildren<HelloProps>> = ({ name, children }) => {
    return (
        <div>
            <div>{`Hello, ${name}!`}</div>
            {children}
        </div>
    );
};

```

## 使用原生属性

:::tip

* HTMLAttributes\<HTMLDivElement\> 让 props 可以使用 html 属性比如 className
:::

```ts{2,4,8}
// Hello.tsx
import React, { HTMLAttributes, PropsWithChildren } from 'react';

interface HelloProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
}

const Hello: React.FC<PropsWithChildren<HelloProps>> = ({
    name,
    children,
    ...rest
}) => {
    return (
        <div>
            <div {...rest}>{`Hello, ${name}!`}</div>
            {children}
        </div>
    );
};
```
