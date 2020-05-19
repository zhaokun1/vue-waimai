module.exports = {
    // 端口号
    HTTP_PORT: 3005,
    HTTPS_PORT: 3006,

    // 静态化
    STATICS: {
        '/static/': './static',
        '/favicon.ico/': './static/favicon.ico'
    },
    // 数据库地址
    MONGO_URL: 'mongodb://localhost:27017',
    // 数据库名称
    MONGO_NAME: 'ickt_work',

    // 提示数据
    MESSAGE: {
        // 成功
        success: { errno: 0, msg: 'success'},
        // 用户名或密码错误
        loginError: { errno: 1, msg: '用户名或密码错误' },
        // 查询集合数据失败
        collectionFindError: { errno: 2, msg: '数据库错误' },
        // 没有登陆
        notLogin: { errno: 3, msg: '用户没有登陆过，请登录' },
        // 密码更新失败
        updatePasswordError: { errno: 4, msg: '密码更新失败' },
        // 上传文件解析错误
        uploadParseError: { errno: 5, msg: '上传文件解析错误' },
        // 上传文件错误
        uploadError: { errno: 6, msg: '上传文件错误' },
        // 创建失败
        createError: { errno: 7, msg: '创建失败' },
        // 集合中没有数据
        collectionFindNoData: { errno: 8, msg: '数据库错误' },
        databaseError: { errno: 9, msg: '数据库错误' }
    },
    // 文件临时上传路径
    UPLOAD_CACHE_DIR: '/cache/upload/',
    // 文件存储路径
    UPLOAD_SAVE_DIR: '/static/upload/',
    // 根路径
    ROOT: process.cwd(),

    // 需要过滤的数组
    FILTER_ARRAY: ["img", "title", "sales", "price", "originPrice", "_id"],
       
}