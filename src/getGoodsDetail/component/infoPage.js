import React from "react";
import { Carousel, WingBlank, Icon, Button } from "antd-mobile";
import { GetCardInfo } from '../api/apiFn';
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
    var data = GetCardInfo(getParams.goodsId, getParams.userId, function (data) {
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
            <span className="rightPrice">￥{this.state.data.mPrice}</span>
            <span className="oldPrice">￥{this.state.data.price}</span>
            <span className="jfInfo">赚{this.state.data.score}积分</span>
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
          <div className={this.state.data.statusCode == 1 ?  "redBtn":"cantClickBtn"}>
            <Button onClick={open.bind(this,path,getParams)}  type="primary" disabled={this.state.data.statusCode == 1 ?false: true } className="btncss">加入购物车</Button>
          </div>
        </div>
        <div className="toastBox" style={{display:this.state.data.statusCode == 2?"block":"none"}}>
          <span>来晚了，商品已经下架啦~</span>
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


