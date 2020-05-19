<template>
    <router-link tag="div" :to="'/detail/'+ data.
    _id" class="ickt-product">
        <ul class="product">
            <li>
                <img :src="data.img" alt="">
                <div class="info">
                    <h3>{{data.title}}</h3>
                    <div class="info-part">
                        <div class="price-part">
                            <span class="price">{{data.price}}元</span>
                            <span class="orignPrice">门市价:{{data.originPrice}}元</span>
                        </div>
                        <span class="sales">销量:{{data.sales}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </router-link>
</template>
<style scoped lang="scss">
@import '@/base.scss';
.ickt-product {
    background-color: #fff;
    padding: 10px 0;
    .product {
        li {
            display: flex;
            border-bottom: 1px solid gray;
            img {
                width: 30%;
            }
            .info {
                flex: 1;
                margin-left: 10px;
                h3 {
                    font-size: 16px;
                    margin-bottom: 20px;
                    
                }
                .info-part {
                    display: flex;
                    font-size: 14px;
                    .price-part {
                        flex: 1;
                        .price {
                        color: $color;
                        }
                        .orignPrice {
                            color: #ccc;
                            margin-left: 8px;
                        }
                    }
                    .sales {
                        width: 80px;
                    }
                    
                }
            }
        }
    }
}
</style>
<script>
export default {
    // 接收数据
    props: ['data']
}
</script>