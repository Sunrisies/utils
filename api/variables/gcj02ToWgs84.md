[sunrise-utils](../globals.md) / gcj02ToWgs84

# 变量: gcj02ToWgs84()

> `const` **gcj02ToWgs84**: (`lng`, `lat`) => \[`number`, `number`\] = `CoordinateTransform.gcj02ToWgs84`

将GCJ02火星坐标系转换为WGS84坐标系

## 参数

### lng

`number`

GCJ02经度，范围-180到180

### lat

`number`

GCJ02纬度，范围-90到90

## 返回

\[`number`, `number`\]

[经度, 纬度] 格式的WGS84坐标数组

## 示例

```typescript
const [wgsLng, wgsLat] = gcj02ToWgs84(114.123, 22.456)
```
