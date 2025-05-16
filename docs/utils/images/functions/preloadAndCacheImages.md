[**sunrise-utils**](../../../README.md)

***

[sunrise-utils](../../../modules.md) / [utils/images](../README.md) / preloadAndCacheImages

# Function: preloadAndCacheImages()

> **preloadAndCacheImages**(`imageUrls`): `Promise`\<`HTMLImageElement`[]\>

预加载并缓存一组图片资源。

## Parameters

### imageUrls

`string`[]

图片资源的URL数组

## Returns

`Promise`\<`HTMLImageElement`[]\>

返回一个Promise，该Promise在所有图片加载完成后解析为一个包含HTMLImageElement对象的数组

## Example

```typescript
// 示例：预加载并缓存一组图片
preloadAndCacheImages(['https://example.com/image1.jpg', 'https://example.com/image2.jpg'])
  .then((images) =\> {
    console.log('所有图片加载成功', images);
  \})
  .catch((error) =\> {
    console.error('图片加载失败', error);
  \});
```
