<template>
    <div id="app">
        <!-- <Header title="团购"> -->
        <Header :clickBack="back">
            <router-link to="/" tag="h1">爱创课堂团购网站</router-link>
            <div slot="login">登录</div>
        </Header>
        <router-view/>
    </div>
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
}
html, body {
    background-color: #efefef;
}
</style>
<script>
// 引入header组件
import Header from '@/components/Header';
export default {
    // 注册组件
    components: { Header },
    methods:{
        back() {
            // 返回上一个页面
            this.$router.go(-1);
        }
    }
}
</script>
