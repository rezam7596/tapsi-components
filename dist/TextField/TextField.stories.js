"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Story0 = exports.Story5 = exports.Story4 = exports.Story3 = exports.Story2 = exports.Story1 = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _TextField = _interopRequireDefault(require("./TextField"));

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
  title: 'TextField',
  parameters: {
    component: _TextField["default"]
  }
};
exports["default"] = _default;

var Story1 = function Story1() {
  var _React$useState = _react["default"].useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    title: "Car Name",
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  });
};

exports.Story1 = Story1;
Story1.story = {
  name: 'simple'
};

var Story2 = function Story2() {
  return /*#__PURE__*/_react["default"].createElement(_MuiRTL["default"], null, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    title: "\u0646\u0627\u0645 \u0645\u0627\u0634\u06CC\u0646"
  }));
};

exports.Story2 = Story2;
Story2.story = {
  name: 'RTL'
};

var Story3 = function Story3() {
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

  return /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    title: "Car Name",
    startAdornment: startAdornment,
    endAdornment: endAdornments
  });
};

exports.Story3 = Story3;
Story3.story = {
  name: 'adornments'
};

var Story4 = function Story4() {
  var _React$useState3 = _react["default"].useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      showPassword = _React$useState4[0],
      setShowPassword = _React$useState4[1];

  return /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    title: "Car Password",
    type: showPassword ? 'text' : 'password',
    endAdornment: /*#__PURE__*/_react["default"].createElement(_core.InputAdornment, {
      position: "end"
    }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
      "aria-label": "toggle password visibility",
      onClick: function onClick() {
        return setShowPassword(!showPassword);
      },
      size: "small"
    }, showPassword ? /*#__PURE__*/_react["default"].createElement(_icons.Visibility, null) : /*#__PURE__*/_react["default"].createElement(_icons.VisibilityOff, null)))
  });
};

exports.Story4 = Story4;
Story4.story = {
  name: 'advanced password'
};

var Story5 = function Story5() {
  var _React$useState5 = _react["default"].useState('Clearable text'),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      value = _React$useState6[0],
      setValue = _React$useState6[1];

  return /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    title: "Clearable text",
    value: value,
    isClearable: true,
    onClear: function onClear() {
      return setValue('Cleared text');
    },
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    helperText: "you need to have your own state to declare onClear, otherwise clearable won't work"
  });
};

exports.Story5 = Story5;
Story5.story = {
  name: 'isClearable, onClear'
};

var Story0 = function Story0() {
  return /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    title: (0, _addonKnobs.text)('title', 'Title'),
    type: (0, _addonKnobs.text)('type', 'password'),
    helperText: (0, _addonKnobs.text)('helperText', 'helperText'),
    value: (0, _addonKnobs.text)('value', 'value'),
    multiline: (0, _addonKnobs["boolean"])('multiline', false),
    rows: (0, _addonKnobs.number)('rows', 5),
    loading: (0, _addonKnobs["boolean"])('loading', false),
    readonly: (0, _addonKnobs["boolean"])('readonly', false),
    disabled: (0, _addonKnobs["boolean"])('disabled', false),
    numeric: (0, _addonKnobs["boolean"])('numeric', false),
    error: (0, _addonKnobs["boolean"])('error', false),
    isClearable: (0, _addonKnobs["boolean"])('isClearable', false),
    required: (0, _addonKnobs["boolean"])('required', false),
    theme: (0, _addonKnobs.select)('theme', Object.values(_constants.TextFieldThemes))
  });
};

exports.Story0 = Story0;
Story0.story = {
  name: 'addon knobs'
};