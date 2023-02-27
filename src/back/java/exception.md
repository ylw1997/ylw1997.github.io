# Exception 异常处理

:::tip 简介

- 异常处理是Java中的一个重要的内容
- 如果后端直接抛出异常,前端是无法捕获的
- 所以需要在后端进行异常处理,然后返回给前端
- 统一的异常处理,可以让前端更加方便的处理异常
:::

## 1,设计异常枚举类型

```java
// ExceptionEnum.java

public enum CustomExceptionType {

    /**
     * 用户输入异常
     */
    USER_INPUT_ERROR(400, "用户输入异常"),
    /**
     * 系统服务异常
     */
    SYSTEM_ERROR(500, "系统服务异常"),
    /**
     * 其他未知异常
     */
    OTHER_ERROR(999, "其他未知异常");

    /**
     * 获取错误码
     * @param code 错误码
     * @param msg 错误描述
     */
    CustomExceptionType(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    private int code;
    private String msg;

    public int getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }
}
```

## 2,定义异常类

```java
// CustomException.java
public class CustomException extends RuntimeException{
    private int code;
    private String msg;

    private CustomException(){};

    public CustomException(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public CustomException(CustomExceptionType exceptionType) {
        this.code = exceptionType.getCode();
        this.msg = exceptionType.getMsg();
    }

    public CustomException(CustomExceptionType exceptionType, String msg) {
        this.code = exceptionType.getCode();
        this.msg = msg;
    }

    public int getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }
}
```

## 3,修改返回结果

```java
// AjaxResult.java
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
        resultBean.setCode(CustomExceptionType.SYSTEM_ERROR.getCode());
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

    public static AjaxResponse error(CustomException e){
        AjaxResponse resultBean = new AjaxResponse();
        resultBean.setOk(false);
        resultBean.setCode(e.getCode());
        resultBean.setMessage(e.getMsg());
        return resultBean;
    }

    public static AjaxResponse error(CustomException e, String message, Object data){
        AjaxResponse resultBean = new AjaxResponse();
        resultBean.setOk(false);
        resultBean.setCode(e.getCode());
        resultBean.setMessage(message);
        resultBean.setData(data);
        return resultBean;
    }

    public static AjaxResponse error(Object data){
        AjaxResponse resultBean = new AjaxResponse();
        resultBean.setOk(false);
        resultBean.setCode(CustomExceptionType.SYSTEM_ERROR.getCode());
        resultBean.setMessage(CustomExceptionType.SYSTEM_ERROR.getMsg());
        resultBean.setData(data);
        return resultBean;
    }
}
```

## 4,数据校验异常

```java

// User.java

@Data
public class User {
    @NotNull(message = "用户名不能为空")
    private String username;
    @NotNull(message = "密码不能为空")
    private String password;
}
```

## 5,统一异常处理

```java
// WebExceptionHandler.java
@ControllerAdvice
public class WebExceptionHandler {
    @ExceptionHandler(value = Exception.class)
    @ResponseBody
    public AjaxResponse exceptionHandler(Exception e){
        if (e instanceof CustomException){
            return AjaxResponse.error((CustomException) e);
        }else {
            return AjaxResponse.error();
        }
    }

    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    @ResponseBody
    public AjaxResponse methodArgumentNotValidException(MethodArgumentNotValidException e){
        BindingResult bindingResult = e.getBindingResult();
        if (bindingResult.hasErrors()){
            List<ObjectError> allErrors = bindingResult.getAllErrors();
            ObjectError objectError = allErrors.get(0);
            String defaultMessage = objectError.getDefaultMessage();
            return AjaxResponse.error(new CustomException(CustomExceptionType.USER_INPUT_ERROR,defaultMessage));
        }
        return AjaxResponse.error();
    }

    @ExceptionHandler(value = BindException.class)
    @ResponseBody
    public AjaxResponse bindException(BindException e){
        BindingResult bindingResult = e.getBindingResult();
        if (bindingResult.hasErrors()){
            List<ObjectError> allErrors = bindingResult.getAllErrors();
            ObjectError objectError = allErrors.get(0);
            String defaultMessage = objectError.getDefaultMessage();
            return AjaxResponse.error(new CustomException(CustomExceptionType.USER_INPUT_ERROR,defaultMessage));
        }
        return AjaxResponse.error();
    }
}

```
