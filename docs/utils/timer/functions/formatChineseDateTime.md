[**sunrise-utils**](../../../README.md)

***

[sunrise-utils](../../../modules.md) / [utils/timer](../README.md) / formatChineseDateTime

# Function: formatChineseDateTime()

> **formatChineseDateTime**(`date`): `string`

将时间值格式化为中文长日期时间字符串

## Parameters

### date

可解析的时间值（Date 实例或 ISO 字符串）

`string` | `Date`

## Returns

`string`

中文格式的日期时间字符串（YYYY年MM月DD日 HH:mm:ss）

## Remarks

支持 Date 实例和 ISO 格式字符串解析，自动处理时区转换
注意：月份显示会自动加 1（Date 对象月份从 0 开始计数）

## Example

```typescript
// 格式化当前时间
formatChineseDateTime(new Date());

@example
// 处理跨年日期
formatChineseDateTime('2024-01-01T00:00:00'); // "2024年01月01日 00:00:00"
```
