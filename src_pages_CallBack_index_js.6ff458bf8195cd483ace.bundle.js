"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_pages_CallBack_index_js"],{

/***/ "./node_modules/@shopby/react-components/dist/esm/auth/IdentificationVerificationProvider/IdentificationVerificationProvider.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@shopby/react-components/dist/esm/auth/IdentificationVerificationProvider/IdentificationVerificationProvider.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useIdentificationVerificationActionContext": () => (/* binding */ useIdentificationVerificationActionContext),
/* harmony export */   "useIdentificationVerificationStateContext": () => (/* binding */ useIdentificationVerificationStateContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/shared/helpers */ "./node_modules/@shopby/shared/dist/esm/helpers/index.js");
var __assign=undefined&&undefined.__assign||function(){return __assign=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},__assign.apply(this,arguments)},__read=undefined&&undefined.__read||function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,r,o=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(t){r={error:t}}finally{try{n&&!n.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}return a};var IdentificationVerificationStateContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),IdentificationVerificationActionContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),_a=_shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_2__.authHelper.identificationVerification,Helper=_a.Helper,QUERY_KEY=_a.QUERY_KEY,DEFAULT_STATE={isCiExist:!1,isIdentificationVerificationReSend:!1,kcpForm:null,ci:""},IdentificationVerificationProvider=function(t){var e=t.children,i=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.isIdentificationVerificationReSend),2),n=i[0],r=i[1],o=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.isCiExist),2),a=o[0],c=o[1],f=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.kcpForm),2),s=f[0],u=f[1],_=__read((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_STATE.ci),2),d=_[0],l=_[1],E=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return (0,_shopby_shared_helpers__WEBPACK_IMPORTED_MODULE_2__.executeHelper)(new Helper)}),[]).executeQuery,I=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return{updateIsIdentificationVerificationReSend:r,updateIsCiExist:c,updateCi:l,moveIdVerification:function(t){return E(QUERY_KEY.QUERY_KCP_ID_VERIFICATION_FORM,{payload:t,onSuccess:function(t){var e=t.data;u(e)}})},getIdVerificationResponse:function(t){return E(QUERY_KEY.QUERY_KCP_ID_VERIFICATION_RESPONSE,{payload:t})},verifyCi:function(t){return E(QUERY_KEY.QUERY_PROFILE_CI_EXISTS,{payload:t})}}}),[]);return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IdentificationVerificationActionContext.Provider,__assign({value:I},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IdentificationVerificationStateContext.Provider,__assign({value:{isIdentificationVerificationReSend:n,isCiExist:a,kcpForm:s,ci:d}},{children:e}))}))};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IdentificationVerificationProvider);var useIdentificationVerificationActionContext=function(){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(IdentificationVerificationActionContext);if(!t)throw new Error("INVALID_IdentificationVerificationActionContext");return t};var useIdentificationVerificationStateContext=function(){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(IdentificationVerificationStateContext);if(!t)throw new Error("INVALID_IdentificationVerificationStateContext");return t};

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

/***/ "./src/pages/CallBack/CallBack.jsx":
/*!*****************************************!*\
  !*** ./src/pages/CallBack/CallBack.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/IdentificationVerificationProvider/IdentificationVerificationProvider.js");
/* harmony import */ var _CallBackForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CallBackForm */ "./src/pages/CallBack/CallBackForm.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var CallBack = function CallBack() {
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/React.createElement(_CallBackForm__WEBPACK_IMPORTED_MODULE_0__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallBack);

/***/ }),

/***/ "./src/pages/CallBack/CallBackForm.jsx":
/*!*********************************************!*\
  !*** ./src/pages/CallBack/CallBackForm.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/auth/IdentificationVerificationProvider/IdentificationVerificationProvider.js");
/* harmony import */ var _components_Sanitized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Sanitized */ "./src/components/Sanitized/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var CallBackForm = function CallBackForm() {
  var _useIdentificationVer = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__.useIdentificationVerificationActionContext)(),
    moveIdVerification = _useIdentificationVer.moveIdVerification;
  var _useIdentificationVer2 = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__.useIdentificationVerificationStateContext)(),
    kcpForm = _useIdentificationVer2.kcpForm;
  var params = new URLSearchParams(location.search);
  var kcpKey = params.get('key');
  var returnUrl = params.get('returnUrl');
  var formRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var formSubmit = function formSubmit() {
    return kcpForm === null ? '' : formRef.current.querySelector('#form_auth').submit();
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (kcpKey) {
      window.parent.postMessage(kcpKey);
    } else {
      moveIdVerification({
        returnUrl: "".concat(location.origin, "/callback?returnUrl=").concat(returnUrl)
      });
    }
  }, [kcpKey, returnUrl]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    self.name = 'auth_popup';
    formSubmit();
  }, [kcpForm]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("iframe", {
    id: "kcp_cert",
    name: "kcp_cert",
    frameBorder: "0",
    scrolling: "no",
    style: {
      display: 'none',
      width: '100%',
      height: '100%'
    },
    sandbox: "allow-top-navigation allow-top-navigation-by-user-activation allow-popups allow-scripts allow-modals allow-forms"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form",
    ref: formRef
  }, /*#__PURE__*/React.createElement(_components_Sanitized__WEBPACK_IMPORTED_MODULE_1__["default"], {
    html: kcpForm
  }))), /*#__PURE__*/React.createElement("div", {
    id: "popups-area"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallBackForm);

/***/ }),

/***/ "./src/pages/CallBack/index.js":
/*!*************************************!*\
  !*** ./src/pages/CallBack/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CallBack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CallBack */ "./src/pages/CallBack/CallBack.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CallBack__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);
//# sourceMappingURL=src_pages_CallBack_index_js.6ff458bf8195cd483ace.bundle.js.map