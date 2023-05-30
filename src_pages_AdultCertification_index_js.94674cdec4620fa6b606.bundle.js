"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_pages_AdultCertification_index_js"],{

/***/ "./node_modules/@shopby/react-components/dist/esm/auth/AgeVerificationProvider/AgeVerificationProvider.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/auth/AgeVerificationProvider/AgeVerificationProvider.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useAgeVerificationActionContext": () => (/* binding */ useAgeVerificationActionContext)
/* harmony export */ });
/* unused harmony export useAgeVerificationStateContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},__assign.apply(this,arguments)},__read=undefined&&undefined.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var i,n,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(i=o.next()).done;)a.push(i.value)}catch(e){n={error:e}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return a};var _a=_shopby_shared__WEBPACK_IMPORTED_MODULE_2__.authHelper.ageVerification,Helper=_a.Helper,MUTATION_KEY=_a.MUTATION_KEY,DEFAULT_STATE={ageVerificationDetail:{birthday:"",verified:!1,verifiedDateTime:""}},AgeVerificationStateContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),AgeVerificationActionContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),AgeVerificationProvider=function(e){var t=e.children,r=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.ageVerificationDetail),2),i=r[0],n=r[1],o=(0,(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_2__.executeHelper)(new Helper)}),[]).executeMutation)(MUTATION_KEY.POST_KCP_AGE_VERIFICATION).mutate,a=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return{postKcpAgeVerification:function(e){return o({payload:e,onSuccess:function(e){var t=e.data;n(t)}})}}}),[]);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AgeVerificationStateContext.Provider,__assign({value:{ageVerificationDetail:i}},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AgeVerificationActionContext.Provider,__assign({value:a},{children:t}))}))};var useAgeVerificationStateContext=function(){var e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AgeVerificationStateContext);if(!e)throw new Error("INVALID_AgeVerificationStateContext");return e};var useAgeVerificationActionContext=function(){var e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AgeVerificationActionContext);if(!e)throw new Error("INVALID_AgeVerificationActionContext");return e};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AgeVerificationProvider);

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/auth/IdentificationVerificationProvider/IdentificationVerificationProvider.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/auth/IdentificationVerificationProvider/IdentificationVerificationProvider.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useIdentificationVerificationActionContext": () => (/* binding */ useIdentificationVerificationActionContext),
/* harmony export */   "useIdentificationVerificationStateContext": () => (/* binding */ useIdentificationVerificationStateContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/shared/helpers */ "./node_modules/@shopby/shared/dist/esm/helpers/index.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},__assign.apply(this,arguments)},__read=undefined&&undefined.__read||function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,r,o=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(t){r={error:t}}finally{try{n&&!n.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}return a};var IdentificationVerificationStateContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),IdentificationVerificationActionContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),_a=_shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_2__.authHelper.identificationVerification,Helper=_a.Helper,QUERY_KEY=_a.QUERY_KEY,DEFAULT_STATE={isCiExist:!1,isIdentificationVerificationReSend:!1,kcpForm:null,ci:""},IdentificationVerificationProvider=function(t){var e=t.children,i=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.isIdentificationVerificationReSend),2),n=i[0],r=i[1],o=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.isCiExist),2),a=o[0],c=o[1],f=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.kcpForm),2),s=f[0],u=f[1],_=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.ci),2),d=_[0],l=_[1],E=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return (0,_shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_2__.executeHelper)(new Helper)}),[]).executeQuery,I=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return{updateIsIdentificationVerificationReSend:r,updateIsCiExist:c,updateCi:l,moveIdVerification:function(t){return E(QUERY_KEY.QUERY_KCP_ID_VERIFICATION_FORM,{payload:t,onSuccess:function(t){var e=t.data;u(e)}})},getIdVerificationResponse:function(t){return E(QUERY_KEY.QUERY_KCP_ID_VERIFICATION_RESPONSE,{payload:t})},verifyCi:function(t){return E(QUERY_KEY.QUERY_PROFILE_CI_EXISTS,{payload:t})}}}),[]);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IdentificationVerificationActionContext.Provider,__assign({value:I},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IdentificationVerificationStateContext.Provider,__assign({value:{isIdentificationVerificationReSend:n,isCiExist:a,kcpForm:s,ci:d}},{children:e}))}))};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IdentificationVerificationProvider);var useIdentificationVerificationActionContext=function(){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(IdentificationVerificationActionContext);if(!t)throw new Error("INVALID_IdentificationVerificationActionContext");return t};var useIdentificationVerificationStateContext=function(){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(IdentificationVerificationStateContext);if(!t)throw new Error("INVALID_IdentificationVerificationStateContext");return t};

/***/ }),

/***/ "./src/components/Layout/LayoutProvider.jsx":
/*!**************************************************!*\
  !*** ./src/components/Layout/LayoutProvider.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LAYOUT_DEFAULT_STATE": () => (/* binding */ LAYOUT_DEFAULT_STATE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useLayoutActionContext": () => (/* binding */ useLayoutActionContext),
/* harmony export */   "useLayoutValueContext": () => (/* binding */ useLayoutValueContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var LAYOUT_DEFAULT_STATE = {
  isMain: false,
  hasBackBtnOnHeader: false,
  hasHomeBtnOnHeader: false,
  hasCartBtnOnHeader: false,
  hasSearchKeywordHeader: false,
  hasCancelBtnOnHeader: false,
  hasBottomNav: false,
  title: ''
};
var LayoutActionContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var LayoutValueContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var LayoutProvider = function LayoutProvider(_ref) {
  var children = _ref.children;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(LAYOUT_DEFAULT_STATE),
    _useState2 = _slicedToArray(_useState, 2),
    layoutStatus = _useState2[0],
    setLayoutStatus = _useState2[1];
  var action = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      changeLayoutStatus: function changeLayoutStatus(layoutStatus) {
        return setLayoutStatus(_objectSpread(_objectSpread({}, LAYOUT_DEFAULT_STATE), layoutStatus));
      }
    };
  }, [setLayoutStatus]);
  return /*#__PURE__*/React.createElement(LayoutActionContext.Provider, {
    value: action
  }, /*#__PURE__*/React.createElement(LayoutValueContext.Provider, {
    value: layoutStatus
  }, children));
};
var useLayoutActionContext = function useLayoutActionContext() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LayoutActionContext);
  if (!context) throw new Error('INVALID_LayoutActionContext');
  return context;
};
var useLayoutValueContext = function useLayoutValueContext() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LayoutValueContext);
  if (!context) throw new Error('INVALID_LayoutValueContext');
  return context;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutProvider);
LayoutProvider.propTypes = {
  children: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([prop_types__WEBPACK_IMPORTED_MODULE_1__.node, prop_types__WEBPACK_IMPORTED_MODULE_1__.element]).isRequired
};

/***/ }),

/***/ "./src/hooks/useLayoutChanger.js":
/*!***************************************!*\
  !*** ./src/hooks/useLayoutChanger.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_LayoutProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/LayoutProvider */ "./src/components/Layout/LayoutProvider.jsx");



/**
 * 레이아웃의 헤더 및 푸터 형태 설정을 할 수 있는 커스텀 훅.
 * 인자 객체로 담지 않은 값들은 기본 값으로 설정됩니다.
 *
 * [기본 값]
 * isMain: false,
 * hasBackBtnOnHeader: false,
 * hasHomeBtnOnHeader: false,
 * hasCartBtnOnHeader: false,
 * hasBottomNav: false,
 * hasCancelBtnOnHeader: false,
 * title: '',
 * @param {{ isMain?: boolean, hasHomeBtnOnHeader?: boolean, hasBackBtnOnHeader?: boolean, hasCartBtnOnHeader?: boolean, hasCancelBtnOnHeader?: boolean, hasBottomNav?: boolean, title?: string }} layoutStatus
 */

var useLayoutChanger = function useLayoutChanger() {
  var layoutStatus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _components_Layout_LayoutProvider__WEBPACK_IMPORTED_MODULE_1__.LAYOUT_DEFAULT_STATE;
  var _useLayoutActionConte = (0,_components_Layout_LayoutProvider__WEBPACK_IMPORTED_MODULE_1__.useLayoutActionContext)(),
    changeLayoutStatus = _useLayoutActionConte.changeLayoutStatus;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (changeLayoutStatus) {
      changeLayoutStatus(layoutStatus);
    }
  }, [changeLayoutStatus, layoutStatus]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLayoutChanger);

/***/ }),

/***/ "./src/pages/AdultCertification/AdultCertification.jsx":
/*!*************************************************************!*\
  !*** ./src/pages/AdultCertification/AdultCertification.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/SignInProvider/SignInProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/OpenIdSignInProvider/OpenIdSignInProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/AuthProvider/AuthProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/AgeVerificationProvider/AgeVerificationProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/IdentificationVerificationProvider/IdentificationVerificationProvider.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _components_IdentificationVerificationBtn_IdentificationVerificationBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/IdentificationVerificationBtn/IdentificationVerificationBtn */ "./src/components/IdentificationVerificationBtn/IdentificationVerificationBtn.jsx");
/* harmony import */ var _hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useLayoutChanger */ "./src/hooks/useLayoutChanger.js");
/* harmony import */ var _SignIn_SignInForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SignIn/SignInForm */ "./src/pages/SignIn/SignInForm.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }








var AdultCertificationButton = function AdultCertificationButton() {
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)();
  var handleSubmit = function handleSubmit() {
    var _location$state$from, _location$state;
    window.location.replace((_location$state$from = (_location$state = location.state) === null || _location$state === void 0 ? void 0 : _location$state.from) !== null && _location$state$from !== void 0 ? _location$state$from : '/', {
      state: _objectSpread({}, location.state)
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if ((0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.isAgeVerified)()) {
      var _location$state$from2, _location$state2;
      window.location.replace((_location$state$from2 = (_location$state2 = location.state) === null || _location$state2 === void 0 ? void 0 : _location$state2.from) !== null && _location$state$from2 !== void 0 ? _location$state$from2 : '/', {
        state: _objectSpread({}, location.state)
      });
    }
  }, [_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.isAgeVerified]);
  return /*#__PURE__*/React.createElement(_components_IdentificationVerificationBtn_IdentificationVerificationBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "adultCertification",
    className: "adult-certification__certification-btn",
    label: "\uD68C\uC6D0 \uC131\uC778\uC778\uC99D",
    theme: "dark",
    onSubmit: handleSubmit
  });
};
var SignInForAdultCertification = function SignInForAdultCertification(_ref) {
  var _location$state3;
  var onSignIn = _ref.onSignIn;
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)();

  // 인트로페이지가 성인인증인 경우 "뒤로가기 처리"
  // 상품 > 성인인증인 경우 "메인으로가기 처리"
  var backPath = (_location$state3 = location.state) !== null && _location$state3 !== void 0 && _location$state3.isIntroPage ? -1 : '/';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "adult-certification__exit-button",
    label: "19\uC138 \uBBF8\uB9CC \uB098\uAC00\uAE30",
    onClick: function onClick() {
      if (backPath === -1) {
        window.history.go(backPath);
      } else {
        window.location.replace(backPath);
      }
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "l-panel adult-certification__sign-in"
  }, /*#__PURE__*/React.createElement("p", {
    className: "adult-certification__sign-in-title"
  }, "\uD68C\uC6D0 \uB85C\uADF8\uC778"), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/React.createElement(_SignIn_SignInForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    usesOnlySignIn: true,
    onSignIn: onSignIn
  })))));
};
SignInForAdultCertification.propTypes = {
  onSignIn: prop_types__WEBPACK_IMPORTED_MODULE_9__.func
};
var AdultCertification = function AdultCertification() {
  var _useAuthActionContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_10__.useAuthActionContext)(),
    isSignedIn = _useAuthActionContext.isSignedIn;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isSignedIn()),
    _useState2 = _slicedToArray(_useState, 2),
    isMember = _useState2[0],
    setIsMember = _useState2[1];
  (0,_hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_3__["default"])({
    hasHomeBtnOnHeader: true,
    title: '성인 인증'
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    isMember && (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.isAgeVerified)();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "adult-certification"
  }, /*#__PURE__*/React.createElement("div", {
    className: "adult-certification__image bg bg--adult"
  }), /*#__PURE__*/React.createElement("p", {
    className: "adult-certification__title"
  }, "\uC131\uC778\uC778\uC99D\uC774 \uD544\uC694\uD55C", /*#__PURE__*/React.createElement("br", null), "\uC11C\uBE44\uC2A4\uC785\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("p", {
    className: "adult-certification__description"
  }, "\uBCF8 \uC0C1\uD488 \uBC0F \uB0B4\uC6A9\uC740", ' ', /*#__PURE__*/React.createElement("span", {
    className: "highlight"
  }, "\uCCAD\uC18C\uB144\uC5D0\uAC8C \uC720\uD574\uD55C \uC815\uBCF4\uB97C ", /*#__PURE__*/React.createElement("br", null), "\uD3EC\uD568\uD558\uACE0\uC788\uC5B4 \uC131\uC778\uC778\uC99D \uC808\uCC28\uB97C \uAC70\uCCD0\uC57C \uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("br", null), "\uBCF8 \uC0C1\uD488 \uBC0F \uB0B4\uC6A9\uC740 \uCCAD\uC18C\uB144\uC720\uD574\uB9E4\uCCB4\uBB3C\uB85C\uC11C \uC815\uBCF4\uD1B5\uC2E0\uB9DD\uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960 \uBC0F \uCCAD\uC18C\uB144 \uBCF4\uD638\uBC95\uC758 \uADDC\uC815\uC5D0 \uC758\uD558\uC5EC 19\uC138 \uBBF8\uB9CC\uC758 \uCCAD\uC18C\uB144\uC774 \uC774\uC6A9, \uAD6C\uB9E4\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_11__["default"], {
    shows: isMember,
    TruthyComponent: /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "adult-certification__certification-btn",
      label: "19\uC138 \uBBF8\uB9CC \uB098\uAC00\uAE30",
      onClick: function onClick() {
        window.location.replace('/');
      }
    }), /*#__PURE__*/React.createElement(AdultCertificationButton, null))),
    FalsyComponent: /*#__PURE__*/React.createElement(SignInForAdultCertification, {
      onSignIn: function onSignIn() {
        return setIsMember(true);
      }
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdultCertification);

/***/ }),

/***/ "./src/pages/AdultCertification/index.js":
/*!***********************************************!*\
  !*** ./src/pages/AdultCertification/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdultCertification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdultCertification */ "./src/pages/AdultCertification/AdultCertification.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_AdultCertification__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);
//# sourceMappingURL=src_pages_AdultCertification_index_js.94674cdec4620fa6b606.bundle.js.map