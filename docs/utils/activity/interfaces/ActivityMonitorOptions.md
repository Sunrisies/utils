[**sunrise-utils**](../../../README.md)

***

[sunrise-utils](../../../modules.md) / [utils/activity](../README.md) / ActivityMonitorOptions

# 接口: ActivityMonitorOptions

活动监控器配置选项

## 属性

### timeout

> **timeout**: `number`

超时时间（毫秒）

***

### onTimeout()

> **onTimeout**: () => `void`

超时回调函数

#### 返回

`void`

***

### onActivity()?

> `optional` **onActivity**: () => `void`

检测到活动时的回调函数

#### 返回

`void`

***

### onStart()?

> `optional` **onStart**: () => `void`

首次启动时的回调函数

#### 返回

`void`

***

### onStop()?

> `optional` **onStop**: () => `void`

停止监控时的回调函数

#### 返回

`void`

***

### autoStart?

> `optional` **autoStart**: `boolean`

是否自动启动监控

***

### pauseOnBlur?

> `optional` **pauseOnBlur**: `boolean`

是否在窗口失去焦点时暂停监控

***

### resumeOnFocus?

> `optional` **resumeOnFocus**: `boolean`

是否在窗口获得焦点时恢复监控
