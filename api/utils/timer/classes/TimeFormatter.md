[sunrise-utils](../../../modules.md) / [utils/timer](../index.md) / TimeFormatter

# 类: TimeFormatter

日期时间格式化工具类

## 备注

提供标准日期格式、星期计算、时间格式化等功能，所有方法均为纯函数。
注意：月份计算会自动加 1（Date 对象月份从 0 开始计数）

## 示例

```typescript
const formatter = new TimeFormatter();
// 格式化当前日期
formatter.formatDate(new Date()); // "2023-10-01"

// 获取中文星期
formatter.getWeekday(new Date()); // "星期一"
```

## 构造函数

### 构造函数

> **new TimeFormatter**(): `TimeFormatter`

#### 返回

`TimeFormatter`

## 方法

### formatDate()

> **formatDate**(`date`): `string`

生成符合 ISO 8601 的短日期格式字符串

#### 参数

##### date

`Date`

需要格式化的日期对象（支持 Date 实例或时间戳）

#### 返回

`string`

标准化日期字符串（YYYY-MM-DD）

#### 示例

```typescript
// 格式化当前时间
formatter.formatDate(new Date()); 
// 输出示例: "2023-10-01"

// 处理跨年日期
formatter.formatDate(new Date(2024, 0, 1));
// 输出: "2024-01-01"
```

***

### getWeekday()

> **getWeekday**(`date`): `string`

获取中文星期名称

#### 参数

##### date

`Date`

日期对象（注意：周日对应索引 0）

#### 返回

`string`

中文星期字符串（"星期一" 至 "星期日"）

#### 示例

```typescript
// 获取当前星期
formatter.getWeekday(new Date());

// 指定日期计算
formatter.getWeekday(new Date(2023, 9, 1)); // "星期日"
formatter.getWeekday(new Date(2023, 9, 2)); // "星期一" 
```

***

### formatTime()

> **formatTime**(`date`): `string`

生成标准化时间字符串

#### 参数

##### date

`Date`

需要格式化的时间对象（支持 Date 实例或时间戳）

#### 返回

`string`

24 小时制时间字符串（HH:mm:ss）

#### 示例

```typescript
// 格式化当前时间
formatter.formatTime(new Date()); // "14:05:30"

// 处理午夜时间
formatter.formatTime(new Date(2023, 9, 1, 0, 15, 0)); // "00:15:00"
```
