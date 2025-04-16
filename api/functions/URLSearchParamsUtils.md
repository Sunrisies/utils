[sunrise-utils](../globals.md) / URLSearchParamsUtils

# 函数: URLSearchParamsUtils()

> **URLSearchParamsUtils**(`data`): `string`

将请求参数对象转换为 URL 查询字符串

## 参数

### data

包含查询参数的对象（支持 Record&lt;string, any&gt; 类型）

## 返回

`string`

经过 URL 编码的查询字符串（不带问号前缀）

## 备注

支持数组和基本类型处理，自动进行 URI 组件编码。注意嵌套对象会被转换为字符串形式（如 [object Object]），
建议使用扁平数据结构。本实现基于 URLSearchParams 标准 API，与 `qs` 等库的嵌套处理机制不同

## Examples

```typescript
// 处理嵌套对象（实际开发中应避免）
URLSearchParamsUtils({ filter: { type: 'video', resolution: '1080p' } });
// 返回 'filter=[object%20Object]'
```

```typescript
// 处理数字和布尔值
URLSearchParamsUtils({ active: true, count: 42 });
// 返回 'active=true&count=42'
```
