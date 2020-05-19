<template>
    <div class="login-page">
        <h1>请您登录</h1>
        <el-form label-width="100px" :model="data" :rules="rules" ref="login">
            <el-form-item label="用户名" prop="username">
                <el-input placeholder="请输入用户名" v-model="data.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input placeholder="请输入密码" type="password" v-model="data.password"></el-input>
            </el-form-item>
            <el-button type="success" @click="login">登录</el-button>
        </el-form>
    </div>
</template>
<style lang="scss" scoped>
.login-page {
    background-color: #fff;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
    width: 400px;
    height: 250px;
    h1 {
        padding: 10px;
        font-size: 22px;
        border-bottom: 1px solid #ccc;
    }
    .el-button {
        display: block;
        width: 100%;
    }
}
</style>
<script>
// 引入方法
import { username, password } from '@t/validator';
export default {
    data() {
        return {
            data: {},
            rules: {
                username: [{ trigger: 'blur', validator: username }],
                password: [{ trigger: 'blur', validator: password }]
            }
        }
    },
    methods: {
        login() {
            this.$refs.login
                .validate(valid => valid && this.$store.dispatch('login', this.data)
                    // console.log(valid)
                    // 用户输入的数据 在当前页面用不到 在别的页面可以用到 发送异步请求
                )
        }
    }
}
</script>