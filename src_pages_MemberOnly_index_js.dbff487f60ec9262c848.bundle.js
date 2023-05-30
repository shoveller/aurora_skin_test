"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_pages_MemberOnly_index_js"],{

/***/ "./src/pages/MemberOnly/MemberOnly.jsx":
/*!*********************************************!*\
  !*** ./src/pages/MemberOnly/MemberOnly.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/SignInProvider/SignInProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/OpenIdSignInProvider/OpenIdSignInProvider.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _SignIn_SignInForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SignIn/SignInForm */ "./src/pages/SignIn/SignInForm.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var MemberOnly = function MemberOnly() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  var handleSignIn = function handleSignIn() {
    var _location$state$from, _location$state;
    navigate((_location$state$from = (_location$state = location.state) === null || _location$state === void 0 ? void 0 : _location$state.from) !== null && _location$state$from !== void 0 ? _location$state$from : '/', {
      replace: true,
      state: _objectSpread({}, location.state)
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.isSignedIn)() && handleSignIn();
  }, [_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.isSignedIn]);
  return /*#__PURE__*/React.createElement("div", {
    className: "member-only"
  }, /*#__PURE__*/React.createElement("p", {
    className: "member-only__text"
  }, "\uD68C\uC6D0 \uC804\uC6A9\uC73C\uB85C \uC6B4\uC601\uB418\uB294 \uC1FC\uD551\uBAB0\uC785\uB2C8\uB2E4.", /*#__PURE__*/React.createElement("br", null), "\uB85C\uADF8\uC778/\uD68C\uC6D0\uAC00\uC785 \uD6C4 \uC774\uC6A9\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/React.createElement(_SignIn_SignInForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    usesOnlySignIn: true,
    onSignIn: handleSignIn
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberOnly);

/***/ }),

/***/ "./src/pages/MemberOnly/index.js":
/*!***************************************!*\
  !*** ./src/pages/MemberOnly/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MemberOnly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemberOnly */ "./src/pages/MemberOnly/MemberOnly.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_MemberOnly__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);
//# sourceMappingURL=src_pages_MemberOnly_index_js.dbff487f60ec9262c848.bundle.js.map