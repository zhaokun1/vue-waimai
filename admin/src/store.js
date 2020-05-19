// 引入vue
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
// 引入axios
import axios from 'axios';
// 引入消息提供模块
import { Message } from 'element-ui';


// 安装
Vue.use(Vuex);

export default new Store({
    state: {
        username: ''
    },
    getter: {},
    mutations: {
        getUsername(state, username) {
            // 更新数据
            state.username = username
        }
    },
    actions: {
        // 用户输入数据  需要去数据库中查找  查找到监听
        login(store, data) {
            // 发布请求
            axios
                .post('/admin/login', data)
                // 监听
                .then(({ data }) => {
                    // console.log(data);
                    if(data.errno === 0) {
                        // 发布同步消息
                        return store.commit('getUsername', data.data)
                    }
                    // 没有数据
                    Message.error(data.msg)
                })
            
        },
        // 检测是否登录
        userinfo(store) {
            // 发送请求
            axios  
                .get('/admin/userinfo')
                .then(({ data }) => {
                    if(data.errno === 0) {
                        // 发布同步消息 存储用户名
                        store.commit('getUsername', data.data)
                    }
                })
        }
    }
})