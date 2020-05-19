let { collection, end, filter, FILTER_ARRAY } = require('../tools')
module.exports = (req, res) => {
    // res.json('home')
    collection('product', res)
        .then(({ col, db }) => {
            col
                .find()
                // 显示最新的
                .sort({ _id: -1 })
                // 显示10条
                .limit(10)
                // 转化成数组
                .toArray()
                // 监听
                .then(data => {
                    // console.log(data);
                    // 返回数据
                    // end({ list: filter(data, FILTER_ARRAY) }, res, db)
                    res.json({
                        list: filter(data, FILTER_ARRAY),
                        ad: filter(data.slice(0, 3), FILTER_ARRAY)
                    })
                    // 关闭数据库
                    db.close();
                })  
                .catch(err => {
                    end({ list: [], res, db })
                })
        })
}