<template>
    <div class="page-list">
        <!-- 搜索框 -->
        <Search placeholder="请输入搜索内容" :search="e => $store.commit('search',e)"></Search>
        <!-- 排序 -->
        <div class="orders">
            <ul class="order">
                <li v-for="item in order" :key="item.id" @touchend="clickOrder(item.id)">{{item.name}}</li>
            </ul>
        </div>
        <!-- 商品 -->
        <Product v-for="item in list" :key="item._id" :data="item"></Product>
        <!-- 查看其它几条商品 -->
        <div class="btn-others" v-show="others.length" @click="showOthers">
            <span>查看其它{{others.length}}条商品</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
// 引入配置
@import '@/base.scss';
.page-list {
    .orders {
        background-color: #fff;
        // 排序
        .order {
            display: flex;
            padding: 10px 10px 5px;
            border-bottom: 1px solid #ccc;
            text-align: center;
            height: 30px;
            line-height: 30px;
            li {
                width: (100%/4);
                border-right: 1px solid #ccc;
                font-size: 15px;
                &:last-child {
                    border-right: none;
                }
                &::after {
                    @include triangle(4px);
                    content: '';
                    position: relative;
                    top: -2px;
                    left: 5px;
                }
            }
        }
    }
    // 按钮
    .btn-others {
        background-color: #fff;
        border-bottom: 1px solid #ccc;
        height: 20px;
        padding: 5px 0;
        line-height: 20px;
        text-align: center;
        color: $color;
        font-size: 17px;
        position: relative;
        span::before,
        span::after {
            content: '';
            position: absolute;
            @include triangle(8px, $color);
            top: 11px;
            right: 123px;
        }
        span::after {
            top: 7px;
            border-top-color: #fff;
        }
        
    }
}

</style>
<script>
// 引入Search组件
import Search from '@/components/Search';
// 引入Product组件
import Product from '@/components/Product';
export default {
    // 注册组件
    components: { Search, Product },
    data() {
        return {
            // 排序
            order: [
                { name: '价格排序', id: 'price'},
                { name: '销量排序', id: 'sales'},
                { name: '好评排序', id: 'evaluate'},
                { name: '优惠排序', id: 'discount'},
            ],
            // 商品列表
            list: [],
            // 剩余商品
            others: [],
        }
    },
    methods: {
        // getData
        getData() {
            // 解构动态路由参数
            // console.log(this.$route.params);
            let { params } = this.$route;
            // 发送请求
            this.$http
                .get('/data/list', { params })
                // 监听
                .then(({ data }) => {
                    this.list = data.slice(0, 3);
                    // 剩余商品
                    this.others = data.slice(3);
                })
        },
        showOthers() {
            // 数据驱动视图  数据在list上面 均为数组 用拼接
            this.list = this.list.concat(this.others);
            // 清空others
            this.others = [];
        },
        clickOrder(id) {
            // console.log(args);
            // 解构动态路由
            let { params } = this.$route;
            // 发送请求
            this.$http
                .get('/data/order', {
                    params: {
                        // 分类
                        type: params.type,
                        // 商品id
                        id,
                        // 排序  升序还是降序
                        mode: -1
                    }
                })
                // 监听
                .then(({ data }) => {
                    // console.log(data);
                    if(!data.length) {
                        // 没有数据返回
                        return this.$message.error('没有数据');
                    }
                    // 更新视图 就是更新数据
                    this.list = data.slice(0, 3);
                    // 存储剩余成员
                    this.others = data.slice(3);
                    
                })
        }
    },
    computed: {
        // 代理state数据
        dealSearch() {
            return this.$store.state.search
        }
    },
    // 组件创建完成
    created() {
        this.getData()
    },
    // 路由改变
    watch: {
        $route() {
            this.getData()
        },
        // 监听 当搜索词发生改变的时候
        dealSearch(value) {
            let { params } = this.$route;
            this.$http
                // 发送请求
                .get('/data/search', {
                    params: {
                        // 分类
                        type: params.type,
                        // 搜索词
                        value
                    }
                })
                // 监听
                .then(({ data }) => {
                    // console.log(data);
                    if(!data.length) {
                        this.$message.error('没有数据');
                        // 清空内容
                        this.list = [];
                        this.others = []
                        return;
                    }
                    // 更新数据
                    this.list = data.slice(0, 3);
                    this.others = data.slice(3)

                })


        }
    }
}
</script>