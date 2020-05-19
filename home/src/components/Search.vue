<template>
    <div class="ickt-search">
        <input type="text" :placeholder="placeholder" v-model="msg" @keydown.enter="showSearch">
    </div>
</template>
<style lang="scss" scoped>
.ickt-search {
    background-color: #fff;
    padding: 10px 30px;
    input {
        width: 100%;
        height: 30px;
        // margin: 0 auto;
        padding: 5px 10px;
        background-color: #efefef;
        border-radius: 20px;
        outline: none;
        border: none;
    }
}
</style>
<script>
export default {
    // 接收属性
    props: ['placeholder', 'search'],
    data() {
        return {
            msg: ''
        }
    },
    methods: {
        showSearch() {
            // 将数据传递给父组件
            this.search(this.msg);
            // 清空msg
            this.msg = '';
            // console.log(this.msg);
        }
    }
}
</script>