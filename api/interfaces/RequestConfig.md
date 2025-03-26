[sunrise-utils](../globals.md) / RequestConfig

# 接口: RequestConfig\<T\>

## 继承

- `Omit`\<`RequestInit`, `"body"`\>

## 类型参数

• **T** = `unknown`

## 属性

### cache?

> `optional` **cache**: `RequestCache`

A string indicating how the request will interact with the browser's cache to set request's cache.

#### 继承自

`Omit.cache`

***

### credentials?

> `optional` **credentials**: `RequestCredentials`

A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.

#### 继承自

`Omit.credentials`

***

### data?

> `optional` **data**: `T`

***

### headers?

> `optional` **headers**: `HeadersInit`

A Headers object, an object literal, or an array of two-item arrays to set request's headers.

#### 继承自

`Omit.headers`

***

### integrity?

> `optional` **integrity**: `string`

A cryptographic hash of the resource to be fetched by request. Sets request's integrity.

#### 继承自

`Omit.integrity`

***

### keepalive?

> `optional` **keepalive**: `boolean`

A boolean to set request's keepalive.

#### 继承自

`Omit.keepalive`

***

### method?

> `optional` **method**: `string`

A string to set request's method.

#### 继承自

`Omit.method`

***

### mode?

> `optional` **mode**: `RequestMode`

A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.

#### 继承自

`Omit.mode`

***

### params?

> `optional` **params**: `Record`\<`string`, `string`\>

***

### priority?

> `optional` **priority**: `RequestPriority`

#### 继承自

`Omit.priority`

***

### redirect?

> `optional` **redirect**: `RequestRedirect`

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

#### 继承自

`Omit.redirect`

***

### referrer?

> `optional` **referrer**: `string`

A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.

#### 继承自

`Omit.referrer`

***

### referrerPolicy?

> `optional` **referrerPolicy**: `ReferrerPolicy`

A referrer policy to set request's referrerPolicy.

#### 继承自

`Omit.referrerPolicy`

***

### signal?

> `optional` **signal**: `null` \| `AbortSignal`

An AbortSignal to set request's signal.

#### 继承自

`Omit.signal`

***

### window?

> `optional` **window**: `null`

Can only be null. Used to disassociate request from any Window.

#### 继承自

`Omit.window`
