let { collection, end, ObjectId} = require('../../tools');
module.exports = (req, res) => {
    // res.json('delete')
    // 用户要删除的商品ID
    let id = req.query.id;
    collection('product', res)
        .then(({ col, res }) => {
            col.removeOne({ _id: ObjectId(id)})
                .then(data => {
                    // console.log(args)
                    if(data.result.n > 0) {
                        // 成功
                        return end('success', res, db)
                    }
                    end('collectionFindNoData', res, db)
                })
                .catch(err => {
                    end('collectionFindError', res, db)
                })
        })
}