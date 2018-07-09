import API from './api';
import AXIOS from 'axios';


export const GetMyInfo = (userId,optUserId,tokenId,callback)=>{
  console.log("userId",userId)
  AXIOS.post(API.myIfno,{
        "apiKey": API.apiKey,
        "timestamp": API.timestamp,
        "bizContent": {
          "optUserId": optUserId,
          "tokenId": tokenId,
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
