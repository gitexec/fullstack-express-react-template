webpackHotUpdate(0,{

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _toastr = __webpack_require__(70);

var _toastr2 = _interopRequireDefault(_toastr);

__webpack_require__(187);

var _redux = __webpack_require__(13);

var _reactRedux = __webpack_require__(12);

var _reduxThunk = __webpack_require__(69);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

__webpack_require__(188);

__webpack_require__(189);

var _reducers = __webpack_require__(197);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = __webpack_require__(190).Routes;

var initialState = window.STATE_FROM_SERVER;
var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));

function renderApp() {
  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(Routes, null)
  ), document.querySelector("#react-app"));
}

renderApp();

// if(module.hot){
//   module.hot.accept('./Routes', () => {
//
//   })
// }

/***/ })

})
//# sourceMappingURL=0.b5efdbc0a4ba5c7cf638.hot-update.js.map