# CnosDB入门

> 摘要

- [什么是时序数据？](#什么是时序数据)
- [CnosDB简介](#cnosdb简介)
- [快速开始](#快速开始)
- [CnosQL VS SQL](#cnosql-vs-sql)
- [查询入门](#查询入门)

## 什么是时序数据？

时序数据是指时间序列数据。是按**时间顺序**记录的数据列，在同一数据列中的各个数据必须是同口径的，要求具有可比性。

[场景](https://www.cnosdb.com)

[天气](https://weathernew.pae.baidu.com/weathernew/pc?query=%E5%8C%97%E4%BA%AC%E5%A4%A9%E6%B0%94&srcid=4982)

## CnosDB简介

**时序数据库** - 用于处理带时间标签（按照时间的顺序变化，即时间序列化）的数据

**时序数据管理系统** - 主要通过对时序数据的采集、处理和分析帮助企业实时监控企业的生产与经营过程。

- 数据是时序的，一定带有时间戳
- 数据极少有更新操作
- 数据的写入多，读取少
- 用户关注的是一段时间的趋势
- 数据是有保留期限的
- 除了存储查询外，还需要实时的计算操作
- 数据量巨大，每天很容易就会过百亿

## 快速开始

### 使用Docker启动

```bash
docker pull cnosdb/cnosdb:latest
docker run -itd -p 8086:8086 cnosdb/cnosdb:latest
```

### 导入示例数据
> 如何提示`bash: wget: command not found`
>
> 请下载`wget`工具: `apt-get update && apt-get install wget`
```bash

docker ps # 查看运行中的容器

docker exec -it container_id bash # 进入容器

wget https://gist.githubusercontent.com/cnos-db/d6dad9766870a1ef50209e73d178e4d0/raw/a2ac4e57a43f68f9f2d5cacb0af15e45e8c5d4e6/NOAA_data.txt

cnosdb-cli import --path NOAA_data.txt # 导入数据到cnosdb

cnosdb-cli

SHOW DATABASES

USE NOAA_water_database

```

## CnosQL vs SQL

- 时间序列数据在聚合场景中最有用

- CnosDB 中的`measurement`类似于一个 SQL 中的`table`

- CnosDB 中的`tag`就像 SQL 中的一个带索引的列

- CnosDB 中的`field`就像 SQL 中的没有索引的列

- CnosDB`points`类似于 SQL 中的行

- CnosDB 中不需要预定义`schema`

## 查询入门

### 查看所有 `measurements`

    show measurements

### 计算`h2o_feet`中`water_levle`的数量

    SELECT COUNT("water_level") FROM h2o_feet


### 查看`h2o_feet`中的前五个值

    SELECT * FROM h2o_feet LIMIT 5

### 指定字段的标识符号

    SELECT "level description"::field,"location"::tag,"water_level"::field FROM "h2o_feet" limit 10

### 查看`measurement`的tag key

    SHOW TAG KEYS FROM h2o_feet

### 查看tag value

    SHOW TAG VALUES FROM h2o_feet WITH KEY = "location"

### 查看field key

    SHOW FIELD KEYS FROM h2o_feet

### 查看series

    SHOW SERIES

### 函数使用
> [更多](https://www.cnosdb.com/content/cnosdb/0.9/cnosql/function.html)

    SELECT MEAN("water_level") FROM "h2o_feet"


## 课堂问题

1. 时序数据和时序数据库的关系是什么？
2. 写出一条符合CnosDB格式的数据
3. 查询出2019-08-17T00:00:00Z到2019-09-18T00:00:00Z期间在santa_monica水位最高的一条数据
4. 查询出2019-08-17T00:00:00Z到2019-09-18T00:00:00Z期间coyote_creek每天的平均水温是多少