// 引入express
let express = require('express');
// 引入middleWare
let middleWare = require('./conf/middleWare');
// 引入router
let router = require('./router');
// 引入server模块
let server = require('./server');

// 创建应用程序
let app = new express();

// 引入各自模块 启动各自模块   静态化配置模块  路由模块 模拟数据模块 搭建服务器模块
middleWare(app);
router(app);
// 执行server模块
server(app);
























