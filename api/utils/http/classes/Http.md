[sunrise-utils](../../../modules.md) / [utils/http](../index.md) / Http

# 类: Http

可配置的 HTTP 客户端实例

## 备注

封装了常见的 HTTP 请求方法，支持自动拼接基础 URL 和请求配置

## 参数

基础 URL 路径，会自动拼接到所有请求端点前

## 示例

```typescript
// 创建 GitHub API 客户端
const http = new Http('https://api.github.com');

// 发送带认证的请求
const httpWithAuth = new Http('https://api.example.com');
```

## 构造函数

### 构造函数

> **new Http**(`baseURL`): `Http`

创建 HTTP 客户端实例

#### 参数

##### baseURL

`string` = `''`

基础请求路径，将自动拼接到所有请求端点前（默认为空字符串）

#### 返回

`Http`

#### 示例

```typescript
// 带基础路径的实例
const apiClient = new Http('https://api.example.com/v1');

// 使用相对路径的实例
const defaultClient = new Http();
```

## 方法

### request()

> **request**\<`TResponse`, `T`\>(`endpoint`, `config`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`TResponse`\>\>

执行 HTTP 请求的核心方法

#### 类型参数

##### TResponse

`TResponse`

响应结果数据类型

##### T

`T` = `unknown`

请求体数据类型

#### 参数

##### endpoint

`string`

接口端点路径（自动拼接基础 URL）

##### config

[`RequestConfig`](../interfaces/RequestConfig.md)\<`T`\> = `{}`

请求配置（支持自定义请求头和参数）

#### 返回

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`TResponse`\>\>

符合<mcsymbol name="ApiResponse" filename="http.ts" path="src/utils/http.ts" startline="78" type="class"></mcsymbol>规范的响应对象

#### 备注

封装了请求参数处理、响应解析和错误处理等通用逻辑，支持泛型类型参数

#### 抛出

当发生网络错误或 HTTP 状态码非 2xx 时抛出异常

#### 示例

```typescript
// 获取用户数据
const response = await http.request<User[]>('/users', {
  headers: { Authorization: 'Bearer token' }
});

// 提交表单数据
await http.request<void>('/submit', {
  method: 'POST',
  data: { name: 'Alice' }
});
```

***

### get()

> **get**\<`TResponse`\>(`endpoint`, `config?`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`TResponse`\>\>

发送 GET 请求获取资源

#### 类型参数

##### TResponse

`TResponse`

期望的响应数据类型

#### 参数

##### endpoint

`string`

接口端点路径（自动拼接基础 URL）

##### config?

`Omit`\<[`RequestConfig`](../interfaces/RequestConfig.md)\<`unknown`\>, `"method"` \| `"data"`\>

请求配置项（支持自定义请求头和查询参数）

#### 返回

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`TResponse`\>\>

包含<mcsymbol name="ApiResponse" filename="http.ts" path="src/utils/http.ts" startline="78" type="class"></mcsymbol>规范的响应对象

#### 备注

适用于获取集合数据或单个资源的只读操作，支持查询参数配置

#### 示例

```typescript
// 获取分页用户列表
const { data } = await http.get<PagedResponse<User>>('/users', {
  params: { page: 1, size: 20 }
});

// 获取单个商品详情
const product = await http.get<Product>('/products/123');
```

***

### post()

> **post**\<`TResponse`, `T`\>(`endpoint`, `data?`, `config?`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`TResponse`\>\>

发送 POST 请求创建资源

#### 类型参数

##### TResponse

`TResponse`

期望的响应数据类型

##### T

`T` = `unknown`

请求体数据类型（默认为 unknown）

#### 参数

##### endpoint

`string`

接口端点路径（自动拼接基础 URL）

##### data?

`T`

要提交的请求体数据

##### config?

`Omit`\<[`RequestConfig`](../interfaces/RequestConfig.md)\<`unknown`\>, `"method"` \| `"data"`\>

请求配置项（支持自定义请求头等参数）

#### 返回

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`TResponse`\>\>

符合<mcsymbol name="ApiResponse" filename="http.ts" path="src/utils/http.ts" startline="78" type="class"></mcsymbol>规范的响应对象

#### 备注

适用于创建新资源或提交表单数据，请求体会自动序列化为 JSON 格式

#### 示例

```typescript
// 创建新用户
await http.post<User>('/users', {
  name: 'Bob',
  email: 'bob@example.com'
});

// 提交表单并获取操作结果
const response = await http.post<FormResult>('/submit', formData, {
  headers: { 'X-Custom-Header': 'value' }
});
```

***

### put()

> **put**\<`TResponse`, `T`\>(`endpoint`, `data?`, `config?`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`TResponse`\>\>

发送 PUT 请求更新资源

#### 类型参数

##### TResponse

`TResponse`

更新后的资源数据类型

##### T

`T` = `unknown`

请求体数据类型（默认为 unknown）

#### 参数

##### endpoint

`string`

资源端点路径（自动拼接基础 URL）

##### data?

`T`

要替换的完整资源数据

##### config?

`Omit`\<[`RequestConfig`](../interfaces/RequestConfig.md)\<`unknown`\>, `"method"` \| `"data"`\>

请求配置项（支持自定义请求头等参数）

#### 返回

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`TResponse`\>\>

包含<mcsymbol name="ApiResponse" filename="http.ts" path="src/utils/http.ts" startline="78" type="class"></mcsymbol>规范的响应对象

#### 备注

用于替换整个资源，需要提供完整的更新数据，遵循 RESTful 规范

#### 示例

```typescript
// 更新用户信息
await http.put<User>('/users/123', {
  name: '更新后的姓名',
  email: 'new@example.com'
});

// 替换系统配置
const config = await http.put<SystemConfig>('/config', fullConfig, {
  headers: { 'If-Match': 'version-tag' }
});
```

***

### delete()

> **delete**\<`TResponse`\>(`endpoint`, `config?`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`TResponse`\>\>

发送 DELETE 请求删除资源

#### 类型参数

##### TResponse

`TResponse`

响应数据类型（通常为 void）

#### 参数

##### endpoint

`string`

要删除的资源端点路径（自动拼接基础 URL）

##### config?

`Omit`\<[`RequestConfig`](../interfaces/RequestConfig.md)\<`unknown`\>, `"method"` \| `"data"`\>

请求配置项（支持自定义请求头等参数）

#### 返回

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`TResponse`\>\>

包含<mcsymbol name="ApiResponse" filename="http.ts" path="src/utils/http.ts" startline="78" type="class"></mcsymbol>规范的响应对象

#### 备注

用于删除指定资源，遵循 RESTful 规范

#### 示例

```typescript
// 删除用户数据
await http.delete<void>('/users/123');

// 带条件删除的请求
await http.delete<AuditLog>('/logs/456', {
  headers: { 'If-Unmodified-Since': 'Wed, 21 Oct 2022 07:28:00 GMT' }
});
```
