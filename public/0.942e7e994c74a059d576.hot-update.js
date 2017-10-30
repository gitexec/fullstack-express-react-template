webpackHotUpdate(0,{

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(15);

var _jquery2 = _interopRequireDefault(_jquery);

var _toastr = __webpack_require__(131);

var _toastr2 = _interopRequireDefault(_toastr);

__webpack_require__(273);

var _reactHotLoader = __webpack_require__(105);

var _reactRedux = __webpack_require__(68);

var _redux = __webpack_require__(49);

var _reactRouterDom = __webpack_require__(50);

var _reduxThunk = __webpack_require__(130);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouterRedux = __webpack_require__(123);

__webpack_require__(274);

__webpack_require__(275);

var _reducers = __webpack_require__(276);

var _reducers2 = _interopRequireDefault(_reducers);

var _routes = __webpack_require__(133);

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
            'routes'
        )
    ), document.getElementById('react-app'));
}

renderApp();

// Allow Hot Module Replacement
if (true) {
    module.hot.accept(133, function () {
        routes = RoutesModule.routes;
        renderApp();
    });
}

/***/ })

})
//# sourceMappingURL=0.942e7e994c74a059d576.hot-update.js.map