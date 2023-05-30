"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_pages_OpenIdCallback_index_js"],{

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

/***/ "./node_modules/@shopby/react-components/dist/esm/auth/SignInProvider/SignInProvider.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/auth/SignInProvider/SignInProvider.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useSignInActionContext": () => (/* binding */ useSignInActionContext),
/* harmony export */   "useSignInValueContext": () => (/* binding */ useSignInValueContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/shared/helpers */ "./node_modules/@shopby/shared/dist/esm/helpers/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./node_modules/@shopby/react-components/dist/esm/utils/provider.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},__assign.apply(this,arguments)},__read=undefined&&undefined.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,o=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)s.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return s};var DEFAULT_STATE={signInInfo:{memberId:"",password:""},hasGuestOrderSheetUrl:!1,guestOrderInfo:{orderNo:"",orderPassword:""},isSignedIn:!1,dormantMemberResponse:{memberName:null,mobileNo:null,email:null},daysFromLastPasswordChange:null},SignInValueContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),SignInActionContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),_a=_shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_2__.authHelper.auth,Helper=_a.Helper,MUTATION_KEY=_a.MUTATION_KEY,SignInProvider=function(e){var t=e.children,r=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.signInInfo),2),n=r[0],a=r[1],o=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.guestOrderInfo),2),s=o[0],u=o[1],i=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.hasGuestOrderSheetUrl),2),d=i[0],_=i[1],l=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.isSignedIn),2),S=l[0],m=l[1],c=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.dormantMemberResponse),2),I=c[0],p=c[1],T=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.daysFromLastPasswordChange),2),g=T[0],f=T[1],h=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return (0,_shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_2__.executeHelper)(new Helper)}),[]).executeMutation,A=h(MUTATION_KEY.POST_OAUTH_TOKEN).mutate,O=h(MUTATION_KEY.POST_GUEST_ORDERS_ORDER_NO).mutate,x=h(MUTATION_KEY.PUT_PROFILE_PASSWORD).mutate,E=h(MUTATION_KEY.PUT_PROFILE_DORMANCY).mutate,U=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return{updateSignInInfo:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.makeStateUpdater)(a),updateHasGuestOrderSheetUrl:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.makeStateUpdater)(_),updateGuestOrderInfo:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.makeStateUpdater)(u),setIsSignedIn:m,setDaysFromLastPasswordChange:f,setDormantMemberResponse:p,signIn:function(e){return A({payload:e,onSuccess:function(e){var t=e.data;t.dormantMemberResponse&&p(t.dormantMemberResponse),f(t.daysFromLastPasswordChange),m(!0)}})},searchGuestOrders:function(e){return O({payload:e})},changePassword:function(e){return x({payload:e})},reactivateDormantAccount:function(e){return E({payload:e})}}}),[]);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SignInActionContext.Provider,__assign({value:U},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SignInValueContext.Provider,__assign({value:{isSignedIn:S,signInInfo:n,guestOrderInfo:s,hasGuestOrderSheetUrl:d,dormantMemberResponse:I,daysFromLastPasswordChange:g}},{children:t}))}))};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInProvider);var useSignInActionContext=function(){var e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SignInActionContext);if(!e)throw new Error("INVALID_SignInActionContext");return e};var useSignInValueContext=function(){var e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SignInValueContext);if(!e)throw new Error("INVALID_SignInValueContext");return e};

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},__assign.apply(this,arguments)},__rest=undefined&&undefined.__rest||function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(r[n[a]]=t[n[a]])}return r};var Button=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function(t,e){var r=t.theme,n=void 0===r?"default":r,a=t.label,o=t.className,s=void 0===o?"":o,i=t.children,l=__rest(t,["theme","label","className","children"]);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",__assign({ref:e,type:"button",className:"btn btn--".concat(n," ").concat(s)},l,{children:i||a}))}));/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);Button.displayName="Button";

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/common/Checkbox/Checkbox.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/common/Checkbox/Checkbox.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon */ "./node_modules/@shopby/react-components/dist/esm/common/Icon/Icon.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(e){for(var r,s=1,a=arguments.length;s<a;s++)for(var n in r=arguments[s])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},__assign.apply(this,arguments)},__rest=undefined&&undefined.__rest||function(e,r){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(s[a[n]]=e[a[n]])}return s};var Checkbox=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function(e,r){var s=e.label,a=e.className,n=void 0===a?"":a,o=e.isRounded,t=void 0!==o&&o,c=e.children,i=__rest(e,["label","className","isRounded","children"]);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",__assign({className:"check-radio ".concat(t?"check-radio--rounded":""," ").concat(n)},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",__assign({ref:r,type:"checkbox"},i)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",__assign({className:"check-radio__ico"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"],{name:"check-white"})})),s?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",__assign({className:"check-radio__label"},{children:s})):c]}))}));Checkbox.displayName="Checkbox";/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);

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

/***/ "./node_modules/@shopby/react-components/dist/esm/common/IconBtn/IconBtn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/common/IconBtn/IconBtn.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon/Icon */ "./node_modules/@shopby/react-components/dist/esm/common/Icon/Icon.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(n){for(var s,t=1,a=arguments.length;t<a;t++)for(var o in s=arguments[t])Object.prototype.hasOwnProperty.call(s,o)&&(n[o]=s[o]);return n},__assign.apply(this,arguments)};var IconBtn=function(n){var s=n.label,t=void 0===s?"":s,a=n.iconType,o=n.rounded,i=void 0!==o&&o,e=n.onClick,c=n.className,r=void 0===c?"":c,d=n.testId,l=void 0===d?"icon-btn":d,_=n.disabled,u=void 0!==_&&_,p=n.hiddenLabel,v=void 0===p||p;return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",__assign({type:"button",className:"".concat(i?"icon-btn--round":""," ").concat(null!=r?r:""),disabled:u,onClick:e,"data-testid":l},{children:[a&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__["default"],{name:a}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",__assign({className:v?"a11y":""},{children:t}))]}))};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconBtn);

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/common/TextField/TextField.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/common/TextField/TextField.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopby_shared_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/shared/constants */ "./node_modules/@shopby/shared/dist/esm/constants/index.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},__assign.apply(this,arguments)},__rest=undefined&&undefined.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};var TextField=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function(e,t){var r=e.value,a=e.className,n=e.testId,s=void 0===n?"text-field":n,i=e.valid,o=e.onChange,l=__rest(e,["value","className","testId","valid","onChange"]);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",__assign({className:"text-field ".concat(null!=a?a:"")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",__assign({ref:t,"data-testid":s,type:"text",value:r,onChange:function(e){var t=e.currentTarget.value;i&&(t=t.replace(_shopby_shared_constants__WEBPACK_IMPORTED_MODULE_2__.REG_EX_FOR_VALIDATION[i],""),e.currentTarget.value=t),null==o||o(e)}},l))}))}));TextField.displayName="TextField";/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextField);

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/modal/CustomModal/CustomModal.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/modal/CustomModal/CustomModal.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/omit.js");
/* harmony import */ var _ModalProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ModalProvider */ "./node_modules/@shopby/react-components/dist/esm/modal/ModalProvider.js");
/* harmony import */ var _Portal_Portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Portal/Portal */ "./node_modules/@shopby/react-components/dist/esm/modal/Portal/Portal.js");
/* harmony import */ var _customModalRepository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customModalRepository */ "./node_modules/@shopby/react-components/dist/esm/modal/CustomModal/customModalRepository.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},__assign.apply(this,arguments)},__rest=undefined&&undefined.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};var ContentWrapper=function(t){var e=t.className,n=t.Children,r=t.LazyContent,o=t.id;return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense,__assign({fallback:null},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Portal_Portal__WEBPACK_IMPORTED_MODULE_2__["default"],__assign({id:"custom-modal-".concat(void 0===o?"":o)},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"dim"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",__assign({className:"modal ".concat(null!=e?e:"")},{children:null!=n?n:r}))]}))}))},HookContent=function(){var t=(0,_ModalProvider__WEBPACK_IMPORTED_MODULE_3__.useModalStateContext)().customModalState,e=t.name,n=t.isOpen,r=__rest(t,["name","isOpen"]);if(!n)return null;if(!e)return null;var o=_customModalRepository__WEBPACK_IMPORTED_MODULE_4__["default"][e];return o?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContentWrapper,{LazyContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o,__assign({},r))}):null},CustomModal=function(t){var e=t.className,n=void 0===e?"":e,r=t.id,o=t.children,s=__rest(t,["className","id","children"]);return o?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContentWrapper,{className:n,id:r,Children:(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(o,__assign({},(0,lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"])(s,["children"])))}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HookContent,{})};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomModal);

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/modal/CustomModal/customModalRepository.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/modal/CustomModal/customModalRepository.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({SampleModal:(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)((function(){return __webpack_require__.e(/*! import() */ "node_modules_shopby_react-components_dist_esm_modal_CustomModal_SampleModal_SampleModal_js").then(__webpack_require__.bind(__webpack_require__, /*! ./SampleModal/SampleModal */ "./node_modules/@shopby/react-components/dist/esm/modal/CustomModal/SampleModal/SampleModal.js"))}))});

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

/***/ "./src/pages/OpenIdCallback/OpenIdCallback.jsx":
/*!*****************************************************!*\
  !*** ./src/pages/OpenIdCallback/OpenIdCallback.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/SignInProvider/SignInProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/OpenIdSignInProvider/OpenIdSignInProvider.js");
/* harmony import */ var _OpenIdCallbackForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OpenIdCallbackForm */ "./src/pages/OpenIdCallback/OpenIdCallbackForm.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var OpenIdCallback = function OpenIdCallback() {
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/React.createElement(_OpenIdCallbackForm__WEBPACK_IMPORTED_MODULE_0__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpenIdCallback);

/***/ }),

/***/ "./src/pages/OpenIdCallback/OpenIdCallbackForm.jsx":
/*!*********************************************************!*\
  !*** ./src/pages/OpenIdCallback/OpenIdCallbackForm.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/OpenIdSignInProvider/OpenIdSignInProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/AuthProvider/AuthProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/SignInProvider/SignInProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/modal/ModalProvider.js");
/* harmony import */ var _OpenIdSignUpAgreement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OpenIdSignUpAgreement */ "./src/pages/OpenIdCallback/OpenIdSignUpAgreement.jsx");
/* harmony import */ var _OpenIdSignUpKakaosync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OpenIdSignUpKakaosync */ "./src/pages/OpenIdCallback/OpenIdSignUpKakaosync.jsx");
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





var OpenIdCallbackForm = function OpenIdCallbackForm() {
  var _useOpenIdSignInActio = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useOpenIdSignInActionContext)(),
    getOauthOpenId = _useOpenIdSignInActio.getOauthOpenId,
    getProfile = _useOpenIdSignInActio.getProfile,
    getPathFromLocalStorage = _useOpenIdSignInActio.getPathFromLocalStorage,
    removePath = _useOpenIdSignInActio.removePath,
    getOauthIdNoToLocalStorage = _useOpenIdSignInActio.getOauthIdNoToLocalStorage,
    setOauthCompareResultToLocalStorage = _useOpenIdSignInActio.setOauthCompareResultToLocalStorage,
    removeOauthIdNo = _useOpenIdSignInActio.removeOauthIdNo,
    updateIsAgreement = _useOpenIdSignInActio.updateIsAgreement,
    updateIsKakaosync = _useOpenIdSignInActio.updateIsKakaosync;
  var _useAuthActionContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useAuthActionContext)(),
    signOut = _useAuthActionContext.signOut;
  var _useSignInActionConte = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__.useSignInActionContext)(),
    reactivateDormantAccount = _useSignInActionConte.reactivateDormantAccount;
  var _useOpenIdSignInValue = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useOpenIdSignInValueContext)(),
    isAgreement = _useOpenIdSignInValue.isAgreement,
    isKakaosync = _useOpenIdSignInValue.isKakaosync,
    profileInfo = _useOpenIdSignInValue.profileInfo,
    openIdInfo = _useOpenIdSignInValue.openIdInfo;
  var _useModalActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__.useModalActionContext)(),
    openAlert = _useModalActionContex.openAlert,
    openConfirm = _useModalActionContex.openConfirm;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
    params = _useSearchParams2[0];
  var code = params.get("code");
  var redirectUri = "".concat(window.location.origin, "/callback/auth-callback");
  var pathObject = getPathFromLocalStorage();
  var orderSheetNo = pathObject.orderSheetPath;
  var previousPath = pathObject.previousPath ? pathObject.previousPath : "/";
  var nextPath = pathObject.nextPath ? pathObject.nextPath : "/";
  var previousOauthIdNo = getOauthIdNoToLocalStorage();
  var reactivate = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref) {
      var accessToken;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            accessToken = _ref.accessToken;
            _context2.next = 3;
            return reactivateDormantAccount({
              authType: "NONE",
              accessToken: accessToken
            });
          case 3:
            openAlert({
              message: "휴면해제 되었습니다.",
              onClose: function () {
                var _onClose = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return getProfile();
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
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function reactivate(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var divideProfileStatus = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _yield$getOauthOpenId, _yield$getOauthOpenId2, dormantMemberResponse, accessToken, isDormantMember;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return getOauthOpenId({
                code: code,
                redirectUri: redirectUri
              });
            case 2:
              _yield$getOauthOpenId = _context4.sent;
              _yield$getOauthOpenId2 = _yield$getOauthOpenId.data;
              dormantMemberResponse = _yield$getOauthOpenId2.dormantMemberResponse;
              accessToken = _yield$getOauthOpenId2.accessToken;
              isDormantMember = (dormantMemberResponse === null || dormantMemberResponse === void 0 ? void 0 : dormantMemberResponse.memberName) || (dormantMemberResponse === null || dormantMemberResponse === void 0 ? void 0 : dormantMemberResponse.email) || (dormantMemberResponse === null || dormantMemberResponse === void 0 ? void 0 : dormantMemberResponse.mobileNo);
              if (!isDormantMember) {
                _context4.next = 10;
                break;
              }
              openConfirm({
                message: /*#__PURE__*/React.createElement(React.Fragment, null, "\uC7A5\uAE30 \uBBF8\uC811\uC18D\uC73C\uB85C \uC778\uD574 \uD734\uBA74\uD68C\uC6D0 \uC804\uD658 \uC0C1\uD0DC\uC785\uB2C8\uB2E4. ", /*#__PURE__*/React.createElement("br", null), "\uD734\uBA74\uD574\uC81C \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"),
                confirmLabel: "확인",
                onConfirm: function onConfirm() {
                  return reactivate({
                    accessToken: accessToken
                  });
                },
                onCancel: function () {
                  var _onCancel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                      while (1) switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return signOut();
                        case 2:
                          window.location.href = "/";
                        case 3:
                        case "end":
                          return _context3.stop();
                      }
                    }, _callee3);
                  }));
                  function onCancel() {
                    return _onCancel.apply(this, arguments);
                  }
                  return onCancel;
                }()
              });
              return _context4.abrupt("return");
            case 10:
              _context4.next = 12;
              return getProfile();
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function divideProfileStatus() {
        return _ref3.apply(this, arguments);
      };
    }();
    if (code) {
      divideProfileStatus();
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (profileInfo.memberStatus === "WAITING" && openIdInfo.ordinaryMemberResponse.signUpDateTime) {
      updateIsKakaosync(true);
    } else if (profileInfo.memberStatus === "WAITING") {
      updateIsAgreement(true);
    }
  }, [profileInfo]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (profileInfo.memberStatus === "ACTIVE" && !!orderSheetNo) {
      window.location.href = "".concat(window.location.origin, "/order/").concat(orderSheetNo);
      removePath();
    } else if (profileInfo.memberStatus === "ACTIVE" && previousPath === "/adult-certification") {
      navigate("".concat(nextPath), {
        state: {
          from: nextPath,
          to: previousPath
        }
      });
      removePath();
    } else if (profileInfo.memberStatus === "ACTIVE") {
      navigate("".concat(previousPath), {
        state: {
          from: previousPath,
          to: nextPath
        }
      });
      removePath();
    }
  }, [profileInfo]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (profileInfo.oauthIdNo !== "" && previousOauthIdNo && previousOauthIdNo !== profileInfo.oauthIdNo) {
      setOauthCompareResultToLocalStorage(false);
      removeOauthIdNo();
    } else if (profileInfo.oauthIdNo !== "" && previousOauthIdNo === profileInfo.oauthIdNo) {
      setOauthCompareResultToLocalStorage(true);
      removeOauthIdNo();
    }
  }, [profileInfo]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, isAgreement && /*#__PURE__*/React.createElement(_OpenIdSignUpAgreement__WEBPACK_IMPORTED_MODULE_1__["default"], {
    orderSheetNo: orderSheetNo,
    previousPath: previousPath,
    nextPath: nextPath
  }), isKakaosync && /*#__PURE__*/React.createElement(_OpenIdSignUpKakaosync__WEBPACK_IMPORTED_MODULE_2__["default"], {
    orderSheetNo: orderSheetNo,
    previousPath: previousPath,
    nextPath: nextPath
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpenIdCallbackForm);

/***/ }),

/***/ "./src/pages/OpenIdCallback/OpenIdSignUpAgreement.jsx":
/*!************************************************************!*\
  !*** ./src/pages/OpenIdCallback/OpenIdSignUpAgreement.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/OpenIdSignInProvider/OpenIdSignInProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Checkbox/Checkbox.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ErrorBoundary */ "./src/components/ErrorBoundary/index.js");
/* harmony import */ var _components_FullModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/FullModal */ "./src/components/FullModal/index.js");
/* harmony import */ var _components_Sanitized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Sanitized */ "./src/components/Sanitized/index.js");
/* harmony import */ var _hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useLayoutChanger */ "./src/hooks/useLayoutChanger.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









var OpenIdSignUpAgreement = function OpenIdSignUpAgreement(_ref) {
  var orderSheetNo = _ref.orderSheetNo,
    previousPath = _ref.previousPath,
    nextPath = _ref.nextPath;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('title'),
    t = _useTranslation.t;
  (0,_hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_5__["default"])({
    hasBackBtnOnHeader: true,
    title: t('signUpAgreement')
  });
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  var _useOpenIdSignInActio = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__.useOpenIdSignInActionContext)(),
    getTerms = _useOpenIdSignInActio.getTerms,
    openIdSignUp = _useOpenIdSignInActio.openIdSignUp,
    allCheck = _useOpenIdSignInActio.allCheck,
    singleCheck = _useOpenIdSignInActio.singleCheck,
    updateTermsInfo = _useOpenIdSignInActio.updateTermsInfo,
    updateIsTermsContentFullModalOpen = _useOpenIdSignInActio.updateIsTermsContentFullModalOpen,
    removePath = _useOpenIdSignInActio.removePath,
    setTermStatus = _useOpenIdSignInActio.setTermStatus;
  var _useOpenIdSignInValue = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__.useOpenIdSignInValueContext)(),
    allChecked = _useOpenIdSignInValue.allChecked,
    termStatus = _useOpenIdSignInValue.termStatus,
    termsInfo = _useOpenIdSignInValue.termsInfo,
    isTermsContentFullModalOpen = _useOpenIdSignInValue.isTermsContentFullModalOpen;
  var _useErrorBoundaryActi = (0,_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__.useErrorBoundaryActionContext)(),
    catchError = _useErrorBoundaryActi.catchError;
  var initialTermStatus = [{
    id: 'use',
    label: '[필수] 이용약관',
    checked: false,
    required: true,
    termsType: 'USE'
  }, {
    id: 'pi',
    label: '[필수] 개인정보 수집 / 이용동의',
    checked: false,
    required: true,
    termsType: 'PI_COLLECTION_AND_USE_REQUIRED'
  }, {
    id: 'age',
    label: '[필수] 만 14세 이상입니다',
    checked: false,
    required: true
  }, {
    id: 'email',
    label: '[선택] 마케팅 알림 메일 수신 동의',
    checked: false
  }, {
    id: 'sms',
    label: '[선택] 맞춤 혜택 알림 문자 수신 동의',
    checked: false
  }];
  var handleAllCheck = function handleAllCheck(isChecked) {
    allCheck(isChecked);
  };
  var handleSingleCheck = function handleSingleCheck(isChecked, label) {
    singleCheck({
      isChecked: isChecked,
      label: label
    });
  };
  var handleGetTerms = function handleGetTerms(_ref2) {
    var termsTypes = _ref2.termsTypes,
      title = _ref2.title;
    getTerms({
      termsTypes: termsTypes
    });
    updateTermsInfo({
      title: title
    });
  };
  var handleOpenIdSignUp = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return openIdSignUp();
          case 3:
            if (orderSheetNo) {
              window.location.href = "".concat(window.location.origin, "/order/").concat(orderSheetNo);
              removePath();
            } else if (nextPath === '/adult-certification') {
              navigate("".concat(nextPath), {
                state: {
                  from: previousPath,
                  to: nextPath
                }
              });
              removePath();
            } else {
              navigate("".concat(previousPath), {
                state: {
                  from: nextPath,
                  to: previousPath
                }
              });
              removePath();
            }
            _context.next = 9;
            break;
          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            catchError(_context.t0);
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 6]]);
    }));
    return function handleOpenIdSignUp() {
      return _ref3.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setTermStatus(function (prev) {
      return [].concat(initialTermStatus, _toConsumableArray(prev));
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "open-id-agreement-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "open-id-agreement-form__input-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "open-id-agreement-form__checkbox--check-all"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "\uC544\uB798 \uC57D\uAD00\uC5D0 \uBAA8\uB450 \uB3D9\uC758\uD569\uB2C8\uB2E4.",
    checked: allChecked,
    onChange: function onChange(e) {
      handleAllCheck(e.target.checked);
    }
  }))), /*#__PURE__*/React.createElement("ul", {
    className: "open-id-agreement-form__agree-list"
  }, termStatus === null || termStatus === void 0 ? void 0 : termStatus.map(function (item, idx) {
    return /*#__PURE__*/React.createElement("li", {
      key: idx
    }, /*#__PURE__*/React.createElement("div", {
      className: "open-id-agreement-form__checkbox--check-single"
    }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: item.label,
      checked: item.checked,
      onChange: function onChange() {
        return handleSingleCheck(item.checked, item.label);
      }
    }), item.termsType && /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: "\uBCF4\uAE30",
      onClick: function onClick() {
        handleGetTerms({
          termsTypes: item.termsType,
          title: item.label
        });
      }
    })));
  })), isTermsContentFullModalOpen && /*#__PURE__*/React.createElement(_components_FullModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "agreement",
    title: termsInfo.title,
    onClose: function onClose() {
      return updateIsTermsContentFullModalOpen(false);
    }
  }, /*#__PURE__*/React.createElement(_components_Sanitized__WEBPACK_IMPORTED_MODULE_4__["default"], {
    html: termsInfo.contents
  })), /*#__PURE__*/React.createElement("div", {
    className: "open-id-agreement-form__confirm"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "\uB3D9\uC758",
    onClick: handleOpenIdSignUp
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpenIdSignUpAgreement);
OpenIdSignUpAgreement.propTypes = {
  orderSheetNo: prop_types__WEBPACK_IMPORTED_MODULE_10__.string,
  previousPath: prop_types__WEBPACK_IMPORTED_MODULE_10__.string,
  nextPath: prop_types__WEBPACK_IMPORTED_MODULE_10__.string
};

/***/ }),

/***/ "./src/pages/OpenIdCallback/OpenIdSignUpKakaosync.jsx":
/*!************************************************************!*\
  !*** ./src/pages/OpenIdCallback/OpenIdSignUpKakaosync.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/OpenIdSignInProvider/OpenIdSignInProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/modal/ModalProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/TextField/TextField.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ErrorBoundary */ "./src/components/ErrorBoundary/index.js");
/* harmony import */ var _hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useLayoutChanger */ "./src/hooks/useLayoutChanger.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var OpenIdSignUpKakaosync = function OpenIdSignUpKakaosync(_ref) {
  var orderSheetNo = _ref.orderSheetNo,
    previousPath = _ref.previousPath,
    nextPath = _ref.nextPath;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)("title"),
    t = _useTranslation.t;
  (0,_hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_2__["default"])({
    hasBackBtnOnHeader: true,
    title: t("signUpAgreement")
  });
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  var _useOpenIdSignInActio = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useOpenIdSignInActionContext)(),
    kakaosyncSignUp = _useOpenIdSignInActio.kakaosyncSignUp,
    updateKakaosyncSignUpMemberInfo = _useOpenIdSignInActio.updateKakaosyncSignUpMemberInfo,
    synchronizeOpenId = _useOpenIdSignInActio.synchronizeOpenId,
    removePath = _useOpenIdSignInActio.removePath;
  var _useOpenIdSignInValue = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useOpenIdSignInValueContext)(),
    openIdInfo = _useOpenIdSignInValue.openIdInfo,
    _useOpenIdSignInValue2 = _useOpenIdSignInValue.kakaosyncSignUpMemberInfo,
    id = _useOpenIdSignInValue2.id,
    password = _useOpenIdSignInValue2.password;
  var _useModalActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__.useModalActionContext)(),
    openAlert = _useModalActionContex.openAlert,
    openConfirm = _useModalActionContex.openConfirm;
  var _useErrorBoundaryActi = (0,_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__.useErrorBoundaryActionContext)(),
    catchError = _useErrorBoundaryActi.catchError;
  var movePage = function movePage() {
    if (orderSheetNo) {
      window.location.href = "".concat(window.location.origin, "/order/").concat(orderSheetNo);
      removePath();
    } else if (nextPath === "/adult-certification") {
      navigate("".concat(nextPath), {
        state: {
          from: previousPath,
          to: nextPath
        }
      });
      removePath();
    } else {
      navigate("".concat(previousPath), {
        state: {
          from: nextPath,
          to: previousPath
        }
      });
      removePath();
    }
  };
  var handleKakaosyncSignUp = function handleKakaosyncSignUp() {
    kakaosyncSignUp();
    movePage();
  };
  var validateCheck = function validateCheck() {
    if (!id) {
      openAlert({
        message: "아이디를 입력해주세요."
      });
      return false;
    }
    if (!password) {
      openAlert({
        message: "비밀번호를 입력해주세요."
      });
      return false;
    }
    return true;
  };
  var handleIdConversion = function handleIdConversion() {
    if (!validateCheck()) {
      return;
    }
    openConfirm({
      message: "\uAC04\uD3B8\uB85C\uADF8\uC778\uC73C\uB85C \uD68C\uC6D0\uC744 \uC804\uD658\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? \n \uC804\uD658 \uC2DC \uC77C\uBC18\uD68C\uC6D0\uC73C\uB85C \uB85C\uADF8\uC778\uC774 \uBD88\uAC00\uD569\uB2C8\uB2E4.",
      confirmLabel: "확인",
      onConfirm: function () {
        var _onConfirm = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return synchronizeOpenId({
                  id: id,
                  password: password
                });
              case 3:
                movePage();
                _context.next = 9;
                break;
              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                catchError(_context.t0);
              case 9:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 6]]);
        }));
        function onConfirm() {
          return _onConfirm.apply(this, arguments);
        }
        return onConfirm;
      }(),
      cancelLabel: "취소",
      onCancel: function onCancel() {
        return null;
      }
    });
  };
  var handleKakaosyncSignUpMemberId = function handleKakaosyncSignUpMemberId(_ref2) {
    var value = _ref2.currentTarget.value;
    updateKakaosyncSignUpMemberInfo({
      id: value
    });
  };
  var handleKakaosyncSignUpMemberPassword = function handleKakaosyncSignUpMemberPassword(_ref3) {
    var value = _ref3.currentTarget.value;
    updateKakaosyncSignUpMemberInfo({
      password: value
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "sign-up-kakaosync"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sign-up-kakaosync__sub-title"
  }, "\uC774\uBBF8 \uAC00\uC785\uB41C \uD68C\uC6D0 \uC815\uBCF4\uAC00 \uC788\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    className: "sign-up-kakaosync__sign-up-info"
  }, /*#__PURE__*/React.createElement("span", null, openIdInfo.ordinaryMemberResponse.email), /*#__PURE__*/React.createElement("span", null, "\uD68C\uC6D0\uAC00\uC785\uC77C : ".concat(openIdInfo.ordinaryMemberResponse.signUpDateTime))), /*#__PURE__*/React.createElement("div", {
    className: "sign-up-kakaosync__conversion-section"
  }, /*#__PURE__*/React.createElement("p", null, "\uD574\uB2F9 \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778\uD558\uC2DC\uBA74 \uCE74\uCE74\uC624 \uACC4\uC815\uC73C\uB85C \uC804\uD658\uB429\uB2C8\uB2E4. ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "\uCE74\uCE74\uC624 \uACC4\uC815\uC73C\uB85C \uC804\uD658\uD558\uC2E0 \uC774\uD6C4"), "\uC5D0\uB294", /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("strong", null, "\uAE30\uC874 \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778\uC774 \uBD88\uAC00"), "\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    className: "sign-up-kakaosync__input-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "id",
    placeholder: "\uC544\uC774\uB514",
    onChange: handleKakaosyncSignUpMemberId,
    value: id,
    valid: "NO_SPACE"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sign-up-kakaosync__input-wrap"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "password",
    type: "password",
    placeholder: "\uBE44\uBC00\uBC88\uD638",
    onChange: handleKakaosyncSignUpMemberPassword,
    value: password,
    valid: "NO_SPACE"
  })), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "\uAC04\uD3B8\uB85C\uADF8\uC778\uC73C\uB85C \uC804\uD658\uD558\uAE30",
    onClick: handleIdConversion
  })), /*#__PURE__*/React.createElement("div", {
    className: "sign-up-kakaosync__sign-up-section"
  }, /*#__PURE__*/React.createElement("p", null, "\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uB77C\uBA74 \uC6D0\uD074\uB9AD\uC73C\uB85C \uAC00\uC785\uD558\uC138\uC694."), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "\uCE74\uCE74\uC624 \uACC4\uC815\uC73C\uB85C \uC2E0\uADDC \uAC00\uC785\uD558\uAE30",
    onClick: handleKakaosyncSignUp
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpenIdSignUpKakaosync);
OpenIdSignUpKakaosync.propTypes = {
  orderSheetNo: prop_types__WEBPACK_IMPORTED_MODULE_8__.string,
  previousPath: prop_types__WEBPACK_IMPORTED_MODULE_8__.string,
  nextPath: prop_types__WEBPACK_IMPORTED_MODULE_8__.string
};

/***/ }),

/***/ "./src/pages/OpenIdCallback/index.js":
/*!*******************************************!*\
  !*** ./src/pages/OpenIdCallback/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OpenIdCallback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OpenIdCallback */ "./src/pages/OpenIdCallback/OpenIdCallback.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_OpenIdCallback__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);
//# sourceMappingURL=src_pages_OpenIdCallback_index_js.ab5401714eede857c8f0.bundle.js.map