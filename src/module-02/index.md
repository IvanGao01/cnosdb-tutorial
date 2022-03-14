# CnosDB 数据库管理

> 摘要
> #### [数据库管理](#数据库管理)
>- [CREATE DATABASE](#create-database)
>- [DROP DATABASE](#drop-database)
>- [DROP SERIES](#drop-series)
>- [DELETE](#delete)
>- [DROP MEASUREMENT](#drop-measurement)
>- [DROP SHARD](#drop-shard)
>#### [保留策略管理](保留策略管理)
>- [CREATE RETENTION POLICY](#create-retention-policy)
>- [ALTER RETENTION POLICY](#alter-retention-policy)
>- [DROP RETENTION POLICY](#drop-retention-policy)

## 数据库管理

### CREATE DATABASE

**语法**
```sql
CREATE DATABASE <database_name> [WITH [DURATION <duration>] [REPLICATION <n>] [SHARD DURATION <duration>] [NAME <rp-name>]]
```

### DROP DATABASE

**语法**
```sql
DROP DATABASE <database_name>
```

### DROP SERIES
**语法**
```sql
DROP SERIES FROM <measurement_name[,measurement_name]> WHERE <tag_key>='<tag_value>'
```

### DELETE
**语法**
```sql
DELETE FROM <measurement_name> WHERE [<tag_key>='<tag_value>'] | [<time interval>]
```

### DROP MEASUREMENT
**语法**
```sql
DROP MEASUREMENT <measurement_name>
```
### DROP SHARD
**语法**
```sql
DROP SHARD <shard_id_number>
```

## 保留策略管理

### CREATE RETENTION POLICY
**语法**
```sql
CREATE RETENTION POLICY <rp_name> ON <database_name> DURATION <duration> REPLICATION <n> [SHARD DURATION <duration>] [DEFAULT]
```
### ALTER RETENTION POLICY
**语法**
```sql
ALTER RETENTION POLICY <rp_name> ON <database_name> DURATION <duration> REPLICATION <n> SHARD DURATION <duration> DEFAULT
```

### DROP RETENTION POLICY
**语法**
```sql
DROP RETENTION POLICY <rp_name> ON <database_name>

```