<template>
    <div class="page-product-create">
        <h2 class="page-title">{{title}}</h2>
        <el-form label-width="200px" :model="data" :rules="rules" ref="ref">
            <el-form-item label="商品名称" prop="title">
                <el-input placeholder="请输入商品名称" v-model="data.title"></el-input>
            </el-form-item>
            <el-form-item label="商品描述" prop="description">
                <el-input type="textarea" placeholder="请输入商品描述" v-model="data.description"></el-input>
            </el-form-item>
            <el-form-item label="商品价格" prop="price">
                <el-input placeholder="请输入商品价格" type="number" v-model="data.price"></el-input>
            </el-form-item>
            <el-form-item label="商品原价" prop="originPrice">
                <el-input placeholder="请输入商品原价" type="number" v-model="data.originPrice"></el-input>
            </el-form-item>
            <el-form-item label="商品评分" prop="evaluate">
                <el-rate show-score allow-half v-model="data.evaluate"></el-rate>
            </el-form-item>
            <el-form-item label="商品分类" prop="type">
                <el-select placeholder="请输入商品分类" v-model="data.type">
                    <el-option v-for="item in types" :key="item.id" :label="item.text" :value="item.id">{{item.text}}</el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="商品销量" prop="sales">
                <el-input placeholder="请输入商品销量" type="number" v-model="data.sales" ></el-input>
            </el-form-item>
            <el-form-item label="商品店名" prop="storeName">
                <el-input placeholder="请输入商品店名" v-model="data.storeName"></el-input>
            </el-form-item>
            <el-form-item label="商品地址" prop="storeAddress">
                <el-input placeholder="请输入商品地址" v-model="data.storeAddress"></el-input>
            </el-form-item>
            <el-form-item label="商品分店" prop="storeNum">
                <el-input placeholder="请输入商品分店" type="number" v-model="data.storeNum"></el-input>
            </el-form-item>
            <el-form-item label="商品图片" prop="img">
                <el-upload
                    action="/admin/product/upload"
                    :on-success="uploadSuccess"
                    :on-error="failUpload"
                    :show-file-list="false"
                >
                    <span class="upload-text" slot="tip">请选择商品图片</span>
                    <el-button type="primary">上传</el-button>
                </el-upload>
                <img v-show="data.img" :src="data.img" class="upload-img" alt="">
            </el-form-item>
            <el-form-item label="商品内容" prop="content">
                <quill-editor v-model="data.content"></quill-editor>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="submit(title)">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style lang="scss" scoped>
.upload-text {
    color: gray;
    margin-left: 10px;
}
.upload-img {
    min-width: 200px;
    max-height: 200px;
    max-width: 300px;
    margin-top: 10px;
}
</style>
<script>
// 引入类型
import { types } from '@t/conf';
export default {
    data() {
        let rules = {};
        // 需要必须项
        ["img","title","description","sales","price","originPrice","type","storeName","storeAddress","storeNum","content"].forEach(item => rules[item] = [{ required: true, trigger: 'blur', message: '请输入内容!'}])
        
        return {
            data: {},
            rules,
            types,
            title: '创建商品',
            submitUrl: 'admin/product/create',
        }
    },
    computed: {
        // 处理数据
        dealData() {
            // 转换数字
            ["sales","price","originPrice","type","storeName","storeNum"].forEach(item => this.data[item] = +this.data[item])

            return this.data;
        }
        
    },
    methods: {
        uploadSuccess({ errno, data, msg}){
            // console.log('success', args);
            if(errno === 0) {
                // 存储数据
                this.$set(this.data, 'img', data)
            }else {
                // 提示错误信息
                this.$message.error(data.msg)
            }
        },
        failUpload(){
            this.$message.error('上传失败')
        },
        submit(title) {
            // console.log(this.$refs)
            // console.log(title);
            this.$refs.ref
                .validate(valid => {
                    if(valid) {
                        this.$http
                            .post(this.submitUrl, this.dealData)
                            .then(({ data }) => {
                                if(data.errno === 0) {
                                    // 进入列表页
                                    this.$router.replace('/product/list/1')
                                    // 告诉用户创建成功
                                    this.$message.success(`${title}成功`)
                                    
                                }else {
                                    this.$message.error(data.msg)
                                }
                            })
                    }
                })
        }
    }
}
</script>