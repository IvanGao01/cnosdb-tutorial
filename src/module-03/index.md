# 数据的增删改查

##  摘要

- 理解`curl`命令
- 通过Http API Endpoint写入和查询数据
- 使用Go Client写入和查询数据

## 理解`curl`命令

curl是常用的命令行工具，用来请求Web服务器，它的名字就是客户端（Client）的URL工具的意思

## 使用`curl`查询CnosDB API
CnosDB API 是在 InfluxDB 中查询数据的主要方式

如果需要执行查询请求，需要将GET请求发送到/query端点，将URL参数db设置为目标数据库，并将参数q设置为查询语句。还可以通过发送相同的参数作为URL参数或作为带有application/x-www-form-urlencoded的正文的一部分来使用POST请求

示例：
```shell
curl -G "http://localhost:8086/query?pretty=true" --data-urlencode "db=mydb" --data-urlencode "q=SELECT value FROM cpu_load_short" WHERE region='us-west'
```

CnosDB返回JSON，查询的结果会在"rusult"数组中，如果发生错误，CnosDB会设置一个带有错误解释的"error"的key
```shell
curl -G 'http://localhost:8086/query?pretty=true' --data-urlencode "db=mydb" --data-urlencode "q=SELECT value FROM cpu_load_short" WHERE region='us-west'
```

多条查询：向CnosDB API发送多条查询，中间需要用分号分隔
```shell
curl -G 'http://localhsot"8086/query?pretty=true' --data-urlencode "db=mydb" --data-urlencode "q=SELECT value FROM cpu_Load_short" WHERE region='us-west';SELECT count("value") FROM cpu_Load_short WHERE region="us-west"
```

CnosDB中的所有内容都以UTC存储和输出。默认情况下，时间戳以RFC3339格式返回并具有纳秒精度，例如 2015-08-04T19:05:14.318570484Z，如果想要Unix纪元格式的时间戳，则需要在请求中包含字符串参数：epoch=[h, m, s, ms, u, ns]
```shell
curl -G 'http://localhost:8086/query' --data-urlencode "db=mydb" --data-urlencode "epoch=s" --data-urlencode "q=SELECT value FROM cpu_load_short WHERE region='us-west'"
```

Maximum Row Limit
max-row-limit 配置选项允许用于限制返回结果最大数量，以防止CnosDB在聚合结果时耗尽内存，max-row-limit配置选项默认设置为0，该默认设置允许每个请求返回无限数量的行。
最大行限制适用于非块查询，分块查询可以返回无限数量的point

Chunking
通过设置查询字符串参数chunked=true，可以使用分块以流式批处理而不是作为单个响应返回结果。响应将按series或每10000point分块，以先发生者为准。要将最大块大小更改为不同的值，需要将查询字符串chunk_size设置为不同的值
