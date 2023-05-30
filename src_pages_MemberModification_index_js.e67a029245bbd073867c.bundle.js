"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_pages_MemberModification_index_js"],{

/***/ "./src/components/CheckMemberPassword/CheckMemberPassword.jsx":
/*!********************************************************************!*\
  !*** ./src/components/CheckMemberPassword/CheckMemberPassword.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/member/CheckMemberPasswordProvider/CheckMemberPasswordProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/AuthProvider/AuthProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/TextField/TextField.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorBoundary */ "./src/components/ErrorBoundary/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var CheckMemberPassword = function CheckMemberPassword(_ref) {
  var onAuthenticationBtnClick = _ref.onAuthenticationBtnClick;
  var _useCheckMemberPasswo = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__.useCheckMemberPasswordActionContext)(),
    updateCheckPasswordMemberInfo = _useCheckMemberPasswo.updateCheckPasswordMemberInfo,
    checkPassword = _useCheckMemberPasswo.checkPassword;
  var _useErrorBoundaryActi = (0,_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__.useErrorBoundaryActionContext)(),
    catchError = _useErrorBoundaryActi.catchError;
  var _useCheckMemberPasswo2 = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__.useCheckMemberPasswordStateContext)(),
    _useCheckMemberPasswo3 = _useCheckMemberPasswo2.checkPasswordMemberInfo,
    memberId = _useCheckMemberPasswo3.memberId,
    password = _useCheckMemberPasswo3.password;
  var _useAuthStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useAuthStateContext)(),
    profile = _useAuthStateContext.profile;
  var handlePasswordChange = function handlePasswordChange(_ref2) {
    var value = _ref2.currentTarget.value;
    updateCheckPasswordMemberInfo({
      password: value
    });
  };
  var handlePasswordKeyDown = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (!(e.key === 'Enter')) {
              _context.next = 5;
              break;
            }
            _context.next = 4;
            return checkPassword(password);
          case 4:
            onAuthenticationBtnClick();
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
    return function handlePasswordKeyDown(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var checkPasswordBtnClick = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(password) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return checkPassword(password);
          case 3:
            onAuthenticationBtnClick();
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
    return function checkPasswordBtnClick(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    updateCheckPasswordMemberInfo({
      memberId: profile === null || profile === void 0 ? void 0 : profile.memberId
    });
  }, [profile]);
  return /*#__PURE__*/React.createElement("div", {
    className: "password-authentication"
  }, /*#__PURE__*/React.createElement("p", {
    className: "password-authentication__info-text"
  }, "\uD68C\uC6D0\uB2D8\uC758 \uC815\uBCF4\uB97C \uC548\uC804\uD558\uAC8C \uBCF4\uD638\uD558\uAE30 \uC704\uD574 ", /*#__PURE__*/React.createElement("br", null), "\uB2E4\uC2DC \uD55C \uBC88 \uC785\uB825\uD574 \uC8FC\uC138\uC694."), /*#__PURE__*/React.createElement("div", {
    className: "password-authentication-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "password-authentication-form__item"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "mobileNo",
    className: "password-authentication-form__tit"
  }, "\uC544\uC774\uB514"), /*#__PURE__*/React.createElement("div", {
    className: "password-authentication-form__input-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "memberId",
    placeholder: "\uC544\uC774\uB514",
    value: memberId,
    disabled: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "password-authentication-form__item"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "mobileNo",
    className: "password-authentication-form__tit"
  }, "\uBE44\uBC00\uBC88\uD638"), /*#__PURE__*/React.createElement("div", {
    className: "password-authentication-form__input-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "password",
    placeholder: "\uBE44\uBC00\uBC88\uD638",
    onChange: handlePasswordChange,
    value: password,
    type: "password",
    valid: "NO_SPACE",
    onKeyDown: handlePasswordKeyDown
  }))), /*#__PURE__*/React.createElement("div", {
    className: "password-authentication__button-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "\uCDE8\uC18C",
    onClick: function onClick() {
      location.href = "/my-page";
    }
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "\uC778\uC99D\uD558\uAE30",
    onClick: function onClick() {
      checkPasswordBtnClick(password);
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckMemberPassword);
CheckMemberPassword.propTypes = {
  onAuthenticationBtnClick: prop_types__WEBPACK_IMPORTED_MODULE_6__.func
};

/***/ }),

/***/ "./src/components/CheckMemberPassword/index.js":
/*!*****************************************************!*\
  !*** ./src/components/CheckMemberPassword/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckMemberPassword__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckMemberPassword */ "./src/components/CheckMemberPassword/CheckMemberPassword.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CheckMemberPassword__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/***/ "./src/components/Timer/Timer.jsx":
/*!****************************************!*\
  !*** ./src/components/Timer/Timer.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Timer = function Timer(_ref) {
  var seconds = _ref.seconds,
    onTimeOutAction = _ref.onTimeOutAction;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      minutes: Math.floor(seconds / 60),
      seconds: seconds % 60
    }),
    _useState2 = _slicedToArray(_useState, 2),
    time = _useState2[0],
    setTime = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isTimeOut = _useState4[0],
    setIsTimeOut = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIsTimeOut(false);
    var intervalId = setInterval(function () {
      setTime(function (prevTime) {
        var newSeconds = prevTime.seconds - 1;
        var newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
        if (newSeconds < 0 && newMinutes < 0) {
          clearInterval(intervalId);
          setIsTimeOut(true);
          onTimeOutAction();
          return {
            minutes: 0,
            seconds: 0
          };
        }
        return {
          minutes: newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds
        };
      });
    }, 1000);
    return function () {
      return clearInterval(intervalId);
    };
  }, [seconds]);
  return /*#__PURE__*/React.createElement("div", {
    className: "timer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "count-down"
  }, "\uC720\uD6A8\uC2DC\uAC04", ' ', !isTimeOut ? /*#__PURE__*/React.createElement("span", null, time.minutes.toString().padStart(2, '0'), ":", time.seconds.toString().padStart(2, '0')) : /*#__PURE__*/React.createElement("span", null, "\uC2DC\uAC04\uCD08\uACFC")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timer);
Timer.propTypes = {
  seconds: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  onTimeOutAction: prop_types__WEBPACK_IMPORTED_MODULE_1__.func
};

/***/ }),

/***/ "./src/components/Timer/index.js":
/*!***************************************!*\
  !*** ./src/components/Timer/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timer */ "./src/components/Timer/Timer.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Timer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/pages/MemberModification/MemberModification.jsx":
/*!*************************************************************!*\
  !*** ./src/pages/MemberModification/MemberModification.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/MemberModificationProvider/MemberModificationProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/IdentificationVerificationProvider/IdentificationVerificationProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/AgeVerificationProvider/AgeVerificationProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/member/CheckMemberPasswordProvider/CheckMemberPasswordProvider.js");
/* harmony import */ var _components_CheckMemberPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/CheckMemberPassword */ "./src/components/CheckMemberPassword/index.js");
/* harmony import */ var _components_FullModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/FullModal */ "./src/components/FullModal/index.js");
/* harmony import */ var _hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useLayoutChanger */ "./src/hooks/useLayoutChanger.js");
/* harmony import */ var _MemberModificationForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MemberModificationForm */ "./src/pages/MemberModification/MemberModificationForm.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var MemberModification = function MemberModification() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('title'),
    t = _useTranslation.t;
  (0,_hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_4__["default"])({
    hasBackBtnOnHeader: true,
    title: t('memberModification')
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isPasswordCheckModalOpen = _useState2[0],
    setIsPasswordCheckModalOpen = _useState2[1];
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__["default"], null, isPasswordCheckModalOpen && /*#__PURE__*/React.createElement(_components_FullModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: t('memberModification'),
    onClose: function onClose() {
      location.href = 'my-page';
    }
  }, /*#__PURE__*/React.createElement(_components_CheckMemberPassword__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onAuthenticationBtnClick: function onAuthenticationBtnClick() {
      setIsPasswordCheckModalOpen(false);
    }
  })), /*#__PURE__*/React.createElement(_MemberModificationForm__WEBPACK_IMPORTED_MODULE_5__["default"], null)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberModification);
MemberModification.propTypes = {};

/***/ }),

/***/ "./src/pages/MemberModification/MemberModificationAddressForm.jsx":
/*!************************************************************************!*\
  !*** ./src/pages/MemberModification/MemberModificationAddressForm.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/MemberModificationProvider/MemberModificationProvider.js");
/* harmony import */ var _components_AddressForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/AddressForm */ "./src/components/AddressForm/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var MemberModificationAddressForm = function MemberModificationAddressForm() {
  var _useMemberModificatio = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__.useMemberModificationActionContext)(),
    updateMemberModificationInfo = _useMemberModificatio.updateMemberModificationInfo;
  var _useMemberModificatio2 = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__.useMemberModificationStateContext)(),
    _useMemberModificatio3 = _useMemberModificatio2.memberModificationInfo,
    zipCode = _useMemberModificatio3.zipCd,
    roadAddress = _useMemberModificatio3.address,
    addressDetail = _useMemberModificatio3.detailAddress;
  var handleAddressItemClick = function handleAddressItemClick(_ref) {
    var zipCode = _ref.zipCode,
      roadAddress = _ref.roadAddress,
      jibunAddress = _ref.jibunAddress;
    updateMemberModificationInfo({
      zipCd: zipCode,
      address: roadAddress,
      jibunAddress: jibunAddress
    });
  };
  var handleAddressDetailChange = function handleAddressDetailChange(_ref2) {
    var addressDetail = _ref2.addressDetail;
    updateMemberModificationInfo({
      detailAddress: addressDetail
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "member-modification-form__item"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "address",
    className: "member-modification-form__tit"
  }, "\uC8FC\uC18C\uCC3E\uAE30"), /*#__PURE__*/React.createElement(_components_AddressForm__WEBPACK_IMPORTED_MODULE_0__["default"], {
    zipCode: zipCode,
    address: roadAddress,
    addressDetail: addressDetail,
    onAddressItemClick: handleAddressItemClick,
    onAddressDetailChange: handleAddressDetailChange
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberModificationAddressForm);
MemberModificationAddressForm.propTypes = {};

/***/ }),

/***/ "./src/pages/MemberModification/MemberModificationEmailForm.jsx":
/*!**********************************************************************!*\
  !*** ./src/pages/MemberModification/MemberModificationEmailForm.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/MemberModificationProvider/MemberModificationProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/EmailInput/EmailInput.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/SelectBox/SelectBox.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/TextField/TextField.js");
/* harmony import */ var _components_Timer_Timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Timer/Timer */ "./src/components/Timer/Timer.jsx");
/* harmony import */ var _constants_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/form */ "./src/constants/form.js");
/* harmony import */ var _ValidationStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ValidationStatus */ "./src/pages/MemberModification/ValidationStatus.jsx");
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
/* eslint-disable complexity */





var MemberModificationEmailForm = function MemberModificationEmailForm() {
  var _useMemberModificatio = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useMemberModificationActionContext)(),
    updateNewEmail = _useMemberModificatio.updateNewEmail,
    updateCertificatedNumber = _useMemberModificatio.updateCertificatedNumber,
    verifyExistEmail = _useMemberModificatio.verifyExistEmail,
    confirmAuthenticationEmail = _useMemberModificatio.confirmAuthenticationEmail,
    updateIsAuthenticationReSend = _useMemberModificatio.updateIsAuthenticationReSend,
    updateValidationStatus = _useMemberModificatio.updateValidationStatus,
    validateEmail = _useMemberModificatio.validateEmail;
  var _useMemberModificatio2 = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useMemberModificationStateContext)(),
    newEmail = _useMemberModificatio2.newEmail,
    certificatedNumber = _useMemberModificatio2.certificatedNumber,
    authenticationsRemainTimeBySeconds = _useMemberModificatio2.authenticationsRemainTimeBySeconds,
    isAuthenticationReSend = _useMemberModificatio2.isAuthenticationReSend,
    authenticateEmail = _useMemberModificatio2.authenticateEmail;
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__.useMallStateContext)(),
    mallJoinConfig = _useMallStateContext.mallJoinConfig;
  var emailSeparation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return newEmail.split('@');
  }, [newEmail]);
  var emailId = [emailSeparation[0]];
  var emailDomain = [emailSeparation[1]];
  var emailRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    domainSelectorValue = _useState2[0],
    setDomainSelectorValue = _useState2[1];
  var handleEmailIdInputChange = function handleEmailIdInputChange(_ref) {
    var value = _ref.currentTarget.value;
    updateNewEmail("".concat(value, "@").concat(emailDomain));
  };
  var handleEmailDomainInputChange = function handleEmailDomainInputChange(_ref2) {
    var value = _ref2.currentTarget.value;
    updateNewEmail("".concat(emailId, "@").concat(value));
    setDomainSelectorValue('');
  };
  var handleEmailDomainSelect = function handleEmailDomainSelect(_ref3) {
    var value = _ref3.currentTarget.value;
    updateNewEmail("".concat(emailId, "@").concat(value));
    setDomainSelectorValue(value);
    if (!validateEmail()) {
      return;
    }
    verifyExistEmail(newEmail);
  };
  var handleCertificatedNumber = function handleCertificatedNumber(_ref4) {
    var value = _ref4.currentTarget.value;
    updateCertificatedNumber(value);
  };
  var handleDomainBlur = function handleDomainBlur() {
    if (!validateEmail()) {
      return;
    }
    verifyExistEmail(newEmail);
  };
  var handleAuthenticateEmail = function handleAuthenticateEmail() {
    if (!validateEmail()) {
      return;
    }
    if (!_ValidationStatus__WEBPACK_IMPORTED_MODULE_3__["default"].email.result) {
      return;
    }
    authenticateEmail(newEmail);
  };
  var isEmailAuthentication = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (mallJoinConfig.authenticationType === 'AUTHENTICATION_BY_EMAIL' && authenticationsRemainTimeBySeconds) {
      return true;
    }
    return false;
  }, [mallJoinConfig, authenticationsRemainTimeBySeconds]);
  var isEmailType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (mallJoinConfig.authenticationType === 'AUTHENTICATION_BY_EMAIL') {
      return true;
    }
    return false;
  }, [mallJoinConfig]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "member-modification-form__item"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "emailId",
    className: "member-modification-form__tit"
  }, "\uC774\uBA54\uC77C"), /*#__PURE__*/React.createElement("div", {
    className: "member-modification-form__input-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ref: emailRef,
    id: emailId,
    domain: emailDomain,
    onIdChange: handleEmailIdInputChange,
    onDomainChange: handleEmailDomainInputChange,
    onDomainBlur: handleDomainBlur,
    idDisabled: isEmailType && isAuthenticationReSend,
    domainDisabled: isEmailType && isAuthenticationReSend
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
    hasEmptyOption: true,
    emptyOptionLabel: "\uC9C1\uC811 \uC785\uB825",
    value: domainSelectorValue,
    onSelect: handleEmailDomainSelect,
    options: _constants_form__WEBPACK_IMPORTED_MODULE_2__.EMAIL_DOMAIN_OPTIONS,
    disabled: isEmailType && isAuthenticationReSend
  })), mallJoinConfig.authenticationType === 'AUTHENTICATION_BY_EMAIL' && /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "member-modification-form__btn--certificate",
    label: isAuthenticationReSend ? "\uC7AC\uC778\uC99D" : "\uC778\uC99D\uBC88\uD638 \uBC1C\uC1A1",
    onClick: function onClick() {
      isAuthenticationReSend ? updateIsAuthenticationReSend(false) : handleAuthenticateEmail();
    }
  }), /*#__PURE__*/React.createElement(_ValidationStatus__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "email"
  })), isEmailAuthentication && /*#__PURE__*/React.createElement("div", {
    className: "member-modification-form__item"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "certificatedNumber",
    className: "member-modification-form__tit"
  }, "\uC778\uC99D\uBC88\uD638"), /*#__PURE__*/React.createElement("div", {
    className: "member-modification-form__input-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: "certificatedNumber",
    id: "certificatedNumber",
    value: certificatedNumber,
    placeholder: "\uC778\uC99D\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    onChange: handleCertificatedNumber,
    maxLength: 6,
    valid: "NO_SPACE"
  })), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "member-modification-form__btn--certificate",
    label: '확인',
    onClick: function onClick() {
      confirmAuthenticationEmail(certificatedNumber);
    }
  }), /*#__PURE__*/React.createElement(_components_Timer_Timer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    seconds: authenticationsRemainTimeBySeconds,
    onTimeOutAction: function onTimeOutAction() {
      updateValidationStatus(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          certificatedNumber: {
            result: false,
            message: '유효시간이 초과되었습니다. 다시 [인증번호 발송] 클릭하여 발급된 인증번호를 입력해주세요.'
          }
        });
      });
    }
  }), /*#__PURE__*/React.createElement(_ValidationStatus__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "certificatedNumber"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberModificationEmailForm);

/***/ }),

/***/ "./src/pages/MemberModification/MemberModificationForm.jsx":
/*!*****************************************************************!*\
  !*** ./src/pages/MemberModification/MemberModificationForm.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/MemberModificationProvider/MemberModificationProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ErrorBoundary */ "./src/components/ErrorBoundary/index.js");
/* harmony import */ var _MemberModificationAddressForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MemberModificationAddressForm */ "./src/pages/MemberModification/MemberModificationAddressForm.jsx");
/* harmony import */ var _MemberModificationEmailForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MemberModificationEmailForm */ "./src/pages/MemberModification/MemberModificationEmailForm.jsx");
/* harmony import */ var _MemberModificationReceiveAgreement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MemberModificationReceiveAgreement */ "./src/pages/MemberModification/MemberModificationReceiveAgreement.jsx");
/* harmony import */ var _MemberModificationSmsForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MemberModificationSmsForm */ "./src/pages/MemberModification/MemberModificationSmsForm.jsx");
/* harmony import */ var _MemberModificationTermsForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MemberModificationTermsForm */ "./src/pages/MemberModification/MemberModificationTermsForm.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var MemberModificationForm = function MemberModificationForm() {
  var _useMemberModificatio = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__.useMemberModificationActionContext)(),
    fetchProfile = _useMemberModificatio.fetchProfile,
    modifyProfile = _useMemberModificatio.modifyProfile,
    validateTerms = _useMemberModificatio.validateTerms,
    validateKey = _useMemberModificatio.validateKey,
    updateIsAuthenticationReSend = _useMemberModificatio.updateIsAuthenticationReSend;
  var _useMemberModificatio2 = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__.useMemberModificationStateContext)(),
    memberModificationInfo = _useMemberModificatio2.memberModificationInfo;
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__.useMallStateContext)(),
    mallJoinConfig = _useMallStateContext.mallJoinConfig;
  var _useErrorBoundaryActi = (0,_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__.useErrorBoundaryActionContext)(),
    catchError = _useErrorBoundaryActi.catchError;
  var handleModifyBtnClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var modifyResult;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (validateKey()) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            if (validateTerms()) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return");
          case 4:
            _context.prev = 4;
            _context.next = 7;
            return modifyProfile();
          case 7:
            modifyResult = _context.sent;
            if (modifyResult) {
              location.href = '/my-page';
            }
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            catchError(_context.t0);
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 11]]);
    }));
    return function handleModifyBtnClick() {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchProfile();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (mallJoinConfig.authenticationType !== 'NOT_USED') {
      updateIsAuthenticationReSend(true);
    }
  }, [mallJoinConfig]);
  return /*#__PURE__*/React.createElement("div", {
    className: "member-modification"
  }, /*#__PURE__*/React.createElement("div", {
    className: "member-modification-name"
  }, /*#__PURE__*/React.createElement("p", null, memberModificationInfo.memberName, /*#__PURE__*/React.createElement("span", null, "(", memberModificationInfo.providerType ? memberModificationInfo.providerType : '쇼핑몰', " \uC544\uC774\uB514 \uD68C\uC6D0)"))), /*#__PURE__*/React.createElement("section", {
    className: "l-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "member-modification-form"
  }, /*#__PURE__*/React.createElement(_MemberModificationEmailForm__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/React.createElement(_MemberModificationSmsForm__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/React.createElement(_MemberModificationAddressForm__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/React.createElement("section", {
    className: "l-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "member-modification-form"
  }, /*#__PURE__*/React.createElement(_MemberModificationReceiveAgreement__WEBPACK_IMPORTED_MODULE_4__["default"], null))), /*#__PURE__*/React.createElement("section", {
    className: "l-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "member-modification-form"
  }, /*#__PURE__*/React.createElement(_MemberModificationTermsForm__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/React.createElement("div", {
    className: "member-modification-form__button-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "\uC815\uBCF4 \uC218\uC815",
    onClick: handleModifyBtnClick
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberModificationForm);
MemberModificationForm.propTypes = {};

/***/ }),

/***/ "./src/pages/MemberModification/MemberModificationReceiveAgreement.jsx":
/*!*****************************************************************************!*\
  !*** ./src/pages/MemberModification/MemberModificationReceiveAgreement.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/MemberModificationProvider/MemberModificationProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Radio/Radio.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var MemberModificationReceiveAgreement = function MemberModificationReceiveAgreement() {
  var _useMemberModificatio = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_0__.useMemberModificationActionContext)(),
    updateMemberModificationInfo = _useMemberModificatio.updateMemberModificationInfo;
  var _useMemberModificatio2 = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_0__.useMemberModificationStateContext)(),
    _useMemberModificatio3 = _useMemberModificatio2.memberModificationInfo,
    smsAgreed = _useMemberModificatio3.smsAgreed,
    directMailAgreed = _useMemberModificatio3.directMailAgreed,
    _useMemberModificatio4 = _useMemberModificatio2.receiveAgreementInfo,
    smsAgreeYmdt = _useMemberModificatio4.smsAgreeYmdt,
    directMailAgreeYmdt = _useMemberModificatio4.directMailAgreeYmdt,
    directMailDisagreeYmdt = _useMemberModificatio4.directMailDisagreeYmdt,
    smsDisagreeYmdt = _useMemberModificatio4.smsDisagreeYmdt;
  var handleSmsAgreedChange = function handleSmsAgreedChange(_boolean) {
    updateMemberModificationInfo({
      smsAgreed: _boolean
    });
  };
  var handleDirectMailAgreedChange = function handleDirectMailAgreedChange(_boolean2) {
    updateMemberModificationInfo({
      directMailAgreed: _boolean2
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "member-modification-form__item member-modification-form__radio-field"
  }, /*#__PURE__*/React.createElement("div", {
    className: "radio-field__content"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email",
    className: "member-modification-form__tit"
  }, "SMS \uC218\uC2E0"), /*#__PURE__*/React.createElement("div", {
    className: "member-modification-form__input-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "\uC218\uC2E0\uB3D9\uC758",
    checked: smsAgreed,
    onChange: function onChange() {
      handleSmsAgreedChange(true);
    }
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "\uB3D9\uC758\uC548\uD568",
    checked: !smsAgreed,
    onChange: function onChange() {
      handleSmsAgreedChange(false);
    }
  }))), smsAgreeYmdt && /*#__PURE__*/React.createElement("p", {
    className: "receive-agreement-time"
  }, "\uC218\uC2E0\uB3D9\uC758\uD558\uC2E0 \uC2DC\uAC04 : ", smsAgreeYmdt), smsDisagreeYmdt && /*#__PURE__*/React.createElement("p", {
    className: "receive-agreement-time"
  }, "\uC218\uC2E0\uAC70\uBD80\uD558\uC2E0 \uC2DC\uAC04 : ", smsDisagreeYmdt), /*#__PURE__*/React.createElement("span", {
    className: "member-modification-form__description"
  }, "* \uC0C1\uD488/\uC774\uBCA4\uD2B8 \uC815\uBCF4 \uC218\uC2E0\uB3D9\uC758")), /*#__PURE__*/React.createElement("div", {
    className: "member-modification-form__item member-modification-form__radio-field"
  }, /*#__PURE__*/React.createElement("div", {
    className: "radio-field__content"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email",
    className: "member-modification-form__tit"
  }, "E-Mail \uC218\uC2E0"), /*#__PURE__*/React.createElement("div", {
    className: "member-modification-form__input-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "\uC218\uC2E0\uB3D9\uC758",
    checked: directMailAgreed,
    onChange: function onChange() {
      handleDirectMailAgreedChange(true);
    }
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "\uB3D9\uC758\uC548\uD568",
    checked: !directMailAgreed,
    onChange: function onChange() {
      handleDirectMailAgreedChange(false);
    }
  }))), directMailAgreeYmdt && /*#__PURE__*/React.createElement("p", {
    className: "receive-agreement-time"
  }, "\uC218\uC2E0\uB3D9\uC758\uD558\uC2E0 \uC2DC\uAC04 : ", directMailAgreeYmdt), directMailDisagreeYmdt && /*#__PURE__*/React.createElement("p", {
    className: "receive-agreement-time"
  }, "\uC218\uC2E0\uAC70\uBD80\uD558\uC2E0 \uC2DC\uAC04 : ", directMailDisagreeYmdt), /*#__PURE__*/React.createElement("span", {
    className: "member-modification-form__description"
  }, "* \uC0C1\uD488/\uC774\uBCA4\uD2B8 \uC815\uBCF4 \uC218\uC2E0\uB3D9\uC758")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberModificationReceiveAgreement);

/***/ }),

/***/ "./src/pages/MemberModification/MemberModificationSmsForm.jsx":
/*!********************************************************************!*\
  !*** ./src/pages/MemberModification/MemberModificationSmsForm.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/MemberModificationProvider/MemberModificationProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/IdentificationVerificationProvider/IdentificationVerificationProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/PhoneNumberInput/PhoneNumberInput.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/TextField/TextField.js");
/* harmony import */ var _components_IdentificationVerificationBtn_IdentificationVerificationBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/IdentificationVerificationBtn/IdentificationVerificationBtn */ "./src/components/IdentificationVerificationBtn/IdentificationVerificationBtn.jsx");
/* harmony import */ var _components_Timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Timer */ "./src/components/Timer/index.js");
/* harmony import */ var _ValidationStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ValidationStatus */ "./src/pages/MemberModification/ValidationStatus.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable complexity */






var MemberModificationSmsForm = function MemberModificationSmsForm() {
  var _useMemberModificatio = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useMemberModificationActionContext)(),
    updateNewMobileNo = _useMemberModificatio.updateNewMobileNo,
    updateCertificatedNumber = _useMemberModificatio.updateCertificatedNumber,
    authenticateMobile = _useMemberModificatio.authenticateMobile,
    confirmAuthenticationMobileNo = _useMemberModificatio.confirmAuthenticationMobileNo,
    updateIsAuthenticationReSend = _useMemberModificatio.updateIsAuthenticationReSend,
    updateValidationStatus = _useMemberModificatio.updateValidationStatus,
    updateCarrierNumber = _useMemberModificatio.updateCarrierNumber,
    updateFirstSerial = _useMemberModificatio.updateFirstSerial,
    updateSecondSerial = _useMemberModificatio.updateSecondSerial,
    validateMobile = _useMemberModificatio.validateMobile;
  var _useMemberModificatio2 = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useMemberModificationStateContext)(),
    newMobileNo = _useMemberModificatio2.newMobileNo,
    carrierNumber = _useMemberModificatio2.carrierNumber,
    firstSerial = _useMemberModificatio2.firstSerial,
    secondSerial = _useMemberModificatio2.secondSerial,
    certificatedNumber = _useMemberModificatio2.certificatedNumber,
    authenticationsRemainTimeBySeconds = _useMemberModificatio2.authenticationsRemainTimeBySeconds,
    isAuthenticationReSend = _useMemberModificatio2.isAuthenticationReSend;
  var _useIdentificationVer = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__.useIdentificationVerificationStateContext)(),
    isIdentificationVerificationReSend = _useIdentificationVer.isIdentificationVerificationReSend,
    isCiExist = _useIdentificationVer.isCiExist;
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__.useMallStateContext)(),
    mallJoinConfig = _useMallStateContext.mallJoinConfig;
  var identificationBtnLabel = isIdentificationVerificationReSend ? '재인증' : '휴대폰 본인인증';
  var authenticationBtnLabel = isAuthenticationReSend ? "\uC7AC\uC778\uC99D" : "\uC778\uC99D\uBC88\uD638 \uBC1C\uC1A1";
  var handlePhoneCarrierNumberSelect = function handlePhoneCarrierNumberSelect(_ref) {
    var value = _ref.currentTarget.value;
    updateCarrierNumber(value);
    updateNewMobileNo("".concat(value).concat(firstSerial).concat(secondSerial));
  };
  var handlePhoneFirstSerialNumberChange = function handlePhoneFirstSerialNumberChange(_ref2) {
    var value = _ref2.currentTarget.value;
    updateFirstSerial(value);
    updateNewMobileNo("".concat(carrierNumber).concat(value).concat(secondSerial));
  };
  var handlePhoneSecondSerialNumberChange = function handlePhoneSecondSerialNumberChange(_ref3) {
    var value = _ref3.currentTarget.value;
    updateSecondSerial(value);
    updateNewMobileNo("".concat(carrierNumber).concat(firstSerial).concat(value));
  };
  var handleCertificatedNumber = function handleCertificatedNumber(_ref4) {
    var value = _ref4.currentTarget.value;
    updateCertificatedNumber(value);
  };
  var handleOnSecondSerialBlur = function handleOnSecondSerialBlur() {
    validateMobile();
  };
  var handleSetNewPhoneNumber = function handleSetNewPhoneNumber(newNumber) {
    updateNewMobileNo(newNumber);
    updateCarrierNumber(newNumber.slice(0, 3));
    updateFirstSerial(newNumber.slice(3, 7));
    updateSecondSerial(newNumber.slice(7));
  };
  var handleAuthenticateMobile = function handleAuthenticateMobile(newMobileNo) {
    // 회원 정보 수정에서 사용 안됨
    if (!validateMobile()) {
      return;
    }
    authenticateMobile(newMobileNo);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    updateValidationStatus(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        mobileNo: isCiExist ? {
          result: false,
          message: '휴대폰 번호가 이미 사용중입니다.'
        } : {
          result: true,
          message: ''
        }
      });
    });
  }, [isCiExist]);
  var isSmsAuthentication = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (mallJoinConfig.authenticationType === 'SMS_AUTHENTICATION' && authenticationsRemainTimeBySeconds) {
      return true;
    }
    return false;
  }, [mallJoinConfig, authenticationsRemainTimeBySeconds]);
  var isMobileType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (mallJoinConfig.authenticationType === 'AUTHENTICATION_BY_PHONE' || mallJoinConfig.authenticationType === 'SMS_AUTHENTICATION') {
      return true;
    }
    return false;
  }, [mallJoinConfig]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "member-modification-form__item"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "mobileNo",
    className: "member-modification-form__tit"
  }, "\uD734\uB300\uD3F0\uBC88\uD638"), /*#__PURE__*/React.createElement("div", {
    className: "member-modification-form__input-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "mobileNo",
    id: "mobileNo",
    carrierNumber: carrierNumber,
    firstSerial: firstSerial,
    secondSerial: secondSerial,
    onCarrierNumberSelect: handlePhoneCarrierNumberSelect,
    onFirstSerialChange: handlePhoneFirstSerialNumberChange,
    onSecondSerialChange: handlePhoneSecondSerialNumberChange,
    onSecondSerialBlur: handleOnSecondSerialBlur,
    carrierNumberDisabled: isMobileType && isAuthenticationReSend,
    firstSerialDisabled: isMobileType && isAuthenticationReSend,
    secondSerialDisabled: isMobileType && isAuthenticationReSend
  })), mallJoinConfig.authenticationType === 'SMS_AUTHENTICATION' && /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "member-modification-form__btn--certificate",
    label: authenticationBtnLabel,
    onClick: function onClick() {
      isAuthenticationReSend ? updateIsAuthenticationReSend(false) : handleAuthenticateMobile(newMobileNo);
    }
  }), mallJoinConfig.authenticationType === 'AUTHENTICATION_BY_PHONE' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_IdentificationVerificationBtn_IdentificationVerificationBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "member-modification-form__btn--certificate",
    label: identificationBtnLabel,
    type: "memberModify",
    onSetNewPhoneNumber: handleSetNewPhoneNumber
  }), /*#__PURE__*/React.createElement(_ValidationStatus__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "certificatedNumber"
  })), /*#__PURE__*/React.createElement(_ValidationStatus__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "mobileNo"
  })), isSmsAuthentication && /*#__PURE__*/React.createElement("div", {
    className: "member-modification-form__item"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "certificatedNumber",
    className: "member-modification-form__tit"
  }, "\uC778\uC99D\uBC88\uD638"), /*#__PURE__*/React.createElement("div", {
    className: "member-modification-form__input-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: "certificatedNumber",
    id: "certificatedNumber",
    value: certificatedNumber,
    placeholder: "\uC778\uC99D\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    onChange: handleCertificatedNumber,
    maxLength: 6,
    valid: "NO_SPACE"
  })), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "member-modification-form__btn--certificate",
    label: '확인',
    onClick: function onClick() {
      confirmAuthenticationMobileNo(certificatedNumber);
    }
  }), /*#__PURE__*/React.createElement(_components_Timer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    seconds: authenticationsRemainTimeBySeconds,
    onTimeOutAction: function onTimeOutAction() {
      updateValidationStatus(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          certificatedNumber: {
            result: false,
            message: '유효시간이 초과되었습니다. 다시 [인증번호 발송] 클릭하여 발급된 인증번호를 입력해주세요.'
          }
        });
      });
    }
  }), /*#__PURE__*/React.createElement(_ValidationStatus__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "certificatedNumber"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberModificationSmsForm);

/***/ }),

/***/ "./src/pages/MemberModification/MemberModificationTermsForm.jsx":
/*!**********************************************************************!*\
  !*** ./src/pages/MemberModification/MemberModificationTermsForm.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/AuthProvider/AuthProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/MemberModificationProvider/MemberModificationProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Checkbox/Checkbox.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _components_FullModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/FullModal */ "./src/components/FullModal/index.js");
/* harmony import */ var _components_Sanitized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Sanitized */ "./src/components/Sanitized/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




var MemberModificationTermsForm = function MemberModificationTermsForm() {
  var _useAuthStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useAuthStateContext)(),
    profile = _useAuthStateContext.profile;
  var _useMemberModificatio = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useMemberModificationActionContext)(),
    getTerms = _useMemberModificatio.getTerms,
    checkSingle = _useMemberModificatio.checkSingle,
    updateTermsInfo = _useMemberModificatio.updateTermsInfo,
    updateIsTermsContentFullModalOpen = _useMemberModificatio.updateIsTermsContentFullModalOpen,
    updateTermStatus = _useMemberModificatio.updateTermStatus;
  var _useMemberModificatio2 = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useMemberModificationStateContext)(),
    termStatus = _useMemberModificatio2.termStatus,
    termsInfo = _useMemberModificatio2.termsInfo,
    isTermsContentFullModalOpen = _useMemberModificatio2.isTermsContentFullModalOpen;
  var initialTermStatus = [{
    id: 'use',
    label: '[필수] 이용약관',
    checked: true,
    require: true,
    termsType: 'USE'
  }, {
    id: 'pi',
    label: '[필수] 개인정보 수집 / 이용동의',
    checked: true,
    require: true,
    termsType: 'PI_COLLECTION_AND_USE_REQUIRED'
  }, {
    id: 'age',
    label: '[필수] 만 14세 이상입니다',
    checked: true,
    require: true
  }];
  var handleCheckSingle = function handleCheckSingle(isChecked, label) {
    checkSingle({
      isChecked: isChecked,
      label: label
    });
  };
  var handleGetTerms = function handleGetTerms(_ref) {
    var termsTypes = _ref.termsTypes,
      title = _ref.title;
    getTerms({
      termsTypes: termsTypes
    });
    updateTermsInfo({
      title: title
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    updateTermStatus(initialTermStatus);
  }, [profile]);
  return /*#__PURE__*/React.createElement("div", {
    className: "member-modification-form__item"
  }, /*#__PURE__*/React.createElement("p", {
    className: "member-modification-form__tit"
  }, "\uC57D\uAD00\uB3D9\uC758 \uD604\uD669"), /*#__PURE__*/React.createElement("div", {
    className: "member-modification-form__agree-wrap"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "member-modification-form__agree-list"
  }, termStatus === null || termStatus === void 0 ? void 0 : termStatus.map(function (item, idx) {
    return /*#__PURE__*/React.createElement("li", {
      key: idx
    }, /*#__PURE__*/React.createElement("div", {
      className: "member-modification-form__checkbox--check-single"
    }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: item.label,
      checked: item.checked,
      onChange: function onChange() {
        return handleCheckSingle(item.checked, item.label);
      }
    }), item.termsType && /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: "\uBCF4\uAE30",
      onClick: function onClick() {
        handleGetTerms({
          termsTypes: item.termsType,
          title: item.label
        });
      }
    })));
  })), isTermsContentFullModalOpen && /*#__PURE__*/React.createElement(_components_FullModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "agreement",
    title: termsInfo.title,
    onClose: function onClose() {
      return updateIsTermsContentFullModalOpen(false);
    }
  }, /*#__PURE__*/React.createElement(_components_Sanitized__WEBPACK_IMPORTED_MODULE_2__["default"], {
    html: termsInfo.contents
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberModificationTermsForm);

/***/ }),

/***/ "./src/pages/MemberModification/ValidationStatus.jsx":
/*!***********************************************************!*\
  !*** ./src/pages/MemberModification/ValidationStatus.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/MemberModificationProvider/MemberModificationProvider.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var ValidationStatus = function ValidationStatus(_ref) {
  var _validationStatus$nam, _validationStatus$nam2, _validationStatus$nam3;
  var name = _ref.name;
  var _useMemberModificatio = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_0__.useMemberModificationStateContext)(),
    validationStatus = _useMemberModificatio.validationStatus;
  return /*#__PURE__*/React.createElement("p", {
    className: "description ".concat((_validationStatus$nam = validationStatus[name]) !== null && _validationStatus$nam !== void 0 && _validationStatus$nam.message && (_validationStatus$nam2 = validationStatus[name]) !== null && _validationStatus$nam2 !== void 0 && _validationStatus$nam2.result ? '' : 'alert')
  }, (_validationStatus$nam3 = validationStatus[name]) === null || _validationStatus$nam3 === void 0 ? void 0 : _validationStatus$nam3.message);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationStatus);
ValidationStatus.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};

/***/ }),

/***/ "./src/pages/MemberModification/index.js":
/*!***********************************************!*\
  !*** ./src/pages/MemberModification/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MemberModification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemberModification */ "./src/pages/MemberModification/MemberModification.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_MemberModification__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);
//# sourceMappingURL=src_pages_MemberModification_index_js.e67a029245bbd073867c.bundle.js.map