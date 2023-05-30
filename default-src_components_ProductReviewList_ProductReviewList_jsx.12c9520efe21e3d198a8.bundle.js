"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["default-src_components_ProductReviewList_ProductReviewList_jsx"],{

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

/***/ "./src/components/ProductReviewList/ProductReviewItem.jsx":
/*!****************************************************************!*\
  !*** ./src/components/ProductReviewList/ProductReviewItem.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/ProductReviewProvider/ProductReviewProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/ProductReviewFormProvider/ProductReviewFormProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/modal/ModalProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/RatingStar/RatingStar.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/IconBtn/IconBtn.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _constants_rate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/rate */ "./src/constants/rate.js");
/* harmony import */ var _FullModal_FullModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FullModal/FullModal */ "./src/components/FullModal/FullModal.jsx");
/* harmony import */ var _ReviewForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ReviewForm */ "./src/components/ReviewForm/index.js");
/* harmony import */ var _Sanitized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Sanitized */ "./src/components/Sanitized/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





// import { useErrorBoundaryActionContext } from '../ErrorBoundary';



var ProductReviewItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function (_ref) {
  var _useMemo;
  var productName = _ref.productName,
    productNo = _ref.productNo,
    _ref$showsProductName = _ref.showsProductName,
    showsProductName = _ref$showsProductName === void 0 ? false : _ref$showsProductName,
    _ref$brandName = _ref.brandName,
    brandName = _ref$brandName === void 0 ? '' : _ref$brandName,
    price = _ref.price,
    mainImageUrl = _ref.mainImageUrl,
    reviewNo = _ref.reviewNo,
    memberId = _ref.memberId,
    updatedDate = _ref.updatedDate,
    content = _ref.content,
    images = _ref.images,
    rate = _ref.rate,
    _ref$optionDisplayLab = _ref.optionDisplayLabel,
    optionDisplayLabel = _ref$optionDisplayLab === void 0 ? '' : _ref$optionDisplayLab,
    _ref$isMine = _ref.isMine,
    isMine = _ref$isMine === void 0 ? false : _ref$isMine,
    onModify = _ref.onModify,
    onDelete = _ref.onDelete;
  var _useProductReviewStat = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__.useProductReviewStateContext)(),
    reviewConfig = _useProductReviewStat.reviewConfig;
  var _useProductReviewForm = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__.useProductReviewFormActionContext)(),
    deleteReviewBy = _useProductReviewForm.deleteReviewBy;
  var _useModalActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__.useModalActionContext)(),
    openConfirm = _useModalActionContex.openConfirm;
  // const { catchError } = useErrorBoundaryActionContext();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isModificationModalOpen = _useState4[0],
    setIsModificationModalOpen = _useState4[1];
  var imageCount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return images.length;
  }, [images]);
  var displayImages = (_useMemo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return isOpen ? images : [images.at(0)];
  }, [images, isOpen])) !== null && _useMemo !== void 0 ? _useMemo : [];
  var handleEditBtnClick = function handleEditBtnClick() {
    setIsModificationModalOpen(true);
  };
  var handleDeleteBtnClick = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return openConfirm({
              message: /*#__PURE__*/React.createElement(React.Fragment, null, "\uC0AD\uC81C \uC2DC \uBCF5\uAD6C\uAC00 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4. ", /*#__PURE__*/React.createElement("br", null), "\uC815\uB9D0 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"),
              onConfirm: function () {
                var _onConfirm = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return deleteReviewBy({
                          productNo: productNo,
                          reviewNo: reviewNo
                        });
                      case 2:
                        _context.next = 4;
                        return onDelete();
                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                function onConfirm() {
                  return _onConfirm.apply(this, arguments);
                }
                return onConfirm;
              }(),
              confirmLabel: '삭제'
            });
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleDeleteBtnClick() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleFormModify = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return onModify();
          case 2:
            setIsModificationModalOpen(false);
          case 3:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function handleFormModify() {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", {
    className: "product-review-item ".concat(isOpen ? 'is-open' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-review-item__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-review-item__rating"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__["default"], {
    score: rate,
    isSmall: true,
    limit: _constants_rate__WEBPACK_IMPORTED_MODULE_2__.RATING_STAR.LIMIT_SCORE
  }), /*#__PURE__*/React.createElement("strong", {
    className: "".concat("product-review-item__score")
  }, rate)), /*#__PURE__*/React.createElement("span", {
    className: "product-review-item__date"
  }, updatedDate)), /*#__PURE__*/React.createElement("div", {
    className: "product-review-item__content"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_10__["default"], {
    shows: imageCount > 0,
    TruthyComponent: /*#__PURE__*/React.createElement("div", {
      className: "product-review-item__image"
    }, /*#__PURE__*/React.createElement("ul", null, displayImages.map(function (image, index) {
      return /*#__PURE__*/React.createElement("li", {
        key: "".concat(index, "_product-review-item-image")
      }, /*#__PURE__*/React.createElement("img", {
        src: image,
        alt: "\uC0C1\uD488 \uD6C4\uAE30 \uC774\uBBF8\uC9C0"
      }));
    })), /*#__PURE__*/React.createElement("span", {
      className: "product-review-item__image-count"
    }, imageCount))
  }), /*#__PURE__*/React.createElement("div", {
    className: "product-review-item__bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-review-item__order-info"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_10__["default"], {
    shows: showsProductName,
    TruthyComponent: /*#__PURE__*/React.createElement("p", {
      className: "product-review-item__product-name"
    }, productName)
  }), /*#__PURE__*/React.createElement("p", {
    className: "product-review-item__member-id"
  }, memberId), /*#__PURE__*/React.createElement("p", {
    className: "product-review-item__brand-name"
  }, brandName), /*#__PURE__*/React.createElement("p", {
    className: "product-review-item__option-value"
  }, optionDisplayLabel), price >= 0 && /*#__PURE__*/React.createElement("p", {
    className: "product-review-item__price"
  }, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.convertToKoreanCurrency)(price), "\uC6D0")), /*#__PURE__*/React.createElement("div", {
    className: "product-review-item__text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-review-item__text-detail"
  }, /*#__PURE__*/React.createElement(_Sanitized__WEBPACK_IMPORTED_MODULE_5__["default"], {
    html: content.replaceAll('\n', '<br />')
  })), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "arrow",
    iconType: "angle-down",
    onClick: function onClick() {
      return setIsOpen(function (prev) {
        return !prev;
      });
    },
    size: "sm",
    hiddenLabel: true,
    label: isOpen ? '리뷰 가리기' : '리뷰 보기'
  })), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_10__["default"], {
    shows: isMine,
    TruthyComponent: /*#__PURE__*/React.createElement("div", {
      className: "product-review-item__btns"
    }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: "\uC218\uC815",
      onClick: handleEditBtnClick
    }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: "\uC0AD\uC81C",
      onClick: handleDeleteBtnClick
    }))
  })))), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_10__["default"], {
    shows: isModificationModalOpen,
    TruthyComponent: /*#__PURE__*/React.createElement(_FullModal_FullModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: reviewConfig.name,
      onClose: function onClose() {
        return setIsModificationModalOpen(false);
      }
    }, /*#__PURE__*/React.createElement(_ReviewForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isRegisterMode: false,
      reviewNo: reviewNo,
      productName: productName,
      productImageUrl: mainImageUrl,
      optionDisplayLabel: optionDisplayLabel,
      content: content,
      reviewImages: images.map(function (image) {
        return {
          originName: image,
          imageUrl: image
        };
      }),
      rate: rate,
      onCancel: function onCancel() {
        setIsModificationModalOpen(false);
      },
      onModify: function onModify() {
        handleFormModify();
      }
    }))
  }));
});
ProductReviewItem.displayName = 'ProductReviewItem';
ProductReviewItem.propTypes = {
  productNo: prop_types__WEBPACK_IMPORTED_MODULE_13__.number.isRequired,
  reviewNo: prop_types__WEBPACK_IMPORTED_MODULE_13__.number.isRequired,
  memberId: prop_types__WEBPACK_IMPORTED_MODULE_13__.string,
  onModify: prop_types__WEBPACK_IMPORTED_MODULE_13__.func.isRequired,
  onDelete: prop_types__WEBPACK_IMPORTED_MODULE_13__.func.isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_13__.string.isRequired,
  images: (0,prop_types__WEBPACK_IMPORTED_MODULE_13__.arrayOf)(prop_types__WEBPACK_IMPORTED_MODULE_13__.string).isRequired,
  rate: prop_types__WEBPACK_IMPORTED_MODULE_13__.number.isRequired,
  mainImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_13__.string,
  productName: prop_types__WEBPACK_IMPORTED_MODULE_13__.string,
  brandName: prop_types__WEBPACK_IMPORTED_MODULE_13__.string,
  price: prop_types__WEBPACK_IMPORTED_MODULE_13__.number,
  optionDisplayLabel: prop_types__WEBPACK_IMPORTED_MODULE_13__.string,
  updatedDate: prop_types__WEBPACK_IMPORTED_MODULE_13__.string,
  isMine: prop_types__WEBPACK_IMPORTED_MODULE_13__.bool,
  showsProductName: prop_types__WEBPACK_IMPORTED_MODULE_13__.bool
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductReviewItem);

/***/ }),

/***/ "./src/components/ProductReviewList/ProductReviewList.jsx":
/*!****************************************************************!*\
  !*** ./src/components/ProductReviewList/ProductReviewList.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewList": () => (/* binding */ ReviewList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Thumbs/ThumbList.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/manage/BoardConfigurationProvider/BoardConfigurationProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/SelectBox/SelectBox.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _ListSkeleton_ListSkeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ListSkeleton/ListSkeleton */ "./src/components/ListSkeleton/ListSkeleton.jsx");
/* harmony import */ var _ProductThumbItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ProductThumbItem */ "./src/components/ProductThumbItem/index.js");
/* harmony import */ var _ReviewAccumulation_ReviewAccumulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ReviewAccumulation/ReviewAccumulation */ "./src/components/ReviewAccumulation/ReviewAccumulation.jsx");
/* harmony import */ var _ProductReviewItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductReviewItem */ "./src/components/ProductReviewList/ProductReviewItem.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _excluded = ["fileUrls"];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var EmptyReviewList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function () {
  return /*#__PURE__*/React.createElement("div", {
    className: "product-board-list__empty"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico ico--exclamation-white-bg"
  }), /*#__PURE__*/React.createElement("span", {
    className: "product-board-list__empty-notes"
  }, "\uC544\uC9C1 \uC791\uC131 \uB41C \uC0C1\uD488\uD6C4\uAE30\uAC00 \uC5C6\uC5B4\uC694."), /*#__PURE__*/React.createElement("p", {
    className: "product-board-list__accumulation-notes"
  }, "\uAD6C\uB9E4 \uD6C4 \uC0C1\uD488\uD6C4\uAE30\uB97C \uB0A8\uACA8\uC8FC\uC138\uC694!", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_ReviewAccumulation_ReviewAccumulation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "product-board-list__accumulation",
    showsIcon: false
  })));
});
EmptyReviewList.displayName = 'EmptyReviewList';
var REVIEW_SORT_TYPE_MAP = {
  BEST_REVIEW: '베스트순',
  REGISTER_YMDT: '등록일순',
  RATING_DESC: '평점높은순',
  RATING_ASC: '평점낮은순'
};
var getOptionDisplayLabel = function getOptionDisplayLabel() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$optionUsed = _ref.optionUsed,
    optionUsed = _ref$optionUsed === void 0 ? true : _ref$optionUsed,
    _ref$optionName = _ref.optionName,
    optionName = _ref$optionName === void 0 ? '' : _ref$optionName,
    _ref$optionValue = _ref.optionValue,
    optionValue = _ref$optionValue === void 0 ? '' : _ref$optionValue;
  return optionUsed && optionName && optionValue ? "".concat(optionName, " : ").concat(optionValue) : '';
};
var ReviewList = function ReviewList(_ref2) {
  var _ref2$reviews = _ref2.reviews,
    reviews = _ref2$reviews === void 0 ? [] : _ref2$reviews,
    onModify = _ref2.onModify,
    onDelete = _ref2.onDelete,
    _ref2$showsProductInf = _ref2.showsProductInfo,
    showsProductInfo = _ref2$showsProductInf === void 0 ? false : _ref2$showsProductInf;
  return /*#__PURE__*/React.createElement("div", {
    className: "product-board-list__items"
  }, /*#__PURE__*/React.createElement("ul", null, reviews.map(function (_ref3) {
    var fileUrls = _ref3.fileUrls,
      review = _objectWithoutProperties(_ref3, _excluded);
    var orderedOption = review.orderedOption;
    var optionDisplayLabel = getOptionDisplayLabel(orderedOption);
    return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: review.reviewNo
    }, showsProductInfo && /*#__PURE__*/React.createElement(_ProductThumbItem__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, review, {
      optionName: orderedOption.optionName,
      optionValue: orderedOption.optionValue
    })), /*#__PURE__*/React.createElement(_ProductReviewItem__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, review, {
      productName: review.productName,
      updatedDate: review.registerYmdt.slice(0, 10),
      mainImageUrl: review.imageUrl,
      brandName: showsProductInfo ? '' : review.brandName,
      optionDisplayLabel: showsProductInfo ? '' : optionDisplayLabel,
      showsProductName: !showsProductInfo,
      isMine: review.myReview,
      images: fileUrls,
      onModify: onModify,
      onDelete: onDelete
    })));
  })));
};
ReviewList.propTypes = {
  onModify: prop_types__WEBPACK_IMPORTED_MODULE_6__.func.isRequired,
  onDelete: prop_types__WEBPACK_IMPORTED_MODULE_6__.func.isRequired,
  reviews: (0,prop_types__WEBPACK_IMPORTED_MODULE_6__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_6__.shape)({
    reviewNo: prop_types__WEBPACK_IMPORTED_MODULE_6__.number.isRequired,
    memberId: prop_types__WEBPACK_IMPORTED_MODULE_6__.string.isRequired,
    updatedDate: prop_types__WEBPACK_IMPORTED_MODULE_6__.string,
    content: prop_types__WEBPACK_IMPORTED_MODULE_6__.string,
    fileUrls: (0,prop_types__WEBPACK_IMPORTED_MODULE_6__.arrayOf)(prop_types__WEBPACK_IMPORTED_MODULE_6__.string),
    rate: prop_types__WEBPACK_IMPORTED_MODULE_6__.number,
    orderedOption: (0,prop_types__WEBPACK_IMPORTED_MODULE_6__.shape)({
      optionName: prop_types__WEBPACK_IMPORTED_MODULE_6__.string,
      optionValue: prop_types__WEBPACK_IMPORTED_MODULE_6__.string
    }),
    myReview: prop_types__WEBPACK_IMPORTED_MODULE_6__.bool
  })),
  showsProductInfo: prop_types__WEBPACK_IMPORTED_MODULE_6__.bool
};
var ProductReviewList = function ProductReviewList(_ref4) {
  var _productReviewConfig$;
  var productNo = _ref4.productNo,
    totalCount = _ref4.totalCount,
    sortType = _ref4.sortType,
    onSelect = _ref4.onSelect,
    reviews = _ref4.reviews,
    onModify = _ref4.onModify,
    onDelete = _ref4.onDelete,
    isLoading = _ref4.isLoading;
  var _useBoardConfiguratio = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__.useBoardConfigurationContextState)(),
    productReviewConfig = _useBoardConfiguratio.boardConfig.productReviewConfig;
  var handleSortTypeSelect = function handleSortTypeSelect(event) {
    onSelect(event);
  };
  var handleReviewFormModify = function handleReviewFormModify() {
    onModify();
  };
  var handleReviewFormDelete = function handleReviewFormDelete() {
    onDelete();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "product-board-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-board-list__search"
  }, /*#__PURE__*/React.createElement("p", null, (_productReviewConfig$ = productReviewConfig === null || productReviewConfig === void 0 ? void 0 : productReviewConfig.name) !== null && _productReviewConfig$ !== void 0 ? _productReviewConfig$ : '상품후기', ' ', /*#__PURE__*/React.createElement("span", {
    className: "product-board-list__total-count"
  }, /*#__PURE__*/React.createElement("em", null, totalCount), "\uAC74")), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: sortType,
    className: "product-board-list__sort-type",
    options: Object.entries(REVIEW_SORT_TYPE_MAP).map(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
        value = _ref6[0],
        label = _ref6[1];
      return {
        value: value,
        label: label
      };
    }),
    onSelect: handleSortTypeSelect
  })), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__["default"], {
    shows: totalCount > 0,
    TruthyComponent: /*#__PURE__*/React.createElement(ReviewList, {
      productNo: productNo,
      reviews: reviews,
      sortType: sortType,
      onModify: handleReviewFormModify,
      onDelete: handleReviewFormDelete
    }),
    FalsyComponent: /*#__PURE__*/React.createElement(EmptyReviewList, null)
  }), /*#__PURE__*/React.createElement(_ListSkeleton_ListSkeleton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isLoading: isLoading
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductReviewList);
ProductReviewList.displayName = 'ProductReviewList';
ProductReviewList.propTypes = {
  productNo: prop_types__WEBPACK_IMPORTED_MODULE_6__.number.isRequired,
  totalCount: prop_types__WEBPACK_IMPORTED_MODULE_6__.number.isRequired,
  sortType: (0,prop_types__WEBPACK_IMPORTED_MODULE_6__.oneOf)(['BEST_REVIEW', 'REGISTER_YMDT', 'RATING_DESC', 'RATING_ASC']).isRequired,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_6__.func.isRequired,
  onModify: prop_types__WEBPACK_IMPORTED_MODULE_6__.func.isRequired,
  onDelete: prop_types__WEBPACK_IMPORTED_MODULE_6__.func.isRequired,
  reviews: (0,prop_types__WEBPACK_IMPORTED_MODULE_6__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_6__.shape)({
    reviewNo: prop_types__WEBPACK_IMPORTED_MODULE_6__.number.isRequired,
    memberId: prop_types__WEBPACK_IMPORTED_MODULE_6__.string.isRequired,
    updatedDate: prop_types__WEBPACK_IMPORTED_MODULE_6__.string,
    content: prop_types__WEBPACK_IMPORTED_MODULE_6__.string,
    fileUrls: (0,prop_types__WEBPACK_IMPORTED_MODULE_6__.arrayOf)(prop_types__WEBPACK_IMPORTED_MODULE_6__.string),
    rate: prop_types__WEBPACK_IMPORTED_MODULE_6__.number,
    orderedOption: (0,prop_types__WEBPACK_IMPORTED_MODULE_6__.shape)({
      optionName: prop_types__WEBPACK_IMPORTED_MODULE_6__.string,
      optionValue: prop_types__WEBPACK_IMPORTED_MODULE_6__.string
    }),
    myReview: prop_types__WEBPACK_IMPORTED_MODULE_6__.bool,
    onEditBtnClick: prop_types__WEBPACK_IMPORTED_MODULE_6__.func,
    onDeleteBtnClick: prop_types__WEBPACK_IMPORTED_MODULE_6__.func
  })).isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_6__.bool
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

/***/ })

}]);
//# sourceMappingURL=default-src_components_ProductReviewList_ProductReviewList_jsx.12c9520efe21e3d198a8.bundle.js.map