
console.log("编译环境:",NODE_ENV)
const URL = {
    dev:"www.baidu.com",
    prod:"www.jd.com"
}
const APIURL = NODE_ENV=="development"?URL.dev:URL.prod;
console.log("接口地址：",APIURL)

const API = {
    abcApi:APIURL+"123"
}
console.log("接口列表：",API)

export default API;