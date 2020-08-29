"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Story0 = exports.Story3 = exports.Story2 = exports.Story1 = exports["default"] = void 0;

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _Button = _interopRequireDefault(require("./Button"));

var _constants = require("./constants");

require("./Button.stories.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-return-assign */
var _default = {
  title: 'Button',
  parameters: {
    component: _Button["default"]
  }
};
exports["default"] = _default;

var Story1 = function Story1() {
  return /*#__PURE__*/_react["default"].createElement(_Button["default"], null, "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645");
};

exports.Story1 = Story1;
Story1.story = {
  name: 'simple'
};

var Story2 = function Story2() {
  return /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    startIcon: /*#__PURE__*/_react["default"].createElement(_Delete["default"], null)
  }, "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645");
};

exports.Story2 = Story2;
Story2.story = {
  name: 'with delete Icon'
};

var Story3 = function Story3() {
  return /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    style: {
      backgroundColor: 'green',
      color: 'white'
    },
    theme: "no-theme"
  }, "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645");
};

exports.Story3 = Story3;
Story3.story = {
  name: 'custom style'
};

var Story0 = function Story0() {
  return /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: (0, _addonKnobs.select)('variant', Object.values(_constants.buttonVariants)),
    disabled: (0, _addonKnobs["boolean"])('disabled', false),
    loading: (0, _addonKnobs["boolean"])('loading', false),
    theme: (0, _addonKnobs.select)('theme', Object.values(_constants.buttonThemes)),
    size: (0, _addonKnobs.select)('size', Object.values(_constants.buttonSizes), _constants.buttonSizes.MEDIUM),
    loadingAndDisabled: (0, _addonKnobs["boolean"])('loadingAndDisabled', false)
  }, "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645");
};

exports.Story0 = Story0;
Story0.story = {
  name: 'addon knobs'
};