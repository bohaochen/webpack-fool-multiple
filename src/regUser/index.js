import 'babel-polyfill';//兼容部分手机原生浏览器
import React from "react";
import ReactDOM from "react-dom";
import loadable from "react-loadable";
import LoadView from "./component/loading"
import 'amfe-flexible'

import './assets/css/index.less';
// import './assets/css/index.css';

// import InfoPage from "./component/infoPage";
const loadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return (
        <LoadView/>
    );
  }
  // Handle the error state
  else if (error) {
    return (<div>呃，正在升级.</div>);
  } else {
    return null;
  }
};

const InfoPage = loadable({
  loader: () => import("./component/infoPage"),
  loading:loadingComponent
});

class APP extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <InfoPage/>      
    );
  }
}

wx.ready(function(){
  // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，
  //则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
});

//转发到朋友圈
wx.onMenuShareTimeline({
  title: 'JSSDK朋友圈转发测试',
  link: link,
  imgUrl: imgUrl,
  success: function () {
      alert('转发成功！');
  },
  cancel: function () {
      alert('转发失败！');
  }
});

//转发给朋友
wx.onMenuShareAppMessage({
  title: 'JSSDK朋友圈转发测试',
  desc: '转发给朋友',
  link: link,
  imgUrl: imgUrl,
  type: 'link',
  dataUrl: '',
  success: function () {
      alert('转发成功！');
  },
  cancel: function () {
      alert('转发失败！');
  }
});


ReactDOM.render(<APP />, document.getElementById("app"));
