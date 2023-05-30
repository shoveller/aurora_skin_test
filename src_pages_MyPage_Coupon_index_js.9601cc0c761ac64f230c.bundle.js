"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_pages_MyPage_Coupon_index_js"],{

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

/***/ "./src/components/ListSkeleton/ListSkeleton.jsx":
/*!******************************************************!*\
  !*** ./src/components/ListSkeleton/ListSkeleton.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Skeleton/Skeleton.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var ListSkeleton = function ListSkeleton(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 4 : _ref$size,
    children = _ref.children,
    className = _ref.className,
    isLoading = _ref.isLoading;
  if (isLoading) {
    return /*#__PURE__*/React.createElement("div", {
      className: className
    }, Array(size).fill(null).map(function (_, idx) {
      return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_0__["default"], {
        key: idx,
        type: "LIST"
      });
    }));
  }
  return children;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListSkeleton);
ListSkeleton.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  children: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf)([prop_types__WEBPACK_IMPORTED_MODULE_1__.node, prop_types__WEBPACK_IMPORTED_MODULE_1__.element]),
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool
};

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

/***/ "./src/constants/common.js":
/*!*********************************!*\
  !*** ./src/constants/common.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INFINITY_SCROLL_PAGE_SIZE": () => (/* binding */ INFINITY_SCROLL_PAGE_SIZE)
/* harmony export */ });
var INFINITY_SCROLL_PAGE_SIZE = 6;

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

/***/ "./src/pages/MyPage/Coupon/Coupon.jsx":
/*!********************************************!*\
  !*** ./src/pages/MyPage/Coupon/Coupon.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/promotion/CouponProvider/CouponProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/hooks/useInfiniteScroll/useInfiniteScroll.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/InfiniteScrollLoader/InfiniteScrollLoader.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/modal/ModalProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Tabs/TabsProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Tabs/Tabs.js");
/* harmony import */ var _components_ListSkeleton_ListSkeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ListSkeleton/ListSkeleton */ "./src/components/ListSkeleton/ListSkeleton.jsx");
/* harmony import */ var _components_TitleModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/TitleModal */ "./src/components/TitleModal/index.js");
/* harmony import */ var _constants_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/common */ "./src/constants/common.js");
/* harmony import */ var _hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useLayoutChanger */ "./src/hooks/useLayoutChanger.js");
/* harmony import */ var _CouponRegistration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CouponRegistration */ "./src/pages/MyPage/CouponRegistration/index.js");
/* harmony import */ var _TotalCount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TotalCount */ "./src/pages/MyPage/TotalCount/index.js");
/* harmony import */ var _CouponItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CouponItem */ "./src/pages/MyPage/Coupon/CouponItem.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var Coupons = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var canUse = _ref.canUse,
    totalCount = _ref.totalCount;
  var _useCouponActionConte = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__.useCouponActionContext)(),
    fetchCoupons = _useCouponActionConte.fetchCoupons;

  // 인피니트
  var _useInfiniteScroll = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__["default"])({
      fetcher: function () {
        var _fetcher = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(requestOption) {
          var _yield$fetchCoupons, data;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetchCoupons(requestOption);
              case 2:
                _yield$fetchCoupons = _context.sent;
                data = _yield$fetchCoupons.data;
                return _context.abrupt("return", data.items);
              case 5:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function fetcher(_x) {
          return _fetcher.apply(this, arguments);
        }
        return fetcher;
      }(),
      requestOption: {
        pageNumber: 1,
        pageSize: _constants_common__WEBPACK_IMPORTED_MODULE_3__.INFINITY_SCROLL_PAGE_SIZE,
        canUse: canUse,
        sortDirection: 'DESC'
      }
    }),
    isLoading = _useInfiniteScroll.isLoading,
    accumulativeItems = _useInfiniteScroll.accumulativeItems,
    fetchInitialItems = _useInfiniteScroll.fetchInitialItems,
    isInfiniteScrollDisabled = _useInfiniteScroll.isInfiniteScrollDisabled,
    onIntersect = _useInfiniteScroll.onIntersect;
  var handleIntersect = function handleIntersect() {
    onIntersect({
      totalCount: totalCount
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchInitialItems({
      requestOption: {
        canUse: canUse
      }
    });
  }, [canUse]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, function () {
    return {
      fetchCoupons: fetchInitialItems
    };
  });
  if (totalCount === 0) {
    return /*#__PURE__*/React.createElement(EmptyCoupon, null);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", {
    className: "my-page-coupon__list"
  }, accumulativeItems.map(function (item) {
    return /*#__PURE__*/React.createElement(_CouponItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: item.couponIssueNo,
      coupon: item,
      unissuable: !canUse
    });
  })), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_10__["default"], {
    shows: accumulativeItems.length > 0,
    TruthyComponent: /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onIntersect: handleIntersect,
      disabled: isInfiniteScrollDisabled
    })
  }), /*#__PURE__*/React.createElement(_components_ListSkeleton_ListSkeleton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isLoading: isLoading
  }));
});
Coupons.displayName = 'Coupons';
Coupons.propTypes = {
  canUse: prop_types__WEBPACK_IMPORTED_MODULE_12__.bool,
  totalCount: prop_types__WEBPACK_IMPORTED_MODULE_12__.number,
  onTotalCountChange: prop_types__WEBPACK_IMPORTED_MODULE_12__.func
};
var EmptyCoupon = function EmptyCoupon() {
  return /*#__PURE__*/React.createElement("div", {
    className: "empty-list"
  }, /*#__PURE__*/React.createElement("p", null, "\uBCF4\uC720\uD55C \uCFE0\uD3F0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."));
};
var CouponContent = function CouponContent() {
  var issuableCouponRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isRegistrationModalOpen = _useState2[0],
    setIsRegistrationModalOpen = _useState2[1];
  var _useModalActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_13__.useModalActionContext)(),
    openAlert = _useModalActionContex.openAlert;
  var _useCouponActionConte2 = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__.useCouponActionContext)(),
    fetchProfileCouponSummary = _useCouponActionConte2.fetchProfileCouponSummary;
  var _useCouponStateContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__.useCouponStateContext)(),
    usableCouponCnt = _useCouponStateContex.profileCouponSummary.usableCouponCnt;
  var _useTabsStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_14__.useTabsStateContext)(),
    currentTab = _useTabsStateContext.currentTab;
  var _useCouponStateContex2 = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__.useCouponStateContext)(),
    totalCount = _useCouponStateContex2.coupon.totalCount;
  var isIssuable = currentTab === 'ISSUABLE';
  var handleRegistrationButtonClick = function handleRegistrationButtonClick() {
    setIsRegistrationModalOpen(true);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchProfileCouponSummary();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "my-page-coupon__wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_10__["default"], {
    shows: isIssuable,
    TruthyComponent: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_TotalCount__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "\uC0AC\uC6A9\uAC00\uB2A5 \uCFE0\uD3F0 \uC218",
      count: usableCouponCnt
    }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_15__["default"], {
      className: "my-page-coupon__registration-button",
      theme: "dark",
      label: "\uCFE0\uD3F0 \uBC88\uD638 \uB4F1\uB85D",
      onClick: handleRegistrationButtonClick
    }))
  }), /*#__PURE__*/React.createElement("p", {
    className: "my-page-coupon__list-title"
  }, "\uBCF4\uC720 \uCFE0\uD3F0 \uB9AC\uC2A4\uD2B8"), /*#__PURE__*/React.createElement(Coupons, {
    ref: issuableCouponRef,
    canUse: isIssuable,
    totalCount: totalCount
  })), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_10__["default"], {
    shows: isRegistrationModalOpen,
    TruthyComponent: /*#__PURE__*/React.createElement(_components_TitleModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "coupon-registration-modal",
      title: "\uCFE0\uD3F0 \uBC88\uD638 \uC785\uB825",
      onClose: function onClose() {
        return setIsRegistrationModalOpen(false);
      }
    }, /*#__PURE__*/React.createElement(_CouponRegistration__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onCancel: function onCancel() {
        return setIsRegistrationModalOpen(false);
      },
      onRegister: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return openAlert({
                message: '쿠폰이 등록됐습니다.',
                onClose: function () {
                  var _onClose = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return fetchProfileCouponSummary();
                        case 2:
                          _context2.next = 4;
                          return issuableCouponRef.current.fetchCoupons();
                        case 4:
                          _context2.next = 6;
                          return setIsRegistrationModalOpen(false);
                        case 6:
                        case "end":
                          return _context2.stop();
                      }
                    }, _callee2);
                  }));
                  function onClose() {
                    return _onClose.apply(this, arguments);
                  }
                  return onClose;
                }()
              });
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))
    }))
  }));
};
var DEFAULT_TABS = [{
  value: 'ISSUABLE',
  label: '사용 가능 쿠폰'
}, {
  value: 'UNISSUABLE',
  label: '사용 불가 쿠폰'
}];
var Coupon = function Coupon() {
  (0,_hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_4__["default"])({
    title: '쿠폰',
    hasBackBtnOnHeader: true,
    hasCartBtnOnHeader: true,
    hasBottomNav: true
  });
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_14__["default"], {
    initialState: {
      currentTab: 'ISSUABLE',
      tabs: DEFAULT_TABS
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "my-page-coupon"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: "my-page-coupon__tabs"
  }), /*#__PURE__*/React.createElement(CouponContent, null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Coupon);

/***/ }),

/***/ "./src/pages/MyPage/Coupon/CouponItem.jsx":
/*!************************************************!*\
  !*** ./src/pages/MyPage/Coupon/CouponItem.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var COUPON_TYPE_LABEL = {
  PRODUCT: '상품',
  CART: '주문',
  CART_DELIVERY: '장바구니 배송비'
};

// 쿠폰 할인 정보
var getDiscountInfo = function getDiscountInfo(coupon) {
  var limitSalePrice = coupon.minSalePrice;
  if (coupon.discountRate) {
    return {
      amount: coupon.discountRate,
      unit: '%',
      maxAmount: coupon.maxDiscountAmt,
      limitSalePrice: limitSalePrice
    };
  }
  return {
    amount: (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.convertToKoreanCurrency)(coupon.discountAmt),
    unit: '원',
    maxAmount: 0,
    limitSalePrice: limitSalePrice
  };
};
var CouponItem = function CouponItem(_ref) {
  var _coupon$issueYmdt, _coupon$expireYmdt;
  var coupon = _ref.coupon,
    unissuable = _ref.unissuable,
    _ref$customElement = _ref.customElement,
    customElement = _ref$customElement === void 0 ? /*#__PURE__*/React.createElement(React.Fragment, null) : _ref$customElement;
  var _getDiscountInfo = getDiscountInfo(coupon),
    amount = _getDiscountInfo.amount,
    unit = _getDiscountInfo.unit,
    maxAmount = _getDiscountInfo.maxAmount,
    limitSalePrice = _getDiscountInfo.limitSalePrice;
  var couponTypeLabel = COUPON_TYPE_LABEL[coupon.couponType];
  var issueDate = (_coupon$issueYmdt = coupon.issueYmdt) === null || _coupon$issueYmdt === void 0 ? void 0 : _coupon$issueYmdt.slice(0, 10);
  var expireDate = (_coupon$expireYmdt = coupon.expireYmdt) === null || _coupon$expireYmdt === void 0 ? void 0 : _coupon$expireYmdt.slice(0, 10);
  return /*#__PURE__*/React.createElement("li", {
    className: "my-page-coupon__list-item my-page-coupon__list-item--".concat(unissuable ? 'unissuable' : 'issuable')
  }, /*#__PURE__*/React.createElement("div", {
    className: "my-page-coupon__box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "my-page-coupon__box--left"
  }, /*#__PURE__*/React.createElement("p", {
    className: "my-page-coupon__discounted-price"
  }, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.convertToKoreanCurrency)(amount), /*#__PURE__*/React.createElement("span", {
    className: "my-page-coupon__unit"
  }, unit), /*#__PURE__*/React.createElement("span", {
    className: "my-page-coupon__discount-label"
  }, couponTypeLabel, " \uD560\uC778")), /*#__PURE__*/React.createElement("div", {
    className: "my-page-coupon__content"
  }, /*#__PURE__*/React.createElement("p", {
    className: "my-page-coupon__name"
  }, coupon.couponName), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
    shows: maxAmount > 0,
    TruthyComponent: /*#__PURE__*/React.createElement("p", {
      className: "my-page-coupon__max-amount"
    }, "\uCD5C\uB300 ", (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.convertToKoreanCurrency)(maxAmount), " \uC6D0 \uD560\uC778")
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
    shows: limitSalePrice > 0,
    TruthyComponent: /*#__PURE__*/React.createElement("p", {
      className: "my-page-coupon__limit-sale-price"
    }, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.convertToKoreanCurrency)(limitSalePrice), " \uC6D0 \uC774\uC0C1 \uAD6C\uB9E4 \uC2DC \uC0AC\uC6A9\uAC00\uB2A5")
  })), /*#__PURE__*/React.createElement("p", {
    className: "my-page-coupon__date"
  }, issueDate ? "".concat(issueDate, " ~ ").concat(expireDate) : "".concat(expireDate))), /*#__PURE__*/React.createElement("div", {
    className: "my-page-coupon__box--right"
  }, /*#__PURE__*/React.createElement("p", null, "COUPON")), customElement));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CouponItem);
CouponItem.propTypes = {
  coupon: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.shape)({
    couponName: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }),
  unissuable: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  discountRate: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  discountAmt: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  issueYmdt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  expireYmdt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  maxDiscountAmt: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  minSalePrice: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  couponType: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf)(['PRODUCT', 'CART', 'CART_DELIVERY']),
  customElement: prop_types__WEBPACK_IMPORTED_MODULE_2__.object
};

/***/ }),

/***/ "./src/pages/MyPage/Coupon/index.js":
/*!******************************************!*\
  !*** ./src/pages/MyPage/Coupon/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Coupon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Coupon */ "./src/pages/MyPage/Coupon/Coupon.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Coupon__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/pages/MyPage/CouponRegistration/CouponRegistration.jsx":
/*!********************************************************************!*\
  !*** ./src/pages/MyPage/CouponRegistration/CouponRegistration.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/TextField/TextField.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/promotion/CouponIssuanceByCodeButton/CouponIssuanceByCodeButton.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var CouponRegistration = function CouponRegistration(_ref) {
  var onCancel = _ref.onCancel,
    onRegister = _ref.onRegister,
    onChange = _ref.onChange;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    code = _useState2[0],
    setCode = _useState2[1];
  var handleCodeChange = function handleCodeChange(event) {
    var _event$currentTarget$;
    setCode((_event$currentTarget$ = event.currentTarget.value) === null || _event$currentTarget$ === void 0 ? void 0 : _event$currentTarget$.trim());
    onChange === null || onChange === void 0 ? void 0 : onChange(event);
  };
  var handleCancel = function handleCancel() {
    setCode('');
    onCancel === null || onCancel === void 0 ? void 0 : onCancel();
  };
  var handleRegister = function handleRegister() {
    setCode('');
    onRegister === null || onRegister === void 0 ? void 0 : onRegister();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "my-page-coupon-registration"
  }, /*#__PURE__*/React.createElement("div", {
    className: "my-page-coupon-registration__title"
  }, "\uBC1C\uAE09 \uBC1B\uC73C\uC2E0 \uCFE0\uD3F0 \uC778\uC99D \uBC88\uD638\uB97C \uC544\uB798\uC5D0 \uC785\uB825\uD574\uC8FC\uC138\uC694."), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: code,
    onChange: handleCodeChange,
    placeholder: "\uCFE0\uD3F0 \uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694."
  }), /*#__PURE__*/React.createElement("div", {
    className: "my-page-coupon-registration__buttons"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
    theme: "dark",
    label: "\uCDE8\uC18C",
    onClick: handleCancel
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleRegister,
    code: code
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CouponRegistration);
CouponRegistration.propTypes = {
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_4__.func,
  onRegister: prop_types__WEBPACK_IMPORTED_MODULE_4__.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4__.func
};

/***/ }),

/***/ "./src/pages/MyPage/CouponRegistration/index.js":
/*!******************************************************!*\
  !*** ./src/pages/MyPage/CouponRegistration/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CouponRegistration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CouponRegistration */ "./src/pages/MyPage/CouponRegistration/CouponRegistration.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CouponRegistration__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/pages/MyPage/TotalCount/TotalCount.jsx":
/*!****************************************************!*\
  !*** ./src/pages/MyPage/TotalCount/TotalCount.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var TotalCount = function TotalCount(_ref) {
  var title = _ref.title,
    count = _ref.count;
  return /*#__PURE__*/React.createElement("p", {
    className: "my-page__total-count"
  }, title, /*#__PURE__*/React.createElement("span", {
    className: "my-page__count"
  }, /*#__PURE__*/React.createElement("span", null, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.convertToKoreanCurrency)(count)), " \uAC74"));
};
TotalCount.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  count: prop_types__WEBPACK_IMPORTED_MODULE_1__.number
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TotalCount);

/***/ }),

/***/ "./src/pages/MyPage/TotalCount/index.js":
/*!**********************************************!*\
  !*** ./src/pages/MyPage/TotalCount/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TotalCount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TotalCount */ "./src/pages/MyPage/TotalCount/TotalCount.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TotalCount__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);
//# sourceMappingURL=src_pages_MyPage_Coupon_index_js.9601cc0c761ac64f230c.bundle.js.map