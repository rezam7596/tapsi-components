"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("isomorphic-style-loader/lib/withStyles"));

var _core = require("@material-ui/core");

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));

var _TextField = _interopRequireDefault(require("./TextField.scss"));

var _utils = require("../utils");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var setValueOfEvent = function setValueOfEvent(event, value) {
  event.target.value = value;
  return event;
};

function TextField(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      onClear = _ref.onClear,
      title = _ref.title,
      helperText = _ref.helperText,
      loading = _ref.loading,
      disabled = _ref.disabled,
      readonly = _ref.readonly,
      error = _ref.error,
      multiline = _ref.multiline,
      numeric = _ref.numeric,
      endAdornment = _ref.endAdornment,
      startAdornment = _ref.startAdornment,
      className = _ref.className,
      classes = _ref.classes,
      theme = _ref.theme,
      inputProps = _ref.inputProps,
      isClearable = _ref.isClearable,
      required = _ref.required,
      InputProps = _ref.InputProps,
      InputLabelProps = _ref.InputLabelProps,
      restProps = _objectWithoutProperties(_ref, ["value", "onChange", "onClear", "title", "helperText", "loading", "disabled", "readonly", "error", "multiline", "numeric", "endAdornment", "startAdornment", "className", "classes", "theme", "inputProps", "isClearable", "required", "InputProps", "InputLabelProps"]);

  var _React$useState = _react["default"].useState(value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      internalValue = _React$useState2[0],
      setInternalValue = _React$useState2[1];

  var _React$useState3 = _react["default"].useState("text-field-".concat(Math.floor(Math.random() * 10000000).toString())),
      _React$useState4 = _slicedToArray(_React$useState3, 1),
      id = _React$useState4[0];

  var setValue = function setValue(event) {
    var newValue = numeric ? (0, _utils.removeNonNumbers)((0, _utils.convertPersianNumberToEnglishNumber)(event.target.value)) : event.target.value;
    setInternalValue(newValue);
    onChange(setValueOfEvent(event, newValue));
  };

  var clearValue = function clearValue(event) {
    return onClear ? onClear(event) : setValue(setValueOfEvent(event, ''));
  };

  return /*#__PURE__*/_react["default"].createElement(_core.FormControl, {
    className: className,
    classes: {
      root: 'shared-components-text-field'
    },
    fullWidth: true,
    disabled: disabled,
    error: error
  }, title && /*#__PURE__*/_react["default"].createElement(_core.InputLabel, {
    shrink: true,
    htmlFor: id,
    classes: {
      root: 'shared-components-text-field-label',
      error: 'shared-components-text-field-label-error'
    },
    required: required
  }, title), /*#__PURE__*/_react["default"].createElement(_core.InputBase, _extends({
    value: value !== undefined ? value : internalValue,
    onChange: setValue,
    inputProps: _objectSpread({
      id: id
    }, inputProps || {})
  }, InputProps, InputLabelProps, {
    className: "shared-input-base",
    classes: _objectSpread(_objectSpread({}, classes), {}, {
      root: "shared-components-text-field-input-base-root ".concat(classes.root || '', " ").concat(theme),
      input: "shared-components-text-field-input-base-input ".concat(classes.input || ''),
      focused: "shared-components-text-field-input-base-input-focused ".concat(classes.focused || ''),
      error: "shared-components-text-field-input-base-root-error ".concat(classes.error || ''),
      adornedStart: "shared-components-text-field-input-base-adornedStart ".concat(classes.adornedStart || ''),
      adornedEnd: "shared-components-text-field-input-base-adornedEnd ".concat(classes.adornedEnd || '')
    }),
    readOnly: readonly,
    multiline: multiline,
    type: numeric ? 'tel' : 'text',
    rows: 3
  }, loading || endAdornment || isClearable ? {
    endAdornment: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, loading && /*#__PURE__*/_react["default"].createElement(_core.InputAdornment, {
      position: "end"
    }, /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
      color: "inherit",
      size: 20
    })), isClearable && /*#__PURE__*/_react["default"].createElement(_core.InputAdornment, {
      position: "end"
    }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
      "aria-label": "clear field",
      onClick: clearValue,
      size: "small"
    }, /*#__PURE__*/_react["default"].createElement(_Clear["default"], {
      color: "inherit",
      fontSize: "small"
    }))), endAdornment, (InputProps || {}).endAdornment)
  } : {}, startAdornment ? {
    startAdornment: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, startAdornment, (InputProps || {}).startAdornment)
  } : {}, restProps)), helperText && /*#__PURE__*/_react["default"].createElement(_core.FormHelperText, {
    className: "shared-components-text-field-helper-text"
  }, helperText));
}

TextField.propTypes = {
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onClear: _propTypes["default"].func,
  title: _propTypes["default"].string,
  helperText: _propTypes["default"].string,
  className: _propTypes["default"].string,
  classes: _propTypes["default"].object,
  theme: _propTypes["default"].oneOf(Object.values(_constants.TextFieldThemes)),
  loading: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  readonly: _propTypes["default"].bool,
  error: _propTypes["default"].bool,
  multiline: _propTypes["default"].bool,
  numeric: _propTypes["default"].bool,
  endAdornment: _propTypes["default"].any,
  startAdornment: _propTypes["default"].any,
  inputProps: _propTypes["default"].object,
  InputProps: _propTypes["default"].object,
  InputLabelProps: _propTypes["default"].object,
  isClearable: _propTypes["default"].bool,
  required: _propTypes["default"].bool
};
TextField.defaultProps = {
  value: undefined,
  onChange: function onChange() {},
  onClear: null,
  title: '',
  helperText: '',
  className: '',
  classes: {},
  theme: _constants.TextFieldThemes.THEME_1,
  loading: false,
  disabled: false,
  readonly: false,
  error: false,
  multiline: false,
  numeric: false,
  endAdornment: null,
  startAdornment: null,
  inputProps: null,
  InputProps: null,
  InputLabelProps: null,
  isClearable: false,
  required: false
};

var _default = (0, _withStyles["default"])(_TextField["default"])(TextField);

exports["default"] = _default;