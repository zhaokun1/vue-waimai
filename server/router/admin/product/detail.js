let { collection, end, ObjectId} = require('../../tools');
module.exports = (req, res) => {
    // res.json('detail')
    // 获得商品id
    let id = req.query.id
    collection('product', res)
        .then(({ col, db }) => {
            col.findOne({ _id: ObjectId(id)})
                .then(data => {
                    if(data) {
                        return end({ errno: 0, data }, res, db)
                    }
                    end('collectionFindNoData', res, db)
                })
                .catch(err => {
                    end('collectionFindNoData', res, db)
                })
        })
        .catch(err => {
            end('collectionFindError', res, db)
        })
}