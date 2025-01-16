[sunrise-utils](../globals.md) / downloadFile

# 函数: downloadFile()

> **downloadFile**(`url`, `filename`): `Promise`\<`void`\>

从指定 URL 下载文件并保存为指定文件名。

## 参数

### url

`string`

要下载的文件的 URL。

### filename

`string`

保存文件时的名称（包括文件扩展名）。

## 返回

`Promise`\<`void`\>

返回一个 Promise，文件下载成功时解析。

## 抛出

如果文件无法获取或下载失败，将抛出错误。

## 示例

```typescript
// 下载图片
downloadFile('https://example.com/image.png', 'my-image.png')
  .then(() => console.log('图片下载成功'))
  .catch((error) => console.error('下载图片失败:', error));

// 下载 PDF
downloadFile('https://example.com/document.pdf', 'my-document.pdf')
  .then(() => console.log('PDF 下载成功'))
  .catch((error) => console.error('下载 PDF 失败:', error));
```
