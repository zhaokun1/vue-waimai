// 引入path
let path = require('path');
// 定义根路径
let root = process.cwd();
// vue插件
let { VueLoaderPlugin } = require('vue-loader');
// html
let HtmlWebpackPlugin = require('html-webpack-plugin');
// 拆分css
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let OptimizeCssAssetsWebpackPlugi = require('optimize-css-assets-webpack-plugin');
module.exports = {
    // mode: 'production',
    mode: 'development',
    // 解决一些问题
    resolve: {
        // 拓展名
        extensions: ['.js', '.es', '.vue'],
        alias: {
            vue$: 'vue/dist/vue.js',
            '@': path.join(root, './src'),
            '@c': path.join(root, './src/components'),
            '@v': path.join(root, './src/views'),
            '@t': path.join(root, './src/tools'),
        }
    },
    // 入口文件
    entry: './src/main.js',
    // 发布
    output: {
        // 定义静态路径
        path: path.join(root, '../server/'),
        filename: './static/admin/[name].js',
        // 静态资源的相对位置
        publicPath: '/'
    },
    // 模块
    module: {
        // 加载机
        rules: [
            // es6
            {
                test: /\.js$/,
                // 包含
                include: path.join(root, './src'),
                // 去除
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // vue
            {
                test: /.vue$/,
                use: {
                    loader: 'vue-loader',
                    options: {
                        extractCSS: true
                    }
                }
            },
            // css
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            // scss
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            // 字体图标
            {
                test: /\.(ttf|woff)$/,
                use: [
                    'url-loader'
                ]
            }
        ]
    },
    // 插件
    plugins: [
        // html
        new HtmlWebpackPlugin({
            template: './public/index.html',
            // 发布
            filename: './views/admin.html',
            hash: true
        }),
        // css
        new MiniCssExtractPlugin({ 
            filename: './static/style.css'
        }),
        // vue
        new VueLoaderPlugin(),
        // 压缩
        new OptimizeCssAssetsWebpackPlugi()
    ],
    // 优化
    optimization: {
        splitChunks: {   
            cacheGroups: {  
                lib: {
                    name: 'lib',   
                    chunks: 'initial',   
                    test: /node_modules/    
                }
            }
        }
    }
}