# 新框架总结

::: tip 特性

- 最新技术栈: vue3 + vite3 + typescript
- 代码规范: eslint + prettier
- UI 框架: Ant-Design-Vue
- 支持黑暗主题
- 增删改查组件封装
- 使用最新 hooks 思想开发
- 代码规范化,提交验证
- 动态 css
  :::

## 黑暗模式

:::tip 黑暗模式
* 点击[这里](https://www.yangliwei.top/front/other/dark.html)查看黑暗模式
:::


## 提交验证

:::tip 提交验证
* 点击[这里](https://www.yangliwei.top/front/other/husky.html)查看提交验证
:::

## hooks 应用

### AJAX 封装

::: tip AJAX

- 基于 axios 封装
- 自动导出 loading,data,请求方法,
  :::

```ts
/**
 * @example
 *  func 请求方法
 *  params 请求参数
 *  callBackFunc 成功回调
 *  runOnMounted 是否在最开始就执行
 * @description 请求hook
 * @param param 参数配置
 */
const useAJAX = <T>({
  func,
  params = {},
  callBackFunc,
  runOnMounted = true,
}: UseAJAX<T>): AjaxRes<T> => {
  const loading = ref(false);
  const data = ref<T | any>();
  /**
   * useAJAX hook的请求方法
   * @param funcparams 请求的参数 默认为hook传的参数
   */
  const ajaxFunc = async (funcparams = params) => {
    data.value = undefined;
    loading.value = true;
    await func(funcparams)
      .then((res) => {
        if (res.data instanceof Blob) {
          data.value = res.data;
          if (callBackFunc) callBackFunc(res.data, res.data);
        } else {
          data.value = res.data?.data;
          if (callBackFunc) callBackFunc(res.data?.data, res.data);
        }
      })
      .finally(() => {
        loading.value = false;
      });
  };
  onMounted(() => {
    if (runOnMounted) ajaxFunc();
  });
  return {
    data,
    loading,
    ajaxFunc,
  };
};

// 使用
const { loading: valueLoading, ajaxFunc: getCacheValue } = useAJAX({
  func: cacheValue,
  runOnMounted: false,
  callBackFunc: (data) => (formModel.value = data),
});
```

简化版本

```ts
export const useAJAXSim = <T>(
  func: (params: any) => Promise<AxiosResponse<Ajax<T>>>,
  runOnMounted: boolean,
  onSuccess?: (data: any, res: any) => void
) => {
  const { data, loading, ajaxFunc } = useAJAX({
    func,
    runOnMounted,
    callBackFunc: (data, res) => {
      message.success(res.msg);
      onSuccess && onSuccess(data, res);
    },
  });
  return { data, loading, ajaxFunc };
};

// 使用
const { loading, ajaxFunc: changeStockFunc } = useAJAXSim(
  stockChange,
  false,
  cancelFunc
);
```

### Upload 封装

::: tip Upload

- 基于 antd 封装
- 自动导出 loading,上传列表,上传方法,上传属性
  :::

```ts
/**
 * 上传hook
 * @param ajaxFunc 上传接口
 * @param onSuccess 成功回调
 */
export const useUpload = (
  ajaxFunc: (params: any) => Promise<AxiosResponse<Ajax<any>>>,
  onSuccess?: (data: any, res: any) => void
) => {
  const fileList = ref<FileItem[]>([]);
  //上传方法
  const { loading: uploadFileLoading, ajaxFunc: UploadFunc } = useAJAX({
    func: ajaxFunc,
    runOnMounted: false,
    callBackFunc: (data, res) => {
      message.success(res.msg);
      if (onSuccess) onSuccess(data, res);
    },
  });
  //上传所需要的props
  const uploadProps = {
    customRequest: async (value: any) => {
      const uploadfile = value.file;
      try {
        await UploadFunc(uploadfile);
        value.onSuccess();
      } catch (error) {
        value.onError();
      }
    },
  };

  return {
    fileList,
    uploadFileLoading,
    UploadFunc,
    uploadProps,
  };
};
```

### Table 封装

::: tip Table

- 基于 antd 封装
- 导出行间样式,选中事件,表格分页改变事件,编辑,删除,查看事件,自定义行点击事件
- 可以视自己需要导入需要的方法
  :::

```ts
/**
 * 封装表格事件
 * @param emit emit方法
 */
const useTable = (emit: any) => {
  const rowclass = (_: any, index: number) => {
    if (index % 2 == 1) {
      return "rowclass";
    }
    return "";
  };
  //选择改变
  const onSelectChange = (selectedRowKeys: (string | number)[]) => {
    // console.log("selectedRowKeys changed: ", selectedRowKeys);
    emit("update:rowskeys", selectedRowKeys);
  };

  //分页改变
  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: any,
    sorter: SorterResult<any> | any
  ) => {
    tableChangeFunc(pagination, filters, sorter, (obj) =>
      emit("update:pagination", obj)
    );
  };
  //编辑
  const edit = (record: any) => {
    emit("edit", record);
  };
  //删除
  const del = (record: any) => {
    emit("del", record);
  };
  //查看
  const look = (record: any) => {
    emit("look", record);
  };
  //点击行
  const customRow = (record: any) => {
    return {
      onClick: (e: { path: Element[] }) => {
        const elearr = document.getElementsByClassName("selectRow");
        if (elearr.length > 0) {
          elearr[0].classList.remove("selectRow");
        }
        e.path[1].classList.add("selectRow");
        emit("clickRow", record);
      },
    };
  };
  return {
    rowclass,
    onSelectChange,
    handleTableChange,
    edit,
    del,
    look,
    customRow,
  };
};
export default useTable;
```

### Modal 封装

::: tip 增改弹窗 Modal

- 基于 antd 封装
- 导出弹窗显示隐藏,弹窗数据对象,增改看方法
  :::

```ts
/**
 * 添加编辑弹窗hook
 * @param columns 字段定义表
 * @returns
 */
const useModel = (columns: columnItem[]) => {
  const visible = ref(false);
  const modelData = ref();
  const add = () => {
    showData({}, "add");
  };
  /**
   * 编辑
   * @param record 编辑参数
   */
  const edit = (record: { [text: string]: any }) => {
    //编辑的数据
    showData(record, "edit");
  };

  /**
   * 查看
   * @param record 查看参数
   */
  const look = (record: { [text: string]: any }) => {
    showData(record, "look");
  };

  const showData = (
    record: { [text: string]: any },
    type: "look" | "edit" | "add"
  ) => {
    const obj: ModelType = { ...record, ylwType: type };
    if (type === "add") {
      modelData.value = { ylwType: type };
    } else {
      modelData.value = convertDataToFormData(columns, obj);
    }
    visible.value = true;
  };

  return {
    visible,
    modelData,
    add,
    edit,
    look,
  };
};
export default useModel;

// 使用
//增改弹窗封装
const { visible, modelData, add, edit } = useModel(columns.value as any);
```

### 增删改统一封装

::: tip 增删改统一封装

- 基于 antd 封装
- 导出增删改查 loading,增删改查分别方法,点击增改的回调
  :::

```ts
const useCrud = ({
  Add,
  Edit,
  Del,
  onSuccess = () => null,
  params,
}: {
  Add?: (params: any) => Promise<AxiosResponse<Ajax<any>>>;
  Edit?: (params: any) => Promise<AxiosResponse<Ajax<any>>>;
  Del?: (params: any) => Promise<AxiosResponse<Ajax<any>>>;
  onSuccess?: (type: "Add" | "Edit" | "Del", res?: any) => void;
  params?: { [string: string]: any };
}) => {
  //如果没传方法
  const NoFunc = () => {
    return {
      loading: { value: false },
      ajaxFunc: () => null,
    };
  };

  //添加
  const { loading: addloading, ajaxFunc: addFunc } = Add
    ? useAJAX({
        func: Add,
        runOnMounted: false,
        callBackFunc: (data, res) => onSuccess("Add", res),
      })
    : NoFunc();
  //修改
  const { loading: editloading, ajaxFunc: editFunc } = Edit
    ? useAJAX({
        func: Edit,
        runOnMounted: false,
        callBackFunc: (data, res) => onSuccess("Edit", res),
      })
    : NoFunc();
  //删除
  const { loading: delloading, ajaxFunc: delFunc } = Del
    ? useAJAX({
        func: Del,
        runOnMounted: false,
        callBackFunc: (data, res) => onSuccess("Del", res),
      })
    : NoFunc();

  //添加和编辑弹窗ok封装
  const ModelOk = (res: { [text: string]: any; ylwType: "add" | "edit" }) => {
    if (res.ylwType == "add") {
      addFunc({ ...res, ...params });
    } else if (res.ylwType == "edit") {
      editFunc({ ...res, ...params });
    }
  };
  //loading
  const crudLoading = computed(
    () => addloading.value || editloading.value || delloading.value
  );
  return {
    crudLoading,
    addFunc,
    editFunc,
    delFunc,
    ModelOk,
  };
};
export default useCrud;

// 使用
//增删改封装
const { crudLoading, ModelOk, delFunc } = useCrud({
  Add: categoryAdd,
  Edit: categoryEdit,
  Del: categoryDelete,
  params: {
    parentId: route.params.id,
  },
  onSuccess: (type) => {
    message.success("操作成功!");
    visible.value = false;
    if (type == "Edit" || type == "Del") {
      getData();
    } else {
      changeParamsCleanPage();
    }
  },
});
```

## 全局字段组件封装

::: tip 全局字段组件封装

- 为了封装 ant 的组件,包括 input,numberinput,select,dateTime,dateRange,textarea,upload,password,switch,treeSelect,cascader 等
- 用一个组件传入 type 就会生成对应的组件
- 用来减少代码量
- 使用 tsx 语法编写
- 直接传入属性就可以直接控制组件
  :::

```tsx
const ProField = defineComponent({
  props: {
    type: {
      type: String,
      default: () => "text",
    } as Prop<ColumnsTypes>,
    title: {
      type: String,
      default: () => "",
    },
    dataIndex: {
      type: String,
      default: () => "",
    },
    uploadList: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: () => false,
    },
    selectFields: {
      type: Object,
      default: () => {
        return { value: "value", title: "label" };
      },
    } as any,
  },
  setup(prop) {
    return () => {
      switch (prop.type) {
        case "number":
          return <InputNumber placeholder={"请输入" + prop.title} min={0} />;

        case "money":
          return (
            <InputNumber
              placeholder={"请输入" + prop.title}
              min={0.01}
              step={0.01}
              formatter={(value) =>
                `${value}`.replace(/^(\\-)*(\d+)\.(\d\d).*$/, "$1$2.$3")
              }
            />
          );

        case "dateTime":
          return (
            <DatePicker
              format="YYYY-MM-DD HH:mm:ss"
              placeholder={"请选择" + prop.title}
              show-time
            />
          );

        case "date":
          return (
            <DatePicker
              format="YYYY-MM-DD"
              placeholder={"请选择" + prop.title}
            />
          );

        case "time":
          return (
            <TimePicker format="HH:mm:ss" placeholder={"请选择" + prop.title} />
          );

        case "dateTimeRange":
          return (
            <RangePicker
              placeholder={["开始时间", "结束时间"]}
              show-time={{ format: "HH:mm" }}
              format="YYYY-MM-DD HH:mm"
            />
          );

        case "dateRange":
          return <RangePicker placeholder={["开始时间", "结束时间"]} />;

        case "textarea":
          return <Textarea placeholder={"请输入" + prop.title} />;

        case "select":
          return <Select placeholder={"请选择" + prop.title} />;

        case "upload":
          return <YUpload title={prop.title} />;

        case "password":
          return <InputPassword placeholder={"请输入" + prop.title} />;

        case "switch":
          return <Switch />;

        case "treeSelect":
          return <TreeSelect placeholder={"请选择" + prop.title} />;

        case "tree":
          return <Tree />;

        case "cascader":
          return <Cascader placeholder={"请选择" + prop.title} />;

        default:
          return <Input placeholder={"请输入" + prop.title} />;
      }
    };
  },
});

export default ProField;

// 使用
<ProField
          v-model:value="record[column.dataIndex]"
          :placeholder="column.title"
          v-bind="column"
          :disabled="
            (column.dataIndex == 'inventoryTotalNum' &&
              isEdit &&
              !!record.id) ||
            (['costPrice', 'supplierProductNo'].includes(column.dataIndex) &&
              !isSelf)
          "
        />
```

## 全局表格封装

::: tip 全局表格封装

- 基于 ant 的 table 组件封装
- 使用 tsx 编写
- 集成搜索栏,分页,增删改查,导出,导入,批量操作,刷新,改变表格间距,选择表格字段等功能
- 只需要定义字段属性,就可以生成对应的增删改查表格
- 可以自定义表格的操作按钮,非常灵活
  :::

想要使用就必须先定义表格字段

```tsx
// 字段类型定义
export interface columnItem
  extends ColumnType,
    UploadProps,
    SelectProps,
    InputProps,
    DatePickerProps {
  title: string;
  dataIndex: string;
  options?: DefaultOptionType[] | ComputedRef<DefaultOptionType[]>; //下拉选择框
  notShowInSearch?: boolean; //是否展示在查询表单
  notShowInAddOrEdit?: boolean; //不在添加或编辑的时候展示
  notShowInTable?: boolean; //不在表格显示
  required?: boolean; //不是必须
  type?: ColumnsTypes; //字段类型
  onChangeValue?: (fromData: any, ...value: any) => void; // 值改变时的回调
  ValidateType?: RuleType; //表单验证类型
  editNoRequired?: boolean; //编辑不用强制要求
  rules?: RuleObject; //表单验证规则
  span?: number; //占据的列数
  condition?: (formModel: any) => boolean; //满足条件才显示
  rangeDateKeyArray?: [string, string]; //时间范围的key
  cascaderKeyArray?: string[]; //级联选择后的对应字段
  slot?: string; //插槽名称
  tips?: string; //提示信息
  [str: string]: any;
}

//字段定义
const columns = ref<columnItem[]>([
  { title: "商品名称", dataIndex: "productName", required: true },
  {
    title: "商品规格",
    dataIndex: "skuSpecificationValues",
    notShowInAddOrEdit: true,
    required: true,
    notShowInSearch: true,
    customRender: ({ text }: { text: string }) => {
      const obj = JSON.parse(text) as any[];
      return obj
        .map((item) => {
          if (item) {
            let label = "";
            try {
              label = JSON.parse(Object.keys(item)[0]).label + ":";
            } catch {
              label = "";
            }
            return `${label}${Object.values(item)[0]}`;
          }
        })
        .join(",");
    },
  },
  { title: "商品货号", dataIndex: "productNo", required: true },
  {
    title: "商品SKU编码",
    dataIndex: "productSkuNo",
    required: true,
    notShowInSearch: true,
  },
  {
    title: "商品分类",
    dataIndex: "categoryInfo",
    type: "cascader",
    options: categoryTreeData,
    cascaderKeyArray: ["productCategoryPid", "productCategorySid"],
    required: true,
  },
  {
    title: "供应商名称",
    dataIndex: "productSupplierName",
    notShowInAddOrEdit: true,
    required: true,
  },
  {
    title: "现库存数量",
    dataIndex: "inventoryLeftNum",
    type: "number",
    notShowInSearch: true,
    required: true,
  },
  {
    title: "创建时间",
    dataIndex: "buildTime",
    type: "dateTimeRange",
    notShowInAddOrEdit: true,
    rangeDateKeyArray: ["buildStartTime", "buildEndTime"],
  },
  {
    title: "操作",
    dataIndex: "action",
    notShowInSearch: true,
    notShowInAddOrEdit: true,
    fixed: "right",
  },
]);
```

表格组件代码

```tsx
export default defineComponent({
  components: {
    tableAction,
  },
  props: {
    dataSource: { type: Array, default: () => [] },
    loading: {
      type: Boolean,
      default: () => false,
    },
    pagination: {
      type: [Object, Boolean],
      default: () => {
        return {
          current: 1, //初始页
          pageSize: 10, //分页大小
          total: 0, //数据总数
        };
      },
    } as Prop<false | TablePaginationConfig | undefined>,
    rowskeys: {
      type: [Array, Boolean],
      default: () => false,
    },
    columns: {
      type: Array,
      default: () => [],
    } as columnItem[] | any,
    rowKey: {
      type: String,
      default: "id",
    },
    showSearch: {
      type: Boolean,
      default: () => true,
    },
    showAction: {
      type: Boolean,
      default: () => true,
    },
    showTable: {
      type: Boolean,
      default: () => true,
    },
    customRow: {
      type: Function,
    } as Prop<GetComponentProps<any> | undefined>,
    rowClassName: {
      type: Function,
    } as Prop<any>,
    customSize: {
      type: String,
      default: () => "middle",
    } as Prop<SizeType>,
    defaultExpandAllRows: {
      type: Boolean,
      default: () => false,
    },
  },
  emits: [
    "update:rowskeys",
    "update:pagination",
    "update:columns",
    "formDataChange",
    "search",
    "reset",
  ],
  setup(props, { slots, emit, attrs }) {
    const sourceColumns = ref<columnItem[]>(TableColumns(props.columns));
    const { onSelectChange, handleTableChange } = useTable(emit);
    const showSerach = ref(true);
    const SearchFormData = ref({});
    const TableSize = ref<SizeType>(props.customSize);
    // 改变表格尺寸
    const SelectSize: MenuClickEventHandler = (size) => {
      TableSize.value = size.key as SizeType;
    };
    return () => (
      <div>
        {/* 搜索栏 */}
        {props.showSearch && (
          <SearchForm
            loading={props.loading}
            v-show={showSerach.value}
            class="mt-2 mb-2"
            column={props.columns}
            onSearch={(val: object) => emit("search", val)}
            onReset={(val: string) => emit("reset", val)}
            onChangeData={(val: object) => {
              SearchFormData.value = val;
              emit("formDataChange", val);
            }}
            v-slots={{
              default: slots.searchForm,
            }}
          />
        )}
        {/* 表格工具栏 */}
        {props.showAction && (
          <tableAction
            v-slots={{
              left: () => (slots.actionLeft ? slots.actionLeft() : <div></div>),
              right: () => (
                <Space style={{ fontSize: "18px" }} size={18}>
                  {slots.actionRight ? slots.actionRight() : null}
                  <Tooltip title="刷新">
                    <RedoOutlined
                      class="link-color"
                      onClick={() => emit("search", SearchFormData.value)}
                    />
                  </Tooltip>
                  <Tooltip title="查询">
                    <SearchOutlined
                      class="link-color"
                      onClick={() => (showSerach.value = !showSerach.value)}
                    />
                  </Tooltip>
                  <Tooltip title="密度">
                    <Dropdown
                      trigger={["click"]}
                      v-slots={{
                        overlay: () => (
                          <Menu
                            onClick={SelectSize}
                            selectedKeys={
                              TableSize.value
                                ? [TableSize.value.toString()]
                                : []
                            }
                          >
                            <Menu.Item key="large">默认</Menu.Item>
                            <Menu.Item key="middle">中等</Menu.Item>
                            <Menu.Item key="small">紧凑</Menu.Item>
                          </Menu>
                        ),
                      }}
                    >
                      <ColumnHeightOutlined class="link-color" />
                    </Dropdown>
                  </Tooltip>
                  <Tooltip title="字段">
                    <SelectColumns
                      class="link-color"
                      rowKey={props.rowKey}
                      columns={sourceColumns.value}
                      onChange={(val) => emit("update:columns", val)}
                    />
                  </Tooltip>
                </Space>
              ),
            }}
          />
        )}
        {slots.tab ? slots.tab() : ""}
        {/* 表格 */}
        {props.showTable && (
          <Table
            class="mt-3"
            {...props}
            {...attrs}
            size={TableSize.value}
            columns={TableColumns(props.columns)}
            onChange={handleTableChange}
            row-selection={
              props.rowskeys
                ? {
                    selectedRowKeys: props.rowskeys,
                    onChange: onSelectChange,
                  }
                : null
            }
            v-slots={{
              bodyCell: slots.bodyCell ? slots.bodyCell : null,
              expandedRowRender: slots.expandedRowRender
                ? slots.expandedRowRender
                : null,
            }}
          />
        )}
      </div>
    );
  },
});
```

## 增删改查组件封装

::: tip 增删改查组件封装

- 基于表格封装
- 大幅减少代码
  :::

```Vue
<template>
  <pageTemplate title="库存管理">
    <proTable
      v-model:columns="columns"
      :dataSource="tableData"
      :loading="tableLoading"
      v-model:pagination="pagination"
      rowKey="productSkuNo"
      v-model:rowskeys="productSkuIds"
      @reset="(val) => changeParamsCleanPage(val)"
      @search="(val) => changeParamsCleanPage(val)"
    >
      <template #actionLeft>
        <Button
          @click="batchChangeStock"
          :disabled="productSkuIds.length === 0"
          type="primary"
          >批量调整</Button
        >
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex == 'action'">
          <a class="mr10" @click="look(record)">查看明细</a>
          <a @click="changeStock(record)">调整库存</a>
        </template>
      </template>
    </proTable>
    <AddEditModal
      :width="700"
      :title="title"
      v-model:visible="visible"
      v-model:data="fromData"
      :loading="loading"
      @ok="changeOk"
      :columns="stockColumn"
      :cancelFunc="cancelFunc"
    />
  </pageTemplate>
</template>
<script lang="ts" setup name="Stock">
import { ref } from "vue";
import pageTemplate from "@/components/pageTemplate";
import { columnItem } from "@/@types/interface";
import { Button } from "ant-design-vue";
import proTable from "@/components/proTable";
import usePage from "@/hooks/page";
import { categoryTree } from "../../../api/goods/category";
import useAJAX from "@/hooks/ajax";
import { stockList } from "@/api/goods/stock";
import router from "@/router";
import AddEditModal from "@/components/AddEditModal.vue";
import { useStockChange } from "./hooks/useStockChange";

const { data: categoryTreeData } = useAJAX({ func: categoryTree });

//字段定义
const columns = ref<columnItem[]>([
  { title: "商品名称", dataIndex: "productName", required: true },
  {
    title: "商品规格",
    dataIndex: "skuSpecificationValues",
    notShowInAddOrEdit: true,
    required: true,
    notShowInSearch: true,
    customRender: ({ text }: { text: string }) => {
      const obj = JSON.parse(text) as any[];
      return obj
        .map((item) => {
          if (item) {
            let label = "";
            try {
              label = JSON.parse(Object.keys(item)[0]).label + ":";
            } catch {
              label = "";
            }
            return `${label}${Object.values(item)[0]}`;
          }
        })
        .join(",");
    },
  },
  { title: "商品货号", dataIndex: "productNo", required: true },
  {
    title: "商品SKU编码",
    dataIndex: "productSkuNo",
    required: true,
    notShowInSearch: true,
  },
  {
    title: "商品分类",
    dataIndex: "categoryInfo",
    type: "cascader",
    options: categoryTreeData,
    cascaderKeyArray: ["productCategoryPid", "productCategorySid"],
    required: true,
  },
  {
    title: "供应商名称",
    dataIndex: "productSupplierName",
    notShowInAddOrEdit: true,
    required: true,
  },
  {
    title: "现库存数量",
    dataIndex: "inventoryLeftNum",
    type: "number",
    notShowInSearch: true,
    required: true,
  },
  {
    title: "创建时间",
    dataIndex: "buildTime",
    type: "dateTimeRange",
    notShowInAddOrEdit: true,
    rangeDateKeyArray: ["buildStartTime", "buildEndTime"],
  },
  {
    title: "操作",
    dataIndex: "action",
    notShowInSearch: true,
    notShowInAddOrEdit: true,
    fixed: "right",
  },
]);

//table方法封装
const { tableLoading, pagination, tableData, changeParamsCleanPage, getData } =
  usePage({
    AJAXFunc: stockList,
  });

// 调整hook
const {
  visible,
  productSkuIds,
  title,
  loading,
  changeOk,
  changeStock,
  stockColumn,
  fromData,
  cancelFunc,
  batchChangeStock,
} = useStockChange([], getData);

// 查看
const look = (record: any) => {
  router.push({
    path: `/goods/stockChange/${record.productSkuNo}`,
    query: {
      productName: record.productName,
    },
  });
};
</script>

```

## 富文本编辑器封装

:::tip 富文本编辑器封装

- 使用 wangeditor 的 vue 版本开发
- 直接 v-model:value 使用
  :::

```Vue
<template>
  <div class="yeditor">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="{}"
      mode="default"
    />
    <Editor
      style="height: calc(100% - 100px); overflow-y: hidden"
      v-model="content"
      :defaultConfig="editorConfig"
      mode="default"
      @onCreated="handleCreated"
      @onChange="handleChange"
    />
  </div>
</template>
<script setup lang="ts">
import "@wangeditor/editor/dist/css/style.css";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue"; // 引入 css
import { shallowRef, ref, watch } from "vue";
import { upload } from "@/api";
const editorRef = shallowRef();
const editorConfig = {
  placeholder: "请输入内容...",
  MENU_CONF: {
    uploadImage: {
      async customUpload(file: File, insertFn: any) {
        const res = await upload(file);
        insertFn(res.data.data.url, res.data.data.name);
      },
    },
    uploadVideo: {
      async customUpload(file: File, insertFn: any) {
        const res = await upload(file);
        insertFn(res.data.data.url, res.data.data.name);
      },
    },
  },
};
const handleCreated = (editor: any) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};

const props = defineProps({
  value: {
    type: String,
    default: () => "",
  },
});

watch(props, (val) => {
  content.value = val.value;
});

const emits = defineEmits(["update:value"]);

//改变
const handleChange = (editor: any) => {
  emits("update:value", editor.getHtml());
};

const content = ref("");
</script>
<style lang="less">
.yeditor {
  border: 1px solid #ccc;
  height: calc(100% - 100px);
  height: 100%;
}
</style>

<!-- 使用 -->
<Editor v-model:value="editorData" />


```

## 全局弹窗封装

:::tip 全局弹窗封装

- 使用 ant design vue 的 Modal 和 Drawer 开发
- 可以轻松切换弹窗类型
- 可以自定义弹窗内容
  :::

```tsx
export default defineComponent({
  props: {
    width: {
      type: [Number, String],
      default: () => 1000,
    },
    visible: {
      type: Boolean,
      default: () => false,
    },
    title: {
      type: String,
      default: () => "",
    },
    onCancel: {
      type: Function,
      default: () => null,
    } as Prop<(any: any) => void>,
    onOk: {
      type: Function,
      default: () => null,
    } as Prop<(event: MouseEvent) => void>,
    confirmLoading: {
      type: Boolean,
      default: () => false,
    },
    useDrawer: {
      type: Boolean,
      default: () => false,
    },
    destroyOnClose: {
      type: Boolean,
      default: () => true,
    },
    noDrawerOrModal: {
      type: Boolean,
      default: () => false,
    },
  },
  setup(props, { slots }) {
    return () => {
      if (props.noDrawerOrModal && slots.default) {
        return slots.default();
      }
      if (props.useDrawer) {
        return (
          <Drawer
            width={props.width}
            destroyOnClose={props.destroyOnClose}
            visible={props.visible}
            title={props.title}
            footerStyle={{ textAlign: "right" }}
            onClose={props.onCancel}
            v-slots={{
              default: slots.default,
              footer: () => (
                <>
                  <Button class="mr-2" onClick={props.onCancel}>
                    取消
                  </Button>
                  <Button
                    loading={props.confirmLoading}
                    type="primary"
                    onClick={props.onOk}
                  >
                    确定
                  </Button>
                </>
              ),
            }}
          />
        );
      }
      return (
        <Modal
          title={props.title}
          width={props.width}
          destroyOnClose={props.destroyOnClose}
          visible={props.visible}
          onCancel={props.onCancel}
          onOk={props.onOk}
          confirmLoading={props.confirmLoading}
          v-slots={{
            default: slots.default,
          }}
        />
      );
    };
  },
});
```

## 全局表单封装

:::tip 全局表单封装

- 使用 ant design vue 的 Form 和上面的字段封装还有弹窗开发
- 可以轻松切换弹窗类型
- 轻松管理修改和新增
- 可以直接生成表单不用弹窗
- 只需要传入定义好字段和类型的数据即可
- 代码量极少

:::

```Vue
<template>
  <ProPanel
    :width="width"
    :visible="visible"
    :title="title"
    :destroyOnClose="true"
    @cancel="cancelFunc"
    @ok="submitFunc"
    :confirmLoading="loading"
    :use-drawer="useDrawer"
    :no-drawer-or-modal="noDrawerOrModal"
  >
    <Form ref="formref" layout="vertical" :model="formModel">
      <Row :gutter="16">
        <template v-for="item in columns" :key="item.dataIndex">
          <!-- 如果不显示或者满足条件的才显示 -->
          <Col
            v-if="
              !item.notShowInAddOrEdit &&
              (item.condition ? item.condition(formModel) : true)
            "
            :span="item.span ? item.span : colSpan"
          >
            <FormItem
              :name="item.dataIndex"
              :label="item.title"
              :rules="makeRule(item)"
            >
              <lookField
                :value="formModel[item.dataIndex]"
                v-bind="item"
                v-if="formModel.ylwType == 'look'"
              />
              <!-- 如果有插槽 -->
              <template v-else-if="item.slot">
                <slot
                  :name="item.slot"
                  :column="item"
                  :formModel="formModel"
                ></slot>
              </template>
              <!-- 如果是tree -->
              <ProField
                v-else-if="item.type == 'tree'"
                class="ant-input-affix-wrapper"
                v-model:selectedKeys="formModel[item.dataIndex]"
                v-model:checkedKeys="formModel[item.dataIndex]"
                v-bind="item"
              />
              <!-- 如果是switch,需要传递checked -->
              <ProField
                v-else-if="item.type == 'switch'"
                v-model:checked="formModel[item.dataIndex]"
                v-bind="item"
              />
              <!-- 只需要传递value -->
              <ProField
                v-else
                v-model:value="formModel[item.dataIndex]"
                v-bind="item"
                @change="
                  (...value) => {
                    item.onChangeValue
                      ? item.onChangeValue(formModel, ...value)
                      : null;
                  }
                "
              />
              <span v-if="item.tips" class="text-gray-500">{{
                item.tips
              }}</span>
            </FormItem>
          </Col>
        </template>
        <Col v-if="noDrawerOrModal" :span="colSpan">
          <Button type="default" @click="cancelFunc" class="mr-3">取消</Button>
          <Button type="primary" @click="submitFunc">提交</Button>
        </Col>
        <Col v-if="slots" :span="colSpan">
          <slot :formModel="formModel"></slot>
        </Col>
      </Row>
    </Form>
  </ProPanel>
</template>

<!-- 使用 -->
<AddEditModal
      :width="700"
      :title="title"
      v-model:visible="visible"
      v-model:data="fromData"
      :loading="loading"
      @ok="changeOk"
      :columns="stockColumn"
      :cancelFunc="cancelFunc"
    />
```

## 上传封装

:::tip 上传封装
- 基于 ant design vue 的 upload 组件封装
- 自定上传转换为地址 url 返回,多个就是字符串数组
- 使用 v-model:value 绑定数据
- 支持使用字符串和字符串数组回显
- 使用 tsx 开发
:::

```tsx
export default defineComponent({
  props: {
    value: {
      type: String,
      default: () => "",
    } as Prop<string>,
    title: {
      type: String,
      default: () => "上传文件",
    },
    loading: {
      type: Boolean,
      default: () => false,
    },
    onChange: {
      type: Function,
      default: () => () => null,
    },
  },
  emits: ["update:value"],
  setup(props, { emit, attrs }) {
    const fileList = ref<UploadFile[]>([]);
    const token = useToken();
    const str = ref("");
    const fileChange = (obj: any) => {
      const { fileList } = toRaw(obj);
      const fileArrStr = fileArrtoStrArr(fileList);
      str.value = fileArrStr;
      emit("update:value", fileArrStr);
    };

    watch(props, (val) => {
      if (val.value != "") {
        const { isAllDone, uploadFileArr } = strArrToUploadFileArr(val.value);
        if (isAllDone) {
          fileList.value = uploadFileArr;
        }
      } else if (val.value == "" && str.value != "") {
        fileList.value = [];
      }
    });

    // 是否显示上传按钮
    const isShowUpload = computed(
      () =>
        (attrs.multiple &&
          attrs.maxCount &&
          fileList.value.length < (attrs.maxCount as number)) ||
        fileList.value.length == 0
    );

    const beforeUpload = (file: File) => {
      // 获取文件后缀
      const fileExt = file.name.split(".").pop();
      // 重新生成文件名
      const fileName = guid() + "." + fileExt;
      const newFile = new File([file], fileName, { type: file.type });
      return Promise.resolve(newFile);
    };

    return () => {
      return (
        <Upload
          headers={{ Authorization: "Bearer " + token.token }}
          action={baseUrl + "file/upload"}
          name="file"
          v-model:file-list={fileList.value}
          onChange={fileChange}
          beforeUpload={beforeUpload}
        >
          {isShowUpload.value ? (
            attrs.listType != "picture-card" ? (
              <Button loading={props.loading}>
                {props.loading ? <LoadingOutlined /> : <UploadOutlined />}
                {props.title}
              </Button>
            ) : (
              <div>
                <PlusOutlined />
                <div style="margin-top: 8px">{props.title}</div>
              </div>
            )
          ) : null}
        </Upload>
      );
    };
  },
});
```
