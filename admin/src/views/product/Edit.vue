<script>
// 引入创建商品
import Create from '@v/product/Create';
export default {
    // 局部混合
    // mixins:[Create]
    mixins: [ Create, {
        // 重写标题
        data() {
            return {
                title: '编辑商品',
                // 提交数据地址
                submitUrl: '/admin/product/update'
            }
        }
    }],
    methods:{
        getData() {
            // 解构路由数据
            let { params } = this.$route;
            // console.log(params);
            // 发送请求
            this.$http
                .get('/admin/product/detail', { params })
                // 监听数据返回
                .then(({ data }) => {
                    if(data.errno === 0) {
                        // 存储数据
                        this.data = data.data;
                    }else {
                        // 提示错误
                        this.$meaasge.error(data.msg);
                        // 返回上一个页面
                        this.$router.go(-1)
                    }
                })
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
        }
    }
}
</script>