[sunrise-utils](../globals.md) / createActivityMonitor

# 函数: createActivityMonitor()

> **createActivityMonitor**(`options`): `object`

活动监控器

## 参数

### options

[`ActivityMonitorOptions`](../interfaces/ActivityMonitorOptions.md)

## 返回

### check()

> **check**: () => `void`

检查活动状态

#### 返回

`void`

### getState()

> **getState**: () => [`ActivityMonitorState`](../interfaces/ActivityMonitorState.md)

获取当前状态

#### 返回

[`ActivityMonitorState`](../interfaces/ActivityMonitorState.md)

### pause()

> **pause**: () => `void`

暂停监控

#### 返回

`void`

### resume()

> **resume**: () => `void`

恢复监控

#### 返回

`void`

### start()

> **start**: () => `void`

启动监控

#### 返回

`void`

### stop()

> **stop**: () => `void`

停止监控

#### 返回

`void`

## 备注

用于监控用户活动状态，可以设置超时时间和各种回调函数。
支持自动启动、暂停恢复等功能，适用于会话超时、屏保等场景。

## 示例

```typescript
// 基本用法
const monitor = createActivityMonitor({
  timeout: 5000,
  onTimeout: () => console.log('超时'),
  onActivity: () => console.log('检测到活动')
});

// 启动监控
monitor.start();

// 手动触发活动检查
monitor.check();

// 停止监控
monitor.stop();
```
