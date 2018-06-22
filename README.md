# 基于webpack3的多入口脚手架

非常简单的一个多入口配置，全自动，无需修改任何webpack配置，只需新建文件夹即可配置多入口


###如何使用

npm install 

dev命令：
npm run start

test打包
npm run build:stg

prod打包
npm run build:prod

本地预览：localhost:8848/html_model.html

### 如何新建目录

需要新建一个入口？
直接在/src 目录下建立文件夹 即可
文件夹必须包含：
index.html（模板HTML,用于打包构建）
index.js(此项目入口文件，此文件的依赖将会被全部打包)

###按需加载

使用react-loadable按需加载，具体可看例子中的index.js文件中的使用方法

###自适应

使用postcss-px2rem 插件，自动转化项目中 less 和 css 后缀文件中的px单位，根据.postcssrc的配置设置转化为对应比例，默认配置以设计图375*667标注尺寸为准，代码中按此规格标注大小直接编写px单位的值即可；

同时使用amfe-flexible库,自动配置viewport缩放，和根节点字号大小（淘宝成熟的方案）


###遗留问题

脚手架结构还需优化

内联样式无法被自动转化rem

没有加入flux架构

命令行添加一个基础项目到src