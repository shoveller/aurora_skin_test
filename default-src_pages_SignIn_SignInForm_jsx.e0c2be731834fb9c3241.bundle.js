"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["default-src_pages_SignIn_SignInForm_jsx"],{

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

/***/ "./src/components/OpenIdSignIn/OpenIdSignIn.jsx":
/*!******************************************************!*\
  !*** ./src/components/OpenIdSignIn/OpenIdSignIn.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/OpenIdSignInProvider/OpenIdSignInProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var OpenIdSignIn = function OpenIdSignIn(_ref) {
  var _location$state, _location$state2;
  var label = _ref.label,
    orderSheetNo = _ref.orderSheetNo,
    providers = _ref.providers;
  var _useOpenIdSignInActio = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_0__.useOpenIdSignInActionContext)(),
    openIdSignIn = _useOpenIdSignInActio.openIdSignIn,
    setPathToLocalStorage = _useOpenIdSignInActio.setPathToLocalStorage;
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  var previousPath = (_location$state = location.state) === null || _location$state === void 0 ? void 0 : _location$state.from; // 로그인 화면 전 페이지
  var nextPath = (_location$state2 = location.state) === null || _location$state2 === void 0 ? void 0 : _location$state2.to; // 로그인 후 이동할 페이지
  var orderSheetPath = orderSheetNo ? orderSheetNo : '';
  var redirectUri = "".concat(window.location.origin, "/callback/auth-callback");
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
    shows: (providers === null || providers === void 0 ? void 0 : providers.length) > 0,
    TruthyComponent: /*#__PURE__*/React.createElement("div", {
      className: "open-id-sign-in"
    }, /*#__PURE__*/React.createElement("p", {
      className: "open-id-sign-in__title"
    }, /*#__PURE__*/React.createElement("span", null, "\uAC04\uD3B8\uB85C\uADF8\uC778")), /*#__PURE__*/React.createElement("ul", {
      className: "open-id-sign-in__list"
    }, providers === null || providers === void 0 ? void 0 : providers.sort(function (a, b) {
      return b.charCodeAt(0) - a.charCodeAt(0);
    }).map(function (provider, idx) {
      return /*#__PURE__*/React.createElement("li", {
        className: "open-id-sign-in__item type-".concat(provider),
        key: "".concat(idx, "_").concat(provider)
      }, /*#__PURE__*/React.createElement("button", {
        className: "open-id-sign-in__link",
        "data-provider": provider,
        "data-action": "oauth",
        onClick: function onClick() {
          setPathToLocalStorage({
            previousPath: previousPath,
            nextPath: nextPath,
            orderSheetPath: orderSheetPath
          });
          openIdSignIn({
            provider: provider,
            redirectUri: redirectUri
          });
        }
      }, /*#__PURE__*/React.createElement("span", null, "".concat(provider === null || provider === void 0 ? void 0 : provider.toUpperCase(), " ")), " \uC544\uC774\uB514\uB85C ".concat(label)));
    })))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpenIdSignIn);
OpenIdSignIn.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  providers: prop_types__WEBPACK_IMPORTED_MODULE_3__.array,
  orderSheetNo: prop_types__WEBPACK_IMPORTED_MODULE_3__.string
};

/***/ }),

/***/ "./src/components/OpenIdSignIn/index.js":
/*!**********************************************!*\
  !*** ./src/components/OpenIdSignIn/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OpenIdSignIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OpenIdSignIn */ "./src/components/OpenIdSignIn/OpenIdSignIn.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_OpenIdSignIn__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/PasswordChanger/PasswordChanger.jsx":
/*!************************************************************!*\
  !*** ./src/components/PasswordChanger/PasswordChanger.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/SignInProvider/SignInProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/modal/ModalProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/member/CheckMemberPasswordProvider/CheckMemberPasswordProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/TextField/TextField.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _hooks_useChangePassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useChangePassword */ "./src/hooks/useChangePassword.js");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ErrorBoundary */ "./src/components/ErrorBoundary/index.js");
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





var PasswordChanger = function PasswordChanger(_ref) {
  var _ref$useNextChanger = _ref.useNextChanger,
    useNextChanger = _ref$useNextChanger === void 0 ? false : _ref$useNextChanger,
    onSubmit = _ref.onSubmit,
    onNext = _ref.onNext;
  var _useSignInActionConte = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useSignInActionContext)(),
    changePassword = _useSignInActionConte.changePassword;
  var _useModalActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useModalActionContext)(),
    openAlert = _useModalActionContex.openAlert;
  var _useCheckMemberPasswo = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__.useCheckMemberPasswordActionContext)(),
    checkPassword = _useCheckMemberPasswo.checkPassword;
  var _useErrorBoundaryActi = (0,_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__.useErrorBoundaryActionContext)(),
    catchError = _useErrorBoundaryActi.catchError;
  var currentPasswordChanger = (0,_hooks_useChangePassword__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var newPasswordChanger = (0,_hooks_useChangePassword__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var newPasswordCheckChanger = (0,_hooks_useChangePassword__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isInvalidPasswordCheck = _useState2[0],
    setIsInvalidPasswordCheck = _useState2[1];
  var getInvalidMessage = function getInvalidMessage() {
    if (!currentPasswordChanger.password) return '현재 비밀번호를 입력해주세요.';
    if (!newPasswordChanger.password) return '새로운 비밀번호를 입력해주세요.';
    if (newPasswordChanger.password !== newPasswordCheckChanger.password) return '비밀번호와 비밀번호 확인 값이 일치하지 않습니다.';
    if (!newPasswordChanger.isValid) return newPasswordChanger.message;
    return '';
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var invalidMessage;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            newPasswordChanger.validatePassword();
            invalidMessage = getInvalidMessage();
            if (!invalidMessage) {
              _context.next = 5;
              break;
            }
            openAlert({
              message: invalidMessage
            });
            return _context.abrupt("return");
          case 5:
            _context.prev = 5;
            _context.next = 8;
            return checkPassword(currentPasswordChanger.password);
          case 8:
            _context.next = 10;
            return changePassword({
              currentPassword: currentPasswordChanger.password,
              newPassword: newPasswordChanger.password,
              willChangeNextTime: false
            });
          case 10:
            openAlert({
              message: '회원님의 비밀번호가 안전하게 변경되었습니다.',
              onClose: function onClose() {
                onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit();
              }
            });
            _context.next = 16;
            break;
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](5);
            catchError(_context.t0);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5, 13]]);
    }));
    return function handleSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleNext = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return changePassword({
              willChangeNextTime: true
            });
          case 3:
            openAlert({
              message: '해당 안내는 90일 뒤에 다시 안내됩니다.',
              onClose: function onClose() {
                onNext === null || onNext === void 0 ? void 0 : onNext();
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
    return function handleNext() {
      return _ref3.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIsInvalidPasswordCheck(newPasswordChanger.password !== newPasswordCheckChanger.password);
  }, [newPasswordChanger.password, newPasswordCheckChanger.password]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "password-changer"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "password-changer__current",
    placeholder: "\uD604\uC7AC \uBE44\uBC00\uBC88\uD638",
    type: "password",
    value: currentPasswordChanger.password,
    onChange: currentPasswordChanger.handleChangePassword
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "password-changer__new",
    placeholder: "\uC0C8 \uBE44\uBC00\uBC88\uD638",
    value: newPasswordChanger.password,
    type: "password",
    onChange: newPasswordChanger.handleChangePassword,
    onBlur: newPasswordChanger.validatePassword,
    valid: "NO_SPACE"
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
    shows: !newPasswordChanger.isValid,
    TruthyComponent: /*#__PURE__*/React.createElement("p", {
      className: "password-changer__caution"
    }, newPasswordChanger.message)
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "password-changer__new-check",
    placeholder: "\uC0C8 \uBE44\uBC00\uBC88\uD638 \uD655\uC778",
    value: newPasswordCheckChanger.password,
    type: "password",
    onChange: newPasswordCheckChanger.handleChangePassword,
    valid: "NO_SPACE"
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
    shows: isInvalidPasswordCheck,
    TruthyComponent: /*#__PURE__*/React.createElement("p", {
      className: "password-changer__caution"
    }, "\uBE44\uBC00\uBC88\uD638\uC640 \uBE44\uBC00\uBC88\uD638 \uD655\uC778 \uAC12\uC774 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")
  })), /*#__PURE__*/React.createElement("div", {
    className: "password-changer__buttons"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
    shows: useNextChanger,
    TruthyComponent: /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__["default"], {
      theme: "dark",
      label: "\uB2E4\uC74C\uC5D0 \uBCC0\uACBD",
      onClick: handleNext
    })
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__["default"], {
    theme: "caution",
    label: "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD",
    onClick: handleSubmit
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordChanger);
PasswordChanger.propTypes = {
  useNextChanger: prop_types__WEBPACK_IMPORTED_MODULE_9__.bool,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_9__.func,
  onNext: prop_types__WEBPACK_IMPORTED_MODULE_9__.func
};

/***/ }),

/***/ "./src/components/PasswordChanger/index.js":
/*!*************************************************!*\
  !*** ./src/components/PasswordChanger/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PasswordChanger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordChanger */ "./src/components/PasswordChanger/PasswordChanger.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PasswordChanger__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/***/ "./src/hooks/useChangePassword.js":
/*!****************************************!*\
  !*** ./src/hooks/useChangePassword.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var INVALID_PASSWORD_MESSAGE_MAP = {
  MUST_CONTAIN_THREE_TYPES_IN_LENGTH_LESS_THAN_10: '비밀번호는 영문, 숫자, 특수문자를 3종류 모두 조합하여 8~20자로 입력해주세요.',
  MUST_CONTAIN_TWO_TYPES_IN_LENGTH_MORE_THAN_10: '비밀번호는 영문, 숫자, 특수문자를 2종류 이상 조합하여 10~20자로 입력해주세요.',
  LENGTH_IS_INVALID: '비밀번호는 영문, 숫자, 특수문자를 3종류 모두 조합하여 8~20자로 입력해주세요.',
  INVALID_SPECIAL: '비밀번호 특수문자는 !@#$%^&*+=-_.()만 사용 가능합니다.'
};
var useChangePassword = function useChangePassword() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    password = _useState2[0],
    setPassword = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isValid = _useState4[0],
    setIsValid = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    message = _useState6[0],
    setMessage = _useState6[1];
  var handleChangePassword = function handleChangePassword(_ref) {
    var value = _ref.currentTarget.value;
    setPassword(value);
  };
  var validatePassword = function validatePassword() {
    var _checkPassword = (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.checkPassword)(password),
      isValid = _checkPassword.isValid,
      message = _checkPassword.message;
    setIsValid(isValid);
    setMessage(INVALID_PASSWORD_MESSAGE_MAP[message]);
  };
  return {
    password: password,
    handleChangePassword: handleChangePassword,
    validatePassword: validatePassword,
    isValid: isValid,
    message: message
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useChangePassword);

/***/ }),

/***/ "./src/pages/SignIn/SignInForm.jsx":
/*!*****************************************!*\
  !*** ./src/pages/SignIn/SignInForm.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/SignInProvider/SignInProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/AuthProvider/AuthProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/modal/ModalProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/TextField/TextField.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/SignInButton/SignInButton.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/member/CheckMemberPasswordProvider/CheckMemberPasswordProvider.js");
/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ErrorBoundary */ "./src/components/ErrorBoundary/index.js");
/* harmony import */ var _components_FullModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/FullModal */ "./src/components/FullModal/index.js");
/* harmony import */ var _components_OpenIdSignIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/OpenIdSignIn */ "./src/components/OpenIdSignIn/index.js");
/* harmony import */ var _components_PasswordChanger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PasswordChanger */ "./src/components/PasswordChanger/index.js");
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









var SignInForm = function SignInForm(_ref) {
  var _ref$usesOnlySignIn = _ref.usesOnlySignIn,
    usesOnlySignIn = _ref$usesOnlySignIn === void 0 ? false : _ref$usesOnlySignIn,
    onSignIn = _ref.onSignIn;
  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useLocation)(),
    state = _useLocation.state;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('auth'),
    t = _useTranslation.t;
  var _useSignInActionConte = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__.useSignInActionContext)(),
    updateSignInInfo = _useSignInActionConte.updateSignInInfo,
    updateGuestOrderInfo = _useSignInActionConte.updateGuestOrderInfo,
    signIn = _useSignInActionConte.signIn,
    updateHasGuestOrderSheetUrl = _useSignInActionConte.updateHasGuestOrderSheetUrl,
    searchGuestOrders = _useSignInActionConte.searchGuestOrders,
    reactivateDormantAccount = _useSignInActionConte.reactivateDormantAccount;
  var _useAuthActionContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__.useAuthActionContext)(),
    signOut = _useAuthActionContext.signOut;
  var _useModalActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__.useModalActionContext)(),
    openConfirm = _useModalActionContex.openConfirm,
    openAlert = _useModalActionContex.openAlert;
  var _useErrorBoundaryActi = (0,_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__.useErrorBoundaryActionContext)(),
    catchError = _useErrorBoundaryActi.catchError;
  var _useSignInValueContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__.useSignInValueContext)(),
    _useSignInValueContex2 = _useSignInValueContex.signInInfo,
    memberId = _useSignInValueContex2.memberId,
    password = _useSignInValueContex2.password,
    _useSignInValueContex3 = _useSignInValueContex.guestOrderInfo,
    orderNo = _useSignInValueContex3.orderNo,
    orderPassword = _useSignInValueContex3.orderPassword,
    hasGuestOrderSheetUrl = _useSignInValueContex.hasGuestOrderSheetUrl,
    isSignedIn = _useSignInValueContex.isSignedIn,
    dormantMemberResponse = _useSignInValueContex.dormantMemberResponse,
    daysFromLastPasswordChange = _useSignInValueContex.daysFromLastPasswordChange;
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_10__.useMallStateContext)(),
    openIdJoinConfig = _useMallStateContext.openIdJoinConfig,
    mallName = _useMallStateContext.mallName;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var handleMemberIdChange = function handleMemberIdChange(_ref2) {
    var value = _ref2.currentTarget.value;
    updateSignInInfo({
      memberId: value
    });
  };
  var handlePasswordChange = function handlePasswordChange(_ref3) {
    var value = _ref3.currentTarget.value;
    updateSignInInfo({
      password: value
    });
  };
  var handlePasswordKeyDown = function handlePasswordKeyDown(e) {
    if (e.key === 'Enter') {
      signIn({
        memberId: memberId,
        password: password
      });
    }
  };
  var handleOrderNoChange = function handleOrderNoChange(_ref4) {
    var value = _ref4.currentTarget.value;
    updateGuestOrderInfo({
      orderNo: value
    });
  };
  var handleOrderPasswordChange = function handleOrderPasswordChange(_ref5) {
    var value = _ref5.currentTarget.value;
    updateGuestOrderInfo({
      orderPassword: value
    });
  };
  var handleOrderPasswordKeyDown = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (!(e.key === 'Enter')) {
              _context.next = 5;
              break;
            }
            _context.next = 4;
            return searchGuestOrders({
              orderNo: orderNo,
              password: orderPassword,
              orderRequestType: 'ALL'
            });
          case 4:
            location.href = "/orders/".concat(orderNo);
          case 5:
            _context.next = 10;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            catchError(_context.t0);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function handleOrderPasswordKeyDown(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();
  var handleSearchGuestOrdersBtnClick = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return searchGuestOrders({
              orderNo: orderNo,
              password: orderPassword,
              orderRequestType: 'ALL'
            });
          case 3:
            location.href = "/orders/".concat(orderNo);
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
    return function handleSearchGuestOrdersBtnClick() {
      return _ref7.apply(this, arguments);
    };
  }();
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
    params = _useSearchParams2[0];
  var orderSheetNo = params.get('orderSheetNo');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (orderSheetNo) {
      updateHasGuestOrderSheetUrl(true);
    }
  }, [orderSheetNo]);
  var locationPage = function locationPage() {
    location.state = {
      from: "".concat(location.pathname).concat(location.search),
      to: state === null || state === void 0 ? void 0 : state.to
    };
    if (onSignIn) {
      onSignIn();
    } else if (orderSheetNo) {
      location.href = "/order/".concat(orderSheetNo);
    } else {
      var _location$state, _location$state$from, _location$state2;
      var from = (_location$state = location.state) !== null && _location$state !== void 0 && (_location$state$from = _location$state.from) !== null && _location$state$from !== void 0 && _location$state$from.includes('sign-in') ? '/' : (_location$state2 = location.state) === null || _location$state2 === void 0 ? void 0 : _location$state2.from;
      location.href = from !== null && from !== void 0 ? from : '/';
    }
  };
  var reactivate = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return reactivateDormantAccount({
              authType: 'NONE'
            });
          case 3:
            openAlert({
              message: '휴면해제 되었습니다.',
              onClose: locationPage
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
    return function reactivate() {
      return _ref8.apply(this, arguments);
    };
  }();
  var passwordHandler = function passwordHandler() {
    if (daysFromLastPasswordChange > 90) {
      setIsOpen(true);
    } else {
      locationPage();
    }
  };
  var dormantMemberHandler = function dormantMemberHandler() {
    var isDormantMember = (dormantMemberResponse === null || dormantMemberResponse === void 0 ? void 0 : dormantMemberResponse.memberName) || (dormantMemberResponse === null || dormantMemberResponse === void 0 ? void 0 : dormantMemberResponse.mobileNo) || (dormantMemberResponse === null || dormantMemberResponse === void 0 ? void 0 : dormantMemberResponse.email);
    if (!isDormantMember) {
      passwordHandler();
      return;
    }
    openConfirm({
      message: /*#__PURE__*/React.createElement(React.Fragment, null, "\uC7A5\uAE30 \uBBF8\uC811\uC18D\uC73C\uB85C \uC778\uD574 \uD734\uBA74\uD68C\uC6D0 \uC804\uD658 \uC0C1\uD0DC\uC785\uB2C8\uB2E4. ", /*#__PURE__*/React.createElement("br", null), "\uD734\uBA74\uD574\uC81C \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"),
      confirmLabel: '확인',
      onConfirm: function onConfirm() {
        return reactivate();
      },
      onCancel: function () {
        var _onCancel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return signOut();
              case 3:
                window.location.href = '/';
                _context4.next = 9;
                break;
              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                catchError(_context4.t0);
              case 9:
              case "end":
                return _context4.stop();
            }
          }, _callee4, null, [[0, 6]]);
        }));
        function onCancel() {
          return _onCancel.apply(this, arguments);
        }
        return onCancel;
      }()
    });
  };
  var closePasswordChangerModal = function closePasswordChangerModal() {
    setIsOpen(false);
    locationPage();
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isSignedIn) return;
    dormantMemberHandler();
  }, [isSignedIn]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "sign-in"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "a11y"
  }, "\uB85C\uADF8\uC778"), /*#__PURE__*/React.createElement("div", {
    className: "normal-sign-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "normal-sign-in__input-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_12__["default"], {
    name: "memberId",
    placeholder: "\uC544\uC774\uB514",
    onChange: handleMemberIdChange,
    value: memberId,
    valid: "NO_SPACE"
  })), /*#__PURE__*/React.createElement("div", {
    className: "normal-sign-in__input-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_12__["default"], {
    name: "password",
    placeholder: "\uBE44\uBC00\uBC88\uD638",
    onChange: handlePasswordChange,
    onKeyDown: handlePasswordKeyDown,
    value: password,
    type: "password",
    valid: "NO_SPACE"
  })), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_13__["default"], {
    label: t('SIGNIN'),
    onError: function onError(e) {
      return catchError(e);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "sign-in-link"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {
    className: "sign-in-link__item",
    to: "/find-id"
  }, "\uC544\uC774\uB514\uCC3E\uAE30"), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {
    className: "sign-in-link__item",
    to: "/find-password"
  }, "\uBE44\uBC00\uBC88\uD638\uCC3E\uAE30"), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {
    className: "sign-in-link__item",
    to: "/sign-up"
  }, "\uD68C\uC6D0\uAC00\uC785")), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_14__["default"], {
    shows: !usesOnlySignIn,
    TruthyComponent: /*#__PURE__*/React.createElement(React.Fragment, null, hasGuestOrderSheetUrl && /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {
      className: "guest-order-link",
      to: "/order/".concat(orderSheetNo)
    }, "\uBE44\uD68C\uC6D0 \uC8FC\uBB38\uD558\uAE30"), !hasGuestOrderSheetUrl && /*#__PURE__*/React.createElement("div", {
      className: "guest-order"
    }, /*#__PURE__*/React.createElement("p", {
      className: "guest-order__title"
    }, "\uBE44\uD68C\uC6D0 \uC8FC\uBB38\uC870\uD68C \uD558\uAE30"), /*#__PURE__*/React.createElement("div", {
      className: "guest-order__input-wrap"
    }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_12__["default"], {
      name: "orderNo",
      placeholder: "\uC8FC\uBB38\uBC88\uD638 \uC785\uB825",
      onChange: handleOrderNoChange,
      value: orderNo
    })), /*#__PURE__*/React.createElement("div", {
      className: "guest-order__input-wrap"
    }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_12__["default"], {
      name: "orderPassword",
      type: "password",
      placeholder: "\uC8FC\uBB38\uBC88\uD638 \uBE44\uBC00\uBC88\uD638 \uC785\uB825",
      onChange: handleOrderPasswordChange,
      onKeyDown: handleOrderPasswordKeyDown,
      value: orderPassword
    })), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_15__["default"], {
      label: "\uC870\uD68C\uD558\uAE30",
      onClick: handleSearchGuestOrdersBtnClick
    })))
  }), openIdJoinConfig.providers && /*#__PURE__*/React.createElement("div", {
    className: "sign-in-open-id"
  }, /*#__PURE__*/React.createElement(_components_OpenIdSignIn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "\uB85C\uADF8\uC778",
    orderSheetNo: orderSheetNo,
    providers: openIdJoinConfig.providers
  }))), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_14__["default"], {
    shows: isOpen,
    TruthyComponent: /*#__PURE__*/React.createElement(_components_FullModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD"
    }, /*#__PURE__*/React.createElement("div", {
      className: "long-term-notice"
    }, /*#__PURE__*/React.createElement("div", {
      className: "long-term-notice__content"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "long-term-notice__title"
    }, "\uD68C\uC6D0\uB2D8\uC758 \uBE44\uBC00\uBC88\uD638\uB97C \uBCC0\uACBD\uD574 \uC8FC\uC138\uC694."), /*#__PURE__*/React.createElement("p", {
      className: "long-term-notice__text"
    }, "\uD68C\uC6D0\uB2D8\uAED8\uC11C\uB294 \uC7A5\uAE30\uAC04 \uBE44\uBC00\uBC88\uD638\uB97C \uBCC0\uACBD\uD558\uC9C0 \uC54A\uACE0, \uB3D9\uC77C\uD55C \uBE44\uBC00\uBC88\uD638\uB97C \uC0AC\uC6A9 \uC911\uC774\uC2ED\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("span", {
      className: "long-term-notice__description"
    }, mallName, "\uC5D0\uC11C\uB294 \uD68C\uC6CC\uB2D8\uC758 \uC18C\uC911\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uD638\uD558\uAE30 \uC704\uD558\uC5EC \uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD\uC744 \uC548\uB0B4\uD574\uB4DC\uB9AC\uACE0 \uC788\uC2B5\uB2C8\uB2E4.", /*#__PURE__*/React.createElement("br", null), "\uC815\uAE30\uC801\uC778 \uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD\uC73C\uB85C \uD68C\uC6D0\uB2D8\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uD638\uD574 \uC8FC\uC138\uC694.")), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/React.createElement(_components_PasswordChanger__WEBPACK_IMPORTED_MODULE_5__["default"], {
      useNextChanger: true,
      onSubmit: closePasswordChangerModal,
      onNext: closePasswordChangerModal
    }))))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInForm);
SignInForm.propTypes = {
  usesOnlySignIn: prop_types__WEBPACK_IMPORTED_MODULE_17__.bool,
  onSignIn: prop_types__WEBPACK_IMPORTED_MODULE_17__.func
};

/***/ })

}]);
//# sourceMappingURL=default-src_pages_SignIn_SignInForm_jsx.e0c2be731834fb9c3241.bundle.js.map