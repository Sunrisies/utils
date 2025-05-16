[sunrise-utils](../../modules.md) / map/coordTransform

# map/coordTransform

国家测量局坐标（火星坐标，GCJ02）与WGS84坐标系之间的转换工具

## 备注

实现WGS84坐标系与GCJ02坐标系之间的双向转换算法，包含：
- 中国境内坐标偏移计算
- 坐标边界校验
- 参数有效性验证

注意：转换算法基于国家测绘局公开的偏移参数，不可用于高精度测绘场景

## 变量

- [wgs84ToGcj02](variables/wgs84ToGcj02.md)
- [gcj02ToWgs84](variables/gcj02ToWgs84.md)

## 函数

- [out\_of\_china](functions/out_of_china.md)
