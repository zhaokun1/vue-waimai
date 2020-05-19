// 模拟数据
app.post('/admin/login', (req, res) => res.json({ errno: 0, data: 'ickt' }));
// app.post('/admin/login', (req, res) => res.json({ errno: 1, msg: '没有数据' }))
// app.get('/data/userinfo', (req, res) => res.json({ errno: 0, data: 'ickt'}));
app.post('/admin/manager/update', (req, res) => res.json({ errno: 0 }))
// app.post('/admin/manager/update', (req, res) => res.json({ errno: 1, msg: '更改密码失败' }))
app.post('/admin/product/upload', (req, res) => res.json({ errno: 0, data: '/static/img/icon/01.png'}))
app.post('/admin/product/create', (req, res) => res.json({ errno: 0 }))
app.get('/admin/product/delete', (req, res) => res.json({ errno: 0 }));

app.post('/admin/product/update', (req, res) => res.json({ errno: 0 }))
// 模拟mock数据
app.use('/admin/', (req, res, next) => {
    // 要求输入detail也可以跳转到detail  要求可以携带数据
    let arr = req.url.split('?');
    // 添加扩展名
    arr[0] += '.json'
    // 拼接地址
    req.url = arr.join('?')
    // 进入下一个
    next()
}, express.static(path.join(process.cwd(), './static/data')))