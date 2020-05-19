<template>
    <div id="app">
        <!-- 有用户名显示首页 没有用户名显示登录页面 -->
        <router-view v-if="$store.state.username"></router-view>
        <Login v-else></Login>
    </div>
</template>
<style lang="scss">
html,
body {
    margin: 0;
    padding: 0;
    background-color: #efefef;
}
html,
body,
#app {
    height: 100%;
}
</style>
<script>
// 引入login
import Login from '@v/Login';
export default {
    // 注册
    components: { Login },
    // 组件创建完成的时候检测是否登录
    created() {
        // 发布异步请求
        this.$store.dispatch('userinfo')
    }
}
</script>