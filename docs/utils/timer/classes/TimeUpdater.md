[**sunrise-utils**](../../../README.md)

***

[sunrise-utils](../../../modules.md) / [utils/timer](../README.md) / TimeUpdater

# Class: TimeUpdater

时间更新管理器

## Remarks

提供自动更新时间数据的能力，通过回调函数传递格式化后的时间信息。
内置定时器每秒钟更新一次时间数据，需手动调用启动/停止方法

## Example

```typescript
const updater = new TimeUpdater();

// 启动时间更新
updater.startUpdate(({ nowTime }) => {
  console.log('当前时间:', nowTime);
});

// 停止更新时间
updater.stopUpdate();
```

## Constructors

### Constructor

> **new TimeUpdater**(): `TimeUpdater`

初始化时间更新管理器实例

#### Returns

`TimeUpdater`

#### Remarks

内部自动创建 Timer 和 TimeFormatter 实例
注意：当前实现为强耦合设计，无法配置外部依赖项

#### Example

```typescript
// 基础用法
const updater = new TimeUpdater();

@example
// 未来可扩展的依赖注入形式（当前尚未支持）
new TimeUpdater(customTimer, customFormatter);
```

## Methods

### startUpdate()

> **startUpdate**(`callback`): `void`

开始定期更新时间。

#### Parameters

##### callback

(`result`) => `void`

回调函数，接收一个包含 formattedDate, today, nowTime 的对象

#### Returns

`void`

***

### stopUpdate()

> **stopUpdate**(): `void`

停止定期更新时间。

#### Returns

`void`
