[sunrise-utils](../globals.md) / GenRandStrResult

# 类型别名: GenRandStrResult\<T\>

> **GenRandStrResult**\<`T`\>: `T` *extends* `number` ? `string` : `Error`

根据传入的参数类型生成随机字符串或返回错误。
- 如果传入的参数是 `number` 类型且大于 0，返回生成的随机字符串。
- 如果传入的参数不是 `number` 类型或小于等于 0，返回 `Error` 对象。

## 类型参数

• **T**

参数的类型，可以是 `number` 或其他类型。

## 参数

随机字符串的长度。如果类型是 `number` 且大于 0，则生成对应长度的随机字符串；否则返回错误。

## 返回

- 如果 `length` 是 `number` 类型且大于 0，返回 `string`；否则返回 `Error`。

## Examples

```ts
// 示例 1: 传入合法的 number 类型
const result1 = genRandStr(10); // 返回 string
console.log(result1); // 输出随机字符串，如 "aB3dE7gH9j"
```

```ts
// 示例 2: 传入非 number 类型
const result2 = genRandStr('invalid'); // 返回 Error
console.log(result2 instanceof Error ? result2.message : result2); // 输出错误信息
```
