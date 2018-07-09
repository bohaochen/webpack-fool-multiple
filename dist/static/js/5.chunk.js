(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/getGrouponOpenDetail/api/api.js":
/*!*********************************************!*\
  !*** ./src/getGrouponOpenDetail/api/api.js ***!
  \*********************************************/
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
    apiKey: "3A87E38D08DBD775AF34D96923679AEB",
    timestamp: time,
    imgPath: "//jimigooss.suermen.com/",
    getGrouponOpenDetail: APIURL + "/rest/v1/groupon/getGrouponOpenDetail"
};
console.log("接口列表：", API);

exports.default = API;

/***/ }),

/***/ "./src/getGrouponOpenDetail/api/apiFn.js":
/*!***********************************************!*\
  !*** ./src/getGrouponOpenDetail/api/apiFn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getGrouponOpenDetail = undefined;

var _api = __webpack_require__(/*! ./api */ "./src/getGrouponOpenDetail/api/api.js");

var _api2 = _interopRequireDefault(_api);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getGrouponOpenDetail = exports.getGrouponOpenDetail = function getGrouponOpenDetail(grouponId, orderNo, userId, callback) {
    _axios2.default.post(_api2.default.getGrouponOpenDetail, {
        "apiKey": _api2.default.apiKey,
        "timestamp": _api2.default.timestamp,
        "bizContent": {
            "grouponId": grouponId,
            "orderNo": orderNo,
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

/***/ "./src/getGrouponOpenDetail/api/getUrlArgObject.js":
/*!*********************************************************!*\
  !*** ./src/getGrouponOpenDetail/api/getUrlArgObject.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function getUrlArgObject() {
    var args = new Object();
    var query = location.search.substring(1); //获取查询串 
    var pairs = query.split("&"); //在逗号处断开  
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

/***/ "./src/getGrouponOpenDetail/api/open.js":
/*!**********************************************!*\
  !*** ./src/getGrouponOpenDetail/api/open.js ***!
  \**********************************************/
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
    androidDownLoad: "//www.baidu.com/#androidDownLoad",
    yybUrl: "http://www.baidu.com"
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
                    pathStr = "/" + path;
                }
                paramsStr = pathStr + paramsStr + "?" + val + "=" + params[val];
            } else {
                paramsStr = paramsStr + "&" + val + "=" + params[val];
            }
        });
    }
    if (ifWeixin) {
        // 如果是微信端
        location.href = url.weixin + paramsStr; // 直接使用location.href打开，注意如果是不在微信白名单无法打开
        downLoad(yybUrl);
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

/***/ "./src/getGrouponOpenDetail/assets/img/jt.png":
/*!****************************************************!*\
  !*** ./src/getGrouponOpenDetail/assets/img/jt.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAB/CAYAAACAC765AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcyRjQ4MTc4NkJCMDExRThBNDAyQUM3ODY3QzgzRTlFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcyRjQ4MTc5NkJCMDExRThBNDAyQUM3ODY3QzgzRTlFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzJGNDgxNzY2QkIwMTFFOEE0MDJBQzc4NjdDODNFOUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzJGNDgxNzc2QkIwMTFFOEE0MDJBQzc4NjdDODNFOUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5G2RR9AAAIcklEQVR42uxdfZBO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"

/***/ }),

/***/ "./src/getGrouponOpenDetail/assets/img/timg.jpg":
/*!******************************************************!*\
  !*** ./src/getGrouponOpenDetail/assets/img/timg.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/timg.d8bafa4.jpg";

/***/ }),

/***/ "./src/getGrouponOpenDetail/component/infoPage.js":
/*!********************************************************!*\
  !*** ./src/getGrouponOpenDetail/component/infoPage.js ***!
  \********************************************************/
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _api = __webpack_require__(/*! ../api/api */ "./src/getGrouponOpenDetail/api/api.js");

var _api2 = _interopRequireDefault(_api);

var _open = __webpack_require__(/*! ../api/open */ "./src/getGrouponOpenDetail/api/open.js");

var _open2 = _interopRequireDefault(_open);

var _getUrlArgObject = __webpack_require__(/*! ../api/getUrlArgObject */ "./src/getGrouponOpenDetail/api/getUrlArgObject.js");

var _getUrlArgObject2 = _interopRequireDefault(_getUrlArgObject);

var _apiFn = __webpack_require__(/*! ../api/apiFn */ "./src/getGrouponOpenDetail/api/apiFn.js");

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
  filename: "D:/soft-work/webpack-fool-multiple/src/getGrouponOpenDetail/component/infoPage.js",
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _DSoftWorkWebpackFoolMultipleNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: "D:/soft-work/webpack-fool-multiple/src/getGrouponOpenDetail/component/infoPage.js",
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
var path = "getGrouponOpenDetail";

var InfoPage = _wrapComponent("InfoPage")(function (_React$Component) {
  _inherits(InfoPage, _React$Component);

  function InfoPage() {
    _classCallCheck(this, InfoPage);

    var _this2 = _possibleConstructorReturn(this, (InfoPage.__proto__ || Object.getPrototypeOf(InfoPage)).call(this));

    _this2.state = {
      data: [],
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
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this = this;
      var data = (0, _apiFn.getGrouponOpenDetail)(getParams.grouponId, getParams.orderNo, getParams.userId, function (data) {
        console.log(data);

        _this.setState({
          data: data.returnValue
        });
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log(nextProps);
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
    }
  }, {
    key: "render",
    value: function render() {
      return _react3.default.createElement(
        "div",
        { className: "card-page" },
        _react3.default.createElement(
          "div",
          { className: "activityImg" },
          _react3.default.createElement("img", { src: __webpack_require__(/*! ../assets/img/timg.jpg */ "./src/getGrouponOpenDetail/assets/img/timg.jpg"), alt: "" })
        ),
        _react3.default.createElement(
          "div",
          { className: "infoBox" },
          _react3.default.createElement(
            "div",
            { className: "infoContent" },
            _react3.default.createElement(
              "span",
              { className: "infoTitle" },
              "\u6FB3\u6D32\u7EA2\u9152\u5E72\u7EA2\u6765\u7231\u7231\u7231\u7231\u7231\u6211\u7231\u7231\u7231\u7231\u6211\u7231\u7231\u7231\u7231\u7231\u7231\u6FB3\u6D32\u7EA2\u9152\u5E72\u7EA2\u6765\u7231\u7231\u7231\u7231\u7231\u6211\u7231\u7231\u7231\u7231\u6211\u7231\u7231\u7231\u7231\u7231\u7231\u7231\u554A1729ml/\u74F6"
            )
          ),
          _react3.default.createElement(
            "div",
            { className: "priceBox" },
            _react3.default.createElement(
              "span",
              { className: "rightPrice" },
              "\uFFE5288"
            ),
            _react3.default.createElement(
              "span",
              { className: "oldPrice" },
              "\uFFE5350"
            ),
            _react3.default.createElement(
              "span",
              { className: "ptnum" },
              "\u5DF2\u62FC1896\u4EF6-20\u4EBA\u62FC\u56E2"
            )
          ),
          _react3.default.createElement(
            "div",
            { className: "labelBox" },
            _react3.default.createElement(
              "span",
              { className: "labelItem" },
              _react3.default.createElement(_icon2.default, { type: "check-circle-o", size: "xxs" }),
              _react3.default.createElement(
                "span",
                null,
                "\u5305\u90AE"
              )
            ),
            _react3.default.createElement(
              "span",
              { className: "labelItem" },
              _react3.default.createElement(_icon2.default, { type: "check-circle-o", size: "xxs" }),
              _react3.default.createElement(
                "span",
                null,
                "\u5305\u90AE"
              )
            ),
            _react3.default.createElement(
              "span",
              { className: "labelItem" },
              _react3.default.createElement(_icon2.default, { type: "check-circle-o", size: "xxs" }),
              _react3.default.createElement(
                "span",
                null,
                "\u5305\u90AE"
              )
            )
          )
        ),
        _react3.default.createElement(
          "div",
          { className: "ptInfo" },
          _react3.default.createElement(
            "div",
            { className: "ptText" },
            _react3.default.createElement(
              "div",
              { className: "limg" },
              _react3.default.createElement("img", { src: __webpack_require__(/*! ../assets/img/timg.jpg */ "./src/getGrouponOpenDetail/assets/img/timg.jpg"), alt: "" })
            ),
            _react3.default.createElement(
              "div",
              { className: "rText" },
              _react3.default.createElement(
                "span",
                { className: "title" },
                "\u672C\u56E2\u540D\u989D\u5DF2\u6EE1"
              ),
              _react3.default.createElement(
                "span",
                { className: "time" },
                "4\u592923:15:36.6\u540E\u7ED3\u675F"
              )
            )
          ),
          _react3.default.createElement(
            "div",
            { className: "redBtn dbtn" },
            _react3.default.createElement(
              _button2.default,
              { type: "primary", className: "btncss", onClick: _open2.default.bind(this, path, getParams) },
              _react3.default.createElement(
                "span",
                null,
                "\u67E5\u770B\u66F4\u591A\u62FC\u56E2\u5546\u54C1"
              )
            )
          )
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
          _react3.default.createElement("img", { src: __webpack_require__(/*! ../assets/img/jt.png */ "./src/getGrouponOpenDetail/assets/img/jt.png"), alt: "" })
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
//# sourceMappingURL=5.chunk.js.map