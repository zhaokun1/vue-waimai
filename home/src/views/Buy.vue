<template>
    <div class="page-buy">
        <p class="total-part">
            <span class="price-title">商品总价:</span>
            <span class="price">￥{{this.$store.getters.price}}</span>
        </p>
        <p class="btn-part">
            <span class="buy-cancel" @touchend="buyCancel">取消购买</span>
            <span class="buy-ok" @touchend="buyOk">立即购买</span>
            <Num></Num>
        </p>
        <h1>购买商品</h1>
        
        <Product v-for="item in $store.state.products" :key="item._id" :data="item"></Product>
    </div>
</template>
<style lang="scss" scoped>
.page-buy {
    padding: 20px 10px;
    background-color: #fff;
    .total-part {
        padding: 10px;
        .price-title {
            font-size: 18px;
        }
        .price {
            font-size: 28px;
            color: #f30;
            margin-left: 10px;
        }
    }
    .btn-part {
        padding: 10px;
        font-size: 14px;
        margin: 0 auto;
        .buy-cancel,
        .buy-ok {
            display: inline-block;
            width: 80px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            background-color: gray;
            border-radius: 5px;
            color: #fff;
            margin-left: 130px;
        }
        .buy-ok {
            margin-left: 20px;
            background-color: #f30;
        }
    }
    h1 {
        font-weight: normal;
        font-size: 22px;
    }
}
</style>
<script>
// 引入商品组件
import Product from '@/components/Product';
// 引入数量组件
import Num from '@/components/Num';
export default {
    // 注册组件
    components: { Product, Num },
    methods:{
        buyCancel() {
            // 返回上一个页面
            this.$router.go(-1);
        },
        buyOk() {
            // 发送请求
            this.$http
                .post('/data/buy', { ids: this.$store.state.products.map(item => item._id) })
        }
    }
}
</script>