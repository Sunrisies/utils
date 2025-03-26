[sunrise-utils](../globals.md) / formatChineseDateTime

# 函数: formatChineseDateTime()

> **formatChineseDateTime**(`date`): `string`

将 Date 对象格式化为中文环境的长日期时间字符串

## 参数

### date

要格式化的日期对象

`string` | `Date`

## 返回

`string`

- 格式化后的日期时间字符串（格式：YYYY年MM月DD日 HH:mm:ss）

## 示例

```ts
const now = new Date();
const formattedDateTime = formatChineseDateTime(now);
console.log(formattedDateTime); // 输出类似 "2023年10月1日 12:34:56"
```
