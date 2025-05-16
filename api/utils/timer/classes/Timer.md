[sunrise-utils](../../../modules.md) / [utils/timer](../index.md) / Timer

# 类: Timer

定时器控制器

## 备注

提供定时任务管理能力，支持设置任意间隔时间的周期性回调。
基于浏览器原生 setInterval 实现，使用后需手动调用停止方法释放资源

## 示例

```typescript
const timer = new Timer();

// 启动定时任务
timer.start(() => {
  console.log('每2秒执行');
}, 2000);

// 停止定时任务
timer.stop();
```

## 构造函数

### 构造函数

> **new Timer**(): `Timer`

#### 返回

`Timer`

## 方法

### start()

> **start**(`callback`, `interval`): `void`

启动定时任务

#### 参数

##### callback

`Function`

定时执行的回调函数（无参数、无返回值）

##### interval

`number`

执行间隔（单位：毫秒，最小值 10ms）

#### 返回

`void`

#### 备注

该方法会创建周期性定时器，重复执行回调函数直到主动停止
注意：多次调用需先停止前次定时器，避免内存泄漏

#### 示例

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

#### 返回

`void`

#### 备注

安全终止当前活动的定时器，清除内部定时器引用
注意：无活动定时器时调用不会产生副作用

#### 示例

```typescript
const timer = new Timer();
timer.start(() => {}, 1000);

// 停止后定时器立即失效
timer.stop();
```
