<template>
    <div class="ickt-num">
        <span>数量</span>
        <span class="sub" @touchend="e => $store.state.count > 1 ? $store.state.count-- : 1">-</span>
        <span class="count">{{$store.state.count}}</span>
        <span class="add" @touchend="e => $store.state.count++">+</span>
    </div>
</template>
<style lang="scss" scoped>
.ickt-num {
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
</style>