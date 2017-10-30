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
    //async dispatch =>
    // const res = await axios.get('/api/current_user');

    var data = { name: 'hey' };
    dispatch({ type: _types.FETCH_USER, payload: data });
  };
};

/***/ })

})
//# sourceMappingURL=0.b5c828de094ed1781008.hot-update.js.map