[sunrise-utils](../globals.md) / calculateNewPoints

# 函数: calculateNewPoints()

> **calculateNewPoints**(`centerPoint`): \[`number`, `number`\][]

计算以给定点为中心，距离为 `distance` 的四个新点的坐标

## 参数

### centerPoint

[`Point`](../type-aliases/Point.md)

包含中心点纬度、经度和距离的对象

## 返回

\[`number`, `number`\][]

四个新点的坐标数组，格式为 [[经度1, 纬度1], [经度2, 纬度2], ...]

## 作者

朝阳

## 示例

```ts
const centerLat = 33.4148429; // 中心点纬度
const centerLon = 113.5930592; // 中心点经度
const distance = 1; // 距离（米）
const newPoints = calculateNewPoints({lon: centerLon, lat: centerLat, centerLon, distance});
console.log(newPoints);
// 输出结果：
// [
//   [113.5930699741221, 33.414842899999535], // 第一个点
//   [113.5930592, 33.41483390678393],        // 第二个点
//   [113.5930484258779, 33.414842899999535], // 第三个点
//   [113.5930592, 33.41485189321607]         // 第四个点
// ]
```
