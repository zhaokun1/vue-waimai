let { collection, end, ObjectId } = require('../../tools');
module.exports = (req, res) => {
    // res.json('update');
    // 获取用户提交的id
    let id = req.body._id;
    // 删除id
    delete req.body._id;
    collection('product', res)
        .then(({ col, db }) => {
            col
                .updateOne(
                    { _id: ObjectId(id)},
                    { $set: req.body }    
                )
                .then(data => {
                    if(data.result.n > 0) {
                        return end('success', res, db)
                    }
                    end('collectionFindNoData', res, db)
                })
                .catch('collectionFindError', res, db)

        })
}