let { MESSAGE } = require('../../tools');
module.exports = (req, res) => {
    // res.json('userinfo');
    // 去session中查找 如果找的到就是登录过 找不到就是未登录
    // console.log(req.session);
    if(req.session.username) {
        // 登录过 返回信息
        return res.json({ errno: 0, data: req.session.username })
    }
    // 没有登陆过
    res.json(MESSAGE.notLogin)
}