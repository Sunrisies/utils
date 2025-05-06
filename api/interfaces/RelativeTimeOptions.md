[sunrise-utils](../globals.md) / RelativeTimeOptions

# 接口: RelativeTimeOptions

相对时间配置选项

## 属性

### locale?

> `optional` **locale**: `"zh-CN"` \| `"en-US"`

语言设置，默认为 'zh-CN'，支持 'zh-CN' | 'en-US'

***

### messages?

> `optional` **messages**: `object`

自定义文案配置对象，如果提供则覆盖默认的语言文案

#### days?

> `optional` **days**: `string`

#### future?

> `optional` **future**: `string`

#### hours?

> `optional` **hours**: `string`

#### justNow?

> `optional` **justNow**: `string`

#### minutes?

> `optional` **minutes**: `string`

#### months?

> `optional` **months**: `string`

#### past?

> `optional` **past**: `string`

#### seconds?

> `optional` **seconds**: `string`

#### weeks?

> `optional` **weeks**: `string`

#### years?

> `optional` **years**: `string`

***

### now?

> `optional` **now**: `string` \| `number` \| `Date`

当前时间参考点，默认为当前时间
