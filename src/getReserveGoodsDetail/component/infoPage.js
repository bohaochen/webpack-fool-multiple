import React from "react";
import { Route } from "react-router-dom";
import { Carousel, WingBlank, Icon, Button } from "antd-mobile";
import { getReserveGoodsDetail } from '../api/apiFn';
import API from '../api/api';
import open from '../api/open';
import getUrlArgObject from '../api/getUrlArgObject';

const getParams = getUrlArgObject();
const path = "getReserve";

var oldTime = (new Date()).getTime();


export default class InfoPage extends React.Component {
  constructor() {
    super();
  }

  state = {
    dataImg: [],
    infoImg: [],
    data: {},
    oldTime:"",
    sendTime:"",
    isOver: true,
    isFc: false,
    isScroll: false,
    imgHeight: 375
  };

  gotoTop=()=>{
    if(this.state.isScroll){
      window.scrollTo(0, 0);
    }
  }

  hideFcFn=()=>{
    this.setState({
      isFc:false,
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  componentWillMount() {
    var _this = this;

    function formatDuring (mss) {
        var days = parseInt(mss / (1000 * 60 * 60 * 24));
        var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = (mss % (1000 * 60)) / 1000;
        return days + "天" + hours + "时" + minutes + "分";
      }

      function getNowFormatDate1(a) {
        var date = new Date(a);
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

    var data = getReserveGoodsDetail(getParams.reserveId,getParams.userId,function (data) {
      console.log(data)
      var imgArr = [];
      var infoImgArr = [];
      data.returnValue.goodsFile.map(function (val, index) {
        if (val.goodsFileType == 0) {
          imgArr.push(API.imgPath + val.fileMd5)
        } else if (val.goodsFileType == 1) {
          infoImgArr.push(API.imgPath + val.fileMd5)
        }
      })
      oldTime = formatDuring(data.returnValue.endDtm-oldTime);
      var sendTime = getNowFormatDate1(data.returnValue.endDtm).split(" ")[0];
      console.log("sendTime",sendTime)
      _this.setState({
        data: data.returnValue,
        infoImg: infoImgArr,
        dataImg: imgArr,
        oldTime:oldTime,
        sendTime:sendTime,
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
        window.isScrollFn = setTimeout(()=>{
          this.setState({
            isScroll: false
          })
        },2000)
      }
    })
  }

  render() {
    return (
      <div className="card-page">
        <WingBlank>
          <Carousel
            autoplay={false}
            infinite
            beforeChange={(from, to) =>
              console.log(`slide from ${from} to ${to}`)
            }
            afterChange={index => console.log("slide to", index)}
          >
            {this.state.dataImg.length>0&&this.state.dataImg.map(val => (
              <a
                key={val}
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: "100%"
                }}
              >
                <img
                  src={`//${val}.png`}
                  alt=""
                  style={{ width: "100%", verticalAlign: "top" }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event("resize"));
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
        <div className="orderPriceBox">
                <div className="priceLeft">
                  <span className="title">预付￥{this.state.data.reservePrice}</span>
                  <span className="con">尾款￥{this.state.data.finalPrice},立省￥{this.state.data.mPrice-this.state.data.reservePrice-this.state.data.finalPrice}，已订{this.state.data.saleNumber}件</span>
                </div>
                <div className="priceRight">
                  <span className="title">预定活动倒计时</span>
                  <span className="lTime">{this.state.oldTime}</span>
                </div>
            </div>
        <div className="infoBox">
          <div className="priceBox">
            <div className="jfBox">
              <span className="lh">
                赚{this.state.score}积分
              </span>
              <span className="rh">
                预计发货时间:{ this.state.sendTime}
              </span>
            </div>
          </div>
          <div className="infoContent">
            <span className="infoTitle">
            {this.state.data.goodsFullName}
              </span>
            <span className="infoC">
            {this.state.data.goodsDesc}
              </span>
          </div>
          <div className="labelBox">
          <div className="moreBox">
              {this.state.data.goodsSign && this.state.data.goodsSign.split(",").map(function (val, inedx) {
                return (
                  <span className="labelItem" key={val}>
                    <Icon type="check-circle-o" size={"xxs"} />
                    <span>{val}</span>
                  </span>
                )
              })
              }
            </div>
          </div>
        </div>
     
        <div className="pageContent">
        {
            this.state.infoImg.map(function (val, index) {
              return (
                <img key={val} src={"//" + val} alt="" />
              )
            })
          }
        </div>
        <div className="pageFoot">
          <div className={this.state.data.statusCode!=1 ? "cantClickBtn" : "redBtn"}>
            <Button type="primary"  onClick={open.bind(this,path,getParams,this)} disabled={this.state.data.statusCode!=1 ? true : false} className="btncss">{this.state.data.statusCode!=1 ? "活动已结束" : "立即预定"}</Button>
          </div>
        </div>
        <div className={this.state.isScroll ? "gotoTop showView" : "gotoTop hiddenView"} onClick={this.gotoTop}>
          <img src={require("../assets/img/toTop.png")} alt="" />
        </div>
        <div className="fc" style={{display:this.state.isFc?"block":"none"}} onClick={this.hideFcFn}>
            <div className="text">
              <span>请点击右上角按钮，</span>
              <span>选择【在浏览器中打开】</span>
            </div>
            <img src={require("../assets/img/jt.png")} alt=""/>
        </div>
      </div>
    );
  }
}


