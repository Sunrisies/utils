[sunrise-utils](../globals.md) / Http

# 类: Http

## 构造函数

### new Http()

> **new Http**(`baseURL`): [`Http`](Http.md)

创建一个新的 Http 实例。

#### 参数

##### baseURL

`string` = `''`

请求的基础 URL。

#### 返回

[`Http`](Http.md)

## 方法

### delete()

> **delete**\<`TResponse`\>(`endpoint`, `config`?): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`TResponse`\>\>

发送 DELETE 请求。

#### 类型参数

• **TResponse**

#### 参数

##### endpoint

`string`

请求的端点。

##### config?

`Omit`\<[`RequestConfig`](../interfaces/RequestConfig.md), `"method"` \| `"data"`\>

请求的配置。

#### 返回

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`TResponse`\>\>

返回一个 Promise，解析为 ApiResponse。

***

### get()

> **get**\<`TResponse`\>(`endpoint`, `config`?): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`TResponse`\>\>

发送 GET 请求。

#### 类型参数

• **TResponse**

#### 参数

##### endpoint

`string`

请求的端点。

##### config?

`Omit`\<[`RequestConfig`](../interfaces/RequestConfig.md), `"method"` \| `"data"`\>

请求的配置。

#### 返回

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`TResponse`\>\>

返回一个 Promise，解析为 ApiResponse。

***

### post()

> **post**\<`TResponse`, `T`\>(`endpoint`, `data`?, `config`?): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`TResponse`\>\>

发送 POST 请求。

#### 类型参数

• **TResponse**

• **T** = `unknown`

#### 参数

##### endpoint

`string`

请求的端点。

##### data?

`T`

请求的数据。

##### config?

`Omit`\<[`RequestConfig`](../interfaces/RequestConfig.md), `"method"` \| `"data"`\>

请求的配置。

#### 返回

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`TResponse`\>\>

返回一个 Promise，解析为 ApiResponse。

***

### put()

> **put**\<`TResponse`, `T`\>(`endpoint`, `data`?, `config`?): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`TResponse`\>\>

发送 PUT 请求。

#### 类型参数

• **TResponse**

• **T** = `unknown`

#### 参数

##### endpoint

`string`

请求的端点。

##### data?

`T`

请求的数据。

##### config?

`Omit`\<[`RequestConfig`](../interfaces/RequestConfig.md), `"method"` \| `"data"`\>

请求的配置。

#### 返回

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`TResponse`\>\>

返回一个 Promise，解析为 ApiResponse。

***

### request()

> **request**\<`TResponse`, `T`\>(`endpoint`, `config`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`TResponse`\>\>

发送 HTTP 请求。

#### 类型参数

• **TResponse**

• **T** = `unknown`

#### 参数

##### endpoint

`string`

请求的端点。

##### config

[`RequestConfig`](../interfaces/RequestConfig.md)\<`T`\> = `{}`

请求的配置。

#### 返回

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`TResponse`\>\>

返回一个 Promise，解析为 ApiResponse。
