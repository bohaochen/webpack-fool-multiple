import React from "react";
import { Route } from "react-router-dom";
import { Carousel, WingBlank, Button } from "antd-mobile";
import { getUserEnshrineList, GetMyInfo } from '../api/apiFn';
import API from '../api/api';
import getUrlArgObject from '../api/getUrlArgObject';
const getParams = getUrlArgObject();
const path = "getUserEnshrineList";
import open from '../api/open';




export default class InfoPage extends React.Component {
  constructor() {
    super();
  }

  state = {
    data: [],
    userData: {},
    imgHeight: 176
  };



  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }


  componentWillMount() {
    var _this = this;
    var data = getUserEnshrineList(getParams, function (data) {
      _this.setState({
        data: data.returnValue,
      })
      console.log(data)
    })
    var userData = GetMyInfo(getParams.userId, getParams.optUserId, getParams.tokenId, function (data) {
      _this.setState({
        userData: data.returnValue,
      })
      console.log(data)
    })

  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="invite-page">
        <div className="bg-box">
          <img className="imgc" src={`${API.imgPath}${this.state.userData.userPic}`} alt="" />
          <span className="bgt">{this.state.userData.nickName}</span>
          <span className="bgc">我在吉米优选里发现了一些优质商品</span>
        </div>

        <div className="cards">
          {
            this.state.data.map((val, index) => {
              return (
                <div key={index} className="card-box" onClick={open.bind(this,path,getParams)} >
                  <img src={`${API.imgPath}${val.goodsPic}`} alt="" />
                  <span className="title">
                    {this.state.data.goodsFullName}
                  </span>
                  <div className="priceBox">
                    <span className="rightPrice">￥{val.price}</span>
                    <span className="oldPrice">￥{val.mPrice}</span>
                  </div>
                </div>
              )
            })
          }


        </div>

        <div className="bottom-logo">
          <img src={require("../assets/img/logo.png")} onClick={open.bind(this,path,getParams)}  alt="" />
        </div>
      </div>
    );
  }
}

class ABC extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div>小阿拉啦1啦啦啦</div>;
  }
}
