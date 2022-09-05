# 加密解密

## RSA非对称加密

:::tip 前端
* 前端这里使用的是`jsencrypt`库，使用`npm install jsencrypt`安装
* 一般是在前端使用公钥加密，后端使用私钥解密
* 生成公钥和私钥的方法可以参考[这里](http://travistidwell.com/jsencrypt/demo/index.html)
* 下面是代码示例
:::

```ts
import JSEncrypt from "jsencrypt";

const publicKey = `-----BEGIN PUBLIC KEY-----
你的公钥
-----END PUBLIC KEY-----`;

// 加密方法
export const Encrypt = (str: string) => {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  return encrypt.encrypt(str);
};

// 这个一般是后端使用
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
你的私钥
-----END RSA PRIVATE KEY-----`;

// 解密方法
export const Decrypt = (str: string) => {
  const decrypt = new JSEncrypt();
  decrypt.setPrivateKey(privateKey);
  return decrypt.decrypt(str);
};

```

## 超长加密

:::tip 前端
*  超长加密使用 encryptlong 库 ，使用`npm install encryptlong`安装
* 和原生加密只有一个地方不一样,原生是`decrypt`,这里是`decryptLong`
*  使用方法如下
:::

```ts{4}
export const Encrypt = (str: string) => {
  const encryptobj = new encrypt();
  encryptobj.setPublicKey(publicKey);
  return encryptobj.encryptLong(str);
};
```