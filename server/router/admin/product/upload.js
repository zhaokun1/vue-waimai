// 引入formidable
let Formidable = require('formidable');
// 引入path
let path = require('path');
// 引入fs模块
let fs = require('fs');
// 引入配置文件
let { UPLOAD_CACHE_DIR, ROOT, UPLOAD_SAVE_DIR, MESSAGE} = require('../../tools');

module.exports = (req, res) => {
    // res.json('uoload');
    // 实例化
    let fd = new Formidable();
    // 设置文件的临时上传路径
    fd.uploadDir = path.join(ROOT, UPLOAD_CACHE_DIR);
    // 解析请求对象
    fd.parse(req, (err, data, files) => {
        // console.log(files)
        if(err) {
            // 上传文件解析错误
            return res.json(MESSAGE.uploadParseError)
        }
        
        // 重写文件名  文件名由20位随机数组成
        let filePath = UPLOAD_SAVE_DIR + 
            String(Math.random()).slice(2, 12) + 
            String(Math.random()).slice(2, 12) +path.extname(files.file.name);
        // console.log(filePath);
        // 重写
        fs.rename(files.file.path, path.join(ROOT, filePath), err => {
            if(err) {
                return res.json(MESSAGE.uploadError);
            }
            // 上传成功 保存文件信息
            res.json({ errno: 0, data: filePath })
        })

    })
}