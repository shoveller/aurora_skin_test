"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["src_pages_ProductDetail_Content_Detail_jsx"],{

/***/ "./src/constants/certification.js":
/*!****************************************!*\
  !*** ./src/constants/certification.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SPECIAL_KC": () => (/* binding */ SPECIAL_KC)
/* harmony export */ });
// KC 인중 유형이 방송통신기자재 잠정인증 / 적합등록 / 적합인증(Kc 인증구분 kcCd04 / kcCd05 / kcCd06)일 경우
var SPECIAL_KC = ['kcCd04', 'kcCd05', 'kcCd06', '방송통신기자재 잠정인증', '방송통신기자재 적합등록', '방송통신기자재 적합인증'];

/***/ }),

/***/ "./src/pages/ProductDetail/Content/CertificationInformation.jsx":
/*!**********************************************************************!*\
  !*** ./src/pages/ProductDetail/Content/CertificationInformation.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _KcCertificationInformation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KcCertificationInformation */ "./src/pages/ProductDetail/Content/KcCertificationInformation.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var CertificationInformation = function CertificationInformation(_ref) {
  var includesKcInDutyInfo = _ref.includesKcInDutyInfo,
    showsOnPageDetail = _ref.showsOnPageDetail,
    certificationInformation = _ref.certificationInformation;
  var showsCertificationInformationTitle = showsOnPageDetail || !includesKcInDutyInfo && (certificationInformation === null || certificationInformation === void 0 ? void 0 : certificationInformation.certificationType) !== 'NOT_TARGET';
  var showsCertificationInformationContent = !includesKcInDutyInfo && (certificationInformation === null || certificationInformation === void 0 ? void 0 : certificationInformation.certificationType) === 'TARGET';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
    shows: showsCertificationInformationTitle,
    TruthyComponent: /*#__PURE__*/React.createElement("p", {
      className: "product-content__title"
    }, "\uC778\uC99D \uC815\uBCF4")
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
    shows: showsCertificationInformationContent,
    TruthyComponent: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_KcCertificationInformation__WEBPACK_IMPORTED_MODULE_0__["default"], {
      certifications: certificationInformation === null || certificationInformation === void 0 ? void 0 : certificationInformation.certifications
    }))
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
    shows: (certificationInformation === null || certificationInformation === void 0 ? void 0 : certificationInformation.certificationType) === 'DETAIL_PAGE',
    TruthyComponent: /*#__PURE__*/React.createElement("p", null, "\uC0C1\uD488 \uC0C1\uC138\uD398\uC774\uC9C0 \uB0B4 \uBCC4\uB3C4 \uD45C\uAE30")
  }));
};
CertificationInformation.propTypes = {
  includesKcInDutyInfo: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  showsOnPageDetail: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  certificationInformation: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.shape)({
    certificationType: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    certifications: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_2__.shape)({
      no: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
      type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
      code: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
      date: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
    }))
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CertificationInformation);

/***/ }),

/***/ "./src/pages/ProductDetail/Content/Detail.jsx":
/*!****************************************************!*\
  !*** ./src/pages/ProductDetail/Content/Detail.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/product/ProductDetailProvider/ProductDetailProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/product/ProductOptionProvider/ProductOptionProvider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _components_Sanitized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Sanitized */ "./src/components/Sanitized/index.js");
/* harmony import */ var _Review__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Review */ "./src/pages/ProductDetail/Review/index.js");
/* harmony import */ var _CertificationInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CertificationInformation */ "./src/pages/ProductDetail/Content/CertificationInformation.jsx");
/* harmony import */ var _DutyInformation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DutyInformation */ "./src/pages/ProductDetail/Content/DutyInformation.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _excluded = ["dutyInfo"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var LIMIT_HEIGHT_TO_SHOW_PRODUCT_DETAIL = 500;
var Detail = function Detail() {
  var productDetailRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showsMoreBtn = _useState4[0],
    setShowsMoreBtn = _useState4[1];
  var _useProductDetailStat = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__.useProductDetailStateContext)(),
    _useProductDetailStat2 = _useProductDetailStat.productDetail,
    _useProductDetailStat3 = _useProductDetailStat2.content,
    dutyInfo = _useProductDetailStat3.dutyInfo,
    restContent = _objectWithoutProperties(_useProductDetailStat3, _excluded),
    baseInfo = _useProductDetailStat2.baseInfo;
  var _useProductOptionStat = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__.useProductOptionStateContext)(),
    originOption = _useProductOptionStat.originOption;
  var _useMemo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
      var _contents = Object.values(restContent);
      return {
        hasContent: _contents.some(Boolean),
        contents: _contents
      };
    }, [restContent]),
    contents = _useMemo.contents,
    hasContent = _useMemo.hasContent;
  var _useMemo2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
      var _ref, _originOption$flatOpt;
      // 상품 상세 > 등록된 옵션 이미지 사용
      var _showsOptionImages = baseInfo === null || baseInfo === void 0 ? void 0 : baseInfo.optionImageViewable;
      var _optionImages = (_ref = (_originOption$flatOpt = originOption === null || originOption === void 0 ? void 0 : originOption.flatOptions) !== null && _originOption$flatOpt !== void 0 ? _originOption$flatOpt : []) === null || _ref === void 0 ? void 0 : _ref.flatMap(function (_ref2) {
        var images = _ref2.images;
        return images.filter(function (_ref3) {
          var main = _ref3.main;
          return main;
        });
      });
      return {
        showsOptionImages: _showsOptionImages,
        optionImages: _optionImages
      };
    }, [baseInfo === null || baseInfo === void 0 ? void 0 : baseInfo.optionImageViewable, originOption === null || originOption === void 0 ? void 0 : originOption.flatOptions]),
    showsOptionImages = _useMemo2.showsOptionImages,
    optionImages = _useMemo2.optionImages;
  var _useMemo3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
      var _dutyInfo$contents;
      return {
        hasDutyInfo: dutyInfo.contents.length > 0,
        includesKcInDutyInfo: (_dutyInfo$contents = dutyInfo.contents) === null || _dutyInfo$contents === void 0 ? void 0 : _dutyInfo$contents.some(function (_ref4) {
          var label = _ref4.label;
          return label.startsWith('KC');
        })
      };
    }, [dutyInfo]),
    hasDutyInfo = _useMemo3.hasDutyInfo,
    includesKcInDutyInfo = _useMemo3.includesKcInDutyInfo;
  requestAnimationFrame(function () {
    var _productDetailRef$cur;
    var offsetHeight = productDetailRef === null || productDetailRef === void 0 ? void 0 : (_productDetailRef$cur = productDetailRef.current) === null || _productDetailRef$cur === void 0 ? void 0 : _productDetailRef$cur.offsetHeight;
    setShowsMoreBtn(offsetHeight >= LIMIT_HEIGHT_TO_SHOW_PRODUCT_DETAIL);
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    ref: productDetailRef,
    className: "editor product-content__content ".concat(isOpen ? '' : 'hidden')
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-content__content-box"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
    shows: hasContent || showsOptionImages,
    TruthyComponent: /*#__PURE__*/React.createElement("p", {
      className: "product-content__title"
    }, "\uC0C1\uD488\uC0C1\uC138\uC815\uBCF4")
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
    shows: showsOptionImages,
    TruthyComponent: /*#__PURE__*/React.createElement("div", null, optionImages === null || optionImages === void 0 ? void 0 : optionImages.map(function (image, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: "option-main-image-".concat(index)
      }, /*#__PURE__*/React.createElement("img", {
        src: image.url
      }));
    })),
    FalsyComponent: /*#__PURE__*/React.createElement("div", null, contents.map(function (html, index) {
      return /*#__PURE__*/React.createElement(_components_Sanitized__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: "product-detail-content-".concat(index),
        html: html !== null && html !== void 0 ? html : ''
      });
    }))
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
    shows: !hasContent && !showsOptionImages,
    TruthyComponent: /*#__PURE__*/React.createElement("p", {
      className: "product-content__empty-content"
    }, "\uB4F1\uB85D\uB41C \uC0C1\uD488 \uC0C1\uC138 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")
  }), /*#__PURE__*/React.createElement(_DutyInformation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    hasDutyInfo: hasDutyInfo,
    includesKcInDutyInfo: includesKcInDutyInfo,
    contents: dutyInfo.contents,
    certifications: baseInfo === null || baseInfo === void 0 ? void 0 : baseInfo.certifications
  }), /*#__PURE__*/React.createElement(_CertificationInformation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    includesKcInDutyInfo: includesKcInDutyInfo,
    showsOnPageDetail: (baseInfo === null || baseInfo === void 0 ? void 0 : baseInfo.certificationType) === 'DETAIL_PAGE',
    certificationInformation: {
      certificationType: baseInfo === null || baseInfo === void 0 ? void 0 : baseInfo.certificationType,
      certifications: baseInfo === null || baseInfo === void 0 ? void 0 : baseInfo.certifications
    }
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
    shows: showsMoreBtn,
    TruthyComponent: /*#__PURE__*/React.createElement("div", {
      className: "product-content__more-btn"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setIsOpen(function (prev) {
          return !prev;
        });
      }
    }, isOpen ? '상세정보 접기' : '상세정보 펼쳐보기'))
  }))), /*#__PURE__*/React.createElement(_Review__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Detail);

/***/ }),

/***/ "./src/pages/ProductDetail/Content/DutyInformation.jsx":
/*!*************************************************************!*\
  !*** ./src/pages/ProductDetail/Content/DutyInformation.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _KcCertificationInformation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KcCertificationInformation */ "./src/pages/ProductDetail/Content/KcCertificationInformation.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var DutyInformation = function DutyInformation(_ref) {
  var hasDutyInfo = _ref.hasDutyInfo,
    includesKcInDutyInfo = _ref.includesKcInDutyInfo,
    _ref$contents = _ref.contents,
    contents = _ref$contents === void 0 ? [] : _ref$contents,
    certifications = _ref.certifications;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
    shows: hasDutyInfo,
    TruthyComponent: /*#__PURE__*/React.createElement("p", {
      className: "product-content__title"
    }, "\uC0C1\uD488\uC815\uBCF4\uC81C\uACF5\uACE0\uC2DC")
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
    shows: hasDutyInfo,
    TruthyComponent: /*#__PURE__*/React.createElement("div", {
      className: "product-content__certification product-content__certification--duty-info"
    }, contents.map(function (_ref2, index) {
      var label = _ref2.label,
        description = _ref2.description;
      return /*#__PURE__*/React.createElement("dl", {
        key: index
      }, /*#__PURE__*/React.createElement("dt", null, label), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
        shows: includesKcInDutyInfo && label.startsWith('KC'),
        TruthyComponent: /*#__PURE__*/React.createElement(React.Fragment, null, description, /*#__PURE__*/React.createElement(_KcCertificationInformation__WEBPACK_IMPORTED_MODULE_0__["default"], {
          certifications: certifications
        })),
        FalsyComponent: description
      })));
    }))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DutyInformation);
DutyInformation.propTypes = {
  hasDutyInfo: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  includesKcInDutyInfo: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  contents: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_2__.shape)({
    label: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  })),
  certifications: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_2__.shape)({
    no: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    code: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    date: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }))
};

/***/ }),

/***/ "./src/pages/ProductDetail/Content/KcCertificationInformation.jsx":
/*!************************************************************************!*\
  !*** ./src/pages/ProductDetail/Content/KcCertificationInformation.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _constants_certification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/certification */ "./src/constants/certification.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var KcCertification = function KcCertification(_ref) {
  var _ref$certifications = _ref.certifications,
    certifications = _ref$certifications === void 0 ? [] : _ref$certifications;
  return /*#__PURE__*/React.createElement(React.Fragment, null, certifications.map(function (certification, index) {
    return /*#__PURE__*/React.createElement("dl", {
      className: "kc-info",
      key: "".concat(certification.no, "-").concat(index)
    }, /*#__PURE__*/React.createElement("dt", null, certification.type, " \uC548\uC804\uD655\uC778 \uB300\uC0C1 \uD488\uBAA9\uC73C\uB85C \uC544\uB798\uC758 \uAD6D\uAC00 \uD1B5\uD569\uC778\uC99D \uD544\uD568"), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
      shows: _constants_certification__WEBPACK_IMPORTED_MODULE_0__.SPECIAL_KC.includes(certification.code) || _constants_certification__WEBPACK_IMPORTED_MODULE_0__.SPECIAL_KC.includes(certification.type),
      TruthyComponent: /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("span", {
        className: "kc-logo"
      }), /*#__PURE__*/React.createElement("span", null, "\uC778\uC99D \uB0A0\uC9DC: ", /*#__PURE__*/React.createElement("a", {
        href: "https://rra.go.kr/ko/license/A_c_search.do"
      }, certification.date))),
      FalsyComponent: /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("span", {
        className: "kc-logo"
      }), "\uC778\uC99D \uBC88\uD638:", ' ', /*#__PURE__*/React.createElement("a", {
        href: "https://www.safetykorea.kr/search/searchPop?certNum=".concat(certification.code)
      }, certification.code))
    }));
  }));
};
KcCertification.propTypes = {
  certifications: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_2__.shape)({
    no: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    code: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    date: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KcCertification);

/***/ })

}]);
//# sourceMappingURL=src_pages_ProductDetail_Content_Detail_jsx.16fde3dc3a3a9db96eaf.bundle.js.map