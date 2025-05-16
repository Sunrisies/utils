[**sunrise-utils**](../../../README.md)

***

[sunrise-utils](../../../modules.md) / [utils/images](../README.md) / preloadAndCacheImage

# Function: preloadAndCacheImage()

> **preloadAndCacheImage**(`imageUrl`): `Promise`\<`HTMLImageElement`\>

预加载并缓存图片资源。

## Parameters

### imageUrl

`string`

图片资源的URL

## Returns

`Promise`\<`HTMLImageElement`\>

返回一个Promise，该Promise在图片加载完成后解析为一个包含HTMLImageElement对象

## Example

```typescript
// 示例：预加载并缓存图片
preloadAndCacheImage('https://example.com/image.jpg')
  .then((image) =\> {
    console.log('图片加载成功', image);
  \})
  .catch((error) =\> {
    console.error('图片加载失败', error);
  \});
```
