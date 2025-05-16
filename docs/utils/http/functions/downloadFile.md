[**sunrise-utils**](../../../README.md)

***

[sunrise-utils](../../../modules.md) / [utils/http](../README.md) / downloadFile

# Function: downloadFile()

> **downloadFile**(`url`, `filename`): `Promise`\<`void`\>

从指定 URL 下载文件并保存到本地

## Parameters

### url

`string`

文件下载地址（需符合 URL 规范）

### filename

`string`

保存时使用的文件名（需包含扩展名）

## Returns

`Promise`\<`void`\>

## Example

```typescript
// 下载图片文件
await downloadFile('https://example.com/photo.jpg', 'vacation-photo.jpg');
```
