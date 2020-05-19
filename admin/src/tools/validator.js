// 用户名
export function username(field, value, cb) {
    // 正则校验reg.test(str)
    if(!/^\w{4,8}$/.test(value)) {
        // 提示用户
        return cb( new Error('请输入4-8位的数字，字母，下划线'))
    }
    // 合法
    cb()
}
// 密码
export function password(field, value, cb) {
    // 正则校验reg.test(str)
    if(!/[A-z].*\d|\d.*[A-z]/.test(value)) {
        // 提示用户
        return cb( new Error('密码要包含字母和数字'))
    }
    // 合法
    cb()
}
// 重复密码
export function repeat(firsetPassword, text, field, value, cb) {
    if(!value) {
        // 提示用户
        return cb( new Error('密码要包含字母和数字'))
    }
    // console.log(firsetPassword, text, value)
    // 上一次输入的密码和此处输入的密码食是否一致
    if(firsetPassword !== value) {
        // 提示用户
        return cb(`${text}与重复${text}不一致,请检查后重新输入`)
    }
    cb()

}

// 电话
export function tel(field, value, cb) {
    // 正则校验reg.test(str)
    if(!/^\d{11}$/.test(value)) {
        // 提示用户
        return cb( new Error('请输入11位的电话号码'))
    }
    // 合法
    cb()
}

