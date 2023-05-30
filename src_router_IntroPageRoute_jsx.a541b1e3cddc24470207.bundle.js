"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_router_IntroPageRoute_jsx"],{

/***/ "./src/router/IntroPageRoute.jsx":
/*!***************************************!*\
  !*** ./src/router/IntroPageRoute.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _INTRO_PAGE_ROUTING_M;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






var platformType = react_device_detect__WEBPACK_IMPORTED_MODULE_1__.isMobile ? "mobile" : "pc";
var exceptPaths = ["/adult-certification", "/no-access", "/member-only", "/sign-up/form", "/sign-up", "/sign-in", "/find-id", "/find-password", "/change-password", "/callback", "/not-found", "/callback/auth-callback", "/service-check", "/expired-mall"];
var INTRO_PAGE_ROUTING_MAP = (_INTRO_PAGE_ROUTING_M = {}, _defineProperty(_INTRO_PAGE_ROUTING_M, _shopby_shared__WEBPACK_IMPORTED_MODULE_2__.INTRO_PAGE_TYPE_MAP.ONLY_ADULT, {
  next: "/adult-certification",
  shouldGoToOwnPage: function shouldGoToOwnPage() {
    return (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_2__.isAgeVerified)();
  }
}), _defineProperty(_INTRO_PAGE_ROUTING_M, _shopby_shared__WEBPACK_IMPORTED_MODULE_2__.INTRO_PAGE_TYPE_MAP.NO_ACCESS, {
  next: "/no-access",
  shouldGoToOwnPage: function shouldGoToOwnPage() {
    return false;
  }
}), _defineProperty(_INTRO_PAGE_ROUTING_M, _shopby_shared__WEBPACK_IMPORTED_MODULE_2__.INTRO_PAGE_TYPE_MAP.ONLY_MEMBER, {
  next: "/member-only",
  shouldGoToOwnPage: function shouldGoToOwnPage() {
    return (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_2__.isSignedIn)();
  }
}), _INTRO_PAGE_ROUTING_M);
var IntroPageRoute = function IntroPageRoute(_ref) {
  var children = _ref.children;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useMallStateContext)(),
    mall = _useMallStateContext.mall;
  var condition = INTRO_PAGE_ROUTING_MAP[mall.introRedirection[platformType]];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (condition) {
      if (!(condition !== null && condition !== void 0 && condition.shouldGoToOwnPage()) && !exceptPaths.includes(location.pathname)) {
        navigate(condition.next, {
          replace: true,
          state: {
            from: "".concat(location.pathname).concat(location.search),
            isIntroPage: true
          }
        });
      }
    }
    setIsLoading(false);
  }, [location, condition]);
  if (isLoading) return /*#__PURE__*/React.createElement(React.Fragment, null);
  return children;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntroPageRoute);
IntroPageRoute.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_5__.node
};

/***/ })

}]);
//# sourceMappingURL=src_router_IntroPageRoute_jsx.a541b1e3cddc24470207.bundle.js.map