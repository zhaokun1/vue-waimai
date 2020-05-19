let { collection, end, ObjectId} = require('../tools');
module.exports = (req, res) => {
    // res.json('detail');
    // 获取商品id
    let id = req.query.id;
    collection('product', res)
        .then(({ col, db }) => {
            col
                .findOne({ _id: ObjectId(id) })
                .then(data => {
                    end(data, res, db)
                })
                .catch(data => end({}, res, db))
        })
        .catch(err => res.json({}))
}