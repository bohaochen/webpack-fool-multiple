(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/getPostDetail/api/api.js":
/*!**************************************!*\
  !*** ./src/getPostDetail/api/api.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

console.log("编译环境:", "development");
var URL = {
    dev: "/api",
    prod: "http://121.196.198.59:8086"
};
var APIURL =  true ? URL.dev : undefined;
console.log("接口地址：", APIURL);

function getNowFormatDate() {
    var date = new Date();
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
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds();
    return currentdate;
}

var time = getNowFormatDate().split(" ")[0];

var API = {
    //GET卡券详情
    apiKey: "3A87E38D08DBD775AF34D96923679AEB",
    timestamp: time,
    androidUrl: "http://sj.qq.com/myapp/detail.htm?apkName=com.tencent.weishi",
    iosUrl: "http://sj.qq.com/myapp/detail.htm?apkName=com.tencent.weishi",
    imgPath: "jimigooss.suermen.com/",
    cardInfo: APIURL + "/rest/v1/classify/getGoodsDetail"
};
console.log("接口列表：", API);

exports.default = API;

/***/ }),

/***/ "./src/getPostDetail/api/apiFn.js":
/*!****************************************!*\
  !*** ./src/getPostDetail/api/apiFn.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GetCardInfo = undefined;

var _api = __webpack_require__(/*! ./api */ "./src/getPostDetail/api/api.js");

var _api2 = _interopRequireDefault(_api);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GetCardInfo = exports.GetCardInfo = function GetCardInfo(goodsId, userId, callback) {
    _axios2.default.post(_api2.default.cardInfo, {
        "apiKey": _api2.default.apiKey,
        "timestamp": _api2.default.timestamp,
        "bizContent": {
            "goodsId": goodsId,
            "userId": userId
        },
        "sign": _api2.default.apiKey
    }).then(function (res) {
        console.log(res);
        callback(res.data);
    }).catch(function (err) {
        console.log(err);
    });
};

/***/ }),

/***/ "./src/getPostDetail/api/getUrlArgObject.js":
/*!**************************************************!*\
  !*** ./src/getPostDetail/api/getUrlArgObject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function getUrlArgObject() {
    var args = new Object();
    var query = location.search.substring(1); //获取查询串  
    var pairs = query.split(","); //在逗号处断开  
    for (var i = 0; i < pairs.length; i++) {
        var pos = pairs[i].indexOf('='); //查找name=value  
        if (pos == -1) {
            //如果没有找到就跳过  
            continue;
        }
        var argname = pairs[i].substring(0, pos); //提取name  
        var value = pairs[i].substring(pos + 1); //提取value  
        args[argname] = unescape(value); //存为属性  
    }
    return args; //返回对象  
}

exports.default = getUrlArgObject;

/***/ }),

/***/ "./src/getPostDetail/api/open.js":
/*!***************************************!*\
  !*** ./src/getPostDetail/api/open.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var Navigator = navigator.userAgent;
var ifChrome = Navigator.match(/Chrome/i) != null && Navigator.match(/Version\/\d+\.\d+(\.\d+)?\sChrome\//i) == null ? true : false;
var ifAndroid = Navigator.match(/(Android);?[\s\/]+([\d.]+)?/) ? true : false;
var ifiPad = Navigator.match(/(iPad).*OS\s([\d_]+)/) ? true : false;
var ifiPhone = !ifiPad && Navigator.match(/(iPhone\sOS)\s([\d_]+)/) ? true : false;
var ifSafari = (ifiPhone || ifiPad) && Navigator.match(/Safari/);
var version = 0;
ifSafari && (version = Navigator.match(/Version\/([\d\.]+)/));

version = parseFloat(version[1], 10);
// 是否从微信打开
var ifWeixin = navigator.userAgent.indexOf("MicroMessenger") >= 0; // weixin

var url = {
    weixin: "jimigoapp://jm.jimgo.com.cn:8089",
    ios: "jimigoapp://jm.jimgo.com.cn:8089",
    android: "jimigoapp://jm.jimgo.com.cn:8089",
    iosDownLoad: "//www.baidu.com/#iosDownLoad",
    androidDownLoad: "//www.baidu.com/#androidDownLoad"
};

var time = 5000;

function downLoad(url) {
    setTimeout(function () {
        location.href = url;
    }, time);
}

function openApp(path, params) {
    // openApp
    var paramsStr = "";
    var pathStr = "";
    if (params) {
        Object.keys(params).map(function (val, index) {
            if (index == 0) {
                if (path) {
                    pathStr = path + "/";
                }
                paramsStr = pathStr + paramsStr + "?" + val + "=" + params[val];
            } else {
                paramsStr = paramsStr + "&" + val + "=" + params[val];
            }
        });
    }
    if (ifWeixin) {
        // 如果是微信端
        location.href = url.weixin + paramsStr; // 直接使用location.href打开
        return;
    }
    if (ifiPad) {
        // 如果是ipad
        location.href = url.ios + paramsStr; // 直接使用location.href打开
        downLoad(url.iosDownLoad);
        return;
    } else if (ifiPhone) {
        location.href = url.ios + paramsStr; // 直接使用location.href打开
        downLoad(url.iosDownLoad);
        return;
    } else {
        //安卓普通浏览器
        location.href = url.ios + paramsStr; // 直接使用location.href打开
        downLoad(url.androidDownLoad);
        return;
    }
}

exports.default = openApp;

/***/ }),

/***/ "./src/getPostDetail/assets/img/jt.png":
/*!*********************************************!*\
  !*** ./src/getPostDetail/assets/img/jt.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAB/CAYAAACAC765AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcyRjQ4MTc4NkJCMDExRThBNDAyQUM3ODY3QzgzRTlFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcyRjQ4MTc5NkJCMDExRThBNDAyQUM3ODY3QzgzRTlFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzJGNDgxNzY2QkIwMTFFOEE0MDJBQzc4NjdDODNFOUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzJGNDgxNzc2QkIwMTFFOEE0MDJBQzc4NjdDODNFOUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5G2RR9AAAIcklEQVR42uxdfZBO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"

/***/ }),

/***/ "./src/getPostDetail/assets/img/toTop.png":
/*!************************************************!*\
  !*** ./src/getPostDetail/assets/img/toTop.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAYAAAAdHLWhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRDMTNFOEFDNjRBMjExRThCOUMyQkM5QzVCRERDRTM0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRDMTNFOEFENjRBMjExRThCOUMyQkM5QzVCRERDRTM0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REMxM0U4QUE2NEEyMTFFOEI5QzJCQzlDNUJERENFMzQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REMxM0U4QUI2NEEyMTFFOEI5QzJCQzlDNUJERENFMzQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7dghJeAAAPwElEQVR42uydeVAU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"

/***/ }),

/***/ "./src/getPostDetail/component/infoPage.js":
/*!*************************************************!*\
  !*** ./src/getPostDetail/component/infoPage.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(/*! antd-mobile/lib/button */ "./node_modules/antd-mobile/lib/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _icon = __webpack_require__(/*! antd-mobile/lib/icon */ "./node_modules/antd-mobile/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _wingBlank = __webpack_require__(/*! antd-mobile/lib/wing-blank */ "./node_modules/antd-mobile/lib/wing-blank/index.js");

var _wingBlank2 = _interopRequireDefault(_wingBlank);

var _carousel = __webpack_require__(/*! antd-mobile/lib/carousel */ "./node_modules/antd-mobile/lib/carousel/index.js");

var _carousel2 = _interopRequireDefault(_carousel);

var _index = __webpack_require__(/*! ./node_modules/redbox-react/lib/index.js */ "./node_modules/redbox-react/lib/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ./node_modules/react-transform-catch-errors/lib/index.js */ "./node_modules/react-transform-catch-errors/lib/index.js");

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(/*! ./node_modules/react-transform-hmr/lib/index.js */ "./node_modules/react-transform-hmr/lib/index.js");

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd-mobile/lib/button/style/css */ "./node_modules/antd-mobile/lib/button/style/css.js");

__webpack_require__(/*! antd-mobile/lib/icon/style/css */ "./node_modules/antd-mobile/lib/icon/style/css.js");

__webpack_require__(/*! antd-mobile/lib/wing-blank/style/css */ "./node_modules/antd-mobile/lib/wing-blank/style/css.js");

__webpack_require__(/*! antd-mobile/lib/carousel/style/css */ "./node_modules/antd-mobile/lib/carousel/style/css.js");

var _apiFn = __webpack_require__(/*! ../api/apiFn */ "./src/getPostDetail/api/apiFn.js");

var _api = __webpack_require__(/*! ../api/api */ "./src/getPostDetail/api/api.js");

var _api2 = _interopRequireDefault(_api);

var _open = __webpack_require__(/*! ../api/open */ "./src/getPostDetail/api/open.js");

var _open2 = _interopRequireDefault(_open);

var _getUrlArgObject = __webpack_require__(/*! ../api/getUrlArgObject */ "./src/getPostDetail/api/getUrlArgObject.js");

var _getUrlArgObject2 = _interopRequireDefault(_getUrlArgObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  InfoPage: {
    displayName: "InfoPage"
  }
};

var _DSoftWorkWebpackFoolMultipleNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: "D:/soft-work/webpack-fool-multiple/src/getPostDetail/component/infoPage.js",
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _DSoftWorkWebpackFoolMultipleNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: "D:/soft-work/webpack-fool-multiple/src/getPostDetail/component/infoPage.js",
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _DSoftWorkWebpackFoolMultipleNode_modulesReactTransformHmrLibIndexJs2(_DSoftWorkWebpackFoolMultipleNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var getParams = (0, _getUrlArgObject2.default)();
var path = "getGoodsDetail";

var InfoPage = _wrapComponent("InfoPage")(function (_React$Component) {
  _inherits(InfoPage, _React$Component);

  function InfoPage() {
    _classCallCheck(this, InfoPage);

    var _this2 = _possibleConstructorReturn(this, (InfoPage.__proto__ || Object.getPrototypeOf(InfoPage)).call(this));

    _this2.state = {
      dataImg: [],
      infoImg: [],
      data: {},
      isOver: true,
      isFc: false,
      isScroll: false,
      imgHeight: 375
    };

    _this2.gotoTop = function () {
      if (_this2.state.isScroll) {
        window.scrollTo(0, 0);
      }
    };

    _this2.hideFcFn = function () {
      _this2.setState({
        isFc: false
      });
    };

    return _this2;
  }

  _createClass(InfoPage, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log(nextProps);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this = this;
      var data = (0, _apiFn.GetCardInfo)(getParams.goodId, 0, function (data) {
        console.log(data);
        var imgArr = [];
        var infoImgArr = [];
        data.returnValue.goodsFile.map(function (val, index) {
          if (val.goodsFileType == 0) {
            imgArr.push(_api2.default.imgPath + val.fileMd5);
          } else if (val.goodsFileType == 1) {
            infoImgArr.push(_api2.default.imgPath + val.fileMd5);
          }
        });
        _this.setState({
          data: data.returnValue,
          infoImg: infoImgArr,
          dataImg: imgArr
        });

        console.log(_this.state.data.goodsSign.split(","));
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var _this = this;
      window.addEventListener('scroll', function () {
        clearTimeout("isScrollFn");
        if (!_this3.state.isScroll) {
          _this3.setState({
            isScroll: true
          });
          window.isScrollFn = setTimeout(function () {
            _this3.setState({
              isScroll: false
            });
          }, 2000);
        }
      });

      // jimigooss.suermen.com/upload/20180625/1529913868.jpg?p=800*800
    }
  }, {
    key: "render",
    value: function render() {
      return _react3.default.createElement(
        "div",
        { className: "card-page" },
        _react3.default.createElement(
          _wingBlank2.default,
          null,
          _react3.default.createElement(
            _carousel2.default,
            {
              autoplay: false,
              infinite: true,
              beforeChange: function beforeChange(from, to) {
                return console.log("slide from " + from + " to " + to);
              },
              afterChange: function afterChange(index) {
                return console.log("slide to", index);
              }
            },
            this.state.dataImg.map(function (val) {
              return _react3.default.createElement(
                "a",
                {
                  key: val,
                  href: "http://www.alipay.com",
                  style: {
                    display: "inline-block",
                    width: "100%",
                    height: "100%"
                  }
                },
                _react3.default.createElement("img", {
                  src: "//" + val + ".png",
                  alt: "",
                  style: { width: "100%", verticalAlign: "top" },
                  onLoad: function onLoad() {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event("resize"));
                  }
                })
              );
            })
          )
        ),
        _react3.default.createElement(
          "div",
          { className: "infoBox" },
          _react3.default.createElement(
            "div",
            { className: "priceBox" },
            _react3.default.createElement(
              "span",
              { className: "rightPrice" },
              "\uFFE5",
              this.state.data.mPrice
            ),
            _react3.default.createElement(
              "span",
              { className: "oldPrice" },
              "\uFFE5",
              this.state.data.price
            ),
            _react3.default.createElement(
              "span",
              { className: "jfInfo" },
              "\u8D5A",
              this.state.data.score,
              "\u79EF\u5206"
            )
          ),
          _react3.default.createElement(
            "div",
            { className: "infoContent" },
            _react3.default.createElement(
              "span",
              { className: "infoTitle" },
              this.state.data.goodsFullName
            ),
            _react3.default.createElement(
              "span",
              { className: "infoC" },
              this.state.data.goodsDesc
            )
          ),
          _react3.default.createElement(
            "div",
            { className: "labelBox" },
            _react3.default.createElement(
              "div",
              { className: "moreBox" },
              this.state.data.goodsSign && this.state.data.goodsSign.split(",").map(function (val, inedx) {
                return _react3.default.createElement(
                  "span",
                  { className: "labelItem", key: val },
                  _react3.default.createElement(_icon2.default, { type: "check-circle-o", size: "xxs" }),
                  _react3.default.createElement(
                    "span",
                    null,
                    val
                  )
                );
              })
            )
          )
        ),
        _react3.default.createElement(
          "div",
          { className: "pageContent" },
          this.state.infoImg.map(function (val, index) {
            return _react3.default.createElement("img", { key: val, src: "//" + val, alt: "" });
          })
        ),
        _react3.default.createElement(
          "div",
          { className: "pageFoot" },
          _react3.default.createElement(
            "div",
            { onClick: _open2.default.bind(this, path, getParams), className: this.state.data.statusCode == 0 ? "cantClickBtn" : "redBtn" },
            _react3.default.createElement(
              _button2.default,
              { type: "primary", disabled: this.state.data.statusCode == 0 ? true : false, className: "btncss" },
              "\u52A0\u5165\u8D2D\u7269\u8F66"
            )
          )
        ),
        _react3.default.createElement(
          "div",
          { className: "toastBox", style: { display: this.state.data.statusCode == 0 ? "block" : "none" } },
          _react3.default.createElement(
            "span",
            null,
            "\u6765\u665A\u4E86\uFF0C\u5546\u54C1\u5DF2\u7ECF\u4E0B\u67B6\u5566~"
          )
        ),
        _react3.default.createElement(
          "div",
          { className: this.state.isScroll ? "gotoTop showView" : "gotoTop hiddenView", onClick: this.gotoTop },
          _react3.default.createElement("img", { src: __webpack_require__(/*! ../assets/img/toTop.png */ "./src/getPostDetail/assets/img/toTop.png"), alt: "" })
        ),
        _react3.default.createElement(
          "div",
          { className: "fc", style: { display: this.state.isFc ? "block" : "none" }, onClick: this.hideFcFn },
          _react3.default.createElement(
            "div",
            { className: "text" },
            _react3.default.createElement(
              "span",
              null,
              "\u8BF7\u70B9\u51FB\u53F3\u4E0A\u89D2\u6309\u94AE\uFF0C"
            ),
            _react3.default.createElement(
              "span",
              null,
              "\u9009\u62E9\u3010\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u3011"
            )
          ),
          _react3.default.createElement("img", { src: __webpack_require__(/*! ../assets/img/jt.png */ "./src/getPostDetail/assets/img/jt.png"), alt: "" })
        )
      );
    }
  }]);

  return InfoPage;
}(_react3.default.Component));

exports.default = InfoPage;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=4.chunk.js.map