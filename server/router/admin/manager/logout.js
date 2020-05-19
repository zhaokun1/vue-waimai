module.exports = (req, res) => {
    // res.json('logout');
    // 清除session数据
    delete req.session.username;
    // 返回登录页重新登录
    res.redirect('/admin')
}