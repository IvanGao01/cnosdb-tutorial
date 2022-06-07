# 备份还原和下采样

## 摘要

本次分享CnosDB的数据备份还原功能和数据下采样

- 导入导出
- 备份还原
- 连续查询

## 导入导出

### 导出

```shell
Exports TSM files into CnosDB line protocol format.

Usage:
  cnosdb-inspect export [flags]

Examples:
aaa


Flags:
      --compress          Compress the output
      --database string   Optional: the database to export
      --datadir string    Data storage path (default "~/.cnosdb/data")
      --end string        Optional: the end time to export (RFC3339 format)
  -h, --help              help for export
      --out string        Destination file to export to (default "~/.cnosdb/export")
      --rp string         Optional: the retention policy to export (requires -database)
      --start string      Optional: the start time to export (RFC3339 format)
      --waldir string     WAL storage path (default "~/.cnosdb/wal")
```

#### 示例

```shell
cnosdb-inspect export --compress --database oceanic_station  --datadir ~/.cnosdb/data --out oceanic_station.zip
```




### 导入

```shell
Import a previous database export from file. [Long]

Usage:
  cnosdb-cli import [path] [Use] [flags]

Examples:
Import a previous database export from file. [Example]

Flags:
      --compressed           set to true if the import file is compressed
      --consistency string   Set write consistency level: any, one, quorum, or all. (default "all")
  -h, --help                 help for import
      --host string          Host of the CnosDB instance to connect to. (default "localhost")
  -p, --password string      Password to login to the server. If password is not given, it's the same as using (--password="").
      --path string          Path to the file to import.
      --port int             Port of the CnosDB instance to connect to. (default 8086)
      --pps int              How many points per second the import will allow.  By default it is zero and will not throttle importing.
      --precision string     Precision specifies the format of the timestamp:  rfc3339,h,m,s,ms,u or ns. (default "ns")
      --ssl                  Use https for connecting to cluster.
  -u, --username string      Username to login to the server.
```

```shell
cnosdb-cli import --compressed --consistency all --host localhost --port 8086 --precision s --path oceanic_station.zip
```

## 备份还原

### 备份
```shell
➜  ~ cnosdb backup --help
Creates a backup copy of specified CnosDB database(s) and saves the files to PATH (directory where backups are saved).

Usage:
  cnosdb backup [flags] PATH

Examples:
  cnosdb backup --start 2021-10-10T12:12:00Z

Flags:
      --database string
      --db string
      --end string
  -h, --help               help for backup
      --host string         (default "localhost:8088")
      --portable
      --retention string
      --rp string
      --shard string
      --since string
      --skip-errors
      --start string
```

#### 示例


1. 备份全部数据
```shell
cnosdb backup --portable ./backup
```

2. 备份指定数据库
```shell
cnosdb backup --portable --db oceanic_station ./backup_oceanic_station
```

3. 备份指定时间范围内的数据
```shell
cnosdb backup --portable --start 2022-03-28T00:00:00Z --end 2022-03-28T00:00:00Z ./backup_oceanic_station_part
```

### 还原

```shell
Uses backup copies from the specified PATH to restore databases or specific shards from CnosDB to an CnosDB instance.

Usage:
  cnosdb restore [flags] PATH

Examples:
  cnosdb restore

Flags:
      --database string
      --datadir string
      --db string
  -h, --help               help for restore
      --host string         (default "localhost:8088")
      --metadir string
      --newdb string
      --newrp string
      --online
      --portable
      --retention string
      --rp string
      --shard uint
```
#### 示例

1. 还原到临时数据库
```shell
cnosdb restore --portable --db oceanic_station --newdb oceanic_station_new --host localhost:8088 ./backup
```
2. 将数据写入到原有目标数据库，并删除临时数据库
```shell
SELECT * INTO oceanic_station..:MEASUREMENT FROM /.*/ GROUP BY *

DROP DATABASE oceanic_station_new
```


## 连续查询

https://www.cnosdb.com/content/cnosdb/latest/cnosql/continuous_queries.html
