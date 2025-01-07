[sunrise-utils](../globals.md) / preloadAndCacheImage

# 函数: preloadAndCacheImage()

> **preloadAndCacheImage**(`imageUrl`): `Promise`\<`HTMLImageElement`\>

预加载并缓存图片资源。

## 参数

### imageUrl

`string`

图片资源的URL。

## 返回

`Promise`\<`HTMLImageElement`\>

- 返回一个Promise，该Promise在图片加载完成后解析为一个包含HTMLImageElement对象。

## 示例

```ts
// 示例：预加载并缓存图片
preloadAndCacheImage('https://example.com/image.jpg')
  .then((image) => {
    console.log('图片加载成功', image);
  })
  .catch((error) => {
    console.error('图片加载失败', error);
  });
```
