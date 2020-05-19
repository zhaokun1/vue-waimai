// 数据库连接客户端
let { MongoClient, ObjectId } = require('mongodb');
// 引入配置文件
let { MONGO_URL, MONGO_NAME, MESSAGE } = require('../conf');

function collection(collectionName, res) {
    // 返回promise对象
    return new Promise((resolve, reject) => {
        // 连接数据库
        MongoClient.connect(MONGO_URL, { useNewUrlParser: true }, (err, client) => {
            if(err) {
                res && end('databaseError', req, client)
                // 没有传递res 关闭数据库
                !res && client.close();
                // 告诉用户 操作失败
                reject(err);
                return;
            }
            // 连接数据库
            let database = client.db(MONGO_NAME)
            resolve({
                // 外界可以通过db 关闭数据库
                db: client,
                col: database.collection(collectionName)
            })
            
        })
    })
}

// 返回数据并关闭数据库
function end(data, res, db) {
    // 判断da(ta的类型是不是字符串 如果是字符串  去meaasga里面查找
    if(typeof data === 'string') {
        data = MESSAGE[data]
    }
    res.json(data);
    db.close();
}

// 暴露接口
module.exports = { collection, end, ObjectId };