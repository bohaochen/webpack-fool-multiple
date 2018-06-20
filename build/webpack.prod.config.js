/**
 * 生产环境webpack配置
 */
const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const baseConfig = require('./webpack.base.config');

const envName = 'production';
process.env.NODE_ENV = 'production';

const config = { 
  ...baseConfig
};

config.plugins.push(new webpack.DefinePlugin({
  NODE_ENV: JSON.stringify(envName)
}));

config.output.publicPath = "www.baidu.com/cdn/assets/"

module.exports = config;
