[**sunrise-utils**](../../../README.md)

***

[sunrise-utils](../../../modules.md) / [map/distance](../README.md) / distanceLngLat

# Function: distanceLngLat()

> **distanceLngLat**(`lat1`, `lon1`, `lat2`, `lon2`): [`Point`](../../types/type-aliases/Point.md)

计算两个经纬度之间的距离，并返回中心点经纬度。

## Parameters

### lat1

`number`

第一个点的纬度（-90 到 90 之间）

### lon1

`number`

第一个点的经度（-180 到 180 之间）

### lat2

`number`

第二个点的纬度（-90 到 90 之间）

### lon2

`number`

第二个点的经度（-180 到 180 之间）

## Returns

[`Point`](../../types/type-aliases/Point.md)

包含中心点坐标和距离的对象

## Example

```typescript
// 计算北京到上海的经纬度距离
const result = distanceLngLat(39.9042, 116.4074, 31.2304, 121.4737);
console.log('中心点:', result.lon, result.lat);
console.log('距离:', result.distance + '米'); 
```
