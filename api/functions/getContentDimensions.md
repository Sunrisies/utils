[sunrise-utils](../globals.md) / getContentDimensions

# 函数: getContentDimensions()

> **getContentDimensions**(`elementId`): `Error` \| \{ `height`: `number`; `width`: `number`; \}

获取指定元素ID的内容区域（排除内边距padding）的尺寸。

## 参数

### elementId

`string`

要获取尺寸的元素的ID。

## 返回

`Error` \| \{ `height`: `number`; `width`: `number`; \}

- 返回一个包含width和height的对象，如果找不到元素或无法获取计算样式则返回null。

## 示例

```ts
// 示例：获取ID为 'myElement' 的元素的内容区域尺寸
const dimensions = getContentDimensions('myElement')
if (dimensions) {
  console.log('内容区域宽度:', dimensions.width)
  console.log('内容区域高度:', dimensions.height)
} else {
  console.error('无法获取元素的尺寸')
}
```
