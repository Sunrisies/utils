[sunrise-utils](../globals.md) / formatBytes

# 函数: formatBytes()

> **formatBytes**(`bytes`, `options`?): `string`

文件大小格式化工具

## 参数

### bytes

`number`

文件大小（字节数）

### options?

格式化配置选项

#### base

`1000` \| `1024`

进制基数（1024为二进制，1000为十进制）

#### digits

`null` \| `number`

小数位数（null为自动判断）

#### errorMessages

\{ `invalidNumber`: `string`; `negativeValue`: `string`; \}

错误信息本地化配置

#### errorMessages.invalidNumber

`string`

#### errorMessages.negativeValue

`string`

#### locale

`string` \| `string`[]

数字本地化设置

#### units

`string`[]

自定义单位数组

#### useIECUnits

`boolean`

是否使用IEC标准单位（KiB等）

## 返回

`string`

格式化后的文件大小字符串

## 备注

智能格式化文件大小，支持以下特性：
- 支持二进制（1024）和十进制（1000）计算方式
- 支持国际化数字和单位显示
- 智能处理数字精度
- 支持自定义单位系统
- 处理极限值和边界情况

## 抛出

当输入参数无效时抛出

## 抛出

当输入值超出范围时抛出

## 示例

```typescript
// 基本用法
formatBytes(1024) // "1 KB"

// 使用二进制单位
formatBytes(1024, { base: 1024, useIECUnits: true }) // "1 KiB"

// 本地化显示（中文）
formatBytes(1024, { 
  locale: 'zh-CN',
  units: ['字节', 'KB', 'MB', 'GB'],
  errorMessages: {
    invalidNumber: '必须传入有效数字',
    negativeValue: '文件大小不能为负数'
  }
}) // "1 KB"

// 自定义精度
formatBytes(1234, { digits: 2 }) // "1.21 KB"
```
