webpackHotUpdate(0,{

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUser = undefined;

var _types = __webpack_require__(204);

function resolveAfter2Seconds(x) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(x);
    }, 2000);
  });
}

var fetchUser = exports.fetchUser = function fetchUser() {
  return async function (dispatch) {
    // // const res = await axios.get('/api/current_user');

    var res = await resolveAfter2Seconds({ name: 'heyyy' });

    dispatch({ type: _types.FETCH_USER, payload: res });
  };
};

/***/ })

})
//# sourceMappingURL=0.b587a562feab54f7fd56.hot-update.js.map