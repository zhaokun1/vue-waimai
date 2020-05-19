let { collection, end } = require('../../tools');
module.exports = (req, res) => {
    // res.json('list');
    // 获取页码
    page = req.query.type - 1;
    page = page >= 0 ? page : 0;
    collection('user', res)
        .then(({ col, db }) => {
            col
                .find()
                // 显示最新商品的信息
                .sort({ _id: -1 })
                // 跳过多少
                .skip(page * 5)
                // 显示8条
                .limit(5)
                // 转成数组
                .toArray()
                .then(data => {
                    // 如果有数据
                    if(data.length) {
                        // 返回数据
                        return end({ errno: 0, data }, res, db)
                    }
                    // 没有数据
                    end('collectionFindNoData', res, db)
                })
        })
        .catch(err => {
            end('collectionFindError', res, db)
        })
}