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
//# sourceMappingURL=0.c098f0eff3aef9df9709.hot-update.js.map