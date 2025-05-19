[**sunrise-utils**](../../../README.md)

***

[sunrise-utils](../../../modules.md) / [map/coordinates](../README.md) / getCenterLonLat

# 函数: getCenterLonLat()

> **getCenterLonLat**(`oneLon`, `oneLat`, `twoLon`, `twoLat`): \[`number`, `number`\]

计算两个经纬度之间的中心经纬度。

## 参数

### oneLon

`number`

第一个点的经度（-180 到 180 之间）

### oneLat

`number`

第一个点的纬度（-90 到 90 之间）

### twoLon

`number`

第二个点的经度（-180 到 180 之间）

### twoLat

`number`

第二个点的纬度（-90 到 90 之间）

## 返回

\[`number`, `number`\]

中心点的经纬度数组 [经度, 纬度]

## 示例

```typescript
// 计算北京和上海之间的中心点
const center = getCenterLonLat(116.4074, 39.9042, 121.4737, 31.2304);
console.log('中心点经纬度:', center); // 输出 [118.94055, 35.5673]
```
