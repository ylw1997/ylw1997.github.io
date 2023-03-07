# JWT

:::tip jwt

- jwt 是json web token的缩写，是一种基于token的身份认证方式
- jwt的构成：header.payload.signature
- header：包含了jwt的类型和加密算法
- payload：包含了jwt的具体内容，一般包含了用户的id，用户名，过期时间等
- signature：由header和payload加密后生成的签名
:::

## 1,引入依赖

```xml
<!--        解决jwt java.lang.NoClassDefFoundError: javax/xml/bind/DatatypeConverter 错误-->
        <dependency>
            <groupId>javax.xml.bind</groupId>
            <artifactId>jaxb-api</artifactId>
            <version>2.3.1</version>
        </dependency>
<!--        jwt-->
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt</artifactId>
            <version>0.9.1</version>
        </dependency>
```

## 2,配置jwt

```yaml
jwt:
  secret: YLW_JWT_KEY
  expire: 604800 # 7天，s为单位
```

## 3,编写jwt工具类

```java

// JwtUtil.java

@Component
public class JwtUtil {
    @Value("${jwt.secret}")
    private String JWT_KEY;
    @Value("${jwt.expire}")
    public Long JWT_TTL;

    /**
     *  获取jwt中的uuid
     * @return uuid
     */
    public static String getUuid(){
        return UUID.randomUUID().toString().replaceAll("-", "");
    }
    /**
     *  生成jwt
     * @param subject 主题
     * @return  jwt字符串
     */
    public String createJwt(String subject){
        return getJwtBuilder(subject, null, getUuid()).compact();
    }

    /**
     *  生成jwt
     * @param subject 主题
     * @param ttlMillis 过期时间
     * @return jwt字符串
     */
    public String createJwt(String subject,Long ttlMillis) {
        String uuid = getUuid();
        return getJwtBuilder(subject, ttlMillis, uuid).compact();
    }

    /**
     * 获取jwt builder
     * @param subject 主题
     * @param ttlMillis 过期时间
     * @param uuid uuid
     * @return jwt builder
     */
    private  JwtBuilder getJwtBuilder(String subject, Long ttlMillis, String uuid) {
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;
        SecretKey secretKey = generalKey();
        long nowMillis = System.currentTimeMillis();
        Date now = new Date(nowMillis);
        if (ttlMillis == null) {
            ttlMillis = JWT_TTL;
        }
        Date exp = new Date(nowMillis + ttlMillis);
        return Jwts.builder()
                // 签发者
                .setIssuer("yangliwei")
                // jwt的唯一标识
                .setId(uuid)
                // 签发时间
                .setIssuedAt(now)
                // 主题
                .setSubject(subject)
                // 签名算法以及密匙
                .signWith(signatureAlgorithm, secretKey)
                // 过期时间
                .setExpiration(exp);
    }

    /**
     * 生成加密后base64秘钥 secretKey
     * @return secretKey
     */
    public SecretKey generalKey(){
        byte[] decode = Base64.getUrlDecoder().decode(JWT_KEY);
        return new SecretKeySpec(decode, 0, decode.length, "AES");
    }


    /**
     * 解析jwt
     * @param jwt jwt
     * @return Claims
     */
    public Claims parseJwt(String jwt) throws Exception {
        SecretKey secretKey = generalKey();
        return Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(jwt)
                .getBody();
    }

    /**
     * 判断jwt是否过期
     * @param claims jwt中的claims
     * @return 是否过期
     */
    public boolean isTokenExpired(Claims claims) {
        return claims.getExpiration().before(new Date());
    }

}
```

## 5,测试

```java

@Resource
    JwtUtil jwtUtil;

@Test
    void testJwt() throws Exception {
        String ylw = jwtUtil.createJwt("ylw");
        Map<String, Object> stringObjectMap = new HashMap<>();
        stringObjectMap.put("token", ylw);
        Claims claims = jwtUtil.parseJwt(ylw);
        stringObjectMap.put("claims", claims);
        System.err.println(stringObjectMap);
    }
```

> 测试结果

```json
{
    "claims": {
      "iss": "yangliwei",
      "jti": "2d6bac91ac0c4d4595cce0afe82ae112",
      "iat": 1678174289,
      "sub": "ylw",
      "exp": 1678174894
    },
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ5YW5nbGl3ZWkiLCJqdGkiOiIyZDZiYWM5MWFjMGM0ZDQ1OTVjY2UwYWZlODJhZTExMiIsImlhdCI6MTY3ODE3NDI4OSwic3ViIjoieWx3IiwiZXhwIjoxNjc4MTc0ODk0fQ.5oxxbQSnfp--x7XNCJVSKwXf95JE7cRRpbrJIyrQjbs"
  }
```
