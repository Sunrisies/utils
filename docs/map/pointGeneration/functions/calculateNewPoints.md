[**sunrise-utils**](../../../README.md)

***

[sunrise-utils](../../../modules.md) / [map/pointGeneration](../README.md) / calculateNewPoints

# Function: calculateNewPoints()

> **calculateNewPoints**(`centerPoint`): \[`number`, `number`\][]

计算以给定点为中心，在四个方向扩展指定距离的新坐标点

## Parameters

### centerPoint

[`Point`](../../types/type-aliases/Point.md)

包含中心点经纬度和距离的对象

## Returns

\[`number`, `number`\][]

四个新点的经纬度坐标数组，按顺时针方向排列

## Example

```typescript
// 在中心点周围生成四个坐标点
const newPoints = calculateNewPoints({
  lon: 113.5930592,
  lat: 33.4148429,
  distance: 1
});
console.log(newPoints); // 输出四个坐标数组
```
