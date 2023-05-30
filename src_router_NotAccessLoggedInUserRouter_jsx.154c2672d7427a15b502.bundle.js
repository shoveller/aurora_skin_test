"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_router_NotAccessLoggedInUserRouter_jsx"],{

/***/ "./src/router/NotAccessLoggedInUserRouter.jsx":
/*!****************************************************!*\
  !*** ./src/router/NotAccessLoggedInUserRouter.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var NotAccessLoggedInUserRouter = function NotAccessLoggedInUserRouter(_ref) {
  var children = _ref.children;
  if ((0,_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.isSignedIn)()) {
    return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Navigate, {
      replace: true,
      to: "/"
    });
  }
  return children;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotAccessLoggedInUserRouter);
NotAccessLoggedInUserRouter.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__.node
};

/***/ })

}]);
//# sourceMappingURL=src_router_NotAccessLoggedInUserRouter_jsx.154c2672d7427a15b502.bundle.js.map