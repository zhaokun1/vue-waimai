// 引入express
let express = require('express');
// 引入path 
let path = require('path');
// 引入ejs
let ejs = require('ejs');
// 引入body-parser
let bodyParser = require('body-parser');
// 引入express-session
let session = require('express-session');
// 引入STATICS
let { STATICS } = require('./index');
// 暴露接口
module.exports = app => {
    // 配置bodyParser
    app.use(bodyParser.json());
    // 配置session
    app.use(session({
        secret: 'icketang',
        resave: false,
        saveUninitialized: true
    }))

    // 拓展名
    app.engine('.html', ejs.__express);
    // static静态化
    // app.use('/static/', express.static(path.join(process.cwd(), './static')))
    // // 头像静态化
    // app.use('/favicon.ico/', express.static(path.join(process.cwd(), './static/favicon.ico')))
    // 遍历STATICS
    for(let key in STATICS ) {
        app.use(key, express.static(path.join(process.cwd(), STATICS[key])))
    }
}
