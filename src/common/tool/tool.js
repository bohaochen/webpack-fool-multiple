import { strict } from "assert";

export const strTime = (mss,noS)=> {
    var days = parseInt(mss / (1000 * 60 * 60 * 24));
    var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = (mss % (1000 * 60)) / 1000;
    if(noS){
        return days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒";
    }else{
        return days + "天" + hours + "小时" + minutes + "分钟";
    }
  }