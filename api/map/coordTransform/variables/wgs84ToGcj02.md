[sunrise-utils](../../../modules.md) / [map/coordTransform](../index.md) / wgs84ToGcj02

# 变量: wgs84ToGcj02()

> `const` **wgs84ToGcj02**: (`lng`, `lat`) => \[`number`, `number`\] = `CoordinateTransform.wgs84ToGcj02`

将WGS84坐标系转换为GCJ02火星坐标系

## 参数

### lng

`number`

WGS84经度，范围-180到180

### lat

`number`

WGS84纬度，范围-90到90

## 返回

\[`number`, `number`\]

[经度, 纬度] 格式的GCJ02坐标数组

## 示例

```typescript
const [gcjLng, gcjLat] = wgs84ToGcj02(114.123, 22.456)
```
