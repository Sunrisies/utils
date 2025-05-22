[sunrise-utils](../globals.md) / downloadFile

# 函数: downloadFile()

> **downloadFile**(`url`, `filename`): `Promise`\<`void`\>

从指定 URL 下载文件并保存到本地

## 参数

### url

`string`

文件下载地址（需符合 URL 规范）

### filename

`string`

保存时使用的文件名（需包含扩展名）

## 返回

`Promise`\<`void`\>

## 示例

```typescript
// 下载图片文件
await downloadFile('https://example.com/photo.jpg', 'vacation-photo.jpg');
```
