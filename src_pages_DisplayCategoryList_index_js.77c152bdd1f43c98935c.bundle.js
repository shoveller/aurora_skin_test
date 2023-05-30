"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_pages_DisplayCategoryList_index_js"],{

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

/***/ "./node_modules/@shopby/react-components/dist/esm/display/CategoriesProvider/CategoriesProvider.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/display/CategoriesProvider/CategoriesProvider.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useCategoriesActionContext": () => (/* binding */ useCategoriesActionContext),
/* harmony export */   "useCategoriesStateContext": () => (/* binding */ useCategoriesStateContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},__assign.apply(this,arguments)},__read=undefined&&undefined.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var o,a,i=r.call(e),n=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)n.push(o.value)}catch(e){a={error:e}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(a)throw a.error}}return n};var _a=_shopby_shared__WEBPACK_IMPORTED_MODULE_2__.displayHelper.categories,Helper=_a.Helper,QUERY_KEY=_a.QUERY_KEY,DEFAULT_PROVIDER_STATE={parentCategories:{categories:[],categoryInfo:{}},currentCategories:{categories:[],categoryInfo:{}},childCategories:{categories:[],categoryInfo:{}},originCategories:{multiLevelCategories:[],flatCategories:[]},isVisibleCallout:!1},CategoriesStateContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),CategoriesActionContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),CategoriesProvider=function(e){var t=e.children,r=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_PROVIDER_STATE.parentCategories),2),o=r[0],a=r[1],i=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_PROVIDER_STATE.currentCategories),2),n=i[0],s=i[1],u=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_PROVIDER_STATE.childCategories),2),c=u[0],g=u[1],l=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_PROVIDER_STATE.isVisibleCallout),2),C=l[0],_=l[1],d=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_PROVIDER_STATE.originCategories),2),f=d[0],p=d[1],E=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_2__.executeHelper)(new Helper)}),[]).executeQuery,x=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return{searchCategoryMenu:function(e){var t=e.categoryNo,r=e.depth;return E(QUERY_KEY.QUERY_CATEGORY_RESULT,{payload:{categoryNo:t,depth:r},onSuccess:function(e){var t=e.data,r=t.parentCategories,o=t.currentCategories,i=t.childCategories,n=t.originCategories;a(r),s(o),g(i),p(n)}})},toggleCallout:function(e){void 0===e&&(e=!1),_(e)}}}),[C]);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CategoriesStateContext.Provider,__assign({value:{parentCategories:o,currentCategories:n,childCategories:c,isVisibleCallout:C,originCategories:f}},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CategoriesActionContext.Provider,__assign({value:x},{children:t}))}))};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesProvider);var useCategoriesStateContext=function(){var e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CategoriesStateContext);if(!e)throw new Error("INVALID_CategoriesStateContext");return e};var useCategoriesActionContext=function(){var e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CategoriesActionContext);if(!e)throw new Error("INVALID_CategoriesActionContext");return e};

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/product/ProductSearchProvider/ProductSearchProvider.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/product/ProductSearchProvider/ProductSearchProvider.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useProductSearchActionContext": () => (/* binding */ useProductSearchActionContext),
/* harmony export */   "useProductSearchStateContext": () => (/* binding */ useProductSearchStateContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/shared/helpers */ "./node_modules/@shopby/shared/dist/esm/helpers/index.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},__assign.apply(this,arguments)},__read=undefined&&undefined.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var a,o,c=r.call(e),n=[];try{for(;(void 0===t||t-- >0)&&!(a=c.next()).done;)n.push(a.value)}catch(e){o={error:e}}finally{try{a&&!a.done&&(r=c.return)&&r.call(c)}finally{if(o)throw o.error}}return n},__spreadArray=undefined&&undefined.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var a,o=0,c=t.length;o<c;o++)!a&&o in t||(a||(a=Array.prototype.slice.call(t,0,o)),a[o]=t[o]);return e.concat(a||Array.prototype.slice.call(t))};var _a=_shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_2__.productHelper.productSearch,Helper=_a.Helper,QUERY_KEY=_a.QUERY_KEY,DEFAULT_STATE={productSearchResponse:null,pageCount:0,brands:[],category:{depth1Categories:[],depth2Categories:[],depth3Categories:[],depth4Categories:[],depth5Categories:[],multiLevelCategories:[]},totalCount:0,minPrice:0,displayableStock:!1,maxPrice:0,clickUrlPrefix:null,items:[],accumulationProducts:[],products:[],pageNumber:1,sortType:"POPULAR"},ProductSearchStateContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),ProductSearchActionContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),ProductSearchProvider=function(e){var t=e.children,r=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.productSearchResponse),2),a=r[0],o=r[1],c=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.pageCount),2),n=c[0],u=c[1],s=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.brands),2),i=s[0],_=s[1],d=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.category),2),l=d[0],p=d[1],S=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.totalCount),2),T=S[0],A=S[1],h=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.minPrice),2),E=h[0],x=h[1],P=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.displayableStock),2),f=P[0],y=P[1],m=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.maxPrice),2),C=m[0],g=m[1],U=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.clickUrlPrefix),2),v=U[0],L=U[1],b=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.products),2),D=b[0],F=b[1],R=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.items),2),k=R[0],H=R[1],Y=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.pageNumber),2),j=Y[0],N=Y[1],w=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.sortType),2),O=w[0],Q=w[1],I=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.accumulationProducts),2),K=I[0],M=I[1],B=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return (0,_shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_2__.executeHelper)(new Helper)}),[]).executeQuery,V=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return{searchProductsBy:function(e){B(QUERY_KEY.QUERY_SEARCH_PRODUCTS_BY,{payload:__assign({},e),onSuccess:function(t){var r=t.data,a=r.pageCount,c=r.brands,n=r.category,s=r.totalCount,i=r.minPrice,d=r.displayableStock,l=r.maxPrice,S=r.clickUrlPrefix,T=r.products,h=r.items,E=r.originalResponse;o(E),u(a),_(c),p(n),A(s),x(i),y(d),g(l),L(S),M((function(t){return 1===e.pageNumber?T:__spreadArray(__spreadArray([],__read(t),!1),__read(T),!1)})),F(T),H(h),N(e.pageNumber)}})},updateSortType:function(e){Q(e)}}}),[O]);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProductSearchStateContext.Provider,__assign({value:{pageNumber:j,pageCount:n,brands:i,category:l,totalCount:T,minPrice:E,displayableStock:f,maxPrice:C,clickUrlPrefix:v,accumulationProducts:K,products:D,items:k,sortType:O,productSearchResponse:a}},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProductSearchActionContext.Provider,__assign({value:V},{children:t}))}))};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductSearchProvider);var useProductSearchStateContext=function(){var e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProductSearchStateContext);if(!e)throw Error("INVALID_ProductSearchStateContext");return e};var useProductSearchActionContext=function(){var e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProductSearchActionContext);if(!e)throw Error("INVALID_ProductSearchActionContext");return e};

/***/ }),

/***/ "./src/pages/DisplayCategoryList/DisplayCategoryList.jsx":
/*!***************************************************************!*\
  !*** ./src/pages/DisplayCategoryList/DisplayCategoryList.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/product/ProductSearchProvider/ProductSearchProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/CategoriesProvider/CategoriesProvider.js");
/* harmony import */ var _hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useLayoutChanger */ "./src/hooks/useLayoutChanger.js");
/* harmony import */ var _DisplayCategoryListWrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisplayCategoryListWrap */ "./src/pages/DisplayCategoryList/DisplayCategoryListWrap.jsx");
/* harmony import */ var _menu_CategoryMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/CategoryMenu */ "./src/pages/DisplayCategoryList/menu/CategoryMenu.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var DisplayCategoryList = function DisplayCategoryList() {
  var _searchParams$get, _searchParams$get2;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)('title'),
    t = _useTranslation.t;
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  var keyword = (_searchParams$get = searchParams.get('keyword')) !== null && _searchParams$get !== void 0 ? _searchParams$get : '';
  var categoryNo = Number(searchParams.get('categoryNo'));
  var depth = Number((_searchParams$get2 = searchParams.get('depth')) !== null && _searchParams$get2 !== void 0 ? _searchParams$get2 : 1);
  if (keyword) {
    (0,_hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_1__["default"])({
      hasBackBtnOnHeader: true,
      hasBottomNav: true,
      hasCartBtnOnHeader: true,
      title: keyword,
      hasSearchKeywordHeader: true
    });
  } else {
    (0,_hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_1__["default"])({
      hasBackBtnOnHeader: true,
      hasBottomNav: true,
      hasCartBtnOnHeader: true,
      title: t('상품 목록')
    });
  }
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    shows: !keyword,
    TruthyComponent: /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/React.createElement(_menu_CategoryMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
      categoryNo: categoryNo,
      depth: depth
    }))
  }), /*#__PURE__*/React.createElement(_DisplayCategoryListWrap__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayCategoryList);

/***/ }),

/***/ "./src/pages/DisplayCategoryList/DisplayCategoryListWrap.jsx":
/*!*******************************************************************!*\
  !*** ./src/pages/DisplayCategoryList/DisplayCategoryListWrap.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/product/ProductSearchProvider/ProductSearchProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/manage/PageScriptsProvider/PageScriptsProvider.js");
/* harmony import */ var _components_GalleryListPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/GalleryListPage */ "./src/components/GalleryListPage/index.js");
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




var PER_PAGE_COUNT = 10;
var PARAM_TYPE = {
  KEYWORD: 'keyword',
  CATEGORY_NO: 'categoryNo'
};
var SORT_BY = [{
  value: 'POPULAR',
  label: '판매량순'
}, {
  value: 'LOW_PRICE',
  label: '낮은가격순'
}, {
  value: 'HIGH_PRICE',
  label: '높은가격순'
}, {
  value: 'REVIEW',
  label: '상품후기순'
}, {
  value: 'RECENT_PRODUCT',
  label: '등록일순'
}];
var DisplayCategoryListWrap = function DisplayCategoryListWrap() {
  var _useProductSearchStat = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__.useProductSearchStateContext)(),
    pageNumber = _useProductSearchStat.pageNumber,
    totalCount = _useProductSearchStat.totalCount,
    sortType = _useProductSearchStat.sortType,
    accumulationProducts = _useProductSearchStat.accumulationProducts,
    productSearchResponse = _useProductSearchStat.productSearchResponse;
  var _useProductSearchActi = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__.useProductSearchActionContext)(),
    searchProductsBy = _useProductSearchActi.searchProductsBy,
    updateSortType = _useProductSearchActi.updateSortType;
  var _usePageScriptsAction = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.usePageScriptsActionContext)(),
    applyPageScripts = _usePageScriptsAction.applyPageScripts;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    disabled = _useState2[0],
    setDisabled = _useState2[1];
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  var keywords = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return searchParams.get(PARAM_TYPE.KEYWORD);
  }, [searchParams]);
  var categoryNos = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return searchParams.get(PARAM_TYPE.CATEGORY_NO);
  }, [searchParams]);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      categoryNos: categoryNos !== null && categoryNos !== void 0 ? categoryNos : '',
      keywords: keywords,
      pageNumber: pageNumber,
      sortType: sortType,
      pageSize: PER_PAGE_COUNT,
      soldOut: true,
      saleStatus: 'ONSALE'
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    queryString = _useState4[0],
    setQueryString = _useState4[1];
  var handleIntersect = function handleIntersect() {
    setDisabled(true);
    if (accumulationProducts.length >= totalCount) return;
    setQueryString(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        pageNumber: prev.pageNumber + 1
      });
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.scrollTo(0, 0);
    setQueryString(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        sortType: sortType,
        pageNumber: 1,
        categoryNos: categoryNos
      });
    });
  }, [sortType, categoryNos]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    searchProductsBy(queryString);
    setDisabled(false);
  }, [queryString]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!productSearchResponse) return;
    if (searchParams.get('keyword')) {
      applyPageScripts('PRODUCT_SEARCH', {
        searchedProduct: productSearchResponse
      });
      return;
    }
    applyPageScripts('PRODUCT_LIST', {
      searchedProduct: productSearchResponse
    });
  }, [productSearchResponse, searchParams]);
  return /*#__PURE__*/React.createElement(_components_GalleryListPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    totalCount: totalCount,
    products: accumulationProducts,
    sortType: sortType,
    sortBy: SORT_BY,
    updateSortType: updateSortType,
    handleIntersect: handleIntersect,
    disabled: disabled
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayCategoryListWrap);

/***/ }),

/***/ "./src/pages/DisplayCategoryList/index.js":
/*!************************************************!*\
  !*** ./src/pages/DisplayCategoryList/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayCategoryList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayCategoryList */ "./src/pages/DisplayCategoryList/DisplayCategoryList.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_DisplayCategoryList__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/pages/DisplayCategoryList/menu/CategoryMenu.jsx":
/*!*************************************************************!*\
  !*** ./src/pages/DisplayCategoryList/menu/CategoryMenu.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/CategoriesProvider/CategoriesProvider.js");
/* harmony import */ var _MenuBreadCrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuBreadCrumb */ "./src/pages/DisplayCategoryList/menu/MenuBreadCrumb.jsx");
/* harmony import */ var _MenuGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuGrid */ "./src/pages/DisplayCategoryList/menu/MenuGrid.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");





var CategoryMenu = function CategoryMenu(_ref) {
  var categoryNo = _ref.categoryNo,
    depth = _ref.depth;
  var _useCategoriesActionC = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useCategoriesActionContext)(),
    searchCategoryMenu = _useCategoriesActionC.searchCategoryMenu,
    toggleCallout = _useCategoriesActionC.toggleCallout;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    searchCategoryMenu({
      categoryNo: categoryNo,
      depth: depth
    });
    toggleCallout(false);
  }, [categoryNo, depth]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_MenuBreadCrumb__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_MenuGrid__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryMenu);
CategoryMenu.propTypes = {
  categoryNo: prop_types__WEBPACK_IMPORTED_MODULE_4__.number,
  depth: prop_types__WEBPACK_IMPORTED_MODULE_4__.number
};

/***/ }),

/***/ "./src/pages/DisplayCategoryList/menu/MenuBreadCrumb.jsx":
/*!***************************************************************!*\
  !*** ./src/pages/DisplayCategoryList/menu/MenuBreadCrumb.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/CategoriesProvider/CategoriesProvider.js");
/* harmony import */ var _MenuCallout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuCallout */ "./src/pages/DisplayCategoryList/menu/MenuCallout.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var MenuBreadCrumb = function MenuBreadCrumb() {
  var _parentCategories$cat, _parentCategories$cat2, _parentCategories$cat3, _currentCategories$ca, _currentCategories$ca2;
  var _useCategoriesStateCo = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__.useCategoriesStateContext)(),
    parentCategories = _useCategoriesStateCo.parentCategories,
    currentCategories = _useCategoriesStateCo.currentCategories,
    isVisibleCallout = _useCategoriesStateCo.isVisibleCallout;
  var _useCategoriesActionC = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__.useCategoriesActionContext)(),
    toggleCallout = _useCategoriesActionC.toggleCallout;
  if (!parentCategories.categoryInfo.label) return /*#__PURE__*/React.createElement(React.Fragment, null);
  return /*#__PURE__*/React.createElement("section", {
    className: "breadcrumb"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "a11y"
  }, "\uBA54\uB274\uBCF4\uAE30"), /*#__PURE__*/React.createElement("div", {
    className: "breadcrumb__section"
  }, /*#__PURE__*/React.createElement("span", {
    className: "breadcrumb__link"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/products?categoryNo=".concat((_parentCategories$cat = parentCategories.categoryInfo) === null || _parentCategories$cat === void 0 ? void 0 : _parentCategories$cat.categoryNo, "&depth=").concat((_parentCategories$cat2 = parentCategories.categoryInfo) === null || _parentCategories$cat2 === void 0 ? void 0 : _parentCategories$cat2.depth)
  }, (_parentCategories$cat3 = parentCategories.categoryInfo) === null || _parentCategories$cat3 === void 0 ? void 0 : _parentCategories$cat3.label)), ' ', /*#__PURE__*/React.createElement("label", {
    className: "breadcrumb__toggle"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    onChange: function onChange(e) {
      return toggleCallout(e.target.checked);
    },
    checked: isVisibleCallout
  }), /*#__PURE__*/React.createElement("span", null, (_currentCategories$ca = (_currentCategories$ca2 = currentCategories.categoryInfo) === null || _currentCategories$ca2 === void 0 ? void 0 : _currentCategories$ca2.label) !== null && _currentCategories$ca !== void 0 ? _currentCategories$ca : '전체보기'))), isVisibleCallout && /*#__PURE__*/React.createElement(_MenuCallout__WEBPACK_IMPORTED_MODULE_0__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuBreadCrumb);

/***/ }),

/***/ "./src/pages/DisplayCategoryList/menu/MenuCallout.jsx":
/*!************************************************************!*\
  !*** ./src/pages/DisplayCategoryList/menu/MenuCallout.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/CategoriesProvider/CategoriesProvider.js");
/* harmony import */ var _MenuCalloutItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuCalloutItem */ "./src/pages/DisplayCategoryList/menu/MenuCalloutItem.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var MenuCallout = function MenuCallout() {
  var _useCategoriesStateCo = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__.useCategoriesStateContext)(),
    parentCategories = _useCategoriesStateCo.parentCategories;
  var _useCategoriesActionC = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__.useCategoriesActionContext)(),
    searchCategoryMenu = _useCategoriesActionC.searchCategoryMenu;
  if (!parentCategories.categoryInfo.label) return /*#__PURE__*/React.createElement(React.Fragment, null);
  var onClickCalloutMenu = function onClickCalloutMenu(_ref) {
    var currentCategoryNo = _ref.currentCategoryNo,
      categoryNo = _ref.categoryNo,
      depth = _ref.depth;
    if (currentCategoryNo === categoryNo) return;
    searchCategoryMenu({
      categoryNo: categoryNo,
      depth: depth
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "category-callout"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "a11y"
  }, "\uD558\uC704 \uBA54\uB274 \uD328\uB110"), /*#__PURE__*/React.createElement("menu", {
    className: "category-callout__list"
  }, parentCategories.categories.map(function (category) {
    var _parentCategories$cat, _parentCategories$cat3;
    return /*#__PURE__*/React.createElement("li", {
      key: category.categoryNo,
      className: "".concat(((_parentCategories$cat = parentCategories.categoryInfo) === null || _parentCategories$cat === void 0 ? void 0 : _parentCategories$cat.categoryNo) === category.categoryNo ? 'is-active' : '')
    }, /*#__PURE__*/React.createElement("button", {
      className: "category-callout__btn",
      onClick: function onClick() {
        var _parentCategories$cat2;
        onClickCalloutMenu({
          currentCategoryNo: (_parentCategories$cat2 = parentCategories.categoryInfo) === null || _parentCategories$cat2 === void 0 ? void 0 : _parentCategories$cat2.categoryNo,
          categoryNo: category.categoryNo,
          depth: category.depth
        });
      }
    }, category.label), ((_parentCategories$cat3 = parentCategories.categoryInfo) === null || _parentCategories$cat3 === void 0 ? void 0 : _parentCategories$cat3.categoryNo) === category.categoryNo && /*#__PURE__*/React.createElement(_MenuCalloutItem__WEBPACK_IMPORTED_MODULE_0__["default"], null));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuCallout);

/***/ }),

/***/ "./src/pages/DisplayCategoryList/menu/MenuCalloutItem.jsx":
/*!****************************************************************!*\
  !*** ./src/pages/DisplayCategoryList/menu/MenuCalloutItem.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/CategoriesProvider/CategoriesProvider.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var MenuCalloutItem = function MenuCalloutItem() {
  var _parentCategories$cat, _currentCategories$ca;
  var _useCategoriesStateCo = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_0__.useCategoriesStateContext)(),
    parentCategories = _useCategoriesStateCo.parentCategories,
    currentCategories = _useCategoriesStateCo.currentCategories;
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  if (!parentCategories.categoryInfo.label) return /*#__PURE__*/React.createElement(React.Fragment, null);
  var currentCategoryNo = Number(searchParams.get('categoryNo'));
  return /*#__PURE__*/React.createElement("div", {
    className: "category-callout__sub"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "category-callout__sub-nav"
  }, /*#__PURE__*/React.createElement("a", {
    className: "category-callout__link",
    href: "/products?categoryNo=".concat(parentCategories === null || parentCategories === void 0 ? void 0 : (_parentCategories$cat = parentCategories.categoryInfo) === null || _parentCategories$cat === void 0 ? void 0 : _parentCategories$cat.categoryNo)
  }, "\uC804\uCCB4\uBCF4\uAE30 ", '>'), (_currentCategories$ca = currentCategories.categories) === null || _currentCategories$ca === void 0 ? void 0 : _currentCategories$ca.map(function (category) {
    return /*#__PURE__*/React.createElement("a", {
      key: category.categoryNo,
      className: "".concat(currentCategoryNo === category.categoryNo ? 'is-active' : '', " category-callout__link"),
      href: "/products?categoryNo=".concat(category.categoryNo, "&depth=").concat(category.depth)
    }, category.label);
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuCalloutItem);

/***/ }),

/***/ "./src/pages/DisplayCategoryList/menu/MenuGrid.jsx":
/*!*********************************************************!*\
  !*** ./src/pages/DisplayCategoryList/menu/MenuGrid.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/CategoriesProvider/CategoriesProvider.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var MenuGrid = function MenuGrid() {
  var _currentCategories$ca, _childCategories$cate;
  var _useCategoriesStateCo = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_0__.useCategoriesStateContext)(),
    currentCategories = _useCategoriesStateCo.currentCategories,
    childCategories = _useCategoriesStateCo.childCategories;
  if (!((_currentCategories$ca = currentCategories.categoryInfo) !== null && _currentCategories$ca !== void 0 && _currentCategories$ca.label)) return /*#__PURE__*/React.createElement(React.Fragment, null);
  return /*#__PURE__*/React.createElement("nav", {
    className: "category-menu"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "category-menu__slide"
  }, currentCategories.categories.map(function (category) {
    return /*#__PURE__*/React.createElement("li", {
      key: category.categoryNo
    }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      className: "category-menu__link ".concat(currentCategories.categoryInfo.categoryNo === category.categoryNo ? 'is-active' : ''),
      to: "/products?categoryNo=".concat(category.categoryNo, "&depth=").concat(category.depth)
    }, category.label));
  })), /*#__PURE__*/React.createElement("ul", {
    className: "category-menu__list"
  }, (_childCategories$cate = childCategories.categories) === null || _childCategories$cate === void 0 ? void 0 : _childCategories$cate.map(function (lowerMenu) {
    return /*#__PURE__*/React.createElement("li", {
      key: lowerMenu.categoryNo
    }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      className: "category-menu__link",
      to: "/products?categoryNo=".concat(lowerMenu.categoryNo, "&depth=").concat(lowerMenu.depth)
    }, lowerMenu.label));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuGrid);

/***/ })

}]);
//# sourceMappingURL=src_pages_DisplayCategoryList_index_js.77c152bdd1f43c98935c.bundle.js.map