# CnosDB最佳实践

> 摘要：我们应该如何高效使用CnosDB

## 架构设计

1. tag是用来加速查询的，但是不能参与计算
2. field用来计算的，不能用来分组
3. 不建议把tag拼在一起用作measurement
4. 举例：如果对数值进行分组，可以在为指定范围的数值添加tag
5. 在一个表当中，什么样的数据需要用来当作tag？
6. 在一个表当中，什么样的数据需要用来当作field？
7. 下面的这个表格应该如何设计？

| time  | region | deviceid |temperature | humidity | pressure | winspeed | windir | rainfall |
|-----|-------------|-----|-------------|----------|----------|----------|--------|----------|
|2022-03-05T12:00:00Z| Beijing|ATAE-0753|32.5|56.7| 1025|1.2|76.6|3.5|


## 写入优化

1. 批量写入
2. 对数据进行排序





## 存储设置和下采样

1. wal和data目录分开存储
2. 如何正确下采样

