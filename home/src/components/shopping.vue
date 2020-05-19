<template>
    <div class="page-shopping">
        <div class="inner">
            <span class="total">共￥{{$store.getters.price}}元</span>
            <span class="ok" @touchend="showBuyPage">选好了</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.page-shopping {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    .inner {
        display: flex;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 20px;
        color: #fff;
        .total {
            flex: 1;
            background-color: #484D54;
        }
        .ok {
            width: 100px;
            background-color: #FE2947;
        }
    }
}
</style>
<script>
export default {
    methods: {
        showBuyPage() {
            // 购物车里面有价格才可以进行跳转
            if(this.$store.getters.price > 0) {
              return this.$router.push('/buy/')
            }
            // 提示用户
            alert('请选购商品');
        }
    }
}
</script>