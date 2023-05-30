"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_pages_MyPage_PersonalInquiry_index_js"],{

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

/***/ "./src/pages/MyPage/PersonalInquiry/PersonalInquiry.jsx":
/*!**************************************************************!*\
  !*** ./src/pages/MyPage/PersonalInquiry/PersonalInquiry.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/manage/InquiryProvider/InquiryProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/manage/InquiryFormProvider/InquiryFormProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/modal/ModalProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/hooks/useInfiniteScroll/useInfiniteScroll.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/InfiniteScrollLoader/InfiniteScrollLoader.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/manage/BoardConfigurationProvider/BoardConfigurationProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/storage/ImageFileProvider/ImageFileProvider.js");
/* harmony import */ var _components_Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Board */ "./src/components/Board/index.js");
/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ErrorBoundary */ "./src/components/ErrorBoundary/index.js");
/* harmony import */ var _components_FullModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/FullModal */ "./src/components/FullModal/index.js");
/* harmony import */ var _components_ListSkeleton_ListSkeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ListSkeleton/ListSkeleton */ "./src/components/ListSkeleton/ListSkeleton.jsx");
/* harmony import */ var _constants_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/image */ "./src/constants/image.js");
/* harmony import */ var _hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useLayoutChanger */ "./src/hooks/useLayoutChanger.js");
/* harmony import */ var _TotalCount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../TotalCount */ "./src/pages/MyPage/TotalCount/index.js");
/* harmony import */ var _PersonalInquiryList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PersonalInquiryList */ "./src/pages/MyPage/PersonalInquiry/PersonalInquiryList.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var PersonalInquiryContent = function PersonalInquiryContent() {
  var _inquiryConfiguration, _inquiryConfiguration2, _inquiryConfiguration3, _inquiryConfiguration4;
  var formRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  // state
  var _useInquiryStateConte = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__.useInquiryStateContext)(),
    totalCount = _useInquiryStateConte.inquiry.totalCount;
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_10__.useMallStateContext)(),
    _useMallStateContext$ = _useMallStateContext.inquiryTypes,
    inquiryTypes = _useMallStateContext$ === void 0 ? [] : _useMallStateContext$;
  var _useInquiryFormStateC = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_11__.useInquiryFormStateContext)(),
    inquiryDetail = _useInquiryFormStateC.inquiryDetail;
  var _useInquiryStateConte2 = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__.useInquiryStateContext)(),
    inquiryConfiguration = _useInquiryStateConte2.inquiryConfiguration;

  // action
  var _useModalActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_12__.useModalActionContext)(),
    openConfirm = _useModalActionContex.openConfirm,
    openAlert = _useModalActionContex.openAlert;
  var _useInquiryActionCont = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__.useInquiryActionContext)(),
    fetchInquiries = _useInquiryActionCont.fetchInquiries,
    fetchInquiryConfiguration = _useInquiryActionCont.fetchInquiryConfiguration;
  var _useErrorBoundaryActi = (0,_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__.useErrorBoundaryActionContext)(),
    catchError = _useErrorBoundaryActi.catchError;
  var _useInquiryFormAction = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_11__.useInquiryFormActionContext)(),
    postInquiry = _useInquiryFormAction.postInquiry,
    putInquiryByInquiryNo = _useInquiryFormAction.putInquiryByInquiryNo,
    deleteInquiryByInquiryNo = _useInquiryFormAction.deleteInquiryByInquiryNo,
    fetchInquiryBy = _useInquiryFormAction.fetchInquiryBy;

  // 등록/수정 모달
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isRegistrationModalOpen = _useState2[0],
    setIsRegistrationModalOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isModificationModalOpen = _useState4[0],
    setIsModificationModalOpen = _useState4[1];

  // 문의 유형 옵션
  var inquiryTypeSelectOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return inquiryTypes.map(function (_ref) {
      var inquiryTypeNo = _ref.inquiryTypeNo,
        inquiryTypeName = _ref.inquiryTypeName;
      return {
        label: inquiryTypeName,
        value: "".concat(inquiryTypeNo)
      };
    });
  }, [inquiryTypes]);

  // 인피니트
  var _useInfiniteScroll = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_13__["default"])({
      fetcher: function () {
        var _fetcher = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(payload) {
          var _yield$fetchInquiries, data;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetchInquiries(payload);
              case 2:
                _yield$fetchInquiries = _context.sent;
                data = _yield$fetchInquiries.data;
                return _context.abrupt("return", data.items.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    images: item.imageUrls.map(function (imageUrl, index) {
                      return {
                        imageUrl: imageUrl,
                        originName: item.originalImageUrls[index]
                      };
                    })
                  });
                }));
              case 5:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function fetcher(_x2) {
          return _fetcher.apply(this, arguments);
        }
        return fetcher;
      }()
    }),
    isLoading = _useInfiniteScroll.isLoading,
    accumulativeItems = _useInfiniteScroll.accumulativeItems,
    fetchInitialItems = _useInfiniteScroll.fetchInitialItems,
    isInfiniteScrollDisabled = _useInfiniteScroll.isInfiniteScrollDisabled,
    onIntersect = _useInfiniteScroll.onIntersect;
  var resetInquiries = function resetInquiries() {
    fetchInitialItems();
  };
  var handleIntersect = function handleIntersect() {
    onIntersect({
      totalCount: totalCount
    });
  };
  var handleModifyButtonClick = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref2) {
      var inquiryNo;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            inquiryNo = _ref2.inquiryNo;
            _context2.prev = 1;
            _context2.next = 4;
            return fetchInquiryBy({
              inquiryNo: inquiryNo
            });
          case 4:
            setIsModificationModalOpen(true);
            _context2.next = 10;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](1);
            catchError(_context2.t0);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 7]]);
    }));
    return function handleModifyButtonClick(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleDeleteButtonClick = function handleDeleteButtonClick(_ref4) {
    var inquiryNo = _ref4.inquiryNo;
    openConfirm({
      message: /*#__PURE__*/React.createElement(React.Fragment, null, "\uC0AD\uC81C \uC2DC \uBCF5\uAD6C\uAC00 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4. ", /*#__PURE__*/React.createElement("br", null), "\uC815\uB9D0 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"),
      onConfirm: function () {
        var _onConfirm = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return deleteInquiryByInquiryNo({
                  inquiryNo: inquiryNo
                });
              case 3:
                _context3.next = 5;
                return resetInquiries();
              case 5:
                _context3.next = 10;
                break;
              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                catchError(_context3.t0);
              case 10:
              case "end":
                return _context3.stop();
            }
          }, _callee3, null, [[0, 7]]);
        }));
        function onConfirm() {
          return _onConfirm.apply(this, arguments);
        }
        return onConfirm;
      }(),
      confirmLabel: '삭제'
    });
  };
  var handleFormSubmit = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var _formRef$current$form, type, title, content, images;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _formRef$current$form = formRef.current.formData, type = _formRef$current$form.type, title = _formRef$current$form.title, content = _formRef$current$form.content, images = _formRef$current$form.images;
            _context5.prev = 1;
            _context5.next = 4;
            return postInquiry({
              inquiryTypeNo: type,
              inquiryTitle: title,
              inquiryContent: content,
              originalFileName: images.map(function (_ref6) {
                var originName = _ref6.originName;
                return originName;
              }),
              uploadedFileName: images.map(function (_ref7) {
                var imageUrl = _ref7.imageUrl;
                return imageUrl;
              }),
              usesEmailNotificationWhenRegisteringAnswer: false,
              usesSmsNotificationWhenRegisteringAnswer: false
            });
          case 4:
            openAlert({
              message: '게시글이 저장되었습니다.',
              onClose: function () {
                var _onClose = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return resetInquiries();
                      case 2:
                        setIsRegistrationModalOpen(false);
                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }));
                function onClose() {
                  return _onClose.apply(this, arguments);
                }
                return onClose;
              }()
            });
            _context5.next = 10;
            break;
          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](1);
            catchError(_context5.t0);
          case 10:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[1, 7]]);
    }));
    return function handleFormSubmit() {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleFormModify = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var _formRef$current$form2, title, content, images;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _formRef$current$form2 = formRef.current.formData, title = _formRef$current$form2.title, content = _formRef$current$form2.content, images = _formRef$current$form2.images;
            _context7.prev = 1;
            _context7.next = 4;
            return putInquiryByInquiryNo({
              inquiryNo: inquiryDetail.inquiryNo,
              inquiryTitle: title,
              inquiryContent: content,
              originalFileName: images.map(function (_ref9) {
                var originName = _ref9.originName;
                return originName;
              }),
              uploadedFileName: images.map(function (_ref10) {
                var imageUrl = _ref10.imageUrl;
                return imageUrl;
              }),
              usesEmailNotificationWhenRegisteringAnswer: inquiryDetail.usesEmailNotificationWhenRegisteringAnswer,
              usesSmsNotificationWhenRegisteringAnswer: inquiryDetail.usesSmsNotificationWhenRegisteringAnswer
            });
          case 4:
            openAlert({
              message: '게시글이 수정되었습니다.',
              onClose: function () {
                var _onClose2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.next = 2;
                        return resetInquiries();
                      case 2:
                        setIsModificationModalOpen(false);
                      case 3:
                      case "end":
                        return _context6.stop();
                    }
                  }, _callee6);
                }));
                function onClose() {
                  return _onClose2.apply(this, arguments);
                }
                return onClose;
              }()
            });
            _context7.next = 10;
            break;
          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](1);
            catchError(_context7.t0);
          case 10:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[1, 7]]);
    }));
    return function handleFormModify() {
      return _ref8.apply(this, arguments);
    };
  }();
  (0,_hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_6__["default"])({
    hasBackBtnOnHeader: true,
    title: "".concat((_inquiryConfiguration = inquiryConfiguration === null || inquiryConfiguration === void 0 ? void 0 : inquiryConfiguration.name) !== null && _inquiryConfiguration !== void 0 ? _inquiryConfiguration : '1:1문의', " \uAD00\uB9AC"),
    hasCartBtnOnHeader: true,
    hasBottomNav: true
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    resetInquiries();
    fetchInquiryConfiguration();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "personal-inquiry"
  }, /*#__PURE__*/React.createElement(_TotalCount__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: (_inquiryConfiguration2 = inquiryConfiguration === null || inquiryConfiguration === void 0 ? void 0 : inquiryConfiguration.name) !== null && _inquiryConfiguration2 !== void 0 ? _inquiryConfiguration2 : '1:1문의',
    count: totalCount
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: "personal-inquiry__registration-button",
    label: "".concat((_inquiryConfiguration3 = inquiryConfiguration === null || inquiryConfiguration === void 0 ? void 0 : inquiryConfiguration.name) !== null && _inquiryConfiguration3 !== void 0 ? _inquiryConfiguration3 : '1:1문의', " \uB4F1\uB85D\uD558\uAE30"),
    onClick: function onClick() {
      return setIsRegistrationModalOpen(true);
    }
  }), /*#__PURE__*/React.createElement(_PersonalInquiryList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    items: accumulativeItems,
    onModify: handleModifyButtonClick,
    onDelete: handleDeleteButtonClick
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_15__["default"], {
    shows: accumulativeItems.length > 0,
    TruthyComponent: /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_16__["default"], {
      onIntersect: handleIntersect,
      disabled: isInfiniteScrollDisabled
    })
  }), /*#__PURE__*/React.createElement(_components_ListSkeleton_ListSkeleton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "personal-inquiry-list",
    isLoading: isLoading
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_15__["default"], {
    shows: isRegistrationModalOpen,
    TruthyComponent: /*#__PURE__*/React.createElement(_components_FullModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "".concat((_inquiryConfiguration4 = inquiryConfiguration === null || inquiryConfiguration === void 0 ? void 0 : inquiryConfiguration.name) !== null && _inquiryConfiguration4 !== void 0 ? _inquiryConfiguration4 : '1:1문의', " \uB4F1\uB85D")
    }, /*#__PURE__*/React.createElement(_components_Board__WEBPACK_IMPORTED_MODULE_1__.BoardFormRegistration, {
      ref: formRef,
      className: "personal-inquiry-form",
      usesTitle: true,
      canAttach: inquiryConfiguration.usesAttachment,
      typeSelectorOption: {
        options: inquiryTypeSelectOptions
      },
      textOption: {
        value: '',
        placeholder: '문의 내용을 입력하세요.'
      },
      imageFileUploadOption: {
        configuration: _constants_image__WEBPACK_IMPORTED_MODULE_5__.PERSONAL_INQUIRY_IMAGE
      },
      onSubmit: handleFormSubmit,
      onCancel: function onCancel() {
        return setIsRegistrationModalOpen(false);
      }
    }))
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_15__["default"], {
    shows: isModificationModalOpen,
    TruthyComponent: /*#__PURE__*/React.createElement(_components_FullModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "".concat(inquiryConfiguration === null || inquiryConfiguration === void 0 ? void 0 : inquiryConfiguration.name, " \uC218\uC815"),
      onClose: function onClose() {
        setIsModificationModalOpen(false);
      }
    }, /*#__PURE__*/React.createElement(_components_Board__WEBPACK_IMPORTED_MODULE_1__.BoardFormModification, {
      ref: formRef,
      className: "personal-inquiry-form",
      canAttach: inquiryConfiguration.usesAttachment,
      typeSelectorOption: {
        value: "".concat(inquiryDetail.inquiryTypeInformation.no),
        disabled: true,
        options: inquiryTypeSelectOptions
      },
      titleOption: {
        value: inquiryDetail.inquiryTitle
      },
      textOption: {
        value: inquiryDetail.inquiryContent
      },
      imageFileUploadOption: {
        configuration: _constants_image__WEBPACK_IMPORTED_MODULE_5__.PERSONAL_INQUIRY_IMAGE,
        images: inquiryDetail.imageUrls.map(function (url, index) {
          return {
            originName: inquiryDetail.originalImageUrls[index],
            imageUrl: url
          };
        })
      },
      onModify: handleFormModify,
      onCancel: function onCancel() {
        setIsModificationModalOpen(false);
      }
    }))
  }));
};
var PersonalInquiry = function PersonalInquiry() {
  var _useBoardConfiguratio = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_17__.useBoardConfigurationContextAction)(),
    fetchBoardConfiguration = _useBoardConfiguratio.fetchBoardConfiguration;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchBoardConfiguration();
  }, []);
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/React.createElement(PersonalInquiryContent, null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonalInquiry);

/***/ }),

/***/ "./src/pages/MyPage/PersonalInquiry/PersonalInquiryList.jsx":
/*!******************************************************************!*\
  !*** ./src/pages/MyPage/PersonalInquiry/PersonalInquiryList.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _components_Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Board */ "./src/components/Board/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var EmptyPersonalInquiryList = function EmptyPersonalInquiryList() {
  return /*#__PURE__*/React.createElement("div", {
    className: "inquiry-list__empty"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico ico--exclamation-white-bg"
  }), /*#__PURE__*/React.createElement("span", {
    className: "product-board-list__empty-notes"
  }, "\uC544\uC9C1 \uB4F1\uB85D\uB41C 1:1 \uBB38\uC758\uAC00 \uC5C6\uC5B4\uC694."));
};
var PersonalInquiryList = function PersonalInquiryList(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    onModify = _ref.onModify,
    onDelete = _ref.onDelete;
  var handleModifyButtonClick = function handleModifyButtonClick(inquiryDetail) {
    onModify(inquiryDetail);
  };
  var handleDeleteButtonClick = function handleDeleteButtonClick(inquiryDetail) {
    onDelete(inquiryDetail);
  };
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
    shows: items.length > 0,
    TruthyComponent: /*#__PURE__*/React.createElement("div", {
      className: "personal-inquiry-list"
    }, items.map(function (item) {
      return /*#__PURE__*/React.createElement(_components_Board__WEBPACK_IMPORTED_MODULE_0__.InquiryItem, {
        key: item.inquiryNo,
        inquiryTypeLabel: item.inquiryTypeInformation.name,
        isReplied: item.inquiryStatus === 'ANSWERED',
        canModify: item.inquiryStatus !== 'ANSWERED',
        title: item.inquiryTitle,
        content: item.inquiryContent,
        registerDate: item.registerYmdt.slice(0, 10),
        images: item.images,
        isMine: true,
        onModify: function onModify() {
          return handleModifyButtonClick(item);
        },
        onDelete: function onDelete() {
          return handleDeleteButtonClick(item);
        },
        answers: item.answerInformation ? [item.answerInformation] : []
      });
    })),
    FalsyComponent: /*#__PURE__*/React.createElement(EmptyPersonalInquiryList, null)
  });
};
PersonalInquiryList.propTypes = {
  items: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_2__.shape)({
    inquiryNo: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
    inquiryStatus: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf)(['ISSUED', 'ANSWERED', 'IN_PROGRESS', 'ASKED']),
    inquiryTitle: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    inquiryContent: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    registerYmdt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    images: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_2__.shape)({
      imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
      originFileName: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
    }))
  })),
  onModify: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,
  onDelete: prop_types__WEBPACK_IMPORTED_MODULE_2__.func
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonalInquiryList);

/***/ }),

/***/ "./src/pages/MyPage/PersonalInquiry/index.js":
/*!***************************************************!*\
  !*** ./src/pages/MyPage/PersonalInquiry/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PersonalInquiry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PersonalInquiry */ "./src/pages/MyPage/PersonalInquiry/PersonalInquiry.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PersonalInquiry__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
//# sourceMappingURL=src_pages_MyPage_PersonalInquiry_index_js.d4e58d9e3dfa125f3e9c.bundle.js.map