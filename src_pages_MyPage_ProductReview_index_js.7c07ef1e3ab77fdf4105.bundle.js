"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_pages_MyPage_ProductReview_index_js"],{

/***/ "./node_modules/@shopby/react-components/dist/esm/common/Tabs/Tabs.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/common/Tabs/Tabs.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TabsProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabsProvider */ "./node_modules/@shopby/react-components/dist/esm/common/Tabs/TabsProvider.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(t){for(var s,a=1,e=arguments.length;a<e;a++)for(var n in s=arguments[a])Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);return t},__assign.apply(this,arguments)};var Tab=function(t){var s=t.value,a=t.label,e=(0,_TabsProvider__WEBPACK_IMPORTED_MODULE_2__.useTabsStateContext)().currentTab,n=(0,_TabsProvider__WEBPACK_IMPORTED_MODULE_2__.useTabsActiveContext)().selectTab,r=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return e===s}),[e]);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",__assign({className:"tabs__item ".concat(r?"on":"")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",__assign({type:"button",onClick:function(){return n(s)}},{children:a}))}))},Tabs=function(t){var s=t.className,a=void 0===s?"":s,e=(0,_TabsProvider__WEBPACK_IMPORTED_MODULE_2__.useTabsStateContext)().tabs;return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",__assign({className:"tabs ".concat(a)},{children:e.map((function(t){return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tab,__assign({},t),t.value)}))}))};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/common/Tabs/TabsProvider.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/common/Tabs/TabsProvider.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useTabsActiveContext": () => (/* binding */ useTabsActiveContext),
/* harmony export */   "useTabsStateContext": () => (/* binding */ useTabsStateContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},__assign.apply(this,arguments)},__read=undefined&&undefined.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,a,o=r.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(n=o.next()).done;)s.push(n.value)}catch(t){a={error:t}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return s},__spreadArray=undefined&&undefined.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,a=0,o=e.length;a<o;a++)!n&&a in e||(n||(n=Array.prototype.slice.call(e,0,a)),n[a]=e[a]);return t.concat(n||Array.prototype.slice.call(e))};var TabsStateContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),TabsActionContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),TabsProvider=function(t){var e=t.children,r=t.initialState,n=t.usesQueryParam,a=void 0!==n&&n,o=t.queryParamKeyName,s=void 0===o?"tabType":o,u=__read((0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)(),2),i=u[0],c=u[1],l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){var t,e;return a&&r.tabs.find((function(t){return t.value===i.get(s)}))?i.get(s):null!==(e=null!==(t=r.currentTab)&&void 0!==t?t:r.tabs[0].value)&&void 0!==e?e:null}),[]),f=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((function(){return r.tabs})),2),_=f[0],v=f[1],d=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((function(){return l})),2),b=d[0],x=d[1],y=function(t){i.set(s,t),c((function(){return i}),{replace:!0})};(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)((function(){a&&l&&y(l)}),[__spreadArray([],__read(i.keys()),!1).length]);var p=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return{updateTabs:function(t){v((function(){return t}))},selectTab:function(t){x(t),a&&t&&y(t)}}}),[y]);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabsStateContext.Provider,__assign({value:{currentTab:b,tabs:_}},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabsActionContext.Provider,__assign({value:p},{children:e}))}))};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabsProvider);var useTabsStateContext=function(){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(TabsStateContext);if(!t)throw new Error("INVALID_TabsStateContext");return t};var useTabsActiveContext=function(){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(TabsActionContext);if(!t)throw new Error("INVALID_TabsActionContext");return t};

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/display/ProductReviewFormProvider/ProductReviewFormProvider.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/display/ProductReviewFormProvider/ProductReviewFormProvider.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useProductReviewFormActionContext": () => (/* binding */ useProductReviewFormActionContext)
/* harmony export */ });
/* unused harmony export useProductReviewFormStateContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},__assign.apply(this,arguments)},__read=undefined&&undefined.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var o,n,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(e){n={error:e}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}return a};var _a=_shopby_shared__WEBPACK_IMPORTED_MODULE_2__.displayHelper.productReviewForm,Helper=_a.Helper,QUERY_KEY=_a.QUERY_KEY,MUTATION_KEY=_a.MUTATION_KEY,DEFAULT_STATE={reviewDetail:{productTotalCount:0,myReview:!1,platformType:"MOBILE_WEB",memberName:"",content:"",providerType:null,productName:"",updateYmdt:"",bestReviewYn:"N",rate:0,imageUrl:"",reviewNo:0,nickname:"",productNo:0,registerYmdt:"",memberId:"",brandName:"",recommendable:!1,blindReportCnt:0,expelled:!1,reportCnt:0,fileUrls:[],reportable:!1,externalReview:!1,orderedOption:null,recommendCnt:0,commentCount:0,isDeletedProductReview:!1,productDiscountPrice:0,brandNameEn:"",productRate:0,givenAccumulationYn:"N",extraJson:"",registerName:"",registerNo:0},reviewableOption:{items:[],reviewable:!1}},ProductReviewFormStateContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),ProductReviewFormActionContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),ProductReviewFormProvider=function(e){var t=e.children,r=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.reviewDetail),2),o=r[0],n=r[1],i=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.reviewableOption),2),a=i[0],u=i[1],c=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_2__.executeHelper)(new Helper)}),[]),_=c.executeQuery,l=c.executeMutation,d=l(MUTATION_KEY.POST_REVIEW_BY_PRODUCT_NO).mutate,s=l(MUTATION_KEY.PUT_REVIEW_BY_PRODUCT_NO_AND_REVIEW_NO).mutate,v=l(MUTATION_KEY.DELETE_REVIEW_BY_PRODUCT_NO_AND_REVIEW_NO).mutate,m=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return{fetchReviewBy:function(e){return _(QUERY_KEY.QUERY_REVIEW_BY_PRODUCT_NO_AND_REVIEW_NO,{payload:e,onSuccess:function(e){var t=e.data;n(t)}})},fetchReviewableOptionsBy:function(e){return _(QUERY_KEY.QUERY_REVIEWABLE_OPTIONS_BY_PRODUCT_NO,{payload:e,onSuccess:function(e){var t=e.data,r=t.item,o=t.reviewable;u({items:r,reviewable:o})}})},postReviewBy:function(e){return d({payload:e})},putReviewBy:function(e){return s({payload:e})},deleteReviewBy:function(e){return v({payload:e})}}}),[]);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProductReviewFormStateContext.Provider,__assign({value:{reviewDetail:o,reviewableOption:a}},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProductReviewFormActionContext.Provider,__assign({value:m},{children:t}))}))};var useProductReviewFormStateContext=function(){var e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProductReviewFormStateContext);if(!e)throw new Error("INVALID_ProductReviewFormStateContext");return e};var useProductReviewFormActionContext=function(){var e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProductReviewFormActionContext);if(!e)throw new Error("INVALID_ProductReviewFormActionContext");return e};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductReviewFormProvider);

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/display/ProductReviewProvider/ProductReviewProvider.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/display/ProductReviewProvider/ProductReviewProvider.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useProductReviewActionContext": () => (/* binding */ useProductReviewActionContext),
/* harmony export */   "useProductReviewStateContext": () => (/* binding */ useProductReviewStateContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/shared/helpers */ "./node_modules/@shopby/shared/dist/esm/helpers/index.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},__assign.apply(this,arguments)},__read=undefined&&undefined.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i};var _a=_shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_2__.displayHelper.productReview,Helper=_a.Helper,QUERY_KEY=_a.QUERY_KEY,DEFAULT_STATE={rate:0,totalCount:0,reviewRatingResponses:[],reviews:[],lastPage:0,percentageRating:0,reviewConfig:{canReply:!1,boardType:null,boardImageType:null,description:"",boardUsable:!1,canAttach:!1,expandedReviewConfig:null,memberWriteable:!1,secretUsable:!1,name:"",canComment:!1,guestWriteable:!1,reviewAccumulationInfo:null}},ProductReviewStateContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),ProductReviewActionContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),ProductReviewProvider=function(e){var t=e.children,r=e.productNo,n=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.rate),2),o=n[0],a=n[1],i=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.totalCount),2),u=i[0],s=i[1],c=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.reviewRatingResponses),2),l=c[0],_=c[1],v=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.reviews),2),d=v[0],f=v[1],p=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.reviewConfig),2),R=p[0],w=p[1],C=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return (0,_shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_2__.executeHelper)(new Helper({productNo:r}))}),[]).executeQuery,E=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return{searchReviews:function(e){return C(QUERY_KEY.QUERY_PRODUCT_REVIEWS,{enabled:r>0,payload:__assign({productNo:r},e),onSuccess:function(e){var t=e.data,r=t.rate,n=t.totalCount,o=t.reviewRatingResponses,i=t.reviews;a(r),s(n),_((function(){return o})),f((function(){return i}))}})},fetchConfiguration:function(){return C(QUERY_KEY.QUERY_PRODUCT_REVIEW_CONFIGURATION,{onSuccess:function(e){var t=e.data;w(t)}})}}}),[]);return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){r>0&&E.fetchConfiguration()}),[r]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProductReviewStateContext.Provider,__assign({value:{rate:o,totalCount:u,reviewRatingResponses:l,reviews:d,reviewConfig:R}},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProductReviewActionContext.Provider,__assign({value:E},{children:t}))}))};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductReviewProvider);var useProductReviewStateContext=function(){var e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProductReviewStateContext);if(!e)throw Error("INVALID_ProductReviewStateContext");return e};var useProductReviewActionContext=function(){var e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProductReviewActionContext);if(!e)throw Error("INVALID_ProductReviewActionContext");return e};

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/display/ProfileProductReviewProvider/ProfileProductReviewProvider.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/display/ProfileProductReviewProvider/ProfileProductReviewProvider.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useProfileProductReviewActionContext": () => (/* binding */ useProfileProductReviewActionContext),
/* harmony export */   "useProfileProductReviewStateContext": () => (/* binding */ useProfileProductReviewStateContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},__assign.apply(this,arguments)},__read=undefined&&undefined.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var o,i,n=r.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(o=n.next()).done;)u.push(o.value)}catch(e){i={error:e}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(i)throw i.error}}return u};var _a=_shopby_shared__WEBPACK_IMPORTED_MODULE_2__.displayHelper.profileProductReview,Helper=_a.Helper,QUERY_KEY=_a.QUERY_KEY,DEFAULT_STATE={reviewableProduct:{totalCount:0,items:[]},reviewedProduct:{totalCount:0,items:[]}},ProfileProductReviewStateContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),ProfileProductReviewActionContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),ProfileProductReviewProvider=function(e){var t=e.children,r=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.reviewableProduct),2),o=r[0],i=r[1],n=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.reviewedProduct),2),u=n[0],a=n[1],c=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_2__.executeHelper)(new Helper)}),[]).executeQuery,l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return{fetchProfileReviewableProducts:function(e){return c(QUERY_KEY.QUERY_PROFILE_REVIEWABLE_PRODUCTS,{payload:e,onSuccess:function(e){var t=e.data;i(t)}})},fetchProfileReviewedProducts:function(e){return c(QUERY_KEY.QUERY_PROFILE_PRODUCT_REVIEWS,{payload:e,onSuccess:function(e){var t=e.data;a(t)}})}}}),[]);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProfileProductReviewStateContext.Provider,__assign({value:{reviewableProduct:o,reviewedProduct:u}},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProfileProductReviewActionContext.Provider,__assign({value:l},{children:t}))}))};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileProductReviewProvider);var useProfileProductReviewStateContext=function(){var e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProfileProductReviewStateContext);if(!e)throw Error("INVALID_ProfileProductReviewStateContext");return e};var useProfileProductReviewActionContext=function(){var e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProfileProductReviewActionContext);if(!e)throw Error("INVALID_ProfileProductReviewActionContext");return e};

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

/***/ "./src/pages/MyPage/ProductReview/ProductReview.jsx":
/*!**********************************************************!*\
  !*** ./src/pages/MyPage/ProductReview/ProductReview.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Tabs/TabsProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/ProductReviewProvider/ProductReviewProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/ProfileProductReviewProvider/ProfileProductReviewProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/ProductReviewFormProvider/ProductReviewFormProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Tabs/Tabs.js");
/* harmony import */ var _hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useLayoutChanger */ "./src/hooks/useLayoutChanger.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var DEFAULT_TABS = [{
  value: "REVIEWABLE",
  label: "작성 가능 후기"
}, {
  value: "REVIEWED",
  label: "작성 완료 후기"
}];
var LAZY_COMPONENT_MAP = {
  REVIEWABLE: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
    return Promise.all(/*! import() */[__webpack_require__.e("defaultVendors-node_modules_shopby_react-components_dist_esm_common_Button_Button_js-node_mod-68d3881"), __webpack_require__.e("default-src_components_ProductThumbItem_ProductThumbItem_jsx-src_components_ReviewForm_index_js"), __webpack_require__.e("src_pages_MyPage_ProductReview_ReviewableProduct_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ReviewableProduct */ "./src/pages/MyPage/ProductReview/ReviewableProduct.jsx"));
  }),
  REVIEWED: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
    return Promise.all(/*! import() */[__webpack_require__.e("defaultVendors-node_modules_dompurify_dist_purify_js"), __webpack_require__.e("defaultVendors-node_modules_shopby_react-components_dist_esm_common_Button_Button_js-node_mod-68d3880"), __webpack_require__.e("default-src_components_ProductThumbItem_ProductThumbItem_jsx-src_components_ReviewForm_index_js"), __webpack_require__.e("default-src_components_ProductReviewList_ProductReviewList_jsx"), __webpack_require__.e("src_components_FullModal_FullModal_jsx-src_pages_MyPage_ProductReview_ReviewedProduct_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ReviewedProduct */ "./src/pages/MyPage/ProductReview/ReviewedProduct.jsx"));
  })
};
var ProductReviewContent = function ProductReviewContent() {
  var _useTabsStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__.useTabsStateContext)(),
    currentTab = _useTabsStateContext.currentTab;
  var _useProductReviewActi = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useProductReviewActionContext)(),
    fetchConfiguration = _useProductReviewActi.fetchConfiguration;
  var Component = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return LAZY_COMPONENT_MAP[currentTab];
  }, [currentTab]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchConfiguration();
  }, []);
  return /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: null
  }, /*#__PURE__*/React.createElement(Component, null));
};
var ProductReview = function ProductReview() {
  (0,_hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_1__["default"])({
    hasBackBtnOnHeader: true,
    title: "상품후기 관리",
    hasCartBtnOnHeader: true,
    hasBottomNav: true
  });
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
    initialState: {
      currentTab: "REVIEWABLE",
      tabs: DEFAULT_TABS
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "profile-product-review"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "profile-product-review__tabs"
  }), /*#__PURE__*/React.createElement(ProductReviewContent, null))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductReview);

/***/ }),

/***/ "./src/pages/MyPage/ProductReview/index.js":
/*!*************************************************!*\
  !*** ./src/pages/MyPage/ProductReview/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductReview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductReview */ "./src/pages/MyPage/ProductReview/ProductReview.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ProductReview__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);
//# sourceMappingURL=src_pages_MyPage_ProductReview_index_js.7c07ef1e3ab77fdf4105.bundle.js.map