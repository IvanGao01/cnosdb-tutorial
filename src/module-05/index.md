# CnosQL语法

> **摘要**
> 
> 学习CnosQL的语法，领略不一样的查询标准
> 
> [基础语法](#基础语法)
> 
> [配置查询结果](#配置查询结果)
> 
> [其他](#其他)

## 基础语法

### SELECT

#### 语法
```sql
SELECT <field_key>[,<field_key>,<tag_key>] FROM <measurement_name>[,<measurement_name>]
```

#### 示例
查询单个measurement中的所有tag和field
```sql
select * from air
```
查询单个measurement中指定的tag和field
```sql
select station, pressure from air
```
查询单个measurement中特定的field并进行基础运算
```sql
select (temperature * 2)+3 from air
```
查询多个measurement中多所有数据
```sql
select * from air, sea
```
查询指定保留策略下的指定measurement中的数据
```sql
select * from "oceanic_station"."autogen"."air"
```

### WHERE

#### 语法
```sql
SELECT_clause FROM_clause WHERE <conditional_expression> [(AND|OR) <conditional_expression> [...]]
```

#### 示例

查询满足限制field value条件的数据
```sql
select * from air where temperature > 60
```

在`WHERE`中添加基本运算
```sql
select * from air where temperature - 20 > 40
```

查询限制tag value条件的数据
```
select * from air where station = 'XiaoMaiDao'
```

查询既满足tag value也满足field value条件的数据
```sql
select station, temperature from air where station = 'XiaoMaiDao' and (temperature > 50 and temperature < 60)
```

```sql
查询满足timestamp条件的数据
```
```sql
select * from air where time > now() - 30d
```

> 注意以下查询语句返回的结果
> select * from air where station = XiaoMaiDao
> select * from air where station = "XiaoMaiDao"
> select * from air where station = 'XiaoMaiDao'

### GROUP BY
#### 语法
```sql
SELECT_clause FROM_clause [WHERE_clause] GROUP BY [* | <tag_key>[,<tag_key]]
```
#### 示例
使用tag对结果进行分组
```sql
select * from air group by station
```

使用time internal对结果进行分组
```sql
select mean(*) from air group by time(30m)
```

使用time internal对结果进行分组，添加时间限制条件

```sql
select mean(*) from air where time < '2022-04-15T16:00:00Z' group by time(30m)
```

### 插值运算

```sql
fill([linear | none | null | previous | 任意数值])
```

#### 示例

```sql
select mean(temperature) from air group by time(1w) fill(linear)
```

```sql
select mean(temperature) from air group by time(1w) fill(none)
```

```sql
select mean(temperature) from air group by time(1w) fill(null)
```

```sql
select mean(temperature) from air group by time(1w) fill(previous)
```

```sql
select mean(temperature) from air group by time(1w) fill(50)
```


### INTO

#### 语法
```sql
SELECT_clause INTO <measurement_name> FROM_clause [WHERE_clause] [GROUP_BY_clause]
```
#### 示例

重命名数据库
```sql
select * into "copy_oceanic_station"."autogen".:MEASUREMENT from "oceanic_station"."autogen"./.*/ group by *
```

将查询结果写入measurement
```sql
select temperature into Xia
    oMaiDao_air_temperature from air where station = 'XiaoMaiDao'
```

将聚合结果写入指定measurement
```sql
select mean(temperature) into "temperature_mean_1h" from air where station = 'XiaoMaiDao' and time >= '2022-03-01T00:00:00Z' and time <= '2022-04-01T00:00:00Z' group by time(1h)
```

将多个measurement的聚合结果写入一个不同的数据库

```sql
select MEAN(*) into "other_database"."autogen".:MEASUREMENT from /.*/ where time >= '2022-03-01T00:00:00Z' and time <= '2022-04-01T00:06:00Z' group by time(1h)
```


## 配置查询结果

### ORDER BY time

#### 语法
```sql
SELECT_clause [INTO_clause] FROM_clause [WHERE_clause] [GROUP_BY_clause] ORDER BY time DESC
```
#### 示例

```sql
select * from air order by time desc
```

### LIMIT 和 SLIMIT

#### 语法
```sql
SELECT_clause [INTO_clause] FROM_clause [WHERE_clause] [GROUP_BY_clause] [ORDER_BY_clause] LIMIT <N>
SELECT_clause [INTO_clause] FROM_clause [WHERE_clause] GROUP BY *[,time(<time_interval>)] [ORDER_BY_clause] SLIMIT <N>
```
#### 示例

限制返回的数据条数
```sql
select * from air limit 3
```
限制返回的series个数
```sql
select mean(temperature) from air group by * slimit 1
```


### OFFSET 和 SOFFSET
#### 语法
```sql
SELECT_clause [INTO_clause] FROM_clause [WHERE_clause] [GROUP_BY_clause] [ORDER_BY_clause] LIMIT_clause OFFSET <N> [SLIMIT_clause]
SELECT_clause [INTO_clause] FROM_clause [WHERE_clause] GROUP BY *[,time(time_interval)] [ORDER_BY_clause] [LIMIT_clause] [OFFSET_clause] SLIMIT_clause SOFFSET <N>
```
#### 示例
```sql
select * from air limit 1 offset 1
```
```sql
select mean(temperature) from air group by * slimit 1 soffset 1
```

### Time Zone
```sql
SELECT_clause [INTO_clause] FROM_clause [WHERE_clause] [GROUP_BY_clause] [ORDER_BY_clause] [LIMIT_clause] [OFFSET_clause] [SLIMIT_clause] [SOFFSET_clause] tz('<time_zone>')
```
```sql
select * from air limit 10 tz('Asia/Shanghai')
```


## 其他

### 查询会合并series
以下在计算temperature的平均值的时候会将两个station合并
```sql
select mean(temperature) from air
```
如果需要只计算其中一个station中的平均值
```sql
select mean(temperature) from air ?
```
如果需要计算其中每一个station中的平均值
```sql
select mean(temperature) from air ?
```
### 多条语句查询
```sql
select * from air limit 5;select * from sea limit 5
```
### 子查询
#### 语法
```sql
SELECT_clause FROM ( SELECT_statement ) [...]
```
#### 示例
```sql
select sum(max) from (select MAX(temperature) from air group by station)
```

