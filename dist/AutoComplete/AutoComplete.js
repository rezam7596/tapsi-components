"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("isomorphic-style-loader/lib/withStyles"));

var _Autocomplete = _interopRequireDefault(require("@material-ui/lab/Autocomplete"));

var _core = require("@material-ui/core");

var _ArrowDropDown = _interopRequireDefault(require("@material-ui/icons/ArrowDropDown"));

var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));

var _TextField = _interopRequireDefault(require("../TextField/TextField"));

var _constants = require("../TextField/constants");

var _AutoComplete = _interopRequireDefault(require("./AutoComplete.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AutoComplete(_ref) {
  var title = _ref.title,
      value = _ref.value,
      _onChange = _ref.onChange,
      onInputChange = _ref.onInputChange,
      multiple = _ref.multiple,
      children = _ref.children,
      isClearable = _ref.isClearable,
      onClear = _ref.onClear,
      endAdornment = _ref.endAdornment,
      startAdornment = _ref.startAdornment,
      inputProps = _ref.inputProps,
      theme = _ref.theme,
      loading = _ref.loading,
      disabled = _ref.disabled,
      readonly = _ref.readonly,
      error = _ref.error,
      helperText = _ref.helperText;

  var selectRef = _react["default"].useRef(null);

  var options = _react["default"].Children.toArray(children).map(function (child) {
    return {
      value: child.props.value,
      label: child.props.children
    };
  });

  var getOptionByValue = function getOptionByValue(optionValue) {
    return options.find(function (option) {
      return option.value === optionValue;
    }) || null;
  };

  var getValueByOption = function getValueByOption(valueOption) {
    return valueOption ? valueOption.value : null;
  };

  var getOptionsByValue = function getOptionsByValue(optionsValue) {
    return options.filter(function (option) {
      return optionsValue.includes(option.value);
    }) || null;
  };

  var getValueByOptions = function getValueByOptions(valueOptions) {
    return valueOptions.map(function (valueOption) {
      return valueOption.value;
    }) || null;
  };

  var delimiter = function () {
    if (process.env.BROWSER) {
      return getComputedStyle((selectRef.current || {}).node || document.querySelector('body')).direction === 'rtl' ? '،' : ',';
    }

    return '،';
  }();

  return /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], {
    value: multiple ? getOptionsByValue(value) : getOptionByValue(value),
    autoComplete: false,
    multiple: multiple,
    disableClearable: true,
    onChange: function onChange(event, newValue) {
      return multiple ? _onChange(event, getValueByOptions(newValue)) : _onChange(event, getValueByOption(newValue));
    },
    onInputChange: onInputChange,
    options: options,
    getOptionLabel: function getOptionLabel(option) {
      return option.label;
    },
    renderOption: function renderOption(option) {
      return /*#__PURE__*/_react["default"].createElement(_core.MenuItem, {
        className: "shared-components-auto-complete-menu-item",
        value: option.value
      }, option.label);
    },
    renderTags: function renderTags(valueOptions) {
      return valueOptions.map(function (option) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "shared-components-auto-complete-tag"
        }, "".concat(option.label).concat(delimiter, " "));
      });
    },
    disabled: disabled,
    loading: loading,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({
        title: title,
        inputProps: _objectSpread({
          ref: selectRef
        }, inputProps || {}),
        loading: loading,
        readonly: readonly,
        error: error,
        helperText: helperText,
        startAdornment: startAdornment
      }, endAdornment || isClearable ? {
        endAdornment: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, endAdornment, isClearable && /*#__PURE__*/_react["default"].createElement(_core.InputAdornment, {
          position: "end"
        }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
          "aria-label": "clear field",
          onClick: onClear,
          size: "small"
        }, /*#__PURE__*/_react["default"].createElement(_Clear["default"], {
          color: "inherit",
          fontSize: "small"
        }))), /*#__PURE__*/_react["default"].createElement(_core.InputAdornment, {
          className: "shared-components-select-arrow-adornment",
          position: "end"
        }, /*#__PURE__*/_react["default"].createElement(_ArrowDropDown["default"], {
          color: "inherit",
          fontSize: "small"
        })))
      } : {}, {
        theme: theme
      }, params));
    }
  });
}

AutoComplete.propTypes = {
  title: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]).isRequired,
  onChange: _propTypes["default"].func,
  onInputChange: _propTypes["default"].func,
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]),
  multiple: _propTypes["default"].bool,
  isClearable: _propTypes["default"].bool,
  onClear: _propTypes["default"].func,
  endAdornment: _propTypes["default"].any,
  startAdornment: _propTypes["default"].any,
  inputProps: _propTypes["default"].object,
  loading: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  readonly: _propTypes["default"].bool,
  error: _propTypes["default"].bool,
  helperText: _propTypes["default"].string,
  theme: _propTypes["default"].oneOf(Object.values(_constants.TextFieldThemes))
};
AutoComplete.defaultProps = {
  title: '',
  onChange: function onChange() {},
  onInputChange: function onInputChange() {},
  children: [],
  multiple: false,
  isClearable: false,
  onClear: function onClear() {},
  endAdornment: null,
  startAdornment: null,
  inputProps: null,
  loading: false,
  disabled: false,
  readonly: false,
  error: false,
  theme: undefined,
  helperText: ''
};

var _default = (0, _withStyles["default"])(_AutoComplete["default"])(AutoComplete);

exports["default"] = _default;