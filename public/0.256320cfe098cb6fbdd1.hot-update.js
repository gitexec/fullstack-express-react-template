webpackHotUpdate(0,{

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(12);

var _jquery2 = _interopRequireDefault(_jquery);

var _toastr = __webpack_require__(146);

var _toastr2 = _interopRequireDefault(_toastr);

__webpack_require__(309);

var _reactHotLoader = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-hot-loader\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _reactRedux = __webpack_require__(70);

var _redux = __webpack_require__(72);

var _reactRouterDom = __webpack_require__(52);

var _reduxThunk = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"redux-thunk\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouterRedux = __webpack_require__(139);

__webpack_require__(310);

__webpack_require__(311);

var _reducers = __webpack_require__(473);

var _reducers2 = _interopRequireDefault(_reducers);

var _routes = __webpack_require__(147);

var RoutesModule = _interopRequireWildcard(_routes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = RoutesModule.routes;

var initialState = {};
var store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));

function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing configuration
    // and injects the app into a DOM element.
    _reactDom2.default.render(_react2.default.createElement(
        _reactHotLoader.AppContainer,
        null,
        _react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(_reactRouterRedux.ConnectedRouter, { children: routes })
        )
    ), document.getElementById('react-app'));
}

renderApp();

// Allow Hot Module Replacement
if (true) {
    module.hot.accept(147, function () {
        routes = RoutesModule.routes;
        renderApp();
    });
}

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(72);

var _usersReducer = __webpack_require__(474);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combieReducers)({
  users: _usersReducer2.default
});

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _types.FETCH_USER:
      return action.payload;
      break;
    default:
      return state;
  }
};

var _types = __webpack_require__(460);

/***/ })

})
//# sourceMappingURL=0.256320cfe098cb6fbdd1.hot-update.js.map