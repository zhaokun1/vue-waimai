// 引入http
let http = require('http');
// 引入https
let https = require('https');
// 引入fs
let fs = require('fs');
// 引入path 
let path = require('path');
// 引入配置文件
let { HTTP_PORT, HTTPS_PORT } = require('../conf');

// 读取秘钥文件
let key = fs.readFileSync(path.join(process.cwd(), './server/ssl/private.pem'));
let cert = fs.readFileSync(path.join(process.cwd(), './server/ssl/file.crt'));


module.exports = app => {
    httpPort = process.argv[2] || HTTP_PORT
    httpsPort = process.argv[3] || process.argv[2] ? +process.argv[2] + 1 : HTTPS_PORT
    // 创建服务
    http.createServer(app)
    .listen(httpPort, res => console.log('http listen at ' + httpPort))

    https.createServer({ key, cert }, app) 
    .listen(httpsPort, res => console.log('https listen at ' + httpsPort))
}
