// 引入路由中间件
let page = require('./page');
// 引入路由中间件
// 后台
let admin = require('./admin');
// 移动端
let data = require('./data');
// 统一安装路由中间件
module.exports = app => {
    // 入口文件
    app.use(page);
    // 管理员
    app.use(admin);
    // 移动端
    app.use(data);
}
