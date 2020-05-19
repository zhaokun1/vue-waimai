// 引入数据库
let { collection, end, filter, FILTER_ARRAY } = require('../tools');
module.exports = (req, res) => {
    // res.json('search');
    // 解构
    let { type, value } = req.query;
    // 条件
    let condition = {};
    if(+type > 0) {
        condition.type = +type;
    }
    // value
    condition.title = new RegExp(value, 'i');
    collection('product', res)
        .then(({ col, db }) => {
            col
                .find(condition)
                .sort({ _id: -1 })
                .limit(10)
                .toArray()
                .then(data => end(filter(data, FILTER_ARRAY), res, db))
                .catch(err => end([], res, db)) 
        })
        // 失败
        .catch(err => res.josn([]))
}