[**sunrise-utils**](../../../README.md)

***

[sunrise-utils](../../../modules.md) / [utils/date](../README.md) / getRelativeTime

# 函数: getRelativeTime()

> **getRelativeTime**(`date`, `options?`): `string`

相对时间描述工具

## 参数

### date

目标日期或时间戳

`string` | `number` | `Date`

### options?

[`RelativeTimeOptions`](../interfaces/RelativeTimeOptions.md)

格式化配置选项对象

## 返回

`string`

格式化后的相对时间描述字符串

## 备注

智能格式化相对时间，支持以下特性：
- 支持多种时间单位（秒、分、时、天、周、月、年）
- 支持中英文国际化显示
- 支持未来时间和过去时间
- 支持自定义文案

## 抛出

当输入的日期参数无效时抛出

## 示例

```typescript
// 基本用法（中文）
getRelativeTime(new Date("2024-01-01")); // "x天前"

// 英文显示
getRelativeTime(date, { locale: "en-US" }); // "x days ago"

// 自定义文案（会覆盖默认语言设置）
getRelativeTime(date, {
  messages: {
    minutes: "{count} mins",
    past: "{time} before"
  }
});
```
