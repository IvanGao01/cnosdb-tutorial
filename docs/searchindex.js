Object.assign(window.search, {"doc_urls":["module-01/index.html#cnosdb入门","module-01/index.html#什么是时序数据","module-01/index.html#cnosdb简介","module-01/index.html#快速开始","module-01/index.html#使用docker启动","module-01/index.html#导入示例数据","module-01/index.html#cnosql-vs-sql","module-01/index.html#查询入门","module-01/index.html#课堂问题"],"index":{"documentStore":{"docInfo":{"0":{"body":4,"breadcrumbs":2,"title":1},"1":{"body":0,"breadcrumbs":1,"title":0},"2":{"body":0,"breadcrumbs":2,"title":1},"3":{"body":0,"breadcrumbs":1,"title":0},"4":{"body":9,"breadcrumbs":2,"title":1},"5":{"body":23,"breadcrumbs":1,"title":0},"6":{"body":14,"breadcrumbs":4,"title":3},"7":{"body":7,"breadcrumbs":1,"title":0},"8":{"body":11,"breadcrumbs":1,"title":0}},"docs":{"0":{"body":"摘要 什么是时序数据？ CnosDB简介 快速开始 CnosQL VS SQL 查询入门","breadcrumbs":"CnosDB入门 » CnosDB入门","id":"0","title":"CnosDB入门"},"1":{"body":"时序数据是指时间序列数据。是按 时间顺序 记录的数据列，在同一数据列中的各个数据必须是同口径的，要求具有可比性。 场景 天气","breadcrumbs":"CnosDB入门 » 什么是时序数据？","id":"1","title":"什么是时序数据？"},"2":{"body":"时序数据管理系统 - 主要通过对时序数据的采集、处理和分析帮助企业实时监控企业的生产与经营过程。 数据是时序的，一定带有时间戳 数据极少有更新操作 数据的写入多，读取少 用户关注的是一段时间的趋势 数据是有保留期限的 除了存储查询外，还需要实时的计算操作 数据量巨大，每天很容易就会过百亿 时序数据库 - 用于处理带时间标签（按照时间的顺序变化，即时间序列化）的数据","breadcrumbs":"CnosDB入门 » CnosDB简介","id":"2","title":"CnosDB简介"},"3":{"body":"","breadcrumbs":"CnosDB入门 » 快速开始","id":"3","title":"快速开始"},"4":{"body":"docker pull cnosdb/cnosdb:latest\ndocker run -itd -p 8086:8086 cnosdb/cnosdb:latest","breadcrumbs":"CnosDB入门 » 使用Docker启动","id":"4","title":"使用Docker启动"},"5":{"body":"如何提示bash: wget: command not found 请下载wget工具: apt-get update && apt-get install wget docker exec -it container_id bash # 进入容器 wget https://gist.githubusercontent.com/cnos-db/d6dad9766870a1ef50209e73d178e4d0/raw/a2ac4e57a43f68f9f2d5cacb0af15e45e8c5d4e6/NOAA_data.txt cnosdb-cli import --path NOAA_data.txt # 导入数据到cnosdb","breadcrumbs":"CnosDB入门 » 导入示例数据","id":"5","title":"导入示例数据"},"6":{"body":"时间序列数据在聚合场景中最有用 CnosDB 中的measurement类似于一个 SQL 中的table CnosDB 中的tag就像 SQL 中的一个带索引的列 CnosDB 中的field就像 SQL 中的没有索引的列 CnosDBpoints类似于 SQL 中的行 CnosDB 中不需要预定义schema","breadcrumbs":"CnosDB入门 » CnosQL vs SQL","id":"6","title":"CnosQL vs SQL"},"7":{"body":"SELECT statement FROM, WHERE, INTO, 和 GROUP BY clauses CnosQL function Subqueies","breadcrumbs":"CnosDB入门 » 查询入门","id":"7","title":"查询入门"},"8":{"body":"时序数据和时序数据的关系是什么？ 写出一条符合CnosDB格式的数据 查询出2019-08-17T00:00:00Z到2019-09-18T00:00:00Z期间在santa_monica水位最高的一条数据 查询出2019-08-17T00:00:00Z到2019-09-18T00:00:00Z期间coyote_creek每天的平均水温是多少","breadcrumbs":"CnosDB入门 » 课堂问题","id":"8","title":"课堂问题"}},"length":9,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"8":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"9":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"1":{"7":{"df":0,"docs":{},"t":{"0":{"0":{":":{"0":{"0":{":":{"0":{"0":{"df":0,"docs":{},"z":{"df":0,"docs":{},"到":{"2":{"0":{"1":{"9":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"8":{"df":0,"docs":{},"t":{"0":{"0":{":":{"0":{"0":{":":{"0":{"0":{"df":0,"docs":{},"z":{"df":0,"docs":{},"期":{"df":0,"docs":{},"间":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"_":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"k":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"在":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"_":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"c":{"a":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"2":{"0":{"1":{"9":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"8":{"0":{"8":{"6":{":":{"8":{"0":{"8":{"6":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"d":{"b":{"/":{"c":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"d":{"b":{":":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":5,"docs":{"0":{"tf":1.4142135623730951},"2":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":2.0},"8":{"tf":1.0}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{"df":3,"docs":{"0":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"_":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"d":{"b":{"/":{"d":{"6":{"d":{"a":{"d":{"9":{"7":{"6":{"6":{"8":{"7":{"0":{"a":{"1":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"5":{"0":{"2":{"0":{"9":{"df":0,"docs":{},"e":{"7":{"3":{"d":{"1":{"7":{"8":{"df":0,"docs":{},"e":{"4":{"d":{"0":{"/":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"w":{"/":{"a":{"2":{"a":{"c":{"4":{"df":0,"docs":{},"e":{"5":{"7":{"a":{"4":{"3":{"df":0,"docs":{},"f":{"6":{"8":{"df":0,"docs":{},"f":{"9":{"df":0,"docs":{},"f":{"2":{"d":{"5":{"c":{"a":{"c":{"b":{"0":{"a":{"df":0,"docs":{},"f":{"1":{"5":{"df":0,"docs":{},"e":{"4":{"5":{"df":0,"docs":{},"e":{"8":{"c":{"5":{"d":{"4":{"df":0,"docs":{},"e":{"6":{"/":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"a":{"a":{"_":{"d":{"a":{"df":0,"docs":{},"t":{"a":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"4":{"tf":1.7320508075688772},"5":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"c":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"t":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"m":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"o":{"a":{"a":{"_":{"d":{"a":{"df":0,"docs":{},"t":{"a":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"p":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":1,"docs":{"4":{"tf":1.0}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}},"q":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.0},"6":{"tf":2.23606797749979}}}},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"u":{"b":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":1.0},"6":{"tf":1.0}}}},"w":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":2.0}}}}}}}},"breadcrumbs":{"root":{"0":{"8":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"9":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"1":{"7":{"df":0,"docs":{},"t":{"0":{"0":{":":{"0":{"0":{":":{"0":{"0":{"df":0,"docs":{},"z":{"df":0,"docs":{},"到":{"2":{"0":{"1":{"9":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"8":{"df":0,"docs":{},"t":{"0":{"0":{":":{"0":{"0":{":":{"0":{"0":{"df":0,"docs":{},"z":{"df":0,"docs":{},"期":{"df":0,"docs":{},"间":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"_":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"k":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"在":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"_":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"c":{"a":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"2":{"0":{"1":{"9":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"8":{"0":{"8":{"6":{":":{"8":{"0":{"8":{"6":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"d":{"b":{"/":{"c":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"d":{"b":{":":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":9,"docs":{"0":{"tf":2.0},"1":{"tf":1.0},"2":{"tf":1.7320508075688772},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.7320508075688772},"6":{"tf":2.23606797749979},"7":{"tf":1.0},"8":{"tf":1.4142135623730951}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{"df":3,"docs":{"0":{"tf":1.0},"6":{"tf":1.4142135623730951},"7":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"_":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"d":{"b":{"/":{"d":{"6":{"d":{"a":{"d":{"9":{"7":{"6":{"6":{"8":{"7":{"0":{"a":{"1":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"5":{"0":{"2":{"0":{"9":{"df":0,"docs":{},"e":{"7":{"3":{"d":{"1":{"7":{"8":{"df":0,"docs":{},"e":{"4":{"d":{"0":{"/":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"w":{"/":{"a":{"2":{"a":{"c":{"4":{"df":0,"docs":{},"e":{"5":{"7":{"a":{"4":{"3":{"df":0,"docs":{},"f":{"6":{"8":{"df":0,"docs":{},"f":{"9":{"df":0,"docs":{},"f":{"2":{"d":{"5":{"c":{"a":{"c":{"b":{"0":{"a":{"df":0,"docs":{},"f":{"1":{"5":{"df":0,"docs":{},"e":{"4":{"5":{"df":0,"docs":{},"e":{"8":{"c":{"5":{"d":{"4":{"df":0,"docs":{},"e":{"6":{"/":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"a":{"a":{"_":{"d":{"a":{"df":0,"docs":{},"t":{"a":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"4":{"tf":2.0},"5":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"c":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"t":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"m":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"o":{"a":{"a":{"_":{"d":{"a":{"df":0,"docs":{},"t":{"a":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"p":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":1,"docs":{"4":{"tf":1.0}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}},"q":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.0},"6":{"tf":2.449489742783178}}}},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"u":{"b":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":1.0},"6":{"tf":1.4142135623730951}}}},"w":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":2.0}}}}}}}},"title":{"root":{"c":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"d":{"b":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"d":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}}},"v":{"df":0,"docs":{},"s":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});