webpackHotUpdate(0,{

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUser = undefined;

var _types = __webpack_require__(204);

var fetchUser = exports.fetchUser = function fetchUser() {
  return async function (dispatch) {
    // // const res = await axios.get('/api/current_user');

    var res = await new Promise(function (resolve) {
      setTimeout(function () {
        resolve('heyy');
      }, 2000);
    });
    dispatch({ type: _types.FETCH_USER, payload: res });
  };
};

/***/ })

})
//# sourceMappingURL=0.3e5d8b021c560e524d65.hot-update.js.map