"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["default-src_components_GalleryListPage_index_js-src_hooks_useLayoutChanger_js"],{

/***/ "./node_modules/@shopby/react-components/dist/esm/common/Badge/Badge.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/common/Badge/Badge.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(a){for(var s,e=1,n=arguments.length;e<n;e++)for(var r in s=arguments[e])Object.prototype.hasOwnProperty.call(s,r)&&(a[r]=s[r]);return a},__assign.apply(this,arguments)};var Badge=function(a){var s=a.label,e=a.badgeType,n=void 0===e?"square":e,r=a.colorType,t=void 0===r?"caution":r,i=a.className,o=void 0===i?"":i;return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",__assign({className:"badge badge--".concat(n," badge--").concat(t," ").concat(o)},{children:s}))};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badge);

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/common/Icon/Icon.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/common/Icon/Icon.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var Icon=function(a){var c=a.className,o=void 0===c?"":c,n=a.name;return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"ico ico--".concat(n," ").concat(o)})};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/common/InfiniteScrollLoader/InfiniteScrollLoader.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/common/InfiniteScrollLoader/InfiniteScrollLoader.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/debounce.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(r){for(var e,n=1,t=arguments.length;n<t;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r},__assign.apply(this,arguments)},__read=undefined&&undefined.__read||function(r,e){var n="function"==typeof Symbol&&r[Symbol.iterator];if(!n)return r;var t,o,i=n.call(r),s=[];try{for(;(void 0===e||e-- >0)&&!(t=i.next()).done;)s.push(t.value)}catch(r){o={error:r}}finally{try{t&&!t.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s};var DEFAULT_OPTION={rootMargin:"1px",threshold:1},InfiniteScrollLoader=function(r){var e=r.rootRef,n=r.onIntersect,t=r.disabled,o=void 0!==t&&t,i=r.option,s=void 0===i?DEFAULT_OPTION:i,a=r.debounceTime,l=void 0===a?200:a,u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),c=n?(0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])((function(){null==n||n()}),l):null,f=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(r){__read(r,1)[0].isIntersecting&&!o&&(null==c||c())}),[n,o]);return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){var r=new IntersectionObserver(f,__assign(__assign({},s),{root:null==e?void 0:e.current}));return r.observe(u.current),function(){return r.disconnect()}}),[f,e]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref:u,className:"infinite-scroll-loader"})};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfiniteScrollLoader);

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/common/SelectBox/SelectBox.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/common/SelectBox/SelectBox.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(e){for(var s,a=1,t=arguments.length;a<t;a++)for(var o in s=arguments[a])Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);return e},__assign.apply(this,arguments)};var SelectBox=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function(e,s){var a=e.value,t=void 0===a?"":a,o=e.hasEmptyOption,i=void 0!==o&&o,n=e.emptyOptionLabel,r=void 0===n?"":n,l=e.options,c=e.onSelect,d=e.hasSortOption,_=void 0!==d&&d,p=e.className,u=void 0===p?"":p,v=e.disabled;return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",__assign({className:"select-box ".concat(u," ").concat(_?"select-box--sort":"")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select",__assign({ref:s,onChange:c,value:t,disabled:v},{children:[i&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",__assign({value:"",disabled:!0},{children:r})),l&&l.map((function(e){return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",__assign({value:e.value,disabled:null==e?void 0:e.disabled},{children:e.label}),e.value)}))]}))}))}));/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectBox);SelectBox.displayName="SelectBox";

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/common/Thumbs/ThumbItem.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/common/Thumbs/ThumbItem.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _shopby_shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared/utils */ "./node_modules/@shopby/shared/dist/esm/utils/index.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(s){for(var a,i=1,e=arguments.length;i<e;i++)for(var t in a=arguments[i])Object.prototype.hasOwnProperty.call(a,t)&&(s[t]=a[t]);return s},__assign.apply(this,arguments)};var ThumbItem=function(s){var a=s.href,i=s.HoverViewComponent,e=void 0===i?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{}):i,t=s.resize,n=void 0===t?"":t,_=s.adult,r=s.src,m=s.children,c=s.className,l=void 0===c?"":c,o=s.alt,d=void 0===o?"":o;return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",__assign({className:"thumb-item ".concat(l)},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",__assign({className:"thumb-item__media"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",__assign({href:a,className:"thumb-item__img-box"},{children:[_&&!(0,_shopby_shared_utils__WEBPACK_IMPORTED_MODULE_1__.isAgeVerified)()&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",__assign({className:"bg bg--adult thumb-item__adult"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",__assign({className:"a11y"},{children:"성인 인증이 필요 합니다."}))})),r&&(!_||(0,_shopby_shared_utils__WEBPACK_IMPORTED_MODULE_1__.isAgeVerified)())&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",__assign({className:"thumb-item__img"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"".concat(r).concat(n?"?".concat(n):""),alt:d,loading:"lazy"})}))]})),e]})),m&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",__assign({className:"thumb-item__info"},{children:m}))]}))};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThumbItem);

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/common/Thumbs/ThumbList.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/common/Thumbs/ThumbList.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _shopby_shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared/constants */ "./node_modules/@shopby/shared/dist/esm/constants/index.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(s){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=t[i]);return s},__assign.apply(this,arguments)};var ThumbList=function(s){var t=s.displayType,a=void 0===t?_shopby_shared_constants__WEBPACK_IMPORTED_MODULE_1__.THUMB_LIST_TYPE.LIST:t,r=s.className,i=void 0===r?"":r,n=s.style,e=void 0===n?{}:n,o=s.children;return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",__assign({style:e,className:"thumb-".concat(a," ").concat(i)},{children:o}))};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThumbList);

/***/ }),

/***/ "./src/components/GalleryListPage/GalleryListPage.jsx":
/*!************************************************************!*\
  !*** ./src/components/GalleryListPage/GalleryListPage.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Icon/Icon.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Thumbs/ThumbList.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Thumbs/ThumbItem.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/InfiniteScrollLoader/InfiniteScrollLoader.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _ProductThumbBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ProductThumbBadge */ "./src/components/ProductThumbBadge/index.js");
/* harmony import */ var _ProductThumbInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProductThumbInfo */ "./src/components/ProductThumbInfo/index.js");
/* harmony import */ var _TotalCountAndSort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TotalCountAndSort */ "./src/components/TotalCountAndSort/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var NoSearchProduct = function NoSearchProduct() {
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  var keyword = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return searchParams.get('keyword');
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, keyword ? /*#__PURE__*/React.createElement("div", {
    className: "no-search"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "no-search__title"
  }, "'", keyword, "' \uC5D0 \uB300\uD55C \uAC80\uC0C9\uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "no-items"
  }), /*#__PURE__*/React.createElement("p", {
    className: "no-search__description"
  }, "\uC815\uD655\uD55C \uAC80\uC0C9\uC5B4\uB97C \uD655\uC778\uD558\uC2DC\uACE0 \uB2E4\uC2DC \uAC80\uC0C9\uD574\uC8FC\uC138\uC694.", /*#__PURE__*/React.createElement("br", null), "\uC77C\uC2DC\uC801\uC73C\uB85C \uC0C1\uD488\uC774 \uD488\uC808 \uB418\uC5C8\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", /*#__PURE__*/React.createElement("br", null), "\uB2E8\uC5B4\uC758 \uCCA0\uC790\uB098 \uB744\uC5B4\uC4F0\uAE30\uB97C \uB2E4\uB974\uAC8C \uD574\uBCF4\uC138\uC694.")) : /*#__PURE__*/React.createElement("p", {
    className: "not-found-product"
  }, "\uC0C1\uD488\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
};
var GalleryListPage = function GalleryListPage(_ref) {
  var style = _ref.style,
    totalCount = _ref.totalCount,
    products = _ref.products,
    sortType = _ref.sortType,
    sortBy = _ref.sortBy,
    updateSortType = _ref.updateSortType,
    handleIntersect = _ref.handleIntersect,
    disabled = _ref.disabled,
    className = _ref.className;
  return /*#__PURE__*/React.createElement("div", {
    className: "l-panel"
  }, products.length > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_TotalCountAndSort__WEBPACK_IMPORTED_MODULE_4__["default"], {
    totalCount: totalCount,
    sortType: sortType,
    sortBy: sortBy,
    updateSortType: updateSortType
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: style,
    displayType: _shopby_shared__WEBPACK_IMPORTED_MODULE_1__.THUMB_LIST_TYPE.GALLERY,
    className: className
  }, products.map(function (_ref2) {
    var productNo = _ref2.productNo,
      adult = _ref2.adult,
      listImageUrls = _ref2.listImageUrls,
      isSoldOut = _ref2.isSoldOut,
      saleStatusType = _ref2.saleStatusType,
      salePrice = _ref2.salePrice,
      promotionText = _ref2.promotionText,
      productName = _ref2.productName,
      immediateDiscountAmt = _ref2.immediateDiscountAmt,
      additionalDiscountAmt = _ref2.additionalDiscountAmt,
      frontDisplayYn = _ref2.frontDisplayYn;
    return frontDisplayYn && /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: productNo,
      resize: "220x220",
      href: "/product-detail?productNo=".concat(productNo),
      src: listImageUrls[0],
      adult: adult,
      alt: productName
    }, /*#__PURE__*/React.createElement(_ProductThumbBadge__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isSoldOut: isSoldOut,
      saleStatusType: saleStatusType
    }), /*#__PURE__*/React.createElement(_ProductThumbInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
      promotionText: promotionText,
      productName: productName,
      salePrice: (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.calculateDiscountedPrice)({
        salePrice: salePrice,
        immediateDiscountAmt: immediateDiscountAmt,
        additionalDiscountAmt: additionalDiscountAmt
      })
    }));
  })), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onIntersect: handleIntersect,
    disabled: disabled
  })) : /*#__PURE__*/React.createElement(NoSearchProduct, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GalleryListPage);
GalleryListPage.propTypes = {
  style: prop_types__WEBPACK_IMPORTED_MODULE_10__.object,
  totalCount: prop_types__WEBPACK_IMPORTED_MODULE_10__.number,
  products: prop_types__WEBPACK_IMPORTED_MODULE_10__.array,
  sortType: prop_types__WEBPACK_IMPORTED_MODULE_10__.string,
  sortBy: prop_types__WEBPACK_IMPORTED_MODULE_10__.array,
  updateSortType: prop_types__WEBPACK_IMPORTED_MODULE_10__.func,
  handleIntersect: prop_types__WEBPACK_IMPORTED_MODULE_10__.func,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_10__.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_10__.string
};

/***/ }),

/***/ "./src/components/GalleryListPage/index.js":
/*!*************************************************!*\
  !*** ./src/components/GalleryListPage/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GalleryListPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GalleryListPage */ "./src/components/GalleryListPage/GalleryListPage.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_GalleryListPage__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/***/ "./src/components/ProductThumbBadge/ProductThumbBadge.jsx":
/*!****************************************************************!*\
  !*** ./src/components/ProductThumbBadge/ProductThumbBadge.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Badge/Badge.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




var ProductThumbBadge = function ProductThumbBadge(_ref) {
  var saleStatusType = _ref.saleStatusType,
    isSoldOut = _ref.isSoldOut;
  var badgeColorType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return saleStatusType === 'FINISHED' ? 'primary' : 'caution';
  }, []);
  if (saleStatusType === 'ONSALE' && !isSoldOut) return /*#__PURE__*/React.createElement(React.Fragment, null);
  return /*#__PURE__*/React.createElement("span", {
    className: "thumb-item-badges"
  }, (saleStatusType === 'FINISHED' || saleStatusType === 'READY') && /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "product-card__badge product-card__badge-sale-status",
    colorType: badgeColorType,
    label: _shopby_shared__WEBPACK_IMPORTED_MODULE_1__.SALE_STATUS_TYPE[saleStatusType]
  }), isSoldOut && /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: _shopby_shared__WEBPACK_IMPORTED_MODULE_1__.PURCHASE_OPTION_SALE_LABEL.SOLD_OUT,
    colorType: "primary",
    className: "product-card__badge"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductThumbBadge);
ProductThumbBadge.propTypes = {
  saleStatusType: (0,prop_types__WEBPACK_IMPORTED_MODULE_3__.oneOf)(['READY', 'ONSALE', 'FINISHED', 'STOP', 'PROHIBITION']),
  isSoldOut: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool
};

/***/ }),

/***/ "./src/components/ProductThumbBadge/index.js":
/*!***************************************************!*\
  !*** ./src/components/ProductThumbBadge/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductThumbBadge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductThumbBadge */ "./src/components/ProductThumbBadge/ProductThumbBadge.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ProductThumbBadge__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/ProductThumbInfo/ProductThumbInfo.jsx":
/*!**************************************************************!*\
  !*** ./src/components/ProductThumbInfo/ProductThumbInfo.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




// ===========================
// 상품 아이템 정보
// ===========================
var ProductThumbInfo = function ProductThumbInfo(_ref) {
  var promotionText = _ref.promotionText,
    productName = _ref.productName,
    salePrice = _ref.salePrice;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)('unit'),
    t = _useTranslation.t;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "product-thumb-title"
  }, promotionText, " ", productName), /*#__PURE__*/React.createElement("p", {
    className: "product-thumb-price-info"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("em", {
    className: "product-thumb-price"
  }, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.convertToKoreanCurrency)(salePrice)), /*#__PURE__*/React.createElement("span", {
    className: "product-thumb-unit"
  }, t('WON')))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductThumbInfo);
ProductThumbInfo.propTypes = {
  promotionText: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  productName: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  salePrice: prop_types__WEBPACK_IMPORTED_MODULE_2__.number
};

/***/ }),

/***/ "./src/components/ProductThumbInfo/index.js":
/*!**************************************************!*\
  !*** ./src/components/ProductThumbInfo/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductThumbInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductThumbInfo */ "./src/components/ProductThumbInfo/ProductThumbInfo.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ProductThumbInfo__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/TotalCountAndSort/TotalCountAndSort.jsx":
/*!****************************************************************!*\
  !*** ./src/components/TotalCountAndSort/TotalCountAndSort.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/SelectBox/SelectBox.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var TotalCountAndSort = function TotalCountAndSort(_ref) {
  var totalCount = _ref.totalCount,
    sortType = _ref.sortType,
    updateSortType = _ref.updateSortType,
    sortBy = _ref.sortBy;
  return /*#__PURE__*/React.createElement("div", {
    className: "total-sort"
  }, /*#__PURE__*/React.createElement("p", {
    className: "total-sort__count"
  }, "\uCD1D ", /*#__PURE__*/React.createElement("em", {
    className: "highlight"
  }, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.convertToKoreanCurrency)(totalCount)), "\uAC1C"), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "total-sort__select-box",
    hasSortOption: true,
    value: sortType,
    onSelect: function onSelect(_ref2) {
      var target = _ref2.target;
      return updateSortType(target.value);
    },
    options: sortBy
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TotalCountAndSort);
TotalCountAndSort.propTypes = {
  totalCount: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  sortType: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf)(['SALE', 'LOW_PRICE', 'HIGH_PRICE', 'REVIEW', 'REGISTER', 'POPULAR', 'SALE_YMD', 'SALE_END_YMD', 'DISCOUNTED_PRICE', 'REVIEW', 'SALE_CNT', 'RECENT_PRODUCT', 'MD_RECOMMEND', 'LIKE_CNT', 'ADMIN_SETTING', 'BEST_SELLER', 'BEST_REVIEW']),
  updateSortType: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,
  sortBy: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_2__.shape)({
    value: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf)(['SALE', 'LOW_PRICE', 'HIGH_PRICE', 'REVIEW', 'REGISTER', 'POPULAR', 'SALE_YMD', 'SALE_END_YMD', 'DISCOUNTED_PRICE', 'REVIEW', 'SALE_CNT', 'RECENT_PRODUCT', 'MD_RECOMMEND', 'LIKE_CNT', 'ADMIN_SETTING', 'BEST_SELLER', 'BEST_REVIEW']),
    label: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }))
};

/***/ }),

/***/ "./src/components/TotalCountAndSort/index.js":
/*!***************************************************!*\
  !*** ./src/components/TotalCountAndSort/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TotalCountAndSort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TotalCountAndSort */ "./src/components/TotalCountAndSort/TotalCountAndSort.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TotalCountAndSort__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/***/ "./node_modules/lodash-es/debounce.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/debounce.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./now.js */ "./node_modules/lodash-es/now.js");
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toNumber.js */ "./node_modules/lodash-es/toNumber.js");




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = (0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(wait) || 0;
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax((0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = (0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge((0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
  }

  function debounced() {
    var time = (0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debounce);


/***/ }),

/***/ "./node_modules/lodash-es/now.js":
/*!***************************************!*\
  !*** ./node_modules/lodash-es/now.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Date.now();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (now);


/***/ })

}]);
//# sourceMappingURL=default-src_components_GalleryListPage_index_js-src_hooks_useLayoutChanger_js.5b3a093720083ed9ea57.bundle.js.map