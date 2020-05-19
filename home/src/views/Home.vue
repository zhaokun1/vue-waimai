<template>
    <div class="page-home">
        <!-- 类型 -->
        <div class="types">
            <router-link :to="'/list/'+ item.typeId" tag="li" v-for="item in types" :key="item.typeId">
                <img :src="'/static/img/icon/'+item.img" alt="">
                <p class="type">{{item.type}}</p>
            </router-link>
        </div>
        <!-- 广告页面 -->
        <div class="ads">
            <router-link tag="li" :to="'/deatil/'+ item.product"  v-for="(item, index) in ads" :key="item._id">
                <h3 :class="'col-' + index">{{item.title}}</h3>
                <p>{{item.description}}</p>
                <img :src="item.url" alt="">
            </router-link>
        </div>
        <!-- 猜你喜欢 -->
        <div class="guess-like">
            <h1>猜你喜欢</h1>
            <Product v-for="item in list" :key="item._id" :data="item"></Product>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.page-home {
    // 类型
    .types {
        background-color: #fff;
        padding: 15px 10px;
        display: flex;
        flex-wrap: wrap;
        li {
            width: (100%/5);
            img {
                width: 60%;
            }
            p {
                width: 70%;
                text-align: center;
                padding: 6px 0px 15px;
            }
        }
    }
    // 广告
    .ads {
        margin-top: 22px;
        background-color: #fff;
        display: flex;
        text-align: center;
        li {
            width: (100%/3);
            border-right: 1px solid #ccc;
            &:last-child {
                border-right: none;
            }
            h1 {
                padding-top: 15px;
                font-weight: normal;
                font-size: 20px;
            }
            p {
                color: gray;
                font-size: 15px;
                margin:10px;
            }
            img {
                width: 60%;
                margin-bottom: 15px;
            }
        }
        // 枚举法
        // 循环变量
        $i: 0;
        $list: red, green, purple;
        @each $item in $list {
            .col-#{$i} {
                color: $item
            }
            // 更新循环变量
            $i: $i + 1; 
        }
    }
    // 猜你喜欢
    .guess-like {
        padding: 10px;
        margin-top: 10px;
        background-color: #fff;
        h1 {
            height: 40px;
            line-height: 40px;
            font-weight: normal;
            font-size: 24px;
            border-bottom: 1px solid #ccc;
        }
    }
}
</style>
<script>
// 引入Product组件
import Product from '@/components/Product';
export default {
    // 注册组件
    components: { Product },
    data() {
        return {
           // 定义类型
            types: [
                { type: '美食', img: '/01.png', typeId: 1 },
                { type: '电影', img: '/02.png', typeId: 2 },
                { type: '酒店', img: '/03.png', typeId: 3 },
                { type: '休闲', img: '/04.png', typeId: 4 },
                { type: '外卖', img: '/05.png', typeId: 5 },
                { type: 'KTV', img: '/06.png', typeId: 6 },
                { type: '丽人', img: '/07.png', typeId: 7 },
                { type: '周边游', img: '/08.png', typeId: 8 },
                { type: '小吃', img: '/09.png', typeId: 9 },
                { type: '火车票', img: '/10.png', typeId: 10 },
            ],
            // 广告
            ads: [],
            list: [],
        }
    },
    // 组件创建完成的时候
    created() {
        this.$http
            .get('/data/home')
            // 监听
            .then(({ data }) => {
                // 存储数据
                this.ads = data.ad;
                this.list = data.list
            })
    }
}
</script>