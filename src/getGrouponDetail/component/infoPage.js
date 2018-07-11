import React from "react";
import { Carousel, WingBlank, Icon, Button } from "antd-mobile";
import { getGrouponDetail } from '../api/apiFn';
import API from '../api/api';
import open from '../api/open';
import getUrlArgObject from '../api/getUrlArgObject';


const getParams = getUrlArgObject();
const path = "getGrouponDetail";

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

  openFn = () => {
    open(path, getParams,this)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  componentWillMount() {
    var _this = this;
    var data = getGrouponDetail(getParams.goodsId, getParams.userId, getParams.activityId, function (data) {
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
      _this.setState({
        data: data.returnValue,
        infoImg: infoImgArr,
        dataImg: imgArr,
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
    var num = 0;
    var nowTime = true;
    var btn = "";
    if (this.state.data.grouponOpenDTOList != undefined) {
      this.state.data.grouponOpenDTOList.map(function (val, idnex) {
        num += val.joinCount;
      })
    }

    nowTime = this.state.data.endDtm > (new Date()).valueOf();

    if (nowTime) {
      btn = <div>
        <div className={"yewBtn"} onClick={this.openFn}>
          <Button type="primary" className="btncss">
            <span>￥49.9</span>
            <span>直接购买</span>
          </Button>
        </div>
        <div className={"redBtn"} onClick={this.openFn}>
          <Button type="primary" className="btncss">
            <span>￥39.9</span>
            <span>发起拼团</span>
          </Button>
        </div>
      </div>
    } else {
      btn = <div>
        <div className={"cantClickBtn"}>
          <Button type="primary" disabled={true} className="btncss">活动已经结束</Button>
        </div>
      </div>
    }


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
            {this.state.dataImg.map(val => (
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
        <div className="infoBox">
          <div className="priceBox">
            <span className="rightPrice">￥{this.state.data.memberPrice}</span>
            <span className="oldPrice">￥{this.state.data.salePrice}</span>
            <span className="jfInfo">赚{this.state.data.score}积分</span>
            <span className="ptnum">已拼{this.state.data.saleNumber}件-{this.state.data.memberCount}人拼团</span>
          </div>
          <div className="infoContent">
            <span className="infoTitle">
              {this.state.data.goodsName}
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
        <div className="orderBox">
          <div className="orderTitle" onClick={this.openFn}>
            <span className="titleText">{num}人正在拼团，可直接点击参与</span>
            <span className="more">查看更多></span>
          </div>
          <ul className="orderList">
            {
              this.state.data.grouponOpenDTOList && this.state.data.grouponOpenDTOList.map(function (val, index) {
                return (
                  <li key={val}>
                    <div className="lf">
                      <img src={API.imgPath + val.userPic} alt="" />
                      <span className="name">{val.nickName}</span>
                    </div>
                    <div className="rbtn redBtn">
                      <Button type="primary" className="" onClick={this.openFn}>去拼团</Button>
                    </div>
                    <div className="rText">
                      <span className="title">还差{this.state.data.memberCount - val.joinCount}人拼成</span>
                      <span className="time">剩余{val.serverDateTime - val.expireDateTime}</span>
                    </div>
                  </li>
                )
              })
            }
          </ul>
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
        <div className="pageFoot sBtn">
          {btn}
        </div>

        <div className={this.state.isScroll ? "gotoTop showView" : "gotoTop hiddenView"} onClick={this.gotoTop}>
          <img src={require("../assets/img/toTop.png")} alt="" />
        </div>
        <div className="fc" style={{ display: this.state.isFc ? "block" : "none" }} onClick={this.hideFcFn}>
          <div className="text">
            <span>请点击右上角按钮，</span>
            <span>选择【在浏览器中打开】</span>
          </div>
          <img src={require("../assets/img/jt.png")} alt="" />
        </div>
      </div>
    );
  }
}


