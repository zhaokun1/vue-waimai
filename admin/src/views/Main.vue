<template>
    <div class="page-main">
        <h2 class="page-title">{{title}}</h2>
        <el-form label-width="200px" :model="data" :rules="rules" ref="ref">
            <el-form-item label="用户名" prop="username">
                <el-input placeholder="请输入用户名" v-model="data.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input placeholder="请输入密码" v-model="data.password"></el-input>
            </el-form-item>
            <el-form-item label="重复密码" prop="repeat">
                <el-input placeholder="请重复输入密码" v-model="data.repeat"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="submit">提交</el-button>
                <el-button type="warning" @click="reset">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
// 引入
import { username, password, repeat } from '@t/validator';
export default {
    data() {
        return {
            title: '修改密码',
            data: {},
            rules: {
                username: [{ trigger: 'blur', validator: username}],
                password: [{ trigger: 'blur', validator: password}],
                repeat: [{ 
                    trigger: 'blur', 
                    validator: (...args) => repeat(this.data.password, '密码', ...args)
                }],

            }
        }
    },
    methods: {
        // 重置
        reset() {
            this.$refs.ref.resetFields()
        },
        // 提交
        submit() {
            this.$refs.ref
                .validate(valid => {
                    // console.log(valid)
                    
                    if(valid) {
                        // 解构数据
                        let { username, password } = this.data;
                        // 发送请求
                        this.$http
                            .post('/admin/manager/update', { username, password } )
                            .then(({ data }) => {
                                // console.log(data)
                                if(data.errno === 0) {
                                    // 返回重新登录
                                    return location.reload();
                                }
                                // 提示用户
                                this.$message.error(data.msg);
                            })
                    }
                })
        }
    }
}
</script>