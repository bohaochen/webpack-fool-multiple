import React from "react";
import { Carousel, WingBlank, Icon, Button } from "antd-mobile";
import { GetCardInfo,GetWxConfig } from '../api/apiFn';
import API from '../api/api';
import open from '../api/open';
import getUrlArgObject from '../api/getUrlArgObject';

const getParams = getUrlArgObject();
const path = "getGoodsDetail";

export default class InfoPage extends React.Component {
  constructor() {
    super();
  }

  state = {
    dataImg: [],
    infoImg: [],
    data: {},
    isOver: true,
    isFc: false,
    isScroll: false,
    imgHeight: 375
  };

  gotoTop = () => {
    if (this.state.isScroll) {
      window.scrollTo(0, 0);
    }
  }

  hideFcFn = () => {
    this.setState({
      isFc: false,
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  componentWillMount() {
    var _this = this;
    var data = GetCardInfo(getParams.goodId, 0, function (data) {
      console.log(data)

      const debug = NODE_ENV == "development" ? 0 : 1;

      var data = GetWxConfig(debug, function (data) {
      console.log(data)
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
        appId: data.returnValue.appId, // 必填，公众号的唯一标识
        timestamp: data.returnValue.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.returnValue.nonceStr, // 必填，生成签名的随机串
        signature: data.returnValue.signature,// 必填，签名，见附录1
        jsApiList: data.returnValue.jsApiList
      });
      wx.ready(function () {
        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，
        //则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
        wx.onMenuShareTimeline({
          title: "发现",
          link: window.location.href,
          imgUrl: "http://jm.jimigo.com.cn/app/jimigo-logo.png",
          success: function () {
            console.log("分享成功")
          },
          cancel: function () {
            console.log("分享失败")
          }
        });
  
        //转发给朋友
        wx.onMenuShareAppMessage({
          title: "发现",
          link: window.location.href,
          imgUrl: "http://jm.jimigo.com.cn/app/jimigo-logo.png",
          desc: '发现更多商品',
          type: 'link',
          dataUrl: '',
          success: function () {
            console.log("分享成功")
          },
          cancel: function () {
            console.log("分享失败")
          }
        });
      });

      
    })


    })
  }

  componentDidMount() {
    var _this = this;
    window.addEventListener('scroll', () => {
      clearTimeout("isScrollFn")
      if (!this.state.isScroll) {
        this.setState({
          isScroll: true
        })
        window.isScrollFn = setTimeout(() => {
          this.setState({
            isScroll: false
          })
        }, 2000)
      }
    })
  }

  render() {
    return (
      <div className="card-page">

       <div className="pageContent">
          <video controls src="http://www.w3school.com.cn/example/html5/mov_bbb.mp4"></video>
        </div>
   
        <div className="infoBox">
          <div className="priceBox">
            <span className="rightPrice">￥{this.state.data.mPrice}</span>
            <span className="oldPrice">￥{this.state.data.price}</span>
            <span className="jfInfo">赚{this.state.data.score}积分</span>
          </div>
        </div>


       
       
      </div>
    );
  }
}


