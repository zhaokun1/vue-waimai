import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
    routes:  [
        { path: '/buy', component: () => import('@/views/Buy.vue') },
        { path: '/detail/:id', component: () => import('@/views/Detail.vue') },
        { path: '/list/:type', component: () => import('@/views/List.vue') },
        // 默认页面
        { path: '*', component: Home },
    ]
})

