"use strict";
(self["webpackChunk_shopby_react_skin"] = self["webpackChunk_shopby_react_skin"] || []).push([["default-src_components_Board_index_js-src_components_ListSkeleton_ListSkeleton_jsx"],{

/***/ "./src/components/Board/BoardForm.jsx":
/*!********************************************!*\
  !*** ./src/components/Board/BoardForm.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/SelectBox/SelectBox.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/CharacterCounter/CharacterCounter.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/RatingStar/RatingStar.js");
/* harmony import */ var _shopby_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/shared */ "./node_modules/@shopby/shared/dist/esm/index.js");
/* harmony import */ var _BoardFormCheckboxGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardFormCheckboxGroup */ "./src/components/Board/BoardFormCheckboxGroup.jsx");
/* harmony import */ var _BoardFormImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BoardFormImage */ "./src/components/Board/BoardFormImage.jsx");
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
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var BoardForm = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var _typeSelectorOption$v, _typeSelectorOption$o, _typeSelectorOption$o2, _typeSelectorOption$o4;
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$titleOption = _ref.titleOption,
    titleOption = _ref$titleOption === void 0 ? null : _ref$titleOption,
    _ref$textOption = _ref.textOption,
    textOption = _ref$textOption === void 0 ? null : _ref$textOption,
    _ref$typeSelectorOpti = _ref.typeSelectorOption,
    typeSelectorOption = _ref$typeSelectorOpti === void 0 ? null : _ref$typeSelectorOpti,
    _ref$rateOption = _ref.rateOption,
    rateOption = _ref$rateOption === void 0 ? null : _ref$rateOption,
    _ref$imageFileUploadO = _ref.imageFileUploadOption,
    imageFileUploadOption = _ref$imageFileUploadO === void 0 ? null : _ref$imageFileUploadO,
    _ref$checkboxOption = _ref.checkboxOption,
    checkboxOption = _ref$checkboxOption === void 0 ? null : _ref$checkboxOption,
    ButtonGroup = _ref.ButtonGroup,
    _ref$canAttach = _ref.canAttach,
    canAttach = _ref$canAttach === void 0 ? true : _ref$canAttach;
  var titleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var rateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var textRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var imageFileUploadRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((_typeSelectorOption$v = typeSelectorOption === null || typeSelectorOption === void 0 ? void 0 : typeSelectorOption.value) !== null && _typeSelectorOption$v !== void 0 ? _typeSelectorOption$v : typeSelectorOption === null || typeSelectorOption === void 0 ? void 0 : (_typeSelectorOption$o = typeSelectorOption.options) === null || _typeSelectorOption$o === void 0 ? void 0 : (_typeSelectorOption$o2 = _typeSelectorOption$o.at(0)) === null || _typeSelectorOption$o2 === void 0 ? void 0 : _typeSelectorOption$o2.value),
    _useState2 = _slicedToArray(_useState, 2),
    type = _useState2[0],
    setType = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(titleOption === null || titleOption === void 0 ? void 0 : titleOption.value),
    _useState4 = _slicedToArray(_useState3, 2),
    title = _useState4[0],
    setTitle = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(textOption === null || textOption === void 0 ? void 0 : textOption.value),
    _useState6 = _slicedToArray(_useState5, 2),
    content = _useState6[0],
    setContent = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(rateOption === null || rateOption === void 0 ? void 0 : rateOption.value),
    _useState8 = _slicedToArray(_useState7, 2),
    score = _useState8[0],
    setScore = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(checkboxOption === null || checkboxOption === void 0 ? void 0 : checkboxOption.options),
    _useState10 = _slicedToArray(_useState9, 2),
    checkboxValues = _useState10[0],
    setCheckBoxValues = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(imageFileUploadOption === null || imageFileUploadOption === void 0 ? void 0 : imageFileUploadOption.images),
    _useState12 = _slicedToArray(_useState11, 2),
    images = _useState12[0],
    setImages = _useState12[1];
  var handleTypeSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    var _typeSelectorOption$o3;
    setType(event.currentTarget.value);
    typeSelectorOption === null || typeSelectorOption === void 0 ? void 0 : (_typeSelectorOption$o3 = typeSelectorOption.onSelect) === null || _typeSelectorOption$o3 === void 0 ? void 0 : _typeSelectorOption$o3.call(typeSelectorOption, event);
  }, []);
  var handleTitleChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref2) {
    var _titleOption$onChange;
    var _ref2$character = _ref2.character,
      value = _ref2$character.value,
      count = _ref2$character.count;
    setTitle(value);
    titleOption === null || titleOption === void 0 ? void 0 : (_titleOption$onChange = titleOption.onChange) === null || _titleOption$onChange === void 0 ? void 0 : _titleOption$onChange.call(titleOption, {
      value: value,
      count: count
    });
  }, []);
  var handleContentChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref3) {
    var _textOption$onChange;
    var _ref3$character = _ref3.character,
      value = _ref3$character.value,
      count = _ref3$character.count;
    setContent(value);
    textOption === null || textOption === void 0 ? void 0 : (_textOption$onChange = textOption.onChange) === null || _textOption$onChange === void 0 ? void 0 : _textOption$onChange.call(textOption, {
      value: value,
      count: count
    });
  }, []);
  var handleCheckboxChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    var _checkboxOption$onCha;
    var _event$currentTarget = event.currentTarget,
      value = _event$currentTarget.value,
      checked = _event$currentTarget.checked;
    setCheckBoxValues(function (prev) {
      return prev.map(function (checkboxOption) {
        if (value === checkboxOption.value) {
          return _objectSpread(_objectSpread({}, checkboxOption), {}, {
            checked: checked
          });
        }
        return checkboxOption;
      });
    });
    checkboxOption === null || checkboxOption === void 0 ? void 0 : (_checkboxOption$onCha = checkboxOption.onChange) === null || _checkboxOption$onCha === void 0 ? void 0 : _checkboxOption$onCha.call(checkboxOption, event);
  }, []);
  var handleImagesChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (selectedImages) {
    var _imageFileUploadOptio;
    setImages(selectedImages);
    imageFileUploadOption === null || imageFileUploadOption === void 0 ? void 0 : (_imageFileUploadOptio = imageFileUploadOption.onChange) === null || _imageFileUploadOptio === void 0 ? void 0 : _imageFileUploadOptio.call(imageFileUploadOption, selectedImages);
  }, []);
  var handleImageUploadButtonClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    imageFileUploadRef.current.click();
  }, [imageFileUploadRef === null || imageFileUploadRef === void 0 ? void 0 : imageFileUploadRef.current]);
  var handleRatingStarClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref4) {
    var target = _ref4.target,
      offsetX = _ref4.nativeEvent.offsetX;
    var ratingStarElement = target.getBoundingClientRect();
    var _score = (0,_shopby_shared__WEBPACK_IMPORTED_MODULE_1__.calculateRatingScoreByCurrentWidth)({
      offsetX: offsetX,
      width: ratingStarElement.width
    });
    setScore(_score);
  }, []);
  var resetFormData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setType(typeSelectorOption === null || typeSelectorOption === void 0 ? void 0 : typeSelectorOption.value);
    setTitle(titleOption === null || titleOption === void 0 ? void 0 : titleOption.value);
    setContent(textOption === null || textOption === void 0 ? void 0 : textOption.value);
    setScore(rateOption === null || rateOption === void 0 ? void 0 : rateOption.value);
    setCheckBoxValues(checkboxOption === null || checkboxOption === void 0 ? void 0 : checkboxOption.options);
    setImages(imageFileUploadOption === null || imageFileUploadOption === void 0 ? void 0 : imageFileUploadOption.images);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, function () {
    return {
      /**
       * @param {'type' | 'title' | 'rate' | 'text' | 'optionSelector' | 'secret' | 'attachment'} type
       */
      focus: function focus(type) {
        var _ref5;
        (_ref5 = "".concat(type, "Ref")) === null || _ref5 === void 0 ? void 0 : _ref5.current.focus();
      },
      get formData() {
        return {
          type: type,
          title: title,
          rate: score,
          content: content,
          checkboxValues: checkboxValues,
          images: images !== null && images !== void 0 ? images : []
        };
      },
      resetFormData: resetFormData
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "board-form l-panel ".concat(className !== null && className !== void 0 ? className : '')
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__["default"], {
    shows: typeSelectorOption && (typeSelectorOption === null || typeSelectorOption === void 0 ? void 0 : (_typeSelectorOption$o4 = typeSelectorOption.options) === null || _typeSelectorOption$o4 === void 0 ? void 0 : _typeSelectorOption$o4.length) > 0,
    TruthyComponent: /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
      className: "board-form__type-selector ".concat(typeSelectorOption !== null && typeSelectorOption !== void 0 && typeSelectorOption.disabled ? 'board-form__type-selector--disabled' : '')
    }, typeSelectorOption, {
      value: type,
      onSelect: handleTypeSelect
    }))
  }), /*#__PURE__*/React.createElement("div", {
    className: "board-form__top"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__["default"], {
    shows: titleOption,
    TruthyComponent: /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
      ref: titleRef,
      className: "board-form__title",
      limitCount: {
        character: 50
      }
    }, titleOption, {
      valid: "NO_COMMON_SPECIAL",
      value: title,
      onChange: handleTitleChange
    }))
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__["default"], {
    shows: rateOption,
    TruthyComponent: /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
      ref: rateRef,
      className: "board-form__rating-star"
    }, rateOption, {
      onClick: handleRatingStarClick,
      score: score
    }))
  })), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
    ref: textRef,
    className: "board-form__text",
    limitCount: {
      character: 1000
    },
    textType: "TEXT_AREA",
    valid: "NO_COMMON_SPECIAL"
  }, textOption, {
    value: content,
    onChange: handleContentChange
  })), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__["default"], {
    shows: (checkboxOption === null || checkboxOption === void 0 ? void 0 : checkboxOption.options.length) > 0,
    TruthyComponent: /*#__PURE__*/React.createElement(_BoardFormCheckboxGroup__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, checkboxOption, {
      options: checkboxValues,
      onChange: handleCheckboxChange
    }))
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__["default"], {
    shows: imageFileUploadOption,
    TruthyComponent: /*#__PURE__*/React.createElement(_BoardFormImage__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
      ref: imageFileUploadRef
    }, imageFileUploadOption, {
      images: images,
      canAttach: canAttach,
      onChange: handleImagesChange,
      onClick: handleImageUploadButtonClick
    }))
  }), /*#__PURE__*/React.createElement("div", {
    className: "board-form__buttons"
  }, /*#__PURE__*/React.createElement(ButtonGroup, null)));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoardForm);
BoardForm.displayName = 'BoardForm';
BoardForm.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_8__.string,
  titleOption: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.shape)({
    value: prop_types__WEBPACK_IMPORTED_MODULE_8__.string,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_8__.func,
    placeholder: prop_types__WEBPACK_IMPORTED_MODULE_8__.string
  }),
  textOption: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.shape)({
    value: prop_types__WEBPACK_IMPORTED_MODULE_8__.string,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_8__.func,
    usesCounter: prop_types__WEBPACK_IMPORTED_MODULE_8__.bool,
    placeholder: prop_types__WEBPACK_IMPORTED_MODULE_8__.string
  }),
  typeSelectorOption: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.shape)({
    value: prop_types__WEBPACK_IMPORTED_MODULE_8__.string,
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_8__.bool,
    options: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_8__.shape)({
      label: prop_types__WEBPACK_IMPORTED_MODULE_8__.string,
      value: prop_types__WEBPACK_IMPORTED_MODULE_8__.string
    })),
    onSelect: prop_types__WEBPACK_IMPORTED_MODULE_8__.func
  }),
  checkboxOption: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.shape)({
    title: prop_types__WEBPACK_IMPORTED_MODULE_8__.string,
    options: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_8__.shape)({
      checked: prop_types__WEBPACK_IMPORTED_MODULE_8__.bool,
      label: prop_types__WEBPACK_IMPORTED_MODULE_8__.string,
      value: prop_types__WEBPACK_IMPORTED_MODULE_8__.string
    })),
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_8__.func
  }),
  rateOption: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.shape)({
    value: prop_types__WEBPACK_IMPORTED_MODULE_8__.number,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_8__.func
  }),
  imageFileUploadOption: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.shape)({
    configuration: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.shape)({
      LIMIT_MEGA_BYTES: prop_types__WEBPACK_IMPORTED_MODULE_8__.number,
      LIMIT_COUNT: prop_types__WEBPACK_IMPORTED_MODULE_8__.number
    }),
    images: (0,prop_types__WEBPACK_IMPORTED_MODULE_8__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_8__.shape)({
      imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_8__.string,
      originName: prop_types__WEBPACK_IMPORTED_MODULE_8__.string
    })),
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_8__.func,
    onUpload: prop_types__WEBPACK_IMPORTED_MODULE_8__.func
  }),
  ButtonGroup: prop_types__WEBPACK_IMPORTED_MODULE_8__.func,
  canAttach: prop_types__WEBPACK_IMPORTED_MODULE_8__.bool
};

/***/ }),

/***/ "./src/components/Board/BoardFormCheckboxGroup.jsx":
/*!*********************************************************!*\
  !*** ./src/components/Board/BoardFormCheckboxGroup.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Checkbox/Checkbox.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var BoardFormCheckboxGroup = function BoardFormCheckboxGroup(_ref) {
  var options = _ref.options,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? '' : _ref$title,
    onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement("div", {
    className: "board-form__checkbox-group"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_0__["default"], {
    shows: title,
    TruthyComponent: /*#__PURE__*/React.createElement("p", {
      className: "board-form__checkbox-title"
    }, title)
  }), options.map(function (option) {
    return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      key: option.value,
      className: "board-form__checkbox"
    }, option, {
      onChange: onChange
    }));
  }));
};
BoardFormCheckboxGroup.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  options: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_2__.shape)({
    checked: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
    label: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    value: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  })),
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2__.func
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoardFormCheckboxGroup);

/***/ }),

/***/ "./src/components/Board/BoardFormImage.jsx":
/*!*************************************************!*\
  !*** ./src/components/Board/BoardFormImage.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _constants_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/image */ "./src/constants/image.js");
/* harmony import */ var _ImageFileUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ImageFileUpload */ "./src/components/ImageFileUpload/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _excluded = ["configuration", "onClick", "images", "onChange", "canAttach"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var BoardFormImage = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var configuration = _ref.configuration,
    onClick = _ref.onClick,
    _ref$images = _ref.images,
    images = _ref$images === void 0 ? [] : _ref$images,
    onChange = _ref.onChange,
    _ref$canAttach = _ref.canAttach,
    canAttach = _ref$canAttach === void 0 ? true : _ref$canAttach,
    props = _objectWithoutProperties(_ref, _excluded);
  var updateImages = function updateImages(images) {
    onChange === null || onChange === void 0 ? void 0 : onChange(images);
  };
  var handleImagesChange = function handleImagesChange(selectedImages) {
    if (!selectedImages.length) return;
    updateImages([].concat(_toConsumableArray(images), _toConsumableArray(selectedImages)));
  };
  var handleImageDelete = function handleImageDelete(imageUrl) {
    if (!imageUrl) return;
    updateImages(images.filter(function (image) {
      return image.imageUrl !== imageUrl;
    }));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", {
    className: "board-form__image-files"
  }, images.map(function (image, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index,
      id: "".concat(index, "_").concat(image.originName),
      className: "board-form__image"
    }, /*#__PURE__*/React.createElement("img", {
      src: "".concat(image.imageUrl, "?").concat(_constants_image__WEBPACK_IMPORTED_MODULE_1__.BOARD_IMAGE.THUMB_NAIL_SIZE),
      alt: image.originName,
      loading: "lazy"
    }), /*#__PURE__*/React.createElement("button", {
      className: "delete",
      onClick: function onClick() {
        return handleImageDelete(image.imageUrl);
      }
    }));
  })), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], {
    shows: canAttach,
    TruthyComponent: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_ImageFileUpload__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      className: "board-form__file-upload",
      ref: ref
    }, props, {
      images: images,
      onChange: handleImagesChange,
      limitFileSizeInMB: configuration.LIMIT_MEGA_BYTES,
      limitCount: configuration.LIMIT_COUNT
    })), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "board-form__upload-btn",
      label: "\uC0AC\uC9C4 \uCCA8\uBD80\uD558\uAE30",
      onClick: onClick
    }), /*#__PURE__*/React.createElement("p", {
      className: "board-form__notice-text"
    }, "\uC5C5\uB85C\uB4DC \uC6A9\uB7C9\uC740 ", configuration.LIMIT_MEGA_BYTES, "MB \uC774\uD558\uB85C\uB9CC \uAC00\uB2A5 \uD569\uB2C8\uB2E4."))
  }));
});
BoardFormImage.displayName = 'BoardFormImage';
BoardFormImage.propTypes = {
  configuration: (0,prop_types__WEBPACK_IMPORTED_MODULE_5__.shape)({
    LIMIT_MEGA_BYTES: prop_types__WEBPACK_IMPORTED_MODULE_5__.number,
    LIMIT_COUNT: prop_types__WEBPACK_IMPORTED_MODULE_5__.number
  }),
  images: (0,prop_types__WEBPACK_IMPORTED_MODULE_5__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_5__.shape)({
    imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_5__.string,
    originName: prop_types__WEBPACK_IMPORTED_MODULE_5__.string
  })),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_5__.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5__.func,
  canAttach: prop_types__WEBPACK_IMPORTED_MODULE_5__.bool
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoardFormImage);

/***/ }),

/***/ "./src/components/Board/BoardFormModification.jsx":
/*!********************************************************!*\
  !*** ./src/components/Board/BoardFormModification.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _BoardForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardForm */ "./src/components/Board/BoardForm.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _excluded = ["className", "modifyButtonLabel", "cancelButtonLabel", "onModify", "onCancel"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var BoardFormModification = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$modifyButtonLabe = _ref.modifyButtonLabel,
    modifyButtonLabel = _ref$modifyButtonLabe === void 0 ? '수정' : _ref$modifyButtonLabe,
    _ref$cancelButtonLabe = _ref.cancelButtonLabel,
    cancelButtonLabel = _ref$cancelButtonLabe === void 0 ? '취소' : _ref$cancelButtonLabe,
    onModify = _ref.onModify,
    onCancel = _ref.onCancel,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_BoardForm__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    className: "board-form--modification ".concat(className !== null && className !== void 0 ? className : ''),
    ref: ref
  }, props, {
    ButtonGroup: function ButtonGroup() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
        theme: "caution",
        label: modifyButtonLabel,
        onClick: onModify
      }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__["default"], {
        theme: "dark",
        label: cancelButtonLabel,
        onClick: onCancel
      }));
    }
  }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoardFormModification);
BoardFormModification.displayName = 'BoardFormModification';
BoardFormModification.propTypes = {
  onModify: prop_types__WEBPACK_IMPORTED_MODULE_3__.func.isRequired,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_3__.func.isRequired,
  modifyButtonLabel: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  cancelButtonLabel: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  titleOption: (0,prop_types__WEBPACK_IMPORTED_MODULE_3__.shape)({
    value: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_3__.func,
    placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3__.string
  }),
  textOption: (0,prop_types__WEBPACK_IMPORTED_MODULE_3__.shape)({
    value: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_3__.func,
    usesCounter: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool,
    placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3__.string
  }),
  typeSelectorOption: (0,prop_types__WEBPACK_IMPORTED_MODULE_3__.shape)({
    value: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool,
    options: (0,prop_types__WEBPACK_IMPORTED_MODULE_3__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_3__.shape)({
      label: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
      value: prop_types__WEBPACK_IMPORTED_MODULE_3__.string
    })),
    onSelect: prop_types__WEBPACK_IMPORTED_MODULE_3__.func
  }),
  checkboxOption: (0,prop_types__WEBPACK_IMPORTED_MODULE_3__.shape)({
    title: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    options: (0,prop_types__WEBPACK_IMPORTED_MODULE_3__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_3__.shape)({
      checked: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool,
      label: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
      value: prop_types__WEBPACK_IMPORTED_MODULE_3__.string
    })),
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_3__.func
  }),
  rateOption: (0,prop_types__WEBPACK_IMPORTED_MODULE_3__.shape)({
    value: prop_types__WEBPACK_IMPORTED_MODULE_3__.number,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_3__.func
  }),
  imageFileUploadOption: (0,prop_types__WEBPACK_IMPORTED_MODULE_3__.shape)({
    configuration: (0,prop_types__WEBPACK_IMPORTED_MODULE_3__.shape)({
      LIMIT_MEGA_BYTES: prop_types__WEBPACK_IMPORTED_MODULE_3__.number,
      LIMIT_COUNT: prop_types__WEBPACK_IMPORTED_MODULE_3__.number
    }),
    images: (0,prop_types__WEBPACK_IMPORTED_MODULE_3__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_3__.shape)({
      imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
      originName: prop_types__WEBPACK_IMPORTED_MODULE_3__.string
    })),
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_3__.func,
    onUpload: prop_types__WEBPACK_IMPORTED_MODULE_3__.func
  })
};

/***/ }),

/***/ "./src/components/Board/BoardFormRegistration.jsx":
/*!********************************************************!*\
  !*** ./src/components/Board/BoardFormRegistration.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _constants_rate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/rate */ "./src/constants/rate.js");
/* harmony import */ var _BoardForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardForm */ "./src/components/Board/BoardForm.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");





var makeInitialState = function makeInitialState(initialState, use, option) {
  if (option) {
    return option;
  }
  if (use) {
    return initialState;
  }
  return option;
};
var BoardFormRegistration = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$usesTitle = _ref.usesTitle,
    usesTitle = _ref$usesTitle === void 0 ? false : _ref$usesTitle,
    _ref$usesText = _ref.usesText,
    usesText = _ref$usesText === void 0 ? false : _ref$usesText,
    _ref$usesTextCounter = _ref.usesTextCounter,
    usesTextCounter = _ref$usesTextCounter === void 0 ? false : _ref$usesTextCounter,
    _ref$usesRate = _ref.usesRate,
    usesRate = _ref$usesRate === void 0 ? false : _ref$usesRate,
    _ref$submitButtonLabe = _ref.submitButtonLabel,
    submitButtonLabel = _ref$submitButtonLabe === void 0 ? '등록' : _ref$submitButtonLabe,
    onSubmit = _ref.onSubmit,
    onCancel = _ref.onCancel,
    _ref$titleOption = _ref.titleOption,
    titleOption = _ref$titleOption === void 0 ? null : _ref$titleOption,
    _ref$textOption = _ref.textOption,
    textOption = _ref$textOption === void 0 ? null : _ref$textOption,
    _ref$typeSelectorOpti = _ref.typeSelectorOption,
    typeSelectorOption = _ref$typeSelectorOpti === void 0 ? null : _ref$typeSelectorOpti,
    _ref$rateOption = _ref.rateOption,
    rateOption = _ref$rateOption === void 0 ? null : _ref$rateOption,
    _ref$imageFileUploadO = _ref.imageFileUploadOption,
    imageFileUploadOption = _ref$imageFileUploadO === void 0 ? null : _ref$imageFileUploadO,
    _ref$checkboxOption = _ref.checkboxOption,
    checkboxOption = _ref$checkboxOption === void 0 ? null : _ref$checkboxOption,
    _ref$canAttach = _ref.canAttach,
    canAttach = _ref$canAttach === void 0 ? true : _ref$canAttach;
  var _titleOption = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return makeInitialState({
      value: '',
      placeholder: '제목을 입력하세요.'
    }, usesTitle, titleOption);
  }, [titleOption]);
  var _textOption = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return makeInitialState({
      value: '',
      usesCounter: usesTextCounter
    }, usesText, textOption);
  }, [textOption]);
  var _rateOption = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return makeInitialState({
      value: _constants_rate__WEBPACK_IMPORTED_MODULE_1__.RATING_STAR.LIMIT_SCORE
    }, usesRate, rateOption);
  }, [rateOption]);
  return /*#__PURE__*/React.createElement(_BoardForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "board-form--registration ".concat(className !== null && className !== void 0 ? className : ''),
    ref: ref,
    ButtonGroup: function ButtonGroup() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], {
        theme: "dark",
        label: "\uCDE8\uC18C",
        onClick: onCancel
      }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], {
        theme: "caution",
        label: submitButtonLabel,
        onClick: onSubmit
      }));
    },
    titleOption: _titleOption,
    textOption: _textOption,
    typeSelectorOption: typeSelectorOption,
    checkboxOption: checkboxOption,
    rateOption: _rateOption,
    canAttach: canAttach,
    imageFileUploadOption: imageFileUploadOption
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoardFormRegistration);
BoardFormRegistration.displayName = 'BoardFormRegistration';
BoardFormRegistration.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4__.string,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_4__.func.isRequired,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_4__.func.isRequired,
  submitButtonLabel: prop_types__WEBPACK_IMPORTED_MODULE_4__.string,
  usesTitle: prop_types__WEBPACK_IMPORTED_MODULE_4__.bool,
  usesText: prop_types__WEBPACK_IMPORTED_MODULE_4__.bool,
  usesTextCounter: prop_types__WEBPACK_IMPORTED_MODULE_4__.bool,
  usesRate: prop_types__WEBPACK_IMPORTED_MODULE_4__.bool,
  titleOption: (0,prop_types__WEBPACK_IMPORTED_MODULE_4__.shape)({
    value: prop_types__WEBPACK_IMPORTED_MODULE_4__.string,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_4__.func,
    placeholder: prop_types__WEBPACK_IMPORTED_MODULE_4__.string
  }),
  textOption: (0,prop_types__WEBPACK_IMPORTED_MODULE_4__.shape)({
    value: prop_types__WEBPACK_IMPORTED_MODULE_4__.string,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_4__.func,
    usesCounter: prop_types__WEBPACK_IMPORTED_MODULE_4__.bool,
    placeholder: prop_types__WEBPACK_IMPORTED_MODULE_4__.string
  }),
  typeSelectorOption: (0,prop_types__WEBPACK_IMPORTED_MODULE_4__.shape)({
    value: prop_types__WEBPACK_IMPORTED_MODULE_4__.string,
    options: (0,prop_types__WEBPACK_IMPORTED_MODULE_4__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_4__.shape)({
      label: prop_types__WEBPACK_IMPORTED_MODULE_4__.string,
      value: prop_types__WEBPACK_IMPORTED_MODULE_4__.string
    }).isRequired),
    onSelect: prop_types__WEBPACK_IMPORTED_MODULE_4__.func
  }),
  checkboxOption: (0,prop_types__WEBPACK_IMPORTED_MODULE_4__.shape)({
    title: prop_types__WEBPACK_IMPORTED_MODULE_4__.string,
    options: (0,prop_types__WEBPACK_IMPORTED_MODULE_4__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_4__.shape)({
      checked: prop_types__WEBPACK_IMPORTED_MODULE_4__.bool,
      label: prop_types__WEBPACK_IMPORTED_MODULE_4__.string,
      value: prop_types__WEBPACK_IMPORTED_MODULE_4__.string
    })),
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_4__.func
  }),
  rateOption: (0,prop_types__WEBPACK_IMPORTED_MODULE_4__.shape)({
    value: prop_types__WEBPACK_IMPORTED_MODULE_4__.number,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_4__.func
  }),
  imageFileUploadOption: (0,prop_types__WEBPACK_IMPORTED_MODULE_4__.shape)({
    configuration: (0,prop_types__WEBPACK_IMPORTED_MODULE_4__.shape)({
      LIMIT_MEGA_BYTES: prop_types__WEBPACK_IMPORTED_MODULE_4__.number,
      LIMIT_COUNT: prop_types__WEBPACK_IMPORTED_MODULE_4__.number
    }),
    images: (0,prop_types__WEBPACK_IMPORTED_MODULE_4__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_4__.shape)({
      imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_4__.string,
      originName: prop_types__WEBPACK_IMPORTED_MODULE_4__.string
    })),
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_4__.func,
    onUpload: prop_types__WEBPACK_IMPORTED_MODULE_4__.func
  }),
  canAttach: prop_types__WEBPACK_IMPORTED_MODULE_4__.bool
};

/***/ }),

/***/ "./src/components/Board/InquiryItem.jsx":
/*!**********************************************!*\
  !*** ./src/components/Board/InquiryItem.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Icon/Icon.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/AngleTopDown/AngleTopDown.js");
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/Button/Button.js");
/* harmony import */ var _FoldingImagesByOnRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FoldingImagesByOnRow */ "./src/components/FoldingImagesByOnRow/index.js");
/* harmony import */ var _Sanitized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Sanitized */ "./src/components/Sanitized/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var InquiryItem = function InquiryItem(_ref) {
  var _ref$inquiryTypeLabel = _ref.inquiryTypeLabel,
    inquiryTypeLabel = _ref$inquiryTypeLabel === void 0 ? '' : _ref$inquiryTypeLabel,
    _ref$memberId = _ref.memberId,
    memberId = _ref$memberId === void 0 ? '' : _ref$memberId,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? '' : _ref$title,
    _ref$content = _ref.content,
    content = _ref$content === void 0 ? '' : _ref$content,
    _ref$isReplied = _ref.isReplied,
    isReplied = _ref$isReplied === void 0 ? false : _ref$isReplied,
    _ref$registerDate = _ref.registerDate,
    registerDate = _ref$registerDate === void 0 ? '' : _ref$registerDate,
    _ref$images = _ref.images,
    images = _ref$images === void 0 ? [] : _ref$images,
    _ref$answers = _ref.answers,
    answers = _ref$answers === void 0 ? [] : _ref$answers,
    _ref$canModify = _ref.canModify,
    canModify = _ref$canModify === void 0 ? true : _ref$canModify,
    _ref$isMine = _ref.isMine,
    isMine = _ref$isMine === void 0 ? false : _ref$isMine,
    _ref$isSecreted = _ref.isSecreted,
    isSecreted = _ref$isSecreted === void 0 ? false : _ref$isSecreted,
    onModify = _ref.onModify,
    onDelete = _ref.onDelete;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isActive = _useState2[0],
    setIsActive = _useState2[1];
  var _useMemo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
      if (isReplied) {
        return {
          modifier: 'answered',
          label: '답변완료'
        };
      }
      return {
        modifier: 'ready',
        label: '답변대기'
      };
    }, [isReplied]),
    inquiryStatusModifier = _useMemo.modifier,
    inquiryStatusLabel = _useMemo.label;
  var _canModify = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (canModify) return true;
    if (isReplied) return false;
    if (isMine) return true;
    return false;
  }, [isReplied, canModify, isMine]);
  var handleModifyButtonClick = function handleModifyButtonClick() {
    onModify();
  };
  var handleDeleteButtonClick = function handleDeleteButtonClick() {
    onDelete();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "inquiry-item ".concat(isActive ? 'is-active' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "inquiry-item__top"
  }, inquiryTypeLabel && /*#__PURE__*/React.createElement("p", null, "\uBB38\uC758\uC720\uD615 -  ".concat(inquiryTypeLabel)), /*#__PURE__*/React.createElement("p", null, memberId), /*#__PURE__*/React.createElement("p", {
    className: "inquiry-item__date"
  }, registerDate)), /*#__PURE__*/React.createElement("div", {
    className: "inquiry-item__bottom"
  }, /*#__PURE__*/React.createElement(_FoldingImagesByOnRow__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isActive: isActive,
    images: images.map(function (_ref2) {
      var imageUrl = _ref2.imageUrl,
        originFileName = _ref2.originFileName;
      return {
        src: imageUrl,
        name: originFileName
      };
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "inquiry-item__content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inquiry-item__info"
  }, /*#__PURE__*/React.createElement("p", {
    className: "inquiry-item__status-label inquiry-item__status-label--".concat(inquiryStatusModifier)
  }, inquiryStatusLabel), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], {
    shows: isSecreted,
    TruthyComponent: /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "lock"
    })
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], {
    shows: isSecreted && !isMine,
    TruthyComponent: '비밀글입니다.',
    FalsyComponent: /*#__PURE__*/React.createElement("p", {
      className: "inquiry-item__title"
    }, title)
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], {
    shows: !(isSecreted && !isMine),
    TruthyComponent: /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "inquiry-item__angle-top-down",
      onToggle: function onToggle() {
        return setIsActive(function (prev) {
          return !prev;
        });
      }
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "inquiry-item__text inquiry-item__text--question"
  }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "q"
  }), /*#__PURE__*/React.createElement("div", {
    className: "inquiry-item__qna-text editor"
  }, /*#__PURE__*/React.createElement(_Sanitized__WEBPACK_IMPORTED_MODULE_2__["default"], {
    html: content
  }))), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], {
    shows: _canModify,
    TruthyComponent: /*#__PURE__*/React.createElement("div", {
      className: "board-form__buttons--small"
    }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: "\uC218\uC815",
      onClick: handleModifyButtonClick
    }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: "\uC0AD\uC81C",
      onClick: handleDeleteButtonClick
    }))
  }), /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_3__["default"], {
    shows: answers.length > 0,
    TruthyComponent: answers.map(function (_ref3, index) {
      var no = _ref3.no,
        content = _ref3.content,
        registerYmdt = _ref3.registerYmdt;
      return /*#__PURE__*/React.createElement("div", {
        key: "".concat(no, "-").concat(index),
        className: 'inquiry-item__text inquiry-item__text--answer'
      }, /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "a"
      }), /*#__PURE__*/React.createElement("div", {
        className: "inquiry-item__qna-text"
      }, /*#__PURE__*/React.createElement(_Sanitized__WEBPACK_IMPORTED_MODULE_2__["default"], {
        html: content
      }), /*#__PURE__*/React.createElement("span", {
        className: "inquiry-item__date"
      }, "\uB2F5\uBCC0\uC77C : ", registerYmdt)));
    })
  }))));
};
InquiryItem.propTypes = {
  onModify: prop_types__WEBPACK_IMPORTED_MODULE_7__.func.isRequired,
  onDelete: prop_types__WEBPACK_IMPORTED_MODULE_7__.func.isRequired,
  memberId: prop_types__WEBPACK_IMPORTED_MODULE_7__.string,
  inquiryTypeLabel: prop_types__WEBPACK_IMPORTED_MODULE_7__.string,
  isReplied: prop_types__WEBPACK_IMPORTED_MODULE_7__.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_7__.string,
  content: prop_types__WEBPACK_IMPORTED_MODULE_7__.string,
  registerDate: prop_types__WEBPACK_IMPORTED_MODULE_7__.string,
  images: (0,prop_types__WEBPACK_IMPORTED_MODULE_7__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_7__.shape)({
    imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_7__.string,
    originFileName: prop_types__WEBPACK_IMPORTED_MODULE_7__.string
  })),
  isMine: prop_types__WEBPACK_IMPORTED_MODULE_7__.bool,
  isSecreted: prop_types__WEBPACK_IMPORTED_MODULE_7__.bool,
  canModify: prop_types__WEBPACK_IMPORTED_MODULE_7__.bool,
  answers: (0,prop_types__WEBPACK_IMPORTED_MODULE_7__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_7__.shape)({
    no: prop_types__WEBPACK_IMPORTED_MODULE_7__.number,
    content: prop_types__WEBPACK_IMPORTED_MODULE_7__.string,
    registerYmdt: prop_types__WEBPACK_IMPORTED_MODULE_7__.string
  })),
  canAttach: prop_types__WEBPACK_IMPORTED_MODULE_7__.bool
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InquiryItem);

/***/ }),

/***/ "./src/components/Board/index.js":
/*!***************************************!*\
  !*** ./src/components/Board/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardFormModification": () => (/* reexport safe */ _BoardFormModification__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "BoardFormRegistration": () => (/* reexport safe */ _BoardFormRegistration__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "InquiryItem": () => (/* reexport safe */ _InquiryItem__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _BoardFormRegistration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoardFormRegistration */ "./src/components/Board/BoardFormRegistration.jsx");
/* harmony import */ var _BoardFormModification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardFormModification */ "./src/components/Board/BoardFormModification.jsx");
/* harmony import */ var _InquiryItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InquiryItem */ "./src/components/Board/InquiryItem.jsx");




/***/ }),

/***/ "./src/components/FoldingImagesByOnRow/FoldingImagesByOneRow.jsx":
/*!***********************************************************************!*\
  !*** ./src/components/FoldingImagesByOnRow/FoldingImagesByOneRow.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/common/VisibleComponent/VisibleComponent.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var FoldingImagesByOneRow = function FoldingImagesByOneRow(_ref) {
  var _useMemo;
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$isActive = _ref.isActive,
    isActive = _ref$isActive === void 0 ? false : _ref$isActive,
    _ref$images = _ref.images,
    images = _ref$images === void 0 ? [] : _ref$images;
  var imageCount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return images.length;
  }, [images]);
  var displayImages = (_useMemo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var _images$at;
    return isActive ? images : [(_images$at = images === null || images === void 0 ? void 0 : images.at(0)) !== null && _images$at !== void 0 ? _images$at : ''];
  }, [images, isActive])) !== null && _useMemo !== void 0 ? _useMemo : [];
  return /*#__PURE__*/React.createElement(_shopby_react_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
    shows: images.length > 0,
    TruthyComponent: /*#__PURE__*/React.createElement("div", {
      className: "folding-images-by-one-row ".concat(isActive ? 'is-active' : '', " ").concat(className)
    }, /*#__PURE__*/React.createElement("ul", {
      className: "folding-images-by-one-row__image-list"
    }, displayImages.map(function (_ref2, index) {
      var src = _ref2.src,
        name = _ref2.name;
      return /*#__PURE__*/React.createElement("li", {
        key: "".concat(name, "_").concat(index)
      }, /*#__PURE__*/React.createElement("img", {
        src: src,
        alt: name
      }));
    })), /*#__PURE__*/React.createElement("span", {
      className: "folding-images-by-one-row__image-count"
    }, imageCount))
  });
};
FoldingImagesByOneRow.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  images: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_2__.shape)({
    src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    name: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FoldingImagesByOneRow);

/***/ }),

/***/ "./src/components/FoldingImagesByOnRow/index.js":
/*!******************************************************!*\
  !*** ./src/components/FoldingImagesByOnRow/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FoldingImagesByOneRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FoldingImagesByOneRow */ "./src/components/FoldingImagesByOnRow/FoldingImagesByOneRow.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_FoldingImagesByOneRow__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/ImageFileUpload/ImageFileUpload.jsx":
/*!************************************************************!*\
  !*** ./src/components/ImageFileUpload/ImageFileUpload.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopby_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopby/react-components */ "./node_modules/@shopby/react-components/dist/esm/storage/ImageFileProvider/ImageFileProvider.js");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorBoundary */ "./src/components/ErrorBoundary/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var ImageFileUpload = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var _ref$images = _ref.images,
    images = _ref$images === void 0 ? [] : _ref$images,
    _ref$limitCount = _ref.limitCount,
    limitCount = _ref$limitCount === void 0 ? Infinity : _ref$limitCount,
    _ref$limitFileSizeInM = _ref.limitFileSizeInMB,
    limitFileSizeInMB = _ref$limitFileSizeInM === void 0 ? Infinity : _ref$limitFileSizeInM,
    verifyImageFiles = _ref.verifyImageFiles,
    onChange = _ref.onChange,
    _ref$accept = _ref.accept,
    accept = _ref$accept === void 0 ? 'image/png,image/jpeg,image/gif,image/jpg,image/bmp' : _ref$accept;
  var _useImageFileActionCo = (0,_shopby_react_components__WEBPACK_IMPORTED_MODULE_2__.useImageFileActionContext)(),
    postImages = _useImageFileActionCo.postImages;
  var _useErrorBoundaryActi = (0,_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__.useErrorBoundaryActionContext)(),
    catchError = _useErrorBoundaryActi.catchError;
  var handleInputChange = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var files, _yield$postImages, data, fulfilledImages;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            files = event.target.files;
            verifyImageFiles === null || verifyImageFiles === void 0 ? void 0 : verifyImageFiles(files);
            _context.next = 5;
            return postImages({
              files: files,
              images: images,
              limitFileSizeInMegaBytes: limitFileSizeInMB,
              limitCount: limitCount
            });
          case 5:
            _yield$postImages = _context.sent;
            data = _yield$postImages.data;
            fulfilledImages = data.filter(function (_ref3) {
              var status = _ref3.status;
              return status === 'fulfilled';
            }).map(function (_ref4) {
              var value = _ref4.value;
              return value;
            });
            onChange === null || onChange === void 0 ? void 0 : onChange(fulfilledImages);
            ref.current.value = '';
            _context.next = 15;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            catchError(_context.t0);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 12]]);
    }));
    return function handleInputChange(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("input", {
    hidden: true,
    ref: ref,
    type: "file",
    multiple: true,
    accept: accept,
    onChange: handleInputChange
  });
});
ImageFileUpload.displayName = 'ImageFileUpload';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageFileUpload);
ImageFileUpload.propTypes = {
  images: (0,prop_types__WEBPACK_IMPORTED_MODULE_3__.arrayOf)((0,prop_types__WEBPACK_IMPORTED_MODULE_3__.shape)({
    imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    originName: prop_types__WEBPACK_IMPORTED_MODULE_3__.string
  })),
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3__.func,
  verifyImageFiles: prop_types__WEBPACK_IMPORTED_MODULE_3__.func,
  limitCount: prop_types__WEBPACK_IMPORTED_MODULE_3__.number,
  limitFileSizeInMB: prop_types__WEBPACK_IMPORTED_MODULE_3__.number,
  accept: prop_types__WEBPACK_IMPORTED_MODULE_3__.string
};

/***/ }),

/***/ "./src/components/ImageFileUpload/index.js":
/*!*************************************************!*\
  !*** ./src/components/ImageFileUpload/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImageFileUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageFileUpload */ "./src/components/ImageFileUpload/ImageFileUpload.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ImageFileUpload__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/***/ "./src/constants/image.js":
/*!********************************!*\
  !*** ./src/constants/image.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOARD_IMAGE": () => (/* binding */ BOARD_IMAGE),
/* harmony export */   "PERSONAL_INQUIRY_IMAGE": () => (/* binding */ PERSONAL_INQUIRY_IMAGE),
/* harmony export */   "REVIEW_IMAGE": () => (/* binding */ REVIEW_IMAGE)
/* harmony export */ });
var BOARD_IMAGE = {
  THUMB_NAIL_SIZE: '100x100'
};
var REVIEW_IMAGE = {
  LIMIT_COUNT: 10,
  LIMIT_MEGA_BYTES: 5
};
var PERSONAL_INQUIRY_IMAGE = {
  LIMIT_COUNT: 10,
  LIMIT_MEGA_BYTES: 5
};

/***/ }),

/***/ "./src/constants/rate.js":
/*!*******************************!*\
  !*** ./src/constants/rate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RATING_STAR": () => (/* binding */ RATING_STAR)
/* harmony export */ });
var RATING_STAR = {
  LIMIT_SCORE: 5
};

/***/ })

}]);
//# sourceMappingURL=default-src_components_Board_index_js-src_components_ListSkeleton_ListSkeleton_jsx.f3dbb4a6464ad17fc80a.bundle.js.map