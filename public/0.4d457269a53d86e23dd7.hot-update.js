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
    var res = await axios.get('/api/current_user');
    // const res = await new Promise(resolve => {
    //     setTimeout(() => {
    //       resolve({name: "heyyy"});
    //     }, 2000);
    // });

    dispatch({ type: _types.FETCH_USER, payload: res });
  };
};

/***/ })

})
//# sourceMappingURL=0.4d457269a53d86e23dd7.hot-update.js.map