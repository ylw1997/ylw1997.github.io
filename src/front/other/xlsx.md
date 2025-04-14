# XLSX 表格操作

## 简介

:::tip

* XLSX 是一个用于处理 XLSX 文件的库，它提供了许多功能，如读取、写入、修改和操作 XLSX 文件。
* xlsx 可以在 Node.js 和浏览器中使用，并且支持多种格式，如 CSV、JSON、XML 等。
* [xlsx npm](https://www.npmjs.com/package/xlsx)

:::

## 安装

```bash
npm install xlsx
```

## 读取 XLSX 文件

```typescript
import * as XLSX from 'xlsx/xlsx.mjs';
// 读取本地excel文件
export const redXLSXFile = async (file: File) => {
  return await new Promise(async (resolve, reject) => {
    try {
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      // 将工作表转换为JSON格式 header:1 输出格式  ，range:1表示从第二行开始读取数据
      const jsonData = XLSX.utils.sheet_to_json(worksheet,{header:1,range:1});
      console.log("redXLSXFile",jsonData);
      resolve(jsonData);
    } catch (error) {
      console.error('Error reading XLSX file:', error);
      reject(error);
    }
  });
}
```

## 错误处理

```javascript
Error: Cannot read properties of undefined (reading 'read') at FileReader.read
```

> 直接将import XLSX from 'xlsx'改为import * as XLSX from 'xlsx/xlsx.mjs'即可

## JSON输出格式

> **一般我们设置 header:1 range:1 这样可以直接读取格式为数组,并且忽略表头**

<!-- table -->
| a | b | c |
|:---|:---|:---|
| 1 | 2 | 3 |
| 4 | 5 | 6 |

```javascript

// XLSX.utils.sheet_to_json() 方法可以将工作表转换为 JSON 格式的数据。
// 当不设置header:1时,导出数据格式为:
[
    {
        "a": 1,
        "b": 2,
        "c": 3
    },
    {
        "a": 4,
        "b": 5,
        "c": 6
    }
]
// 当设置header:1时,导出数据格式为:
[['a', 'b', 'c'],[1, 2, 3],[4, 5, 6]]
```

## 无法找到模块“xlsx/xlsx.mjs”的声明文件

> 解决方法：在项目根目录下创建一个 `xlsx.d.ts` 文件，内容如下：

```typescript
declare module 'xlsx/xlsx.mjs' {
  import * as XLSX from 'xlsx';
  export = XLSX;
}

```
