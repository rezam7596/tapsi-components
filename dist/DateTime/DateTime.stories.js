"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Story0 = exports.Story3 = exports.Story2 = exports.Story1 = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _DateTime = _interopRequireDefault(require("./DateTime"));

var _MuiRTL = _interopRequireDefault(require("../MuiRTL/MuiRTL"));

var _hooks = require("../../utils/hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = {
  title: 'DateTime',
  parameters: {
    component: _DateTime["default"]
  }
};
exports["default"] = _default;

var Story1 = function Story1() {
  (0, _hooks.useBodyRtl)();
  return /*#__PURE__*/_react["default"].createElement(_MuiRTL["default"], null, /*#__PURE__*/_react["default"].createElement(_DateTime["default"], null));
};

exports.Story1 = Story1;
Story1.story = {
  name: 'simple'
};

var Story2 = function Story2() {
  (0, _hooks.useBodyRtl)();

  var _React$useState = _react["default"].useState(new Date()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_MuiRTL["default"], null, /*#__PURE__*/_react["default"].createElement(_DateTime["default"], {
    value: value,
    onChange: function onChange(newValue) {
      return setValue(newValue);
    },
    removeDateEnabled: true
  }));
};

exports.Story2 = Story2;
Story2.story = {
  name: 'state management'
};

var Story3 = function Story3() {
  (0, _hooks.useBodyRtl)();

  var _React$useState3 = _react["default"].useState(new Date()),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      value = _React$useState4[0],
      setValue = _React$useState4[1];

  return /*#__PURE__*/_react["default"].createElement(_MuiRTL["default"], null, /*#__PURE__*/_react["default"].createElement(_DateTime["default"], {
    value: value,
    onChange: function onChange(newValue) {
      return setValue(newValue);
    },
    onClear: function onClear() {
      return setValue('');
    },
    removeDateEnabled: true
  }));
};

exports.Story3 = Story3;
Story3.story = {
  name: 'customized onClear'
};

var Story0 = function Story0() {
  return /*#__PURE__*/_react["default"].createElement(_DateTime["default"], {
    disabled: (0, _addonKnobs["boolean"])('disable', false),
    readonly: (0, _addonKnobs["boolean"])('readonly', false),
    isGregorian: (0, _addonKnobs["boolean"])('isGregorian', false),
    timePickerEnabled: (0, _addonKnobs["boolean"])('timePickerEnabled', false),
    showTodayButton: (0, _addonKnobs["boolean"])('showTodayButton', false),
    removeDateEnabled: (0, _addonKnobs["boolean"])('removeDateEnabled', false),
    showToggleCalenderTypeButton: (0, _addonKnobs["boolean"])('showToggleCalenderTypeButton', false),
    timePickerEnabledFormat: (0, _addonKnobs.text)('timePickerEnabledFormat', 'YYYY/M/D HH:mm'),
    timePickerDisabledFormat: (0, _addonKnobs.text)('timePickerDisabledFormat', 'YYYY/M/D')
  }, "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645");
};

exports.Story0 = Story0;
Story0.story = {
  name: 'addon knobs'
};