import React from "react";
import { Route } from "react-router-dom";
import { Toast } from "antd-mobile";
import copy from 'copy-to-clipboard';
import { GetMyInfo } from '../api/apiFn';
import open from '../api/open';
import API from '../api/api';
import getUrlArgObject from '../api/getUrlArgObject';
const getParams = getUrlArgObject();
const path = "regUser";

var headImg = API.imgPath+ decodeURI(getParams.userPic);
var name = decodeURI(getParams.nickName);
console.log("getParams.nickName",getParams.nickName)
var invitationCode = decodeURI(getParams.invitationCode);
var qrCodePic = API.imgPath+decodeURI(getParams.qrCodePic);

export default class InfoPage extends React.Component {
  constructor() {
    super();
  }

  state = {
    isFc: false,
    data: [],
    imgHeight: 176,
  };

  copyUrl = () => {
    Toast.info('复制成功!', 1);
    var _this =this;
    copy(invitationCode, {
      debug: true,
      message: 'Press #{key} to copy',
    });
    console.log('复制成功，如果失败，请在输入框内手动复制.')
};


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
    console.log("getParams.userId",getParams.userId)
    // var data = GetMyInfo(getParams.userId,getParams.optUserId ,getParams.tokenId ,function (data) {
    //   _this.setState({
    //     data:data.returnValue,
    //   })
    // })
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="invite-page">
        <div className="bg-box">
          <img className="imgc" src={headImg} alt="" />
          <span className="bgt">{name}</span>
          <span className="bgc">邀请您开启jimigo之路</span>
        </div>

        <div className="rwm-box">
          <img className="rwm-img" src={qrCodePic} alt="" />
          <span className="rwm-bar">
            长按识别二维码，轻松注册加入
            </span>
        </div>

        <div className="btn-box">
          <span className="btnt">
            或在注册时填入下方推荐码
            </span>
            <input className="btnr" type="text" defaultValue={invitationCode} />
          <div className={"redBtn"}>
            <button className="btncss am-button" onClick={this.copyUrl}>
                复制
            </button>
         
          </div>
        </div>

        <div className="bottom-logo">
          <img onClick={open.bind(this,path,getParams,this)} src={require("../assets/img/logo.png")} alt="" />
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

class ABC extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div>小阿拉啦1啦啦啦</div>;
  }
}
