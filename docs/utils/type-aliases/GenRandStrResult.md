[**sunrise-utils**](../../README.md)

***

[sunrise-utils](../../modules.md) / [utils](../README.md) / GenRandStrResult

# 类型别名: GenRandStrResult\<T\>

> **GenRandStrResult**\<`T`\> = `T` *extends* `number` ? `string` : `Error`

根据传入的参数类型生成随机字符串或返回错误。

## 类型参数

### T

`T`

参数的类型约束

## 参数

随机字符串的长度（需为大于0的数字）

## 返回

生成的随机字符串或错误对象

## 示例

```typescript
// 传入合法的 number 类型
const result1 = genRandStr(10);
console.log(result1); // 输出类似 "aB3dE7gH9j"

// 传入非 number 类型
const result2 = genRandStr('invalid');
if (result2 instanceof Error) {
  console.error(result2.message);
}
```
