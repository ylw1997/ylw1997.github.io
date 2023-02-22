# CRUD 基本

## 整合Mybatis plus

### 引入依赖

```xml

<!--mybatis plus-->
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
            <version>3.5.3.1</version>
        </dependency>

<!--mysql-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>

```

## 定义实体类

```java
@Data
public class PrdBrand implements Serializable {
    private static final long serialVersionUID = 922377947656335061L;
    
    private Integer id;
    /**
     * 品牌名称
     */
    private String brandName;
    /**
     * 品牌图标
     */
    private String brandImage;
    
    private String brandIntroduction;
    /**
     * 状态
     */
    private Integer status;
    /**
     * 创建时间
     */
    private Date creationTime;
    /**
     * 创建人
     */
    private String createdBy;
    /**
     * 最后更新时间
     */
    private Date lastUpdateTime;
    /**
     * 最后更新人
     */
    private String lastUpdatedBy;
    /**
     * 是否删除状态，默认为1，非删除；0为已删除
     */
    private Integer enabledFlag;
    /**
     * 备注
     */
    private String remark;

}

```

## 定义服务接口

```java
public interface PrdBrandService {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    PrdBrand queryById(Integer id);

    /**
     * 分页查询
     *
     * @param prdBrand 筛选条件
     * @param page      分页对象
     * @return 查询结果
     */
    IPage<PrdBrand> queryByPage(PrdBrand prdBrand, IPage<PrdBrand> page);

    /**
     * 新增数据
     *
     * @param prdBrand 实例对象
     * @return 实例对象
     */
    PrdBrand insert(PrdBrand prdBrand);

    /**
     * 修改数据
     *
     * @param prdBrand 实例对象
     * @return 实例对象
     */
    PrdBrand update(PrdBrand prdBrand);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    boolean deleteById(Integer id);

}
```

## 定义服务实现类

```java
@Service("prdBrandService")
public class PrdBrandServiceImpl implements PrdBrandService {
    @Resource
    private PrdBrandDao prdBrandDao;

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    @Override
    public PrdBrand queryById(Integer id) {
        return this.prdBrandDao.queryById(id);
    }

    @Override
    public IPage<PrdBrand> queryByPage(PrdBrand prdBrand, IPage<PrdBrand> page) {
        return this.prdBrandDao.queryAllByLimit(prdBrand,page);
    }


    /**
     * 新增数据
     *
     * @param prdBrand 实例对象
     * @return 实例对象
     */
    @Override
    public PrdBrand insert(PrdBrand prdBrand) {
        this.prdBrandDao.insert(prdBrand);
        return prdBrand;
    }

    /**
     * 修改数据
     *
     * @param prdBrand 实例对象
     * @return 实例对象
     */
    @Override
    public PrdBrand update(PrdBrand prdBrand) {
        this.prdBrandDao.update(prdBrand);
        return this.queryById(prdBrand.getId());
    }

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    @Override
    public boolean deleteById(Integer id) {
        return this.prdBrandDao.deleteById(id) > 0;
    }
}

```

## 定义dao接口

```java

public interface PrdBrandDao {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    PrdBrand queryById(Integer id);

    /**
     * 查询指定行数据
     *
     * @param prdBrand 查询条件
     * @param page         分页对象
     * @return 对象列表
     */
    IPage<PrdBrand> queryAllByLimit(PrdBrand prdBrand, IPage<PrdBrand> page);

    /**
     * 统计总行数
     *
     * @param prdBrand 查询条件
     * @return 总行数
     */
    long count(PrdBrand prdBrand);

    /**
     * 新增数据
     *
     * @param prdBrand 实例对象
     * @return 影响行数
     */
    int insert(PrdBrand prdBrand);

    /**
     * 批量新增数据（MyBatis原生foreach方法）
     *
     * @param entities List<PrdBrand> 实例对象列表
     * @return 影响行数
     */
    int insertBatch(@Param("entities") List<PrdBrand> entities);

    /**
     * 批量新增或按主键更新数据（MyBatis原生foreach方法）
     *
     * @param entities List<PrdBrand> 实例对象列表
     * @return 影响行数
     * @throws org.springframework.jdbc.BadSqlGrammarException 入参是空List的时候会抛SQL语句错误的异常，请自行校验入参
     */
    int insertOrUpdateBatch(@Param("entities") List<PrdBrand> entities);

    /**
     * 修改数据
     *
     * @param prdBrand 实例对象
     * @return 影响行数
     */
    int update(PrdBrand prdBrand);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 影响行数
     */
    int deleteById(Integer id);

}

```

## 定义controller

```java
@Slf4j
@RestController
@RequestMapping("prdBrand")
public class PrdBrandController {
    /**
     * 服务对象
     */
    @Resource
    private PrdBrandService prdBrandService;

    /**
     * 分页查询
     *
     * @param prdBrand 筛选条件
     * @param page     分页对象
     * @param size     分页对象
     * @return 查询结果
     */
    @GetMapping
    public AjaxResponse queryByPage(@RequestBody(required = false) PrdBrand prdBrand, @RequestParam Integer page, @RequestParam Integer size) {
        IPage<PrdBrand> prdBrandPage = new Page<>(page, size);
        return AjaxResponse.success(this.prdBrandService.queryByPage(prdBrand, prdBrandPage));
    }

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @GetMapping("{id}")
    public AjaxResponse queryById(@PathVariable("id") Integer id) {
        return AjaxResponse.success(this.prdBrandService.queryById(id));
    }

    /**
     * 新增数据
     *
     * @param prdBrand 实体
     * @return 新增结果
     */
    @PostMapping
    public AjaxResponse add(@RequestBody(required = false) PrdBrand prdBrand) {
        return AjaxResponse.success(this.prdBrandService.insert(prdBrand));
    }

    /**
     * 编辑数据
     *
     * @param prdBrand 实体
     * @return 编辑结果
     */
    @PutMapping
    public AjaxResponse edit(@RequestBody(required = false) PrdBrand prdBrand) {
        //        判断id是否为空
        if (prdBrand.getId() == null) {
            return AjaxResponse.error("id不能为空");
        }
        return AjaxResponse.success(this.prdBrandService.update(prdBrand));
    }

    /**
     * 删除数据
     *
     * @param id 主键
     * @return 删除是否成功
     */
    @DeleteMapping("/{id}")
    public AjaxResponse deleteById( @PathVariable Integer id) {
        return AjaxResponse.success(this.prdBrandService.deleteById(id));
    }

}

```

## 定义统一返回结果

```java
@Data
public class AjaxResponse {
    private boolean isOk;
    private int code;
    private String message;
    private Object data;

    private AjaxResponse(){}

    public static AjaxResponse success(){
        AjaxResponse resultBean = new AjaxResponse();
        resultBean.setOk(true);
        resultBean.setCode(200);
        resultBean.setMessage("success");
        return resultBean;
    }

    public static AjaxResponse success(Object data){
        AjaxResponse resultBean = new AjaxResponse();
        resultBean.setOk(true);
        resultBean.setCode(200);
        resultBean.setMessage("success");
        resultBean.setData(data);
        return resultBean;
    }

    public static AjaxResponse success(String message){
        AjaxResponse resultBean = new AjaxResponse();
        resultBean.setOk(true);
        resultBean.setCode(200);
        resultBean.setMessage(message);
        return resultBean;
    }

    public static AjaxResponse success(String message, Object data){
        AjaxResponse resultBean = new AjaxResponse();
        resultBean.setOk(true);
        resultBean.setCode(200);
        resultBean.setMessage(message);
        resultBean.setData(data);
        return resultBean;
    }

    public static AjaxResponse error(){
        AjaxResponse resultBean = new AjaxResponse();
        resultBean.setOk(false);
        resultBean.setCode(500);
        resultBean.setMessage("error");
        return resultBean;
    }

    public static AjaxResponse error(String message){
        AjaxResponse resultBean = new AjaxResponse();
        resultBean.setOk(false);
        resultBean.setCode(500);
        resultBean.setMessage(message);
        return resultBean;
    }

    public static AjaxResponse error(int code, String message){
        AjaxResponse resultBean = new AjaxResponse();
        resultBean.setOk(false);
        resultBean.setCode(code);
        resultBean.setMessage(message);
        return resultBean;
    }

    public static AjaxResponse error(int code, String message, Object data){
        AjaxResponse resultBean = new AjaxResponse();
        resultBean.setOk(false);
        resultBean.setCode(code);
        resultBean.setMessage(message);
        resultBean.setData(data);
        return resultBean;
    }

    public static AjaxResponse error(Object data){
        AjaxResponse resultBean = new AjaxResponse();
        resultBean.setOk(false);
        resultBean.setCode(500);
        resultBean.setMessage("error");
        resultBean.setData(data);
        return resultBean;
    }
}
```
