# upload

## 配置yml

```yml
spring:
    web:
    resources:
      static-locations: classpath:/META-INF/resources/,classpath:/resources/,classpath:/static/,classpath:/public/,file:${web.upload-path}

# 上传文件路径
web:
  upload-path: D:/upload/

```

## 上传类

```java
// FileUploadController.java
@RestController
public class FileUploadController {

    @Value("${web.upload-path}")
    private String uploadPath;

    SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd/");

    @PostMapping("/upload")
    public AjaxResponse upload(MultipartFile file) throws IOException {

        //创建文件夹
        String format = sdf.format(new Date());
        File folder = new File(uploadPath + format);
        if (!folder.isDirectory()) {
            folder.mkdirs();
        }
        // 重命名文件
        String oldName = file.getOriginalFilename();
        String newName = UUID.randomUUID()
                + oldName.substring(oldName.lastIndexOf("."), oldName.length());

        // 保存文件
        file.transferTo(new File(folder, newName));

        // 返回文件路径
        String url = format + newName;
        return AjaxResponse.success(url);
    }
}
```

## 查看上传文件

```html
http://192.168.0.177:8080/2023/03/02/c3da18f0-728a-4572-ad19-28621c1f89f4.ico
```
