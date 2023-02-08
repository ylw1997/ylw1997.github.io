# vue 中的 tsx

## tsx 模板

导出一个函数,返回 tsx 代码

```tsx
export default defineComponent({
  setup() {
    return () => (
      <ConfigProvider locale={zhCN}>
        <RouterView />
      </ConfigProvider>
    );
  },
});
```

## v-model

tsx 语法也可以使用 v-model 语法来绑定变量

```tsx
<Popover
  v-model:visible={visible.value}
  trigger="click"
  placement="bottomRight"
/>
```

## v-show

tsx 语法也可以使用 v-show 语法来绑定变量

```tsx
<SearchForm loading={props.loading} v-show={showSerach.value} />
```

## 事件

tsx 语法统一把@符号变成 on+事件名称的格式

```tsx
<SearchForm
  onSearch={(val: object) => emit("search", val)}
  onReset={(val: string) => emit("reset", val)}
/>
```

## 插槽

传统插槽语法:

```html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

tsx 语法:

```tsx
<Drawer
  width={props.width}
  v-slots={{
    default: slots.default,
    footer: () => (
      <Button class="mr-2" onClick={props.onCancel}>
          取消
      </Button>
    ),
  }}
/>
```

## 表单修饰符

```html
<ProField {...attrs} v-model:value={{data.value[index]}}/>
```

```tsx
<ProField {...attrs} v-model:value={[data.value[index],['trim']]}/>
```

## 注意

* tsx组件只有一个根节点
* tsx变量直接使用大括号,不需要使用v-bind
* tsx在大括号中写代码语句,在圆括号中写jsx语法
