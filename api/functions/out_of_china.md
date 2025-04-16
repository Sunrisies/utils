[sunrise-utils](../globals.md) / out\_of\_china

# 函数: out\_of\_china()

> **out\_of\_china**(`lng`, `lat`): `boolean`

判断坐标是否在中国境外

## 参数

### lng

`number`

经度（WGS84坐标系）

### lat

`number`

纬度（WGS84坐标系）

## 返回

`boolean`

是否在境外（true表示境外坐标，不进行转换）

## 示例

```typescript
// 境外坐标示例
out_of_china(135.0, 35.0) // true
// 境内坐标示例 
out_of_china(116.4074, 39.9042) // false
```
