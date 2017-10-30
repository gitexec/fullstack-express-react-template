webpackHotUpdate(0,{

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(35);

var _actions = __webpack_require__(203);

var actions = _interopRequireWildcard(_actions);

var _home = __webpack_require__(205);

var _home2 = _interopRequireDefault(_home);

var _nature = __webpack_require__(206);

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

exports.default = (0, _reactRedux.connect)(mapStateToProps, actions);

/***/ })

})
//# sourceMappingURL=0.a06d9238e84a534026ac.hot-update.js.map