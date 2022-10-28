# proField 库

<img src="https://article.biliimg.com/bfs/article/b2fca8e0d573c6c4b23f8dbefc656b3bb845a6f8.png" width="200" style="display: block;margin: 0 auto;">

- npm: [profield](https://www.npmjs.com/package/profield)

- github: [profield](https://github.com/ylw1997/profield)

- proField 是一系列基于 ant design vue 的 组件库

- 旨在提供一套快速生成增删改查,表单,弹窗,上传组件,以及一些常用的 hooks 和工具函数

- 使用前需要安装`vue`, `ant-design-vue` 库

- 富文本编辑器封装: [profield-editor](https://www.npmjs.com/package/profield-editor)

## 内置组件

- `proField` 组件，统一 proForm,proTable 的字段 [proField](./proField.md)。

- `proForm` 组件,用于生成弹窗表单,抽屉表单,普通表单 [proForm](./proForm.md)。

- `proTable` 组件,用于生成表格以及查询和工具栏 [proTable](./proTable.md)。

- `proPanel` 组件,用于生成弹窗和抽屉 [proPanel](./proPanel.md) 。

- `lookField`组件,用来查看,复制数据 [lookField](./lookField.md) 。

## 内置钩子

- `useTable` 表格钩子 [useTable](./useTable.md) 。

- `useAjax` 请求钩子 [useAjax](./useAjax.md) 。

- `useAjaxSim` 请求钩子简化板 [useAjaxSim](./useAjax.md#useajaxsim-hook) 。

- `useModel` 弹窗钩子[useModal](./useModel.md) 。

- `usePage` 分页钩子 [usePage](./usePage.md) 。

- `useForm` 表单钩子 [useForm](./useForm.md) 。

## 内置类型

- `ColumnsTypes` 表格字段类型集合 [ColumnsTypes](./types.md#columnstypes) 。

- `columnItem` 表格字段定义接口类型 [columnItem](./types.md#columnitem) 。

- `ValidateType` 表单验证类型 [ValidateType](./types.md#validatetype) 。

## 安装

```bash
npm install profield
```

## 在项目中使用

```js
import { columnItem, proTable, proForm, usePage, useModel } from "profield";
```
