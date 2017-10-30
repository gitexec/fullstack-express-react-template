webpackHotUpdate(0,{

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
    console.log(data);
    dispatch({ type: _types.FETCH_USER, payload: data });
  };
};

/***/ })

})
//# sourceMappingURL=0.f016a64e7272f4104017.hot-update.js.map