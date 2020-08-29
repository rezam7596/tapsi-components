"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Story0 = exports.Story6 = exports.Story5 = exports.Story4 = exports.Story3 = exports.Story2 = exports.Story1 = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _icons = require("@material-ui/icons");

var _core = require("@material-ui/core");

var _AutoComplete = _interopRequireDefault(require("./AutoComplete"));

var _MuiRTL = _interopRequireDefault(require("../MuiRTL/MuiRTL"));

var _hooks = require("../../utils/hooks");

var _constants = require("../TextField/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = {
  title: 'AutoComplete',
  parameters: {
    component: _AutoComplete["default"]
  }
};
exports["default"] = _default;

var Story1 = function Story1() {
  var _React$useState = _react["default"].useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_AutoComplete["default"], {
    value: value,
    onChange: function onChange(event, newValue) {
      setValue(newValue);
    },
    title: "Car brands"
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, "--none--"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "Volkswagen"
  }, "Volkswagen"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "Toyota"
  }, "Toyota"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "Daimler"
  }, "Daimler"));
};

exports.Story1 = Story1;
Story1.story = {
  name: 'simple'
};

var Story2 = function Story2() {
  (0, _hooks.useBodyRtl)();

  var _React$useState3 = _react["default"].useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      value = _React$useState4[0],
      setValue = _React$useState4[1];

  return /*#__PURE__*/_react["default"].createElement(_MuiRTL["default"], null, /*#__PURE__*/_react["default"].createElement(_AutoComplete["default"], {
    value: value,
    onChange: function onChange(event, newValue) {
      setValue(newValue);
    },
    title: "\u0628\u0631\u0646\u062F \u0645\u0627\u0634\u06CC\u0646\u200C\u0647\u0627"
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: "IranKhodro"
  }, "\u0627\u06CC\u0631\u0627\u0646\u200C\u062E\u0648\u062F\u0631\u0648"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "Saipa"
  }, "\u0633\u0627\u06CC\u067E\u0627"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "KermanMotor"
  }, "\u06A9\u0631\u0645\u0627\u0646\u200C\u0645\u0648\u062A\u0648\u0631")));
};

exports.Story2 = Story2;
Story2.story = {
  name: 'RTL'
};

var Story3 = function Story3() {
  var _React$useState5 = _react["default"].useState(['Volkswagen', 'Toyota']),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      value = _React$useState6[0],
      setValue = _React$useState6[1];

  return /*#__PURE__*/_react["default"].createElement(_AutoComplete["default"], {
    value: value,
    onChange: function onChange(event, newValue) {
      setValue(newValue);
    },
    title: "Car brands",
    multiple: true
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: "Volkswagen"
  }, "Volkswagen"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "Toyota"
  }, "Toyota"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "Daimler"
  }, "Daimler"));
};

exports.Story3 = Story3;
Story3.story = {
  name: 'multiple'
};

var Story4 = function Story4() {
  var _React$useState7 = _react["default"].useState(''),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      value = _React$useState8[0],
      setValue = _React$useState8[1];

  return /*#__PURE__*/_react["default"].createElement(_AutoComplete["default"], {
    value: value,
    onChange: function onChange(event, newValue) {
      return setValue(newValue);
    },
    title: "Car brands",
    isClearable: true,
    onClear: function onClear() {
      return setValue('');
    }
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: "Volkswagen"
  }, "Volkswagen"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "Toyota"
  }, "Toyota"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "Daimler"
  }, "Daimler"));
};

exports.Story4 = Story4;
Story4.story = {
  name: 'isClearable + onClear'
};

var Story5 = function Story5() {
  var _React$useState9 = _react["default"].useState(''),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      value = _React$useState10[0],
      setValue = _React$useState10[1];

  var startAdornment = /*#__PURE__*/_react["default"].createElement(_core.InputAdornment, {
    position: "start"
  }, /*#__PURE__*/_react["default"].createElement(_icons.AccountCircle, {
    color: "inherit",
    size: 20
  }));

  var endAdornments = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.InputAdornment, {
    position: "end"
  }, /*#__PURE__*/_react["default"].createElement(_icons.AccessAlarms, {
    color: "inherit",
    size: 20
  })), /*#__PURE__*/_react["default"].createElement(_core.InputAdornment, {
    position: "end"
  }, /*#__PURE__*/_react["default"].createElement(_icons.Audiotrack, {
    color: "inherit",
    size: 20
  })), /*#__PURE__*/_react["default"].createElement(_core.InputAdornment, {
    position: "end"
  }, "Kg"));

  return /*#__PURE__*/_react["default"].createElement(_AutoComplete["default"], {
    value: value,
    onChange: function onChange(event, newValue) {
      return setValue(newValue);
    },
    title: "Car brands",
    startAdornment: startAdornment,
    endAdornment: endAdornments
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: "Volkswagen"
  }, "Volkswagen"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "Toyota"
  }, "Toyota"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "Daimler"
  }, "Daimler"));
};

exports.Story5 = Story5;
Story5.story = {
  name: 'adornment'
};

var Story6 = function Story6() {
  var _React$useState11 = _react["default"].useState(''),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      value = _React$useState12[0],
      setValue = _React$useState12[1];

  return /*#__PURE__*/_react["default"].createElement(_AutoComplete["default"], {
    value: value,
    onChange: function onChange(event, newValue) {
      return setValue(newValue);
    },
    title: "Car brands",
    onInputChange: function onInputChange() {
      return console.log('Input Changed');
    }
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: "Volkswagen"
  }, "Volkswagen"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "Toyota"
  }, "Toyota"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "Daimler"
  }, "Daimler"));
};

exports.Story6 = Story6;
Story6.story = {
  name: 'onInputChange'
};

var Story0 = function Story0() {
  var _React$useState13 = _react["default"].useState(''),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      value = _React$useState14[0],
      setValue = _React$useState14[1];

  return /*#__PURE__*/_react["default"].createElement(_AutoComplete["default"], {
    value: value,
    onChange: function onChange(event, newValue) {
      setValue(newValue);
    },
    title: (0, _addonKnobs.text)('title', 'title'),
    helperText: (0, _addonKnobs.text)('helperText', 'helperText'),
    theme: (0, _addonKnobs.select)('theme', Object.values(_constants.TextFieldThemes)),
    disabled: (0, _addonKnobs["boolean"])('disabled', false),
    loading: (0, _addonKnobs["boolean"])('loading', false),
    readonly: (0, _addonKnobs["boolean"])('readonly', false),
    error: (0, _addonKnobs["boolean"])('error', false),
    isClearable: (0, _addonKnobs["boolean"])('isClearable', false)
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: "Volkswagen"
  }, "Volkswagen"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "Toyota"
  }, "Toyota"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "Daimler"
  }, "Daimler"));
};

exports.Story0 = Story0;
Story0.story = {
  name: 'addon knobs'
};