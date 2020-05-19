// 引入path
let path = require('path');
// 定义根目录
let root = process.cwd();
// 区分开发环境和发布环境
if(process.env.NODE_ENV === 'production') {
    module.exports = {
        // 静态资源的发布位置static目录下
        outputDir: path.join(root, '../server/static/home'),
        // 模板资源发布位置view目录下	
        indexPath: path.join(root, '../server/views/home.html'),
        // 模板中，静态文件相对路径
        publicPath: '/static/home'
    }
}else {
    // 请求代理对象
    let proxyObj = {
        target: 'http://localhost:3005/'
    }
    module.exports = {
        devServer: {
            proxy: {
                // 首页
                '/data/home': proxyObj,
                // 列表页
                '/data/list': proxyObj,
                // 排序
                'data/order': proxyObj,
                // 搜索
                '/data/search': proxyObj, 
                // 详情
                'data/detail': proxyObj,  
            }
        }
    }
}