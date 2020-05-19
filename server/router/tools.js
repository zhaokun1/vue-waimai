let conf = require('../conf');
let db = require('./db');

// 过滤数组的方法
// 第一个参数表示过滤的数据 第二个参数表示过滤传递的参数
function filter(data, arr) {
    // 如果data是一个数组  将data映射成新数组
    let result = Array.isArray(data) && data.map(item => {
        // 定义结果对象
        let obj = {};
        // 将arr中的属性添加到obj上
        arr.forEach(key => obj[key] = item[key])

        return obj;
    })
    // console.log(result);
    return result || []
    
};
// 暴露接口
module.exports = { ...conf, ...db, filter }