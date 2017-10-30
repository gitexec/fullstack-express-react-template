webpackHotUpdate(0,{

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(70);

var _reactBootstrap = __webpack_require__(315);

var _home = __webpack_require__(457);

var _home2 = _interopRequireDefault(_home);

var _nature = __webpack_require__(458);

var _nature2 = _interopRequireDefault(_nature);

var _actions = __webpack_require__(471);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      // var homeImg = document.getElementById('home');
      // homeImg.src = homeIcon;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Hello Dev'
        ),
        _react2.default.createElement(
          'div',
          { id: 'home-img' },
          _react2.default.createElement('img', { src: _home2.default })
        ),
        _react2.default.createElement('div', { className: 'settingIcon' }),
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'btn btn-primary' },
          'Primary'
        ),
        _react2.default.createElement(
          'div',
          { id: 'nature-id' },
          _react2.default.createElement('img', { src: _nature2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, actons)(App);

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUser = undefined;

var _types = __webpack_require__(472);

var fetchUser = exports.fetchUser = function fetchUser() {
  return async function (dispatch) {
    // const res = await axios.get('/api/current_user');

    var data = { name: 'hey' };
    dispatch({ type: _types.FETCH_USER, payload: data });
  };
};

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_USER = exports.FETCH_USER = 'fetch_user';
var FETCH_SURVEYS = exports.FETCH_SURVEYS = 'fetch_surveys';

/***/ })

})
//# sourceMappingURL=0.8841d4a25280736d0106.hot-update.js.map