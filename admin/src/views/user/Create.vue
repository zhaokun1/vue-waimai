<template>
    <div class="page-user-create">
        <h2 class="page-title">{{title}}</h2>
        <el-form label-width="200px" :model="data" :rules="rules" ref="submit">
            <el-form-item label="用户名:" prop="username">
                <el-input placeholder="请输入用户名" v-model="data.username"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="password">
                <el-input placeholder="请输入密码" type="password" v-model="data.password"></el-input>
            </el-form-item>
            <el-form-item label="电话:" prop="tel">
                <el-input placeholder="请输入电话号码" type="number" v-model="data.tel"></el-input>
            </el-form-item>
            <el-form-item label="性别:" prop="sex">
                <el-radio v-model="data.sex" label='man'>男</el-radio>
                <el-radio v-model="data.sex" label='woman'>女</el-radio>
            </el-form-item>
            <el-form-item label="简介:" prop="intro">
                <el-input type="textarea" placeholder="请输入简介" v-model="data.intro"></el-input>
            </el-form-item>
            <el-button type="success" @click="submit(title)">提交</el-button>
        </el-form>
    </div>
</template>
<style lang="scss" scoped>
.page-user-create {
    .el-button {
        position: relative;
        left: 25%;
    }
}
</style>
<script>
// 引入用户名密码
import { username, password, tel } from '@t/validator'; 
export default {
    data() {
        return {
            title: '创建用户',
            data: {
                sex: 'woman',
            },
            rules: {
                username: [{ trigger: 'blur', validator: username }],
                password: [{ trigger: 'blur', validator: password }],
                tel: [{ trigger: 'blur', validator: tel }],
                // sex: [{ trigger: 'blur'}],
                intro: [{ trigger: 'blur', message: '请输入简介' }]
            },
            // 提交地址
            submitUrl: '/admin/user/create',
        }
    },
    computed: {
        // 处理数据  电话号码为数字类型
        dealData() {
            // this.data是一个对象
            for(let i in this.data) {
                this.data.tel = parseInt(this.data.tel);
            }
            return this.data
        }
    },
    methods: {
        submit(title) {
            this.$refs.submit
                .validate(valid => {
                    if(valid) {
                        // 发送请求
                        this.$http
                            .post(this.submitUrl, this.dealData)
                            // 监听
                            .then(({ data }) => {
                                if(data.errno === 0) {
                                    // 进入列表页
                                    this.$router.replace('/user/list/1')
                                    // 告诉用户创建成功
                                    this.$message.success(`${title}成功`)
                                    
                                }else {
                                    this.$message.error(data.msg)
                                }
                            })
                    }
                })
        }
    }
}
</script>