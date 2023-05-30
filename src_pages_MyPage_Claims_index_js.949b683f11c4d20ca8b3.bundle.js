"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_pages_MyPage_Claims_index_js"],{

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

/***/ "./src/components/StartYmdSelector/StartYmdSelector.jsx":
/*!**************************************************************!*\
  !*** ./src/components/StartYmdSelector/StartYmdSelector.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/SelectBox/SelectBox.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var convertDateOffsetOptionToSelectBoxOption = function convertDateOffsetOptionToSelectBoxOption(offsetOption) {
  if (offsetOption === 'td') return {
    label: '오늘',
    value: (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.getDateLabel)()
  };
  var regexForOnlyNumber = /[^0-9]/g;
  var typeStringArray = [];
  var offset = Number(offsetOption.replace(regexForOnlyNumber, function (match) {
    typeStringArray.push(match);
    return '';
  }));
  var type = typeStringArray.join('');
  if (!['y', 'm', 'd'].includes(type)) return null;
  var LABEL_MAP = {
    y: '년',
    m: '개월',
    d: '일'
  };
  var DATE_LABEL_TYPE_MAP = {
    y: 'YEAR',
    m: 'MONTH',
    d: 'DATE'
  };
  return {
    label: "".concat(offset).concat(LABEL_MAP[type]),
    value: (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.getDateLabel)(DATE_LABEL_TYPE_MAP[type], -offset)
  };
};
var DEFAULT_START_YMD_QUERY_PARAM_KEY = 'startYmd';
var DEFAULT_OFFSET_OPTIONS = ['td', '7d', '1m', '3m', '1y'];

/**
 * 오늘을 기준으로 오늘, 3일 전, 1개월 전 등의 'startYmd' queryParam를 뽑아내는 컴포넌트입니다.
 * offsetOptions 는 ${offset}${'y' | 'm' | 'd'} 혹은 'td' 문자열로만 이루어진 배열만 넣을 수 있습니다.
 *
 * (ex) 'td', '3d', '2m', '1y'
 */
var StartYmdSelector = function StartYmdSelector(_ref) {
  var _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$offsetOptions = _ref.offsetOptions,
    offsetOptions = _ref$offsetOptions === void 0 ? DEFAULT_OFFSET_OPTIONS : _ref$offsetOptions,
    initialOffsetOption = _ref.initialOffsetOption,
    onChange = _ref.onChange,
    _ref$startYmdQueryPar = _ref.startYmdQueryParamKey,
    startYmdQueryParamKey = _ref$startYmdQueryPar === void 0 ? DEFAULT_START_YMD_QUERY_PARAM_KEY : _ref$startYmdQueryPar;
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 2),
    searchParams = _useSearchParams2[0],
    setSearchParams = _useSearchParams2[1];
  var datePeriodSelectBoxOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return offsetOptions.map(function (offsetOption) {
      return convertDateOffsetOptionToSelectBoxOption(offsetOption);
    });
  }, [offsetOptions]);
  var handleStartYmdSelect = function handleStartYmdSelect(_ref2) {
    var value = _ref2.currentTarget.value;
    searchParams.set(startYmdQueryParamKey, value);
    setSearchParams(searchParams, {
      replace: true
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var currentStartYmd = searchParams.get(startYmdQueryParamKey);
    var optionValues = datePeriodSelectBoxOptions.map(function (_ref3) {
      var value = _ref3.value;
      return value;
    });
    if (!currentStartYmd || !optionValues.includes(currentStartYmd)) {
      var isInitialOffsetOptionValid = offsetOptions.includes(initialOffsetOption);
      var initialValue = isInitialOffsetOptionValid ? convertDateOffsetOptionToSelectBoxOption(initialOffsetOption).value : datePeriodSelectBoxOptions[0].value;
      searchParams.set(startYmdQueryParamKey, initialValue);
      setSearchParams(function () {
        return searchParams;
      }, {
        replace: true
      });
    }
  }, [_toConsumableArray(searchParams.keys()).length]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!searchParams.get(startYmdQueryParamKey)) return;
    onChange === null || onChange === void 0 ? void 0 : onChange(searchParams.get(startYmdQueryParamKey));
  }, [searchParams]);
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], {
    disabled: disabled,
    className: "start-ymd-selector ".concat(className !== null && className !== void 0 ? className : ''),
    options: datePeriodSelectBoxOptions,
    value: searchParams.get(startYmdQueryParamKey) || datePeriodSelectBoxOptions[0].value,
    onSelect: handleStartYmdSelect
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartYmdSelector);
StartYmdSelector.propTypes = {
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4__.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4__.string,
  offsetOptions: (0,prop_types__WEBPACK_IMPORTED_MODULE_4__.arrayOf)(prop_types__WEBPACK_IMPORTED_MODULE_4__.string),
  initialOffsetOption: prop_types__WEBPACK_IMPORTED_MODULE_4__.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4__.func,
  startYmdQueryParamKey: prop_types__WEBPACK_IMPORTED_MODULE_4__.string
};

/***/ }),

/***/ "./src/components/StartYmdSelector/index.js":
/*!**************************************************!*\
  !*** ./src/components/StartYmdSelector/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StartYmdSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StartYmdSelector */ "./src/components/StartYmdSelector/StartYmdSelector.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_StartYmdSelector__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/***/ "./src/pages/MyPage/Claims/ClaimSummary.jsx":
/*!**************************************************!*\
  !*** ./src/pages/MyPage/Claims/ClaimSummary.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/pick.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _components_OptionLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/OptionLabel */ "./src/components/OptionLabel/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");







var WITHDRAW_ACTION_TYPES_MAP = (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.NEXT_ACTION_TYPE_MAP, ['WITHDRAW_CANCEL', 'WITHDRAW_EXCHANGE', 'WITHDRAW_RETURN']);
var WITHDRAW_ACTION_TYPES = Object.keys(WITHDRAW_ACTION_TYPES_MAP);
var ClaimSummary = function ClaimSummary(_ref) {
  var claimYmdt = _ref.claimYmdt,
    orderNo = _ref.orderNo,
    claimedOptions = _ref.claimedOptions,
    onWithdrawClaimBtnClick = _ref.onWithdrawClaimBtnClick;
  var claimYmd = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return claimYmdt.slice(0, 10);
  }, [claimYmdt]);
  return /*#__PURE__*/React.createElement("div", {
    className: "claims__claim-summary"
  }, /*#__PURE__*/React.createElement("p", {
    className: "claims__identifier"
  }, /*#__PURE__*/React.createElement("time", {
    dateTime: claimYmd,
    className: "bold"
  }, claimYmd.split('-').join('.')), /*#__PURE__*/React.createElement("span", {
    className: "claims__order-no"
  }, orderNo)), claimedOptions.map(function (_ref2) {
    var imageUrl = _ref2.imageUrl,
      optionName = _ref2.optionName,
      optionValue = _ref2.optionValue,
      optionInputs = _ref2.inputs,
      orderOptionNo = _ref2.orderOptionNo,
      productName = _ref2.productName,
      buyAmt = _ref2.price.buyAmt,
      claimStatusTypeLabel = _ref2.claimStatusTypeLabel,
      nextActions = _ref2.nextActions,
      optionType = _ref2.optionType;
    return /*#__PURE__*/React.createElement("article", {
      key: orderOptionNo,
      className: "claims__product-wrap"
    }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
      className: "claims__product",
      to: "/orders/".concat(orderNo)
    }, /*#__PURE__*/React.createElement("img", {
      src: imageUrl,
      alt: "".concat(productName, " \uC774\uBBF8\uC9C0")
    }), /*#__PURE__*/React.createElement("div", {
      className: "claims__product-description"
    }, /*#__PURE__*/React.createElement("p", {
      className: "claims__product-name"
    }, productName), /*#__PURE__*/React.createElement("p", {
      className: "claims__product-option-label"
    }, optionType !== 'PRODUCT_ONLY' && /*#__PURE__*/React.createElement(_components_OptionLabel__WEBPACK_IMPORTED_MODULE_2__["default"], {
      optionName: optionName,
      optionValue: optionValue,
      optionInputs: optionInputs
    })), /*#__PURE__*/React.createElement("div", {
      className: "claims__product-bottom"
    }, /*#__PURE__*/React.createElement("div", {
      className: "claims__product-tag"
    }, /*#__PURE__*/React.createElement("span", {
      className: "claims__pay-amount-label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "claims__pay-amount"
    }, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.convertToKoreanCurrency)(buyAmt)), " \uC6D0"), /*#__PURE__*/React.createElement("span", {
      className: "highlight"
    }, claimStatusTypeLabel))))), nextActions.map(function (_ref3) {
      var nextActionType = _ref3.nextActionType;
      if (WITHDRAW_ACTION_TYPES.includes(nextActionType)) {
        return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: nextActionType,
          className: "claims__withdraw-btn",
          onClick: function onClick(e) {
            return onWithdrawClaimBtnClick === null || onWithdrawClaimBtnClick === void 0 ? void 0 : onWithdrawClaimBtnClick(e, orderOptionNo, WITHDRAW_ACTION_TYPES_MAP[nextActionType]);
          }
        }, WITHDRAW_ACTION_TYPES_MAP[nextActionType]);
      }
      return /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: nextActionType
      });
    }));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClaimSummary);
ClaimSummary.propTypes = {
  claimYmdt: prop_types__WEBPACK_IMPORTED_MODULE_6__.string,
  orderNo: prop_types__WEBPACK_IMPORTED_MODULE_6__.string,
  claimedOptions: (0,prop_types__WEBPACK_IMPORTED_MODULE_6__.arrayOf)(prop_types__WEBPACK_IMPORTED_MODULE_6__.object),
  onWithdrawClaimBtnClick: prop_types__WEBPACK_IMPORTED_MODULE_6__.func
};

/***/ }),

/***/ "./src/pages/MyPage/Claims/Claims.jsx":
/*!********************************************!*\
  !*** ./src/pages/MyPage/Claims/Claims.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/debounce.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Skeleton/Skeleton.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/claim/MyClaimProvider/MyClaimProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/claim/ClaimProvider/ClaimProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/modal/ModalProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Tabs/TabsProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Tabs/Tabs.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/InfiniteScrollLoader/InfiniteScrollLoader.js");
/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ErrorBoundary */ "./src/components/ErrorBoundary/index.js");
/* harmony import */ var _components_StartYmdSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/StartYmdSelector */ "./src/components/StartYmdSelector/index.js");
/* harmony import */ var _hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useLayoutChanger */ "./src/hooks/useLayoutChanger.js");
/* harmony import */ var _ClaimSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ClaimSummary */ "./src/pages/MyPage/Claims/ClaimSummary.jsx");
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








var PAGE_SIZE = 10;
var CLAIMS_TABS = [['ALL', '전체'], ['RETURN', '반품'], ['EXCHANGE', '교환'], ['CANCEL', '취소']].map(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    value = _ref2[0],
    label = _ref2[1];
  return {
    value: value,
    label: label
  };
});
var ListSkeleton = function ListSkeleton() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, Array(4).fill(null).map(function (_, idx) {
    return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: idx,
      type: "LIST"
    });
  }));
};
var ClaimsContent = function ClaimsContent() {
  var _useMyClaimActionCont = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__.useMyClaimActionContext)(),
    fetchClaims = _useMyClaimActionCont.fetchClaims;
  var _useMyClaimStateConte = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__.useMyClaimStateContext)(),
    claimsWithAccumulation = _useMyClaimStateConte.claimsWithAccumulation,
    totalClaimsCount = _useMyClaimStateConte.totalClaimsCount;
  var _useClaimActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__.useClaimActionContext)(),
    withdrawClaimByOrderOptionNo = _useClaimActionContex.withdrawClaimByOrderOptionNo;
  var _useModalActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__.useModalActionContext)(),
    openAlert = _useModalActionContex.openAlert,
    openConfirm = _useModalActionContex.openConfirm;
  var _useTabsStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__.useTabsStateContext)(),
    currentTab = _useTabsStateContext.currentTab;
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isInfiniteScrollLoaderDisabled = _useState4[0],
    setIsInfiniteScrollLoaderDisabled = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState6 = _slicedToArray(_useState5, 2),
    pageNumber = _useState6[0],
    setPageNumber = _useState6[1];
  var _useErrorBoundaryActi = (0,_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__.useErrorBoundaryActionContext)(),
    catchError = _useErrorBoundaryActi.catchError;
  (0,_hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_3__["default"])({
    hasBackBtnOnHeader: true,
    hasCartBtnOnHeader: true,
    hasBottomNav: true,
    title: '클레임 내역'
  });
  var claimsRequestOption = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var _searchParams$get, _searchParams$get2;
    return {
      claimTypes: currentTab === 'ALL' ? undefined : [currentTab],
      pageSize: PAGE_SIZE,
      startYmd: (_searchParams$get = searchParams.get('startYmd')) !== null && _searchParams$get !== void 0 ? _searchParams$get : '',
      endYmd: (_searchParams$get2 = searchParams.get('endYmd')) !== null && _searchParams$get2 !== void 0 ? _searchParams$get2 : ''
    };
  }, [searchParams, currentTab]);
  var initializeClaims = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((0,lodash_es__WEBPACK_IMPORTED_MODULE_11__["default"])( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(claimsRequestOption) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetchClaims(_objectSpread(_objectSpread({}, claimsRequestOption), {}, {
              pageNumber: 1
            }));
          case 2:
            setPageNumber(1);
            setIsInfiniteScrollLoaderDisabled(false);
            setIsLoading(false);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }(), 500), []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIsLoading(true);
    initializeClaims(claimsRequestOption);
  }, [claimsRequestOption]);
  var handleIntersect = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setIsInfiniteScrollLoaderDisabled(true);
            if (!(totalClaimsCount / claimsRequestOption.pageSize < pageNumber)) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return");
          case 3:
            _context2.next = 5;
            return fetchClaims(_objectSpread(_objectSpread({}, claimsRequestOption), {}, {
              pageNumber: pageNumber + 1
            }));
          case 5:
            setPageNumber(function (pageNumber) {
              return pageNumber + 1;
            });
            setIsInfiniteScrollLoaderDisabled(false);
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleIntersect() {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleWithdrawClaimBtnClick = function handleWithdrawClaimBtnClick(e, orderOptionNo, withdrawTypeLabel) {
    openConfirm({
      message: "".concat(withdrawTypeLabel, "\uB97C \uC9C4\uD589\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"),
      onConfirm: function () {
        var _onConfirm = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return withdrawClaimByOrderOptionNo(orderOptionNo);
              case 3:
                openAlert({
                  message: "\uCCA0\uD68C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
                  onClose: function onClose() {
                    initializeClaims();
                  }
                });
                _context3.next = 9;
                break;
              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                catchError(_context3.t0);
              case 9:
              case "end":
                return _context3.stop();
            }
          }, _callee3, null, [[0, 6]]);
        }));
        function onConfirm() {
          return _onConfirm.apply(this, arguments);
        }
        return onConfirm;
      }(),
      confirmLabel: '신청'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "claims"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "claims__tabs"
  }), /*#__PURE__*/React.createElement("section", {
    className: "claims__content"
  }, /*#__PURE__*/React.createElement(_components_StartYmdSelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "claims__period-select",
    initialOffsetOption: "7d"
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_13__["default"], {
    shows: !isLoading,
    FalsyComponent: /*#__PURE__*/React.createElement(ListSkeleton, null),
    TruthyComponent: /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_13__["default"], {
      shows: Boolean(claimsWithAccumulation === null || claimsWithAccumulation === void 0 ? void 0 : claimsWithAccumulation.length),
      FalsyComponent: /*#__PURE__*/React.createElement("p", {
        className: "claims__no-items bold"
      }, "\uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."),
      TruthyComponent: /*#__PURE__*/React.createElement(React.Fragment, null, claimsWithAccumulation === null || claimsWithAccumulation === void 0 ? void 0 : claimsWithAccumulation.map(function (_ref5) {
        var claimNo = _ref5.claimNo,
          claimYmdt = _ref5.claimYmdt,
          orderNo = _ref5.orderNo,
          claimedOptions = _ref5.claimedOptions;
        return /*#__PURE__*/React.createElement(_ClaimSummary__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: claimNo,
          claimYmdt: claimYmdt,
          orderNo: orderNo,
          claimedOptions: claimedOptions,
          onWithdrawClaimBtnClick: handleWithdrawClaimBtnClick
        });
      }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_14__["default"], {
        onIntersect: handleIntersect,
        disabled: isInfiniteScrollLoaderDisabled
      }))
    })
  })));
};
var Claims = function Claims() {
  var initialTabsState = {
    tabs: CLAIMS_TABS
  };
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    willClaimsBeAccumulated: true
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__["default"], {
    initialState: initialTabsState,
    usesQueryParam: true,
    queryParamKeyName: 'claimType'
  }, /*#__PURE__*/React.createElement(ClaimsContent, null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Claims);

/***/ }),

/***/ "./src/pages/MyPage/Claims/index.js":
/*!******************************************!*\
  !*** ./src/pages/MyPage/Claims/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Claims__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Claims */ "./src/pages/MyPage/Claims/Claims.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Claims__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
//# sourceMappingURL=src_pages_MyPage_Claims_index_js.949b683f11c4d20ca8b3.bundle.js.map