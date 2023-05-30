"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_pages_SignUpMenu_index_js"],{

/***/ "./node_modules/@shopby/react-components/dist/esm/auth/OpenIdSignInProvider/OpenIdSignInProvider.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/auth/OpenIdSignInProvider/OpenIdSignInProvider.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useOpenIdSignInActionContext": () => (/* binding */ useOpenIdSignInActionContext),
/* harmony export */   "useOpenIdSignInValueContext": () => (/* binding */ useOpenIdSignInValueContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/shared/helpers */ "./node_modules/@shopby/shared/dist/esm/helpers/index.js");
/* harmony import */ var _shopby_shared_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/shared/types */ "./node_modules/@shopby/shared/dist/esm/types/index.js");
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../manage */ "./node_modules/@shopby/react-components/dist/esm/manage/TermsProvider/TermsProvider.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./node_modules/@shopby/react-components/dist/esm/utils/provider.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},__assign.apply(this,arguments)},__read=undefined&&undefined.__read||function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,a,o=t.call(e),i=[];try{for(;(void 0===r||r-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(t=o.return)&&t.call(o)}finally{if(a)throw a.error}}return i},__spreadArray=undefined&&undefined.__spreadArray||function(e,r,t){if(t||2===arguments.length)for(var n,a=0,o=r.length;a<o;a++)!n&&a in r||(n||(n=Array.prototype.slice.call(r,0,a)),n[a]=r[a]);return e.concat(n||Array.prototype.slice.call(r))};var DEFAULT_STATE={openIdInfo:{dormantMemberResponse:{memberName:null,mobileNo:null,email:null},provider:"",ordinaryMemberResponse:{signUpDateTime:null,email:null}},isAgreement:!1,isKakaosync:!1,profileInfo:{mallName:"",memberNo:0,memberGradeName:"",memberGroupNames:"",memberGroups:[],memberName:"",memberId:"",mobileNo:"",telephoneNo:"",memberStatus:"",memberType:"",principalCertificated:!1,certificationType:"",birthday:"",sex:"",email:"",zipCd:"",address:"",detailAddress:"",jibunAddress:"",jibunDetailAddress:"",nickname:"",joinTypeName:"",joinYmdt:"",lastLoginYmdt:"",lastLoginIp:"",loginCount:0,pushNotificationAgreed:!1,pushNotificationAgreeYmdt:"",pushNotificationDisagreeYmdt:"",smsAgreed:!1,smsAgreeYmdt:"",smsDisagreeYmdt:"",directMailAgreed:!1,directMailAgreeYmdt:"",directMailDisagreeYmdt:"",countryCd:"KR",oauthIdNo:"",additionalInfo:"",adultCertificated:!1,adultCertificatedYmdt:"",refundBank:"",refundBankAccount:"",refundBankDepositorName:"",agreedTerms:[],agreedTermsInfos:[],providerType:"",providerTypes:[]},termsInfo:{title:"",contents:""},isTermsContentFullModalOpen:!1,termStatus:[],allChecked:!1,kakaosyncSignUpMemberInfo:{id:"",password:""}},OpenIdSignInValueContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),OpenIdSignInActionContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),_a=_shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_2__.authHelper.auth,Helper=_a.Helper,QUERY_KEY=_a.QUERY_KEY,MUTATION_KEY=_a.MUTATION_KEY,OPTION_TERMS_TYPES={PI_COLLECTION_AND_USE_OPTIONAL:"개인정보 수집/이용",PI_PROCESS_CONSIGNMENT:"개인정보 처리/위탁",PI_THIRD_PARTY_PROVISION:"개인정보 제 3자 제공"},OpenIdSignInProviderContent=function(e){var r=e.children,t=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.openIdInfo),2),n=t[0],a=t[1],o=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.isAgreement),2),i=o[0],s=o[1],d=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.isKakaosync),2),u=d[0],l=d[1],c=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.profileInfo),2),m=c[0],_=c[1],p=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.termsInfo),2),f=p[0],I=p[1],g=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.isTermsContentFullModalOpen),2),T=g[0],h=g[1],S=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.termStatus),2),A=S[0],O=S[1],v=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.allChecked),2),N=v[0],E=v[1],y=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.kakaosyncSignUpMemberInfo),2),b=y[0],C=y[1],P=(0,_manage__WEBPACK_IMPORTED_MODULE_4__.useTermsActionContext)().fetchTerms,U=(0,_manage__WEBPACK_IMPORTED_MODULE_4__.useTermsStateContext)().terms;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){P(["PI_COLLECTION_AND_USE_OPTIONAL","PI_PROCESS_CONSIGNMENT","PI_THIRD_PARTY_PROVISION"])}),[]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){var e=Object.keys(OPTION_TERMS_TYPES).filter((function(e){var r;return null===(r=U[e])||void 0===r?void 0:r.used})),r=null==e?void 0:e.map((function(e){return{id:e.toLowerCase(),label:"[선택] ".concat(_shopby_shared_types__WEBPACK_IMPORTED_MODULE_3__.TERMS_TYPE[e]),checked:!1,required:!1,termsType:e}}));O((function(e){return __spreadArray(__spreadArray([],__read(e),!1),__read(r),!1)}))}),[U]);var k=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return (0,_shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_2__.executeHelper)(new Helper)}),[]),R=k.executeQuery,M=k.executeMutation,x=M(MUTATION_KEY.POST_PROFILE_OPEN_ID).mutate,Y=M(MUTATION_KEY.POST_PROFILE_OPEN_ID).mutate,D=M(MUTATION_KEY.POST_PROFILE_SYNCHRONIZE).mutate;(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){var e=A.filter((function(e){return"sms"===e.id})),r=A.filter((function(e){return"email"===e.id}));A.every((function(e){return e.checked}))?E(!0):E(!1),_((function(r){return __assign(__assign({},r),{smsAgreed:e.some((function(e){return e.checked}))})})),_((function(e){return __assign(__assign({},e),{directMailAgreed:r.some((function(e){return e.checked}))})}))}),[A]);var L=function(e){void 0===e&&(e=6);var r="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";return Array.from(Array(e).keys()).reduce((function(e){return e+r.charAt(Math.floor(62*Math.random()))}),"")}(),j=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return{updateIsAgreement:s,updateIsKakaosync:l,updateTermsInfo:(0,_utils__WEBPACK_IMPORTED_MODULE_5__.makeStateUpdater)(I),updateAllChecked:(0,_utils__WEBPACK_IMPORTED_MODULE_5__.makeStateUpdater)(E),updateKakaosyncSignUpMemberInfo:(0,_utils__WEBPACK_IMPORTED_MODULE_5__.makeStateUpdater)(C),updateIsTermsContentFullModalOpen:h,setTermStatus:O,setPathToLocalStorage:function(e){var r=e.previousPath,t=e.orderSheetPath,n=e.nextPath;localStorage.setItem("pathData",JSON.stringify({previousPath:r,nextPath:n,orderSheetPath:t}))},getPathFromLocalStorage:function(){var e;return JSON.parse(null!==(e=localStorage.getItem("pathData"))&&void 0!==e?e:"")},removePath:function(){localStorage.removeItem("pathData")},setOauthIdNoToLocalStorage:function(e){localStorage.setItem("withdrawalOauthIdNo",e)},getOauthIdNoToLocalStorage:function(){return localStorage.getItem("withdrawalOauthIdNo")},removeOauthIdNo:function(){localStorage.removeItem("withdrawalOauthIdNo")},setOauthCompareResultToLocalStorage:function(e){localStorage.setItem("withdrawalOauthIdNoCompareResult",JSON.stringify(e))},getOauthCompareResultToLocalStorage:function(){var e;return null!==(e=localStorage.getItem("withdrawalOauthIdNoCompareResult"))&&void 0!==e?e:""},removeOauthCompareResultToLocalStorage:function(){localStorage.removeItem("withdrawalOauthIdNoCompareResult")},openIdSignIn:function(e){var r=e.provider,t=e.redirectUri,n="ncp_".concat(r);return localStorage.setItem("provider",n),localStorage.setItem("oauthStateToken",L),R(QUERY_KEY.QUERY_GET_OAUTH_LOGIN_URL,{payload:{provider:n,state:L,redirectUri:t},onSuccess:function(e){var r=e.data;location.href=r.loginUrl}})},getOauthOpenId:function(e){var r=e.code,t=e.redirectUri,n=localStorage.getItem("provider"),o=localStorage.getItem("oauthStateToken");return R(QUERY_KEY.QUERY_GET_OAUTH_OPEN_ID,{payload:{code:r,redirectUri:t,provider:n,state:o},onSuccess:function(e){var r=e.data;localStorage.removeItem("provider"),localStorage.removeItem("oauthStateToken"),r.dormantMemberResponse?a({dormantMemberResponse:__assign({},r.dormantMemberResponse),provider:r.provider,ordinaryMemberResponse:{signUpDateTime:null,email:null}}):r.ordinaryMemberResponse?a({dormantMemberResponse:{memberName:null,mobileNo:null,email:null},provider:r.provider,ordinaryMemberResponse:__assign({},r.ordinaryMemberResponse)}):a({dormantMemberResponse:{memberName:null,mobileNo:null,email:null},provider:r.provider,ordinaryMemberResponse:{signUpDateTime:null,email:null}})}})},getProfile:function(){return R(QUERY_KEY.QUERY_GET_PROFILE,{onSuccess:function(e){var r=e.data;_(__assign({},r))}})},getTerms:function(e){var r=e.termsTypes;return R(QUERY_KEY.QUERY_GET_TERMS,{payload:{termsTypes:r},onSuccess:function(e){var r=e.data,t=Object.values(r),n=__read(t,1)[0].contents;I((function(e){return __assign(__assign({},e),{contents:n})})),h(!0)}})},openIdSignUp:function(){var e=__spreadArray([],__read(A),!1);if(e.filter((function(e){return e.required})).some((function(e){return!1===e.checked})))return!1;var r=e.filter((function(e){return e.termsType})).filter((function(e){return e.checked})).map((function(e){return e.termsType}));return x({payload:{mobileNo:m.mobileNo,telephoneNo:m.telephoneNo,memberName:m.memberName,birthday:m.birthday,sex:m.sex,email:m.email,zipCd:m.zipCd,address:m.address,detailAddress:m.detailAddress,jibunAddress:m.jibunAddress,jibunDetailAddress:m.jibunDetailAddress,nickname:m.nickname,pushNotificationAgreed:m.pushNotificationAgreed,smsAgreed:m.smsAgreed,directMailAgreed:m.directMailAgreed,joinTermsAgreements:r}})},kakaosyncSignUp:function(){return Y({payload:{mobileNo:m.mobileNo,telephoneNo:m.telephoneNo,memberName:m.memberName,birthday:m.birthday,sex:m.sex,email:m.email,zipCd:m.zipCd,address:m.address,detailAddress:m.detailAddress,jibunAddress:m.jibunAddress,jibunDetailAddress:m.jibunDetailAddress,nickname:m.nickname,pushNotificationAgreed:m.pushNotificationAgreed,smsAgreed:m.smsAgreed,directMailAgreed:m.directMailAgreed}})},synchronizeOpenId:function(e){return D({payload:e})},allCheck:function(e){var r=__spreadArray([],__read(A),!1),t=r.map((function(e){return!1===e.checked?__assign(__assign({},e),{checked:!0}):e})),n=r.map((function(e){return __assign(__assign({},e),{checked:!1})}));O(e?t:n)},singleCheck:function(e){var r=e.isChecked,t=e.label,n=A.findIndex((function(e){return e.label===t})),a=__spreadArray([],__read(A),!1);r?(a[n].checked=!1,O(__spreadArray([],__read(a),!1))):(a[n].checked=!0,O(__spreadArray([],__read(a),!1)))}}}),[A,m]);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OpenIdSignInActionContext.Provider,__assign({value:j},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OpenIdSignInValueContext.Provider,__assign({value:{openIdInfo:n,isAgreement:i,isKakaosync:u,profileInfo:m,termsInfo:f,isTermsContentFullModalOpen:T,termStatus:A,allChecked:N,kakaosyncSignUpMemberInfo:b}},{children:r}))}))},OpenIdSignInProvider=function(e){var r=e.children;return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_manage__WEBPACK_IMPORTED_MODULE_4__["default"],__assign({hasOnlyUsedTerms:!0},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OpenIdSignInProviderContent,{children:r})}))};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpenIdSignInProvider);var useOpenIdSignInActionContext=function(){var e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(OpenIdSignInActionContext);if(!e)throw new Error("INVALID_OpenIdSignInActionContext");return e};var useOpenIdSignInValueContext=function(){var e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(OpenIdSignInValueContext);if(!e)throw new Error("INVALID_OpenIdSignInValueContext");return e};

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

/***/ "./node_modules/@shopby/react-components/dist/esm/utils/provider.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/utils/provider.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeStateUpdater": () => (/* binding */ makeStateUpdater)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/merge.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/cloneDeep.js");

var makeStateUpdater = function (setState) {
    return function (partialState) {
        setState(function (prev) { return (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"])((0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), partialState); });
    };
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

/***/ "./src/pages/SignUpMenu/SignUpMenu.jsx":
/*!*********************************************!*\
  !*** ./src/pages/SignUpMenu/SignUpMenu.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/OpenIdSignInProvider/OpenIdSignInProvider.js");
/* harmony import */ var _components_OpenIdSignIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/OpenIdSignIn */ "./src/components/OpenIdSignIn/index.js");
/* harmony import */ var _hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useLayoutChanger */ "./src/hooks/useLayoutChanger.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");





var SignUpMenu = function SignUpMenu() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)('title'),
    t = _useTranslation.t;
  (0,_hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_2__["default"])({
    hasBackBtnOnHeader: true,
    title: t('signUp')
  });
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useMallStateContext)(),
    openIdJoinConfig = _useMallStateContext.openIdJoinConfig;
  return /*#__PURE__*/React.createElement("div", {
    className: "sign-up-menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sign-up-menu__link-normal"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/sign-up/form"
  }, "\uC1FC\uD551\uBAB0 \uD68C\uC6D0\uAC00\uC785")), openIdJoinConfig.providers && /*#__PURE__*/React.createElement("div", {
    className: "sign-up-menu__link-open-id"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/React.createElement(_components_OpenIdSignIn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "\uD68C\uC6D0\uAC00\uC785",
    providers: openIdJoinConfig.providers
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpMenu);
SignUpMenu.propTypes = {};

/***/ }),

/***/ "./src/pages/SignUpMenu/index.js":
/*!***************************************!*\
  !*** ./src/pages/SignUpMenu/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SignUpMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUpMenu */ "./src/pages/SignUpMenu/SignUpMenu.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_SignUpMenu__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);
//# sourceMappingURL=src_pages_SignUpMenu_index_js.063707140303ce6b9824.bundle.js.map