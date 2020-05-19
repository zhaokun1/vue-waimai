import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        search: '',
        products: [],
        count: 0
        // products: [
        //     {
        //         "img": "/static/img/list/05.jpg",
        //         "title": "黑森林1个，约8英寸，圆形",
        //         "sales": 44,
        //         "price": 87,
        //         "originPrice": 128,
        //         "evaluate": 4.5,
        //         "_id": "5"
        //     },
        //     {
        //         "img": "/static/img/list/06.jpg",
        //         "title": "单人餐，包间免费",
        //         "sales": 101,
        //         "price": 13,
        //         "originPrice": 30,
        //         "evaluate": 3.8,
        //         "_id": "2"
        //     },
        //     {
        //         "img": "/static/img/list/01.jpg",
        //         "title": "四人餐，提供免费WiFi",
        //         "sales": 241,
        //         "price": 89,
        //         "originPrice": 105,
        //         "evaluate": 4.2,
        //         "_id": "3"
        //     },
        //     {
        //         "img": "/static/img/list/02.jpg",
        //         "title": "晚餐自助，提供免费WiFi",
        //         "sales": 13126,
        //         "price": 45.5,
        //         "originPrice": 60,
        //         "evaluate": 3.9,
        //         "_id": "4"
        //     }
        // ]
    },
    getters: {
        // 计算商品总价= 商品单价乘以商品数量
        price(state) {
            // return state.products.reduce((res, item) => res + parseInt(item.price), 0)
            //     // 保留两位小数
            //     .toFixed(2)
            return state.products.reduce((res, item) => res + parseInt(item.price * state.count), 0)
                // 保留两位小数
                .toFixed(2)
        }
    },
    mutations: {
        search(state, data) {
            // console.log(data);
            // 更新数据
            state.search = data;
        },
        addItem(state, data) {
            // 商品没有价格不能加入购物车
            if(Object.is(NaN, +data.price)) {
                return alert('商品没有价格 无法加入购物车')
            }
            // 加入购物车
            state.products.push(data);
            // 更新价格
        },
        deleteItem(state, data) {
            // 购物车里面没有该商品 无法删除
            let index = state.products.findIndex(item => item._id === data._id)
            //数组 删除
            if(index >= 0) {
                state.products.splice(index, 1);
            }else {
                alert('购物车里面没有该商品， 无法删除')
            }
        },
    },
    actions: {
    },
    modules: {
    }
})
