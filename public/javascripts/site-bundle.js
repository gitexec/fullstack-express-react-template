webpackJsonp([0],{

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(31);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _toastr = __webpack_require__(69);

var _toastr2 = _interopRequireDefault(_toastr);

__webpack_require__(187);

var _redux = __webpack_require__(12);

var _reactRedux = __webpack_require__(18);

var _reduxThunk = __webpack_require__(68);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

__webpack_require__(188);

__webpack_require__(189);

var _App = __webpack_require__(190);

var _App2 = _interopRequireDefault(_App);

var _reducers = __webpack_require__(195);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = window.STATE_FROM_SERVER;
var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_App2.default, null)
), document.querySelector("#react-app"));

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Test = __webpack_require__(191);

var _Test2 = _interopRequireDefault(_Test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Test2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(18);

var _actions = __webpack_require__(192);

var actions = _interopRequireWildcard(_actions);

var _home = __webpack_require__(193);

var _home2 = _interopRequireDefault(_home);

var _nature = __webpack_require__(194);

var _nature2 = _interopRequireDefault(_nature);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Navbars } from 'react-bootstrap';


var Test = function (_Component) {
  _inherits(Test, _Component);

  function Test(props) {
    _classCallCheck(this, Test);

    return _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this, props));
  }

  _createClass(Test, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchUser();
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      switch (this.props.users) {
        case null:
          return _react2.default.createElement(
            'div',
            null,
            'Loading'
          );
          break;
        default:
          return _react2.default.createElement(
            'div',
            null,
            this.props.users.name
          );
      }
    }
  }, {
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
          this.renderContent()
        )
      );
    }
  }]);

  return Test;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    users: state.users
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(Test);

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUser = undefined;

var _types = __webpack_require__(70);

var fetchUser = exports.fetchUser = function fetchUser() {
  return async function (dispatch) {
    var res = await fetch('/apis/media');
    var data = await res.json();
    dispatch({ type: _types.FETCH_USER, payload: data });
  };
};

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/f1224ebcc42b44226aa414bce80fd715-nature.jpg";

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(12);

var _usersReducer = __webpack_require__(196);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  users: _usersReducer2.default
});

/***/ }),

/***/ 196:
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

var _types = __webpack_require__(70);

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_USER = exports.FETCH_USER = 'fetch_user';
var FETCH_SURVEYS = exports.FETCH_SURVEYS = 'fetch_surveys';

/***/ })

},[186]);
//# sourceMappingURL=site-bundle.js.map