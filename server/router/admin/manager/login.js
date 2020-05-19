// 引入collection
let { collection, end } = require('../../db');

module.exports = (req, res) => {
    // res.json('success');
    // 先放入数据库里面一条信息
    // collection('manager', res) 
    //     .then(({ col, res }) => {
    //         col.insertOne(req.body)
    //     })
    // 用户输入用户名和密码  去数据库中查找 如果数据库中存在 则登录成功 否则登录失败
    collection('manager', res) 
        .then(({ col, db }) => {
            col.findOne(req.body)
                // 监听
                .then(data => {
                    if(data) {
                        // 在session中存储用户名 这样下次就不用再次输入了
                        req.session.username = req.body.username;
                        // // 返回数据
                        // res.json({ errno: 0, data: req.body.username });
                        end({ errno: 0, data: req.body.username }, res, db)
                        return;
                    }
                    end('loginError', res, db)
                })
                .catch(err => {
                    // 提示信息并关闭数据库
                    end('collectionFindError', res, db);
                })
        })
}