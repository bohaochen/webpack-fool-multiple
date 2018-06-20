# 基于webpack3的多入口脚手架

非常简单的一个多入口配置，全自动，无需修改任何webpack配置，只需新建文件夹即可配置多入口

### 如何新建目录

需要新建一个入口？
直接在src 目录下建立文件夹 即可
文件夹必须包含：
index.html（模板HTML）
index.js(此项目入口)

dev命令：
npm run start

test打包
npm run build:stg

prod打包
npm run build:prod

本地预览：http://localhost:8848/helloWorld.html
