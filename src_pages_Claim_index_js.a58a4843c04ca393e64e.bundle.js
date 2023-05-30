"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_pages_Claim_index_js"],{

/***/ "./node_modules/@shopby/react-components/dist/esm/claim/ClaimProvider/ClaimProvider.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/claim/ClaimProvider/ClaimProvider.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useClaimActionContext": () => (/* binding */ useClaimActionContext),
/* harmony export */   "useClaimStateContext": () => (/* binding */ useClaimStateContext)
/* harmony export */ });
/* unused harmony export DEFAULT_CLAIM_PROVIDER_STATE */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/omit.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/merge.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/cloneDeep.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./node_modules/@shopby/react-components/dist/esm/utils/provider.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},__assign.apply(this,arguments)},__read=undefined&&undefined.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var a,n,o=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(a=o.next()).done;)i.push(a.value)}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return i};var ClaimActionContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),ClaimStateContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),_a=_shopby_shared__WEBPACK_IMPORTED_MODULE_2__.claimHelper.claim,Helper=_a.Helper,QUERY_KEY=_a.QUERY_KEY,MUTATION_KEY=_a.MUTATION_KEY;var DEFAULT_CLAIM_PROVIDER_STATE={claimInfo:null,allClaimableOptions:[],claimSelectStatus:{},returnWay:"SELLER_COLLECT",claimReason:"",claimReasonDetail:"",returnAddress:{addressNo:0,addressName:"",receiverAddress:"",receiverName:"",countryCd:"KR",receiverZipCd:"",receiverDetailAddress:"",deliveryMemo:"",receiverContact1:{carrierNumber:"",firstSerial:"",secondSerial:""},receiverContact2:{carrierNumber:"",firstSerial:"",secondSerial:""},receiverJibunAddress:"",customsIdNumber:""},buyerReturnInfo:{deliveryCompany:"",invoiceNo:""},accountForRefund:{bank:"",bankAccount:"",bankDepositorName:""},isAccountFormNecessary:!1,isCollectionInfoFormNecessary:!1};var ClaimProvider=function(e){var t=e.claimType,r=e.children,a=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_CLAIM_PROVIDER_STATE.claimInfo),2),n=a[0],o=a[1],i=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_CLAIM_PROVIDER_STATE.allClaimableOptions),2),c=i[0],u=i[1],s=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_CLAIM_PROVIDER_STATE.claimSelectStatus),2),l=s[0],_=s[1],d=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return Object.values(l).reduce((function(e,t){return t.isChecked?e+1:e}),0)}),[l]),E=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_CLAIM_PROVIDER_STATE.returnWay),2),A=E[0],C=E[1],m=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_CLAIM_PROVIDER_STATE.claimReason),2),R=m[0],T=m[1],I=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_CLAIM_PROVIDER_STATE.claimReasonDetail),2),O=I[0],f=I[1],p=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_CLAIM_PROVIDER_STATE.returnAddress),2),v=p[0],S=p[1],N=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_CLAIM_PROVIDER_STATE.buyerReturnInfo),2),y=N[0],D=N[1],L=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_CLAIM_PROVIDER_STATE.accountForRefund),2),U=L[0],M=L[1],Y=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_CLAIM_PROVIDER_STATE.isAccountFormNecessary),2),b=Y[0],x=Y[1],F=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_CLAIM_PROVIDER_STATE.isCollectionInfoFormNecessary),2),P=F[0],h=F[1],k=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_2__.executeHelper)(new Helper)}),[]),g=k.executeQuery,K=k.executeMutation,V=K(MUTATION_KEY.FETCH_CLAIM_INFO_BY_ORDER_OPTION_NO).mutate,H=K(MUTATION_KEY.CHANGE_CLAIM_AMOUNT).mutate,Q=K(MUTATION_KEY.TOGGLE_ONE_ORDER_OPTION).mutate,j=K(MUTATION_KEY.CANCEL_ORDER).mutate,B=K(MUTATION_KEY.CANCEL_ORDER_OPTION_NOS).mutate,w=K(MUTATION_KEY.RETURN_ORDER_OPTION_NOS).mutate,W=K(MUTATION_KEY.EXCHANGE_ONE_ORDER_OPTION).mutate,G=K(MUTATION_KEY.WITHDRAW_CLAIM_BY_ORDER_OPTION_NO).mutate,X=function(){g(QUERY_KEY.QUERY_CLAIM_SELECT_STATUS,{onSuccess:function(e){var t=e.data;_(null!=t?t:{})}})},J=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((0,_utils__WEBPACK_IMPORTED_MODULE_3__.makeStateUpdater)(S),[S]),Z=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((0,_utils__WEBPACK_IMPORTED_MODULE_3__.makeStateUpdater)(M),[M]),q=function(e){var r,a={claimReasonDetail:O,bankAccountInfo:b?U:void 0,productCnt:d,claimReasonType:R,returnWayType:P?A:void 0,deliveryCompanyType:"BUYER_DIRECT_RETURN"===A&&y.deliveryCompany||void 0,claimImageUrls:[],returnAddress:"SELLER_COLLECT"===A?__assign(__assign({},v),{receiverContact1:Object.values(v.receiverContact1).filter(Boolean).join("-"),receiverContact2:Object.values(v.receiverContact2).filter(Boolean).join("-")}):void 0,invoiceNo:"BUYER_DIRECT_RETURN"===A?y.invoiceNo:void 0,saveBankAccountInfo:null!==(r=null==e?void 0:e.saveBankAccountInfo)&&void 0!==r&&r};if("CANCEL"===t){var n=(0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(a,["returnWayType","deliveryCompanyType","claimImageUrls","returnAddress","invoiceNo"]);return B({payload:n})}return"EXCHANGE"===t?W({payload:a}):w({payload:a})},z=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(e){return j({payload:{orderNo:e,claimReasonType:"OTHERS_BUYER",claimReasonDetail:""}})}),[]),$=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return{fetchClaimInfo:function(e){return V({payload:{orderOptionNo:e,claimType:t},onSuccess:function(){g(QUERY_KEY.QUERY_CLAIM_INFO,{onSuccess:function(e){var t,r,a=e.data;if(o(a),null==a?void 0:a.returnAddress){var n=a.returnAddress,i=n.receiverContact1,c=n.receiverContact2;J(__assign(__assign({},a.returnAddress),{receiverContact1:(0,lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"])((0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(DEFAULT_CLAIM_PROVIDER_STATE.returnAddress.receiverContact1),null!==(t=(0,_shopby_shared__WEBPACK_IMPORTED_MODULE_2__.parsePhoneNumber)(i))&&void 0!==t?t:{}),receiverContact2:(0,lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"])((0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(DEFAULT_CLAIM_PROVIDER_STATE.returnAddress.receiverContact2),null!==(r=(0,_shopby_shared__WEBPACK_IMPORTED_MODULE_2__.parsePhoneNumber)(c))&&void 0!==r?r:{})}))}if(null==a?void 0:a.refundAccount){var u=a.refundAccount,s=u.bank,l=u.bankAccount,_=u.bankDepositorName;Z({bank:null!=s?s:"",bankAccount:null!=l?l:"",bankDepositorName:null!=_?_:""})}}}),g(QUERY_KEY.QUERY_ALL_CLAIMABLE_OPTIONS,{onSuccess:function(e){var t=e.data;u(t)}}),g(QUERY_KEY.QUERY_IS_COLLECTION_INFO_NECESSARY,{onSuccess:function(e){var t=e.data;h(t)}}),g(QUERY_KEY.QUERY_IS_ACCOUNT_FOR_REFUND_NECESSARY,{onSuccess:function(e){var t=e.data;x(t)}}),X()}})},changeClaimAmount:function(e){return H({payload:e,onSuccess:function(){X()}})},toggleOneOrderOption:function(e){return Q({payload:e,onSuccess:function(){X()}})},updateReturnWay:function(e){C(e)},updateClaimReason:function(e){T(e)},updateClaimReasonDetail:function(e){f(e)},updateReturnAddress:J,updateBuyerReturnInfo:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.makeStateUpdater)(D),updateAccountForRefund:Z,claim:q,cancelOrder:z,withdrawClaimByOrderOptionNo:function(e){return G({payload:{orderOptionNo:e}})}}}),[q]);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ClaimActionContext.Provider,__assign({value:$},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ClaimStateContext.Provider,__assign({value:{claimInfo:n,claimSelectStatus:l,allClaimableOptions:c,checkedOptionAmount:d,returnWay:A,claimReason:R,claimReasonDetail:O,returnAddress:v,buyerReturnInfo:y,accountForRefund:U,isAccountFormNecessary:b,isCollectionInfoFormNecessary:P}},{children:r}))}))};var useClaimActionContext=function(){var e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ClaimActionContext);if(!e)throw new Error("INVALID_ClaimActionContext");return e};var useClaimStateContext=function(){var e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ClaimStateContext);if(!e)throw new Error("INVALID_ClaimStateContext");return e};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClaimProvider);

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/common/QuantityChanger/QuantityChanger.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/common/QuantityChanger/QuantityChanger.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/TextField */ "./node_modules/@shopby/react-components/dist/esm/common/TextField/TextField.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(n){for(var a,t=1,e=arguments.length;t<e;t++)for(var i in a=arguments[t])Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i]);return n},__assign.apply(this,arguments)},__read=undefined&&undefined.__read||function(n,a){var t="function"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var e,i,r=t.call(n),l=[];try{for(;(void 0===a||a-- >0)&&!(e=r.next()).done;)l.push(e.value)}catch(n){i={error:n}}finally{try{e&&!e.done&&(t=r.return)&&t.call(r)}finally{if(i)throw i.error}}return l};var filterQuantity=function(n){var a=n.value,t=n.max,e=void 0===t?1/0:t,i=n.min,r=void 0===i?-1/0:i;if(e<r)return console.error("설정된 max 값이 min 값보다 작습니다."),a;var l=a;return l>e&&(l=e),l<r&&(l=r),l},QuantityChanger=function(n){var a=n.value,t=n.onChange,e=n.initialValue,i=n.max,r=n.min,l=void 0===r?1:r,u=n.disabled,s=void 0!==u&&u,o=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(e?filterQuantity({value:e,max:i,min:l}):0),2),c=o[0],m=o[1],f=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return a?filterQuantity({value:a,max:i,min:l}):null}),[a]),_=function(n){if(null!==f){var a=filterQuantity({value:f+n,max:i,min:l});a!==f&&(null==t||t(a))}else{var e=filterQuantity({value:c+n,max:i,min:l});e!==c&&(null==t||t(e),m(e))}};return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",__assign({className:"quantity-changer"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",__assign({className:"quantity-changer__decrease-btn",onClick:function(){_(-1)},disabled:s},{children:"-"})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_TextField__WEBPACK_IMPORTED_MODULE_2__["default"],{className:"quantity-changer__input",value:null===f?c:f,valid:"NUMBER",onChange:function(n){var a=n.currentTarget,e=filterQuantity({value:Number(a.value),max:i,min:l});if(null===f)return null==t||t(e),void m(e);null==t||t(e)},disabled:s}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",__assign({className:"quantity-changer__increase-btn",onClick:function(){_(1)},disabled:s},{children:"+"}))]}))};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuantityChanger);

/***/ }),

/***/ "./node_modules/@shopby/react-components/dist/esm/common/Radio/Radio.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/common/Radio/Radio.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon */ "./node_modules/@shopby/react-components/dist/esm/common/Icon/Icon.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(s){for(var e,a=1,r=arguments.length;a<r;a++)for(var t in e=arguments[a])Object.prototype.hasOwnProperty.call(e,t)&&(s[t]=e[t]);return s},__assign.apply(this,arguments)},__rest=undefined&&undefined.__rest||function(s,e){var a={};for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&e.indexOf(r)<0&&(a[r]=s[r]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(r=Object.getOwnPropertySymbols(s);t<r.length;t++)e.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(s,r[t])&&(a[r[t]]=s[r[t]])}return a};var Radio=function(s){var e=s.label,a=s.className,r=void 0===a?"":a,t=__rest(s,["label","className"]);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",__assign({className:"check-radio ".concat(r)},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",__assign({},t,{type:"radio"})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",__assign({className:"check-radio__ico"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__["default"],{name:"check-white"})})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",__assign({className:"check-radio__label"},{children:e}))]}))};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Radio);

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

/***/ "./src/components/OptionLabel/OptionLabel.jsx":
/*!****************************************************!*\
  !*** ./src/components/OptionLabel/OptionLabel.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var OptionLabel = function OptionLabel(_ref) {
  var optionName = _ref.optionName,
    optionValue = _ref.optionValue,
    optionInputs = _ref.optionInputs;
  var _getOptionLabels = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getOptionLabels)({
      optionName: optionName,
      optionValue: optionValue,
      optionInputs: optionInputs
    }),
    normalOptionLabels = _getOptionLabels.normalOptionLabels,
    textOptionLabels = _getOptionLabels.textOptionLabels;
  return /*#__PURE__*/React.createElement("div", {
    className: "option-label"
  }, /*#__PURE__*/React.createElement("div", {
    className: "option-label__normal-option"
  }, normalOptionLabels.map(function (label) {
    return /*#__PURE__*/React.createElement("span", {
      key: label
    }, label);
  })), /*#__PURE__*/React.createElement("div", null, textOptionLabels.map(function (label) {
    return /*#__PURE__*/React.createElement("p", {
      key: label
    }, label);
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OptionLabel);
OptionLabel.propTypes = {
  optionName: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  optionValue: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  optionInputs: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf)(prop_types__WEBPACK_IMPORTED_MODULE_1__.string)
};

/***/ }),

/***/ "./src/components/OptionLabel/index.js":
/*!*********************************************!*\
  !*** ./src/components/OptionLabel/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OptionLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptionLabel */ "./src/components/OptionLabel/OptionLabel.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_OptionLabel__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/OrderNoLabel/OrderNoLabel.jsx":
/*!******************************************************!*\
  !*** ./src/components/OrderNoLabel/OrderNoLabel.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var OrderNoLabel = function OrderNoLabel(_ref) {
  var dateLabel = _ref.dateLabel,
    orderNo = _ref.orderNo,
    children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "order-no-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "order-no-label__order-no-wrap"
  }, dateLabel, /*#__PURE__*/React.createElement("span", {
    className: "order-no-label__no"
  }, orderNo)), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderNoLabel);
OrderNoLabel.propTypes = {
  dateLabel: prop_types__WEBPACK_IMPORTED_MODULE_0__.string,
  orderNo: prop_types__WEBPACK_IMPORTED_MODULE_0__.string,
  children: (0,prop_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([prop_types__WEBPACK_IMPORTED_MODULE_0__.node, prop_types__WEBPACK_IMPORTED_MODULE_0__.element])
};

/***/ }),

/***/ "./src/components/OrderNoLabel/index.js":
/*!**********************************************!*\
  !*** ./src/components/OrderNoLabel/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OrderNoLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderNoLabel */ "./src/components/OrderNoLabel/OrderNoLabel.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_OrderNoLabel__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/ProductThumbItem/ProductThumbItem.jsx":
/*!**************************************************************!*\
  !*** ./src/components/ProductThumbItem/ProductThumbItem.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Thumbs/ThumbItem.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/QuantityChanger/QuantityChanger.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _OptionLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OptionLabel */ "./src/components/OptionLabel/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




var ProductThumbItem = function ProductThumbItem(_ref) {
  var _ref$productNo = _ref.productNo,
    productNo = _ref$productNo === void 0 ? 0 : _ref$productNo,
    _ref$imageUrl = _ref.imageUrl,
    imageUrl = _ref$imageUrl === void 0 ? '' : _ref$imageUrl,
    _ref$brandName = _ref.brandName,
    brandName = _ref$brandName === void 0 ? '' : _ref$brandName,
    _ref$productName = _ref.productName,
    productName = _ref$productName === void 0 ? '' : _ref$productName,
    orderCnt = _ref.orderCnt,
    buyAmt = _ref.buyAmt,
    _ref$optionName = _ref.optionName,
    optionName = _ref$optionName === void 0 ? '' : _ref$optionName,
    _ref$optionValue = _ref.optionValue,
    optionValue = _ref$optionValue === void 0 ? '' : _ref$optionValue,
    _ref$optionInputs = _ref.optionInputs,
    optionInputs = _ref$optionInputs === void 0 ? [] : _ref$optionInputs,
    usesQuantityChanger = _ref.usesQuantityChanger,
    quantityChangerValue = _ref.quantityChangerValue,
    onQuantityChange = _ref.onQuantityChange,
    _ref$frontDisplayYn = _ref.frontDisplayYn,
    frontDisplayYn = _ref$frontDisplayYn === void 0 ? 'Y' : _ref$frontDisplayYn,
    _ref$OptionComponent = _ref.OptionComponent,
    OptionComponent = _ref$OptionComponent === void 0 ? null : _ref$OptionComponent,
    _ref$AmountComponent = _ref.AmountComponent,
    AmountComponent = _ref$AmountComponent === void 0 ? null : _ref$AmountComponent,
    _ref$isRedirectingDis = _ref.isRedirectingDisabled,
    isRedirectingDisabled = _ref$isRedirectingDis === void 0 ? false : _ref$isRedirectingDis;
  if (!frontDisplayYn) return /*#__PURE__*/React.createElement(React.Fragment, null);
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: isRedirectingDisabled ? '#' : "/product-detail?productNo=".concat(productNo),
    src: imageUrl,
    className: "product-thumb-item",
    alt: productName
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], {
    shows: brandName,
    TruthyComponent: /*#__PURE__*/React.createElement("p", {
      className: "product-thumb-item__brand"
    }, brandName)
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "product-thumb-item__name"
  }, productName), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], {
    shows: optionName || optionInputs.length > 0,
    TruthyComponent: /*#__PURE__*/React.createElement(_OptionLabel__WEBPACK_IMPORTED_MODULE_1__["default"], {
      optionName: optionName,
      optionValue: optionValue,
      optionInputs: optionInputs
    })
  }), OptionComponent && /*#__PURE__*/React.createElement(OptionComponent, null)), /*#__PURE__*/React.createElement("div", {
    className: "product-thumb-item__amount-wrap"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "product-thumb-item__amount"
  }, orderCnt >= 0 && /*#__PURE__*/React.createElement("li", null, orderCnt, "\uAC1C "), buyAmt >= 0 && /*#__PURE__*/React.createElement("li", null, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.convertToKoreanCurrency)(buyAmt), "\uC6D0")), AmountComponent && /*#__PURE__*/React.createElement(AmountComponent, null), usesQuantityChanger && /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: quantityChangerValue,
    onChange: onQuantityChange
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductThumbItem);
ProductThumbItem.propTypes = {
  frontDisplayYn: prop_types__WEBPACK_IMPORTED_MODULE_5__.bool,
  brandName: prop_types__WEBPACK_IMPORTED_MODULE_5__.string,
  productName: prop_types__WEBPACK_IMPORTED_MODULE_5__.string.isRequired,
  orderCnt: prop_types__WEBPACK_IMPORTED_MODULE_5__.number,
  buyAmt: prop_types__WEBPACK_IMPORTED_MODULE_5__.number,
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_5__.string,
  optionName: prop_types__WEBPACK_IMPORTED_MODULE_5__.string,
  optionValue: prop_types__WEBPACK_IMPORTED_MODULE_5__.string,
  optionInputs: (0,prop_types__WEBPACK_IMPORTED_MODULE_5__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_5__.shape)({
    inputLabel: prop_types__WEBPACK_IMPORTED_MODULE_5__.string,
    inputValue: prop_types__WEBPACK_IMPORTED_MODULE_5__.string
  })),
  productNo: prop_types__WEBPACK_IMPORTED_MODULE_5__.number,
  OptionComponent: prop_types__WEBPACK_IMPORTED_MODULE_5__.func,
  AmountComponent: prop_types__WEBPACK_IMPORTED_MODULE_5__.func,
  usesQuantityChanger: prop_types__WEBPACK_IMPORTED_MODULE_5__.bool,
  quantityChangerValue: prop_types__WEBPACK_IMPORTED_MODULE_5__.number,
  onQuantityChange: prop_types__WEBPACK_IMPORTED_MODULE_5__.func,
  isRedirectingDisabled: prop_types__WEBPACK_IMPORTED_MODULE_5__.bool
};

/***/ }),

/***/ "./src/components/ProductThumbItem/index.js":
/*!**************************************************!*\
  !*** ./src/components/ProductThumbItem/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductThumbItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductThumbItem */ "./src/components/ProductThumbItem/ProductThumbItem.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ProductThumbItem__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/pages/Claim/Claim.jsx":
/*!***********************************!*\
  !*** ./src/pages/Claim/Claim.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/pick.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/claim/ClaimProvider/ClaimProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/modal/ModalProvider.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _components_OrderNoLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/OrderNoLabel */ "./src/components/OrderNoLabel/index.js");
/* harmony import */ var _hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useLayoutChanger */ "./src/hooks/useLayoutChanger.js");
/* harmony import */ var _ClaimAccountForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ClaimAccountForm */ "./src/pages/Claim/ClaimAccountForm.jsx");
/* harmony import */ var _ClaimButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ClaimButtons */ "./src/pages/Claim/ClaimButtons.jsx");
/* harmony import */ var _ClaimProductTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ClaimProductTable */ "./src/pages/Claim/ClaimProductTable.jsx");
/* harmony import */ var _ClaimReasonForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ClaimReasonForm */ "./src/pages/Claim/ClaimReasonForm.jsx");
/* harmony import */ var _CollectionComment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CollectionComment */ "./src/pages/Claim/CollectionComment.jsx");
/* harmony import */ var _CollectionInfoForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CollectionInfoForm */ "./src/pages/Claim/CollectionInfoForm.jsx");
/* harmony import */ var _useValidateClaimFormMaker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useValidateClaimFormMaker */ "./src/pages/Claim/useValidateClaimFormMaker.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var ClaimContent = function ClaimContent(_ref) {
  var claimType = _ref.claimType;
  var _useClaimStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_11__.useClaimStateContext)(),
    claimInfo = _useClaimStateContext.claimInfo,
    allClaimableOptions = _useClaimStateContext.allClaimableOptions,
    checkedOptionAmount = _useClaimStateContext.checkedOptionAmount,
    isAccountFormNecessary = _useClaimStateContext.isAccountFormNecessary,
    isCollectionInfoFormNecessary = _useClaimStateContext.isCollectionInfoFormNecessary,
    returnWay = _useClaimStateContext.returnWay;
  var _useClaimActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_11__.useClaimActionContext)(),
    fetchClaimInfo = _useClaimActionContex.fetchClaimInfo;
  var _useClaimActionContex2 = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_11__.useClaimActionContext)(),
    toggleOneOrderOption = _useClaimActionContex2.toggleOneOrderOption;
  var _useModalActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_12__.useModalActionContext)(),
    openAlert = _useModalActionContex.openAlert;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useParams)(),
    orderOptionNo = _useParams.orderOptionNo;
  var refs = {
    claimReasonSelectRef: (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),
    claimReasonDetailTextareaRef: (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),
    receiverNameInputRef: (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),
    searchZipCodeBtnRef: (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),
    mobilePhoneNumberInputRef: (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),
    phoneNumberInputRef: (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),
    bankSelectRef: (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),
    bankAccountInputRef: (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),
    bankDepositorNameInputRef: (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)()
  };
  var _useValidateClaimForm = (0,_useValidateClaimFormMaker__WEBPACK_IMPORTED_MODULE_10__["default"])({
      refs: refs,
      activeStatus: {
        receiverName: isCollectionInfoFormNecessary && returnWay === 'SELLER_COLLECT',
        address: isCollectionInfoFormNecessary && returnWay === 'SELLER_COLLECT',
        mobilePhoneNumber: isCollectionInfoFormNecessary && returnWay === 'SELLER_COLLECT',
        phoneNumber: false,
        accountForRefund: isAccountFormNecessary
      }
    }),
    validate = _useValidateClaimForm.validate;
  var claimTypeLabel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var _CLAIM_TYPE_MAP$claim;
    return (_CLAIM_TYPE_MAP$claim = _shopby_shared__WEBPACK_IMPORTED_MODULE_1__.CLAIM_TYPE_MAP[claimType]) !== null && _CLAIM_TYPE_MAP$claim !== void 0 ? _CLAIM_TYPE_MAP$claim : '';
  }, [claimType]);
  var dateLabel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var _claimInfo$originalOp;
    return (_claimInfo$originalOp = claimInfo === null || claimInfo === void 0 ? void 0 : claimInfo.originalOption.orderStatusDate.registerYmdt.slice(0, 10)) !== null && _claimInfo$originalOp !== void 0 ? _claimInfo$originalOp : '';
  }, [claimInfo]);
  var orderNo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var _claimInfo$originalOp2;
    return (_claimInfo$originalOp2 = claimInfo === null || claimInfo === void 0 ? void 0 : claimInfo.originalOption.orderNo) !== null && _claimInfo$originalOp2 !== void 0 ? _claimInfo$originalOp2 : '';
  }, [claimInfo]);
  var isAllChecked = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return checkedOptionAmount === allClaimableOptions.length;
  }, [checkedOptionAmount, allClaimableOptions]);
  (0,_hooks_useLayoutChanger__WEBPACK_IMPORTED_MODULE_3__["default"])({
    title: "".concat(claimTypeLabel, " \uC2E0\uCCAD"),
    hasCartBtnOnHeader: true,
    hasBackBtnOnHeader: true
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!orderOptionNo || !Object.keys(_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.CLAIM_TYPE_MAP).includes(claimType)) {
      openAlert({
        message: '올바른 접근 경로가 아닙니다. 메인으로 돌아갑니다.',
        onClose: function onClose() {
          location.replace('/');
        }
      });
      return;
    }
    fetchClaimInfo(orderOptionNo);
  }, [orderOptionNo]);
  var handleToggleAllCheckboxBtnClick = function handleToggleAllCheckboxBtnClick() {
    allClaimableOptions.forEach(function (_ref2) {
      var orderOptionNo = _ref2.orderOptionNo;
      return toggleOneOrderOption({
        orderOptionNo: orderOptionNo.toString(),
        isChecked: !isAllChecked
      });
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "claim"
  }, /*#__PURE__*/React.createElement(_components_OrderNoLabel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dateLabel: dateLabel,
    orderNo: orderNo
  }, /*#__PURE__*/React.createElement("button", {
    className: "claim__toggle-all-btn",
    onClick: handleToggleAllCheckboxBtnClick
  }, isAllChecked ? '선택 해제' : '전체 선택')), /*#__PURE__*/React.createElement(_ClaimProductTable__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/React.createElement("p", {
    className: "claim__amount-info-label"
  }, isAllChecked ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "bold"
  }, "\uBAA8\uB4E0"), "\xA0\uC0C1\uD488\uC744 \uC120\uD0DD\uD558\uC168\uC2B5\uB2C8\uB2E4.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "bold"
  }, checkedOptionAmount, "\uAC1C"), "\uC758 \uC0C1\uD488\uC744 \uC120\uD0DD\uD558\uC168\uC2B5\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement(_ClaimReasonForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    refs: (0,lodash_es__WEBPACK_IMPORTED_MODULE_14__["default"])(refs, ['claimReasonSelectRef', 'claimReasonDetailTextareaRef'])
  }), isAccountFormNecessary && /*#__PURE__*/React.createElement(_ClaimAccountForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    refs: (0,lodash_es__WEBPACK_IMPORTED_MODULE_14__["default"])(refs, ['bankSelectRef', 'bankAccountInputRef', 'bankDepositorNameInputRef'])
  }), isCollectionInfoFormNecessary && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_CollectionInfoForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
    refs: (0,lodash_es__WEBPACK_IMPORTED_MODULE_14__["default"])(refs, ['receiverNameInputRef', 'searchZipCodeBtnRef', 'mobilePhoneNumberInputRef', 'phoneNumberInputRef'])
  }), /*#__PURE__*/React.createElement(_CollectionComment__WEBPACK_IMPORTED_MODULE_8__["default"], {
    returnWay: returnWay,
    returnWarehouseLabel: claimInfo.returnWarehouse.summary
  })), /*#__PURE__*/React.createElement(_ClaimButtons__WEBPACK_IMPORTED_MODULE_5__["default"], {
    claimTypeLabel: claimTypeLabel,
    validate: validate,
    orderNo: claimInfo === null || claimInfo === void 0 ? void 0 : claimInfo.originalOption.orderNo
  }));
};
ClaimContent.propTypes = {
  claimType: (0,prop_types__WEBPACK_IMPORTED_MODULE_15__.oneOf)(['EXCHANGE', 'CANCEL', 'RETURN'])
};
var Claim = function Claim() {
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  var claimType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return searchParams.get('claimType');
  }, [searchParams]);
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_11__["default"], {
    claimType: claimType
  }, /*#__PURE__*/React.createElement(ClaimContent, {
    claimType: claimType
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Claim);

/***/ }),

/***/ "./src/pages/Claim/ClaimAccountForm.jsx":
/*!**********************************************!*\
  !*** ./src/pages/Claim/ClaimAccountForm.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/claim/ClaimProvider/ClaimProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/SelectBox/SelectBox.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/TextField/TextField.js");
/* harmony import */ var _constants_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/form */ "./src/constants/form.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var ClaimAccountForm = function ClaimAccountForm(_ref) {
  var refs = _ref.refs;
  var _ref2 = refs !== null && refs !== void 0 ? refs : {},
    bankSelectRef = _ref2.bankSelectRef,
    bankAccountInputRef = _ref2.bankAccountInputRef,
    bankDepositorNameInputRef = _ref2.bankDepositorNameInputRef;
  var _useClaimStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__.useClaimStateContext)(),
    _useClaimStateContext2 = _useClaimStateContext.accountForRefund,
    bank = _useClaimStateContext2.bank,
    bankAccount = _useClaimStateContext2.bankAccount,
    bankDepositorName = _useClaimStateContext2.bankDepositorName;
  var _useClaimActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__.useClaimActionContext)(),
    updateAccountForRefund = _useClaimActionContex.updateAccountForRefund;
  var handleBankSelect = function handleBankSelect(_ref3) {
    var bank = _ref3.currentTarget.value;
    updateAccountForRefund({
      bank: bank
    });
  };
  var handleBankAccountTextFieldChange = function handleBankAccountTextFieldChange(_ref4) {
    var bankAccount = _ref4.currentTarget.value;
    updateAccountForRefund({
      bankAccount: bankAccount
    });
  };
  var handleBankDepositorNameTextFieldChange = function handleBankDepositorNameTextFieldChange(_ref5) {
    var bankDepositorName = _ref5.currentTarget.value;
    updateAccountForRefund({
      bankDepositorName: bankDepositorName
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "claim__section claim__account"
  }, /*#__PURE__*/React.createElement("p", {
    className: "claim__title"
  }, "\uC785\uAE08 \uBC1B\uC73C\uC2E4 \uACC4\uC88C"), /*#__PURE__*/React.createElement("ul", {
    className: "claim__account-inputs"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "bankSelect"
  }, "\uC740\uD589"), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ref: bankSelectRef,
    id: "bankSelect",
    options: _constants_form__WEBPACK_IMPORTED_MODULE_0__.BANK_OPTIONS,
    className: "claim__select-box",
    hasEmptyOption: true,
    emptyOptionLabel: "\uC740\uD589\uC0AC\uB97C \uC120\uD0DD\uD558\uC138\uC694.",
    value: bank,
    onSelect: handleBankSelect
  })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "bankAccountInput"
  }, "\uACC4\uC88C\uBC88\uD638"), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "bankAccountInput",
    ref: bankAccountInputRef,
    placeholder: "'-' \uC5C6\uC774 \uC785\uB825\uD558\uC138\uC694.",
    value: bankAccount,
    onChange: handleBankAccountTextFieldChange,
    valid: 'NUMBER',
    maxLength: _constants_form__WEBPACK_IMPORTED_MODULE_0__.INVOICE_NO_MAX_LENGTH
  })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "bankDepositorNameTextField"
  }, "\uC608\uAE08\uC8FC"), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "bankDepositorNameTextField",
    ref: bankDepositorNameInputRef,
    placeholder: "\uC608\uAE08\uC8FC\uB97C \uC785\uB825\uD558\uC138\uC694.",
    value: bankDepositorName,
    onChange: handleBankDepositorNameTextFieldChange,
    maxLength: _constants_form__WEBPACK_IMPORTED_MODULE_0__.NAME_INPUT_MAX_LENGTH
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClaimAccountForm);
ClaimAccountForm.propTypes = {
  refs: (0,prop_types__WEBPACK_IMPORTED_MODULE_4__.shape)({
    bankSelectRef: prop_types__WEBPACK_IMPORTED_MODULE_4__.object,
    bankAccountInputRef: prop_types__WEBPACK_IMPORTED_MODULE_4__.object,
    bankDepositorNameInputRef: prop_types__WEBPACK_IMPORTED_MODULE_4__.object
  })
};

/***/ }),

/***/ "./src/pages/Claim/ClaimButtons.jsx":
/*!******************************************!*\
  !*** ./src/pages/Claim/ClaimButtons.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/claim/ClaimProvider/ClaimProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/modal/ModalProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/ErrorBoundary */ "./src/components/ErrorBoundary/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var ClaimButtons = function ClaimButtons(_ref) {
  var claimTypeLabel = _ref.claimTypeLabel,
    validate = _ref.validate,
    orderNo = _ref.orderNo;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var _useClaimActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__.useClaimActionContext)(),
    claim = _useClaimActionContex.claim;
  var _useModalActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useModalActionContext)(),
    openAlert = _useModalActionContex.openAlert;
  var _useErrorBoundaryActi = (0,_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_0__.useErrorBoundaryActionContext)(),
    catchError = _useErrorBoundaryActi.catchError;
  var handleClaimBtnClick = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (validate !== null && validate !== void 0 && validate()) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return");
          case 3:
            _context.next = 5;
            return claim();
          case 5:
            openAlert({
              message: "".concat(claimTypeLabel, " \uC2E0\uCCAD\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),
              onClose: function onClose() {
                navigate("/orders/".concat(orderNo));
              }
            });
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            catchError(_context.t0);
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8]]);
    }));
    return function handleClaimBtnClick() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleCancelBtnClick = function handleCancelBtnClick() {
    navigate(-1);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "claim__section claim__section--no-padding claim__btns"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "claim__btn",
    label: "\uCDE8\uC18C\uD558\uAE30",
    onClick: handleCancelBtnClick
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "claim__btn claim__btn--claim",
    label: "".concat(claimTypeLabel, " \uC2E0\uCCAD"),
    onClick: handleClaimBtnClick
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClaimButtons);
ClaimButtons.propTypes = {
  claimTypeLabel: prop_types__WEBPACK_IMPORTED_MODULE_5__.string.isRequired,
  validate: prop_types__WEBPACK_IMPORTED_MODULE_5__.func,
  orderNo: prop_types__WEBPACK_IMPORTED_MODULE_5__.string.isRequired
};

/***/ }),

/***/ "./src/pages/Claim/ClaimProductTable.jsx":
/*!***********************************************!*\
  !*** ./src/pages/Claim/ClaimProductTable.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/claim/ClaimProvider/ClaimProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Checkbox/Checkbox.js");
/* harmony import */ var _components_ProductThumbItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/ProductThumbItem */ "./src/components/ProductThumbItem/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var ClaimProductTable = function ClaimProductTable() {
  var _useClaimStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__.useClaimStateContext)(),
    allClaimableOptions = _useClaimStateContext.allClaimableOptions,
    claimSelectStatus = _useClaimStateContext.claimSelectStatus;
  var _useClaimActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__.useClaimActionContext)(),
    toggleOneOrderOption = _useClaimActionContex.toggleOneOrderOption,
    changeClaimAmount = _useClaimActionContex.changeClaimAmount;
  var handleClaimAmountChange = function handleClaimAmountChange(value, orderOptionNo) {
    changeClaimAmount(_defineProperty({}, orderOptionNo, value));
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "claim__section claim__products"
  }, allClaimableOptions.map(function (_ref) {
    var _claimSelectStatus$or, _claimSelectStatus$or2;
    var brandName = _ref.brandName,
      productName = _ref.productName,
      optionName = _ref.optionName,
      optionValue = _ref.optionValue,
      price = _ref.price,
      imageUrl = _ref.imageUrl,
      orderOptionNo = _ref.orderOptionNo,
      productNo = _ref.productNo;
    return /*#__PURE__*/React.createElement("div", {
      key: orderOptionNo,
      className: "claim__product"
    }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isRounded: true,
      checked: (_claimSelectStatus$or = claimSelectStatus[orderOptionNo]) === null || _claimSelectStatus$or === void 0 ? void 0 : _claimSelectStatus$or.isChecked,
      onChange: function onChange() {
        return toggleOneOrderOption({
          orderOptionNo: orderOptionNo.toString()
        });
      }
    }), /*#__PURE__*/React.createElement(_components_ProductThumbItem__WEBPACK_IMPORTED_MODULE_0__["default"], {
      imageUrl: imageUrl,
      brandName: brandName !== null && brandName !== void 0 ? brandName : '',
      productName: productName,
      productNo: productNo,
      optionName: optionName,
      optionValue: optionValue,
      buyAmt: price.buyAmt,
      usesQuantityChanger: true,
      quantityChangerValue: (_claimSelectStatus$or2 = claimSelectStatus[orderOptionNo]) === null || _claimSelectStatus$or2 === void 0 ? void 0 : _claimSelectStatus$or2.claimAmount,
      onQuantityChange: function onQuantityChange(quantity) {
        return handleClaimAmountChange(quantity, orderOptionNo);
      }
    }));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClaimProductTable);

/***/ }),

/***/ "./src/pages/Claim/ClaimReasonForm.jsx":
/*!*********************************************!*\
  !*** ./src/pages/Claim/ClaimReasonForm.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/claim/ClaimProvider/ClaimProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/SelectBox/SelectBox.js");
/* harmony import */ var _constants_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/form */ "./src/constants/form.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




var ClaimReasonForm = function ClaimReasonForm(_ref) {
  var refs = _ref.refs;
  var _ref2 = refs !== null && refs !== void 0 ? refs : {},
    claimReasonSelectRef = _ref2.claimReasonSelectRef,
    claimReasonDetailTextareaRef = _ref2.claimReasonDetailTextareaRef;
  var _useClaimStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__.useClaimStateContext)(),
    claimInfo = _useClaimStateContext.claimInfo,
    claimReason = _useClaimStateContext.claimReason,
    claimReasonDetail = _useClaimStateContext.claimReasonDetail;
  var _useClaimActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__.useClaimActionContext)(),
    updateClaimReason = _useClaimActionContex.updateClaimReason,
    updateClaimReasonDetail = _useClaimActionContex.updateClaimReasonDetail;
  var claimReasonOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var _claimInfo$claimReaso;
    return (_claimInfo$claimReaso = claimInfo === null || claimInfo === void 0 ? void 0 : claimInfo.claimReasonTypes.map(function (_ref3) {
      var value = _ref3.claimReasonType,
        label = _ref3.label;
      return {
        label: label,
        value: value
      };
    })) !== null && _claimInfo$claimReaso !== void 0 ? _claimInfo$claimReaso : [];
  }, [claimInfo === null || claimInfo === void 0 ? void 0 : claimInfo.claimReasonTypes]);
  var handleClaimReasonSelect = function handleClaimReasonSelect(_ref4) {
    var value = _ref4.currentTarget.value;
    updateClaimReason(value);
  };
  var handleClaimReasonDetailChange = function handleClaimReasonDetailChange(_ref5) {
    var value = _ref5.currentTarget.value;
    var isLengthOverflow = value.length > _constants_form__WEBPACK_IMPORTED_MODULE_1__.CLAIM_REASON_DETAIL_MAX_LENGTH;
    updateClaimReasonDetail(isLengthOverflow ? value.slice(0, _constants_form__WEBPACK_IMPORTED_MODULE_1__.CLAIM_REASON_DETAIL_MAX_LENGTH) : value);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "claim__section claim__reason"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: claimReasonSelectRef,
    className: "claim__select-box",
    options: claimReasonOptions,
    hasEmptyOption: true,
    emptyOptionLabel: "\uC0AC\uC720\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694",
    value: claimReason,
    onSelect: handleClaimReasonSelect
  }), /*#__PURE__*/React.createElement("p", {
    className: "claim__sub-title"
  }, "\uC0C1\uC138 \uC0AC\uC720"), /*#__PURE__*/React.createElement("textarea", {
    ref: claimReasonDetailTextareaRef,
    className: "claim__reason-detail",
    placeholder: "\uC0C1\uC138 \uC0AC\uC720\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694",
    value: claimReasonDetail,
    onChange: handleClaimReasonDetailChange
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClaimReasonForm);
ClaimReasonForm.propTypes = {
  refs: (0,prop_types__WEBPACK_IMPORTED_MODULE_4__.shape)({
    claimReasonSelectRef: prop_types__WEBPACK_IMPORTED_MODULE_4__.object,
    claimReasonDetailTextareaRef: prop_types__WEBPACK_IMPORTED_MODULE_4__.object
  })
};

/***/ }),

/***/ "./src/pages/Claim/CollectionComment.jsx":
/*!***********************************************!*\
  !*** ./src/pages/Claim/CollectionComment.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var CollectionComment = function CollectionComment(_ref) {
  var returnWay = _ref.returnWay,
    returnWarehouseLabel = _ref.returnWarehouseLabel;
  return /*#__PURE__*/React.createElement("div", {
    className: "claim__section claim__section--no-padding"
  }, /*#__PURE__*/React.createElement("p", {
    className: "claim__title"
  }, "\uBC18\uD488 \uC218\uAC70 \uC548\uB0B4"), /*#__PURE__*/React.createElement("ul", {
    className: "claim__comment"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCollectionComments)(returnWay, returnWarehouseLabel).map(function (comment) {
    return /*#__PURE__*/React.createElement("li", {
      key: comment
    }, comment);
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionComment);
CollectionComment.propTypes = {
  returnWay: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)(['BUYER_DIRECT_RETURN', 'SELLER_COLLECT']).isRequired,
  returnWarehouseLabel: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};

/***/ }),

/***/ "./src/pages/Claim/CollectionInfoForm.jsx":
/*!************************************************!*\
  !*** ./src/pages/Claim/CollectionInfoForm.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/claim/ClaimProvider/ClaimProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/admin/MallProvider/MallProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Radio/Radio.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/TextField/TextField.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/PhoneNumberInput/PhoneNumberInput.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/SelectBox/SelectBox.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _components_AddressForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AddressForm */ "./src/components/AddressForm/index.js");
/* harmony import */ var _constants_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/form */ "./src/constants/form.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






var CollectionInfoForm = function CollectionInfoForm(_ref) {
  var _claimInfo$originalOp;
  var refs = _ref.refs;
  var _ref2 = refs !== null && refs !== void 0 ? refs : {},
    receiverNameInputRef = _ref2.receiverNameInputRef,
    searchZipCodeBtnRef = _ref2.searchZipCodeBtnRef,
    mobilePhoneNumberInputRef = _ref2.mobilePhoneNumberInputRef,
    phoneNumberInputRef = _ref2.phoneNumberInputRef;
  var _useClaimStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useClaimStateContext)(),
    claimInfo = _useClaimStateContext.claimInfo,
    returnWay = _useClaimStateContext.returnWay,
    _useClaimStateContext2 = _useClaimStateContext.returnAddress,
    receiverName = _useClaimStateContext2.receiverName,
    receiverContact1 = _useClaimStateContext2.receiverContact1,
    receiverContact2 = _useClaimStateContext2.receiverContact2,
    receiverZipCd = _useClaimStateContext2.receiverZipCd,
    receiverAddress = _useClaimStateContext2.receiverAddress,
    receiverDetailAddress = _useClaimStateContext2.receiverDetailAddress,
    deliveryMemo = _useClaimStateContext2.deliveryMemo,
    _useClaimStateContext3 = _useClaimStateContext.buyerReturnInfo,
    deliveryCompany = _useClaimStateContext3.deliveryCompany,
    invoiceNo = _useClaimStateContext3.invoiceNo;
  var _useMallStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__.useMallStateContext)(),
    mallName = _useMallStateContext.mallName;
  var isMallShippingArea = ((_claimInfo$originalOp = claimInfo.originalOption) === null || _claimInfo$originalOp === void 0 ? void 0 : _claimInfo$originalOp.shippingAreaType) === 'MALL_SHIPPING_AREA';
  var _useClaimActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useClaimActionContext)(),
    updateReturnWay = _useClaimActionContex.updateReturnWay,
    updateReturnAddress = _useClaimActionContex.updateReturnAddress,
    updateBuyerReturnInfo = _useClaimActionContex.updateBuyerReturnInfo;
  var returnWarehouse = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var _claimInfo$returnWare;
    var _ref3 = (_claimInfo$returnWare = claimInfo === null || claimInfo === void 0 ? void 0 : claimInfo.returnWarehouse) !== null && _claimInfo$returnWare !== void 0 ? _claimInfo$returnWare : {},
      _ref3$receiverName = _ref3.receiverName,
      receiverName = _ref3$receiverName === void 0 ? '' : _ref3$receiverName,
      _ref3$contact = _ref3.contact,
      contact = _ref3$contact === void 0 ? '' : _ref3$contact,
      _ref3$summary = _ref3.summary,
      summary = _ref3$summary === void 0 ? '' : _ref3$summary;
    var dashedContact = contact ? Object.values((0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.parsePhoneNumber)(contact, {
      isWithDash: false
    })).join('-') : '';
    return {
      receiverName: receiverName,
      contact: dashedContact,
      summary: summary
    };
  }, [claimInfo]);
  var handleReceiverNameTextFieldChange = function handleReceiverNameTextFieldChange(_ref4) {
    var value = _ref4.currentTarget.value;
    updateReturnAddress({
      receiverName: value
    });
  };
  var handleAddressItemClick = function handleAddressItemClick(_ref5) {
    var zipCode = _ref5.zipCode,
      roadAddress = _ref5.roadAddress,
      jibunAddress = _ref5.jibunAddress;
    updateReturnAddress({
      receiverDetailAddress: ''
    });
    updateReturnAddress({
      receiverZipCd: zipCode,
      receiverAddress: roadAddress,
      receiverJibunAddress: jibunAddress
    });
  };
  var handleAddressDetailChange = function handleAddressDetailChange(_ref6) {
    var addressDetail = _ref6.addressDetail;
    updateReturnAddress({
      receiverDetailAddress: addressDetail
    });
  };
  var handleMobilePhoneNumberChange = function handleMobilePhoneNumberChange(_ref7, type) {
    var value = _ref7.currentTarget.value;
    if (_constants_form__WEBPACK_IMPORTED_MODULE_3__.PHONE_NUMBER_INPUT_SECTIONS.includes(type)) {
      updateReturnAddress({
        receiverContact1: _defineProperty({}, type, value)
      });
    }
  };
  var handlePhoneNumberChange = function handlePhoneNumberChange(_ref8, type) {
    var value = _ref8.currentTarget.value;
    if (_constants_form__WEBPACK_IMPORTED_MODULE_3__.PHONE_NUMBER_INPUT_SECTIONS.includes(type)) {
      updateReturnAddress({
        receiverContact2: _defineProperty({}, type, value)
      });
    }
  };
  var handleDeliveryMemoTextFieldChange = function handleDeliveryMemoTextFieldChange(_ref9) {
    var deliveryMemo = _ref9.currentTarget.value;
    updateReturnAddress({
      deliveryMemo: deliveryMemo
    });
  };
  var handleDeliveryCompanySelect = function handleDeliveryCompanySelect(_ref10) {
    var deliveryCompany = _ref10.currentTarget.value;
    updateBuyerReturnInfo({
      deliveryCompany: deliveryCompany
    });
  };
  var handleInvoiceNoTextFieldChange = function handleInvoiceNoTextFieldChange(_ref11) {
    var invoiceNo = _ref11.currentTarget.value;
    updateBuyerReturnInfo({
      invoiceNo: invoiceNo
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "claim__section claim__section--no-padding claim__address"
  }, /*#__PURE__*/React.createElement("p", {
    className: "claim__title"
  }, "\uBC18\uD488 \uC218\uAC70 \uC815\uBCF4"), /*#__PURE__*/React.createElement("div", {
    className: "claim__address-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "claim__address-form-item"
  }, /*#__PURE__*/React.createElement("p", {
    className: "claim__address-form-title"
  }, "\uBC18\uD488 \uC218\uAC70 \uBC29\uBC95"), /*#__PURE__*/React.createElement("div", {
    className: "claim__radio-wrap"
  }, _constants_form__WEBPACK_IMPORTED_MODULE_3__.RETURN_WAY_OPTIONS.map(function (option) {
    return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
      key: option.value,
      className: "claim__radio".concat(option.value === returnWay ? ' claim__radio--checked' : ''),
      name: "collection-method"
    }, option, {
      checked: option.value === returnWay,
      onChange: function onChange() {
        return updateReturnWay(option.value);
      }
    }));
  }))), returnWay === 'SELLER_COLLECT' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "claim__address-form-item"
  }, /*#__PURE__*/React.createElement("p", {
    className: "claim__address-form-title"
  }, "\uBC18\uD488\uC790\uBA85"), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: receiverNameInputRef,
    value: receiverName,
    onChange: handleReceiverNameTextFieldChange,
    maxLength: _constants_form__WEBPACK_IMPORTED_MODULE_3__.NAME_INPUT_MAX_LENGTH
  })), /*#__PURE__*/React.createElement("div", {
    className: "claim__address-form-item"
  }, /*#__PURE__*/React.createElement("p", {
    className: "claim__address-form-title"
  }, "\uC218\uAC70\uC9C0 \uC8FC\uC18C"), /*#__PURE__*/React.createElement(_components_AddressForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ref: searchZipCodeBtnRef,
    zipCode: receiverZipCd,
    address: receiverAddress,
    addressDetail: receiverDetailAddress,
    onAddressItemClick: handleAddressItemClick,
    onAddressDetailChange: handleAddressDetailChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "claim__address-form-item"
  }, /*#__PURE__*/React.createElement("p", {
    className: "claim__address-form-title"
  }, "\uD734\uB300\uD3F0 \uBC88\uD638"), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__["default"], {
    ref: mobilePhoneNumberInputRef,
    carrierNumber: receiverContact1 === null || receiverContact1 === void 0 ? void 0 : receiverContact1.carrierNumber,
    firstSerial: receiverContact1 === null || receiverContact1 === void 0 ? void 0 : receiverContact1.firstSerial,
    secondSerial: receiverContact1 === null || receiverContact1 === void 0 ? void 0 : receiverContact1.secondSerial,
    onCarrierNumberSelect: function onCarrierNumberSelect(e) {
      return handleMobilePhoneNumberChange(e, 'carrierNumber');
    },
    onFirstSerialChange: function onFirstSerialChange(e) {
      return handleMobilePhoneNumberChange(e, 'firstSerial');
    },
    onSecondSerialChange: function onSecondSerialChange(e) {
      return handleMobilePhoneNumberChange(e, 'secondSerial');
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "claim__address-form-item"
  }, /*#__PURE__*/React.createElement("p", {
    className: "claim__address-form-title"
  }, "\uC804\uD654 \uBC88\uD638"), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_8__["default"], {
    ref: phoneNumberInputRef,
    carrierNumbersByString: _constants_form__WEBPACK_IMPORTED_MODULE_3__.PHONE_CARRIER_NUMBERS_BY_STRING,
    carrierNumber: receiverContact2 === null || receiverContact2 === void 0 ? void 0 : receiverContact2.carrierNumber,
    firstSerial: receiverContact2 === null || receiverContact2 === void 0 ? void 0 : receiverContact2.firstSerial,
    secondSerial: receiverContact2 === null || receiverContact2 === void 0 ? void 0 : receiverContact2.secondSerial,
    onCarrierNumberSelect: function onCarrierNumberSelect(e) {
      return handlePhoneNumberChange(e, 'carrierNumber');
    },
    onFirstSerialChange: function onFirstSerialChange(e) {
      return handlePhoneNumberChange(e, 'firstSerial');
    },
    onSecondSerialChange: function onSecondSerialChange(e) {
      return handlePhoneNumberChange(e, 'secondSerial');
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "claim__address-form-item"
  }, /*#__PURE__*/React.createElement("p", {
    className: "claim__address-form-title"
  }, "\uC218\uAC70 \uC2DC \uCC38\uACE0 \uC0AC\uD56D"), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
    placeholder: "\uC218\uAC70 \uC2DC \uC694\uCCAD\uC0AC\uD56D\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    value: deliveryMemo,
    onChange: handleDeliveryMemoTextFieldChange,
    maxLength: _constants_form__WEBPACK_IMPORTED_MODULE_3__.DELIVERY_MEMO_MAX_LENGTH
  }))), returnWay === 'BUYER_DIRECT_RETURN' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "claim__address-form-item"
  }, /*#__PURE__*/React.createElement("p", {
    className: "claim__address-form-title"
  }, "\uBC18\uD488 \uC8FC\uC18C\uC9C0"), /*#__PURE__*/React.createElement("dl", {
    className: "claim__return-address"
  }, /*#__PURE__*/React.createElement("dt", null, "\uC774\uB984"), /*#__PURE__*/React.createElement("dd", null, isMallShippingArea ? mallName : returnWarehouse.receiverName), /*#__PURE__*/React.createElement("dt", null, "\uC8FC\uC18C"), /*#__PURE__*/React.createElement("dd", null, returnWarehouse.summary), /*#__PURE__*/React.createElement("dt", null, "\uC804\uD654\uBC88\uD638"), /*#__PURE__*/React.createElement("dd", null, returnWarehouse.contact))), /*#__PURE__*/React.createElement("div", {
    className: "claim__address-form-item "
  }, /*#__PURE__*/React.createElement("p", {
    className: "claim__address-form-title"
  }, "\uBC18\uD488 \uC811\uC218 \uC815\uBCF4"), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "claim__select-box",
    hasEmptyOption: true,
    emptyOptionLabel: "\uD0DD\uBC30\uC0AC\uB97C \uC120\uD0DD\uD558\uC138\uC694",
    options: _constants_form__WEBPACK_IMPORTED_MODULE_3__.DELIVERY_COMPANY_OPTIONS,
    value: deliveryCompany,
    onSelect: handleDeliveryCompanySelect
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
    placeholder: "\uC1A1\uC7A5\uBC88\uD638",
    value: invoiceNo,
    maxLength: _constants_form__WEBPACK_IMPORTED_MODULE_3__.INVOICE_NO_MAX_LENGTH,
    onChange: handleInvoiceNoTextFieldChange,
    valid: 'NUMBER'
  }), /*#__PURE__*/React.createElement("p", {
    className: "claim__address-form-tip"
  }, "\u203B \uBC18\uD488 \uC811\uC218 \uC815\uBCF4 \uC785\uB825\uC740 \uD544\uC218\uAC00 \uC544\uB2D9\uB2C8\uB2E4.")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionInfoForm);
CollectionInfoForm.propTypes = {
  refs: (0,prop_types__WEBPACK_IMPORTED_MODULE_10__.shape)({
    receiverNameInputRef: prop_types__WEBPACK_IMPORTED_MODULE_10__.object,
    searchZipCodeBtnRef: prop_types__WEBPACK_IMPORTED_MODULE_10__.object,
    mobilePhoneNumberInputRef: prop_types__WEBPACK_IMPORTED_MODULE_10__.object,
    phoneNumberInputRef: prop_types__WEBPACK_IMPORTED_MODULE_10__.object
  })
};

/***/ }),

/***/ "./src/pages/Claim/index.js":
/*!**********************************!*\
  !*** ./src/pages/Claim/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Claim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Claim */ "./src/pages/Claim/Claim.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Claim__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/pages/Claim/useValidateClaimFormMaker.jsx":
/*!*******************************************************!*\
  !*** ./src/pages/Claim/useValidateClaimFormMaker.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/merge.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/cloneDeep.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/modal/ModalProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/claim/ClaimProvider/ClaimProvider.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var DEFAULT_OPTION = {
  activeStatus: {
    claimCount: true,
    claimReason: true,
    claimReasonDetail: true,
    accountForRefund: true,
    receiverName: true,
    address: true,
    // true 일 경우 우편번호 및 주소값 함께 검사
    mobilePhoneNumber: true,
    phoneNumber: true
  },
  refs: {
    claimReasonSelectRef: null,
    claimReasonDetailTextareaRef: null,
    bankSelectRef: null,
    bankAccountInputRef: null,
    bankDepositorNameInputRef: null,
    receiverNameInputRef: null,
    searchZipCodeBtnRef: null,
    mobilePhoneNumberInputRef: null,
    // PhoneNumberInput 컴포넌트가 사용하는 ref를 넣어야합니다.
    phoneNumberInputRef: null // PhoneNumberInput 컴포넌트가 사용하는 ref를 넣어야합니다.
  }
};

/**
 * 클레임 페이지 폼 입력값에 대한 유효성 검사 함수를 만듭니다.
 * 인자에 activeStatus를 넘길 때, 유효성 검사를 진행하지 않을 항목을 false로 넘겨주세요.
 * 기본값은 true 입니다.
 *
 * @param {{
 *    claimCount: boolean,
 *    claimReason: boolean,
 *    claimReasonDetail: boolean,
 *    receiverName: boolean,
 *    address: boolean,
 *    mobilePhoneNumber: boolean,
 *    phoneNumber: boolean,
 *    accountForRefund: boolean,
 *  }} activeStatus
 * @param {{
 *    claimReasonSelectRef: ?object ,
 *    claimReasonDetailTextareaRef: ?object,
 *    receiverNameInputRef: ?object,
 *    searchZipCodeBtnRef: ?object,
 *    mobilePhoneNumberInputRef: ?object,
 *    phoneNumberInputRef: ?object,
 * }}
 * @returns
 */
var useValidateClaimFormMaker = function useValidateClaimFormMaker() {
  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_OPTION;
  var _merge = (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])((0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(DEFAULT_OPTION), option),
    activeStatus = _merge.activeStatus,
    _merge$refs = _merge.refs,
    claimReasonSelectRef = _merge$refs.claimReasonSelectRef,
    claimReasonDetailTextareaRef = _merge$refs.claimReasonDetailTextareaRef,
    receiverNameInputRef = _merge$refs.receiverNameInputRef,
    searchZipCodeBtnRef = _merge$refs.searchZipCodeBtnRef,
    mobilePhoneNumberInputRef = _merge$refs.mobilePhoneNumberInputRef,
    phoneNumberInputRef = _merge$refs.phoneNumberInputRef,
    bankSelectRef = _merge$refs.bankSelectRef,
    bankAccountInputRef = _merge$refs.bankAccountInputRef,
    bankDepositorNameInputRef = _merge$refs.bankDepositorNameInputRef;
  var _useModalActionContex = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__.useModalActionContext)(),
    openAlert = _useModalActionContex.openAlert;
  var _useClaimStateContext = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useClaimStateContext)(),
    checkedOptionAmount = _useClaimStateContext.checkedOptionAmount,
    claimReason = _useClaimStateContext.claimReason,
    claimReasonDetail = _useClaimStateContext.claimReasonDetail,
    _useClaimStateContext2 = _useClaimStateContext.returnAddress,
    receiverName = _useClaimStateContext2.receiverName,
    receiverZipCd = _useClaimStateContext2.receiverZipCd,
    receiverAddress = _useClaimStateContext2.receiverAddress,
    receiverContact1 = _useClaimStateContext2.receiverContact1,
    receiverContact2 = _useClaimStateContext2.receiverContact2,
    _useClaimStateContext3 = _useClaimStateContext.accountForRefund,
    bank = _useClaimStateContext3.bank,
    bankAccount = _useClaimStateContext3.bankAccount,
    bankDepositorName = _useClaimStateContext3.bankDepositorName;
  var validation = {
    isZeroClaimCount: function isZeroClaimCount() {
      if (checkedOptionAmount > 0) return false;
      openAlert({
        message: '신청할 상품을 선택해주세요.'
      });
      return true;
    },
    isClaimReasonNotSelected: function isClaimReasonNotSelected() {
      if (claimReason) return false;
      openAlert({
        message: '신청 사유를 선택해주세요.',
        onClose: function onClose() {
          var _claimReasonSelectRef;
          console.log(claimReasonSelectRef);
          claimReasonSelectRef === null || claimReasonSelectRef === void 0 ? void 0 : (_claimReasonSelectRef = claimReasonSelectRef.current) === null || _claimReasonSelectRef === void 0 ? void 0 : _claimReasonSelectRef.focus();
        }
      });
      return true;
    },
    isClaimReasonDetailEmpty: function isClaimReasonDetailEmpty() {
      if (claimReasonDetail) return false;
      openAlert({
        message: '상세 사유를 입력해주세요.',
        onClose: function onClose() {
          var _claimReasonDetailTex;
          claimReasonDetailTextareaRef === null || claimReasonDetailTextareaRef === void 0 ? void 0 : (_claimReasonDetailTex = claimReasonDetailTextareaRef.current) === null || _claimReasonDetailTex === void 0 ? void 0 : _claimReasonDetailTex.focus();
        }
      });
      return true;
    },
    isReceiverNameEmpty: function isReceiverNameEmpty() {
      if (receiverName) return false;
      openAlert({
        message: '반품자명을 입력해주세요.',
        onClose: function onClose() {
          var _receiverNameInputRef;
          receiverNameInputRef === null || receiverNameInputRef === void 0 ? void 0 : (_receiverNameInputRef = receiverNameInputRef.current) === null || _receiverNameInputRef === void 0 ? void 0 : _receiverNameInputRef.focus();
        }
      });
      return true;
    },
    isReceiverZipCdEmpty: function isReceiverZipCdEmpty() {
      if (receiverZipCd) return false;
      openAlert({
        message: '우편번호를 입력해주세요.',
        onClose: function onClose() {
          var _searchZipCodeBtnRef$;
          searchZipCodeBtnRef === null || searchZipCodeBtnRef === void 0 ? void 0 : (_searchZipCodeBtnRef$ = searchZipCodeBtnRef.current) === null || _searchZipCodeBtnRef$ === void 0 ? void 0 : _searchZipCodeBtnRef$.focus();
        }
      });
      return true;
    },
    isReceiverAddressEmpty: function isReceiverAddressEmpty() {
      if (receiverAddress) return false;
      openAlert({
        message: '주소를 입력해주세요.',
        onClose: function onClose() {
          var _searchZipCodeBtnRef$2;
          searchZipCodeBtnRef === null || searchZipCodeBtnRef === void 0 ? void 0 : (_searchZipCodeBtnRef$2 = searchZipCodeBtnRef.current) === null || _searchZipCodeBtnRef$2 === void 0 ? void 0 : _searchZipCodeBtnRef$2.focus();
        }
      });
      return true;
    },
    isMobilePhoneCarrierNumberEmpty: function isMobilePhoneCarrierNumberEmpty() {
      if (receiverContact1.carrierNumber) return false;
      openAlert({
        message: '올바른 휴대폰 번호를 입력해주세요.',
        onClose: function onClose() {
          var _mobilePhoneNumberInp;
          mobilePhoneNumberInputRef === null || mobilePhoneNumberInputRef === void 0 ? void 0 : (_mobilePhoneNumberInp = mobilePhoneNumberInputRef.current) === null || _mobilePhoneNumberInp === void 0 ? void 0 : _mobilePhoneNumberInp.focusCarrierNumber();
        }
      });
      return true;
    },
    isMobilePhoneFirstSerialInvalid: function isMobilePhoneFirstSerialInvalid() {
      if (_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.POSSIBLE_PHONE_FIRST_SERIAL_LENGTHS.includes(receiverContact1.firstSerial.length)) return false;
      openAlert({
        message: '올바른 휴대폰 번호를 입력해주세요.',
        onClose: function onClose() {
          var _mobilePhoneNumberInp2;
          mobilePhoneNumberInputRef === null || mobilePhoneNumberInputRef === void 0 ? void 0 : (_mobilePhoneNumberInp2 = mobilePhoneNumberInputRef.current) === null || _mobilePhoneNumberInp2 === void 0 ? void 0 : _mobilePhoneNumberInp2.focusFirstSerial();
        }
      });
      return true;
    },
    isMobilePhoneSecondSerialInvalid: function isMobilePhoneSecondSerialInvalid() {
      if (_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.POSSIBLE_PHONE_SECOND_SERIAL_LENGTHS.includes(receiverContact1.secondSerial.length)) return false;
      openAlert({
        message: '올바른 휴대폰 번호를 입력해주세요.',
        onClose: function onClose() {
          var _mobilePhoneNumberInp3;
          mobilePhoneNumberInputRef === null || mobilePhoneNumberInputRef === void 0 ? void 0 : (_mobilePhoneNumberInp3 = mobilePhoneNumberInputRef.current) === null || _mobilePhoneNumberInp3 === void 0 ? void 0 : _mobilePhoneNumberInp3.focusSecondSerial();
        }
      });
      return true;
    },
    isPhoneCarrierNumberEmpty: function isPhoneCarrierNumberEmpty() {
      if (receiverContact2.carrierNumber) return false;
      openAlert({
        message: '올바른 전화 번호를 입력해주세요.',
        onClose: function onClose() {
          var _phoneNumberInputRef$;
          phoneNumberInputRef === null || phoneNumberInputRef === void 0 ? void 0 : (_phoneNumberInputRef$ = phoneNumberInputRef.current) === null || _phoneNumberInputRef$ === void 0 ? void 0 : _phoneNumberInputRef$.focusCarrierNumber();
        }
      });
      return true;
    },
    isPhoneFirstSerialInvalid: function isPhoneFirstSerialInvalid() {
      if (_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.POSSIBLE_PHONE_FIRST_SERIAL_LENGTHS.includes(receiverContact2.firstSerial.length)) return false;
      openAlert({
        message: '올바른 전화 번호를 입력해주세요.',
        onClose: function onClose() {
          var _phoneNumberInputRef$2;
          phoneNumberInputRef === null || phoneNumberInputRef === void 0 ? void 0 : (_phoneNumberInputRef$2 = phoneNumberInputRef.current) === null || _phoneNumberInputRef$2 === void 0 ? void 0 : _phoneNumberInputRef$2.focusFirstSerial();
        }
      });
      return true;
    },
    isPhoneSecondSerialInvalid: function isPhoneSecondSerialInvalid() {
      if (_shopby_shared__WEBPACK_IMPORTED_MODULE_0__.POSSIBLE_PHONE_SECOND_SERIAL_LENGTHS.includes(receiverContact2.secondSerial.length)) return false;
      openAlert({
        message: '올바른 전화 번호를 입력해주세요.',
        onClose: function onClose() {
          var _phoneNumberInputRef$3;
          phoneNumberInputRef === null || phoneNumberInputRef === void 0 ? void 0 : (_phoneNumberInputRef$3 = phoneNumberInputRef.current) === null || _phoneNumberInputRef$3 === void 0 ? void 0 : _phoneNumberInputRef$3.focusSecondSerial();
        }
      });
      return true;
    },
    isBankNotSelected: function isBankNotSelected() {
      if (bank) return false;
      openAlert({
        message: '은행사를 선택해주세요.',
        onClose: function onClose() {
          var _bankSelectRef$curren;
          bankSelectRef === null || bankSelectRef === void 0 ? void 0 : (_bankSelectRef$curren = bankSelectRef.current) === null || _bankSelectRef$curren === void 0 ? void 0 : _bankSelectRef$curren.focus();
        }
      });
      return true;
    },
    isBankAccountEmpty: function isBankAccountEmpty() {
      if (bankAccount) return false;
      openAlert({
        message: '계좌번호를 입력해주세요.',
        onClose: function onClose() {
          var _bankAccountInputRef$;
          bankAccountInputRef === null || bankAccountInputRef === void 0 ? void 0 : (_bankAccountInputRef$ = bankAccountInputRef.current) === null || _bankAccountInputRef$ === void 0 ? void 0 : _bankAccountInputRef$.focus();
        }
      });
      return true;
    },
    isBankDepositorNameEmpty: function isBankDepositorNameEmpty() {
      if (bankDepositorName) return false;
      openAlert({
        message: '예금주를 입력해주세요.',
        onClose: function onClose() {
          var _bankDepositorNameInp;
          bankDepositorNameInputRef === null || bankDepositorNameInputRef === void 0 ? void 0 : (_bankDepositorNameInp = bankDepositorNameInputRef.current) === null || _bankDepositorNameInp === void 0 ? void 0 : _bankDepositorNameInp.focus();
        }
      });
      return true;
    }
  };
  var validationMap = {
    // 순서대로 유효성 검사가 진행됩니다.
    claimCount: [validation.isZeroClaimCount],
    claimReason: [validation.isClaimReasonNotSelected],
    claimReasonDetail: [validation.isClaimReasonDetailEmpty],
    accountForRefund: [validation.isBankNotSelected, validation.isBankAccountEmpty, validation.isBankDepositorNameEmpty],
    receiverName: [validation.isReceiverNameEmpty],
    address: [validation.isReceiverAddressEmpty],
    mobilePhoneNumber: [validation.isMobilePhoneCarrierNumberEmpty, validation.isMobilePhoneFirstSerialInvalid, validation.isMobilePhoneSecondSerialInvalid],
    phoneNumber: [validation.isPhoneCarrierNumberEmpty, validation.isPhoneFirstSerialInvalid, validation.isPhoneSecondSerialInvalid]
  };
  var validate = function validate() {
    return Object.entries(validationMap).every(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        validationTarget = _ref2[0],
        validations = _ref2[1];
      if (!activeStatus[validationTarget]) return true;
      return validations.every(function (validation) {
        return !validation();
      });
    });
  };
  return {
    validate: validate
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useValidateClaimFormMaker);

/***/ }),

/***/ "./src/utils/claim.js":
/*!****************************!*\
  !*** ./src/utils/claim.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCollectionComments": () => (/* binding */ getCollectionComments)
/* harmony export */ });
var getCollectionComments = function getCollectionComments(returnWay, returnWarehouseLabel) {
  if (returnWay === 'SELLER_COLLECT') return ['반품상황에 따라 (반품)택배비를 차감할 수 있습니다.', '반품신청이 완료되면 입력하신 수거지주소로 반품수거가 진행됩니다.', 'CJ대한통운택배기사가 1~2일 내에 직접 방문합니다.', '반품등록일 오후 5시까지 접수분은 익일로 반품접수 됩니다.', '단, 토/일/공휴일은 다음 근무일에 처리 됩니다.'];
  return ['반품상황에 따라 (반품)택배비를 차감할 수 있습니다.', '반품신청이 완료되면 구매자가 반품할 상품을 반품주소로 직접 보내주셔야 합니다.(착불 불가)', "\uBC18\uD488\uC8FC\uC18C: ".concat(returnWarehouseLabel)];
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCollectionComments": () => (/* reexport safe */ _claim__WEBPACK_IMPORTED_MODULE_1__.getCollectionComments),
/* harmony export */   "getOptionLabels": () => (/* reexport safe */ _product__WEBPACK_IMPORTED_MODULE_0__.getOptionLabels)
/* harmony export */ });
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product */ "./src/utils/product.js");
/* harmony import */ var _claim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claim */ "./src/utils/claim.js");



/***/ }),

/***/ "./src/utils/product.js":
/*!******************************!*\
  !*** ./src/utils/product.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOptionLabels": () => (/* binding */ getOptionLabels)
/* harmony export */ });
var getOptionLabels = function getOptionLabels(_ref) {
  var _optionName$split, _optionValue$split, _optionInputs$map;
  var optionName = _ref.optionName,
    optionValue = _ref.optionValue,
    optionInputs = _ref.optionInputs;
  var optionNameTokens = (_optionName$split = optionName === null || optionName === void 0 ? void 0 : optionName.split('|')) !== null && _optionName$split !== void 0 ? _optionName$split : [];
  var optionValueTokens = (_optionValue$split = optionValue === null || optionValue === void 0 ? void 0 : optionValue.split('|')) !== null && _optionValue$split !== void 0 ? _optionValue$split : [];
  var normalOptionLabels = optionNameTokens.map(function (optionNameToken, idx) {
    return "".concat(idx + 1, ") ").concat(optionNameToken, ": ").concat(optionValueTokens[idx]);
  });
  var textOptionLabels = (_optionInputs$map = optionInputs === null || optionInputs === void 0 ? void 0 : optionInputs.map(function (_ref2) {
    var inputLabel = _ref2.inputLabel,
      inputValue = _ref2.inputValue;
    return "".concat(inputLabel, ": ").concat(inputValue);
  })) !== null && _optionInputs$map !== void 0 ? _optionInputs$map : [];
  return {
    normalOptionLabels: normalOptionLabels,
    textOptionLabels: textOptionLabels
  };
};

/***/ }),

/***/ "./node_modules/lodash-es/_basePick.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_basePick.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basePickBy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_basePickBy.js */ "./node_modules/lodash-es/_basePickBy.js");
/* harmony import */ var _hasIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hasIn.js */ "./node_modules/lodash-es/hasIn.js");



/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return (0,_basePickBy_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, paths, function(value, path) {
    return (0,_hasIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, path);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basePick);


/***/ }),

/***/ "./node_modules/lodash-es/pick.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/pick.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basePick_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_basePick.js */ "./node_modules/lodash-es/_basePick.js");
/* harmony import */ var _flatRest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_flatRest.js */ "./node_modules/lodash-es/_flatRest.js");



/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = (0,_flatRest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(object, paths) {
  return object == null ? {} : (0,_basePick_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, paths);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pick);


/***/ })

}]);
//# sourceMappingURL=src_pages_Claim_index_js.a58a4843c04ca393e64e.bundle.js.map