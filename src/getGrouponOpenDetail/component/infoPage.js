import React from "react";
import { Route } from "react-router-dom";
import { Carousel, WingBlank, Icon, Button } from "antd-mobile";
import API from '../api/api';
import open from '../api/open';
import getUrlArgObject from '../api/getUrlArgObject';
import { getGrouponOpenDetail } from '../api/apiFn';

const getParams = getUrlArgObject();
const path = "getGrouponOpenDetail";

export default class InfoPage extends React.Component {
  constructor() {
    super();
  }

  state = {
    data: [],
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

  componentWillMount() {
    var _this = this;
    var data = getGrouponOpenDetail(getParams.grouponId, getParams.orderNo,getParams.userId,function (data) {
      console.log(data)

      _this.setState({
        data: data.returnValue,
      })
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
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
        <div className="activityImg">
          <img src={require("../assets/img/timg.jpg")} alt="" />
        </div>
        <div className="infoBox">
          <div className="infoContent">
            <span className="infoTitle">
              澳洲红酒干红来爱爱爱爱爱我爱爱爱爱我爱爱爱爱爱爱澳洲红酒干红来爱爱爱爱爱我爱爱爱爱我爱爱爱爱爱爱爱啊1729ml/瓶
              </span>
          </div>
          <div className="priceBox">
            <span className="rightPrice">￥288</span>
            <span className="oldPrice">￥350</span>
            <span className="ptnum">已拼1896件-20人拼团</span>
          </div>

          <div className="labelBox">
            <span className="labelItem">
              <Icon type="check-circle-o" size={"xxs"} />
              <span>包邮</span>
            </span>
            <span className="labelItem">
              <Icon type="check-circle-o" size={"xxs"} />
              <span>包邮</span>
            </span>
            <span className="labelItem">
              <Icon type="check-circle-o" size={"xxs"} />
              <span>包邮</span>
            </span>
          </div>
        </div>
        <div className="ptInfo">
          <div className="ptText">
          <div className="limg" >
            <img src={require("../assets/img/timg.jpg")} alt="" />
          </div>
            <div className="rText">
              <span className="title">本团名额已满</span>
              <span className="time">4天23:15:36.6后结束</span>
            </div>
          </div>

          <div className={"redBtn dbtn"}>
            <Button type="primary" className="btncss" onClick={open.bind(this,path,getParams)}>
              <span>查看更多拼团商品</span>
            </Button>
          </div>
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


