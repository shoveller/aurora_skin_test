"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_pages_SignUp_index_js"],{

/***/ "./src/components/FullModal/FullModal.jsx":
/*!************************************************!*\
  !*** ./src/components/FullModal/FullModal.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TitleModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TitleModal */ "./src/components/TitleModal/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _excluded = ["className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var FullModal = function FullModal(_ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_TitleModal__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
    className: "full-modal ".concat(className !== null && className !== void 0 ? className : '')
  }, props, {
    isFull: true
  }));
};
FullModal.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FullModal);

/***/ }),

/***/ "./src/components/FullModal/index.js":
/*!*******************************************!*\
  !*** ./src/components/FullModal/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FullModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FullModal */ "./src/components/FullModal/FullModal.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_FullModal__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/***/ "./src/components/Sanitized/Sanitized.jsx":
/*!************************************************!*\
  !*** ./src/components/Sanitized/Sanitized.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _require = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js"),
  sanitize = _require.sanitize;
var Sanitized = function Sanitized(_ref) {
  var html = _ref.html,
    style = _ref.style,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  return /*#__PURE__*/React.createElement("div", {
    className: "editor ".concat(className),
    dangerouslySetInnerHTML: {
      __html: sanitize(html !== null && html !== void 0 ? html : '', {
        USE_PROFILES: {
          html: true
        },
        ADD_TAGS: ['iframe', 'a'],
        ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling', 'target', 'rel', 'type']
      })
    },
    style: style
  });
};
Sanitized.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_0__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_0__.object,
  html: prop_types__WEBPACK_IMPORTED_MODULE_0__.string
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sanitized);

/***/ }),

/***/ "./src/components/Sanitized/index.js":
/*!*******************************************!*\
  !*** ./src/components/Sanitized/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sanitized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sanitized */ "./src/components/Sanitized/Sanitized.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Sanitized__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/TitleModal/TitleModal.jsx":
/*!**************************************************!*\
  !*** ./src/components/TitleModal/TitleModal.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/modal/CustomModal/CustomModal.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/IconBtn/IconBtn.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _excluded = ["className", "title", "onClose", "children", "classModifier", "isFull"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var TitleModal = function TitleModal(_ref) {
  var className = _ref.className,
    title = _ref.title,
    onClose = _ref.onClose,
    children = _ref.children,
    classModifier = _ref.classModifier,
    isFull = _ref.isFull,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
    className: className
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "title-modal".concat(classModifier ? " title-modal--".concat(classModifier) : '').concat(isFull ? " title-modal--full" : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "title-modal__header"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "title-modal__title"
  }, title), onClose && /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "title-modal__close-btn",
    iconType: "x-black",
    onClick: function onClick() {
      return onClose();
    },
    hiddenLabel: true,
    label: "\uBAA8\uB2EC \uB2EB\uAE30"
  })), /*#__PURE__*/React.createElement("div", {
    className: "title-modal__content"
  }, children)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitleModal);
TitleModal.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,
  children: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType)([prop_types__WEBPACK_IMPORTED_MODULE_2__.node, prop_types__WEBPACK_IMPORTED_MODULE_2__.element]),
  classModifier: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  isFull: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool
};

/***/ }),

/***/ "./src/components/TitleModal/index.js":
/*!********************************************!*\
  !*** ./src/components/TitleModal/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TitleModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TitleModal */ "./src/components/TitleModal/TitleModal.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TitleModal__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/constants/form.js":
/*!*******************************!*\
  !*** ./src/constants/form.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BANK_OPTIONS": () => (/* binding */ BANK_OPTIONS),
/* harmony export */   "CLAIM_REASON_DETAIL_MAX_LENGTH": () => (/* binding */ CLAIM_REASON_DETAIL_MAX_LENGTH),
/* harmony export */   "DELIVERY_COMPANY_OPTIONS": () => (/* binding */ DELIVERY_COMPANY_OPTIONS),
/* harmony export */   "DELIVERY_MEMO_MAX_LENGTH": () => (/* binding */ DELIVERY_MEMO_MAX_LENGTH),
/* harmony export */   "EMAIL_DOMAIN_OPTIONS": () => (/* binding */ EMAIL_DOMAIN_OPTIONS),
/* harmony export */   "INVOICE_NO_MAX_LENGTH": () => (/* binding */ INVOICE_NO_MAX_LENGTH),
/* harmony export */   "NAME_INPUT_MAX_LENGTH": () => (/* binding */ NAME_INPUT_MAX_LENGTH),
/* harmony export */   "PHONE_CARRIER_NUMBERS_BY_STRING": () => (/* binding */ PHONE_CARRIER_NUMBERS_BY_STRING),
/* harmony export */   "PHONE_NUMBER_INPUT_SECTIONS": () => (/* binding */ PHONE_NUMBER_INPUT_SECTIONS),
/* harmony export */   "RETURN_WAY_OPTIONS": () => (/* binding */ RETURN_WAY_OPTIONS)
/* harmony export */ });
/* unused harmony export EMAIL_DOMAINS */
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var EMAIL_DOMAINS = ['naver.com', 'hanmail.net', 'daum.net', 'nate.com', 'gmail.com'];
var EMAIL_DOMAIN_OPTIONS = EMAIL_DOMAINS.map(function (domain) {
  return {
    value: domain,
    label: domain
  };
});
var PHONE_CARRIER_NUMBERS_BY_STRING = ['02', '031', '032', '033', '041', '042', '043', '044', '051', '052', '053', '054', '055', '061', '062', '063', '064', '070'];
var PHONE_NUMBER_INPUT_SECTIONS = ['carrierNumber', 'firstSerial', 'secondSerial'];
var NAME_INPUT_MAX_LENGTH = 15;
var INVOICE_NO_MAX_LENGTH = 20;
var DELIVERY_MEMO_MAX_LENGTH = 20;
var CLAIM_REASON_DETAIL_MAX_LENGTH = 300;
var RETURN_WAY_OPTIONS = Object.entries(_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.RETURN_WAY_TYPE_MAP).map(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    value = _ref2[0],
    label = _ref2[1];
  return {
    label: label,
    value: value
  };
});
var DELIVERY_COMPANY_OPTIONS = Object.entries(_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.DELIVERY_COMPANY_TYPE_MAP).map(function (_ref3) {
  var _ref4 = _slicedToArray(_ref3, 2),
    value = _ref4[0],
    label = _ref4[1];
  return {
    label: label,
    value: value
  };
});
var BANK_OPTIONS = Object.entries(_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.BANK_MAP).map(function (_ref5) {
  var _ref6 = _slicedToArray(_ref5, 2),
    value = _ref6[0],
    label = _ref6[1];
  return {
    label: label,
    value: value
  };
}).filter(function (_ref7) {
  var value = _ref7.value;
  return value !== 'ANONYMOUS';
});

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

/***/ "./src/pages/SignUp/SignUp.jsx":
/*!*************************************!*\
  !*** ./src/pages/SignUp/SignUp.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/SignUpProvider/SignUpProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/AgeVerificationProvider/AgeVerificationProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/IdentificationVerificationProvider/IdentificationVerificationProvider.js");
/* harmony import */ var _hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useLayoutChanger */ "./src/hooks/useLayoutChanger.js");
/* harmony import */ var _SignUpButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignUpButton */ "./src/pages/SignUp/SignUpButton.jsx");
/* harmony import */ var _SignUpForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SignUpForm */ "./src/pages/SignUp/SignUpForm.jsx");
/* harmony import */ var _TermsForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TermsForm */ "./src/pages/SignUp/TermsForm.jsx");
/* harmony import */ var _TermsModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TermsModal */ "./src/pages/SignUp/TermsModal.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var SignUp = function SignUp() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('title'),
    t = _useTranslation.t;
  (0,_hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_2__["default"])({
    hasBackBtnOnHeader: true,
    title: t('signUp')
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isTermsFullModalOpen = _useState2[0],
    _setIsTermsFullModalOpen = _useState2[1];
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form"
  }, /*#__PURE__*/React.createElement(_SignUpForm__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/React.createElement(_TermsForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setIsTermsFullModalOpen: function setIsTermsFullModalOpen() {
      return _setIsTermsFullModalOpen(true);
    }
  }), /*#__PURE__*/React.createElement(_SignUpButton__WEBPACK_IMPORTED_MODULE_3__["default"], null)), isTermsFullModalOpen && /*#__PURE__*/React.createElement(_TermsModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClose: function onClose() {
      return _setIsTermsFullModalOpen(false);
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);

/***/ }),

/***/ "./src/pages/SignUp/SignUpButton.jsx":
/*!*******************************************!*\
  !*** ./src/pages/SignUp/SignUpButton.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/SignUpProvider/SignUpProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/modal/ModalProvider.js");
/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ErrorBoundary */ "./src/components/ErrorBoundary/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var SignUpButton = function SignUpButton() {
  var _useSignUpActionConte = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__.useSignUpActionContext)(),
    postProfile = _useSignUpActionConte.postProfile;
  var _useModalActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useModalActionContext)(),
    openAlert = _useModalActionContex.openAlert;
  var _useSignUpStateContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__.useSignUpStateContext)(),
    isSignedUp = _useSignUpStateContex.isSignedUp;
  var _useSignUpActionConte2 = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__.useSignUpActionContext)(),
    verifyUserId = _useSignUpActionConte2.verifyUserId,
    verifyUserPassword = _useSignUpActionConte2.verifyUserPassword,
    confirmUserPassword = _useSignUpActionConte2.confirmUserPassword,
    verifyUserName = _useSignUpActionConte2.verifyUserName,
    validateMobile = _useSignUpActionConte2.validateMobile,
    validateEmail = _useSignUpActionConte2.validateEmail;
  var _useSignUpStateContex2 = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__.useSignUpStateContext)(),
    validationStatus = _useSignUpStateContex2.validationStatus,
    signUpMemberInfo = _useSignUpStateContex2.signUpMemberInfo;
  var _useErrorBoundaryActi = (0,_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__.useErrorBoundaryActionContext)(),
    catchError = _useErrorBoundaryActi.catchError;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  var validate = function validate() {
    verifyUserId();
    verifyUserPassword();
    confirmUserPassword();
    validateMobile();
    verifyUserName();
    validateEmail();
  };

  // eslint-disable-next-line complexity
  var hasEmpty = function hasEmpty() {
    return !signUpMemberInfo.emailId || !signUpMemberInfo.emailDomain || !signUpMemberInfo.firstSerial || !signUpMemberInfo.memberId || !signUpMemberInfo.memberName || !signUpMemberInfo.password || !signUpMemberInfo.passwordCheck || !signUpMemberInfo.secondSerial;
  };
  var handleSignUp = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var isInvalidMemberInfo;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            validate();
            isInvalidMemberInfo = Object.values(validationStatus).some(function (_ref2) {
              var result = _ref2.result;
              return !result;
            });
            if (!(hasEmpty() || isInvalidMemberInfo)) {
              _context.next = 5;
              break;
            }
            openAlert({
              message: '필수 입력 사항을 확인 바랍니다.'
            });
            return _context.abrupt("return");
          case 5:
            _context.prev = 5;
            _context.next = 8;
            return postProfile();
          case 8:
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](5);
            catchError(_context.t0);
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5, 10]]);
    }));
    return function handleSignUp() {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isSignedUp === true) {
      openAlert({
        message: '회원가입이 완료되었습니다.',
        onClose: function onClose() {
          navigate('/', {
            replace: true
          });
        }
      });
    }
  }, [isSignedUp]);
  return /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form__confirm"
  }, /*#__PURE__*/React.createElement("button", {
    className: "",
    onClick: handleSignUp
  }, "\uD68C\uC6D0\uAC00\uC785"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpButton);

/***/ }),

/***/ "./src/pages/SignUp/SignUpEmailForm.jsx":
/*!**********************************************!*\
  !*** ./src/pages/SignUp/SignUpEmailForm.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/SignUpProvider/SignUpProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/EmailInput/EmailInput.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/SelectBox/SelectBox.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Checkbox/Checkbox.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/TextField/TextField.js");
/* harmony import */ var _constants_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/form */ "./src/constants/form.js");
/* harmony import */ var _ValidationStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ValidationStatus */ "./src/pages/SignUp/ValidationStatus.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




// eslint-disable-next-line complexity
var SignUpEmailForm = function SignUpEmailForm() {
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useMallStateContext)(),
    mallJoinConfig = _useMallStateContext.mallJoinConfig;
  var _useSignUpActionConte = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useSignUpActionContext)(),
    verifyUserEmail = _useSignUpActionConte.verifyUserEmail,
    validateEmail = _useSignUpActionConte.validateEmail,
    postAuthenticationsEmail = _useSignUpActionConte.postAuthenticationsEmail,
    getAuthenticationsEmail = _useSignUpActionConte.getAuthenticationsEmail,
    setSignUpMemberInfo = _useSignUpActionConte.setSignUpMemberInfo,
    setEmailReceiveInfo = _useSignUpActionConte.setEmailReceiveInfo;
  var _useSignUpStateContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useSignUpStateContext)(),
    _useSignUpStateContex2 = _useSignUpStateContex.signUpMemberInfo,
    emailId = _useSignUpStateContex2.emailId,
    emailDomain = _useSignUpStateContex2.emailDomain,
    domainSelectorValue = _useSignUpStateContex2.domainSelectorValue,
    certificatedNumber = _useSignUpStateContex2.certificatedNumber,
    timerTime = _useSignUpStateContex.timerTime,
    authenticationsRemainTimeBySeconds = _useSignUpStateContex.authenticationsRemainTimeBySeconds,
    authenticationReSend = _useSignUpStateContex.authenticationReSend,
    emailReceiveInfo = _useSignUpStateContex.emailReceiveInfo;
  var handleFormValueChange = function handleFormValueChange(event) {
    setSignUpMemberInfo(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, event.target.name, event.target.value));
    });
  };
  var handleEmailIdInputChange = function handleEmailIdInputChange(event) {
    setSignUpMemberInfo(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        emailId: event.target.value
      });
    });
  };
  var handleEmailDomainInputChange = function handleEmailDomainInputChange(event) {
    setSignUpMemberInfo(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        emailDomain: event.target.value,
        domainSelectorValue: '직접 입력'
      });
    });
  };
  var handleEmailDomainSelect = function handleEmailDomainSelect(_ref) {
    var currentTarget = _ref.currentTarget;
    setSignUpMemberInfo(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        emailDomain: currentTarget.value,
        domainSelectorValue: currentTarget.value
      });
    });
    if (!emailId && !validateEmail()) {
      return;
    }
    verifyUserEmail();
  };
  var emailRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var handleDomainBlur = function handleDomainBlur() {
    if (!validateEmail()) {
      return;
    }
    verifyUserEmail();
  };
  var handleVerifyEmail = function handleVerifyEmail() {
    postAuthenticationsEmail();
  };
  var handleConfirmEmailAuthentication = function handleConfirmEmailAuthentication() {
    return getAuthenticationsEmail();
  };
  var handleEmailCheck = function handleEmailCheck(event) {
    event.target.checked ? setEmailReceiveInfo(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        checked: true
      });
    }) : setEmailReceiveInfo(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        checked: false
      });
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form__item"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email",
    className: "sign-up-form__tit"
  }, "\uC774\uBA54\uC77C \uC8FC\uC18C"), /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form__input-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ref: emailRef,
    id: emailId,
    domain: emailDomain,
    onIdChange: handleEmailIdInputChange,
    onIdBlur: handleDomainBlur,
    onDomainChange: handleEmailDomainInputChange,
    onDomainBlur: handleDomainBlur
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    hasEmptyOption: true,
    emptyOptionLabel: domainSelectorValue,
    onSelect: handleEmailDomainSelect,
    options: _constants_form__WEBPACK_IMPORTED_MODULE_1__.EMAIL_DOMAIN_OPTIONS
  }), /*#__PURE__*/React.createElement(_ValidationStatus__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "email"
  }), mallJoinConfig.authenticationTimeType === 'JOIN_TIME' && mallJoinConfig.authenticationType === 'AUTHENTICATION_BY_EMAIL' ? /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "authentication-btn",
    label: authenticationReSend ? "\uC7AC\uC778\uC99D" : "\uC778\uC99D\uBC88\uD638 \uBC1C\uC1A1",
    onClick: function onClick() {
      handleVerifyEmail();
    }
  }) : '')), /*#__PURE__*/React.createElement("ul", {
    className: "sign-up-form__agree-list"
  }, /*#__PURE__*/React.createElement("li", {
    key: emailReceiveInfo.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form__checkbox--partial"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onChange: handleEmailCheck,
    checked: emailReceiveInfo.checked,
    label: emailReceiveInfo.title
  })))), mallJoinConfig.authenticationType === 'AUTHENTICATION_BY_EMAIL' && authenticationsRemainTimeBySeconds ? /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form__item"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "certificatedNumber",
    className: "sign-up-form__tit"
  }, "\uC778\uC99D\uBC88\uD638"), /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form__input-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: "certificatedNumber",
    id: "certificatedNumber",
    value: certificatedNumber,
    placeholder: "\uC778\uC99D\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    onChange: handleFormValueChange,
    maxLength: 6,
    valid: "NO_SPACE"
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: '확인',
    onClick: handleConfirmEmailAuthentication
  })), timerTime ? /*#__PURE__*/React.createElement("span", {
    className: "timer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "timer__text"
  }, "\uC720\uD6A8\uC2DC\uAC04"), /*#__PURE__*/React.createElement("span", {
    className: "timer__number"
  }, timerTime.minute), /*#__PURE__*/React.createElement("span", {
    className: "timer__middle-sign"
  }, ":"), /*#__PURE__*/React.createElement("span", {
    className: "timer__number"
  }, timerTime.second)) : '', /*#__PURE__*/React.createElement(_ValidationStatus__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "certificatedNumber"
  })) : '');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpEmailForm);

/***/ }),

/***/ "./src/pages/SignUp/SignUpForm.jsx":
/*!*****************************************!*\
  !*** ./src/pages/SignUp/SignUpForm.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/SignUpProvider/SignUpProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/TextField/TextField.js");
/* harmony import */ var _SignUpEmailForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUpEmailForm */ "./src/pages/SignUp/SignUpEmailForm.jsx");
/* harmony import */ var _SignUpSmsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignUpSmsForm */ "./src/pages/SignUp/SignUpSmsForm.jsx");
/* harmony import */ var _ValidationStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ValidationStatus */ "./src/pages/SignUp/ValidationStatus.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






// eslint-disable-next-line complexity
var SignUpForm = function SignUpForm() {
  var _useSignUpActionConte = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useSignUpActionContext)(),
    verifyUserId = _useSignUpActionConte.verifyUserId,
    verifyUserPassword = _useSignUpActionConte.verifyUserPassword,
    confirmUserPassword = _useSignUpActionConte.confirmUserPassword,
    verifyUserName = _useSignUpActionConte.verifyUserName,
    setSignUpMemberInfo = _useSignUpActionConte.setSignUpMemberInfo,
    setValidationStatus = _useSignUpActionConte.setValidationStatus,
    setTimerTime = _useSignUpActionConte.setTimerTime,
    setAuthenticationReSend = _useSignUpActionConte.setAuthenticationReSend;
  var _useSignUpStateContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useSignUpStateContext)(),
    _useSignUpStateContex2 = _useSignUpStateContex.signUpMemberInfo,
    memberId = _useSignUpStateContex2.memberId,
    password = _useSignUpStateContex2.password,
    passwordCheck = _useSignUpStateContex2.passwordCheck,
    memberName = _useSignUpStateContex2.memberName,
    timerTime = _useSignUpStateContex.timerTime,
    authenticationsRemainTimeBySeconds = _useSignUpStateContex.authenticationsRemainTimeBySeconds;
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__.useMallStateContext)(),
    mallJoinConfig = _useMallStateContext.mallJoinConfig;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (mallJoinConfig.authenticationTimeType !== 'JOIN_TIME' || mallJoinConfig.authenticationType !== 'SMS_AUTHENTICATION') {
      setValidationStatus(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          certificatedNumber: {
            result: true,
            message: ''
          }
        });
      });
    }
  }, [mallJoinConfig]);
  var handleFormValueChange = function handleFormValueChange(event) {
    setSignUpMemberInfo(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, event.target.name, event.target.value));
    });
  };
  var handleVerifyUserId = function handleVerifyUserId() {
    return verifyUserId();
  };
  var handleVerifyUserPassword = function handleVerifyUserPassword() {
    return verifyUserPassword();
  };
  var handleConfirmUserPassword = function handleConfirmUserPassword() {
    return confirmUserPassword();
  };
  var handleVerifyUserName = function handleVerifyUserName() {
    return verifyUserName();
  };
  var startTimer = function startTimer() {
    var timeFormat = function timeFormat() {
      var minute = Math.floor(authenticationsRemainTimeBySeconds / 60).toString();
      var second = (authenticationsRemainTimeBySeconds % 60).toString();
      if (minute.length === 1) minute = "0".concat(minute);
      if (second.length === 1) second = "0".concat(second);
      setTimerTime({
        minute: minute,
        second: second
      });
    };
    timeFormat();
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var timer = setInterval(function () {
      if (Number(timerTime.second) > 0) {
        setTimerTime(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            second: String(Number(timerTime.second) - 1)
          });
        });
      }
      if (Number(timerTime.second) === 0) {
        if (Number(timerTime.minute) === 0) {
          clearInterval(timer);
          if (authenticationsRemainTimeBySeconds !== 0) {
            setAuthenticationReSend(true);
            setValidationStatus(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                certificatedNumber: {
                  result: false,
                  message: '유효시간이 만료되었습니다.'
                }
              });
            });
          }
        } else {
          setTimerTime(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, {
              minute: String(Number(timerTime.minute) - 1),
              second: '59'
            });
          });
        }
      }
    }, 1000);
    return function () {
      return clearInterval(timer);
    };
  }, [timerTime]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (authenticationsRemainTimeBySeconds === 0) {
      return;
    }
    startTimer();
  }, [authenticationsRemainTimeBySeconds]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (['NOT_USED', 'AUTHENTICATION_BY_PHONE'].includes(mallJoinConfig.authenticationType)) {
      setValidationStatus(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          certificatedNumber: {
            result: true,
            message: ''
          }
        });
      });
      setSignUpMemberInfo(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          certificatedNumber: 'NOT_USED'
        });
      });
    }
  }, [password]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form__item"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "id",
    className: "sign-up-form__tit"
  }, "\uC544\uC774\uB514"), /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form__input-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "memberId",
    id: "id",
    value: memberId,
    placeholder: "\uC544\uC774\uB514",
    onChange: handleFormValueChange,
    onBlur: function onBlur() {
      handleVerifyUserId();
    },
    minLength: 5,
    valid: "ENGLISH_NUMBER"
  })), /*#__PURE__*/React.createElement(_ValidationStatus__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "memberId"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form__item"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "password",
    className: "sign-up-form__tit"
  }, "\uBE44\uBC00\uBC88\uD638"), /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form__input-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "password",
    id: "password",
    value: password,
    placeholder: "\uBE44\uBC00\uBC88\uD638 (\uC601\uBB38, \uC22B\uC790, \uD2B9\uC218\uBB38\uC790 8-15\uC790)",
    type: "password",
    onChange: handleFormValueChange,
    onBlur: handleVerifyUserPassword,
    minLength: 8,
    maxLength: 20,
    valid: "ENGLISH_NUMBER_SPECIAL"
  })), /*#__PURE__*/React.createElement(_ValidationStatus__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "password"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form__item"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "passwordCheck",
    className: "sign-up-form__tit"
  }, "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC785\uB825"), /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form__input-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "passwordCheck",
    id: "passwordCheck",
    value: passwordCheck,
    placeholder: "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC785\uB825",
    type: "password",
    onChange: handleFormValueChange,
    onBlur: handleConfirmUserPassword,
    minLength: 8,
    maxLength: 20,
    valid: "NO_SPACE"
  })), /*#__PURE__*/React.createElement(_ValidationStatus__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "passwordCheck"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form__item"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "memberName",
    className: "sign-up-form__tit"
  }, "\uC774\uB984"), /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form__input-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "memberName",
    id: "memberName",
    value: memberName,
    placeholder: "\uC774\uB984",
    onChange: handleFormValueChange,
    onBlur: handleVerifyUserName
  })), /*#__PURE__*/React.createElement(_ValidationStatus__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "memberName"
  })), /*#__PURE__*/React.createElement(_SignUpEmailForm__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_SignUpSmsForm__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpForm);

/***/ }),

/***/ "./src/pages/SignUp/SignUpSmsForm.jsx":
/*!********************************************!*\
  !*** ./src/pages/SignUp/SignUpSmsForm.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/IdentificationVerificationProvider/IdentificationVerificationProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/SignUpProvider/SignUpProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/PhoneNumberInput/PhoneNumberInput.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Checkbox/Checkbox.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/TextField/TextField.js");
/* harmony import */ var _components_IdentificationVerificationBtn_IdentificationVerificationBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/IdentificationVerificationBtn/IdentificationVerificationBtn */ "./src/components/IdentificationVerificationBtn/IdentificationVerificationBtn.jsx");
/* harmony import */ var _ValidationStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ValidationStatus */ "./src/pages/SignUp/ValidationStatus.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




// eslint-disable-next-line complexity
var SignUpSmsForm = function SignUpSmsForm() {
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useMallStateContext)(),
    mallJoinConfig = _useMallStateContext.mallJoinConfig;
  var _useIdentificationVer = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useIdentificationVerificationStateContext)(),
    isIdentificationVerificationReSend = _useIdentificationVer.isIdentificationVerificationReSend,
    isCiExist = _useIdentificationVer.isCiExist,
    ci = _useIdentificationVer.ci;
  var _useSignUpActionConte = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__.useSignUpActionContext)(),
    validateMobile = _useSignUpActionConte.validateMobile,
    postAuthenticationsMobile = _useSignUpActionConte.postAuthenticationsMobile,
    confirmAuthentication = _useSignUpActionConte.confirmAuthentication,
    setSignUpMemberInfo = _useSignUpActionConte.setSignUpMemberInfo,
    setSmsReceiveInfo = _useSignUpActionConte.setSmsReceiveInfo,
    setValidationStatus = _useSignUpActionConte.setValidationStatus,
    setCi = _useSignUpActionConte.setCi;
  var _useSignUpStateContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__.useSignUpStateContext)(),
    _useSignUpStateContex2 = _useSignUpStateContex.signUpMemberInfo,
    carrierNumber = _useSignUpStateContex2.carrierNumber,
    firstSerial = _useSignUpStateContex2.firstSerial,
    secondSerial = _useSignUpStateContex2.secondSerial,
    certificatedNumber = _useSignUpStateContex2.certificatedNumber,
    timerTime = _useSignUpStateContex.timerTime,
    smsReceiveInfo = _useSignUpStateContex.smsReceiveInfo,
    authenticationsRemainTimeBySeconds = _useSignUpStateContex.authenticationsRemainTimeBySeconds,
    authenticationReSend = _useSignUpStateContex.authenticationReSend;
  var handleFormValueChange = function handleFormValueChange(event) {
    setSignUpMemberInfo(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, event.target.name, event.target.value));
    });
  };
  var handlePhoneCarrierNumberSelect = function handlePhoneCarrierNumberSelect(event) {
    setSignUpMemberInfo(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        carrierNumber: event.target.value
      });
    });
  };
  var handlePhoneFirstSerialNumberChange = function handlePhoneFirstSerialNumberChange(event) {
    setSignUpMemberInfo(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        firstSerial: event.target.value
      });
    });
  };
  var handlePhoneSecondSerialNumberChange = function handlePhoneSecondSerialNumberChange(event) {
    setSignUpMemberInfo(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        secondSerial: event.target.value
      });
    });
  };
  var handleSecondSerialBlur = function handleSecondSerialBlur() {
    validateMobile();
  };
  var handleConfirmAuthentication = function handleConfirmAuthentication() {
    return confirmAuthentication();
  };
  var handleVerifyMobile = function handleVerifyMobile() {
    return postAuthenticationsMobile();
  };
  var handleSmsCheck = function handleSmsCheck(event) {
    event.target.checked ? setSmsReceiveInfo(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        checked: true
      });
    }) : setSmsReceiveInfo(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        checked: false
      });
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isCiExist) {
      setValidationStatus(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          mobileNo: {
            result: false,
            message: '휴대폰번호가 이미 사용중입니다.'
          }
        });
      });
    } else {
      setValidationStatus(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          mobileNo: {
            result: true,
            message: ''
          }
        });
      });
    }
  }, [isCiExist]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (ci) setCi(ci);
  }, [ci]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form__item"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "mobileNo",
    className: "sign-up-form__tit"
  }, "\uD734\uB300\uD3F0 \uBC88\uD638"), /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form__input-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "mobileNo",
    id: "mobileNo",
    carrierNumber: carrierNumber,
    firstSerial: firstSerial,
    secondSerial: secondSerial,
    onCarrierNumberSelect: handlePhoneCarrierNumberSelect,
    onFirstSerialChange: handlePhoneFirstSerialNumberChange,
    onSecondSerialChange: handlePhoneSecondSerialNumberChange,
    onSecondSerialBlur: handleSecondSerialBlur
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
    shows: mallJoinConfig.authenticationTimeType === 'JOIN_TIME' && mallJoinConfig.authenticationType === 'SMS_AUTHENTICATION',
    TruthyComponent: /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: authenticationReSend ? '재인증' : '인증번호 발송',
      onClick: handleVerifyMobile
    })
  }), mallJoinConfig.authenticationTimeType === 'JOIN_TIME' && mallJoinConfig.authenticationType === 'AUTHENTICATION_BY_PHONE' && /*#__PURE__*/React.createElement(_components_IdentificationVerificationBtn_IdentificationVerificationBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: isIdentificationVerificationReSend ? '재인증' : '휴대폰 본인인증',
    type: "signUp"
  }), /*#__PURE__*/React.createElement(_ValidationStatus__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "mobileNo"
  }))), /*#__PURE__*/React.createElement("ul", {
    className: "sign-up-form__agree-list"
  }, /*#__PURE__*/React.createElement("li", {
    key: smsReceiveInfo.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form__checkbox--partial"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onChange: handleSmsCheck,
    checked: smsReceiveInfo.checked,
    label: smsReceiveInfo.title
  })))), mallJoinConfig.authenticationType === 'SMS_AUTHENTICATION' && authenticationsRemainTimeBySeconds ? /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form__item"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "certificatedNumber",
    className: "sign-up-form__tit"
  }, "\uC778\uC99D\uBC88\uD638"), /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form__input-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "certificatedNumber",
    id: "certificatedNumber",
    value: certificatedNumber,
    placeholder: "\uC778\uC99D\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    onChange: handleFormValueChange,
    maxLength: 6,
    valid: "NO_SPACE"
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: '확인',
    onClick: handleConfirmAuthentication
  })), timerTime ? /*#__PURE__*/React.createElement("span", {
    className: "timer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "timer__text"
  }, "\uC720\uD6A8\uC2DC\uAC04"), /*#__PURE__*/React.createElement("span", {
    className: "timer__number"
  }, timerTime.minute), /*#__PURE__*/React.createElement("span", {
    className: "timer__middle-sign"
  }, ":"), /*#__PURE__*/React.createElement("span", {
    className: "timer__number"
  }, timerTime.second)) : '', /*#__PURE__*/React.createElement(_ValidationStatus__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "certificatedNumber"
  })) : '');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpSmsForm);

/***/ }),

/***/ "./src/pages/SignUp/TermsForm.jsx":
/*!****************************************!*\
  !*** ./src/pages/SignUp/TermsForm.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/SignUpProvider/SignUpProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Checkbox/Checkbox.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var TermsForm = function TermsForm(_ref) {
  var setIsTermsFullModalOpen = _ref.setIsTermsFullModalOpen;
  var _useSignUpActionConte = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__.useSignUpActionContext)(),
    checkboxModalToggle = _useSignUpActionConte.checkboxModalToggle,
    checkboxSingleCheck = _useSignUpActionConte.checkboxSingleCheck,
    checkboxAllCheck = _useSignUpActionConte.checkboxAllCheck,
    setTermStatus = _useSignUpActionConte.setTermStatus;
  var _useSignUpStateContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__.useSignUpStateContext)(),
    termStatus = _useSignUpStateContex.termStatus;
  var initialTermStatus = [{
    id: 'use',
    title: '[필수] 이용약관',
    checked: false,
    require: true,
    hasDetailView: true,
    termsType: 'USE',
    isFullModalOpen: false
  }, {
    id: 'ci',
    title: '[필수] 개인정보 수집 / 이용동의',
    checked: false,
    require: true,
    hasDetailView: true,
    termsType: 'PI_COLLECTION_AND_USE_REQUIRED',
    isFullModalOpen: false
  }, {
    id: 'age',
    title: '[필수] 만 14세 이상입니다',
    checked: false,
    require: true
  }];
  var handleModalToggle = function handleModalToggle(id) {
    return checkboxModalToggle(id);
  };
  var handleSingleCheck = function handleSingleCheck(checked, id) {
    return checkboxSingleCheck(checked, id);
  };
  var handleAllCheck = function handleAllCheck(checked) {
    return checkboxAllCheck(checked);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setTermStatus(initialTermStatus);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form__item sign-up-form__agree-wrap"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sign-up-form__tit"
  }, "\uC57D\uAD00\uB3D9\uC758"), /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form__input-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sign-up-form__checkbox--all"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onChange: function onChange(e) {
      handleAllCheck(e.target.checked);
    },
    checked: termStatus.every(function (el) {
      return el.checked;
    }),
    name: "checkAll",
    label: '아래 약관에 모두 동의합니다.'
  })), /*#__PURE__*/React.createElement("ul", {
    className: "sign-up-form__agree-list"
  }, termStatus === null || termStatus === void 0 ? void 0 : termStatus.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "sign-up-form__checkbox--partial"
    }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onChange: function onChange(e) {
        handleSingleCheck(e.target.checked, item.id);
      },
      checked: item.checked,
      label: item.title
    }), item.hasDetailView && /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: '보기',
      onClick: function onClick() {
        handleModalToggle(item.id);
        setIsTermsFullModalOpen();
      }
    })));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "notice-list"
  }, /*#__PURE__*/React.createElement("p", {
    className: "notice-list__item"
  }, "\uC8FC\uBB38, \uACB0\uC81C, \uACE0\uAC1D \uC0C1\uB2F4 \uB4F1 \uC6D0\uD65C\uD55C \uC815\uBCF4 \uC81C\uACF5\uC744 \uC704\uD574 \uC774\uBA54\uC77C \uC8FC\uC18C \uBC0F \uD734\uB300\uD3F0 \uBC88\uD638\uB294 \uC815\uD655\uD788 \uAE30\uC785\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TermsForm);
TermsForm.propTypes = {
  setIsTermsFullModalOpen: prop_types__WEBPACK_IMPORTED_MODULE_4__.func
};

/***/ }),

/***/ "./src/pages/SignUp/TermsModal.jsx":
/*!*****************************************!*\
  !*** ./src/pages/SignUp/TermsModal.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/SignUpProvider/SignUpProvider.js");
/* harmony import */ var _components_FullModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/FullModal */ "./src/components/FullModal/index.js");
/* harmony import */ var _components_Sanitized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Sanitized */ "./src/components/Sanitized/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");





var TermsModal = function TermsModal(_ref) {
  var onClose = _ref.onClose;
  var _useSignUpActionConte = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useSignUpActionContext)(),
    getTerms = _useSignUpActionConte.getTerms,
    setTermsModalInfo = _useSignUpActionConte.setTermsModalInfo;
  var _useSignUpStateContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useSignUpStateContext)(),
    termsModalInfo = _useSignUpStateContex.termsModalInfo;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getTerms({
      termsTypes: termsModalInfo.termsType
    });
    return function () {
      setTermsModalInfo(null);
    };
  }, []);
  if (!termsModalInfo.contents) return /*#__PURE__*/React.createElement(React.Fragment, null);
  return /*#__PURE__*/React.createElement(_components_FullModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "agreement",
    title: termsModalInfo.title,
    onClose: onClose
  }, /*#__PURE__*/React.createElement(_components_Sanitized__WEBPACK_IMPORTED_MODULE_2__["default"], {
    html: termsModalInfo.contents
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TermsModal);
TermsModal.propTypes = {
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_4__.func
};

/***/ }),

/***/ "./src/pages/SignUp/ValidationStatus.jsx":
/*!***********************************************!*\
  !*** ./src/pages/SignUp/ValidationStatus.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/SignUpProvider/SignUpProvider.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var ValidationStatus = function ValidationStatus(_ref) {
  var _validationStatus$nam, _validationStatus$nam2;
  var name = _ref.name;
  var _useSignUpStateContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_0__.useSignUpStateContext)(),
    validationStatus = _useSignUpStateContex.validationStatus;
  return /*#__PURE__*/React.createElement("p", {
    className: "description ".concat((_validationStatus$nam = validationStatus[name]) !== null && _validationStatus$nam !== void 0 && _validationStatus$nam.message && (_validationStatus$nam2 = validationStatus[name]) !== null && _validationStatus$nam2 !== void 0 && _validationStatus$nam2.result ? '' : 'alert')
  }, validationStatus[name].message);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationStatus);
ValidationStatus.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};

/***/ }),

/***/ "./src/pages/SignUp/index.js":
/*!***********************************!*\
  !*** ./src/pages/SignUp/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUp */ "./src/pages/SignUp/SignUp.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_SignUp__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);
//# sourceMappingURL=src_pages_SignUp_index_js.4f02627870164ce45943.bundle.js.map