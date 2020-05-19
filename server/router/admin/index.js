// 引入router 暴露接口
let { Router } = require('express');
let login = require('./manager/login');
// 暴露接口
module.exports = new Router()
    // 验证用户名
    .get('/admin/userinfo', require('./manager/userinfo'))
    // 退出登录
    .get('/admin/logout', require('./manager/logout'))
    // 商品列表
    .get('/admin/product/list', require('./product/list'))
    // 删除商品
    .get('/admin/product/delete', require('./product/delete'))
    // 编辑商品
    .get('/admin/product/detail', require('./product/detail'))
    // 编辑用户
    .get('/admin/user/detail', require('./user/detail'))
    // 用户列表
    .get('/admin/user/list', require('./user/list'))
    // 登录
    .post('/admin/login', login)
    // 修改密码
    .post('/admin/manager/update', require('./manager/update'))
    // 上传图片
    .post('/admin/product/upload', require('./product/upload'))
    // 创建商品
    .post('/admin/product/create', require('./product/create'))
    // 修改商品
    .post('/admin/product/update', require('./product/update'))
    // 创建用户
    .post('/admin/user/create', require('./user/create'))
    // 修改用户
    .post('/admin/user/update', require('./user/update'))