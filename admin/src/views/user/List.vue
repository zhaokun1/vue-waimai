<template>
    <div class="page-user-list">
        <!-- {{list}} -->
        <h2 class="page-title">用户列表</h2>
        <el-table :data="list" style="width: 100%">
            <el-table-column type="index" :index="indexMethod" label="用户ID" width="180"></el-table-column>
            <el-table-column v-for="item in tableTitle" :key="item._id" :prop="item.tableProp" :label="item.label" width="150">
            </el-table-column>
        </el-table>
        <!-- 按钮 -->
        <div class="btns">
            <router-link class="is-round el-button--primary is-plain" tag="el-button" :to="'/user/list/' + (type > 1 ? type - 1 : 1)">&larr;前一页</router-link>
            <router-link class="is-round el-button--primary is-plain" tag="el-button" :to="'/user/list/' + (type + 1)">后一页&rarr;</router-link>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.page-user-list {
    .btns {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        color: blue;
    }
}
</style>
<script>
export default {
    // 接收数据
    props: ['type'],
     data() {
        return {
            // 表格数据
            list: [],
            // 用户ID
            // userIndex,
            // 属性
            tableTitle: [
                // { tableProp: 'dealUserIndex', label: '用户ID'},
                { tableProp: 'username', label: '用户名'},
                { tableProp: 'sex', label: '性别'},
                { tableProp: 'password', label: '密码'},
                { tableProp: 'tel', label: '电话'},
                { tableProp: 'intro', label: '简介'},
            ]
        }
     },
    computed: {
         dealsex() {
            // 数组
            this.list.forEach(item => {
                if(item.sex == 1) {
                    return item.sex = 'man'
                }
                item.sex = 'woman'
            })
        },
    },
    methods: {
        indexMethod(index) {
            return index++
        },
        
        getData() {
            // 解构params
            let { params } = this.$route;
            // 发送请求
            this.$http
                .get('/admin/user/list', { params })
                .then(({ data }) => {
                    if(data.errno === 0) {
                        // 存储数据
                        return this.list = data.data
                    }
                    // 清空数据
                    this.list = [];
                    // 提示用户
                    this.$message.error(data.msg);
                })
        }
    },
    // 组件创建完成的时候
    created() {
        this.getData()
    },
    // 路由改变
    watch: {
        $route() {
            this.getData();
        }
    }

}
</script>