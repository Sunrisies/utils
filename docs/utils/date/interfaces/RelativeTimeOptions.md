[**sunrise-utils**](../../../README.md)

***

[sunrise-utils](../../../modules.md) / [utils/date](../README.md) / RelativeTimeOptions

# Interface: RelativeTimeOptions

相对时间配置选项

## Properties

### now?

> `optional` **now**: `string` \| `number` \| `Date`

当前时间参考点，默认为当前时间

***

### locale?

> `optional` **locale**: `"zh-CN"` \| `"en-US"`

语言设置，默认为 'zh-CN'，支持 'zh-CN' | 'en-US'

***

### messages?

> `optional` **messages**: `object`

自定义文案配置对象，如果提供则覆盖默认的语言文案

#### justNow?

> `optional` **justNow**: `string`

#### seconds?

> `optional` **seconds**: `string`

#### minutes?

> `optional` **minutes**: `string`

#### hours?

> `optional` **hours**: `string`

#### days?

> `optional` **days**: `string`

#### weeks?

> `optional` **weeks**: `string`

#### months?

> `optional` **months**: `string`

#### years?

> `optional` **years**: `string`

#### future?

> `optional` **future**: `string`

#### past?

> `optional` **past**: `string`
