webpackHotUpdate(0,{

/***/ 206:
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

var _types = __webpack_require__(75);

/***/ })

})
//# sourceMappingURL=0.254af32843cfc0f5fc42.hot-update.js.map