
console.log("编译环境:",NODE_ENV)
const URL = {
    dev:"/api",
    prod:"http://121.196.198.59:8086"
}
const APIURL = NODE_ENV=="development"?URL.dev:URL.prod;
console.log("接口地址：",APIURL)

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}

var time = getNowFormatDate().split(" ")[0];

const API = {
    apiKey:"3A87E38D08DBD775AF34D96923679AEB",
    timestamp:time,
    imgPath:"//jimigooss.suermen.com/",
    myIfno:APIURL+"/rest/v1/userRest/getBaseUserById"
}
console.log("接口列表：",API)

export default API;