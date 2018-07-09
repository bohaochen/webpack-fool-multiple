import API from './api';
import AXIOS from 'axios';


export const getGrouponDetail = (goodsId,userId,activityId,callback)=>{
    AXIOS.post(API.cardInfo,{
          "apiKey": API.apiKey,
          "timestamp": API.timestamp,
          "bizContent": {
            goodsId:goodsId,
            userId:userId,
            activityId:activityId
          },
          "sign": API.apiKey
    }).then(function(res){
        console.log(res)
        callback(res.data)
    }).catch(function(err){
        console.log(err)
    })
}

