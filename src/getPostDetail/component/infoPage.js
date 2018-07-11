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
    var data = GetCardInfo(getParams.goodId, 0, function (data) {
      console.log(data)
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


