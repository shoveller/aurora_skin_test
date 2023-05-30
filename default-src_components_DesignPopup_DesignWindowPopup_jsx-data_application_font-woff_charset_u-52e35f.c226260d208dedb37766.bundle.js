"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["default-src_components_DesignPopup_DesignWindowPopup_jsx-data_application_font-woff_charset_u-52e35f"],{

/***/ "./src/components/DesignPopup/DesignPopup.jsx":
/*!****************************************************!*\
  !*** ./src/components/DesignPopup/DesignPopup.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignPopupItem": () => (/* binding */ DesignPopupItem),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/DesignPopupProvider/DesignPopupProvider.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _hooks_useDragAndDrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useDragAndDrop */ "./src/hooks/useDragAndDrop.js");
/* harmony import */ var _utils_design__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/design */ "./src/utils/design.js");
/* harmony import */ var _DesignPopupMulti__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DesignPopupMulti */ "./src/components/DesignPopup/DesignPopupMulti.jsx");
/* harmony import */ var _DesignPopupNormal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DesignPopupNormal */ "./src/components/DesignPopup/DesignPopupNormal.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }









var popupHeightMap = new Map();
var SIZE_CALCULATOR = {
  PERCENT: function PERCENT(_ref) {
    var screenWidth = _ref.screenWidth,
      screenHeight = _ref.screenHeight;
    var width = window.innerWidth * screenWidth / 100;
    var height = window.innerHeight * screenHeight / 100;
    return {
      width: width,
      height: height
    };
  },
  PIXEL: function PIXEL(_ref2) {
    var screenWidth = _ref2.screenWidth,
      screenHeight = _ref2.screenHeight;
    return {
      width: screenWidth,
      height: screenHeight
    };
  }
};
var DesignPopupItem = function DesignPopupItem(_ref3) {
  var _ref3$className = _ref3.className,
    className = _ref3$className === void 0 ? '' : _ref3$className,
    _ref3$isWindowPopup = _ref3.isWindowPopup,
    isWindowPopup = _ref3$isWindowPopup === void 0 ? false : _ref3$isWindowPopup,
    onDeleteClick = _ref3.onDeleteClick,
    onVisibleTodayClick = _ref3.onVisibleTodayClick,
    content = _ref3.content,
    detailInfo = _ref3.detailInfo,
    popupDesignType = _ref3.popupDesignType,
    popupNo = _ref3.popupNo,
    popupSlideInfo = _ref3.popupSlideInfo,
    usesVisibleTodayOption = _ref3.usesVisibleTodayOption,
    isFixedTop = _ref3.isFixedTop,
    canDrag = _ref3.canDrag,
    _ref3$refs = _ref3.refs,
    refs = _ref3$refs === void 0 ? {} : _ref3$refs;
  var detailRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useDragAndDrop = (0,_hooks_useDragAndDrop__WEBPACK_IMPORTED_MODULE_2__["default"])({
      initialLeft: detailInfo.screenLeftPosition,
      initialTop: detailInfo.screenTopPosition
    }),
    position = _useDragAndDrop.position,
    handleDragStart = _useDragAndDrop.handleDragStart,
    handleDrag = _useDragAndDrop.handleDrag,
    handleDragOver = _useDragAndDrop.handleDragOver,
    handleDragEnd = _useDragAndDrop.handleDragEnd;
  var style = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (!isFixedTop) return {};
    return {
      left: 0,
      top: 0,
      paddingLeft: detailInfo.screenLeftPosition,
      paddingTop: detailInfo.screenTopPosition,
      width: '100%',
      boxShadow: 'none',
      border: 'none',
      zIndex: 6
    };
  }, [detailInfo]);
  var handleDeleteClick = function handleDeleteClick(popupNo) {
    onDeleteClick(popupNo);
    if (isFixedTop) {
      var _sort$at, _ref4, _ref4$sort;
      popupHeightMap['delete'](popupNo);
      var greatestHeight = (_sort$at = (_ref4 = _toConsumableArray(popupHeightMap.values())) === null || _ref4 === void 0 ? void 0 : (_ref4$sort = _ref4.sort(function (a, b) {
        return b - a;
      })) === null || _ref4$sort === void 0 ? void 0 : _ref4$sort.at(0)) !== null && _sort$at !== void 0 ? _sort$at : 0;
      refs.pageInnerRef.current.style.marginTop = "".concat(greatestHeight, "px");
    }
    if (isWindowPopup) {
      window.close();
    }
  };
  var handleVisibleTodayClick = function handleVisibleTodayClick(popupNo) {
    onVisibleTodayClick(popupNo);
    handleDeleteClick(popupNo);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _sort$at2, _ref5, _ref5$sort;
    if (!(detailRef !== null && detailRef !== void 0 && detailRef.current)) return;
    if (!isFixedTop) return;
    popupHeightMap.set(popupNo, detailRef.current.clientHeight);
    var greatestHeight = (_sort$at2 = (_ref5 = _toConsumableArray(popupHeightMap.values())) === null || _ref5 === void 0 ? void 0 : (_ref5$sort = _ref5.sort(function (a, b) {
      return b - a;
    })) === null || _ref5$sort === void 0 ? void 0 : _ref5$sort.at(0)) !== null && _sort$at2 !== void 0 ? _sort$at2 : 0;
    refs.pageInnerRef.current.style.marginTop = "".concat(greatestHeight, "px");
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (detailInfo.screenType === 'WINDOW' && !isWindowPopup) {
      var windowOption = {
        toolbar: 'no',
        status: 'no',
        statusbar: 'no',
        menubar: 'no',
        scrollbars: 'no',
        resizable: 'yes',
        location: 'yes',
        left: detailInfo.screenLeftPosition,
        top: detailInfo.screenTopPosition,
        width: SIZE_CALCULATOR[detailInfo.screenWidthUnit](detailInfo).width,
        height: SIZE_CALCULATOR[detailInfo.screenHeightUnit](detailInfo).height + 42
      };
      var windowOptionStr = Object.entries(windowOption).map(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
          key = _ref7[0],
          value = _ref7[1];
        return "".concat(key, "=").concat(value);
      }).join(', ');
      window.name = '';
      window.open("/design-popup?popupNo=".concat(popupNo, "&pathname=").concat(encodeURIComponent(location.pathname), "&parameter=").concat(encodeURIComponent(location.search)), "design-popup-".concat(popupNo), windowOptionStr);
    }
  }, []);
  if (detailInfo.screenType === 'WINDOW' && !isWindowPopup) return /*#__PURE__*/React.createElement(React.Fragment, null);
  return /*#__PURE__*/React.createElement("div", {
    ref: detailRef,
    draggable: canDrag,
    className: "design-popup ".concat(className),
    onDragStart: handleDragStart,
    onDrag: handleDrag,
    onDragOver: handleDragOver,
    onDragEnd: handleDragEnd,
    style: _objectSpread(_objectSpread({}, position), style)
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: popupNo,
    shows: popupDesignType === 'MULTI',
    TruthyComponent: /*#__PURE__*/React.createElement(_DesignPopupMulti__WEBPACK_IMPORTED_MODULE_4__["default"], popupSlideInfo, /*#__PURE__*/React.createElement("div", {
      className: "design-popup__btns",
      style: {
        width: "".concat(popupSlideInfo.slideMaxWidth, "px")
      }
    }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
      shows: usesVisibleTodayOption,
      TruthyComponent: /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: "\uC624\uB298 \uD558\uB8E8 \uBCF4\uC774\uC9C0 \uC54A\uC74C",
        onClick: function onClick() {
          return handleVisibleTodayClick(popupNo);
        }
      })
    }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "design-popup__btn--close",
      label: "\uB2EB\uAE30",
      onClick: function onClick() {
        return handleDeleteClick(popupNo);
      }
    }))),
    FalsyComponent: /*#__PURE__*/React.createElement(_DesignPopupNormal__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
      content: content
    }, detailInfo), /*#__PURE__*/React.createElement("div", {
      className: "design-popup__btns",
      style: {
        width: "".concat(detailInfo.screenWidth, "px")
      }
    }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
      shows: usesVisibleTodayOption,
      TruthyComponent: /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: "\uC624\uB298 \uD558\uB8E8 \uBCF4\uC774\uC9C0 \uC54A\uC74C",
        onClick: function onClick() {
          return handleVisibleTodayClick(popupNo);
        }
      })
    }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "design-popup__btn--close",
      label: "\uB2EB\uAE30",
      onClick: function onClick() {
        return handleDeleteClick(popupNo);
      }
    })))
  }));
};
DesignPopupItem.displayName = 'DesignPopupItem';
DesignPopupItem.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_8__.string,
  onDeleteClick: prop_types__WEBPACK_IMPORTED_MODULE_8__.func,
  onVisibleTodayClick: prop_types__WEBPACK_IMPORTED_MODULE_8__.func,
  content: prop_types__WEBPACK_IMPORTED_MODULE_8__.string,
  detailInfo: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.shape)({
    bgColor: prop_types__WEBPACK_IMPORTED_MODULE_8__.string,
    canResize: prop_types__WEBPACK_IMPORTED_MODULE_8__.bool,
    screenHeight: prop_types__WEBPACK_IMPORTED_MODULE_8__.number,
    screenHeightUnit: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.oneOf)(['PIXEL', 'PERCENT']),
    screenLeftPosition: prop_types__WEBPACK_IMPORTED_MODULE_8__.number,
    screenTopPosition: prop_types__WEBPACK_IMPORTED_MODULE_8__.number,
    screenType: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.oneOf)(['FIXED', 'FIXED_TOP', 'LAYER', 'WINDOW']),
    screenWidth: prop_types__WEBPACK_IMPORTED_MODULE_8__.number,
    screenWidthUnit: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.oneOf)(['PIXEL', 'PERCENT'])
  }),
  mallNo: prop_types__WEBPACK_IMPORTED_MODULE_8__.number,
  popupDesignType: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.oneOf)(['NORMAL', 'MULTI']),
  popupNo: prop_types__WEBPACK_IMPORTED_MODULE_8__.number,
  popupSlideInfo: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.shape)({
    slideSpeed: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.oneOf)([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    slideMinWidth: prop_types__WEBPACK_IMPORTED_MODULE_8__.number,
    slideMinHeight: prop_types__WEBPACK_IMPORTED_MODULE_8__.number,
    slideMaxWidth: prop_types__WEBPACK_IMPORTED_MODULE_8__.number,
    slideMaxHeight: prop_types__WEBPACK_IMPORTED_MODULE_8__.number,
    canResize: prop_types__WEBPACK_IMPORTED_MODULE_8__.bool,
    slideCount: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.oneOf)(['TWO_BY_ONE', 'THREE_BY_ONE', 'FOUR_BY_ONE', 'TWO_BY_TWO', 'THREE_BY_TWO', 'FOUR_BY_TWO']),
    slideDirection: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.oneOf)(['FIXED', 'RIGHT', 'LEFT', 'UP', 'DOWN']),
    slideImages: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_8__.shape)({
      hasUploaded: prop_types__WEBPACK_IMPORTED_MODULE_8__.bool,
      landingUrl: prop_types__WEBPACK_IMPORTED_MODULE_8__.string,
      mainImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_8__.string,
      openLocationTarget: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.oneOf)(['SELF', 'BLANK']),
      popupImageNo: prop_types__WEBPACK_IMPORTED_MODULE_8__.number,
      thumbImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_8__.string,
      thumbImageUrlOnOver: prop_types__WEBPACK_IMPORTED_MODULE_8__.string
    }))
  }),
  title: prop_types__WEBPACK_IMPORTED_MODULE_8__.string,
  usesVisibleTodayOption: prop_types__WEBPACK_IMPORTED_MODULE_8__.bool,
  isFixedTop: prop_types__WEBPACK_IMPORTED_MODULE_8__.bool,
  canDrag: prop_types__WEBPACK_IMPORTED_MODULE_8__.bool,
  refs: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.shape)({
    designPopupRef: prop_types__WEBPACK_IMPORTED_MODULE_8__.object,
    pageRef: prop_types__WEBPACK_IMPORTED_MODULE_8__.object,
    pageInnerRef: prop_types__WEBPACK_IMPORTED_MODULE_8__.object
  }),
  isWindowPopup: prop_types__WEBPACK_IMPORTED_MODULE_8__.bool
};
var DesignPopup = function DesignPopup(_ref8) {
  var refs = _ref8.refs;
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useLocation)();
  var _useDesignPopupStateC = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_10__.useDesignPopupStateContext)(),
    designPopups = _useDesignPopupStateC.designPopups,
    displayPopups = _useDesignPopupStateC.displayPopups;
  var _useDesignPopupAction = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_10__.useDesignPopupActionContext)(),
    fetchDesignPopups = _useDesignPopupAction.fetchDesignPopups,
    fetchDisplayPopups = _useDesignPopupAction.fetchDisplayPopups,
    putVisibleTodayBy = _useDesignPopupAction.putVisibleTodayBy,
    deleteDesignPopupBy = _useDesignPopupAction.deleteDesignPopupBy;
  var popups = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return [].concat(_toConsumableArray(designPopups), _toConsumableArray(displayPopups));
  }, [designPopups, displayPopups]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var pageTypeInformation = (0,_utils_design__WEBPACK_IMPORTED_MODULE_3__.getPageTypeInformation)();
    pageTypeInformation && fetchDisplayPopups(_objectSpread({}, pageTypeInformation));
    fetchDesignPopups({
      displayUrl: location.pathname,
      parameter: location.search
    });
  }, [location, (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.isSignedIn)()]);
  if (!(popups !== null && popups !== void 0 && popups.length)) {
    var _refs$pageInnerRef;
    if (refs !== null && refs !== void 0 && (_refs$pageInnerRef = refs.pageInnerRef) !== null && _refs$pageInnerRef !== void 0 && _refs$pageInnerRef.current) {
      refs.pageInnerRef.current.style.marginTop = "".concat(0, "px");
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  }
  return /*#__PURE__*/React.createElement("div", null, popups.map(function (designPopup) {
    return /*#__PURE__*/React.createElement(DesignPopupItem, _extends({
      refs: refs,
      key: designPopup.popupNo
    }, designPopup, {
      isFixedTop: designPopup.detailInfo.screenType === 'FIXED_TOP',
      canDrag: designPopup.detailInfo.screenType === 'LAYER',
      onDeleteClick: function onDeleteClick(popupNo) {
        deleteDesignPopupBy({
          popupNo: popupNo
        });
      },
      onVisibleTodayClick: function onVisibleTodayClick(popupNo) {
        putVisibleTodayBy({
          popupNo: popupNo,
          shouldHide: true
        });
      }
    }));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesignPopup);
DesignPopup.propTypes = {
  refs: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.shape)({
    pageRef: prop_types__WEBPACK_IMPORTED_MODULE_8__.object,
    pageInnerRef: prop_types__WEBPACK_IMPORTED_MODULE_8__.object
  })
};

/***/ }),

/***/ "./src/components/DesignPopup/DesignPopupMulti.jsx":
/*!*********************************************************!*\
  !*** ./src/components/DesignPopup/DesignPopupMulti.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DesignPopupMultiMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesignPopupMultiMain */ "./src/components/DesignPopup/DesignPopupMultiMain.jsx");
/* harmony import */ var _DesignPopupMultiSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesignPopupMultiSubject */ "./src/components/DesignPopup/DesignPopupMultiSubject.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var DesignPopupMulti = function DesignPopupMulti(_ref) {
  var slideMinWidth = _ref.slideMinWidth,
    slideMinHeight = _ref.slideMinHeight,
    slideMaxWidth = _ref.slideMaxWidth,
    slideMaxHeight = _ref.slideMaxHeight,
    slideSpeed = _ref.slideSpeed,
    slideImages = _ref.slideImages,
    slideCount = _ref.slideCount,
    slideDirection = _ref.slideDirection,
    children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "design-popup__content",
    style: {
      width: "".concat(slideMaxWidth, "px")
    }
  }, /*#__PURE__*/React.createElement(_DesignPopupMultiMain__WEBPACK_IMPORTED_MODULE_0__["default"], {
    slideImages: slideImages,
    slideMaxWidth: slideMaxWidth,
    slideMaxHeight: slideMaxHeight,
    slideDirection: slideDirection,
    slideSpeed: slideSpeed
  }), /*#__PURE__*/React.createElement(_DesignPopupMultiSubject__WEBPACK_IMPORTED_MODULE_1__["default"], {
    slideImages: slideImages,
    slideCount: slideCount,
    slideMinWidth: slideMinWidth,
    slideMinHeight: slideMinHeight
  }), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesignPopupMulti);
DesignPopupMulti.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__.node,
  slideSpeed: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf)([1, 2, 3, 4, 5, 6, 7, 8, 9]),
  slideMinWidth: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  slideMinHeight: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  slideMaxWidth: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  slideMaxHeight: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  canResize: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  slideCount: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf)(['TWO_BY_ONE', 'THREE_BY_ONE', 'FOUR_BY_ONE', 'TWO_BY_TWO', 'THREE_BY_TWO', 'FOUR_BY_TWO']),
  slideDirection: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf)(['FIXED', 'RIGHT', 'LEFT', 'UP', 'DOWN']),
  slideImages: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_2__.shape)({
    hasUploaded: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
    landingUrl: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    mainImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    openLocationTarget: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf)(['SELF', 'BLANK']),
    popupImageNo: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
    thumbImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    thumbImageUrlOnOver: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }))
};

/***/ }),

/***/ "./src/components/DesignPopup/DesignPopupMultiMain.jsx":
/*!*************************************************************!*\
  !*** ./src/components/DesignPopup/DesignPopupMultiMain.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Slider/Slider.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/swiper/react/swiper-react.js");
/* harmony import */ var _constants_designPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/designPopup */ "./src/constants/designPopup.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var DesignPopupMultiMain = function DesignPopupMultiMain(_ref) {
  var slideMaxWidth = _ref.slideMaxWidth,
    slideMaxHeight = _ref.slideMaxHeight,
    slideDirection = _ref.slideDirection,
    slideSpeed = _ref.slideSpeed,
    slideImages = _ref.slideImages;
  var mainUrls = slideImages.map(function (_ref2) {
    var mainImageUrl = _ref2.mainImageUrl,
      popupImageNo = _ref2.popupImageNo;
    return {
      mainImageUrl: mainImageUrl,
      popupImageNo: "main_".concat(popupImageNo)
    };
  });
  var _SLIDE_DIRECTION_MAP$ = _constants_designPopup__WEBPACK_IMPORTED_MODULE_0__.SLIDE_DIRECTION_MAP[slideDirection],
    effect = _SLIDE_DIRECTION_MAP$.effect,
    direction = _SLIDE_DIRECTION_MAP$.direction,
    reverseDirection = _SLIDE_DIRECTION_MAP$.reverseDirection;
  return /*#__PURE__*/React.createElement("div", {
    height: "".concat(slideMaxHeight, "px")
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
    autoHeight: true,
    effect: effect,
    direction: direction,
    autoplay: {
      delay: (slideSpeed !== null && slideSpeed !== void 0 ? slideSpeed : 1) * 1000 || 2500,
      reverseDirection: reverseDirection
    },
    loop: true,
    slidesPerView: "auto"
  }, mainUrls === null || mainUrls === void 0 ? void 0 : mainUrls.map(function (main) {
    return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
      key: main.popupImageNo
    }, /*#__PURE__*/React.createElement("img", {
      src: main.mainImageUrl,
      width: "".concat(slideMaxWidth, "px"),
      height: "".concat(slideMaxHeight, "px")
    }));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesignPopupMultiMain);
DesignPopupMultiMain.propTypes = {
  canResize: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool,
  slideSpeed: (0,prop_types__WEBPACK_IMPORTED_MODULE_3__.oneOf)([1, 2, 3, 4, 5, 6, 7, 8, 9]),
  slideMaxWidth: prop_types__WEBPACK_IMPORTED_MODULE_3__.number,
  slideMaxHeight: prop_types__WEBPACK_IMPORTED_MODULE_3__.number,
  slideDirection: (0,prop_types__WEBPACK_IMPORTED_MODULE_3__.oneOf)(['FIXED', 'RIGHT', 'LEFT', 'UP', 'DOWN']),
  slideImages: (0,prop_types__WEBPACK_IMPORTED_MODULE_3__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_3__.shape)({
    hasUploaded: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool,
    landingUrl: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    mainImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    openLocationTarget: (0,prop_types__WEBPACK_IMPORTED_MODULE_3__.oneOf)(['SELF', 'BLANK']),
    popupImageNo: prop_types__WEBPACK_IMPORTED_MODULE_3__.number,
    thumbImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    thumbImageUrlOnOver: prop_types__WEBPACK_IMPORTED_MODULE_3__.string
  }))
};

/***/ }),

/***/ "./src/components/DesignPopup/DesignPopupMultiSubject.jsx":
/*!****************************************************************!*\
  !*** ./src/components/DesignPopup/DesignPopupMultiSubject.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_designPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/designPopup */ "./src/constants/designPopup.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var SubjectItem = function SubjectItem(_ref) {
  var thumbImageUrl = _ref.thumbImageUrl,
    thumbImageUrlOnOver = _ref.thumbImageUrlOnOver,
    landingUrl = _ref.landingUrl,
    openLocationTarget = _ref.openLocationTarget,
    slideMinWidth = _ref.slideMinWidth,
    slideMinHeight = _ref.slideMinHeight;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(thumbImageUrl),
    _useState2 = _slicedToArray(_useState, 2),
    imageUrl = _useState2[0],
    setImageUrl = _useState2[1];
  var handleMouseEnter = function handleMouseEnter() {
    setImageUrl(thumbImageUrlOnOver);
  };
  var handleMouseLeave = function handleMouseLeave() {
    setImageUrl(thumbImageUrl);
  };
  return /*#__PURE__*/React.createElement("a", {
    href: landingUrl,
    target: "_".concat(openLocationTarget === null || openLocationTarget === void 0 ? void 0 : openLocationTarget.toLowerCase())
  }, /*#__PURE__*/React.createElement("img", {
    src: imageUrl,
    onMouseEnter: handleMouseEnter,
    onTouchStart: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onTouchEnd: handleMouseLeave,
    width: "".concat(slideMinWidth, "px"),
    height: "".concat(slideMinHeight, "px")
  }));
};
SubjectItem.propTypes = {
  thumbImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  thumbImageUrlOnOver: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  slideMinWidth: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  slideMinHeight: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  landingUrl: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  openLocationTarget: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf)(['SELF', 'BLANK'])
};
var getGridInformation = function getGridInformation(slideCount) {
  return {
    gridTemplateRows: "repeat(".concat(_constants_designPopup__WEBPACK_IMPORTED_MODULE_1__.SLIDE_COUNT_MAP[slideCount.split('_BY_').at(1)], ", 1fr)"),
    gridTemplateColumns: "repeat(".concat(_constants_designPopup__WEBPACK_IMPORTED_MODULE_1__.SLIDE_COUNT_MAP[slideCount.split('_BY_').at(0)], ", 1fr)")
  };
};
var DesignPopupMultiSubject = function DesignPopupMultiSubject(_ref2) {
  var slideImages = _ref2.slideImages,
    slideCount = _ref2.slideCount,
    slideMinWidth = _ref2.slideMinWidth,
    slideMinHeight = _ref2.slideMinHeight;
  var thumbImageUrls = slideImages.map(function (_ref3) {
    var thumbImageUrl = _ref3.thumbImageUrl,
      thumbImageUrlOnOver = _ref3.thumbImageUrlOnOver,
      popupImageNo = _ref3.popupImageNo,
      landingUrl = _ref3.landingUrl;
    return {
      thumbImageUrl: thumbImageUrl,
      thumbImageUrlOnOver: thumbImageUrlOnOver,
      popupImageNo: "thumb_".concat(popupImageNo),
      landingUrl: landingUrl
    };
  });
  var _getGridInformation = getGridInformation(slideCount),
    gridTemplateRows = _getGridInformation.gridTemplateRows,
    gridTemplateColumns = _getGridInformation.gridTemplateColumns;
  return /*#__PURE__*/React.createElement("div", {
    className: "design-popup__thumb-image",
    style: {
      display: 'grid',
      gridTemplateRows: gridTemplateRows,
      gridTemplateColumns: gridTemplateColumns
    }
  }, thumbImageUrls === null || thumbImageUrls === void 0 ? void 0 : thumbImageUrls.map(function (url) {
    return (
      /*#__PURE__*/
      // console.log(url);
      React.createElement(SubjectItem, _extends({
        key: url.popupImageNo
      }, url, {
        slideMinWidth: slideMinWidth,
        slideMinHeight: slideMinHeight
      }))
    );
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesignPopupMultiSubject);
DesignPopupMultiSubject.propTypes = {
  slideImages: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_2__.shape)({
    hasUploaded: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
    landingUrl: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    mainImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    openLocationTarget: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf)(['SELF', 'BLANK']),
    popupImageNo: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
    thumbImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    thumbImageUrlOnOver: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  })),
  slideCount: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf)(['TWO_BY_ONE', 'THREE_BY_ONE', 'FOUR_BY_ONE', 'TWO_BY_TWO', 'THREE_BY_TWO', 'FOUR_BY_TWO']),
  slideMinWidth: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  slideMinHeight: prop_types__WEBPACK_IMPORTED_MODULE_2__.number
};

/***/ }),

/***/ "./src/components/DesignPopup/DesignPopupNormal.jsx":
/*!**********************************************************!*\
  !*** ./src/components/DesignPopup/DesignPopupNormal.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Sanitized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Sanitized */ "./src/components/Sanitized/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var SIZE_CALCULATOR = {
  PERCENT: function PERCENT(_ref) {
    var screenWidth = _ref.screenWidth,
      screenHeight = _ref.screenHeight;
    var width = window.innerWidth * screenWidth / 100;
    var height = window.innerHeight * screenHeight / 100;
    return {
      width: width,
      height: height
    };
  },
  PIXEL: function PIXEL(_ref2) {
    var screenWidth = _ref2.screenWidth,
      screenHeight = _ref2.screenHeight;
    return {
      width: screenWidth,
      height: screenHeight
    };
  }
};
var DesignPopupNormal = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref3, ref) {
  var content = _ref3.content,
    screenWidthUnit = _ref3.screenWidthUnit,
    screenHeightUnit = _ref3.screenHeightUnit,
    bgColor = _ref3.bgColor,
    screenWidth = _ref3.screenWidth,
    screenHeight = _ref3.screenHeight,
    children = _ref3.children;
  var style = {
    background: bgColor,
    width: "".concat(SIZE_CALCULATOR[screenWidthUnit]({
      screenWidth: screenWidth,
      screenHeight: screenHeight
    }).width, "px"),
    height: "".concat(SIZE_CALCULATOR[screenHeightUnit]({
      screenWidth: screenWidth,
      screenHeight: screenHeight
    }).height, "px")
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "editor",
    ref: ref
  }, /*#__PURE__*/React.createElement(_Sanitized__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "design-popup__content",
    html: content,
    style: style
  }), children);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesignPopupNormal);
DesignPopupNormal.displayName = 'DesignPopupNormal';
DesignPopupNormal.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  content: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  screenWidthUnit: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf)(['PERCENT', 'PIXEL']),
  screenHeightUnit: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf)(['PERCENT', 'PIXEL']),
  bgColor: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  screenWidth: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  screenHeight: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__.node
};

/***/ }),

/***/ "./src/components/DesignPopup/DesignWindowPopup.jsx":
/*!**********************************************************!*\
  !*** ./src/components/DesignPopup/DesignWindowPopup.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/display/DesignPopupProvider/DesignPopupProvider.js");
/* harmony import */ var _utils_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/design */ "./src/utils/design.js");
/* harmony import */ var _DesignPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DesignPopup */ "./src/components/DesignPopup/DesignPopup.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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





var DesignWindowPopup = function DesignWindowPopup() {
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  var popupNo = Number(searchParams.get('popupNo'));
  var pathname = decodeURIComponent(searchParams.get('pathname'));
  var parameter = decodeURIComponent(searchParams.get('parameter'));
  var _useDesignPopupStateC = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useDesignPopupStateContext)(),
    designPopups = _useDesignPopupStateC.designPopups,
    displayPopups = _useDesignPopupStateC.displayPopups;
  var _useDesignPopupAction = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__.useDesignPopupActionContext)(),
    deleteDesignPopupBy = _useDesignPopupAction.deleteDesignPopupBy,
    putVisibleTodayBy = _useDesignPopupAction.putVisibleTodayBy,
    fetchDesignPopups = _useDesignPopupAction.fetchDesignPopups,
    fetchDisplayPopups = _useDesignPopupAction.fetchDisplayPopups;
  var popups = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return [].concat(_toConsumableArray(designPopups), _toConsumableArray(displayPopups));
  }, [designPopups, displayPopups]);
  var designPopup = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return popups.find(function (designPopup) {
      return designPopup.popupNo === popupNo;
    });
  }, [popups]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var pageTypeInformation = (0,_utils_design__WEBPACK_IMPORTED_MODULE_1__.getPageTypeInformation)();
    pageTypeInformation && fetchDisplayPopups(_objectSpread({}, pageTypeInformation));
    fetchDesignPopups({
      pathname: pathname,
      parameter: parameter
    });
  }, []);
  if (!designPopup) return /*#__PURE__*/React.createElement(React.Fragment, null);
  return /*#__PURE__*/React.createElement(_DesignPopup__WEBPACK_IMPORTED_MODULE_2__.DesignPopupItem, _extends({}, designPopup, {
    detailInfo: _objectSpread(_objectSpread({}, designPopup.detailInfo), {}, {
      screenLeftPosition: 0,
      screenTopPosition: 0
    }),
    className: "design-popup__window",
    isWindowPopup: true,
    onDeleteClick: function onDeleteClick(popupNo) {
      deleteDesignPopupBy({
        popupNo: popupNo
      });
    },
    onVisibleTodayClick: function onVisibleTodayClick(popupNo) {
      putVisibleTodayBy({
        popupNo: popupNo,
        shouldHide: true
      });
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesignWindowPopup);

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

/***/ "./src/constants/designPopup.js":
/*!**************************************!*\
  !*** ./src/constants/designPopup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SLIDE_COUNT_MAP": () => (/* binding */ SLIDE_COUNT_MAP),
/* harmony export */   "SLIDE_DIRECTION_MAP": () => (/* binding */ SLIDE_DIRECTION_MAP)
/* harmony export */ });
var SLIDE_COUNT_MAP = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5
};
var SLIDE_DIRECTION_MAP = {
  FIXED: {
    effect: 'fade',
    direction: 'horizontal',
    reverseDirection: false
  },
  RIGHT: {
    effect: 'slide',
    direction: 'horizontal',
    reverseDirection: false
  },
  LEFT: {
    effect: 'slide',
    direction: 'horizontal',
    reverseDirection: true
  },
  UP: {
    effect: 'slide',
    direction: 'vertical',
    reverseDirection: false
  },
  DOWN: {
    effect: 'slide',
    direction: 'vertical',
    reverseDirection: true
  }
};

/***/ }),

/***/ "./src/hooks/useDragAndDrop.js":
/*!*************************************!*\
  !*** ./src/hooks/useDragAndDrop.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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

var useDragAndDrop = function useDragAndDrop(_ref) {
  var initialLeft = _ref.initialLeft,
    initialTop = _ref.initialTop;
  // 드리그 전 포지션 값
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      left: 0,
      top: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    originalPosition = _useState2[0],
    setOriginalPosition = _useState2[1];

  // 실시간
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      left: 0,
      top: 0
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    realTimePosition = _useState4[0],
    setRealTimePosition = _useState4[1];

  // 실제 위치하는 값
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      left: initialLeft,
      top: initialTop
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    position = _useState6[0],
    setPosition = _useState6[1];
  var handleDragStart = function handleDragStart(event) {
    event.stopPropagation();

    // 크롬 초록색 플러스 버튼 아이콘 제거
    event.dataTransfer.effectAllowed = 'move';
    var _originalPosition = _objectSpread({}, originalPosition);
    _originalPosition.left = event.target.offsetLeft;
    _originalPosition.top = event.target.offsetTop;

    // 드래그 시작 전 위치값 저장
    setOriginalPosition(function () {
      return _objectSpread({}, _originalPosition);
    });
    var _realTimePosition = _objectSpread({}, realTimePosition);
    _realTimePosition.left = event.clientX;
    _realTimePosition.top = event.clientY;
    setRealTimePosition(function () {
      return _objectSpread({}, _realTimePosition);
    });
  };
  var handleDrag = function handleDrag(event) {
    event.stopPropagation();
    event.preventDefault();
    var _pos = _objectSpread({}, position);
    var left = event.target.offsetLeft + event.clientX - realTimePosition.left;
    var top = event.target.offsetTop + event.clientY - realTimePosition.top;
    _pos.left = left < 0 ? position.left : left;
    _pos.top = top < 0 ? position.top : top;
    setPosition(function () {
      return _objectSpread({}, _pos);
    });
    var _realTimePosition = _objectSpread({}, realTimePosition);
    _realTimePosition.left = event.clientX;
    _realTimePosition.top = event.clientY;
    setRealTimePosition(function () {
      return _objectSpread({}, _realTimePosition);
    });
  };
  var handleDragOver = function handleDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  };
  var handleDragEnd = function handleDragEnd(event) {
    event.preventDefault();
    event.stopPropagation();
  };
  return {
    handleDragStart: handleDragStart,
    handleDrag: handleDrag,
    handleDragOver: handleDragOver,
    handleDragEnd: handleDragEnd,
    position: position
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDragAndDrop);

/***/ }),

/***/ "./src/utils/design.js":
/*!*****************************!*\
  !*** ./src/utils/design.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPageTypeInformation": () => (/* binding */ getPageTypeInformation)
/* harmony export */ });
// eslint-disable-next-line complexity
var getPageTypeInformation = function getPageTypeInformation() {
  var _URL = new URL(window.location.href),
    pathname = _URL.pathname,
    searchParams = _URL.searchParams;
  var categoryNo = searchParams.get('categoryNo');
  if (pathname.includes('products') && categoryNo) {
    return {
      pageType: 'CATEGORY',
      targetNo: categoryNo
    };
  }
  var eventNo = pathname.split('/').filter(Boolean).at(1);
  if (pathname.includes('event') && eventNo) {
    return {
      pageType: 'EVENT',
      targetNo: eventNo
    };
  }
  var productNo = searchParams.get('productNo');
  if (pathname.includes('product-detail') && productNo) {
    return {
      pageType: 'PRODUCT',
      targetNo: productNo
    };
  }
  if (pathname === '/') {
    return {
      pageType: 'MAIN'
    };
  }
  return null;
};

/***/ }),

/***/ "data:application/font-woff;charset=utf-8;base64, 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":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:application/font-woff;charset=utf-8;base64, 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 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:application/font-woff;charset=utf-8;base64, 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";

/***/ })

}]);
//# sourceMappingURL=default-src_components_DesignPopup_DesignWindowPopup_jsx-data_application_font-woff_charset_u-52e35f.c226260d208dedb37766.bundle.js.map