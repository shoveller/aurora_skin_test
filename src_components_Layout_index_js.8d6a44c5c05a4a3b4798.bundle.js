"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_components_Layout_index_js"],{

/***/ "./src/components/AdminBanner/AdminBanner.jsx":
/*!****************************************************!*\
  !*** ./src/components/AdminBanner/AdminBanner.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/BannerProvider/BannerProvider.js");
/* harmony import */ var _CustomBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CustomBanner */ "./src/components/CustomBanner/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var AdminBanner = function AdminBanner(_ref) {
  var className = _ref.className,
    bannerId = _ref.bannerId;
  var _useBannerStateContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__.useBannerStateContext)(),
    bannerMap = _useBannerStateContex.bannerMap;
  if (!bannerMap) return /*#__PURE__*/React.createElement(React.Fragment, null);
  var banner = bannerMap.get(bannerId);
  var _ref2 = banner !== null && banner !== void 0 ? banner : {},
    banners = _ref2.banners,
    imageSize = _ref2.imageSize,
    bannerGroupName = _ref2.bannerGroupName;
  if (!banners || !banners.length) return /*#__PURE__*/React.createElement(React.Fragment, null);
  var _banners = _slicedToArray(banners, 1),
    bannerInfo = _banners[0];
  var bannerImages = bannerInfo.bannerImages,
    visible = bannerInfo.visible;
  if (!visible) return /*#__PURE__*/React.createElement(React.Fragment, null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, bannerImages === null || bannerImages === void 0 ? void 0 : bannerImages.map(function (image) {
    var _image$landingUrl;
    return /*#__PURE__*/React.createElement(_CustomBanner__WEBPACK_IMPORTED_MODULE_0__["default"], {
      key: image.imageNo,
      className: className,
      href: (_image$landingUrl = image.landingUrl) !== null && _image$landingUrl !== void 0 ? _image$landingUrl : '',
      target: image.openLocationType === 'NEW' ? '_blank' : '_self',
      src: image.imageUrl,
      alt: image.description || bannerGroupName,
      width: imageSize.width,
      height: imageSize.height
    });
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminBanner);
AdminBanner.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  bannerId: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf)(['LOGO', 'BNSLIDE', 'BANNER01', 'BANNER02', 'BANNER03', 'BANNER04', 'BANNER05', 'BNBOTTOM', 'BNBGLEFT', 'BNDETAIL'])
};

/***/ }),

/***/ "./src/components/AdminBanner/index.js":
/*!*********************************************!*\
  !*** ./src/components/AdminBanner/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminBanner */ "./src/components/AdminBanner/AdminBanner.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_AdminBanner__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/BackButton/BackButton.jsx":
/*!**************************************************!*\
  !*** ./src/components/BackButton/BackButton.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/IconBtn/IconBtn.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var BackButton = function BackButton(_ref) {
  var label = _ref.label,
    className = _ref.className,
    onClick = _ref.onClick;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();
  var handleClick = function handleClick() {
    if (!window.navigation.canGoBack) {
      navigate("/");
      return;
    }
    onClick ? onClick() : navigate(-1);
  };
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: label,
    className: className,
    iconType: "arrow-left",
    onClick: handleClick
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackButton);
BackButton.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2__.func
};

/***/ }),

/***/ "./src/components/BackButton/index.js":
/*!********************************************!*\
  !*** ./src/components/BackButton/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BackButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackButton */ "./src/components/BackButton/BackButton.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_BackButton__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/BottomNav/BottomNav.jsx":
/*!************************************************!*\
  !*** ./src/components/BottomNav/BottomNav.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/IconSVG/IconSVG.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var BottomNav = function BottomNav(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    search = _ref.search;
  return /*#__PURE__*/React.createElement("nav", {
    className: "bottom-nav ".concat(className)
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/",
    className: "bottom-nav__link bottom-nav__home"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: 55,
    name: "home",
    strokeWidth: 4
  }), /*#__PURE__*/React.createElement("span", {
    className: "bottom-nav__label"
  }, "\uD648")), /*#__PURE__*/React.createElement("button", {
    className: "bottom-nav__link bottom-nav__link--search",
    onClick: search
  }, /*#__PURE__*/React.createElement("span", {
    className: "bottom-nav__label"
  }, "\uAC80\uC0C9")), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "my-page",
    className: "bottom-nav__link bottom-nav__link--north"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bottom-nav__label"
  }, "\uB9C8\uC774\uD398\uC774\uC9C0")));
};
BottomNav.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  search: prop_types__WEBPACK_IMPORTED_MODULE_2__.func
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BottomNav);

/***/ }),

/***/ "./src/components/BottomNav/index.js":
/*!*******************************************!*\
  !*** ./src/components/BottomNav/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BottomNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BottomNav */ "./src/components/BottomNav/BottomNav.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_BottomNav__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/CategoryNav/CategoryNav.jsx":
/*!****************************************************!*\
  !*** ./src/components/CategoryNav/CategoryNav.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/OffCanvas/OffCanvas.js");
/* harmony import */ var _CategoryNavLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryNavLinks */ "./src/components/CategoryNav/CategoryNavLinks.jsx");
/* harmony import */ var _Cs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cs */ "./src/components/CategoryNav/Cs.jsx");
/* harmony import */ var _SignInButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignInButton */ "./src/components/CategoryNav/SignInButton.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




var CategoryNav = function CategoryNav() {
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "category-nav"
  }, /*#__PURE__*/React.createElement(_SignInButton__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/React.createElement(_CategoryNavLinks__WEBPACK_IMPORTED_MODULE_0__["default"], null), /*#__PURE__*/React.createElement(_Cs__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryNav);

/***/ }),

/***/ "./src/components/CategoryNav/CategoryNavLinks.jsx":
/*!*********************************************************!*\
  !*** ./src/components/CategoryNav/CategoryNavLinks.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/IconSVG/IconSVG.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var CategoryNavLinks = function CategoryNavLinks() {
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_0__.useMallStateContext)(),
    multiLevelCategories = _useMallStateContext.categories.multiLevelCategories;
  return /*#__PURE__*/React.createElement("div", {
    className: "category-nav-content"
  }, multiLevelCategories.length > 0 ? /*#__PURE__*/React.createElement("nav", {
    className: "l-panel category-nav-links"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "a11y"
  }, "\uC0C1\uD488 \uCE74\uD14C\uACE0\uB9AC"), multiLevelCategories.map(function (category) {
    return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      key: category.categoryNo,
      to: "/products?categoryNo=".concat(category.categoryNo),
      style: {
        backgroundImage: "".concat(category.icon)
      },
      className: "category-nav-links__item"
    }, category.label, /*#__PURE__*/React.createElement("span", {
      className: "category-nav-links__arrow"
    }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "angle-r",
      size: 20
    })));
  })) : /*#__PURE__*/React.createElement("p", {
    className: "no-data"
  }, "\uB178\uCD9C \uC911\uC778 \uC804\uC2DC \uCE74\uD14C\uACE0\uB9AC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryNavLinks);

/***/ }),

/***/ "./src/components/CategoryNav/Cs.jsx":
/*!*******************************************!*\
  !*** ./src/components/CategoryNav/Cs.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _constants_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/board */ "./src/constants/board.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var Cs = function Cs() {
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__.useMallStateContext)(),
    boardsCategories = _useMallStateContext.boardsCategories;
  var notice = boardsCategories.find(function (_ref) {
    var boardId = _ref.boardId;
    return boardId === _constants_board__WEBPACK_IMPORTED_MODULE_0__.NOTICE_BOARD_ID;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "cs"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
    shows: notice === null || notice === void 0 ? void 0 : notice.used,
    TruthyComponent: /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
      className: "cs__link",
      to: "/notice"
    }, notice === null || notice === void 0 ? void 0 : notice.boardName)
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    className: "cs__link",
    to: "/customer-center"
  }, "\uACE0\uAC1D\uC13C\uD130"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cs);

/***/ }),

/***/ "./src/components/CategoryNav/SignInButton.jsx":
/*!*****************************************************!*\
  !*** ./src/components/CategoryNav/SignInButton.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/AuthProvider/AuthProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/OffCanvas/OffCanvasProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/IconSVG/IconSVG.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
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




var SignInButton = function SignInButton() {
  var _useAuthStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__.useAuthStateContext)(),
    profile = _useAuthStateContext.profile;
  var _useAuthActionContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__.useAuthActionContext)(),
    fetchProfile = _useAuthActionContext.fetchProfile;
  var _useOffCanvasActionCo = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useOffCanvasActionContext)(),
    closeCanvas = _useOffCanvasActionCo.closeCanvas;
  var _useOffCanvasStateCon = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useOffCanvasStateContext)(),
    visible = _useOffCanvasStateCon.visible;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    userName = _useState2[0],
    setUserName = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!(0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.isSignedIn)()) return;
    _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (profile) {
              _context.next = 3;
              break;
            }
            _context.next = 3;
            return fetchProfile();
          case 3:
            setUserName(profile !== null && profile !== void 0 && profile.memberName ? profile.memberName : profile === null || profile === void 0 ? void 0 : profile.memberNo);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  }, [(0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.isSignedIn)(), visible, profile]);
  return /*#__PURE__*/React.createElement("div", {
    className: "category-nav-sign-in"
  }, /*#__PURE__*/React.createElement("p", null, userName ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/my-page"
  }, userName), " \uB2D8") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: "category-nav-sign-in__link",
    to: "/sign-in",
    state: {
      from: '/'
    }
  }, "\uB85C\uADF8\uC778"), "\uC744 \uD574\uC8FC\uC138\uC694.")), /*#__PURE__*/React.createElement("button", {
    className: "category-nav-sign-in__close",
    onClick: closeCanvas
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "x",
    stroke: "#fff",
    size: 30
  }), /*#__PURE__*/React.createElement("span", {
    className: "a11y"
  }, "\uBA54\uB274 \uB2EB\uAE30")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInButton);

/***/ }),

/***/ "./src/components/CategoryNav/index.js":
/*!*********************************************!*\
  !*** ./src/components/CategoryNav/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CategoryNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryNav */ "./src/components/CategoryNav/CategoryNav.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CategoryNav__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/CustomBanner/CustomBanner.jsx":
/*!******************************************************!*\
  !*** ./src/components/CustomBanner/CustomBanner.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var CustomBanner = function CustomBanner(_ref) {
  var className = _ref.className,
    href = _ref.href,
    target = _ref.target,
    src = _ref.src,
    alt = _ref.alt,
    width = _ref.width,
    height = _ref.height;
  return href ? /*#__PURE__*/React.createElement("a", {
    className: className,
    href: href,
    rel: "noreferrer",
    target: target
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    loading: "lazy",
    width: width,
    height: height
  })) : /*#__PURE__*/React.createElement("img", {
    className: className,
    src: src,
    alt: alt,
    loading: "lazy",
    width: width,
    height: height
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomBanner);
CustomBanner.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_0__.string,
  href: prop_types__WEBPACK_IMPORTED_MODULE_0__.string,
  target: (0,prop_types__WEBPACK_IMPORTED_MODULE_0__.oneOf)(['_blank', '_self']),
  src: prop_types__WEBPACK_IMPORTED_MODULE_0__.string,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_0__.string,
  width: prop_types__WEBPACK_IMPORTED_MODULE_0__.string,
  height: prop_types__WEBPACK_IMPORTED_MODULE_0__.string
};

/***/ }),

/***/ "./src/components/CustomBanner/index.js":
/*!**********************************************!*\
  !*** ./src/components/CustomBanner/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomBanner */ "./src/components/CustomBanner/CustomBanner.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CustomBanner__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/DesignPopup/index.js":
/*!*********************************************!*\
  !*** ./src/components/DesignPopup/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DesignPopupNormal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesignPopupNormal */ "./src/components/DesignPopup/DesignPopupNormal.jsx");
/* harmony import */ var _DesignPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesignPopup */ "./src/components/DesignPopup/DesignPopup.jsx");
/* harmony import */ var _DesignWindowPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DesignWindowPopup */ "./src/components/DesignPopup/DesignWindowPopup.jsx");

// export { default as DesignPopupMultiMain } from './DesignPopupMultiMultiMain';
// export { default as DesignPopupMultiSubject } from './DesignPopupMultiMultiSubject';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_DesignPopup__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/components/Footer/Footer.jsx":
/*!******************************************!*\
  !*** ./src/components/Footer/Footer.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/manage/TermsProvider/TermsProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _FullModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FullModal */ "./src/components/FullModal/index.js");
/* harmony import */ var _Sanitized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Sanitized */ "./src/components/Sanitized/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _excluded = ["termsConfig", "serviceBasicInfo", "since", "businessRegistrationNumberInformation"];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var FOOTER_TERMS_LABEL_MAP = {
  MALL_INTRODUCTION: "회사소개",
  USE: "이용약관",
  PI_PROCESS: "개인정보처리방침",
  ACCESS_GUIDE: "이용안내"
};
var Footer = function Footer() {
  var _useTermsStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useTermsStateContext)(),
    terms = _useTermsStateContext.terms;
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useMallStateContext)(),
    termsConfig = _useMallStateContext.termsConfig,
    serviceBasicInfo = _useMallStateContext.serviceBasicInfo,
    since = _useMallStateContext.since,
    businessRegistrationNumberInformation = _useMallStateContext.businessRegistrationNumberInformation,
    restMall = _objectWithoutProperties(_useMallStateContext, _excluded);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    modalType = _useState2[0],
    setModalType = _useState2[1];
  var services = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var _Object$entries$map$f;
    return (_Object$entries$map$f = Object.entries(FOOTER_TERMS_LABEL_MAP).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        label = _ref2[1];
      var _terms$key = terms[key],
        _terms$key$used = _terms$key.used,
        used = _terms$key$used === void 0 ? false : _terms$key$used,
        _terms$key$contents = _terms$key.contents,
        contents = _terms$key$contents === void 0 ? "" : _terms$key$contents,
        _terms$key$enforcemen = _terms$key.enforcementDate,
        enforcementDate = _terms$key$enforcemen === void 0 ? "" : _terms$key$enforcemen;
      return {
        key: key,
        label: label,
        used: used,
        content: contents,
        enforcementDate: enforcementDate
      };
    }).filter(function (_ref3) {
      var used = _ref3.used;
      return used;
    })) !== null && _Object$entries$map$f !== void 0 ? _Object$entries$map$f : [];
  }, [terms]);
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__info"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "footer__nav"
  }, services.map(function (_ref4) {
    var key = _ref4.key,
      label = _ref4.label,
      content = _ref4.content;
    return /*#__PURE__*/React.createElement("div", {
      key: key
    }, /*#__PURE__*/React.createElement("button", {
      className: "footer__link footer__link--".concat(key === "PI_PROCESS" ? "bold" : ""),
      onClick: function onClick() {
        return setModalType(key);
      }
    }, label), modalType === key && /*#__PURE__*/React.createElement(_FullModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "agreement",
      title: label,
      onClose: function onClose() {
        return setModalType(null);
      }
    }, /*#__PURE__*/React.createElement(_Sanitized__WEBPACK_IMPORTED_MODULE_2__["default"], {
      html: content
    })));
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    className: "footer__link",
    to: "/customer-center"
  }, "\uACE0\uAC1D\uC13C\uD130")), /*#__PURE__*/React.createElement("p", {
    className: "footer__company"
  }, /*#__PURE__*/React.createElement("em", null, serviceBasicInfo.companyName)), /*#__PURE__*/React.createElement("div", {
    className: "footer__about"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    shows: serviceBasicInfo.representativeName,
    TruthyComponent: /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", null, "\uB300\uD45C\uC790\uBA85 : ", serviceBasicInfo.representativeName))
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    shows: serviceBasicInfo.address,
    TruthyComponent: /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", null, "\uC8FC\uC18C : ", serviceBasicInfo.address, " ", serviceBasicInfo.addressDetail))
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    shows: serviceBasicInfo === null || serviceBasicInfo === void 0 ? void 0 : serviceBasicInfo.representPhoneNo,
    TruthyComponent: /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", null, "\uB300\uD45C\uC804\uD654\uBC88\uD638 : ", serviceBasicInfo === null || serviceBasicInfo === void 0 ? void 0 : serviceBasicInfo.representPhoneNo))
  }), (businessRegistrationNumberInformation === null || businessRegistrationNumberInformation === void 0 ? void 0 : businessRegistrationNumberInformation.no) && /*#__PURE__*/React.createElement("p", {
    className: "footer__business-registration"
  }, "\uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638 :", " ", /*#__PURE__*/React.createElement("span", null, businessRegistrationNumberInformation === null || businessRegistrationNumberInformation === void 0 ? void 0 : businessRegistrationNumberInformation.no, " "), /*#__PURE__*/React.createElement("a", {
    href: businessRegistrationNumberInformation === null || businessRegistrationNumberInformation === void 0 ? void 0 : businessRegistrationNumberInformation.url
  }, "[\uC0AC\uC5C5\uC790\uC815\uBCF4\uD655\uC778]")), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    shows: serviceBasicInfo.onlineMarketingBusinessDeclarationNo,
    TruthyComponent: /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", null, "\uD1B5\uC2E0\uD310\uB9E4\uC5C5\uC2E0\uACE0\uBC88\uD638 :", " ", serviceBasicInfo.onlineMarketingBusinessDeclarationNo))
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    shows: serviceBasicInfo.privacyManagerName,
    TruthyComponent: /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", null, "\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uCC45\uC784\uC790 : ", serviceBasicInfo.privacyManagerName))
  }), /*#__PURE__*/React.createElement("p", null, "\uD638\uC2A4\uD2B8\uC81C\uACF5 : \uC5D4\uC5D0\uC774\uCE58\uC5D4\uCEE4\uBA38\uC2A4(\uC8FC)"))), /*#__PURE__*/React.createElement("p", {
    className: "copyright"
  }, "Copyright \xA9 ", since, " ", restMall.companyName, " ALL RIGHT RESERVED"), /*#__PURE__*/React.createElement("div", {
    className: "footer__extra-logo"
  }, termsConfig.fairLogoUsed && /*#__PURE__*/React.createElement("img", {
    src: termsConfig.fairLogoUrl,
    alt: ""
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer/Footer.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Footer__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/***/ "./src/components/Header/Header.jsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/IconSVG/IconSVG.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/modal/ModalProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/SearchField/SearchField.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/BannerProvider/BannerProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/RecentKeywordProvider/RecentKeywordProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/OffCanvas/OffCanvasProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/order/CartBtn/CartBtn.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/IconBtn/IconBtn.js");
/* harmony import */ var _hooks_useSearchKeyword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useSearchKeyword */ "./src/hooks/useSearchKeyword.js");
/* harmony import */ var _BackButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BackButton */ "./src/components/BackButton/index.js");
/* harmony import */ var _Layout_LayoutProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layout/LayoutProvider */ "./src/components/Layout/LayoutProvider.jsx");
/* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Nav/Nav */ "./src/components/Nav/Nav.jsx");
/* harmony import */ var _MallLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MallLogo */ "./src/components/Header/MallLogo.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var MainHeader = function MainHeader(_ref) {
  var openCanvas = _ref.openCanvas;
  return /*#__PURE__*/React.createElement("button", {
    className: "hamburger-menu header__left-btn",
    onClick: openCanvas
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "hamburger",
    size: 50,
    strokeWidth: 3
  }), /*#__PURE__*/React.createElement("span", {
    className: "a11y"
  }, "\uC88C\uCE21 \uBA54\uB274 \uBCF4\uAE30"));
};
MainHeader.propTypes = {
  openCanvas: prop_types__WEBPACK_IMPORTED_MODULE_7__.func
};
var SearchKeywordHeader = function SearchKeywordHeader(_ref2) {
  var title = _ref2.title;
  var _useModalActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__.useModalActionContext)(),
    openAlert = _useModalActionContex.openAlert;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showsSearchKeyword = _useState2[0],
    setShowsSearchKeyword = _useState2[1];
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 2),
    searchParams = _useSearchParams2[0],
    setSearchParams = _useSearchParams2[1];
  var _useSearchKeyword = (0,_hooks_useSearchKeyword__WEBPACK_IMPORTED_MODULE_1__["default"])(title),
    keyword = _useSearchKeyword.keyword,
    searchProductsByKeyword = _useSearchKeyword.searchProductsByKeyword,
    removeKeyword = _useSearchKeyword.removeKeyword,
    updateKeyword = _useSearchKeyword.updateKeyword;
  var keywordParam = searchParams.get('keyword');
  var searchKeyword = function searchKeyword(_keyword) {
    if (!_keyword) {
      openAlert({
        message: '키워드를 입력하세요.'
      });
      return;
    }
    searchProductsByKeyword(_keyword);
    setSearchParams({
      keyword: keyword
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!keywordParam) return;
    searchProductsByKeyword(keywordParam);
    updateKeyword(keywordParam);
  }, [keywordParam]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, showsSearchKeyword ? /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "header__search-field",
    searchValue: keyword,
    onSearchBtnClick: function onSearchBtnClick() {
      return searchKeyword(keyword);
    },
    onClearBtnClick: removeKeyword,
    onChange: function onChange(_ref3) {
      var target = _ref3.target;
      return updateKeyword(target.value);
    }
  }) : /*#__PURE__*/React.createElement("button", {
    className: "header__title",
    onClick: function onClick() {
      return setShowsSearchKeyword(function (prev) {
        return !prev;
      });
    }
  }, keyword));
};
SearchKeywordHeader.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_7__.string
};
var Content = function Content(_ref4) {
  var isMain = _ref4.isMain,
    hasSearchKeywordHeader = _ref4.hasSearchKeywordHeader,
    title = _ref4.title;
  var _useBannerStateContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_11__.useBannerStateContext)(),
    bannerMap = _useBannerStateContex.bannerMap;
  if (isMain) {
    return /*#__PURE__*/React.createElement(_MallLogo__WEBPACK_IMPORTED_MODULE_5__["default"], {
      banner: bannerMap.get('LOGO')
    });
  }
  if (hasSearchKeywordHeader) {
    return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/React.createElement(SearchKeywordHeader, {
      title: title
    }));
  }
  return /*#__PURE__*/React.createElement("h1", {
    className: "header__title"
  }, title);
};
Content.propTypes = {
  isMain: prop_types__WEBPACK_IMPORTED_MODULE_7__.bool,
  hasSearchKeywordHeader: prop_types__WEBPACK_IMPORTED_MODULE_7__.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_7__.string
};
var Header = function Header() {
  var _useLayoutValueContex = (0,_Layout_LayoutProvider__WEBPACK_IMPORTED_MODULE_3__.useLayoutValueContext)(),
    _useLayoutValueContex2 = _useLayoutValueContex.isMain,
    isMain = _useLayoutValueContex2 === void 0 ? false : _useLayoutValueContex2,
    _useLayoutValueContex3 = _useLayoutValueContex.hasBackBtnOnHeader,
    hasBackBtnOnHeader = _useLayoutValueContex3 === void 0 ? false : _useLayoutValueContex3,
    _useLayoutValueContex4 = _useLayoutValueContex.hasCartBtnOnHeader,
    hasCartBtnOnHeader = _useLayoutValueContex4 === void 0 ? false : _useLayoutValueContex4,
    _useLayoutValueContex5 = _useLayoutValueContex.hasSearchKeywordHeader,
    hasSearchKeywordHeader = _useLayoutValueContex5 === void 0 ? false : _useLayoutValueContex5,
    _useLayoutValueContex6 = _useLayoutValueContex.hasCancelBtnOnHeader,
    hasCancelBtnOnHeader = _useLayoutValueContex6 === void 0 ? false : _useLayoutValueContex6,
    _useLayoutValueContex7 = _useLayoutValueContex.title,
    title = _useLayoutValueContex7 === void 0 ? '' : _useLayoutValueContex7;
  var _useOffCanvasActionCo = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_13__.useOffCanvasActionContext)(),
    openCanvas = _useOffCanvasActionCo.openCanvas;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useNavigate)();
  var canShowShoppingBasket = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (isMain || hasCartBtnOnHeader) && !hasCancelBtnOnHeader;
  }, [isMain, hasCartBtnOnHeader]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "header ".concat(!isMain ? 'header--sub' : '')
  }, isMain ? /*#__PURE__*/React.createElement(MainHeader, {
    openCanvas: openCanvas
  }) : hasBackBtnOnHeader && /*#__PURE__*/React.createElement(_BackButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "\uD398\uC774\uC9C0 \uB4A4\uB85C \uAC00\uAE30",
    className: "header__left-btn"
  }), /*#__PURE__*/React.createElement(Content, {
    isMain: isMain,
    hasSearchKeywordHeader: hasSearchKeywordHeader,
    title: title
  }), canShowShoppingBasket && /*#__PURE__*/React.createElement("div", {
    className: "header__cart-btn"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
    to: "/cart"
  }, /*#__PURE__*/React.createElement("span", {
    className: "a11y"
  }, "\uC7A5\uBC14\uAD6C\uB2C8 \uD398\uC774\uC9C0 \uC774\uB3D9"), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_15__["default"], null))), hasCancelBtnOnHeader && /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: "header__cancel-btn",
    iconType: "x-black",
    onClick: function onClick() {
      return navigate('/');
    },
    size: "xs"
  })), isMain && /*#__PURE__*/React.createElement(_Nav_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Header/MallLogo.jsx":
/*!********************************************!*\
  !*** ./src/components/Header/MallLogo.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var MallLogo = function MallLogo(_ref) {
  var banner = _ref.banner;
  if (!banner) return /*#__PURE__*/React.createElement(React.Fragment, null);
  var imageSize = banner.imageSize,
    banners = banner.banners;
  var _banners = _slicedToArray(banners, 1),
    bannerInfo = _banners[0];
  var bannerImages = bannerInfo.bannerImages;
  var _bannerImages = _slicedToArray(bannerImages, 1),
    imageInfo = _bannerImages[0];
  return /*#__PURE__*/React.createElement("h1", {
    className: "header__title"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {
    href: imageInfo.landingUrl,
    target: imageInfo.openLocationType === 'NEW' ? '_blank' : '_self'
  }, /*#__PURE__*/React.createElement("img", {
    className: "header__logo-img",
    src: imageInfo.imageUrl,
    alt: imageInfo.description || '(로고) 홈으로 가기',
    loading: "lazy",
    width: imageSize.width,
    height: imageSize.height
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MallLogo);
MallLogo.propTypes = {
  banner: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.shape)({
    skinCode: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
    skinName: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
    bannerGroupType: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
    skinNo: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
    imageSize: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.shape)({
      width: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
      height: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
    }),
    banners: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_1__.shape)({
      visible: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
      resizable: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
      registerDateTime: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
      slideBannerConfig: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.shape)({
        slideSpeedType: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
        slideNavigationInfo: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.shape)({
          buttonSizeType: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
          inactiveButtonColor: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
          activeButtonColor: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
          buttonBorderType: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
        }),
        slideButtonColor: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
        slideTime: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
        slideNavigationType: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
        slideEffectType: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
        usableSlideButton: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool
      }),
      platformType: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
      bannerNo: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
      displayValue: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.shape)({
        startDateTime: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
        endDateTime: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
        displayPeriodType: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
      }),
      bannerTitle: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
      width: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
      updateDateTime: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
      sizeUnitType: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
      bannerImages: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_1__.shape)({
        displayValue: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.shape)({
          startDateTime: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
          endDateTime: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
          displayPeriodType: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
        }),
        openLocationType: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
        inactiveNavigationImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
        imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
        displayOrder: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
        description: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
        imageNo: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
        activeNavigationImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
        landingUrl: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
      })),
      height: prop_types__WEBPACK_IMPORTED_MODULE_1__.number
    })),
    bannerGroupName: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
    bannerGroupCode: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf)(['LOGO', 'BNSLIDE', 'BANNER01', 'BANNER02', 'BANNER03', 'BANNER04', 'BANNER05', 'BNBOTTOM', 'BNBGLEFT', 'BNDETAIL'])
  })
};

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/components/Header/Header.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Header__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Layout/Layout.jsx":
/*!******************************************!*\
  !*** ./src/components/Layout/Layout.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/AuthProvider/AuthProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/manage/PageScriptsProvider/PageScriptsProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/manage/BoardConfigurationProvider/BoardConfigurationProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/hooks/useShopbyStatisticsRecorder.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/BannerProvider/BannerProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/OffCanvas/OffCanvasProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/manage/SearchAddressProvider/SearchAddressProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Icon/Icon.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _AdminBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AdminBanner */ "./src/components/AdminBanner/index.js");
/* harmony import */ var _BottomNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BottomNav */ "./src/components/BottomNav/index.js");
/* harmony import */ var _CategoryNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CategoryNav */ "./src/components/CategoryNav/index.js");
/* harmony import */ var _DesignPopup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DesignPopup */ "./src/components/DesignPopup/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.js");
/* harmony import */ var _Meta_Meta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Meta/Meta */ "./src/components/Meta/Meta.jsx");
/* harmony import */ var _SearchKeyword__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../SearchKeyword */ "./src/components/SearchKeyword/index.js");
/* harmony import */ var _LayoutProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LayoutProvider */ "./src/components/Layout/LayoutProvider.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var platformType = react_device_detect__WEBPACK_IMPORTED_MODULE_1__.isMobile ? _shopby_shared__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_TYPE.MOBILE_WEB : _shopby_shared__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_TYPE.PC;
var Layout = function Layout() {
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useLocation)();
  var _useAuthStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_13__.useAuthStateContext)(),
    profile = _useAuthStateContext.profile,
    isProfileLoading = _useAuthStateContext.isProfileLoading;
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_14__.useMallStateContext)(),
    clientId = _useMallStateContext.clientId,
    mallProfile = _useMallStateContext.mallProfile,
    externalServiceConfig = _useMallStateContext.externalServiceConfig;
  var _usePageScriptsAction = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_15__.usePageScriptsActionContext)(),
    applyPageScripts = _usePageScriptsAction.applyPageScripts;
  var _useBoardConfiguratio = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_16__.useBoardConfigurationContextAction)(),
    fetchBoardConfiguration = _useBoardConfiguratio.fetchBoardConfiguration;
  var _useShopbyStatisticsR = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_17__["default"])({
      clientId: clientId,
      mallProfile: mallProfile
    }),
    isScriptLoaded = _useShopbyStatisticsR.isScriptLoaded,
    record = _useShopbyStatisticsR.record;
  var pageRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var pageInnerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isScriptLoaded && !isProfileLoading) {
      record(profile === null || profile === void 0 ? void 0 : profile.memberNo);
    }
  }, [isScriptLoaded, isProfileLoading, location.pathname]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var googleAnalyticsId = externalServiceConfig === null || externalServiceConfig === void 0 ? void 0 : externalServiceConfig.googleAnalytics;
    if (!googleAnalyticsId) return;
    (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_2__.setGoogleAnalytics)(googleAnalyticsId);
  }, [location.pathname, externalServiceConfig]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isProfileLoading) return;
    applyPageScripts("COMMON", {
      getPlatform: function getPlatform() {
        return platformType;
      },
      profile: profile
    });
    applyPageScripts("COMMON_HEAD");
    applyPageScripts("COMMON_FOOTER");
  }, [profile, isProfileLoading, location]);
  var onClickAnchor = function onClickAnchor(positionY) {
    window.scrollTo({
      top: positionY,
      behavior: "smooth"
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    onClickAnchor(0);
    fetchBoardConfiguration();
  }, []);
  return /*#__PURE__*/React.createElement(_LayoutProvider__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/React.createElement("div", {
    className: "page",
    ref: pageRef
  }, /*#__PURE__*/React.createElement(_DesignPopup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    refs: {
      pageInnerRef: pageInnerRef,
      pageRef: pageRef
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "page__side"
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/React.createElement(_Meta_Meta__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/React.createElement("div", {
    className: "page-inner",
    ref: pageInnerRef
  }, /*#__PURE__*/React.createElement("article", {
    className: "page__content banner--left"
  }, /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement(_AdminBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    bannerId: "BNBGLEFT"
  }))), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/React.createElement("div", {
    className: "page__content site"
  }, /*#__PURE__*/React.createElement(_Header__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/React.createElement("main", {
    className: "l-content"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Outlet, {
    context: platformType
  })), /*#__PURE__*/React.createElement(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_20__["default"], null, /*#__PURE__*/React.createElement(BottomNavWrap, null)), /*#__PURE__*/React.createElement(_CategoryNav__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/React.createElement("span", {
    className: "fab-top-down"
  }, /*#__PURE__*/React.createElement("button", {
    className: "fab-btn fab-btn--top",
    onClick: function onClick() {
      return onClickAnchor(0);
    }
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_21__["default"], {
    name: "angle-down",
    className: "fab-btn__top"
  }), /*#__PURE__*/React.createElement("span", {
    className: "a11y"
  }, "\uD398\uC774\uC9C0 \uC0C1\uB2E8\uC73C\uB85C \uAC00\uAE30"))))))), /*#__PURE__*/React.createElement("div", {
    className: "page__side"
  })));
};
var BottomNavWrap = function BottomNavWrap() {
  var _useLayoutValueContex = (0,_LayoutProvider__WEBPACK_IMPORTED_MODULE_11__.useLayoutValueContext)(),
    hasBottomNav = _useLayoutValueContex.hasBottomNav;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openSearchFullModal = _useState2[0],
    setOpenSearchFullModal = _useState2[1];
  if (hasBottomNav) return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_BottomNav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    search: function search() {
      return setOpenSearchFullModal(true);
    }
  }), openSearchFullModal && /*#__PURE__*/React.createElement(_SearchKeyword__WEBPACK_IMPORTED_MODULE_10__["default"], {
    openModal: setOpenSearchFullModal
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);
Layout.propTypes = {
  isMain: prop_types__WEBPACK_IMPORTED_MODULE_22__.bool,
  hasBottomNav: prop_types__WEBPACK_IMPORTED_MODULE_22__.bool,
  hasHomeBtn: prop_types__WEBPACK_IMPORTED_MODULE_22__.bool,
  hasBackBtn: prop_types__WEBPACK_IMPORTED_MODULE_22__.bool,
  hasCartBtn: prop_types__WEBPACK_IMPORTED_MODULE_22__.bool
};

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

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ "./src/components/Layout/Layout.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Meta/Meta.jsx":
/*!**************************************!*\
  !*** ./src/components/Meta/Meta.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/BannerProvider/BannerProvider.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




var Meta = function Meta() {
  var _mall$url, _bannerMap$get, _banner$banners, _banner$banners$0$ban, _banner$banners2, _banner$banners2$0$ba;
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useMallStateContext)(),
    mallName = _useMallStateContext.mallName,
    mall = _useMallStateContext.mall;
  var _useBannerStateContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useBannerStateContext)(),
    bannerMap = _useBannerStateContex.bannerMap;
  var platform = react_device_detect__WEBPACK_IMPORTED_MODULE_0__.isMobile ? _shopby_shared__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_TYPE.MOBILE_WEB : _shopby_shared__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_TYPE.PC;
  var url = (_mall$url = mall.url) === null || _mall$url === void 0 ? void 0 : _mall$url[platform.toLocaleLowerCase()];
  var banner = (_bannerMap$get = bannerMap.get('LOGO')) !== null && _bannerMap$get !== void 0 ? _bannerMap$get : {};
  return /*#__PURE__*/React.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/React.createElement("meta", {
    name: "author",
    content: mallName
  }), /*#__PURE__*/React.createElement("meta", {
    name: "description",
    content: mallName
  }), /*#__PURE__*/React.createElement("meta", {
    name: "keywords",
    content: mallName
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:title",
    content: mallName
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:image",
    content: banner === null || banner === void 0 ? void 0 : (_banner$banners = banner.banners) === null || _banner$banners === void 0 ? void 0 : (_banner$banners$0$ban = _banner$banners[0].bannerImages) === null || _banner$banners$0$ban === void 0 ? void 0 : _banner$banners$0$ban[0].imageUrl
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:url",
    content: url
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:description",
    content: "\uC5EC\uAE30\uB97C \uB20C\uB7EC \uB9C1\uD06C\uB97C \uD655\uC778\uD558\uC138\uC694."
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:image:width",
    content: "436"
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:image:height",
    content: "134"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:card",
    content: "summary"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:title",
    content: mallName
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:description",
    content: "\uC5EC\uAE30\uB97C \uB20C\uB7EC \uB9C1\uD06C\uB97C \uD655\uC778\uD558\uC138\uC694."
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:image",
    content: banner === null || banner === void 0 ? void 0 : (_banner$banners2 = banner.banners) === null || _banner$banners2 === void 0 ? void 0 : (_banner$banners2$0$ba = _banner$banners2[0].bannerImages) === null || _banner$banners2$0$ba === void 0 ? void 0 : _banner$banners2$0$ba[0].imageUrl
  }), /*#__PURE__*/React.createElement("title", null, mallName));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Meta);

/***/ }),

/***/ "./src/components/Nav/Nav.jsx":
/*!************************************!*\
  !*** ./src/components/Nav/Nav.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Slider/Slider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/swiper/react/swiper-react.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var Nav = function Nav(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_0__.useMallStateContext)(),
    categories = _useMallStateContext.categories;
  if (!categories) return /*#__PURE__*/React.createElement(React.Fragment, null);
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav ".concat(className)
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
    slidesPerView: "auto"
  }, categories.multiLevelCategories.map(function (category) {
    return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
      key: category.categoryNo
    }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
      to: "/products?categoryNo=".concat(category.categoryNo),
      className: function className(_ref2) {
        var isActive = _ref2.isActive;
        return isActive ? 'is-active nav__link' : 'nav__link';
      }
    }, category.label));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);
Nav.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4__.string
};

/***/ }),

/***/ "./src/components/SearchKeyword/SearchKeyword.jsx":
/*!********************************************************!*\
  !*** ./src/components/SearchKeyword/SearchKeyword.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/SearchField/SearchField.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/RecentKeyword/RecentKeyword.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/modal/CustomModal/CustomModal.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/RecentKeywordProvider/RecentKeywordProvider.js");
/* harmony import */ var _hooks_useSearchKeyword__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/useSearchKeyword */ "./src/hooks/useSearchKeyword.js");
/* harmony import */ var _BackButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BackButton */ "./src/components/BackButton/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




var SearchKeywordContent = function SearchKeywordContent(_ref) {
  var openModal = _ref.openModal;
  var _useSearchKeyword = (0,_hooks_useSearchKeyword__WEBPACK_IMPORTED_MODULE_0__["default"])(''),
    keyword = _useSearchKeyword.keyword,
    searchProductsByKeyword = _useSearchKeyword.searchProductsByKeyword,
    removeKeyword = _useSearchKeyword.removeKeyword,
    updateKeyword = _useSearchKeyword.updateKeyword;
  var searchKeyword = function searchKeyword(_keyword) {
    searchProductsByKeyword(_keyword);
    location.href = "/products?keyword=".concat(encodeURIComponent(_keyword));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "search-keyword-modal__top"
  }, /*#__PURE__*/React.createElement(_BackButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "search-keyword-modal__back-btn",
    onClick: function onClick() {
      return openModal(false);
    }
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
    searchValue: keyword,
    onSearchBtnClick: function onSearchBtnClick() {
      return searchKeyword(keyword);
    },
    onClearBtnClick: removeKeyword,
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      return updateKeyword(target.value);
    }
  })), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onKeywordClick: function onKeywordClick(_keyword) {
      return searchKeyword(_keyword);
    }
  }));
};
SearchKeywordContent.propTypes = {
  openModal: prop_types__WEBPACK_IMPORTED_MODULE_4__.func
};
var SearchKeyword = function SearchKeyword(_ref3) {
  var openModal = _ref3.openModal;
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "title-modal--full search-keyword-modal"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SearchKeywordContent, {
    openModal: openModal
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchKeyword);
SearchKeyword.propTypes = {
  openModal: prop_types__WEBPACK_IMPORTED_MODULE_4__.func
};

/***/ }),

/***/ "./src/components/SearchKeyword/index.js":
/*!***********************************************!*\
  !*** ./src/components/SearchKeyword/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SearchKeyword__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchKeyword */ "./src/components/SearchKeyword/SearchKeyword.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_SearchKeyword__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/***/ "./src/constants/board.js":
/*!********************************!*\
  !*** ./src/constants/board.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NOTICE_BOARD_ID": () => (/* binding */ NOTICE_BOARD_ID)
/* harmony export */ });
var NOTICE_BOARD_ID = 'notice';

/***/ }),

/***/ "./src/hooks/useSearchKeyword.js":
/*!***************************************!*\
  !*** ./src/hooks/useSearchKeyword.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/RecentKeywordProvider/RecentKeywordProvider.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var useSearchKeyword = function useSearchKeyword(initialKeyword) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialKeyword !== null && initialKeyword !== void 0 ? initialKeyword : ''),
    _useState2 = _slicedToArray(_useState, 2),
    keyword = _useState2[0],
    setKeyword = _useState2[1];
  var _useRecentKeywordActi = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__.useRecentKeywordActionContext)(),
    add = _useRecentKeywordActi.add;
  var updateKeyword = function updateKeyword(_keyword) {
    return setKeyword(_keyword);
  };
  var removeKeyword = function removeKeyword() {
    return setKeyword('');
  };
  var searchProductsByKeyword = function searchProductsByKeyword(_keyword) {
    add(_keyword);
    setKeyword(keyword);
  };
  return {
    searchProductsByKeyword: searchProductsByKeyword,
    removeKeyword: removeKeyword,
    updateKeyword: updateKeyword,
    keyword: keyword
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSearchKeyword);

/***/ })

}]);
//# sourceMappingURL=src_components_Layout_index_js.8d6a44c5c05a4a3b4798.bundle.js.map