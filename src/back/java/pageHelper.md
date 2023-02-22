# pageHelper

:::tip 说明

- pageHelper 是一个分页插件，它可以很方便的实现分页功能，只需要在查询语句前调用 PageHelper.startPage(pageNum, pageSize)方法即可，非常方便。
- 官网地址：<http://pagehelper.github.io/>
- 文档地址: <https://pagehelper.github.io/docs/howtouse/>
  :::

## 引入依赖

```xml

<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper</artifactId>
    <version>最新版本</version>
</dependency>

```

## 使用

> spring boot

```java
public AjaxResponse selectAllList(PrdLabel prdLabel) {
  // Mapper接口方式的调用，推荐这种使用方式。
        PageHelper.startPage(1, 10);
        List<PrdLabel> prdLabels = this.prdLabelService.queryAll(prdLabel);
        return AjaxResponse.success(new PageInfo<>(prdLabels));
    }
```

> 第二种方法

```java

// jdk8 lambda用法
Page<Country> page = PageHelper.startPage(1, 10).doSelectPage(()-> countryMapper.selectGroupBy());

```

## 推荐使用

```java
List<Country> list;
if(param1 != null){
    PageHelper.startPage(1, 10);
    list = countryMapper.selectIf(param1);
} else {
    list = new ArrayList<Country>();
}
```
