## 教程介绍

> 教程开始前需要掌握的知识
### 介绍
CnosDB的快速入门教程，通过本课程可以学习CnosDB数据库管理，CnosDB的查询语法，CnosDB的schema原理，与第三方生态插件的结合使用的方法以及CnosDB的最佳实践

### 数据样本

示例数据（oceanic_station）是[中国海洋观测站](http://mds.nmdis.org.cn/pages/dataViewDetail.html?dataSetId=4-1)的公开数据，数据包括在2022年1月14日到4月15日期间，在两个站点XiaoMaiDao和LianYunGang上收集到的海洋观测值，这些数据每3分钟收集一次，总共87360条观测值。
请注意，air、sea、wind中包含虚拟数据，这些数据用于阐述CnosDB中的查询功能。


### Docker
Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的镜像中，然后发布到任何流行的 Linux或Windows操作系统的机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口。
更多信息请查看[Docker官方文档](https://docs.docker.com)

### Golang

一个开源的编程语言，可以构建简单、可靠和高效的软件。
更多信息请查看[Golang官方文档](https://go.dev)