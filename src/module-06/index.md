# CnosDB函数

## 摘要

本次分享CnosDB中函数的使用，揭秘时序数据库都在使用哪些函数进行查询。

[聚合函数](#聚合函数)

[选择函数](#选择函数)

[转换函数](#转换函数)

[分析函数](#分析函数)

[预测函数](#预测函数)

> 备注：以下并不是全部的函数，如需查看其他请参考[CnosDB函数](https://www.cnosdb.com/content/cnosdb/latest/cnosql/cnosql_function.html)

## 聚合函数

```shell
COUNT() # 计数
DISTINCT() # 去重
INTEGRAL() # 返回曲线下的面积
MEAN() # 均值
MEDIAN() # 中位数
MODE() # 返回出现频率最高的值
SPREAD() # 返回最大和最小值之间的差
STDDEV() # 求标准差
SUM() # 求和
```

## 选择函数

```shell
BOTTOM() #返回最小的N个field value
FIRST() #返回最早的时间戳的field value
LAST() #返回最新时间戳的field value
MAX() # 求最大值
MIN() # 求最小值
PERCENTILE() #返回第N个百分位数的field value
SAMPLE() # 返回N个field value的随机样本
TOP() # 返回最大的N个field value
```

## 转换函数
```shell
ABS() 返回field value的绝对值
CUMULATIVE_SUM() # 返回field value的累积总和。
DIFFERENCE() # 返回field value之间的差值。
ELAPSED() # 返回field value的时间戳之间的差值。
MOVING_AVERAGE() # 返回field value窗口的滚动平均值。
NON_NEGATIVE_DERIVATIVE() # 返回field value之间的非负变化率。
POW() # 返回field value的x次方。
ROUND() # 返回指定值的四舍五入后的整数。
SQRT() # 求平方根
```

## 分析函数
```shell
EXPONENTIAL_MOVING_AVERAGE() #指数加权移动平均值
```

## 预测函数
```shell
HOLT_WINTERS() # 返回N个预测的field value。
```