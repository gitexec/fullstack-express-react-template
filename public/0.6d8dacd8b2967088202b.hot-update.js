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
  return function (dispatch) {
    //async dispatch =>
    // const res = await axios.get('/api/current_user');
    // const res = await
    // const data = {name: 'hey'};
    dispatch({ type: _types.FETCH_USER, payload: { name: 'hey' } });
  };
};

/***/ })

})
//# sourceMappingURL=0.6d8dacd8b2967088202b.hot-update.js.map