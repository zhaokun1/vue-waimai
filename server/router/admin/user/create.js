let { collection, end, MESSAGE } = require('../../tools');
module.exports = (req, res) => {
    // res.json('create');
    // 增加
    collection('user', res)
        .then(({ col, db }) => {
            col
                .insertOne(req.body)
                    .then(data => {
                        if(data) {
                            // 返回数据
                            return res.json({ errno: 0, data: res.body })   
                        }
                        end('createError', res, db)
                    })
                    .catch(err => {
                        res.json(MESSAGE.collectionFindError)
                    })
        })

}