"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_pages_ProductSectionList_index_js"],{

/***/ "./node_modules/@shopby/react-components/dist/esm/display/ProductSectionListProvider/ProductSectionListProvider.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/display/ProductSectionListProvider/ProductSectionListProvider.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useProductSectionListActionContext": () => (/* binding */ useProductSectionListActionContext),
/* harmony export */   "useProductSectionListStateContext": () => (/* binding */ useProductSectionListStateContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/shared/helpers */ "./node_modules/@shopby/shared/dist/esm/helpers/index.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},__assign.apply(this,arguments)},__rest=undefined&&undefined.__rest||function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(t);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(t,o[n])&&(r[o[n]]=t[o[n]])}return r},__read=undefined&&undefined.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var o,n,a=r.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(o=a.next()).done;)i.push(o.value)}catch(t){n={error:t}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}return i},__spreadArray=undefined&&undefined.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var o,n=0,a=e.length;n<a;n++)!o&&n in e||(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))};var _a=_shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_3__.displayHelper.productSection,Helper=_a.Helper,QUERY_KEY=_a.QUERY_KEY,DEFAULT_PROVIDER_STATE={displaySectionResponse:null,rightSpaceColor:"",leftSpaceColor:"",productTotalCount:0,displayConfig:{displayHeight:0,displayType:_shopby_shared__WEBPACK_IMPORTED_MODULE_2__.THUMB_LIST_TYPE.GALLERY,displayWidth:0},displayableStock:!1,sectionExplain:"",imageUrl:"",label:"",sectionId:"",sectionNo:0,recommendedProducts:[],products:[],accumulationProducts:[],promotionText:"",pageNumber:1,sortType:"SALE"},ProductSectionListStateContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),ProductSectionListActionContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),ProductSectionListProvider=function(t){var e=t.platformType,r=t.children,o=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_PROVIDER_STATE.displaySectionResponse),2),n=o[0],a=o[1],i=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_PROVIDER_STATE.label),2),s=i[0],c=i[1],u=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_PROVIDER_STATE.productTotalCount),2),l=u[0],p=u[1],_=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_PROVIDER_STATE.products),2),d=_[0],S=_[1],y=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_PROVIDER_STATE.pageNumber),2),f=y[0],T=y[1],E=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_PROVIDER_STATE.sortType),2),P=E[0],h=E[1],x=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_PROVIDER_STATE.accumulationProducts),2),A=x[0],m=x[1],L=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return (0,_shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_3__.executeHelper)(new Helper(e))}),[]).executeQuery,v=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return{fetchProductSectionList:function(t){var e=t.sectionsId,r=t.pageNumber,o=void 0===r?1:r,n=t.soldOut,i=void 0!==n&&n,s=__rest(t,["sectionsId","pageNumber","soldOut"]);return L(QUERY_KEY.QUERY_DISPLAY_SECTIONS_IDS_SECTIONID,{payload:__assign({sectionsId:e,pageNumber:o,soldout:i},s),onSuccess:function(t){var e=t.data;a(e),T(o),c(e.label),p(e.productTotalCount),m((function(t){return 1===o?e.products:__spreadArray(__spreadArray([],__read(t),!1),__read(e.products),!1)})),S(e.products)}})},updateSortType:function(t){h(t)}}}),[P,f]);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProductSectionListStateContext.Provider,__assign({value:{label:s,productTotalCount:l,products:d,sortType:P,pageNumber:f,accumulationProducts:A,displaySectionResponse:n}},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProductSectionListActionContext.Provider,__assign({value:v},{children:r}))}))};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductSectionListProvider);var useProductSectionListStateContext=function(){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProductSectionListStateContext);if(!t)throw new Error("INVALID_ProductSectionListStateContext");return t};var useProductSectionListActionContext=function(){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProductSectionListActionContext);if(!t)throw new Error("INVALID_ProductSectionListActionContext");return t};

/***/ }),

/***/ "./src/pages/ProductSectionList/ProductSectionListPage.jsx":
/*!*****************************************************************!*\
  !*** ./src/pages/ProductSectionList/ProductSectionListPage.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductSectionListPage": () => (/* binding */ ProductSectionListPage)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/ProductSectionListProvider/ProductSectionListProvider.js");
/* harmony import */ var _ProductSectionListWrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductSectionListWrap */ "./src/pages/ProductSectionList/ProductSectionListWrap.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var ProductSectionListPage = function ProductSectionListPage() {
  var platformType = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useOutletContext)();
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
    platformType: platformType
  }, /*#__PURE__*/React.createElement(_ProductSectionListWrap__WEBPACK_IMPORTED_MODULE_0__["default"], null));
};

/***/ }),

/***/ "./src/pages/ProductSectionList/ProductSectionListWrap.jsx":
/*!*****************************************************************!*\
  !*** ./src/pages/ProductSectionList/ProductSectionListWrap.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/ProductSectionListProvider/ProductSectionListProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/manage/PageScriptsProvider/PageScriptsProvider.js");
/* harmony import */ var _components_GalleryListPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/GalleryListPage */ "./src/components/GalleryListPage/index.js");
/* harmony import */ var _hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useLayoutChanger */ "./src/hooks/useLayoutChanger.js");
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
var SORT_BY = [{
  value: 'SALE',
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
  value: 'REGISTER',
  label: '등록일순'
}];
var ProductSectionListWrap = function ProductSectionListWrap() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)(),
    sectionsId = _useParams.sectionsId;
  var _useProductSectionLis = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__.useProductSectionListStateContext)(),
    sortType = _useProductSectionLis.sortType,
    label = _useProductSectionLis.label,
    productTotalCount = _useProductSectionLis.productTotalCount,
    pageNumber = _useProductSectionLis.pageNumber,
    accumulationProducts = _useProductSectionLis.accumulationProducts,
    displaySectionResponse = _useProductSectionLis.displaySectionResponse;
  var _useProductSectionLis2 = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__.useProductSectionListActionContext)(),
    fetchProductSectionList = _useProductSectionLis2.fetchProductSectionList,
    updateSortType = _useProductSectionLis2.updateSortType;
  var _usePageScriptsAction = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__.usePageScriptsActionContext)(),
    applyPageScripts = _usePageScriptsAction.applyPageScripts;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      pageNumber: pageNumber,
      sectionsId: sectionsId,
      pageSize: PER_PAGE_COUNT,
      by: sortType,
      soldOut: true
    }),
    _useState2 = _slicedToArray(_useState, 2),
    queryString = _useState2[0],
    setQueryString = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    disabled = _useState4[0],
    setDisabled = _useState4[1];
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('title'),
    t = _useTranslation.t;
  var handleIntersect = function handleIntersect() {
    setDisabled(true);
    if (accumulationProducts.length >= productTotalCount) return;
    setQueryString(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        pageNumber: prev.pageNumber + 1
      });
    });
  };
  (0,_hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_3__["default"])({
    hasBackBtnOnHeader: true,
    hasBottomNav: true,
    hasCartBtnOnHeader: true,
    title: t(label)
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.scrollTo(0, 0);
    setQueryString(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        pageNumber: 1,
        by: sortType
      });
    });
  }, [sortType]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchProductSectionList(queryString);
    setDisabled(false);
  }, [queryString]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!displaySectionResponse) return;
    applyPageScripts('DISPLAY_SECTION', {
      displaySection: displaySectionResponse
    });
  }, [displaySectionResponse]);
  return /*#__PURE__*/React.createElement(_components_GalleryListPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    totalCount: productTotalCount,
    products: accumulationProducts,
    sortType: sortType,
    sortBy: SORT_BY,
    updateSortType: updateSortType,
    handleIntersect: handleIntersect,
    disabled: disabled
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductSectionListWrap);

/***/ }),

/***/ "./src/pages/ProductSectionList/index.js":
/*!***********************************************!*\
  !*** ./src/pages/ProductSectionList/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _ProductSectionListPage_jsx__WEBPACK_IMPORTED_MODULE_0__.ProductSectionListPage)
/* harmony export */ });
/* harmony import */ var _ProductSectionListPage_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductSectionListPage.jsx */ "./src/pages/ProductSectionList/ProductSectionListPage.jsx");


/***/ })

}]);
//# sourceMappingURL=src_pages_ProductSectionList_index_js.aca0730acbb35fee4d57.bundle.js.map