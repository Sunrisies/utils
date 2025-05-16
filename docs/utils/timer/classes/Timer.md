[**sunrise-utils**](../../../README.md)

***

[sunrise-utils](../../../modules.md) / [utils/timer](../README.md) / Timer

# Class: Timer

定时器控制器

## Remarks

提供定时任务管理能力，支持设置任意间隔时间的周期性回调。
基于浏览器原生 setInterval 实现，使用后需手动调用停止方法释放资源

## Example

```typescript
const timer = new Timer();

// 启动定时任务
timer.start(() => {
  console.log('每2秒执行');
}, 2000);

// 停止定时任务
timer.stop();
```

## Constructors

### Constructor

> **new Timer**(): `Timer`

#### Returns

`Timer`

## Methods

### start()

> **start**(`callback`, `interval`): `void`

启动定时任务

#### Parameters

##### callback

`Function`

定时执行的回调函数（无参数、无返回值）

##### interval

`number`

执行间隔（单位：毫秒，最小值 10ms）

#### Returns

`void`

#### Remarks

该方法会创建周期性定时器，重复执行回调函数直到主动停止
注意：多次调用需先停止前次定时器，避免内存泄漏

#### Example

```typescript
const timer = new Timer();
timer.start(() => {
  console.log('每秒钟执行');
}, 1000);
```

***

### stop()

> **stop**(): `void`

停止定时任务并释放资源

#### Returns

`void`

#### Remarks

安全终止当前活动的定时器，清除内部定时器引用
注意：无活动定时器时调用不会产生副作用

#### Example

```typescript
const timer = new Timer();
timer.start(() => {}, 1000);

// 停止后定时器立即失效
timer.stop();
```
