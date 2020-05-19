// 引入路由
let { Router } = require('express');
let home = require('./home');
let admin = require('./admin');
// 创建中间件 暴露接口
module.exports = new Router()
    // 创建路由--移动端
    .get('/', home)
    // 创建路由--管理员
    .get('/admin',  admin)