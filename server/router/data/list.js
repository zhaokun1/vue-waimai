// 引入配置
let { collection, end, filter, FILTER_ARRAY } = require('../tools');
module.exports = (req, res) => {
    // res.json('list')
    // // 定义查询的条件
    let condition = {};
    // 如果有分类
    if(+req.query.type > 0) {
        // 设置分类
        condition.type = +req.query.type
    }
    // console.log(condition)
    collection('product')
        .then(({ col, db }) => {
            col
            .find(condition)
                // 最新
                .sort({ _id: -1 })
                // 显示10条
                .limit(10)
                // 转成数组
                .toArray()
                // 监听
                .then(data => end(filter(data, FILTER_ARRAY), res, db))
                .catch(data => end([], res, db))
        })
        .catch(err => res.json([]) )
}