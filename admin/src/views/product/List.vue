<template>
    <div class="page-product-list">
        <h2 class="page-title">商品列表</h2>
        <!-- 主要内容 -->
        <div class="content">
            <el-card v-for="item in list" :key="item._id">
                <img :src="item.img" alt="">
                <h2>{{item.title}}</h2>
                <div class="price-part">
                    <span class="price">￥{{item.price}}</span>
                    <span class="type">{{item.type | type}}</span>
                </div>
                <p class="sales">已销售{{item.sales}}份</p>
                <div>
                    <router-link :to="'/product/edit/' + item._id" tag="el-button" class="el-button--success el-button--small">修改</router-link>
                    <el-button type="danger" size="small" @click="deleteItem(item.title, item._id)">删除</el-button>
                </div>
            </el-card>
        </div>
        <!-- 按钮 -->
        <div class="btns">
            <router-link class="is-round" tag="el-button" :to="'/product/list/' + (type > 1 ? type - 1 : 1)">&larr;上一页</router-link>
            <router-link class="is-round" tag="el-button" :to="'/product/list/' + (type + 1)">下一页&rarr;</router-link>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.page-product-list {
    .content {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        .el-card__body {
            width: (100%/3);
            padding: 10px;
            img {
                width: 250px;
                max-height: 150px;
            }
            h2 {
                font-weight: normal;
                font-size: 22px;
                text-align: center;
            }
            .price-part {
                display: flex;
                justify-content: space-between;
                font-size: 16px;
                .price {
                    color: #f30;
                }
                
            }
            
        }
    }
    .btns {
        display: flex;
        justify-content: center;
    }
}
</style>
<script>
// 引入types
import { types } from '@t/conf';
export default {
    // 接收数据
    props: ['type'],
    data() {
        return {
            list: [],
        }
    },
    // 局部过滤器
    filters:{
        // 分类过滤器 前一个输出作为过滤器的输入
        type(id) {
            // 查询types数据
            let data = types.find(item => item.id == id)
            // 返回数据
            return data ? data.text : '其他'
        }
    },
    // 组件创建完成 ,路由改变
    methods: {
        getData() {
            // 解构params
            let { params } = this.$route;
            // 发送请求
            this.$http
                .get('/admin/product/list', { params })
                .then(({ data }) => {
                    if(data.errno === 0) {
                        // 存储数据
                        return this.list = data.data
                    }
                    // 清空数据
                    this.list = [];
                    // 提示用户
                    this.$message.error(data.msg);
                })
        },
        deleteItem(title, id) {
            // console.log(id);
            // 提示用户
            this.$confirm(`确定删除${title}商品吗?`)
                .then((...args) => {
                    // 发送请求
                    this.$http
                        .get('/admin/product/delete', {
                            params:{
                                // 要删除的商品id
                                id,
                            }
                        })
                        // 监听
                        .then(({ data }) => {
                            if(data.errno === 0) {
                                // 提示用户删除成功
                                this.$message.success('删除成功');
                                // 刷新页面
                                location.reload();
                            }else {
                                this.$message.error(data.msg)
                            }
                        })
                })
        }
    },
    created() {
        this.getData();
    },
    // 路由改变
    watch: {
        $route() {
            this.getData();
        }
    }


}
</script>