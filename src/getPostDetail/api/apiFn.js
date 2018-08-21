import API from './api';
import AXIOS from 'axios';


export const GetCardInfo = (goodsId,userId,callback)=>{
    AXIOS.post(API.cardInfo,{
          "apiKey": API.apiKey,
          "timestamp": API.timestamp,
          "bizContent": {
          "goodsId": goodsId,
          "userId": userId
          },
          "sign": API.apiKey
    }).then(function(res){
        console.log(res)
        callback(res.data)
    }).catch(function(err){
        console.log(err)
    })
}

export const GetWxConfig = (debug,callback)=>{
    AXIOS.post(API.wxShare,{
          "apiKey": API.apiKey,
          "timestamp": API.timestamp,
          "bizContent": {
            "url": window.location.href,
            "debug": debug,
          },
          "sign": API.apiKey
    }).then(function(res){
        console.log(res)
        callback(res.data)
    }).catch(function(err){
        console.log(err)
    })
  }