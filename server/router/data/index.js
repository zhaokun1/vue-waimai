// 引入router 暴露接口
let { Router } = require('express');
// 暴露接口
module.exports = new Router()
    // 猜你喜欢 
    .get('/data/home', require('./home'))
    // 商品列表
    .get('/data/list', require('./list'))
    // 详情
    .get('/data/detail', require('./detail'))
    // 排序
    .get('/data/order', require('./order'))
    // 查询
    .get('/data/search', require('./search'))