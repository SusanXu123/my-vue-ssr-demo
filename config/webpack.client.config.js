const path = require('path');
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(baseConfig, {
  entry: path.resolve(__dirname, '../src/entry-client.js'),
  optimization: {
    splitChunks: {
      cacheGroups: { 
        commons: {
          name: "commons",
          chunks: "all", 
          minChunks: 2,
          priority: 0 
        },
        vendor: { 
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all', 
          priority: 10 
        }
    }
    }
  },
  plugins: [
    // 此插件在输出目录中
    // 生成 `vue-ssr-client-manifest.json`。
    new VueSSRClientPlugin()
  ]
})