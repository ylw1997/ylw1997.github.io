# proEditor 组件

- 富文本编辑器封装组件
- 基于 [wangEditor](https://www.wangeditor.com/)实现
- 功能强大,支持多种格式的文本编辑

## 样例

<iframe src="https://codesandbox.io/embed/infallible-mirzakhani-ht47t0?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="infallible-mirzakhani-ht47t0"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 引入

```js
import { proEditor } from "profield-editor";
import "profield-editor/dist/style.css";
```

## 使用

```html
<proEditor
  :upload-func="upload"
  :readonly="readonly"
  v-model:value="editorData"
/>
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|value(v-model)|编辑器内容|`string`|`''`|
|readonly|是否只读|`boolean`|`false`|
|upload-func|上传图片的方法|`(file:File)=>Promise<string>`|`()=>{}`|
