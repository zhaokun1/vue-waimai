let { collection, end } = require('../../tools');
module.exports = (req, res) => {
    // res.json('update');
    collection('manager', res)
        .then(({ col, db }) => {
            // 修改数据库里面的数据
            col
                .updateOne(
                    // 查询条件
                    { username: req.session.username },
                    // 更新内容
                    { $set: req.body }
                )
                // 监听
                .then(data => {
                    if(data.result.n > 0) {
                        // 删除现有信息 重新登录
                        delete req.session.username;
                        // 更新成功返回数据
                        return end('success', res, db)
                    }
                    end('updatePasswordError', res, db)
                })
                .catch('collectionFindError', res, db)
        })
}