"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("isomorphic-style-loader/lib/withStyles"));

var _momentJalaali = _interopRequireDefault(require("moment-jalaali"));

var _core = require("@material-ui/core");

var _ReactDatePicker2Customized = _interopRequireDefault(require("./ReactDatePicker2--customized"));

var _utils = require("../../utils");

var _DateTime = _interopRequireDefault(require("./DateTime.scss"));

var _TextField = _interopRequireDefault(require("../TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

_momentJalaali["default"].loadPersian({
  usePersianDigits: false,
  dialect: 'persian-modern'
});

function DateTime(props) {
  var _React$useState = _react["default"].useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      internalValue = _React$useState2[0],
      setInternalValue = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      anchorEl = _React$useState4[0],
      setAnchorEl = _React$useState4[1];

  var className = props.className,
      readonly = props.readonly,
      isGregorian = props.isGregorian,
      value = props.value,
      timePickerEnabledFormat = props.timePickerEnabledFormat,
      timePickerDisabledFormat = props.timePickerDisabledFormat,
      endAdornment = props.endAdornment,
      _onChange = props.onChange,
      disabled = props.disabled,
      min = props.min,
      max = props.max,
      removeDateEnabled = props.removeDateEnabled,
      timePickerEnabled = props.timePickerEnabled,
      showTodayButton = props.showTodayButton,
      showToggleCalenderTypeButton = props.showToggleCalenderTypeButton,
      ranges = props.ranges,
      _onClear = props.onClear,
      restProps = _objectWithoutProperties(props, ["className", "readonly", "isGregorian", "value", "timePickerEnabledFormat", "timePickerDisabledFormat", "endAdornment", "onChange", "disabled", "min", "max", "removeDateEnabled", "timePickerEnabled", "showTodayButton", "showToggleCalenderTypeButton", "ranges", "onClear"]);

  var computedValue = value !== undefined ? value : internalValue;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "rjf-datepicker ".concat(className)
  }, /*#__PURE__*/_react["default"].createElement(_core.Popover, {
    open: Boolean(anchorEl),
    anchorEl: anchorEl,
    onClose: function onClose() {
      return setAnchorEl(null);
    },
    anchorOrigin: {
      horizontal: isGregorian ? 'left' : 'right',
      vertical: 'bottom'
    },
    transformOrigin: {
      horizontal: isGregorian ? 'left' : 'right',
      vertical: 'top'
    }
  }, /*#__PURE__*/_react["default"].createElement(_ReactDatePicker2Customized["default"], {
    isGregorian: isGregorian,
    value: computedValue && (0, _momentJalaali["default"])(computedValue),
    onChange: function onChange(newValue) {
      if (!newValue) {
        setInternalValue(null);

        _onChange(null);

        setAnchorEl(null);
      } else if (!(0, _momentJalaali["default"])(newValue).isSame(computedValue)) {
        setInternalValue(new Date(newValue));

        _onChange(new Date(newValue));

        setAnchorEl(null);
      }
    },
    disabled: disabled || readonly,
    timePicker: timePickerEnabled,
    min: min && (0, _momentJalaali["default"])(min),
    max: max && (0, _momentJalaali["default"])(max),
    ranges: ranges && ranges.map(function (range) {
      return _objectSpread(_objectSpread({}, range), {}, {
        start: (0, _momentJalaali["default"])(range.start),
        end: (0, _momentJalaali["default"])(range.end)
      });
    }),
    showTodayButton: showTodayButton,
    showToggleButton: showToggleCalenderTypeButton
  })), /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, restProps, {
    readonly: true,
    disabled: disabled,
    onClick: function onClick(e) {
      return !(disabled || readonly) && setAnchorEl(e.currentTarget);
    },
    value: (computedValue || '') && (isGregorian ? (0, _momentJalaali["default"])(computedValue).format(timePickerEnabled ? timePickerEnabledFormat : timePickerDisabledFormat) : (0, _utils.convertEnglishNumberToPersianNumber)((0, _momentJalaali["default"])(computedValue).format(timePickerEnabled ? timePickerEnabledFormat : timePickerDisabledFormat))),
    isClearable: removeDateEnabled,
    onClear: function onClear(e) {
      setInternalValue(null);

      if (_onClear) {
        _onClear(e);
      } else {
        _onChange(null);
      }

      e.stopPropagation();
    }
  })));
}

DateTime.propTypes = {
  className: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  value: _propTypes["default"].instanceOf(Date),
  disabled: _propTypes["default"].bool,
  isGregorian: _propTypes["default"].bool,
  readonly: _propTypes["default"].bool,
  timePickerEnabledFormat: _propTypes["default"].string,
  timePickerDisabledFormat: _propTypes["default"].string,
  timePickerEnabled: _propTypes["default"].bool,
  removeDateEnabled: _propTypes["default"].bool,
  endAdornment: _propTypes["default"].node,
  min: _propTypes["default"].instanceOf(Date),
  max: _propTypes["default"].instanceOf(Date),
  ranges: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    disabled: _propTypes["default"].bool,
    color: _propTypes["default"].string,
    start: _propTypes["default"].instanceOf(Date).isRequired,
    end: _propTypes["default"].instanceOf(Date).isRequired
  })),
  onClear: _propTypes["default"].func,
  showTodayButton: _propTypes["default"].bool,
  showToggleCalenderTypeButton: _propTypes["default"].bool
};
DateTime.defaultProps = {
  className: '',
  onChange: function onChange() {},
  onClear: null,
  value: undefined,
  disabled: false,
  isGregorian: false,
  readonly: false,
  timePickerEnabledFormat: 'jYYYY/jM/jD HH:mm',
  timePickerDisabledFormat: 'jYYYY/jM/jD',
  timePickerEnabled: true,
  removeDateEnabled: false,
  endAdornment: undefined,
  min: undefined,
  max: undefined,
  ranges: [],
  showTodayButton: true,
  showToggleCalenderTypeButton: false
};

var _default = (0, _withStyles["default"])(_DateTime["default"])(DateTime);

exports["default"] = _default;