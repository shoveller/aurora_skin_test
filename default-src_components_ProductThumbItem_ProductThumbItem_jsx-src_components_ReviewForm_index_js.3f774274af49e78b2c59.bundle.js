"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["default-src_components_ProductThumbItem_ProductThumbItem_jsx-src_components_ReviewForm_index_js"],{

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

/***/ "./src/components/ImageFileUpload/ImageFileUpload.jsx":
/*!************************************************************!*\
  !*** ./src/components/ImageFileUpload/ImageFileUpload.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/storage/ImageFileProvider/ImageFileProvider.js");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorBoundary */ "./src/components/ErrorBoundary/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var ImageFileUpload = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var _ref$images = _ref.images,
    images = _ref$images === void 0 ? [] : _ref$images,
    _ref$limitCount = _ref.limitCount,
    limitCount = _ref$limitCount === void 0 ? Infinity : _ref$limitCount,
    _ref$limitFileSizeInM = _ref.limitFileSizeInMB,
    limitFileSizeInMB = _ref$limitFileSizeInM === void 0 ? Infinity : _ref$limitFileSizeInM,
    verifyImageFiles = _ref.verifyImageFiles,
    onChange = _ref.onChange,
    _ref$accept = _ref.accept,
    accept = _ref$accept === void 0 ? 'image/png,image/jpeg,image/gif,image/jpg,image/bmp' : _ref$accept;
  var _useImageFileActionCo = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__.useImageFileActionContext)(),
    postImages = _useImageFileActionCo.postImages;
  var _useErrorBoundaryActi = (0,_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__.useErrorBoundaryActionContext)(),
    catchError = _useErrorBoundaryActi.catchError;
  var handleInputChange = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var files, _yield$postImages, data, fulfilledImages;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            files = event.target.files;
            verifyImageFiles === null || verifyImageFiles === void 0 ? void 0 : verifyImageFiles(files);
            _context.next = 5;
            return postImages({
              files: files,
              images: images,
              limitFileSizeInMegaBytes: limitFileSizeInMB,
              limitCount: limitCount
            });
          case 5:
            _yield$postImages = _context.sent;
            data = _yield$postImages.data;
            fulfilledImages = data.filter(function (_ref3) {
              var status = _ref3.status;
              return status === 'fulfilled';
            }).map(function (_ref4) {
              var value = _ref4.value;
              return value;
            });
            onChange === null || onChange === void 0 ? void 0 : onChange(fulfilledImages);
            ref.current.value = '';
            _context.next = 15;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            catchError(_context.t0);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 12]]);
    }));
    return function handleInputChange(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("input", {
    hidden: true,
    ref: ref,
    type: "file",
    multiple: true,
    accept: accept,
    onChange: handleInputChange
  });
});
ImageFileUpload.displayName = 'ImageFileUpload';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageFileUpload);
ImageFileUpload.propTypes = {
  images: (0,prop_types__WEBPACK_IMPORTED_MODULE_3__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_3__.shape)({
    imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    originName: prop_types__WEBPACK_IMPORTED_MODULE_3__.string
  })),
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3__.func,
  verifyImageFiles: prop_types__WEBPACK_IMPORTED_MODULE_3__.func,
  limitCount: prop_types__WEBPACK_IMPORTED_MODULE_3__.number,
  limitFileSizeInMB: prop_types__WEBPACK_IMPORTED_MODULE_3__.number,
  accept: prop_types__WEBPACK_IMPORTED_MODULE_3__.string
};

/***/ }),

/***/ "./src/components/ImageFileUpload/index.js":
/*!*************************************************!*\
  !*** ./src/components/ImageFileUpload/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImageFileUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageFileUpload */ "./src/components/ImageFileUpload/ImageFileUpload.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ImageFileUpload__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/***/ "./src/components/ReviewAccumulation/ReviewAccumulation.jsx":
/*!******************************************************************!*\
  !*** ./src/components/ReviewAccumulation/ReviewAccumulation.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var REVIEW_ACCUMULATION_LABEL = {
  reviewsAccumulation: '텍스트후기',
  photoReviewsAccumulation: '포토후기'
};
var ReviewAccumulation = function ReviewAccumulation(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$showsIcon = _ref.showsIcon,
    showsIcon = _ref$showsIcon === void 0 ? true : _ref$showsIcon;
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__.useMallStateContext)(),
    _useMallStateContext$ = _useMallStateContext.accumulationConfig,
    reviewsAccumulationDetail = _useMallStateContext$.reviewsAccumulationDetail,
    unit = _useMallStateContext$.unit,
    useReviewsAccumulation = _useMallStateContext$.useReviewsAccumulation;
  var accumulations = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return Object.entries(reviewsAccumulationDetail).filter(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
        key = _ref3[0];
      return REVIEW_ACCUMULATION_LABEL[key];
    });
  }, [reviewsAccumulationDetail]);
  var accumulationLength = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return accumulations.length;
  }, [accumulations]);
  if (!useReviewsAccumulation) return /*#__PURE__*/React.createElement(React.Fragment, null);
  return /*#__PURE__*/React.createElement("span", {
    className: "review-accumulation ".concat(className !== null && className !== void 0 ? className : '')
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
    shows: showsIcon,
    TruthyComponent: /*#__PURE__*/React.createElement("span", {
      className: "ico ico--p-circle"
    })
  }), accumulations.map(function (_ref4, index) {
    var _ref5 = _slicedToArray(_ref4, 2),
      key = _ref5[0],
      value = _ref5[1];
    var label = REVIEW_ACCUMULATION_LABEL[key];
    return /*#__PURE__*/React.createElement("span", {
      className: "review-accumulation__point",
      key: "".concat(index, "_").concat(label, "_review-summary")
    }, label, " ", /*#__PURE__*/React.createElement("em", null, value), " ", unit, index === accumulationLength - 1 ? '적립' : ' / ');
  }));
};
ReviewAccumulation.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  showsIcon: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewAccumulation);

/***/ }),

/***/ "./src/components/ReviewAccumulation/index.js":
/*!****************************************************!*\
  !*** ./src/components/ReviewAccumulation/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReviewAccumulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReviewAccumulation */ "./src/components/ReviewAccumulation/ReviewAccumulation.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ReviewAccumulation__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/ReviewForm/ReviewForm.jsx":
/*!**************************************************!*\
  !*** ./src/components/ReviewForm/ReviewForm.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/ProductReviewProvider/ProductReviewProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/modal/ModalProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/ProductReviewFormProvider/ProductReviewFormProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/RatingStar/RatingStar.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _constants_rate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/rate */ "./src/constants/rate.js");
/* harmony import */ var _BoardNoticeList_BoardNoticeList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BoardNoticeList/BoardNoticeList */ "./src/components/BoardNoticeList/BoardNoticeList.jsx");
/* harmony import */ var _BoardProductItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BoardProductItem */ "./src/components/BoardProductItem/index.js");
/* harmony import */ var _ReviewAccumulation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ReviewAccumulation */ "./src/components/ReviewAccumulation/index.js");
/* harmony import */ var _ReviewImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReviewImage */ "./src/components/ReviewForm/ReviewImage.jsx");
/* harmony import */ var _ReviewTextArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReviewTextArea */ "./src/components/ReviewForm/ReviewTextArea.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var getAccumulationRewardNoticeTextByPhotoReviewConstraints = function getAccumulationRewardNoticeTextByPhotoReviewConstraints(reviewConfig, reviewDetail) {
  var usePhotoAccumulation = reviewConfig.reviewAccumulationInfo.photoReviewsLength > 0;
  if (!usePhotoAccumulation || !reviewDetail.urls.length) {
    if (reviewConfig.reviewAccumulationInfo.reviewsLength > reviewDetail.content.length) {
      return reviewConfig.expandedReviewConfig.accumulationRewardNoticeText;
    }
    return "";
  }
  if (reviewConfig.reviewAccumulationInfo.photoReviewsLength > reviewDetail.content.length) {
    return reviewConfig.expandedReviewConfig.accumulationRewardNoticeText;
  }
  return "";
};
var getAccumulationRewardNoticeText = function getAccumulationRewardNoticeText(reviewConfig, reviewDetail) {
  var _reviewConfig$expande;
  if (!(reviewConfig !== null && reviewConfig !== void 0 && (_reviewConfig$expande = reviewConfig.expandedReviewConfig) !== null && _reviewConfig$expande !== void 0 && _reviewConfig$expande.accumulationRewardNoticeText)) return "";
  if (!(reviewConfig !== null && reviewConfig !== void 0 && reviewConfig.reviewAccumulationInfo)) return "";
  if (reviewConfig.reviewAccumulationInfo.useYn === "N") return "";
  return getAccumulationRewardNoticeTextByPhotoReviewConstraints(reviewConfig, reviewDetail);
};
var ReviewForm = function ReviewForm(_ref) {
  var _reviewConfig$expande3;
  var _ref$isRegisterMode = _ref.isRegisterMode,
    isRegisterMode = _ref$isRegisterMode === void 0 ? true : _ref$isRegisterMode,
    reviewNo = _ref.reviewNo,
    productNo = _ref.productNo,
    orderOptionNo = _ref.orderOptionNo,
    optionNo = _ref.optionNo,
    productName = _ref.productName,
    productImageUrl = _ref.productImageUrl,
    _ref$reviewImages = _ref.reviewImages,
    reviewImages = _ref$reviewImages === void 0 ? [] : _ref$reviewImages,
    _ref$rate = _ref.rate,
    rate = _ref$rate === void 0 ? _constants_rate__WEBPACK_IMPORTED_MODULE_2__.RATING_STAR.LIMIT_SCORE : _ref$rate,
    _ref$content = _ref.content,
    content = _ref$content === void 0 ? "" : _ref$content,
    optionDisplayLabel = _ref.optionDisplayLabel,
    _ref$optionName = _ref.optionName,
    optionName = _ref$optionName === void 0 ? "" : _ref$optionName,
    _ref$optionValue = _ref.optionValue,
    optionValue = _ref$optionValue === void 0 ? "" : _ref$optionValue,
    orderProductOptionNo = _ref.orderProductOptionNo,
    options = _ref.options,
    onSelect = _ref.onSelect,
    orderStatusType = _ref.orderStatusType,
    onSubmit = _ref.onSubmit,
    onModify = _ref.onModify,
    onCancel = _ref.onCancel;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(content),
    _useState2 = _slicedToArray(_useState, 2),
    reviewContent = _useState2[0],
    setReviewContent = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(rate),
    _useState4 = _slicedToArray(_useState3, 2),
    score = _useState4[0],
    setScore = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(reviewImages),
    _useState6 = _slicedToArray(_useState5, 2),
    images = _useState6[0],
    setImages = _useState6[1];
  var _useProductReviewStat = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__.useProductReviewStateContext)(),
    reviewConfig = _useProductReviewStat.reviewConfig;
  var _useModalActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__.useModalActionContext)(),
    openAlert = _useModalActionContex.openAlert,
    openConfirm = _useModalActionContex.openConfirm;
  var _useProductReviewForm = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_10__.useProductReviewFormActionContext)(),
    postReviewBy = _useProductReviewForm.postReviewBy,
    putReviewBy = _useProductReviewForm.putReviewBy;
  var optionLabel = (optionDisplayLabel !== null && optionDisplayLabel !== void 0 ? optionDisplayLabel : optionName && optionValue) ? "".concat(optionName, ": ").concat(optionValue) : "";
  var reviewRewardNoticeTexts = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var _reviewConfig$expande2;
    if ((_reviewConfig$expande2 = reviewConfig.expandedReviewConfig) !== null && _reviewConfig$expande2 !== void 0 && _reviewConfig$expande2.reviewRewardNoticeText) {
      return [reviewConfig.expandedReviewConfig.reviewRewardNoticeText];
    }
    return [];
  }, [(_reviewConfig$expande3 = reviewConfig.expandedReviewConfig) === null || _reviewConfig$expande3 === void 0 ? void 0 : _reviewConfig$expande3.reviewRewardNoticeText]);
  var handleRatingStarClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref2) {
    var currentTarget = _ref2.currentTarget,
      nativeEvent = _ref2.nativeEvent;
    var _score = (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.calculateRatingScoreByCurrentWidth)({
      offsetX: nativeEvent.offsetX,
      width: currentTarget.offsetWidth
    });
    setScore(_score);
  }, []);
  var handleReviewContentChange = function handleReviewContentChange(content) {
    setReviewContent(content);
  };
  var handleReviewImageChange = function handleReviewImageChange(images) {
    setImages(images);
  };
  var saveReview = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref3) {
      var content, urls, rate, request;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            content = _ref3.content, urls = _ref3.urls, rate = _ref3.rate;
            request = {
              content: content,
              urls: urls,
              rate: rate,
              productNo: productNo,
              optionNo: optionNo,
              orderOptionNo: orderOptionNo
            };
            _context2.next = 4;
            return postReviewBy(request);
          case 4:
            _context2.next = 6;
            return openAlert({
              message: "상품후기가 등록되었습니다.",
              onClose: function () {
                var _onClose = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit();
                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                function onClose() {
                  return _onClose.apply(this, arguments);
                }
                return onClose;
              }()
            });
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function saveReview(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  var modifyReview = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(reviewDetail) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return putReviewBy(_objectSpread({
              reviewNo: reviewNo
            }, reviewDetail));
          case 2:
            openAlert({
              message: "상품후기가 수정되었습니다.",
              onClose: function () {
                var _onClose2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return onModify === null || onModify === void 0 ? void 0 : onModify();
                      case 2:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                function onClose() {
                  return _onClose2.apply(this, arguments);
                }
                return onClose;
              }()
            });
          case 3:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function modifyReview(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();
  var checkConditionsForAccumulation = function checkConditionsForAccumulation(reviewDetail) {
    var text = getAccumulationRewardNoticeText(reviewConfig, reviewDetail);
    var upsertFn = isRegisterMode ? saveReview : modifyReview;
    if (text) {
      openConfirm({
        message: text,
        onConfirm: function onConfirm() {
          upsertFn(reviewDetail);
        }
      });
    } else {
      upsertFn(reviewDetail);
    }
  };
  var handleSubmit = function handleSubmit() {
    if (!reviewContent) {
      openAlert({
        message: "상품후기 내용을 입력해주세요."
      });
      return;
    }
    var reviewDetail = {
      content: reviewContent,
      urls: images.map(function (_ref6) {
        var imageUrl = _ref6.imageUrl;
        return imageUrl;
      }),
      rate: score
    };
    if (!isRegisterMode || orderStatusType === "BUY_CONFIRM") {
      checkConditionsForAccumulation(reviewDetail);
      return;
    }
    openConfirm({
      message: "후기 작성과 함께 구매확정 처리하시겠습니까?",
      onConfirm: function onConfirm() {
        checkConditionsForAccumulation(reviewDetail);
      }
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "board-form review-form"
  }, /*#__PURE__*/React.createElement(_BoardProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    productName: productName,
    optionDisplayLabel: optionLabel,
    productImageUrl: productImageUrl,
    optionNo: orderProductOptionNo,
    options: options,
    onSelect: onSelect
  }), /*#__PURE__*/React.createElement("div", {
    className: "l-panel review-form__content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "review-form__evaluation"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "review-form__title"
  }, "\uC0C1\uD488\uC740 \uB9C8\uC74C\uC5D0 \uB4DC\uC168\uB098\uC694?"), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: handleRatingStarClick,
    score: score,
    limit: _constants_rate__WEBPACK_IMPORTED_MODULE_2__.RATING_STAR.LIMIT_SCORE
  })), /*#__PURE__*/React.createElement(_ReviewTextArea__WEBPACK_IMPORTED_MODULE_7__["default"], {
    content: reviewContent,
    onChange: handleReviewContentChange
  }), /*#__PURE__*/React.createElement(_ReviewImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    images: images,
    onChange: handleReviewImageChange
  }), /*#__PURE__*/React.createElement("div", {
    className: "board-form__button-group"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "board-form__cancel-btn board-form__btn",
    theme: "dark",
    label: "\uCDE8\uC18C",
    onClick: function onClick() {
      return onCancel === null || onCancel === void 0 ? void 0 : onCancel();
    }
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "board-form__modify-btn board-form__btn",
    theme: "caution",
    label: isRegisterMode ? "등록" : "수정",
    onClick: handleSubmit
  })), /*#__PURE__*/React.createElement(_ReviewAccumulation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "review-form__accumulation"
  })), /*#__PURE__*/React.createElement(_BoardNoticeList_BoardNoticeList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    texts: reviewRewardNoticeTexts
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewForm);
ReviewForm.propTypes = {
  productName: prop_types__WEBPACK_IMPORTED_MODULE_13__.string,
  productImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_13__.string,
  productNo: prop_types__WEBPACK_IMPORTED_MODULE_13__.number,
  optionNo: prop_types__WEBPACK_IMPORTED_MODULE_13__.number,
  orderOptionNo: prop_types__WEBPACK_IMPORTED_MODULE_13__.number,
  reviewNo: prop_types__WEBPACK_IMPORTED_MODULE_13__.number,
  isRegisterMode: prop_types__WEBPACK_IMPORTED_MODULE_13__.bool,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_13__.func,
  onModify: prop_types__WEBPACK_IMPORTED_MODULE_13__.func,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_13__.func,
  optionName: prop_types__WEBPACK_IMPORTED_MODULE_13__.string,
  optionValue: prop_types__WEBPACK_IMPORTED_MODULE_13__.string,
  optionDisplayLabel: prop_types__WEBPACK_IMPORTED_MODULE_13__.string,
  ButtonGroup: prop_types__WEBPACK_IMPORTED_MODULE_13__.func,
  reviewImages: (0,prop_types__WEBPACK_IMPORTED_MODULE_13__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_13__.shape)({
    originName: prop_types__WEBPACK_IMPORTED_MODULE_13__.string,
    imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_13__.string
  })),
  rate: prop_types__WEBPACK_IMPORTED_MODULE_13__.number,
  content: prop_types__WEBPACK_IMPORTED_MODULE_13__.string,
  orderStatusType: (0,prop_types__WEBPACK_IMPORTED_MODULE_13__.oneOf)(["DELIVERY_ING", "DELIVERY_DONE", "BUY_CONFIRM"]),
  options: (0,prop_types__WEBPACK_IMPORTED_MODULE_13__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_13__.shape)({
    nonReviewableProduct: prop_types__WEBPACK_IMPORTED_MODULE_13__.bool,
    mallOptionsNo: prop_types__WEBPACK_IMPORTED_MODULE_13__.number,
    orderNo: prop_types__WEBPACK_IMPORTED_MODULE_13__.number,
    orderStatus: (0,prop_types__WEBPACK_IMPORTED_MODULE_13__.oneOf)(["DEPOSIT_WAIT", "PAY_DONE", "PRODUCT_PREPARE", "DELIVERY_PREPARE", "DELIVERY_ING", "DELIVERY_DONE", "BUY_CONFIRM", "CANCEL_DONE", "RETURN_DONE", "EXCHANGE_DONE", "PAY_WAIT", "PAY_CANCEL", "PAY_FAIL", "DELETE", "EXCHANGE_WAIT", "REFUND_DONE", "CANCEL_PROCESSING", "RETURN_PROCESSING", "EXCHANGE_WAITING", "EXCHANGE_PROCESSING"]),
    orderProductOptionNo: prop_types__WEBPACK_IMPORTED_MODULE_13__.number
  })),
  orderProductOptionNo: prop_types__WEBPACK_IMPORTED_MODULE_13__.number,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_13__.func
};

/***/ }),

/***/ "./src/components/ReviewForm/ReviewImage.jsx":
/*!***************************************************!*\
  !*** ./src/components/ReviewForm/ReviewImage.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/ProductReviewProvider/ProductReviewProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/storage/ImageFileProvider/ImageFileProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _constants_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/image */ "./src/constants/image.js");
/* harmony import */ var _ImageFileUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ImageFileUpload */ "./src/components/ImageFileUpload/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





var ReviewImage = function ReviewImage(_ref) {
  var images = _ref.images,
    onChange = _ref.onChange;
  var imageFileUploadRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useProductReviewStat = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useProductReviewStateContext)(),
    reviewConfig = _useProductReviewStat.reviewConfig;
  var handleImageUploadButtonClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    imageFileUploadRef.current.click();
  }, [imageFileUploadRef === null || imageFileUploadRef === void 0 ? void 0 : imageFileUploadRef.current]);
  var handleImagesChange = function handleImagesChange(selectedImages) {
    selectedImages.length > 0 && onChange(function (prev) {
      return [].concat(_toConsumableArray(prev), _toConsumableArray(selectedImages));
    });
  };
  var handleImageDelete = function handleImageDelete(imageUrl) {
    onChange(function (prev) {
      return prev.filter(function (image) {
        return image.imageUrl !== imageUrl;
      });
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", {
    className: "review-form__image-files"
  }, images.map(function (image, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index,
      id: "".concat(index, "_").concat(image.originName),
      className: "review-form__image"
    }, /*#__PURE__*/React.createElement("img", {
      src: "".concat(image.imageUrl, "?").concat(_constants_image__WEBPACK_IMPORTED_MODULE_1__.BOARD_IMAGE.THUMB_NAIL_SIZE),
      alt: image.originName,
      loading: "lazy"
    }), /*#__PURE__*/React.createElement("button", {
      className: "delete",
      onClick: function onClick() {
        return handleImageDelete(image.imageUrl);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "a11y"
    }, "\uCCA8\uBD80 \uC774\uBBF8\uC9C0 \uC0AD\uC81C")));
  })), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__["default"], {
    shows: reviewConfig.canAttach,
    TruthyComponent: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/React.createElement(_ImageFileUpload__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "review-form__file-upload",
      ref: imageFileUploadRef,
      onChange: handleImagesChange,
      images: images,
      limitFileSizeInMB: _constants_image__WEBPACK_IMPORTED_MODULE_1__.REVIEW_IMAGE.LIMIT_MEGA_BYTES,
      limitCount: _constants_image__WEBPACK_IMPORTED_MODULE_1__.REVIEW_IMAGE.LIMIT_COUNT
    })), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "review-form__upload-btn review-form__btn",
      label: "\uC0AC\uC9C4 \uCCA8\uBD80\uD558\uAE30",
      onClick: handleImageUploadButtonClick
    }), /*#__PURE__*/React.createElement("p", {
      className: "review-form__limit-text"
    }, "\uC5C5\uB85C\uB4DC \uC6A9\uB7C9\uC740 ", _constants_image__WEBPACK_IMPORTED_MODULE_1__.REVIEW_IMAGE.LIMIT_MEGA_BYTES, "MB \uC774\uD558\uB85C\uB9CC \uAC00\uB2A5 \uD569\uB2C8\uB2E4."))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewImage);
ReviewImage.propTypes = {
  images: (0,prop_types__WEBPACK_IMPORTED_MODULE_7__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_7__.shape)({
    originName: prop_types__WEBPACK_IMPORTED_MODULE_7__.string,
    imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_7__.string
  })),
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_7__.func
};

/***/ }),

/***/ "./src/components/ReviewForm/ReviewTextArea.jsx":
/*!******************************************************!*\
  !*** ./src/components/ReviewForm/ReviewTextArea.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/ProductReviewProvider/ProductReviewProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/CharacterCounter/CharacterCounter.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var ReviewTextArea = function ReviewTextArea(_ref) {
  var _reviewConfig$expande, _reviewConfig$expande2;
  var content = _ref.content,
    onChange = _ref.onChange;
  var _useProductReviewStat = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_0__.useProductReviewStateContext)(),
    reviewConfig = _useProductReviewStat.reviewConfig;
  var handleReviewContentChange = function handleReviewContentChange(_ref2) {
    var value = _ref2.character.value;
    onChange(value);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "review-form__text-area"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "review-form-text-area",
    name: "review-form-text-area",
    counterType: "CHARACTER",
    textType: "TEXT_AREA",
    placeholder: (_reviewConfig$expande = reviewConfig.expandedReviewConfig) !== null && _reviewConfig$expande !== void 0 && _reviewConfig$expande.writingReviewNoticeText ? (_reviewConfig$expande2 = reviewConfig.expandedReviewConfig) === null || _reviewConfig$expande2 === void 0 ? void 0 : _reviewConfig$expande2.writingReviewNoticeText : '상품후기를 작성해주세요.',
    cols: "30",
    rows: "10",
    value: content,
    valid: "NO_COMMON_SPECIAL",
    onChange: handleReviewContentChange,
    limitCount: {
      character: 1000
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewTextArea);
ReviewTextArea.propTypes = {
  content: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2__.func
};

/***/ }),

/***/ "./src/components/ReviewForm/index.js":
/*!********************************************!*\
  !*** ./src/components/ReviewForm/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReviewForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReviewForm */ "./src/components/ReviewForm/ReviewForm.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ReviewForm__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/***/ "./src/constants/rate.js":
/*!*******************************!*\
  !*** ./src/constants/rate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RATING_STAR": () => (/* binding */ RATING_STAR)
/* harmony export */ });
var RATING_STAR = {
  LIMIT_SCORE: 5
};

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
//# sourceMappingURL=default-src_components_ProductThumbItem_ProductThumbItem_jsx-src_components_ReviewForm_index_js.3f774274af49e78b2c59.bundle.js.map