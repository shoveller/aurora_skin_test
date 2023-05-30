"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_router_MemberRoute_jsx"],{

/***/ "./src/router/MemberRoute.jsx":
/*!************************************!*\
  !*** ./src/router/MemberRoute.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");





/**
 * MemberRoute
 * 회원만 접근 가능한 페이지인 경우, MemberRoute 를 통해 비로그인 상태 처리
 *
 * 두가지 방법으로 사용가능
 * 1) my-page 와 같이 route children 과 Outlet 을 사용
 * 2) children
 *  <MemberRoute>
 *    <노출페이지 컴포넌트 />
 *  </MemberRoute>
 * @returns
 */
var MemberRoute = function MemberRoute(_ref) {
  var children = _ref.children;
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  if (!(0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.isSignedIn)()) {
    var _location$pathname, _location$search;
    var nextPath = "".concat((_location$pathname = location.pathname) !== null && _location$pathname !== void 0 ? _location$pathname : '').concat((_location$search = location.search) !== null && _location$search !== void 0 ? _location$search : '');
    return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Navigate, {
      replace: true,
      to: "/sign-in",
      state: {
        from: nextPath ? nextPath : '/'
      }
    });
  }
  if (children) {
    return children;
  }
  return /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/React.createElement(React.Fragment, null)
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Outlet, null));
};
MemberRoute.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3__.node
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberRoute);

/***/ })

}]);
//# sourceMappingURL=src_router_MemberRoute_jsx.fabd5d156095ef0eda6d.bundle.js.map