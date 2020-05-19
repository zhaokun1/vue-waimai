// 引入Vue 
import Vue from 'vue';
// 引入路由
import Router from 'vue-router';
// 引入首页
import Home from '@v/Home';
// 引入默认页面
import Main from '@v/Main'

// 安装
Vue.use(Router);

export default new Router({
    // 定义规则
    routes: [
        // 不同的权限用户有不同的首页  所以将首页放在路由中
        { 
            path: '/',
            component: Home,
            //   子路由
            children: [
                // 商品模块
                { path: '/product/create', component: () => import('@v/product/Create')},
                { path: '/product/edit/:id', component: () => import('@v/product/Edit')},
                { 
                    path: '/product/list/:type', 
                    // 传递动态路由参数
                    props(route) {
                        return {
                            type: +route.params.type
                        }
                    },
                    component: () => import('@v/product/List'),
                    
                },
                // 首页模块
                { path: '/home/ads', component: () => import('@v/home/Ads')},
                { path: '/home/type', component: () => import('@v/home/Type')},
                // 用户模块
                { path: '/user/demo', component: () => import('@v/user/demo')},
                { path: '/user/create', component: () => import('@v/user/Create')},
                { path: '/user/edit/:id', component: () => import('@v/user/Edit')},
                { 
                    path: '/user/list/:type', 
                    // 传递动态路由参数
                    props(route) {
                        return {
                            type: +route.params.type
                        }
                    },
                    component: () => import('@v/user/List'),
                },
                // 默认页面
                { path: '*', component: Main }
            ]
        },
    ]
})