[sunrise-utils](../globals.md) / distanceLngLat

# 函数: distanceLngLat()

> **distanceLngLat**(`lat1`, `lon1`, `lat2`, `lon2`): [`Point`](../type-aliases/Point.md)

计算两个经纬度之间的距离，并返回中心点经纬度。

## 参数

### lat1

`number`

第一个点的纬度，范围必须在 -90 到 90 之间。

### lon1

`number`

第一个点的经度，范围必须在 -180 到 180 之间。

### lat2

`number`

第二个点的纬度，范围必须在 -90 到 90 之间。

### lon2

`number`

第二个点的经度，范围必须在 -180 到 180 之间。

## 返回

[`Point`](../type-aliases/Point.md)

返回一个对象，其中包含：
- `lon`：中心点的经度。
- `lat`：中心点的纬度。
- `distance`：距离（单位：米）。

## 抛出

如果输入的经纬度不在合法范围内，抛出错误。

## 示例

```ts
// 示例：计算两个经纬度之间的距离
const result = distanceLngLat(39.9042, 116.4074, 31.2304, 121.4737);
console.log('中心点经纬度:', { lon: result.lon, lat: result.lat });
console.log('距离:', result.distance, '米');
```
