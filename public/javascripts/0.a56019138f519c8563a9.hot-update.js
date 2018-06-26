webpackHotUpdate(0,{

/***/ "./index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _react = __webpack_require__("../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("../node_modules/react-dom/index.js");

var _reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js");

var _testcomponent = __webpack_require__("./testcomponent.jsx");

var _testcomponent2 = _interopRequireDefault(_testcomponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderApp = function renderApp(Component) {
  (0, _reactDom.render)(_react2.default.createElement(
    _reactHotLoader.AppContainer,
    null,
    _react2.default.createElement(Component, { headline: 'Test Headline', count: 1234, showCount: true })
  ), document.querySelector('#react-app'));
};

renderApp(_testcomponent2.default);

if (module && module.hot) {
  module.hot.accept("./testcomponent.jsx", function () {
    renderApp(_testcomponent2.default);
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(renderApp, 'renderApp', '/home/violeta/STUDYING/notes/node_notes/nodeReactTut/userlist/src/index.jsx');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../node_modules/webpack/buildin/module.js")(module)))

/***/ })

})