<template>
    <div class="page-user-create">
        <h2 class="page-title">{{title}}</h2>
        <el-form label-width="200px" :model="data">
            <el-form-item label="性别:" prop="sex">
                <el-radio v-model="data.sex" :label='1'>男</el-radio>
                <el-radio v-model="data.sex" :label='2'>女</el-radio>
            </el-form-item>
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
export default {
    data() {
        return {
            title: '创建用户',
            data: {
                sex: 2
            }
        }
    }
}
</script>