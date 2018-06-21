/**
 * 开发环境webpack配置
 */
const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const baseConfig = require('./webpack.base.config');

const envName = 'development';

process.env.NODE_ENV = 'development';

console.log('process.env.NODE_ENV',process.env.NODE_ENV)


const config = { 
  ...baseConfig
};

config.plugins.push(new webpack.DefinePlugin({
  NODE_ENV: JSON.stringify(envName)
}));

// config.plugins.push(new webpack.HotModuleReplacementPlugin());


module.exports = config;
