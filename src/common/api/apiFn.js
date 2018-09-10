import API from './api';
import AXIOS from 'axios';


export const GetCardInfo = (goodsId, userId, goodsSkuId, callback) => {
    AXIOS.post(API.cardInfo, {
        "apiKey": API.apiKey,
        "timestamp": API.timestamp,
        "bizContent": {
            "goodsId": goodsId,
            "userId": userId,
            "goodsSkuId": goodsSkuId
        },
        "sign": API.apiKey
    }).then(function (res) {
        console.log(res)
        callback(res.data)
    }).catch(function (err) {
        console.log(err)
    })
}
export const GetWxConfig = (debug, callback) => {
    AXIOS.post(API.wxShare, {
        "apiKey": API.apiKey,
        "timestamp": API.timestamp,
        "bizContent": {
            "url": window.location.href,
            "debug": debug,
        },
        "sign": API.apiKey
    }).then(function (res) {
        console.log(res)
        callback(res.data)
    }).catch(function (err) {
        console.log(err)
    })
}

export const getGrouponDetail = (goodsId, userId, activityId, callback) => {
    AXIOS.post(API.getGrouponDetail, {
        "apiKey": API.apiKey,
        "timestamp": API.timestamp,
        "bizContent": {
            goodsId: goodsId,
            userId: userId,
            activityId: activityId
        },
        "sign": API.apiKey
    }).then(function (res) {
        console.log(res)
        callback(res.data)
    }).catch(function (err) {
        console.log(err)
    })
}

export const getGrouponOpenDetail = (grouponId, orderNo, userId, callback) => {
    AXIOS.post(API.getGrouponOpenDetail, {
        "apiKey": API.apiKey,
        "timestamp": API.timestamp,
        "bizContent": {
            "grouponId": grouponId,
            "orderNo": orderNo,
            "userId": userId
        },
        "sign": API.apiKey
    }).then(function (res) {
        console.log(res)
        callback(res.data)
    }).catch(function (err) {
        console.log(err)
    })
}

export const getReserveGoodsDetail = (reserveId, userId, callback) => {
    AXIOS.post(API.getReserveGoodsDetail, {
        "apiKey": API.apiKey,
        "timestamp": API.timestamp,
        "bizContent": {
            "reserveId": reserveId,
            "userId": userId
        },
        "sign": API.apiKey
    }).then(function (res) {
        console.log(res)
        callback(res.data)
    }).catch(function (err) {
        console.log(err)
    })
}

export const getDiscoverDetail = (discoverId, userId, callback) => {
    AXIOS.post(API.getDiscoverDetail, {
        "apiKey": API.apiKey,
        "timestamp": API.timestamp,
        "bizContent": {
            "discoverId": discoverId,
            "userId": userId
        },
        "sign": API.apiKey
    }).then(function (res) {
        console.log(res)
        callback(res.data)
    }).catch(function (err) {
        console.log(err)
    })
}


export const getUserEnshrineList = (obj, callback) => {
    AXIOS.post(API.getUserEnshrineList, {
        "apiKey": API.apiKey,
        "timestamp": API.timestamp,
        "bizContent": {
            userId: obj.userId,
            supplierId: obj.supplierId,
            enshrineType: obj.enshrineType,
            pageNo: obj.pageNo,
            pageSize: obj.pageSize
        },
        "sign": API.apiKey
    }).then(function (res) {
        console.log(res)
        callback(res.data)
    }).catch(function (err) {
        console.log(err)
    })
}

export const GetMyInfo = (userId, optUserId, tokenId, callback) => {
    console.log("userId", userId)
    AXIOS.post(API.myIfno, {
        "apiKey": API.apiKey,
        "timestamp": API.timestamp,
        "bizContent": {
            "optUserId": optUserId,
            "tokenId": tokenId,
            "userId": userId
        },
        "sign": API.apiKey
    }).then(function (res) {
        console.log(res)
        callback(res.data)
    }).catch(function (err) {
        console.log(err)
    })
}

export const GetDownLoadUrl = (clientNum, callback) => {
    AXIOS.post(API.downloadUrl, {
        "apiKey": API.apiKey,
        "timestamp": API.timestamp,
        "bizContent": {
            "osType": clientNum,
            "appType": 0,
            "clientType": 0
        },
        "sign": API.apiKey
    }).then(function (res) {
        console.log(res)
        callback(res.data)
    }).catch(function (err) {
        console.log(err)
    })
}

export const sendMobileCode = (userMobile, callback) => {
    //发送验证码
    AXIOS.post(API.sendMobileCode, {
        "apiKey": API.apiKey,
        "timestamp": API.timestamp,
        "bizContent": {
            "userMobile": userMobile,
        },
        "sign": API.apiKey
    }).then(function (res) {
        console.log(res)
        callback(res.data)
    }).catch(function (err) {
        console.log(err)
    })
}

export const regUser = (mobileCode, invitationCode, userMobile, callback) => {
    //注册
    AXIOS.post(API.regUser, {
        "apiKey": API.apiKey,
        "timestamp": API.timestamp,
        "bizContent": {
            "userMobile": userMobile,
            "mobileCode": mobileCode,
            "invitationCode": invitationCode,
        },
        "sign": API.apiKey
    }).then(function (res) {
        console.log(res)
        callback(res.data)
    }).catch(function (err) {
        console.log(err)
    })
}

export const userLogin = (password, userMobile, callback) => {
    //登录
    AXIOS.post(API.regUser, {
        "apiKey": API.userLogin,
        "timestamp": API.timestamp,
        "bizContent": {
            "userMobile": userMobile,
            "loginType": 1,
            "password": password //验证码
        },
        "sign": API.apiKey
    }).then(function (res) {
        console.log(res)
        callback(res.data)
    }).catch(function (err) {
        console.log(err)
    })
}