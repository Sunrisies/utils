[**sunrise-utils**](../../../README.md)

***

[sunrise-utils](../../../modules.md) / [utils/timer](../README.md) / convertTime

# Function: convertTime()

> **convertTime**(`duration`, `type`): `string`

将秒数转换为易读的时长字符串

## Parameters

### duration

`number`

以秒为单位的时长（必须为数字类型）

### type

`"en"` | `"zh"`

## Returns

`string`

格式化后的时长字符串（示例：3天2小时5分 / 45.30秒）

## Remarks

支持从秒到天的单位转换，自动选择最合适的单位组合
注意：超过24小时会显示天数，超过60分钟显示小时，以此类推

## Throws

当参数不是数字类型时抛出错误

## Examples

```typescript
// 基本用法
convertTime(3661); // "1小时1分1秒"
```

```
// 小数处理
convertTime(45.5); // "45.50秒"
```

```typescript
convertTime(100000, 'en'); // "11d 4h 20m"
```
