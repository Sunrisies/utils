[sunrise-utils](../globals.md) / conversionTime

# 函数: conversionTime()

> **conversionTime**(`time`): `string`

时间戳转换为日期字符串。

## 参数

### time

`number`

时间戳，单位为秒。

## 返回

`string`

- 返回格式化的日期字符串，格式为 'YYYY年MM月DD日HH时MM分'。

## 示例

```ts
// 示例：将时间戳 1633072800 转换为日期字符串
const dateString = conversionTime(1633072800)
console.log(dateString) // 输出类似 '2021年10月1日00时00分'
```
