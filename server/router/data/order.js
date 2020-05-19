// 引入配置
let { collection, end, filter, FILTER_ARRAY } = require('../tools');
module.exports = (req, res) => {
    // res.json('order')
    // 解构数据
    let { type, id, mode } = req.query
    // 查询条件
    let condition = {};
    if(+type > 0) {
        condition.type = +type
    }
    // 如果是优惠  单独处理
    if(id === 'discount') {
        return collection('product', res)
            .then(({ col, db }) => {
                col
                    .find(condition)
                    // 转成数组
                    .toArray()
                    // 监听结果
                    .then(data => {
                        if(data.length) {
                            // 排序
                            data.sort((a, b) => {
                                return mode *(a.orignPrice - a.price) -mode *(b.orignPrice - b.price)
                            })
                            // 截取10条
                            data = data.slice(0, 10);
                            // 返回结果
                            end(filter(data, FILTER_ARRAY), res, db)

                        }else {
                            // 没有数据
                            end([], res, db)
                        }
                    })
                    .catch(err => end([], res, db))
            })
            // 监听失败
            .catch(err => res.json([])) 
    }
    // 其余
    collection('product')
        .then(({ col, db }) => {
            col
                .find(condition)
                .sort({ [id]: +mode })  
                .limit(10)
                .toArray()
                // 监听
                .then(data => end(filter(data, FILTER_ARRAY), res, db))
                // 失败
                .catch(err => end([], res, db))

        })
        // 监听失败
        .catch(err => res.json([])) 
}