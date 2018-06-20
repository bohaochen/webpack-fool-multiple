const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const opn = require('opn');
const config = require('./webpack.dev.config.js');
const path = require('path')

const compiler = webpack(config);

const server = new webpackDevServer(compiler, {
  contentBase: path.join(__dirname, "../dist"),
  host: 'localhost',
  compress: true,
  inline: true,
  hot:true,
  stats: {
    colors: true // 用颜色标识
  },
});

let prot = 8848;

opn('http://127.0.0.1:' + prot+'/helloWorld.html');

server.listen(prot);
