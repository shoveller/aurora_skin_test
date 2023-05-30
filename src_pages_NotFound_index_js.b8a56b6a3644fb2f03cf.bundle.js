"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_pages_NotFound_index_js"],{

/***/ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},__assign.apply(this,arguments)},__rest=undefined&&undefined.__rest||function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(r[n[a]]=t[n[a]])}return r};var Button=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function(t,e){var r=t.theme,n=void 0===r?"default":r,a=t.label,o=t.className,s=void 0===o?"":o,i=t.children,l=__rest(t,["theme","label","className","children"]);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",__assign({ref:e,type:"button",className:"btn btn--".concat(n," ").concat(s)},l,{children:i||a}))}));/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);Button.displayName="Button";

/***/ }),

/***/ "./src/pages/NotFound/NotFound.jsx":
/*!*****************************************!*\
  !*** ./src/pages/NotFound/NotFound.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var NotFound = function NotFound() {
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_0__.useMallStateContext)(),
    serviceCenter = _useMallStateContext.mall.serviceCenter;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  return /*#__PURE__*/React.createElement("div", {
    className: "not-found"
  }, /*#__PURE__*/React.createElement("p", {
    className: "not-found__title"
  }, "Not found."), /*#__PURE__*/React.createElement("p", null, "\uC694\uCCAD\uD558\uC2E0 \uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("p", null, "\uC624\uB958 \uAD00\uB828 \uBB38\uC758\uB294 ", /*#__PURE__*/React.createElement("span", null, serviceCenter.phoneNo), "\uB85C ", /*#__PURE__*/React.createElement("br", null), "\uC5F0\uB77D\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("p", null, "\uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uBD88\uD3B8\uC744 \uB4DC\uB824 \uC8C4\uC1A1\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    className: "not-found__btns"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
    theme: "dark",
    label: "\uD648 \uBC14\uB85C\uAC00\uAE30",
    onClick: function onClick() {
      return navigate('/');
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

/***/ }),

/***/ "./src/pages/NotFound/index.js":
/*!*************************************!*\
  !*** ./src/pages/NotFound/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFound */ "./src/pages/NotFound/NotFound.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NotFound__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);
//# sourceMappingURL=src_pages_NotFound_index_js.b8a56b6a3644fb2f03cf.bundle.js.map