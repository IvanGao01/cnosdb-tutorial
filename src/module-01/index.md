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

**时序数据管理系统** - 主要通过对时序数据的采集、处理和分析帮助企业实时监控企业的生产与经营过程。

- 数据是时序的，一定带有时间戳
- 数据极少有更新操作
- 数据的写入多，读取少
- 用户关注的是一段时间的趋势
- 数据是有保留期限的
- 除了存储查询外，还需要实时的计算操作
- 数据量巨大，每天很容易就会过百亿

**时序数据库** - 用于处理带时间标签（按照时间的顺序变化，即时间序列化）的数据

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

docker exec -it container_id bash # 进入容器

wget https://gist.githubusercontent.com/cnos-db/d6dad9766870a1ef50209e73d178e4d0/raw/a2ac4e57a43f68f9f2d5cacb0af15e45e8c5d4e6/NOAA_data.txt

cnosdb-cli import --path NOAA_data.txt # 导入数据到cnosdb

```

## CnosQL vs SQL

- 时间序列数据在聚合场景中最有用

- CnosDB 中的`measurement`类似于一个 SQL 中的`table`

- CnosDB 中的`tag`就像 SQL 中的一个带索引的列

- CnosDB 中的`field`就像 SQL 中的没有索引的列

- CnosDB`points`类似于 SQL 中的行

- CnosDB 中不需要预定义`schema`

## 查询入门


  - SELECT statement

  - FROM, WHERE, INTO, 和 GROUP BY clauses

  - CnosQL function

  - Subqueies


## 课堂问题

1. 时序数据和时序数据的关系是什么？
2. 写出一条符合CnosDB格式的数据
3. 查询xxx的xxx