"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Story0 = exports.Story4 = exports.Story3 = exports.Story2 = exports.Story1 = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _CheckBox = _interopRequireDefault(require("./CheckBox"));

var _MuiRTL = _interopRequireDefault(require("../MuiRTL/MuiRTL"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = {
  title: 'CheckBox',
  parameters: {
    component: _CheckBox["default"]
  }
};
exports["default"] = _default;

var Story1 = function Story1() {
  return /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], null);
};

exports.Story1 = Story1;
Story1.story = {
  name: 'simple'
};

var Story2 = function Story2() {
  return /*#__PURE__*/_react["default"].createElement(_MuiRTL["default"], null, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    label: "\u0686\u06A9 \u0628\u0627\u06A9\u0633"
  }));
};

exports.Story2 = Story2;
Story2.story = {
  name: 'RTL labeled'
};

var Story3 = function Story3() {
  return /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    style: {
      color: '#f7f045'
    },
    theme: "no-theme"
  });
};

exports.Story3 = Story3;
Story3.story = {
  name: 'custom theme'
};

var Story4 = function Story4() {
  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    label: "lorem ipsum",
    checked: value,
    onChange: function onChange(e) {
      return setValue(e.target.checked);
    }
  });
};

exports.Story4 = Story4;
Story4.story = {
  name: 'state management'
};

var Story0 = function Story0() {
  return /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    checked: (0, _addonKnobs["boolean"])('checked', false),
    label: (0, _addonKnobs.text)('label', 'لورم ایپسوم'),
    disabled: (0, _addonKnobs["boolean"])('disabled', false),
    theme: (0, _addonKnobs.select)('theme', Object.values(_constants.CheckBoxThemes))
  });
};

exports.Story0 = Story0;
Story0.story = {
  name: 'addon knobs'
};