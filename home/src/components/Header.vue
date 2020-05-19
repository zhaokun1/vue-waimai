<template>
    <div class="ickt-header">
        <div class="back" @click="clickBack"></div>
        <!-- 传递了title 就写title 没有传递title 就用slot -->
        <div class="title">
            <h1 v-if="title">{{title}}</h1>
            <slot v-else></slot>
        </div>
        <div class="right">
            <slot name="login"></slot>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/base.scss';
.ickt-header {
    display: flex;
    height: 50px;
    background-color: $color;
    align-items: center;
    text-align: center;
    color: #fff;
    .back,
    .right {
        width: 60px;
    }
    .right {
        font-size: 18px;
    }
    .back {
        position: relative;
        &::after,
        &::before {
            content: '';
            @include triangle(8px, #fff, right);
            position: absolute;
            top: -7px;
            left: 10px;
        }
        &:after {
            left: 12px;
            border-right-color: $color;
        }
    }
    .title {
        flex: 1;
        h1 {
            font-weight: normal;
            font-size: 24px;
        }
    }
   
}
</style>
<script>
export default {
    // 接收数据
    props: ['title', 'clickBack']
}
</script>