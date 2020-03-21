const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
    //基础路径
    publicPath: './',
    //axios跨域代理
    devServer: {
        proxy: {
            '/api': {
                target: 'https://coupon.mynatapp.cc/',  //域名
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    //关闭eslint
    lintOnSave: false,
    //打包去掉map文件
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    //webpack
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            //打包去掉console.log
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
            //启用gzip压缩
            config.plugins.push(new CompressionPlugin({
                test: /\.(js|css)(\?.*)?$/i,//需要压缩的文件正则
                threshold: 10240,//大于10K启用压缩
                deleteOriginalAssets: false//压缩后保留原文件
            }));

            // config.performance = {
            //     hints: 'warning',
            //     //入口起点的最大体积 整数类型（以字节为单位）
            //     maxEntrypointSize: 50000000,
            //     //生成文件的最大体积 整数类型（以字节为单位 300k）
            //     maxAssetSize: 30000000,
            //     //只给出 js 文件的性能提示
            //     // assetFilter: function(assetFilename) {
            //     //     return assetFilename.endsWith('.js');
            //     // }
            // }

        }

    }

};
