"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_pages_OrderDetail_index_js"],{

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

/***/ "./src/components/OrderDetailAddressInfo/OrderDetailAddressInfo.jsx":
/*!**************************************************************************!*\
  !*** ./src/components/OrderDetailAddressInfo/OrderDetailAddressInfo.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Accordion/Accordion.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var OrderDetailAddressInfo = function OrderDetailAddressInfo(_ref) {
  var _ref$receiverName = _ref.receiverName,
    receiverName = _ref$receiverName === void 0 ? '' : _ref$receiverName,
    _ref$receiverZipCd = _ref.receiverZipCd,
    receiverZipCd = _ref$receiverZipCd === void 0 ? '' : _ref$receiverZipCd,
    _ref$receiverAddress = _ref.receiverAddress,
    receiverAddress = _ref$receiverAddress === void 0 ? '' : _ref$receiverAddress,
    _ref$receiverDetailAd = _ref.receiverDetailAddress,
    receiverDetailAddress = _ref$receiverDetailAd === void 0 ? '' : _ref$receiverDetailAd,
    _ref$receiverMobilePh = _ref.receiverMobilePhoneNumber,
    receiverMobilePhoneNumber = _ref$receiverMobilePh === void 0 ? '' : _ref$receiverMobilePh,
    receiverPhoneNumber = _ref.receiverPhoneNumber,
    deliveryMemo = _ref.deliveryMemo;
  return /*#__PURE__*/React.createElement("section", {
    className: "l-panel order-detail-info"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_0__["default"], {
    title: "\uBC30\uC1A1\uC9C0",
    isOpen: true
  }, /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dt", null, "\uBC1B\uB294 \uC0AC\uB78C"), /*#__PURE__*/React.createElement("dd", null, receiverName), /*#__PURE__*/React.createElement("dt", null, "\uC8FC\uC18C"), /*#__PURE__*/React.createElement("dd", null, "(".concat(receiverZipCd, ") ").concat(receiverAddress, " ").concat(receiverDetailAddress)), /*#__PURE__*/React.createElement("dt", null, "\uD734\uB300\uD3F0 \uBC88\uD638"), /*#__PURE__*/React.createElement("dd", null, receiverMobilePhoneNumber), receiverPhoneNumber && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("dt", null, "\uC804\uD654 \uBC88\uD638"), /*#__PURE__*/React.createElement("dd", null, receiverPhoneNumber)), deliveryMemo && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("dt", null, "\uBC30\uC1A1 \uBA54\uBAA8"), /*#__PURE__*/React.createElement("dd", null, deliveryMemo)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderDetailAddressInfo);
OrderDetailAddressInfo.propTypes = {
  receiverName: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  receiverZipCd: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  receiverAddress: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  receiverDetailAddress: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  receiverMobilePhoneNumber: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  receiverPhoneNumber: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  deliveryMemo: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};

/***/ }),

/***/ "./src/components/OrderDetailAddressInfo/index.js":
/*!********************************************************!*\
  !*** ./src/components/OrderDetailAddressInfo/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OrderDetailAddressInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderDetailAddressInfo */ "./src/components/OrderDetailAddressInfo/OrderDetailAddressInfo.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_OrderDetailAddressInfo__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/OrderDetailOrdererInfo/OrderDetailOrdererInfo.jsx":
/*!**************************************************************************!*\
  !*** ./src/components/OrderDetailOrdererInfo/OrderDetailOrdererInfo.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Accordion/Accordion.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var OrderDetailOrdererInfo = function OrderDetailOrdererInfo(_ref) {
  var ordererName = _ref.ordererName,
    ordererEmail = _ref.ordererEmail,
    ordererMobilePhoneNumber = _ref.ordererMobilePhoneNumber;
  return /*#__PURE__*/React.createElement("section", {
    className: "l-panel order-detail-info"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_0__["default"], {
    title: "\uC8FC\uBB38\uC790 \uC815\uBCF4",
    isOpen: true
  }, /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dt", null, "\uC8FC\uBB38\uC790 \uBA85"), /*#__PURE__*/React.createElement("dd", null, ordererName), /*#__PURE__*/React.createElement("dt", null, "\uC774\uBA54\uC77C"), /*#__PURE__*/React.createElement("dd", null, ordererEmail), /*#__PURE__*/React.createElement("dt", null, "\uD734\uB300\uD3F0 \uBC88\uD638"), /*#__PURE__*/React.createElement("dd", null, ordererMobilePhoneNumber))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderDetailOrdererInfo);
OrderDetailOrdererInfo.propTypes = {
  ordererName: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  ordererEmail: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  ordererMobilePhoneNumber: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};

/***/ }),

/***/ "./src/components/OrderDetailOrdererInfo/index.js":
/*!********************************************************!*\
  !*** ./src/components/OrderDetailOrdererInfo/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OrderDetailOrdererInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderDetailOrdererInfo */ "./src/components/OrderDetailOrdererInfo/OrderDetailOrdererInfo.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_OrderDetailOrdererInfo__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/OrderDetailPaymentInfo/OrderDetailPaymentInfo.jsx":
/*!**************************************************************************!*\
  !*** ./src/components/OrderDetailPaymentInfo/OrderDetailPaymentInfo.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/modal/ModalProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _PriceTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PriceTag */ "./src/components/PriceTag/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");





var OrderDetailPaymentInfo = function OrderDetailPaymentInfo(_ref) {
  var _ref$payType = _ref.payType,
    payType = _ref$payType === void 0 ? 'ACCOUNT' : _ref$payType,
    _ref$payTypeLabel = _ref.payTypeLabel,
    payTypeLabel = _ref$payTypeLabel === void 0 ? '무통장입금' : _ref$payTypeLabel,
    _ref$bankName = _ref.bankName,
    bankName = _ref$bankName === void 0 ? '' : _ref$bankName,
    _ref$bankAccount = _ref.bankAccount,
    bankAccount = _ref$bankAccount === void 0 ? '' : _ref$bankAccount,
    _ref$bankDepositorNam = _ref.bankDepositorName,
    bankDepositorName = _ref$bankDepositorNam === void 0 ? '' : _ref$bankDepositorNam,
    _ref$bankAmt = _ref.bankAmt,
    bankAmt = _ref$bankAmt === void 0 ? 0 : _ref$bankAmt,
    _ref$remitterName = _ref.remitterName,
    remitterName = _ref$remitterName === void 0 ? '' : _ref$remitterName,
    _ref$paymentExpiratio = _ref.paymentExpirationYmdt,
    paymentExpirationYmdt = _ref$paymentExpiratio === void 0 ? '' : _ref$paymentExpiratio,
    _ref$totalStandardAmt = _ref.totalStandardAmt,
    totalStandardAmt = _ref$totalStandardAmt === void 0 ? 0 : _ref$totalStandardAmt,
    _ref$totalDeliveryAmt = _ref.totalDeliveryAmt,
    totalDeliveryAmt = _ref$totalDeliveryAmt === void 0 ? 0 : _ref$totalDeliveryAmt,
    _ref$totalDiscountAmt = _ref.totalDiscountAmt,
    totalDiscountAmt = _ref$totalDiscountAmt === void 0 ? 0 : _ref$totalDiscountAmt,
    _ref$subPayAmt = _ref.subPayAmt,
    subPayAmt = _ref$subPayAmt === void 0 ? 0 : _ref$subPayAmt,
    _ref$chargeAmt = _ref.chargeAmt,
    chargeAmt = _ref$chargeAmt === void 0 ? 0 : _ref$chargeAmt,
    _ref$accumulationAmtW = _ref.accumulationAmtWhenBuyConfirm,
    accumulationAmtWhenBuyConfirm = _ref$accumulationAmtW === void 0 ? 0 : _ref$accumulationAmtW;
  var _useModalActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useModalActionContext)(),
    openAlert = _useModalActionContex.openAlert;
  var needsToShowBankInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return _shopby_shared__WEBPACK_IMPORTED_MODULE_1__.PAY_TYPES_THAT_SHOULD_SHOW_BANK_INFO.includes(payType);
  }, [payType]);
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useMallStateContext)(),
    accumulationName = _useMallStateContext.accumulationConfig.accumulationName;
  var priceTagDetails = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return [{
      name: '상품금액 합계',
      amountLabel: (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.convertToKoreanCurrency)(totalStandardAmt)
    }, {
      name: '배송비 합계',
      amountLabel: "+ ".concat((0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.convertToKoreanCurrency)(totalDeliveryAmt))
    }, {
      name: '할인금액 합계',
      amountLabel: "- ".concat((0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.convertToKoreanCurrency)(totalDiscountAmt))
    }, {
      name: "".concat(accumulationName, " \uC0AC\uC6A9"),
      amountLabel: "- ".concat((0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.convertToKoreanCurrency)(subPayAmt))
    }];
  }, [totalStandardAmt, totalDeliveryAmt, totalDiscountAmt, subPayAmt, accumulationName]);
  var handleCopyAccountBtnClick = function handleCopyAccountBtnClick() {
    (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.copyToClipboard)(bankAccount, function () {
      return openAlert({
        message: '계좌번호가 복사되었습니다.'
      });
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "l-panel order-detail-info"
  }, /*#__PURE__*/React.createElement("p", {
    className: "order-detail-info__item-title"
  }, "\uACB0\uC81C\uC815\uBCF4"), /*#__PURE__*/React.createElement("div", {
    className: "order-detail-info__pay-method"
  }, /*#__PURE__*/React.createElement("p", null, payTypeLabel), needsToShowBankInfo && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dt", null, "\uC785\uAE08 \uC740\uD589"), /*#__PURE__*/React.createElement("dd", null, bankName), /*#__PURE__*/React.createElement("dt", null, "\uC785\uAE08 \uACC4\uC88C"), /*#__PURE__*/React.createElement("dd", null, bankAccount), /*#__PURE__*/React.createElement("dt", null, "\uC608\uAE08\uC8FC\uBA85"), /*#__PURE__*/React.createElement("dd", null, bankDepositorName), /*#__PURE__*/React.createElement("dt", null, "\uC785\uAE08 \uAE08\uC561"), /*#__PURE__*/React.createElement("dd", null, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.convertToKoreanCurrency)(bankAmt), "\uC6D0"), /*#__PURE__*/React.createElement("dt", null, "\uC785\uAE08\uC790\uBA85"), /*#__PURE__*/React.createElement("dd", null, remitterName), /*#__PURE__*/React.createElement("dt", null, "\uC785\uAE08 \uAE30\uD55C"), /*#__PURE__*/React.createElement("dd", null, paymentExpirationYmdt, " \uAE4C\uC9C0")), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "order-detail-info__copy-btn",
    label: '계좌번호 복사',
    onClick: handleCopyAccountBtnClick
  }))), /*#__PURE__*/React.createElement(_PriceTag__WEBPACK_IMPORTED_MODULE_2__["default"], {
    finalAmount: {
      amountLabel: (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.convertToKoreanCurrency)(chargeAmt)
    },
    details: priceTagDetails,
    showsBorder: false
  }, /*#__PURE__*/React.createElement("span", {
    className: "order-detail-info__mileage"
  }, "\uAD6C\uB9E4\uD655\uC815 \uC2DC\xA0", /*#__PURE__*/React.createElement("em", null, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.convertToKoreanCurrency)(accumulationAmtWhenBuyConfirm), " ", accumulationName), "\xA0\uC801\uB9BD")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderDetailPaymentInfo);
OrderDetailPaymentInfo.propTypes = {
  payType: prop_types__WEBPACK_IMPORTED_MODULE_6__.string,
  payTypeLabel: prop_types__WEBPACK_IMPORTED_MODULE_6__.string,
  bankName: prop_types__WEBPACK_IMPORTED_MODULE_6__.string,
  bankAccount: prop_types__WEBPACK_IMPORTED_MODULE_6__.string,
  bankDepositorName: prop_types__WEBPACK_IMPORTED_MODULE_6__.string,
  bankAmt: prop_types__WEBPACK_IMPORTED_MODULE_6__.number,
  remitterName: prop_types__WEBPACK_IMPORTED_MODULE_6__.string,
  paymentExpirationYmdt: prop_types__WEBPACK_IMPORTED_MODULE_6__.string,
  totalStandardAmt: prop_types__WEBPACK_IMPORTED_MODULE_6__.number,
  totalDeliveryAmt: prop_types__WEBPACK_IMPORTED_MODULE_6__.number,
  totalDiscountAmt: prop_types__WEBPACK_IMPORTED_MODULE_6__.number,
  subPayAmt: prop_types__WEBPACK_IMPORTED_MODULE_6__.number,
  chargeAmt: prop_types__WEBPACK_IMPORTED_MODULE_6__.number,
  accumulationAmtWhenBuyConfirm: prop_types__WEBPACK_IMPORTED_MODULE_6__.number
};

/***/ }),

/***/ "./src/components/OrderDetailPaymentInfo/index.js":
/*!********************************************************!*\
  !*** ./src/components/OrderDetailPaymentInfo/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OrderDetailPaymentInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderDetailPaymentInfo */ "./src/components/OrderDetailPaymentInfo/OrderDetailPaymentInfo.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_OrderDetailPaymentInfo__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/OrderNoLabel/OrderNoLabel.jsx":
/*!******************************************************!*\
  !*** ./src/components/OrderNoLabel/OrderNoLabel.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var OrderNoLabel = function OrderNoLabel(_ref) {
  var dateLabel = _ref.dateLabel,
    orderNo = _ref.orderNo,
    children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "order-no-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "order-no-label__order-no-wrap"
  }, dateLabel, /*#__PURE__*/React.createElement("span", {
    className: "order-no-label__no"
  }, orderNo)), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderNoLabel);
OrderNoLabel.propTypes = {
  dateLabel: prop_types__WEBPACK_IMPORTED_MODULE_0__.string,
  orderNo: prop_types__WEBPACK_IMPORTED_MODULE_0__.string,
  children: (0,prop_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([prop_types__WEBPACK_IMPORTED_MODULE_0__.node, prop_types__WEBPACK_IMPORTED_MODULE_0__.element])
};

/***/ }),

/***/ "./src/components/OrderNoLabel/index.js":
/*!**********************************************!*\
  !*** ./src/components/OrderNoLabel/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OrderNoLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderNoLabel */ "./src/components/OrderNoLabel/OrderNoLabel.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_OrderNoLabel__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/PriceTag/PriceTag.jsx":
/*!**********************************************!*\
  !*** ./src/components/PriceTag/PriceTag.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



// import('./_price-tag.scss');

// TODO: i18n

/* eslint-disable react/prop-types */
var FinalAmount = function FinalAmount(_ref) {
  var name = _ref.name,
    amountLabel = _ref.amountLabel,
    currencyLabel = _ref.currencyLabel;
  return /*#__PURE__*/React.createElement("dl", {
    className: "price-tag__final-amount"
  }, /*#__PURE__*/React.createElement("dt", null, name), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("em", null, amountLabel), currencyLabel));
};
var PriceDetails = function PriceDetails(_ref2) {
  var details = _ref2.details,
    currencyLabel = _ref2.currencyLabel;
  return /*#__PURE__*/React.createElement("dl", {
    className: "price-tag__details"
  }, details.map(function (_ref3) {
    var name = _ref3.name,
      amountLabel = _ref3.amountLabel;
    return /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: name
    }, /*#__PURE__*/React.createElement("dt", null, name), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("em", null, amountLabel), currencyLabel));
  }));
};
/* eslint-enable react/prop-types */

var PriceTag = function PriceTag(_ref4) {
  var _ref4$finalAmount = _ref4.finalAmount,
    _ref4$finalAmount$nam = _ref4$finalAmount.name,
    name = _ref4$finalAmount$nam === void 0 ? '최종 결제 금액' : _ref4$finalAmount$nam,
    amountLabel = _ref4$finalAmount.amountLabel,
    _ref4$details = _ref4.details,
    details = _ref4$details === void 0 ? [] : _ref4$details,
    _ref4$currencyLabel = _ref4.currencyLabel,
    currencyLabel = _ref4$currencyLabel === void 0 ? '원' : _ref4$currencyLabel,
    _ref4$isUpsideDown = _ref4.isUpsideDown,
    isUpsideDown = _ref4$isUpsideDown === void 0 ? false : _ref4$isUpsideDown,
    _ref4$showsBorder = _ref4.showsBorder,
    showsBorder = _ref4$showsBorder === void 0 ? true : _ref4$showsBorder,
    children = _ref4.children;
  if (isUpsideDown) return /*#__PURE__*/React.createElement("div", {
    className: "price-tag ".concat(showsBorder ? '' : 'price-tag--no-border')
  }, /*#__PURE__*/React.createElement(FinalAmount, {
    name: name,
    amountLabel: amountLabel,
    currencyLabel: currencyLabel
  }), /*#__PURE__*/React.createElement("div", {
    className: "price-tag__division"
  }), /*#__PURE__*/React.createElement(PriceDetails, {
    details: details,
    currencyLabel: currencyLabel
  }), children);
  return /*#__PURE__*/React.createElement("div", {
    className: "price-tag ".concat(showsBorder ? '' : 'price-tag--no-border')
  }, /*#__PURE__*/React.createElement(PriceDetails, {
    details: details,
    currencyLabel: currencyLabel
  }), /*#__PURE__*/React.createElement("div", {
    className: "price-tag__division"
  }), /*#__PURE__*/React.createElement(FinalAmount, {
    name: name,
    amountLabel: amountLabel,
    currencyLabel: currencyLabel
  }), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PriceTag);
PriceTag.propTypes = {
  finalAmount: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.shape)({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
    amountLabel: prop_types__WEBPACK_IMPORTED_MODULE_1__.string.isRequired
  }).isRequired,
  details: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_1__.shape)({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1__.string.isRequired,
    amountLabel: prop_types__WEBPACK_IMPORTED_MODULE_1__.string.isRequired
  })).isRequired,
  currencyLabel: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  isUpsideDown: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  showsBorder: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  children: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([prop_types__WEBPACK_IMPORTED_MODULE_1__.node, prop_types__WEBPACK_IMPORTED_MODULE_1__.element])
};

/***/ }),

/***/ "./src/components/PriceTag/index.js":
/*!******************************************!*\
  !*** ./src/components/PriceTag/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PriceTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PriceTag */ "./src/components/PriceTag/PriceTag.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PriceTag__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/***/ "./src/pages/OrderDetail/ClaimDetailAdditionalPayInfo.jsx":
/*!****************************************************************!*\
  !*** ./src/pages/OrderDetail/ClaimDetailAdditionalPayInfo.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _ClaimOrderOptionLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClaimOrderOptionLabel */ "./src/pages/OrderDetail/ClaimOrderOptionLabel.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var ClaimDetailAdditionalPayInfo = function ClaimDetailAdditionalPayInfo(_ref) {
  var exchangeOrderOption = _ref.exchangeOrderOption,
    exchangeProductTotalAmt = _ref.exchangeProductTotalAmt,
    exchangeDeliveryAmt = _ref.exchangeDeliveryAmt,
    exchangePayAmt = _ref.exchangePayAmt,
    subtractionTotalAmt = _ref.subtractionTotalAmt,
    payTypeLabel = _ref.payTypeLabel;
  return /*#__PURE__*/React.createElement("section", {
    className: "l-panel"
  }, /*#__PURE__*/React.createElement("p", {
    className: "order-detail__section-title"
  }, "\uCD94\uAC00 \uACB0\uC81C \uC815\uBCF4"), /*#__PURE__*/React.createElement("dl", {
    className: "order-detail__section-content"
  }, /*#__PURE__*/React.createElement("dt", null, "\uAD50\uD658 \uCD9C\uACE0 \uC0C1\uD488"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement(_ClaimOrderOptionLabel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    claimOrderOption: exchangeOrderOption
  })), /*#__PURE__*/React.createElement("dt", null, "\uAD50\uD658 \uC0C1\uD488 \uAE08\uC561"), /*#__PURE__*/React.createElement("dd", null, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.convertToKoreanCurrency)(exchangeProductTotalAmt), "\uC6D0"), /*#__PURE__*/React.createElement("dt", null, "\uBC18\uD488/\uAD50\uD658 \uBC30\uC1A1\uBE44"), /*#__PURE__*/React.createElement("dd", null, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.convertToKoreanCurrency)(exchangeDeliveryAmt), "\uC6D0"), /*#__PURE__*/React.createElement("dt", null, "\uCC28\uAC10 \uAE08\uC561"), /*#__PURE__*/React.createElement("dd", null, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.convertToKoreanCurrency)(subtractionTotalAmt), "\uC6D0"), /*#__PURE__*/React.createElement("dt", null, "\uCD94\uAC00 \uACB0\uC81C \uAE08\uC561"), /*#__PURE__*/React.createElement("dd", null, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.convertToKoreanCurrency)(exchangePayAmt), "\uC6D0"), /*#__PURE__*/React.createElement("dt", null, "\uACB0\uC81C \uC218\uB2E8"), /*#__PURE__*/React.createElement("dd", null, payTypeLabel)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClaimDetailAdditionalPayInfo);
ClaimDetailAdditionalPayInfo.propTypes = {
  exchangeOrderOption: prop_types__WEBPACK_IMPORTED_MODULE_2__.object,
  exchangeProductTotalAmt: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  exchangeDeliveryAmt: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  exchangePayAmt: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  subtractionTotalAmt: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  payTypeLabel: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
};

/***/ }),

/***/ "./src/pages/OrderDetail/ClaimDetailCollectionInfo.jsx":
/*!*************************************************************!*\
  !*** ./src/pages/OrderDetail/ClaimDetailCollectionInfo.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var ClaimDetailCollectionInfo = function ClaimDetailCollectionInfo(_ref) {
  var returnWay = _ref.returnWay,
    returnerName = _ref.returnerName,
    returnerMobilePhoneNumber = _ref.returnerMobilePhoneNumber,
    returnerPhoneNumber = _ref.returnerPhoneNumber,
    returnNote = _ref.returnNote,
    returnAddress = _ref.returnAddress;
  if (returnWay === 'BUYER_DIRECT_RETURN') return /*#__PURE__*/React.createElement("section", {
    className: "l-panel"
  }, /*#__PURE__*/React.createElement("p", {
    className: "order-detail__section-title"
  }, "\uBC18\uD488 \uC218\uAC70 \uC815\uBCF4"), /*#__PURE__*/React.createElement("dl", {
    className: "order-detail__section-content"
  }, /*#__PURE__*/React.createElement("dt", null, "\uBC18\uD488 \uC218\uAC70 \uBC29\uBC95"), /*#__PURE__*/React.createElement("dd", null, _shopby_shared__WEBPACK_IMPORTED_MODULE_0__.RETURN_WAY_TYPE_MAP[returnWay]), /*#__PURE__*/React.createElement("dt", null, "\uBC18\uD488 \uC811\uC218 \uC815\uBCF4"), /*#__PURE__*/React.createElement("dd", null, returnNote)));
  return /*#__PURE__*/React.createElement("section", {
    className: "l-panel"
  }, /*#__PURE__*/React.createElement("p", {
    className: "order-detail__section-title"
  }, "\uBC18\uD488 \uC218\uAC70 \uC815\uBCF4"), /*#__PURE__*/React.createElement("dl", {
    className: "order-detail__section-content"
  }, /*#__PURE__*/React.createElement("dt", null, "\uBC18\uD488 \uC218\uAC70 \uBC29\uBC95"), /*#__PURE__*/React.createElement("dd", null, _shopby_shared__WEBPACK_IMPORTED_MODULE_0__.RETURN_WAY_TYPE_MAP[returnWay]), /*#__PURE__*/React.createElement("dt", null, "\uBC18\uD488\uC790\uBA85"), /*#__PURE__*/React.createElement("dd", null, returnerName), /*#__PURE__*/React.createElement("dt", null, "\uC218\uAC70\uC9C0 \uC8FC\uC18C"), /*#__PURE__*/React.createElement("dd", null, returnAddress), /*#__PURE__*/React.createElement("dt", null, "\uD734\uB300\uD3F0 \uBC88\uD638"), /*#__PURE__*/React.createElement("dd", null, returnerMobilePhoneNumber), /*#__PURE__*/React.createElement("dt", null, "\uC804\uD654 \uBC88\uD638"), /*#__PURE__*/React.createElement("dd", null, returnerPhoneNumber), /*#__PURE__*/React.createElement("dt", null, "\uC218\uAC70 \uC2DC \uCC38\uACE0\uC0AC\uD56D"), /*#__PURE__*/React.createElement("dd", null, returnNote)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClaimDetailCollectionInfo);
ClaimDetailCollectionInfo.propTypes = {
  returnWay: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)(['BUYER_DIRECT_RETURN', 'SELLER_COLLECT']),
  returnerName: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  returnerMobilePhoneNumber: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  returnerPhoneNumber: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  returnNote: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  returnAddress: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};

/***/ }),

/***/ "./src/pages/OrderDetail/ClaimDetailExchangeDeliveryInfo.jsx":
/*!*******************************************************************!*\
  !*** ./src/pages/OrderDetail/ClaimDetailExchangeDeliveryInfo.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ClaimOrderOptionLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClaimOrderOptionLabel */ "./src/pages/OrderDetail/ClaimOrderOptionLabel.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var ClaimDetailExchangeDeliveryInfo = function ClaimDetailExchangeDeliveryInfo(_ref) {
  var exchangeOrderOption = _ref.exchangeOrderOption,
    receiverName = _ref.receiverName,
    receiverAddress = _ref.receiverAddress,
    receiverMobilePhoneNumber = _ref.receiverMobilePhoneNumber,
    deliveryMemo = _ref.deliveryMemo,
    customsId = _ref.customsId;
  return /*#__PURE__*/React.createElement("section", {
    className: "l-panel"
  }, /*#__PURE__*/React.createElement("p", {
    className: "order-detail__section-title"
  }, "\uAD50\uD658 \uCD9C\uACE0 \uC815\uBCF4"), /*#__PURE__*/React.createElement("dl", {
    className: "order-detail__section-content"
  }, /*#__PURE__*/React.createElement("dt", null, "\uAD50\uD658 \uCD9C\uACE0 \uC0C1\uD488"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement(_ClaimOrderOptionLabel__WEBPACK_IMPORTED_MODULE_0__["default"], {
    claimOrderOption: exchangeOrderOption
  })), /*#__PURE__*/React.createElement("dt", null, "\uC218\uB839\uC790\uBA85"), /*#__PURE__*/React.createElement("dd", null, receiverName), /*#__PURE__*/React.createElement("dt", null, "\uBC30\uC1A1\uC9C0 \uC8FC\uC18C"), /*#__PURE__*/React.createElement("dd", null, receiverAddress), /*#__PURE__*/React.createElement("dt", null, "\uD734\uB300\uD3F0 \uBC88\uD638"), /*#__PURE__*/React.createElement("dd", null, receiverMobilePhoneNumber), /*#__PURE__*/React.createElement("dt", null, "\uBC30\uC1A1 \uBA54\uC2DC\uC9C0"), /*#__PURE__*/React.createElement("dd", null, deliveryMemo), customsId && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("dt", null, "\uAC1C\uC778\uD1B5\uAD00\uACE0\uC720\uBD80\uD638"), /*#__PURE__*/React.createElement("dd", null, customsId))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClaimDetailExchangeDeliveryInfo);
ClaimDetailExchangeDeliveryInfo.propTypes = {
  exchangeOrderOption: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  receiverName: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  receiverAddress: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  receiverMobilePhoneNumber: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  deliveryMemo: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  customsId: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};

/***/ }),

/***/ "./src/pages/OrderDetail/ClaimDetailRefundInfo.jsx":
/*!*********************************************************!*\
  !*** ./src/pages/OrderDetail/ClaimDetailRefundInfo.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _ClaimOrderOptionLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClaimOrderOptionLabel */ "./src/pages/OrderDetail/ClaimOrderOptionLabel.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var ClaimDetailRefundInfo = function ClaimDetailRefundInfo(_ref) {
  var claimClassType = _ref.claimClassType,
    refundOrderOptions = _ref.refundOrderOptions,
    refundProductTotalAmt = _ref.refundProductTotalAmt,
    refundDeliveryAmt = _ref.refundDeliveryAmt,
    subtractionTotalAmt = _ref.subtractionTotalAmt,
    refundSubPayAmt = _ref.refundSubPayAmt,
    refundMainPayAmt = _ref.refundMainPayAmt,
    refundTypeLabel = _ref.refundTypeLabel;
  return /*#__PURE__*/React.createElement("section", {
    className: "l-panel"
  }, /*#__PURE__*/React.createElement("p", {
    className: "order-detail__section-title"
  }, "\uD658\uBD88 \uC815\uBCF4"), /*#__PURE__*/React.createElement("dl", {
    className: "order-detail__section-content"
  }, claimClassType !== 'ORDER_CANCEL' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("dt", null, "\uD658\uBD88 \uC0C1\uD488"), /*#__PURE__*/React.createElement("dd", null, refundOrderOptions.map(function (refundOrderOption, idx) {
    return /*#__PURE__*/React.createElement(_ClaimOrderOptionLabel__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: idx,
      claimOrderOption: refundOrderOption
    });
  }))), /*#__PURE__*/React.createElement("dt", null, "\uD658\uBD88 \uC0C1\uD488 \uAE08\uC561"), /*#__PURE__*/React.createElement("dd", null, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.convertToKoreanCurrency)(refundProductTotalAmt), "\uC6D0"), /*#__PURE__*/React.createElement("dt", null, "\uD658\uBD88 \uBC30\uC1A1\uBE44"), /*#__PURE__*/React.createElement("dd", null, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.convertToKoreanCurrency)(refundDeliveryAmt), "\uC6D0"), /*#__PURE__*/React.createElement("dt", null, "\uD658\uBD88 \uCC28\uAC10 \uAE08\uC561"), /*#__PURE__*/React.createElement("dd", null, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.convertToKoreanCurrency)(subtractionTotalAmt), "\uC6D0"), /*#__PURE__*/React.createElement("dt", null, "\uD658\uBD88 \uC801\uB9BD\uAE08"), /*#__PURE__*/React.createElement("dd", null, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.convertToKoreanCurrency)(refundSubPayAmt), "\uC6D0"), /*#__PURE__*/React.createElement("dt", null, "\uD658\uBD88 \uAE08\uC561"), /*#__PURE__*/React.createElement("dd", null, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.convertToKoreanCurrency)(refundMainPayAmt), "\uC6D0"), /*#__PURE__*/React.createElement("dt", null, "\uD658\uBD88 \uC218\uB2E8"), /*#__PURE__*/React.createElement("dd", null, refundTypeLabel)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClaimDetailRefundInfo);
ClaimDetailRefundInfo.propTypes = {
  claimClassType: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  refundOrderOptions: prop_types__WEBPACK_IMPORTED_MODULE_2__.array,
  refundProductTotalAmt: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  refundDeliveryAmt: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  subtractionTotalAmt: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  refundSubPayAmt: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  refundMainPayAmt: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  refundTypeLabel: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
};

/***/ }),

/***/ "./src/pages/OrderDetail/ClaimOrderOptionLabel.jsx":
/*!*********************************************************!*\
  !*** ./src/pages/OrderDetail/ClaimOrderOptionLabel.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_OptionLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/OptionLabel */ "./src/components/OptionLabel/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var ClaimOrderOptionLabel = function ClaimOrderOptionLabel(_ref) {
  var claimOrderOption = _ref.claimOrderOption;
  var optionInputs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (!claimOrderOption.userInputTextStr) return [];
    return claimOrderOption.userInputTextStr.split('|').map(function (token) {
      var _token$split = token.split(' : '),
        _token$split2 = _slicedToArray(_token$split, 2),
        inputLabel = _token$split2[0],
        inputValue = _token$split2[1];
      return {
        inputLabel: inputLabel,
        inputValue: inputValue
      };
    });
  }, [claimOrderOption.userInputTextStr]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "(\uC218\uB7C9: ", claimOrderOption.orderCnt, "\uAC1C) ", claimOrderOption.productName), /*#__PURE__*/React.createElement(_components_OptionLabel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    optionName: claimOrderOption.optionName,
    optionValue: claimOrderOption.optionValue,
    optionInputs: optionInputs
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClaimOrderOptionLabel);
ClaimOrderOptionLabel.propTypes = {
  claimOrderOption: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.shape)({
    productName: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    optionName: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    optionValue: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    orderCnt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    useInputTextStr: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }).isRequired
};

/***/ }),

/***/ "./src/pages/OrderDetail/NextActionButton.jsx":
/*!****************************************************!*\
  !*** ./src/pages/OrderDetail/NextActionButton.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/modal/ModalProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/claim/ClaimProvider/ClaimProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/order/MyOrderProvider/MyOrderProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/ProductReviewFormProvider/ProductReviewFormProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/ProductReviewProvider/ProductReviewProvider.js");
/* harmony import */ var _components_FullModal_FullModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/FullModal/FullModal */ "./src/components/FullModal/FullModal.jsx");
/* harmony import */ var _components_ReviewForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ReviewForm */ "./src/components/ReviewForm/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["isOpen", "onClose"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var ReviewFormModal = function ReviewFormModal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    props = _objectWithoutProperties(_ref, _excluded);
  var handleSubmit = function handleSubmit() {
    onClose();
  };
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], {
    shows: isOpen,
    TruthyComponent: /*#__PURE__*/React.createElement(_components_FullModal_FullModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "\uC0C1\uD488\uD6C4\uAE30"
    }, /*#__PURE__*/React.createElement(_components_ReviewForm__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      isRegisterMode: true,
      onSubmit: handleSubmit,
      onCancel: onClose
    }, props)))
  });
};
ReviewFormModal.propTypes = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_4__.bool,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_4__.func
};
var NextActionButton = function NextActionButton(_ref2) {
  var orderStatusType = _ref2.orderStatusType,
    nextActionType = _ref2.nextActionType,
    trackingDeliveryUri = _ref2.trackingDeliveryUri,
    productNo = _ref2.productNo,
    optionNo = _ref2.optionNo,
    orderOptionNo = _ref2.orderOptionNo,
    orderNo = _ref2.orderNo,
    className = _ref2.className,
    productName = _ref2.productName,
    productImageUrl = _ref2.productImageUrl,
    optionName = _ref2.optionName,
    optionValue = _ref2.optionValue;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  var _useModalActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__.useModalActionContext)(),
    openAlert = _useModalActionContex.openAlert,
    openConfirm = _useModalActionContex.openConfirm;
  var _useClaimActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__.useClaimActionContext)(),
    withdrawClaimByOrderOptionNo = _useClaimActionContex.withdrawClaimByOrderOptionNo,
    cancelOrder = _useClaimActionContex.cancelOrder;
  var _useMyOrderActionCont = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__.useMyOrderActionContext)(),
    confirmOrder = _useMyOrderActionCont.confirmOrder,
    fetchOrderDetail = _useMyOrderActionCont.fetchOrderDetail;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var nextAction = {
    CANCEL_ALL: {
      label: "전체 주문 취소",
      execute: function execute() {
        openConfirm({
          message: "전체 주문을 취소하시겠습니까?",
          onConfirm: function () {
            var _onConfirm = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return cancelOrder(orderNo);
                  case 2:
                    openAlert({
                      message: "전체 주문 취소가 완료되었습니다.",
                      onClose: function onClose() {
                        return fetchOrderDetail(orderNo);
                      }
                    });
                  case 3:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            function onConfirm() {
              return _onConfirm.apply(this, arguments);
            }
            return onConfirm;
          }()
        });
      }
    },
    CANCEL: {
      label: "취소 신청",
      execute: function execute() {
        navigate("/claim/".concat(orderOptionNo, "?claimType=CANCEL"));
      }
    },
    EXCHANGE: {
      label: "교환 신청",
      execute: function execute() {
        navigate("/claim/".concat(orderOptionNo, "?claimType=EXCHANGE"));
      }
    },
    RETURN: {
      label: "반품 신청",
      execute: function execute() {
        navigate("/claim/".concat(orderOptionNo, "?claimType=RETURN"));
      }
    },
    WITHDRAW_CANCEL: {
      label: "취소신청 철회",
      execute: function execute() {
        openConfirm({
          message: "취소 신청을 철회하시겠습니까?",
          onConfirm: function () {
            var _onConfirm2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return withdrawClaimByOrderOptionNo(orderOptionNo.toString());
                  case 2:
                    openAlert({
                      message: "취소신청 철회가 완료되었습니다.",
                      onClose: function onClose() {
                        return fetchOrderDetail(orderNo);
                      }
                    });
                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            function onConfirm() {
              return _onConfirm2.apply(this, arguments);
            }
            return onConfirm;
          }()
        });
      }
    },
    WITHDRAW_EXCHANGE: {
      label: "교환 취소",
      execute: function execute() {
        openConfirm({
          message: "교환 신청을 철회하시겠습니까?",
          onConfirm: function () {
            var _onConfirm3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return withdrawClaimByOrderOptionNo(orderOptionNo.toString());
                  case 2:
                    openAlert({
                      message: "교환 신청 철회가 완료되었습니다.",
                      onClose: function onClose() {
                        return fetchOrderDetail(orderNo);
                      }
                    });
                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            function onConfirm() {
              return _onConfirm3.apply(this, arguments);
            }
            return onConfirm;
          }()
        });
      }
    },
    WITHDRAW_RETURN: {
      label: "반품 취소",
      execute: function execute() {
        openConfirm({
          message: "반품 신청을 철회하시겠습니까?",
          onConfirm: function () {
            var _onConfirm4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return withdrawClaimByOrderOptionNo(orderOptionNo.toString());
                  case 2:
                    openAlert({
                      message: "반품 신청 철회가 완료되었습니다.",
                      onClose: function onClose() {
                        return fetchOrderDetail(orderNo);
                      }
                    });
                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4);
            }));
            function onConfirm() {
              return _onConfirm4.apply(this, arguments);
            }
            return onConfirm;
          }()
        });
      }
    },
    VIEW_DELIVERY: {
      label: "배송 조회",
      execute: function execute() {
        window.open(trackingDeliveryUri, "_blank");
      }
    },
    CONFIRM_ORDER: {
      label: "구매 확정",
      execute: function () {
        var _execute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return confirmOrder(orderOptionNo.toString());
              case 2:
                openAlert({
                  message: "구매확정 처리되었습니다.",
                  onClose: function onClose() {
                    return fetchOrderDetail(orderNo);
                  }
                });
              case 3:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }));
        function execute() {
          return _execute.apply(this, arguments);
        }
        return execute;
      }()
    },
    WRITE_REVIEW: {
      label: "후기 작성",
      execute: function execute() {
        setIsOpen(true);
      }
    }
    // 현 스펙 제외
    // CHANGE_ADDRESS: {
    //   label: '',
    //   execute: () => {

    //   }
    // VIEW_CLAIM: {
    //   label: '',
    //   execute: () => {

    //   }
    // },
    // },
    // ISSUE_CASH_RECEIPT: {
    //   label: '',
    //   execute: () => {

    //   }
    // },
    // VIEW_RECEIPT: {
    //   label: '',
    //   execute: () => {

    //   }
    // },
    // DELIVERY_DONE: {
    //   label: '',
    //   execute: () => {

    //   }
    // },
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: className,
    onClick: function onClick() {
      var _nextAction$nextActio;
      return (_nextAction$nextActio = nextAction[nextActionType]) === null || _nextAction$nextActio === void 0 ? void 0 : _nextAction$nextActio.execute();
    }
  }, nextAction[nextActionType].label), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_11__["default"], {
    productNo: productNo
  }, /*#__PURE__*/React.createElement(ReviewFormModal, {
    isOpen: isOpen,
    productNo: productNo,
    productName: productName,
    productImageUrl: productImageUrl,
    optionNo: optionNo,
    orderOptionNo: orderOptionNo,
    orderProductOptionNo: optionNo,
    optionName: optionName,
    optionValue: optionValue,
    orderStatusType: orderStatusType,
    onClose: function onClose() {
      setIsOpen(false);
      fetchOrderDetail(orderNo);
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextActionButton);
NextActionButton.propTypes = {
  nextActionType: (0,prop_types__WEBPACK_IMPORTED_MODULE_4__.oneOfType)(["CANCEL_ALL", "CANCEL", "EXCHANGE", "RETURN", "WITHDRAW_CANCEL", "WITHDRAW_EXCHANGE", "WITHDRAW_RETURN", "VIEW_DELIVERY", "CONFIRM_ORDER", "WRITE_REVIEW"
  // 현 스펙 제외
  // 'VIEW_CLAIM',
  // 'DELIVERY_DONE',
  // 'CHANGE_ADDRESS',
  // 'ISSUE_CASH_RECEIPT',
  // 'VIEW_RECEIPT'
  ]),

  orderStatusType: prop_types__WEBPACK_IMPORTED_MODULE_4__.string,
  trackingDeliveryUri: prop_types__WEBPACK_IMPORTED_MODULE_4__.string,
  productNo: prop_types__WEBPACK_IMPORTED_MODULE_4__.number,
  orderOptionNo: prop_types__WEBPACK_IMPORTED_MODULE_4__.number,
  orderNo: prop_types__WEBPACK_IMPORTED_MODULE_4__.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4__.string,
  productName: prop_types__WEBPACK_IMPORTED_MODULE_4__.string,
  productImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_4__.string,
  optionNo: prop_types__WEBPACK_IMPORTED_MODULE_4__.number,
  optionName: prop_types__WEBPACK_IMPORTED_MODULE_4__.string,
  optionValue: prop_types__WEBPACK_IMPORTED_MODULE_4__.string
};

/***/ }),

/***/ "./src/pages/OrderDetail/OrderDetail.jsx":
/*!***********************************************!*\
  !*** ./src/pages/OrderDetail/OrderDetail.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/order/MyOrderProvider/MyOrderProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/manage/PageScriptsProvider/PageScriptsProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/claim/ClaimProvider/ClaimProvider.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _components_OrderDetailAddressInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/OrderDetailAddressInfo */ "./src/components/OrderDetailAddressInfo/index.js");
/* harmony import */ var _components_OrderDetailOrdererInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/OrderDetailOrdererInfo */ "./src/components/OrderDetailOrdererInfo/index.js");
/* harmony import */ var _components_OrderDetailPaymentInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/OrderDetailPaymentInfo */ "./src/components/OrderDetailPaymentInfo/index.js");
/* harmony import */ var _components_OrderNoLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/OrderNoLabel */ "./src/components/OrderNoLabel/index.js");
/* harmony import */ var _hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useLayoutChanger */ "./src/hooks/useLayoutChanger.js");
/* harmony import */ var _ClaimDetailAdditionalPayInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ClaimDetailAdditionalPayInfo */ "./src/pages/OrderDetail/ClaimDetailAdditionalPayInfo.jsx");
/* harmony import */ var _ClaimDetailCollectionInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ClaimDetailCollectionInfo */ "./src/pages/OrderDetail/ClaimDetailCollectionInfo.jsx");
/* harmony import */ var _ClaimDetailExchangeDeliveryInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ClaimDetailExchangeDeliveryInfo */ "./src/pages/OrderDetail/ClaimDetailExchangeDeliveryInfo.jsx");
/* harmony import */ var _ClaimDetailRefundInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ClaimDetailRefundInfo */ "./src/pages/OrderDetail/ClaimDetailRefundInfo.jsx");
/* harmony import */ var _NextActionButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NextActionButton */ "./src/pages/OrderDetail/NextActionButton.jsx");
/* harmony import */ var _OrderDetailProductTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./OrderDetailProductTable */ "./src/pages/OrderDetail/OrderDetailProductTable.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");















var OrderDetailContent = function OrderDetailContent() {
  var _orderDetail$orderYmd, _orderDetail$orderer$, _orderDetail$orderer$2, _orderDetail$orderer$3, _orderDetail$shipping, _orderDetail$shipping2, _orderDetail$shipping3, _orderDetail$shipping4, _orderDetail$shipping5, _orderDetail$shipping6, _orderDetail$delivery, _orderDetail$payInfo$, _orderDetail$payInfo$2, _orderDetail$payInfo$3, _orderDetail$payInfo$4, _orderDetail$payInfo$5, _orderDetail$payInfo$6, _orderDetail$addition, _orderDetail$refundIn;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useNavigate)();
  var _useMyOrderStateConte = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_14__.useMyOrderStateContext)(),
    orderDetail = _useMyOrderStateConte.orderDetail,
    flattenedOrderOptions = _useMyOrderStateConte.flattenedOrderOptions;
  var _useMyOrderActionCont = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_14__.useMyOrderActionContext)(),
    fetchOrderDetail = _useMyOrderActionCont.fetchOrderDetail;
  var _usePageScriptsAction = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_15__.usePageScriptsActionContext)(),
    applyPageScripts = _usePageScriptsAction.applyPageScripts;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useParams)(),
    orderNo = _useParams.orderNo;
  var _useMemo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
      var _orderDetail$lastOrde;
      return (_orderDetail$lastOrde = orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.lastOrderAmount) !== null && _orderDetail$lastOrde !== void 0 ? _orderDetail$lastOrde : {};
    }, [orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.lastOrderAmount]),
    deliveryAmt = _useMemo.deliveryAmt,
    remoteDeliveryAmt = _useMemo.remoteDeliveryAmt,
    cartCouponDiscountAmt = _useMemo.cartCouponDiscountAmt,
    productCouponDiscountAmt = _useMemo.productCouponDiscountAmt,
    additionalDiscountAmt = _useMemo.additionalDiscountAmt,
    immediateDiscountAmt = _useMemo.immediateDiscountAmt,
    standardAmt = _useMemo.standardAmt;
  var totalDeliveryAmt = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return deliveryAmt + remoteDeliveryAmt;
  }, [deliveryAmt, remoteDeliveryAmt]);
  var totalDiscountAmt = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return cartCouponDiscountAmt + productCouponDiscountAmt + additionalDiscountAmt + immediateDiscountAmt;
  }, [cartCouponDiscountAmt, productCouponDiscountAmt, additionalDiscountAmt, immediateDiscountAmt]);
  (0,_hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_6__["default"])({
    title: '주문/배송 상세',
    hasBackBtnOnHeader: true
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchOrderDetail(orderNo);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!orderDetail) return;
    applyPageScripts('ORDER_DETAIL', {
      order: orderDetail
    });
  }, [orderDetail]);
  var handleListBtnClick = function handleListBtnClick() {
    navigate('/orders');
  };
  var canCancelAll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.nextActions.find(function (_ref) {
      var nextActionType = _ref.nextActionType;
      return nextActionType === 'CANCEL_ALL';
    })) && flattenedOrderOptions.every(function (_ref2) {
      var orderStatusType = _ref2.orderStatusType;
      return orderStatusType === 'DEPOSIT_WAIT';
    });
  }, [orderDetail]);
  return /*#__PURE__*/React.createElement("div", {
    className: "order-detail"
  }, /*#__PURE__*/React.createElement(_components_OrderNoLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    dateLabel: (_orderDetail$orderYmd = orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.orderYmdt.slice(0, 10)) !== null && _orderDetail$orderYmd !== void 0 ? _orderDetail$orderYmd : '',
    orderNo: orderNo
  }, canCancelAll && /*#__PURE__*/React.createElement(_NextActionButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "order-detail__cancel-all-btn",
    orderNo: orderNo,
    nextActionType: 'CANCEL_ALL'
  })), /*#__PURE__*/React.createElement(_OrderDetailProductTable__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/React.createElement(_components_OrderDetailOrdererInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ordererName: (_orderDetail$orderer$ = orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.orderer.ordererName) !== null && _orderDetail$orderer$ !== void 0 ? _orderDetail$orderer$ : '',
    ordererEmail: (_orderDetail$orderer$2 = orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.orderer.ordererEmail) !== null && _orderDetail$orderer$2 !== void 0 ? _orderDetail$orderer$2 : '',
    ordererMobilePhoneNumber: (_orderDetail$orderer$3 = orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.orderer.ordererContact1) !== null && _orderDetail$orderer$3 !== void 0 ? _orderDetail$orderer$3 : ''
  }), /*#__PURE__*/React.createElement(_components_OrderDetailAddressInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    receiverName: (_orderDetail$shipping = orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.shippingAddress.receiverName) !== null && _orderDetail$shipping !== void 0 ? _orderDetail$shipping : '',
    receiverZipCd: (_orderDetail$shipping2 = orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.shippingAddress.receiverZipCd) !== null && _orderDetail$shipping2 !== void 0 ? _orderDetail$shipping2 : '',
    receiverAddress: (_orderDetail$shipping3 = orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.shippingAddress.receiverAddress) !== null && _orderDetail$shipping3 !== void 0 ? _orderDetail$shipping3 : '',
    receiverDetailAddress: (_orderDetail$shipping4 = orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.shippingAddress.receiverDetailAddress) !== null && _orderDetail$shipping4 !== void 0 ? _orderDetail$shipping4 : '',
    receiverMobilePhoneNumber: (_orderDetail$shipping5 = orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.shippingAddress.receiverContact1) !== null && _orderDetail$shipping5 !== void 0 ? _orderDetail$shipping5 : '',
    receiverPhoneNumber: (_orderDetail$shipping6 = orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.shippingAddress.receiverContact2) !== null && _orderDetail$shipping6 !== void 0 ? _orderDetail$shipping6 : '',
    deliveryMemo: (_orderDetail$delivery = orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.deliveryMemo) !== null && _orderDetail$delivery !== void 0 ? _orderDetail$delivery : ''
  }), /*#__PURE__*/React.createElement(_components_OrderDetailPaymentInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    payType: orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.payType,
    payTypeLabel: orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.payTypeLabel,
    bankName: orderDetail === null || orderDetail === void 0 ? void 0 : (_orderDetail$payInfo$ = orderDetail.payInfo.bankInfo) === null || _orderDetail$payInfo$ === void 0 ? void 0 : _orderDetail$payInfo$.bankName,
    bankAccount: orderDetail === null || orderDetail === void 0 ? void 0 : (_orderDetail$payInfo$2 = orderDetail.payInfo.bankInfo) === null || _orderDetail$payInfo$2 === void 0 ? void 0 : _orderDetail$payInfo$2.account,
    bankDepositorName: orderDetail === null || orderDetail === void 0 ? void 0 : (_orderDetail$payInfo$3 = orderDetail.payInfo.bankInfo) === null || _orderDetail$payInfo$3 === void 0 ? void 0 : _orderDetail$payInfo$3.depositorName,
    bankAmt: orderDetail === null || orderDetail === void 0 ? void 0 : (_orderDetail$payInfo$4 = orderDetail.payInfo.bankInfo) === null || _orderDetail$payInfo$4 === void 0 ? void 0 : _orderDetail$payInfo$4.bankAmt,
    remitterName: orderDetail === null || orderDetail === void 0 ? void 0 : (_orderDetail$payInfo$5 = orderDetail.payInfo.bankInfo) === null || _orderDetail$payInfo$5 === void 0 ? void 0 : _orderDetail$payInfo$5.remitterName,
    paymentExpirationYmdt: orderDetail === null || orderDetail === void 0 ? void 0 : (_orderDetail$payInfo$6 = orderDetail.payInfo.bankInfo) === null || _orderDetail$payInfo$6 === void 0 ? void 0 : _orderDetail$payInfo$6.paymentExpirationYmdt,
    totalStandardAmt: standardAmt,
    totalDeliveryAmt: totalDeliveryAmt,
    totalDiscountAmt: totalDiscountAmt,
    subPayAmt: orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.lastOrderAmount.subPayAmt,
    chargeAmt: orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.lastOrderAmount.chargeAmt,
    accumulationAmtWhenBuyConfirm: orderDetail === null || orderDetail === void 0 ? void 0 : orderDetail.accumulationAmtWhenBuyConfirm
  }), orderDetail === null || orderDetail === void 0 ? void 0 : (_orderDetail$addition = orderDetail.additionalPayInfos) === null || _orderDetail$addition === void 0 ? void 0 : _orderDetail$addition.map(function (_ref3) {
    var claimNo = _ref3.claimNo,
      exchangeOrderOption = _ref3.exchangeOrderOption,
      productTotalAmt = _ref3.productAmtInfo.totalAmt,
      deliveryTotalAmt = _ref3.deliveryAmtInfo.totalAmt,
      exchangePayAmt = _ref3.exchangePayAmt,
      subtractionTotalAmt = _ref3.subtractionAmtInfo.totalAmt,
      payType = _ref3.payType,
      returnWayType = _ref3.returnWayType,
      returnAddress = _ref3.returnAddress,
      exchangeAddress = _ref3.exchangeAddress;
    return /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: claimNo
    }, /*#__PURE__*/React.createElement(_ClaimDetailAdditionalPayInfo__WEBPACK_IMPORTED_MODULE_7__["default"], {
      exchangeOrderOption: exchangeOrderOption,
      exchangeProductTotalAmt: productTotalAmt,
      exchangeDeliveryAmt: deliveryTotalAmt,
      exchangePayAmt: exchangePayAmt,
      subtractionTotalAmt: subtractionTotalAmt,
      payTypeLabel: _shopby_shared__WEBPACK_IMPORTED_MODULE_1__.PAY_TYPE_MAP[payType]
    }), /*#__PURE__*/React.createElement(_ClaimDetailCollectionInfo__WEBPACK_IMPORTED_MODULE_8__["default"], {
      returnWay: returnWayType,
      returnerName: returnAddress.name,
      returnerMobilePhoneNumber: returnAddress.contact1,
      returnerPhoneNumber: returnAddress.contact2,
      returnNote: returnAddress.note,
      returnAddress: returnAddress.addressStr
    }), /*#__PURE__*/React.createElement(_ClaimDetailExchangeDeliveryInfo__WEBPACK_IMPORTED_MODULE_9__["default"], {
      exchangeOrderOption: exchangeOrderOption,
      receiverName: exchangeAddress.name,
      receiverAddress: exchangeAddress.addressStr,
      receiverMobilePhoneNumber: exchangeAddress.contact1,
      deliveryMemo: exchangeAddress.note,
      customsId: exchangeAddress.customsIdNumber
    }));
  }), orderDetail === null || orderDetail === void 0 ? void 0 : (_orderDetail$refundIn = orderDetail.refundInfos) === null || _orderDetail$refundIn === void 0 ? void 0 : _orderDetail$refundIn.map(function (_ref4) {
    var claimNo = _ref4.claimNo,
      refundType = _ref4.refundType,
      returnWayType = _ref4.returnWayType,
      returnAddress = _ref4.returnAddress,
      exchangeAddress = _ref4.exchangeAddress,
      refundOrderOptions = _ref4.refundOrderOptions,
      productTotalAmt = _ref4.productAmtInfo.totalAmt,
      deliveryTotalAmt = _ref4.deliveryAmtInfo.totalAmt,
      subtractionTotalAmt = _ref4.subtractionAmtInfo.totalAmt,
      refundSubPayAmt = _ref4.refundSubPayAmt,
      refundMainPayAmt = _ref4.refundMainPayAmt,
      refundTypeLabel = _ref4.refundTypeLabel,
      exchangeOrderOption = _ref4.exchangeOrderOption;
    return /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: claimNo
    }, refundType !== 'ZERO_REFUND' && /*#__PURE__*/React.createElement(_ClaimDetailRefundInfo__WEBPACK_IMPORTED_MODULE_10__["default"], {
      refundOrderOptions: refundOrderOptions,
      refundProductTotalAmt: productTotalAmt,
      refundDeliveryAmt: deliveryTotalAmt,
      subtractionTotalAmt: subtractionTotalAmt,
      refundSubPayAmt: refundSubPayAmt,
      refundMainPayAmt: refundMainPayAmt,
      refundTypeLabel: refundTypeLabel
    }), returnAddress && /*#__PURE__*/React.createElement(_ClaimDetailCollectionInfo__WEBPACK_IMPORTED_MODULE_8__["default"], {
      returnWay: returnWayType,
      returnerName: returnAddress.name,
      returnerMobilePhoneNumber: returnAddress.contact1,
      returnerPhoneNumber: returnAddress.contact2,
      returnNote: returnAddress.note,
      returnAddress: returnAddress.addressStr
    }), exchangeAddress && /*#__PURE__*/React.createElement(_ClaimDetailExchangeDeliveryInfo__WEBPACK_IMPORTED_MODULE_9__["default"], {
      exchangeOrderOption: exchangeOrderOption,
      receiverName: exchangeAddress.name,
      receiverAddress: exchangeAddress.addressStr,
      receiverMobilePhoneNumber: exchangeAddress.contact1,
      deliveryMemo: exchangeAddress.note,
      customsId: exchangeAddress.customsIdNumber
    }));
  }), /*#__PURE__*/React.createElement("section", {
    className: "order-detail__list-btn-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_16__["default"], {
    onClick: handleListBtnClick
  }, "\uBAA9\uB85D \uBCF4\uAE30")));
};
var OrderDetail = function OrderDetail() {
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/React.createElement(OrderDetailContent, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderDetail);

/***/ }),

/***/ "./src/pages/OrderDetail/OrderDetailProductTable.jsx":
/*!***********************************************************!*\
  !*** ./src/pages/OrderDetail/OrderDetailProductTable.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/order/MyOrderProvider/MyOrderProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Thumbs/ThumbList.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _components_ProductThumbItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ProductThumbItem */ "./src/components/ProductThumbItem/index.js");
/* harmony import */ var _NextActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NextActionButton */ "./src/pages/OrderDetail/NextActionButton.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");





// 노출하지 않을 nextActions
var NEXT_ACTIONS_TO_BE_NOT_RENDERED_IN_BUTTON_GROUP = ["CANCEL_ALL", "VIEW_DELIVERY", "VIEW_CLAIM", "DELIVERY_DONE", "CHANGE_ADDRESS", "ISSUE_CASH_RECEIPT", "VIEW_RECEIPT"];

// 하기 array의 순서대로 우선 노출됩니다.
// array에 넣지 않은 값은 우선 노출된 버튼 뒤에 임의 순서로 노출됩니다.
var NEXT_ACTIONS_WITH_PRIORITY = ["CANCEL", "RETURN", "EXCHANGE", "WITHDRAW_CANCEL", "WITHDRAW_EXCHANGE", "WITHDRAW_RETURN", "CONFIRM_ORDER", "WRITE_REVIEW"];
var OrderDetailProductTable = function OrderDetailProductTable() {
  var _useMyOrderStateConte = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useMyOrderStateContext)(),
    flattenedOrderOptions = _useMyOrderStateConte.flattenedOrderOptions;
  return /*#__PURE__*/React.createElement("section", {
    className: "order-detail__product-table l-panel"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__["default"], null, flattenedOrderOptions.map(function (_ref) {
    var imageUrl = _ref.imageUrl,
      brandName = _ref.brandName,
      productName = _ref.productName,
      orderCnt = _ref.orderCnt,
      buyAmt = _ref.price.buyAmt,
      optionName = _ref.optionName,
      optionValue = _ref.optionValue,
      inputs = _ref.inputs,
      optionNo = _ref.optionNo,
      productNo = _ref.productNo,
      nextActions = _ref.nextActions,
      claimStatusTypeLabel = _ref.claimStatusTypeLabel,
      orderStatusType = _ref.orderStatusType,
      orderStatusTypeLabel = _ref.orderStatusTypeLabel,
      orderNo = _ref.orderNo,
      orderOptionNo = _ref.orderOptionNo,
      deliveryCompanyTypeLabel = _ref.deliveryCompanyTypeLabel,
      invoiceNo = _ref.invoiceNo;
    return /*#__PURE__*/React.createElement("div", {
      key: optionNo,
      className: "order-detail__product"
    }, /*#__PURE__*/React.createElement("p", {
      className: "order-detail__product-top-label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "order-detail__status-label"
    }, claimStatusTypeLabel || orderStatusTypeLabel), function () {
      var actionOfViewDelivery = nextActions.find(function (_ref2) {
        var nextActionType = _ref2.nextActionType;
        return nextActionType === "VIEW_DELIVERY";
      });
      if (actionOfViewDelivery) {
        return /*#__PURE__*/React.createElement("span", {
          className: "order-detail__delivery-info"
        }, /*#__PURE__*/React.createElement("span", null, "".concat(deliveryCompanyTypeLabel, " ").concat(invoiceNo)), /*#__PURE__*/React.createElement(_NextActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          productNo: productNo,
          optionNo: optionNo,
          orderOptionNo: orderOptionNo,
          nextActionType: "VIEW_DELIVERY",
          trackingDeliveryUri: actionOfViewDelivery.uri
        }));
      }
      return /*#__PURE__*/React.createElement(React.Fragment, null);
    }()), /*#__PURE__*/React.createElement(_components_ProductThumbItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      productNo: productNo,
      imageUrl: imageUrl,
      brandName: brandName !== null && brandName !== void 0 ? brandName : "",
      productName: productName,
      orderCnt: orderCnt,
      buyAmt: buyAmt,
      optionName: optionName,
      optionValue: optionValue,
      optionInputs: inputs
    }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__["default"], {
      shows: nextActions.length,
      TruthyComponent: /*#__PURE__*/React.createElement("div", {
        className: "order-detail__next-action-btns"
      }, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.sortWithPriority)(nextActions, NEXT_ACTIONS_WITH_PRIORITY, "nextActionType").filter(function (_ref3) {
        var nextActionType = _ref3.nextActionType;
        return !NEXT_ACTIONS_TO_BE_NOT_RENDERED_IN_BUTTON_GROUP.includes(nextActionType);
      }).map(function (_ref4) {
        var nextActionType = _ref4.nextActionType;
        return /*#__PURE__*/React.createElement(_NextActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: nextActionType,
          orderStatusType: orderStatusType,
          nextActionType: nextActionType,
          productNo: productNo,
          productName: productName,
          optionName: optionName,
          optionValue: optionValue,
          orderOptionNo: orderOptionNo,
          orderNo: orderNo,
          optionNo: optionNo,
          productImageUrl: imageUrl
        });
      }))
    }));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderDetailProductTable);

/***/ }),

/***/ "./src/pages/OrderDetail/index.js":
/*!****************************************!*\
  !*** ./src/pages/OrderDetail/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OrderDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderDetail */ "./src/pages/OrderDetail/OrderDetail.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_OrderDetail__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);
//# sourceMappingURL=src_pages_OrderDetail_index_js.2cc2719d142536f7224c.bundle.js.map