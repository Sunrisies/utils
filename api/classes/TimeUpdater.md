[sunrise-utils](../globals.md) / TimeUpdater

# 类: TimeUpdater

TimeUpdater 类用于获取和格式化当前时间。

 TimeUpdater

## 构造函数

### new TimeUpdater()

> **new TimeUpdater**(): [`TimeUpdater`](TimeUpdater.md)

创建一个新的 TimeUpdater 实例。

#### 返回

[`TimeUpdater`](TimeUpdater.md)

## 方法

### startUpdate()

> **startUpdate**(`callback`): `void`

开始定期更新时间。

#### 参数

##### callback

(`result`) => `void`

回调函数，接收一个包含 formattedDate, today, nowTime 的对象

#### 返回

`void`

***

### stopUpdate()

> **stopUpdate**(): `void`

停止定期更新时间。

#### 返回

`void`
