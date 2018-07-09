(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/html_model/api/api.js":
/*!***********************************!*\
  !*** ./src/html_model/api/api.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

console.log("编译环境:", "development");
var URL = {
    dev: "/api",
    prod: "www.jd.com"
};
var APIURL =  true ? URL.dev : undefined;
console.log("接口地址：", APIURL);

var API = {
    //GET卡券详情
    cardInfo: APIURL + "/crm/vouchers/detail"
};
console.log("接口列表：", API);

exports.default = API;

/***/ }),

/***/ "./src/html_model/api/apiFn.js":
/*!*************************************!*\
  !*** ./src/html_model/api/apiFn.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetCardInfo = undefined;

var _api = __webpack_require__(/*! ./api */ "./src/html_model/api/api.js");

var _api2 = _interopRequireDefault(_api);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GetCardInfo = exports.GetCardInfo = function GetCardInfo(app_version, app_system, id) {
  _axios2.default.get(_api2.default.cardInfo, {
    params: {
      app_version: 1,
      app_system: 1,
      id: 51
    }
  }).then(function (res) {
    console.log(res);
  }).catch(function (err) {
    console.log(err);
  });
};

var requestFn = function requestFn() {
  return;
  Axios.get(_api2.default.cardInfo, {
    params: {
      app_version: 1,
      app_system: 1,
      id: 51
    }
  }).then(function (res) {
    console.log(res);

    if (res.data.code == "0") {
      console.log(res.data.data);
    } else {
      console.log(res.datam.sg);
    }
  }).catch(function (err) {
    console.log(err);
  });
};

/***/ }),

/***/ "./src/html_model/assets/img/timg.jpg":
/*!********************************************!*\
  !*** ./src/html_model/assets/img/timg.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/timg.d8bafa4.jpg";

/***/ }),

/***/ "./src/html_model/component/infoPage.js":
/*!**********************************************!*\
  !*** ./src/html_model/component/infoPage.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ./node_modules/redbox-react/lib/index.js */ "./node_modules/redbox-react/lib/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ./node_modules/react-transform-catch-errors/lib/index.js */ "./node_modules/react-transform-catch-errors/lib/index.js");

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(/*! ./node_modules/react-transform-hmr/lib/index.js */ "./node_modules/react-transform-hmr/lib/index.js");

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _apiFn = __webpack_require__(/*! ../api/apiFn */ "./src/html_model/api/apiFn.js");

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
  filename: "D:/soft-work/webpack-fool-multiple/src/html_model/component/infoPage.js",
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _DSoftWorkWebpackFoolMultipleNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: "D:/soft-work/webpack-fool-multiple/src/html_model/component/infoPage.js",
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _DSoftWorkWebpackFoolMultipleNode_modulesReactTransformHmrLibIndexJs2(_DSoftWorkWebpackFoolMultipleNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var InfoPage = _wrapComponent("InfoPage")(function (_React$Component) {
  _inherits(InfoPage, _React$Component);

  function InfoPage() {
    _classCallCheck(this, InfoPage);

    var _this = _possibleConstructorReturn(this, (InfoPage.__proto__ || Object.getPrototypeOf(InfoPage)).call(this));

    _this.state = {
      testText: "Hello!"
    };
    return _this;
  }

  _createClass(InfoPage, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log(nextProps);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _apiFn.GetCardInfo)(1, 1, 51);
    }
  }, {
    key: "render",
    value: function render() {
      return _react3.default.createElement(
        "div",
        { className: "card-page" },
        _react3.default.createElement(
          "h1",
          { style: { display: "block", textAlign: "center" }, className: "animateBBB" },
          this.state.testText
        ),
        _react3.default.createElement("br", null),
        _react3.default.createElement("img", { style: { width: "375px" }, src: __webpack_require__(/*! ../assets/img/timg.jpg */ "./src/html_model/assets/img/timg.jpg"), alt: "" })
      );
    }
  }]);

  return InfoPage;
}(_react3.default.Component));

exports.default = InfoPage;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=1.chunk.js.map