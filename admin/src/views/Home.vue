<template>
    <el-container class="page-home">
        <!-- 头部 -->
        <el-header>
            <h1>爱创课堂后台管理系统</h1>
            <div class="info">
                <span>您好</span>
                <span class="username">{{$store.state.username}}</span>
                <span>欢迎回来！</span>
                <a href="/admin/logout">退出</a>
            </div>
        </el-header>
        <!-- 中间部分 -->
        <el-container>
            <el-aside width="250px">
                <!-- 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
                <el-menu :router="true">
                    <!-- submenu 有index 类型为string/null作为唯一标识 -->
                    <el-submenu v-for="(item, index) in menu" :key="index" :index="String(index)">
                        <!-- 模板元素 -->
                        <template #title>
                            <!-- 样式 -->
                            <i class="el-icon-menu"></i>
                            <span>{{item.name}}</span>
                        </template>
                        <!-- menu-item 有index 类型为string作为唯一标识 -->
                        <el-menu-item v-for="childItem in item.children" :key="childItem.link" :index="String(childItem.link)">{{childItem.name}}
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>
<style lang="scss">
.page-home {
    height: 100%;
    .el-header,
    .el-aside,
    .el-main {
        background-color: #fff;
    }
    .el-header {
        margin-bottom: 10px;
        padding: 10px 10px 5px;
        display: flex;
        align-items: center;
        h1 {
            flex: 1;
        }
        .username {
            font-weight: bold;
        }
    }
    .el-main {
        margin-left: 10px;
    }
    // 页面之间共享的样式
    .page-title {
        font-size: 24px;
        font-weight: normal;
        padding: 5px 10px 15px;
        margin: 0;
        margin-bottom: 30px;
        border-bottom: 1px solid #ccc;
    }
    .el-input,
   
    .el-textarea__inner {
        width: 50%;
    }
    .el-select {
        width: 100%;
    }
}
</style>
<script>
export default {
    data() {
        return {
            menu: [
                {
                    name: '商品模块',
                    children: [
                        { name: '创建商品', link: '/product/create' },
                        { name: '商品列表', link: '/product/list/:type' },
                    ]
                },
                {
                    name: '首页模块',
                    children: [
                        { name: '首页广告', link: '/home/ads' },
                        { name: '分类按钮', link: '/product/type' },
                    ]
                },
                {
                    name: '用户模块',
                    children: [
                        { name: '创建用户', link: '/user/create' },
                        { name: '用户列表', link: '/user/list/:type' },
                    ]
                },
                
            ]
        }
    }
}
</script>