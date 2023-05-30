"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_pages_MyPage_Like_index_js"],{

/***/ "./src/components/BoardNoticeList/BoardNoticeList.jsx":
/*!************************************************************!*\
  !*** ./src/components/BoardNoticeList/BoardNoticeList.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var BoardNoticeList = function BoardNoticeList(_ref) {
  var _ref$texts = _ref.texts,
    texts = _ref$texts === void 0 ? [] : _ref$texts,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? '유의사항' : _ref$title;
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_0__["default"], {
    shows: texts.length > 0,
    TruthyComponent: /*#__PURE__*/React.createElement("div", {
      className: "board-form__notes"
    }, /*#__PURE__*/React.createElement("dl", {
      className: "board-form__note"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "board-form__note-title"
    }, title), texts.map(function (text, index) {
      return /*#__PURE__*/React.createElement("dd", {
        key: index,
        className: "board-form__note-text"
      }, text);
    })))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoardNoticeList);
BoardNoticeList.propTypes = {
  texts: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf)(prop_types__WEBPACK_IMPORTED_MODULE_1__.string).isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};

/***/ }),

/***/ "./src/components/BoardProductItem/BoardProductItem.jsx":
/*!**************************************************************!*\
  !*** ./src/components/BoardProductItem/BoardProductItem.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/SelectBox/SelectBox.js");
/* harmony import */ var _constants_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/image */ "./src/constants/image.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var BoardProductItem = function BoardProductItem(_ref) {
  var productName = _ref.productName,
    productImageUrl = _ref.productImageUrl,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    onSelect = _ref.onSelect,
    optionDisplayLabel = _ref.optionDisplayLabel,
    optionNo = _ref.optionNo,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  var handleOptionSelect = function handleOptionSelect(_ref2) {
    var value = _ref2.currentTarget.value;
    var selectedOptionNo = Number(value);
    selectedOptionNo > 0 && (onSelect === null || onSelect === void 0 ? void 0 : onSelect(selectedOptionNo));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "l-panel board-product-item__description ".concat(className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "board-product-item__image"
  }, /*#__PURE__*/React.createElement("img", {
    src: "".concat(productImageUrl, "?").concat(_constants_image__WEBPACK_IMPORTED_MODULE_0__.BOARD_IMAGE.THUMB_NAIL_SIZE),
    alt: productName,
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "board-product-item__product"
  }, /*#__PURE__*/React.createElement("em", {
    className: "board-product-item__product-name"
  }, productName), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
    shows: (options === null || options === void 0 ? void 0 : options.length) > 1,
    TruthyComponent: /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onSelect: handleOptionSelect,
      options: options,
      value: optionNo,
      className: "board-product-item__option-selector"
    }),
    FalsyComponent: /*#__PURE__*/React.createElement("p", {
      className: "board-product-item__option-value"
    }, optionDisplayLabel)
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoardProductItem);
BoardProductItem.propTypes = {
  productName: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  productImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  options: (0,prop_types__WEBPACK_IMPORTED_MODULE_3__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_3__.shape)({
    value: (0,prop_types__WEBPACK_IMPORTED_MODULE_3__.oneOf)(['string', 'number']),
    label: prop_types__WEBPACK_IMPORTED_MODULE_3__.string
  })),
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_3__.func,
  optionDisplayLabel: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  optionNo: prop_types__WEBPACK_IMPORTED_MODULE_3__.number,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3__.string
};

/***/ }),

/***/ "./src/components/BoardProductItem/index.js":
/*!**************************************************!*\
  !*** ./src/components/BoardProductItem/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BoardProductItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoardProductItem */ "./src/components/BoardProductItem/BoardProductItem.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_BoardProductItem__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

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

/***/ "./src/components/OptionLabel/OptionLabel.jsx":
/*!****************************************************!*\
  !*** ./src/components/OptionLabel/OptionLabel.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var OptionLabel = function OptionLabel(_ref) {
  var optionName = _ref.optionName,
    optionValue = _ref.optionValue,
    optionInputs = _ref.optionInputs;
  var _getOptionLabels = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getOptionLabels)({
      optionName: optionName,
      optionValue: optionValue,
      optionInputs: optionInputs
    }),
    normalOptionLabels = _getOptionLabels.normalOptionLabels,
    textOptionLabels = _getOptionLabels.textOptionLabels;
  return /*#__PURE__*/React.createElement("div", {
    className: "option-label"
  }, /*#__PURE__*/React.createElement("div", {
    className: "option-label__normal-option"
  }, normalOptionLabels.map(function (label) {
    return /*#__PURE__*/React.createElement("span", {
      key: label
    }, label);
  })), /*#__PURE__*/React.createElement("div", null, textOptionLabels.map(function (label) {
    return /*#__PURE__*/React.createElement("p", {
      key: label
    }, label);
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OptionLabel);
OptionLabel.propTypes = {
  optionName: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  optionValue: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  optionInputs: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf)(prop_types__WEBPACK_IMPORTED_MODULE_1__.string)
};

/***/ }),

/***/ "./src/components/OptionLabel/index.js":
/*!*********************************************!*\
  !*** ./src/components/OptionLabel/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OptionLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptionLabel */ "./src/components/OptionLabel/OptionLabel.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_OptionLabel__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/ProductInquiryForm/ProductInquiryForm.jsx":
/*!******************************************************************!*\
  !*** ./src/components/ProductInquiryForm/ProductInquiryForm.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/ProductInquiryProvider/ProductInquiryProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/SelectBox/SelectBox.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/CharacterCounter/CharacterCounter.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Checkbox/Checkbox.js");
/* harmony import */ var _BoardNoticeList_BoardNoticeList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BoardNoticeList/BoardNoticeList */ "./src/components/BoardNoticeList/BoardNoticeList.jsx");
/* harmony import */ var _BoardProductItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BoardProductItem */ "./src/components/BoardProductItem/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var ProductInquiryForm = function ProductInquiryForm(_ref) {
  var productName = _ref.productName,
    productImageUrl = _ref.productImageUrl,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? '' : _ref$title,
    _ref$content = _ref.content,
    content = _ref$content === void 0 ? '' : _ref$content,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'PRODUCT' : _ref$type,
    _ref$isSecreted = _ref.isSecreted,
    isSecreted = _ref$isSecreted === void 0 ? false : _ref$isSecreted,
    ButtonGroup = _ref.ButtonGroup;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(title),
    _useState2 = _slicedToArray(_useState, 2),
    productInquiryTitle = _useState2[0],
    setProductInquiryTitle = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(content),
    _useState4 = _slicedToArray(_useState3, 2),
    productInquiryContent = _useState4[0],
    setProductInquiryContent = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isSecreted),
    _useState6 = _slicedToArray(_useState5, 2),
    isSecret = _useState6[0],
    setIsSecret = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(type),
    _useState8 = _slicedToArray(_useState7, 2),
    currentType = _useState8[0],
    setCurrentType = _useState8[1];
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useMallStateContext)(),
    types = _useMallStateContext.productInquiryTypes;
  var _useProductInquirySta = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useProductInquiryStateContext)(),
    inquiryConfig = _useProductInquirySta.inquiryConfig;
  var handleInquiryTypeSelect = function handleInquiryTypeSelect(_ref2) {
    var currentTarget = _ref2.currentTarget;
    setCurrentType(currentTarget.value);
  };
  var handleTitleChange = function handleTitleChange(_ref3) {
    var character = _ref3.character;
    setProductInquiryTitle(character.value);
  };
  var handleTextChange = function handleTextChange(_ref4) {
    var character = _ref4.character;
    setProductInquiryContent(character.value);
  };
  var handleIsSecretChange = function handleIsSecretChange(_ref5) {
    var currentTarget = _ref5.currentTarget;
    setIsSecret(currentTarget.checked);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "board-form product-inquiry-form"
  }, /*#__PURE__*/React.createElement(_BoardProductItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    productName: productName,
    productImageUrl: productImageUrl
  }), /*#__PURE__*/React.createElement("div", {
    className: "l-panel product-inquiry-form__content"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "product-inquiry-form__type",
    value: currentType,
    options: types !== null && types !== void 0 ? types : [],
    onSelect: handleInquiryTypeSelect
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "product-inquiry-form__title",
    placeholder: "\uC81C\uBAA9\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694.",
    className: "product-inquiry-form__title",
    onChange: handleTitleChange,
    value: productInquiryTitle,
    valid: "NO_COMMON_SPECIAL",
    limitCount: {
      character: 50
    }
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "product-inquiry-form__text",
    counterType: "CHARACTER",
    textType: "TEXT_AREA",
    placeholder: "\uB0B4\uC6A9\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694.",
    className: "product-inquiry-form__text",
    onChange: handleTextChange,
    value: productInquiryContent,
    cols: "30",
    rows: "10",
    valid: "NO_COMMON_SPECIAL",
    limitCount: {
      character: 1000
    }
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
    shows: inquiryConfig.secretUsable,
    TruthyComponent: /*#__PURE__*/React.createElement("div", {
      className: "product-inquiry-form__secret"
    }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: "\uBE44\uBC00\uAE00 \uC124\uC815",
      onChange: handleIsSecretChange,
      checked: isSecret
    }))
  }), /*#__PURE__*/React.createElement(ButtonGroup, {
    type: currentType,
    title: productInquiryTitle,
    content: productInquiryContent,
    isSecreted: isSecret
  })), /*#__PURE__*/React.createElement(_BoardNoticeList_BoardNoticeList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    texts: ['성격에 맞지 않는 글, 비방성글, 음란글, 욕설 등은 통보 없이 이동 또는 삭제 될 수 있습니다.']
  }));
};
ProductInquiryForm.propTypes = {
  productName: prop_types__WEBPACK_IMPORTED_MODULE_9__.string.isRequired,
  productImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_9__.string.isRequired,
  type: (0,prop_types__WEBPACK_IMPORTED_MODULE_9__.oneOf)(['PRODUCT', 'DELIVERY', 'CANCEL', 'RETURN', 'EXCHANGE', 'REFUND', 'OTHER']),
  title: prop_types__WEBPACK_IMPORTED_MODULE_9__.string,
  content: prop_types__WEBPACK_IMPORTED_MODULE_9__.string,
  isSecreted: prop_types__WEBPACK_IMPORTED_MODULE_9__.bool,
  ButtonGroup: prop_types__WEBPACK_IMPORTED_MODULE_9__.func
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductInquiryForm);

/***/ }),

/***/ "./src/components/ProductThumbItem/ProductThumbItem.jsx":
/*!**************************************************************!*\
  !*** ./src/components/ProductThumbItem/ProductThumbItem.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Thumbs/ThumbItem.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/QuantityChanger/QuantityChanger.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _OptionLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OptionLabel */ "./src/components/OptionLabel/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




var ProductThumbItem = function ProductThumbItem(_ref) {
  var _ref$productNo = _ref.productNo,
    productNo = _ref$productNo === void 0 ? 0 : _ref$productNo,
    _ref$imageUrl = _ref.imageUrl,
    imageUrl = _ref$imageUrl === void 0 ? '' : _ref$imageUrl,
    _ref$brandName = _ref.brandName,
    brandName = _ref$brandName === void 0 ? '' : _ref$brandName,
    _ref$productName = _ref.productName,
    productName = _ref$productName === void 0 ? '' : _ref$productName,
    orderCnt = _ref.orderCnt,
    buyAmt = _ref.buyAmt,
    _ref$optionName = _ref.optionName,
    optionName = _ref$optionName === void 0 ? '' : _ref$optionName,
    _ref$optionValue = _ref.optionValue,
    optionValue = _ref$optionValue === void 0 ? '' : _ref$optionValue,
    _ref$optionInputs = _ref.optionInputs,
    optionInputs = _ref$optionInputs === void 0 ? [] : _ref$optionInputs,
    usesQuantityChanger = _ref.usesQuantityChanger,
    quantityChangerValue = _ref.quantityChangerValue,
    onQuantityChange = _ref.onQuantityChange,
    _ref$frontDisplayYn = _ref.frontDisplayYn,
    frontDisplayYn = _ref$frontDisplayYn === void 0 ? 'Y' : _ref$frontDisplayYn,
    _ref$OptionComponent = _ref.OptionComponent,
    OptionComponent = _ref$OptionComponent === void 0 ? null : _ref$OptionComponent,
    _ref$AmountComponent = _ref.AmountComponent,
    AmountComponent = _ref$AmountComponent === void 0 ? null : _ref$AmountComponent,
    _ref$isRedirectingDis = _ref.isRedirectingDisabled,
    isRedirectingDisabled = _ref$isRedirectingDis === void 0 ? false : _ref$isRedirectingDis;
  if (!frontDisplayYn) return /*#__PURE__*/React.createElement(React.Fragment, null);
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: isRedirectingDisabled ? '#' : "/product-detail?productNo=".concat(productNo),
    src: imageUrl,
    className: "product-thumb-item",
    alt: productName
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], {
    shows: brandName,
    TruthyComponent: /*#__PURE__*/React.createElement("p", {
      className: "product-thumb-item__brand"
    }, brandName)
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "product-thumb-item__name"
  }, productName), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], {
    shows: optionName || optionInputs.length > 0,
    TruthyComponent: /*#__PURE__*/React.createElement(_OptionLabel__WEBPACK_IMPORTED_MODULE_1__["default"], {
      optionName: optionName,
      optionValue: optionValue,
      optionInputs: optionInputs
    })
  }), OptionComponent && /*#__PURE__*/React.createElement(OptionComponent, null)), /*#__PURE__*/React.createElement("div", {
    className: "product-thumb-item__amount-wrap"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "product-thumb-item__amount"
  }, orderCnt >= 0 && /*#__PURE__*/React.createElement("li", null, orderCnt, "\uAC1C "), buyAmt >= 0 && /*#__PURE__*/React.createElement("li", null, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.convertToKoreanCurrency)(buyAmt), "\uC6D0")), AmountComponent && /*#__PURE__*/React.createElement(AmountComponent, null), usesQuantityChanger && /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: quantityChangerValue,
    onChange: onQuantityChange
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductThumbItem);
ProductThumbItem.propTypes = {
  frontDisplayYn: prop_types__WEBPACK_IMPORTED_MODULE_5__.bool,
  brandName: prop_types__WEBPACK_IMPORTED_MODULE_5__.string,
  productName: prop_types__WEBPACK_IMPORTED_MODULE_5__.string.isRequired,
  orderCnt: prop_types__WEBPACK_IMPORTED_MODULE_5__.number,
  buyAmt: prop_types__WEBPACK_IMPORTED_MODULE_5__.number,
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_5__.string,
  optionName: prop_types__WEBPACK_IMPORTED_MODULE_5__.string,
  optionValue: prop_types__WEBPACK_IMPORTED_MODULE_5__.string,
  optionInputs: (0,prop_types__WEBPACK_IMPORTED_MODULE_5__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_5__.shape)({
    inputLabel: prop_types__WEBPACK_IMPORTED_MODULE_5__.string,
    inputValue: prop_types__WEBPACK_IMPORTED_MODULE_5__.string
  })),
  productNo: prop_types__WEBPACK_IMPORTED_MODULE_5__.number,
  OptionComponent: prop_types__WEBPACK_IMPORTED_MODULE_5__.func,
  AmountComponent: prop_types__WEBPACK_IMPORTED_MODULE_5__.func,
  usesQuantityChanger: prop_types__WEBPACK_IMPORTED_MODULE_5__.bool,
  quantityChangerValue: prop_types__WEBPACK_IMPORTED_MODULE_5__.number,
  onQuantityChange: prop_types__WEBPACK_IMPORTED_MODULE_5__.func,
  isRedirectingDisabled: prop_types__WEBPACK_IMPORTED_MODULE_5__.bool
};

/***/ }),

/***/ "./src/components/ProductThumbItem/index.js":
/*!**************************************************!*\
  !*** ./src/components/ProductThumbItem/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductThumbItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductThumbItem */ "./src/components/ProductThumbItem/ProductThumbItem.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ProductThumbItem__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/***/ "./src/constants/image.js":
/*!********************************!*\
  !*** ./src/constants/image.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOARD_IMAGE": () => (/* binding */ BOARD_IMAGE),
/* harmony export */   "PERSONAL_INQUIRY_IMAGE": () => (/* binding */ PERSONAL_INQUIRY_IMAGE),
/* harmony export */   "REVIEW_IMAGE": () => (/* binding */ REVIEW_IMAGE)
/* harmony export */ });
var BOARD_IMAGE = {
  THUMB_NAIL_SIZE: '100x100'
};
var REVIEW_IMAGE = {
  LIMIT_COUNT: 10,
  LIMIT_MEGA_BYTES: 5
};
var PERSONAL_INQUIRY_IMAGE = {
  LIMIT_COUNT: 10,
  LIMIT_MEGA_BYTES: 5
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

/***/ "./src/pages/MyPage/Like/Like.jsx":
/*!****************************************!*\
  !*** ./src/pages/MyPage/Like/Like.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/product/ProfileLikeProvider/ProfileLikeProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/ProductInquiryProvider/ProductInquiryProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/ProductInquiryFormProvider/ProductInquiryFormProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/product/ProductOptionProvider/ProductOptionProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/order/CartProvider/CartProvider.js");
/* harmony import */ var _hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../hooks/useLayoutChanger */ "./src/hooks/useLayoutChanger.js");
/* harmony import */ var _TotalCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TotalCount */ "./src/pages/MyPage/TotalCount/index.js");
/* harmony import */ var _LikeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LikeList */ "./src/pages/MyPage/Like/LikeList.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




var LikeTotalCount = function LikeTotalCount() {
  var _useProfileLikeStateC = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useProfileLikeStateContext)(),
    profileLikeProduct = _useProfileLikeStateC.profileLikeProduct;
  return /*#__PURE__*/React.createElement(_TotalCount__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "\uC88B\uC544\uC694",
    count: profileLikeProduct.totalCount
  });
};
var Like = function Like() {
  (0,_hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: '좋아요 관리',
    hasBackBtnOnHeader: true,
    hasCartBtnOnHeader: true,
    hasBottomNav: true
  });
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/React.createElement("div", {
    className: "profile-like"
  }, /*#__PURE__*/React.createElement(LikeTotalCount, null), /*#__PURE__*/React.createElement(_LikeList__WEBPACK_IMPORTED_MODULE_2__["default"], null)))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Like);

/***/ }),

/***/ "./src/pages/MyPage/Like/LikeList.jsx":
/*!********************************************!*\
  !*** ./src/pages/MyPage/Like/LikeList.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/ProductInquiryProvider/ProductInquiryProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/modal/ModalProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/ProductInquiryFormProvider/ProductInquiryFormProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/product/ProfileLikeProvider/ProfileLikeProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/hooks/useInfiniteScroll/useInfiniteScroll.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Thumbs/ThumbList.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/InfiniteScrollLoader/InfiniteScrollLoader.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ErrorBoundary */ "./src/components/ErrorBoundary/index.js");
/* harmony import */ var _components_FullModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/FullModal */ "./src/components/FullModal/index.js");
/* harmony import */ var _components_ListSkeleton_ListSkeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ListSkeleton/ListSkeleton */ "./src/components/ListSkeleton/ListSkeleton.jsx");
/* harmony import */ var _components_ProductInquiryForm_ProductInquiryForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ProductInquiryForm/ProductInquiryForm */ "./src/components/ProductInquiryForm/ProductInquiryForm.jsx");
/* harmony import */ var _components_ProductThumbItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ProductThumbItem */ "./src/components/ProductThumbItem/index.js");
/* harmony import */ var _constants_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants/common */ "./src/constants/common.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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









var DEFAULT_PRODUCT_INFORMATION = {
  productName: '',
  imageUrls: ['']
};
var EmptyList = function EmptyList() {
  return /*#__PURE__*/React.createElement("div", {
    className: "empty-list"
  }, /*#__PURE__*/React.createElement("p", null, "\uC88B\uC544\uC694 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."));
};
var LikeList = function LikeList() {
  var _useProductInquirySta = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__.useProductInquiryStateContext)(),
    inquiryConfig = _useProductInquirySta.inquiryConfig;
  var _useModalActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__.useModalActionContext)(),
    openAlert = _useModalActionContex.openAlert;
  var _useProductInquiryFor = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_10__.useProductInquiryFormActionContext)(),
    postProductInquiryBy = _useProductInquiryFor.postProductInquiryBy;
  var _useErrorBoundaryActi = (0,_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__.useErrorBoundaryActionContext)(),
    catchError = _useErrorBoundaryActi.catchError;
  var _useProfileLikeStateC = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_11__.useProfileLikeStateContext)(),
    profileLikeProduct = _useProfileLikeStateC.profileLikeProduct;
  var _useProfileLikeAction = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_11__.useProfileLikeActionContext)(),
    fetchProfileLikeProduct = _useProfileLikeAction.fetchProfileLikeProduct,
    postProfileLikeByProductNos = _useProfileLikeAction.postProfileLikeByProductNos;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isRegistrationModalOpen = _useState2[0],
    setIsRegistrationModalOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_objectSpread({}, DEFAULT_PRODUCT_INFORMATION)),
    _useState4 = _slicedToArray(_useState3, 2),
    productInformation = _useState4[0],
    setProductInformation = _useState4[1];

  // 인피니트
  var _useInfiniteScroll = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_12__["default"])({
      fetcher: function () {
        var _fetcher = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(requestOption) {
          var _yield$fetchProfileLi, data;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetchProfileLikeProduct(requestOption);
              case 2:
                _yield$fetchProfileLi = _context.sent;
                data = _yield$fetchProfileLi.data;
                return _context.abrupt("return", data.items);
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
      }(),
      requestOption: {
        pageNumber: 1,
        pageSize: _constants_common__WEBPACK_IMPORTED_MODULE_7__.INFINITY_SCROLL_PAGE_SIZE,
        hasTotalCount: true
      }
    }),
    isLoading = _useInfiniteScroll.isLoading,
    accumulativeItems = _useInfiniteScroll.accumulativeItems,
    fetchInitialItems = _useInfiniteScroll.fetchInitialItems,
    isInfiniteScrollDisabled = _useInfiniteScroll.isInfiniteScrollDisabled,
    onIntersect = _useInfiniteScroll.onIntersect;
  var handleIntersect = function handleIntersect() {
    onIntersect({
      totalCount: profileLikeProduct === null || profileLikeProduct === void 0 ? void 0 : profileLikeProduct.totalCount
    });
  };

  // 상품문의
  var handleInquiryButtonClick = function handleInquiryButtonClick(productInformation) {
    setProductInformation(productInformation);
    setIsRegistrationModalOpen(true);
  };
  var handleProductInquiryFormSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(productInquiryForm) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return postProductInquiryBy(_objectSpread({
              productNo: productInformation.productNo
            }, productInquiryForm));
          case 3:
            openAlert({
              message: '상품문의가 등록됐습니다.',
              onClose: function onClose() {
                setProductInformation(_objectSpread({}, DEFAULT_PRODUCT_INFORMATION));
                setIsRegistrationModalOpen(false);
              }
            });
            _context2.next = 9;
            break;
          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            catchError(_context2.t0);
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 6]]);
    }));
    return function handleProductInquiryFormSubmit(_x3) {
      return _ref.apply(this, arguments);
    };
  }();

  // 삭제
  var handleDeleteButtonClick = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(productInformation) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return postProfileLikeByProductNos({
              productNos: [productInformation.productNo]
            });
          case 3:
            _context3.next = 5;
            return fetchInitialItems();
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
    return function handleDeleteButtonClick(_x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchInitialItems();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_13__["default"], {
    shows: !((profileLikeProduct === null || profileLikeProduct === void 0 ? void 0 : profileLikeProduct.totalCount) > 0),
    TruthyComponent: /*#__PURE__*/React.createElement(EmptyList, null),
    FalsyComponent: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "profile-like__list"
    }, accumulativeItems.map(function (item, index) {
      return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_14__["default"], {
        key: "".concat(item.productNo, "_").concat(index),
        className: "profile-like__list-item"
      }, /*#__PURE__*/React.createElement(_components_ProductThumbItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        productNo: item.productNo,
        productName: item.productName,
        optionNo: item.optionNo,
        brandName: item.brandName,
        imageUrl: item.imageUrls.at(0),
        AmountComponent: function AmountComponent() {
          var discountAmount = item.immediateDiscountAmt + item.additionDiscountAmt;
          var originalPrice = discountAmount > 0 ? item.salePrice : 0;
          var salePrice = item.salePrice - discountAmount;
          return /*#__PURE__*/React.createElement("ul", {
            className: "profile-like__amount-list"
          }, /*#__PURE__*/React.createElement("li", {
            className: "profile-like__amount-item"
          }, /*#__PURE__*/React.createElement("span", null, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.convertToKoreanCurrency)(salePrice), " \uC6D0"), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_13__["default"], {
            shows: discountAmount > 0,
            TruthyComponent: /*#__PURE__*/React.createElement("del", {
              className: "profile-like__original-price"
            }, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.convertToKoreanCurrency)(originalPrice), " \uC6D0")
          })));
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "profile-like__buttons"
      }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_15__["default"], {
        className: "profile-like__inquiry-button",
        label: "\uC0C1\uD488\uBB38\uC758",
        onClick: function onClick() {
          return handleInquiryButtonClick(item);
        }
      }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_15__["default"], {
        className: "profile-like__delete-button",
        label: "\uC0AD\uC81C",
        onClick: function onClick() {
          return handleDeleteButtonClick(item);
        }
      })));
    })), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_13__["default"], {
      shows: accumulativeItems.length > 0,
      TruthyComponent: /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_16__["default"], {
        onIntersect: handleIntersect,
        disabled: isInfiniteScrollDisabled
      })
    }), /*#__PURE__*/React.createElement(_components_ListSkeleton_ListSkeleton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isLoading: isLoading
    }))
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_13__["default"], {
    shows: isRegistrationModalOpen,
    TruthyComponent: /*#__PURE__*/React.createElement(_components_FullModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: inquiryConfig.name
    }, /*#__PURE__*/React.createElement(_components_ProductInquiryForm_ProductInquiryForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      productName: productInformation === null || productInformation === void 0 ? void 0 : productInformation.productName,
      productImageUrl: productInformation === null || productInformation === void 0 ? void 0 : productInformation.imageUrls[0],
      ButtonGroup: function ButtonGroup(props) {
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_15__["default"], {
          className: "review-form__submit-btn review-form__btn",
          theme: "dark",
          label: "\uCDE8\uC18C",
          onClick: function onClick() {
            return setIsRegistrationModalOpen(false);
          }
        }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_15__["default"], {
          className: "review-form__submit-btn review-form__btn",
          theme: "caution",
          label: "\uB4F1\uB85D",
          onClick: function onClick() {
            return handleProductInquiryFormSubmit(props);
          }
        }));
      }
    }))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikeList);

/***/ }),

/***/ "./src/pages/MyPage/Like/index.js":
/*!****************************************!*\
  !*** ./src/pages/MyPage/Like/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Like__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Like */ "./src/pages/MyPage/Like/Like.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Like__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/***/ }),

/***/ "./src/utils/claim.js":
/*!****************************!*\
  !*** ./src/utils/claim.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCollectionComments": () => (/* binding */ getCollectionComments)
/* harmony export */ });
var getCollectionComments = function getCollectionComments(returnWay, returnWarehouseLabel) {
  if (returnWay === 'SELLER_COLLECT') return ['반품상황에 따라 (반품)택배비를 차감할 수 있습니다.', '반품신청이 완료되면 입력하신 수거지주소로 반품수거가 진행됩니다.', 'CJ대한통운택배기사가 1~2일 내에 직접 방문합니다.', '반품등록일 오후 5시까지 접수분은 익일로 반품접수 됩니다.', '단, 토/일/공휴일은 다음 근무일에 처리 됩니다.'];
  return ['반품상황에 따라 (반품)택배비를 차감할 수 있습니다.', '반품신청이 완료되면 구매자가 반품할 상품을 반품주소로 직접 보내주셔야 합니다.(착불 불가)', "\uBC18\uD488\uC8FC\uC18C: ".concat(returnWarehouseLabel)];
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCollectionComments": () => (/* reexport safe */ _claim__WEBPACK_IMPORTED_MODULE_1__.getCollectionComments),
/* harmony export */   "getOptionLabels": () => (/* reexport safe */ _product__WEBPACK_IMPORTED_MODULE_0__.getOptionLabels)
/* harmony export */ });
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product */ "./src/utils/product.js");
/* harmony import */ var _claim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claim */ "./src/utils/claim.js");



/***/ }),

/***/ "./src/utils/product.js":
/*!******************************!*\
  !*** ./src/utils/product.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOptionLabels": () => (/* binding */ getOptionLabels)
/* harmony export */ });
var getOptionLabels = function getOptionLabels(_ref) {
  var _optionName$split, _optionValue$split, _optionInputs$map;
  var optionName = _ref.optionName,
    optionValue = _ref.optionValue,
    optionInputs = _ref.optionInputs;
  var optionNameTokens = (_optionName$split = optionName === null || optionName === void 0 ? void 0 : optionName.split('|')) !== null && _optionName$split !== void 0 ? _optionName$split : [];
  var optionValueTokens = (_optionValue$split = optionValue === null || optionValue === void 0 ? void 0 : optionValue.split('|')) !== null && _optionValue$split !== void 0 ? _optionValue$split : [];
  var normalOptionLabels = optionNameTokens.map(function (optionNameToken, idx) {
    return "".concat(idx + 1, ") ").concat(optionNameToken, ": ").concat(optionValueTokens[idx]);
  });
  var textOptionLabels = (_optionInputs$map = optionInputs === null || optionInputs === void 0 ? void 0 : optionInputs.map(function (_ref2) {
    var inputLabel = _ref2.inputLabel,
      inputValue = _ref2.inputValue;
    return "".concat(inputLabel, ": ").concat(inputValue);
  })) !== null && _optionInputs$map !== void 0 ? _optionInputs$map : [];
  return {
    normalOptionLabels: normalOptionLabels,
    textOptionLabels: textOptionLabels
  };
};

/***/ })

}]);
//# sourceMappingURL=src_pages_MyPage_Like_index_js.7e9b8716e2b8cc3be0ee.bundle.js.map