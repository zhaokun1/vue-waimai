<template>
    <div class="page-detail">
        <div class="header">
            <img :src="detail.img" alt="">
            <div class="title">{{detail.title}}</div>
            <div class="discription">{{detail.description}}</div>
        </div>
        <div class="content">
            
            <div class="price-part">
            <div class="all-price">
                <span class="price">{{detail.price}}元</span>
                <span class="orignPrice">门市价:{{detail.originPrice}}元</span>
            </div>
            
            <button :class="{
                'btn': true,
                'btn-cancel': detail.hasBuy  
            }" @touchend="buy">{{detail.hasBuy ? '取消购买' : '立即购买' }}</button>
        </div>
        <!-- 数量 -->
        <!-- <div class="num">
                <span>数量</span>
                <span class="add" @click="add()">+</span>
                <span class="count">{{$store.state.count}}</span>
                <span class="sub" @click="sub()">-</span>
        </div> -->
        <Num></Num>
        <!-- {{$store.state.products}} -->
            <div class="support">
                <span class="instant">支持立即退货</span>
                <span class="anytime">支持随时退货</span>
                <p class="sales">销量:{{detail.sales}}</p>
            </div>
            <div class="bussiness">
                <h3 class="same">店家信息</h3>
                <div class="store">
                    <p class="storeName">{{detail.storeName}}</p>
                    <p class="address">{{detail.storeAddress}}</p>
                </div>
                <p class="see">查看其它{{detail.storeNum}}家分店</p>
            </div>
            <div class="need">
                    <h3 class="same">购买须知</h3>
                    <p v-html="detail.content"></p>
            </div>
        </div>
        
        <shopping></shopping>
    </div>
</template>
<style lang="scss" scoped>
// 引入配置
@import '@/base.scss';
.page-detail {
    margin-bottom: 30px;
    .header {
        position: relative;
        background-color: #fff;
        img {
            width: 100%;
        }
        .title,
        .discription {
            position: absolute;
            left: 10px;
            bottom: 40px;
            color: #fff;
            font-size: 22px;
            font-weight: bold;
        }
        .discription {
            bottom: 10px;
            font-weight: normal;
            font-size: 18px;
        }


    }
    .content {
        padding-left: 10px;
        .price-part {
            border-bottom: 1px solid #ccc;
            padding: 10px;
            display: flex;
            background-color: #fff;
            .all-price {
                flex: 1;
                .price {
                    color: $color;
                    font-size: 26px;
                }
                .orignPrice {
                    font-size: 16px;
                    margin-left: 10px;
                }
            }
            .btn {
                border: none;
                outline: none;
                width: 80px;
                background-color: #f30;
                color: #fff;
                font-size: 14px;
                text-align: center;
                height: 20px;
                line-height: 20px;
                border-radius: 10px;
                &.btn-cancel {
                    background-color: gray;
                }
            }
            
        }
        .support {
            background-color: #fff;
            font-size: 16px;
            color: #9ACD32;
            padding: 10px;
            .anytime {
                margin-left: 50px;
            }
            .sales {
                margin-top: 10px;
                color: #000;
            }
        }
        h3 {
            padding: 10px;
            font-size: 20px;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #ccc;
            font-weight: normal;
        }
        .bussiness {
            background-color: #fff;
            margin-top: 10px;
            .store {
                padding: 10px;
                border-bottom: 1px solid #ccc;
                .storeName {
                    margin-bottom: 10px;
                }
            }
            .see {
                padding: 10px;
                color: $color;
                font-size: 14px;
            }
        }
        .need {
            background-color: #fff;
            margin-top: 10px;
        }
        // 数量
        .num {
            background-color: #fff;
            display: flex;
            width: 120px;
            color: gray;
            height: 30px;
            line-height: 30px;
            .add,
            .sub {
                text-align: center;
                background-color: #ddd;
                width: 30px;
                font-size: 20px;
            }
            .count {
                text-align: center;
                flex: 1;
            }
        }
    }
}
</style>
<script>
// 引入buy
import shopping from '@/components/shopping';
import Num from '@/components/Num';
export default {
    // 注册组件
    components: { shopping, Num },
    data() {
        return {
            detail: {}
        }
    },
    methods:{
        // add() {
        //     // console.log(id);
        //     // 商品数量加一
        //     // console.log()
        //     this.$store.state.count++;
            
        // },
        // sub() {
        //     this.$store.state.count > 1 ? this.$store.state.count-- : 1
        // },
        buy() {
            // 在一个事件中有修改也有发布消息  先发布
            this.$store.commit(this.detail.hasBuy ? 'deleteItem' : 'addItem', this.detail)
            // 添加一个是否购买的字段 为了避免数据丢失 用$set
            this.$set(this.detail, 'hasBuy', !this.detail.hasBuy)
        },
        getData() {
            let { params } = this.$route;
            this.$http
                .get('data/detail', { params })
                .then(({ data }) => {
                    // 判断数据是否存在
                    if(data) {
                        // 判断是否在购物车中 如果在购物车中 设置为购买的状态
                        if(this.$store.state.products.find(item => item._id === data._id)) {
                            // 设置为购买的状态
                            data.hasBuy = true;
                        }
                        this.detail = data; 
                        
                    }else {
                        // 返回上一个页面
                        this.$route.go(-1);
                    }
                    
                })
        }
    },
    // 组件创建完成的时候  获取数据 
    created() {
        this.getData()
    },
    watch: {
        $route() {
            this.getData()
        }
    }
}
</script>