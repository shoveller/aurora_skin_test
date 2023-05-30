"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_pages_MyPage_Accumulation_index_js"],{

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

/***/ "./node_modules/@shopby/react-components/dist/esm/common/Skeleton/Skeleton.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/common/Skeleton/Skeleton.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _SkeletonGallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SkeletonGallery */ "./node_modules/@shopby/react-components/dist/esm/common/Skeleton/SkeletonGallery.js");
/* harmony import */ var _SkeletonList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SkeletonList */ "./node_modules/@shopby/react-components/dist/esm/common/Skeleton/SkeletonList.js");
/* harmony import */ var _SkeletonSquare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SkeletonSquare */ "./node_modules/@shopby/react-components/dist/esm/common/Skeleton/SkeletonSquare.js");
var Skeleton=function(e){var t,r,n={SQUARE:function(){return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SkeletonSquare__WEBPACK_IMPORTED_MODULE_1__["default"],{})},GALLERY:function(){return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SkeletonGallery__WEBPACK_IMPORTED_MODULE_2__["default"],{})},LIST:function(){return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SkeletonList__WEBPACK_IMPORTED_MODULE_3__["default"],{})}};return null!==(r=null===(t=n[e.type])||void 0===t?void 0:t.call(n))&&void 0!==r?r:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{})};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skeleton);

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/common/Skeleton/SkeletonGallery.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/common/Skeleton/SkeletonGallery.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(s){for(var e,a=1,n=arguments.length;a<n;a++)for(var t in e=arguments[a])Object.prototype.hasOwnProperty.call(e,t)&&(s[t]=e[t]);return s},__assign.apply(this,arguments)};var SkeletonGallery=function(){return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",__assign({className:"skeleton skeleton--gallery"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"skeleton__media"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"skeleton__line"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"skeleton__line"})]}))};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonGallery);

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/common/Skeleton/SkeletonList.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/common/Skeleton/SkeletonList.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(s){for(var e,t=1,n=arguments.length;t<n;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(s[i]=e[i]);return s},__assign.apply(this,arguments)};var SkeletonList=function(){return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",__assign({className:"skeleton skeleton--list"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"skeleton__media"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"skeleton__line skeleton__line--tit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"skeleton__line"})]})]}))};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonList);

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/common/Skeleton/SkeletonSquare.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/common/Skeleton/SkeletonSquare.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(s){for(var e,n=1,t=arguments.length;n<t;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(s[a]=e[a]);return s},__assign.apply(this,arguments)};var SkeletonSquare=function(){return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",__assign({className:"skeleton"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"skeleton__media"})}))};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonSquare);

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var VisibleComponent=function(n){var t=n.shows,o=n.TruthyComponent,e=n.FalsyComponent,r=void 0===e?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{}):e;return"function"==typeof t&&t()||t?o:r};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VisibleComponent);

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/hooks/useInfiniteScroll/useInfiniteScroll.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/hooks/useInfiniteScroll/useInfiniteScroll.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},__assign.apply(this,arguments)},__awaiter=undefined&&undefined.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,i){function o(e){try{s(n.next(e))}catch(e){i(e)}}function u(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,u)}s((n=n.apply(e,t||[])).next())}))},__generator=undefined&&undefined.__generator||function(e,t){var r,n,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(s){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(o=0)),o;)try{if(r=1,n&&(a=2&u[0]?n.return:u[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,u[1])).done)return a;switch(n=0,a&&(u=[2&u[0],a.value]),u[0]){case 0:case 1:a=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,n=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==u[0]&&2!==u[0])){o=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){o.label=u[1];break}if(6===u[0]&&o.label<a[1]){o.label=a[1],a=u;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(u);break}a[2]&&o.ops.pop(),o.trys.pop();continue}u=t.call(e,o)}catch(e){u=[6,e],n=0}finally{r=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}},__read=undefined&&undefined.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,i=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)o.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(a)throw a.error}}return o},__spreadArray=undefined&&undefined.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,a=0,i=t.length;a<i;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))};var INFINITY_SCROLL_PAGE_SIZE=6,useInfiniteScroll=function(e){var t=e.fetcher,r=e.requestOption,n=void 0===r?{pageNumber:1,pageSize:INFINITY_SCROLL_PAGE_SIZE}:r,a=__read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),2),i=a[0],o=a[1],u=__read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),2),s=u[0],c=u[1],l=__read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((function(){return __assign({},n)})),2),_=l[0],f=l[1],h=__read((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),p=h[0],d=h[1],v=function(e){void 0===e&&(e=[]),o((function(t){return __spreadArray(__spreadArray([],__read(t),!1),__read(e),!1)}))},y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(e){var r=void 0===e?{}:e,a=r.fetcher,i=void 0===a?t:a,u=r.items,s=void 0===u?[]:u,l=r.requestOption,_=void 0===l?n:l;return __awaiter(void 0,void 0,void 0,(function(){var e,t;return __generator(this,(function(r){switch(r.label){case 0:return c(!0),o((function(){return s})),e=__assign(__assign({},n),_),[4,null==i?void 0:i(e)];case 1:return t=r.sent(),c(!1),v(t),f((function(){return __assign(__assign({},e),{pageNumber:e.pageNumber+1})})),d(!1),[2]}}))}))}),[]);return{isLoading:s,fetchInitialItems:y,isInfiniteScrollDisabled:p,onIntersect:function(e){var r=e.totalCount,n=e.fetcher,a=void 0===n?t:n;return __awaiter(void 0,void 0,void 0,(function(){var e;return __generator(this,(function(t){switch(t.label){case 0:return d(!0),r<=i.length?[2]:(c(!0),[4,null==a?void 0:a(__assign({},_))]);case 1:return e=t.sent(),c(!1),v(e),f((function(e){return __assign(__assign({},e),{pageNumber:e.pageNumber+1})})),d(!1),[2]}}))}))},accumulativeItems:i}};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInfiniteScroll);

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/manage/ProfileAccumulationProvider/ProfileAccumulationProvider.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/manage/ProfileAccumulationProvider/ProfileAccumulationProvider.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useProfileAccumulationActionContext": () => (/* binding */ useProfileAccumulationActionContext),
/* harmony export */   "useProfileAccumulationStateContext": () => (/* binding */ useProfileAccumulationStateContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},__assign.apply(this,arguments)},__read=undefined&&undefined.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var o,n,u=r.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(o=u.next()).done;)a.push(o.value)}catch(t){n={error:t}}finally{try{o&&!o.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}return a};var _a=_shopby_shared__WEBPACK_IMPORTED_MODULE_2__.manageHelper.profileAccumulation,Helper=_a.Helper,QUERY_KEY=_a.QUERY_KEY,DEFAULT_STATE={profileAccumulation:null,profileAccumulationSummary:null,profileEstimatedAccumulation:null},ProfileAccumulationStateContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),ProfileAccumulationActionContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),ProfileAccumulationProvider=function(t){var e=t.children,r=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.profileAccumulation),2),o=r[0],n=r[1],u=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.profileAccumulationSummary),2),a=u[0],i=u[1],c=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.profileEstimatedAccumulation),2),l=c[0],f=c[1],m=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_2__.executeHelper)(new Helper)}),[]).executeQuery,s=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return{fetchProfileAccumulation:function(t){return m(QUERY_KEY.QUERY_PROFILE_ACCUMULATIONS,{payload:t,onSuccess:function(t){var e=t.data;n(e)}})},fetchAccumulationSummary:function(t){return m(QUERY_KEY.QUERY_PROFILE_ACCUMULATION_SUMMARY,{payload:t,onSuccess:function(t){var e=t.data;i(e)}})},fetchProfileEstimatedAccumulation:function(){return m(QUERY_KEY.QUERY_PROFILE_ESTIMATED_ACCUMULATION,{onSuccess:function(t){var e=t.data;f(e)}})}}}),[]);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProfileAccumulationActionContext.Provider,__assign({value:s},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProfileAccumulationStateContext.Provider,__assign({value:{profileAccumulation:o,profileAccumulationSummary:a,profileEstimatedAccumulation:l}},{children:e}))}))};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileAccumulationProvider);var useProfileAccumulationStateContext=function(){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProfileAccumulationStateContext);if(!t)throw new Error("INVALID_ProfileAccumulationStateContext");return t};var useProfileAccumulationActionContext=function(){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProfileAccumulationActionContext);if(!t)throw new Error("INVALID_ProfileAccumulationActionContext");return t};

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

/***/ "./src/pages/MyPage/Accumulation/Accumulation.jsx":
/*!********************************************************!*\
  !*** ./src/pages/MyPage/Accumulation/Accumulation.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/manage/ProfileAccumulationProvider/ProfileAccumulationProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _components_StartYmdSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/StartYmdSelector */ "./src/components/StartYmdSelector/index.js");
/* harmony import */ var _hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useLayoutChanger */ "./src/hooks/useLayoutChanger.js");
/* harmony import */ var _AccumulationList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AccumulationList */ "./src/pages/MyPage/Accumulation/AccumulationList.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");






var AccumulationContent = function AccumulationContent() {
  var _profileAccumulationS;
  var _useProfileAccumulati = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__.useProfileAccumulationStateContext)(),
    profileAccumulationSummary = _useProfileAccumulati.profileAccumulationSummary;
  var _useProfileAccumulati2 = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__.useProfileAccumulationActionContext)(),
    fetchAccumulationSummary = _useProfileAccumulati2.fetchAccumulationSummary;
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__.useMallStateContext)(),
    _useMallStateContext$ = _useMallStateContext.accumulationConfig,
    unit = _useMallStateContext$.unit,
    accumulationName = _useMallStateContext$.accumulationName;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchAccumulationSummary();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "my-page-accumulation"
  }, /*#__PURE__*/React.createElement("p", {
    className: "my-page-accumulation__amount"
  }, accumulationName, " ", /*#__PURE__*/React.createElement("span", null, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.convertToKoreanCurrency)((_profileAccumulationS = profileAccumulationSummary === null || profileAccumulationSummary === void 0 ? void 0 : profileAccumulationSummary.totalAvailableAmt) !== null && _profileAccumulationS !== void 0 ? _profileAccumulationS : 0)), unit !== null && unit !== void 0 ? unit : 'p'), /*#__PURE__*/React.createElement(_components_StartYmdSelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "my-page-accumulation__period-select",
    initialOffsetOption: "7d"
  }), /*#__PURE__*/React.createElement(_AccumulationList__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};
var Accumulation = function Accumulation() {
  var _useMallStateContext2 = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__.useMallStateContext)(),
    accumulationName = _useMallStateContext2.accumulationConfig.accumulationName;
  (0,_hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_3__["default"])({
    title: accumulationName,
    hasBackBtnOnHeader: true,
    hasCartBtnOnHeader: true,
    hasBottomNav: true
  });
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/React.createElement(AccumulationContent, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accumulation);

/***/ }),

/***/ "./src/pages/MyPage/Accumulation/AccumulationList.jsx":
/*!************************************************************!*\
  !*** ./src/pages/MyPage/Accumulation/AccumulationList.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/manage/ProfileAccumulationProvider/ProfileAccumulationProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/hooks/useInfiniteScroll/useInfiniteScroll.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/InfiniteScrollLoader/InfiniteScrollLoader.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _components_ListSkeleton_ListSkeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ListSkeleton/ListSkeleton */ "./src/components/ListSkeleton/ListSkeleton.jsx");
/* harmony import */ var _constants_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/common */ "./src/constants/common.js");
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






var today = (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.getDateLabel)();
var ACCUMULATION_STATUS_MAP = {
  GIVE: {
    modifier: 'give',
    sign: '+',
    label: '지급'
  },
  SUBTRACTION: {
    modifier: 'subtraction',
    sign: '-',
    label: '차감'
  }
};
var EmptyList = function EmptyList() {
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useMallStateContext)(),
    accumulationName = _useMallStateContext.accumulationConfig.accumulationName;
  return /*#__PURE__*/React.createElement("div", {
    className: "empty-list"
  }, /*#__PURE__*/React.createElement("p", null, accumulationName, " \uC801\uB9BD \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."));
};
var AccumulationList = function AccumulationList() {
  var _useMallStateContext2 = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useMallStateContext)(),
    unit = _useMallStateContext2.accumulationConfig.unit;
  var _useProfileAccumulati = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__.useProfileAccumulationActionContext)(),
    fetchProfileAccumulation = _useProfileAccumulati.fetchProfileAccumulation;
  var _useProfileAccumulati2 = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__.useProfileAccumulationStateContext)(),
    profileAccumulation = _useProfileAccumulati2.profileAccumulation;
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  var period = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var _searchParams$get;
    return {
      startYmd: (_searchParams$get = searchParams.get('startYmd')) !== null && _searchParams$get !== void 0 ? _searchParams$get : '',
      endYmd: today
    };
  }, [searchParams]);
  var accumulationRequestOption = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      startYmd: period.startYmd,
      endYmd: period.endYmd
    };
  }, [period]);

  // 인피니트
  var _useInfiniteScroll = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"])({
      fetcher: function () {
        var _fetcher = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(requestOption) {
          var _yield$fetchProfileAc, data;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetchProfileAccumulation(requestOption);
              case 2:
                _yield$fetchProfileAc = _context.sent;
                data = _yield$fetchProfileAc.data;
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
      requestOption: _objectSpread({
        pageNumber: 1,
        pageSize: _constants_common__WEBPACK_IMPORTED_MODULE_3__.INFINITY_SCROLL_PAGE_SIZE
      }, accumulationRequestOption)
    }),
    isLoading = _useInfiniteScroll.isLoading,
    accumulativeItems = _useInfiniteScroll.accumulativeItems,
    fetchInitialItems = _useInfiniteScroll.fetchInitialItems,
    isInfiniteScrollDisabled = _useInfiniteScroll.isInfiniteScrollDisabled,
    onIntersect = _useInfiniteScroll.onIntersect;
  var handleIntersect = function handleIntersect() {
    onIntersect({
      totalCount: profileAccumulation === null || profileAccumulation === void 0 ? void 0 : profileAccumulation.totalCount
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    accumulationRequestOption.startYmd && fetchInitialItems({
      requestOption: _objectSpread({}, accumulationRequestOption)
    });
  }, [accumulationRequestOption]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__["default"], {
    shows: (profileAccumulation === null || profileAccumulation === void 0 ? void 0 : profileAccumulation.totalCount) > 0,
    FalsyComponent: /*#__PURE__*/React.createElement(EmptyList, null),
    TruthyComponent: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", {
      className: "my-page-accumulation__list"
    }, accumulativeItems.map(function (_ref) {
      var reasonDetail = _ref.reasonDetail,
        accumulationNo = _ref.accumulationNo,
        registerYmdt = _ref.registerYmdt,
        accumulationAmt = _ref.accumulationAmt,
        startYmdt = _ref.startYmdt,
        expireYmdt = _ref.expireYmdt,
        accumulationStatus = _ref.accumulationStatus;
      var date = expireYmdt ? "".concat(startYmdt, " ~ ").concat(expireYmdt) : '';
      var accumulationStatusMap = ACCUMULATION_STATUS_MAP[accumulationStatus.split('_').at(0)];
      return /*#__PURE__*/React.createElement("li", {
        className: "my-page-accumulation__item",
        key: accumulationNo
      }, /*#__PURE__*/React.createElement("p", {
        className: "my-page-accumulation__date my-page-accumulation__date--register"
      }, accumulationStatusMap.label, " \uC77C\uC2DC : ", registerYmdt), /*#__PURE__*/React.createElement("p", {
        className: "my-page-accumulation__reason-detail"
      }, reasonDetail), /*#__PURE__*/React.createElement("p", {
        className: "my-page-accumulation__accumulation-amount"
      }, /*#__PURE__*/React.createElement("span", {
        className: "my-page-accumulation__accumulation-point my-page-accumulation__accumulation-point--".concat(accumulationStatusMap.modifier)
      }, accumulationStatusMap.sign, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.convertToKoreanCurrency)(accumulationAmt)), /*#__PURE__*/React.createElement("span", {
        className: "my-page-accumulation__accumulation-unit"
      }, unit !== null && unit !== void 0 ? unit : 'p')), date && /*#__PURE__*/React.createElement("p", {
        className: "my-page-accumulation__date my-page-accumulation__date--expire"
      }, date));
    })), /*#__PURE__*/React.createElement(_components_ListSkeleton_ListSkeleton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isLoading: isLoading
    }))
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__["default"], {
    shows: accumulativeItems.length > 0,
    TruthyComponent: /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onIntersect: handleIntersect,
      disabled: isInfiniteScrollDisabled
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccumulationList);

/***/ }),

/***/ "./src/pages/MyPage/Accumulation/index.js":
/*!************************************************!*\
  !*** ./src/pages/MyPage/Accumulation/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Accumulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accumulation */ "./src/pages/MyPage/Accumulation/Accumulation.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Accumulation__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
//# sourceMappingURL=src_pages_MyPage_Accumulation_index_js.1023202dc05cf2659d87.bundle.js.map