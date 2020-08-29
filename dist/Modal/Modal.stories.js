"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Story0 = exports.Story5 = exports.Story4 = exports.Story3 = exports.Story2 = exports.Story1 = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _core = require("@material-ui/core");

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

var _MuiRTL = _interopRequireDefault(require("../MuiRTL/MuiRTL"));

var _Modal = _interopRequireDefault(require("./Modal"));

var _Select = _interopRequireDefault(require("../Select/Select"));

require("./Modal.stories.css");

var _hooks = require("../../utils/hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = {
  title: 'Modal',
  parameters: {
    component: _Modal["default"]
  }
};
exports["default"] = _default;

var Story1 = function Story1() {
  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Open Modal"), /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    }
  }, "Simple Modal"));
};

exports.Story1 = Story1;
Story1.story = {
  name: 'simple'
};

var Story2 = function Story2() {
  (0, _hooks.useBodyRtl)();

  var _React$useState3 = _react["default"].useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      open = _React$useState4[0],
      setOpen = _React$useState4[1];

  return /*#__PURE__*/_react["default"].createElement(_MuiRTL["default"], null, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "\u0628\u0627\u0632\u06A9\u0631\u062F\u0646 \u062F\u06CC\u0627\u0644\u0648\u06AF"), /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.DialogTitle, null, "\u0627\u062C\u0627\u0632\u0647 \u062F\u0633\u062A\u0631\u0633\u06CC"), /*#__PURE__*/_react["default"].createElement(_core.DialogContent, null, /*#__PURE__*/_react["default"].createElement(_core.DialogContentText, null, "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 Maps \u0627\u062C\u0627\u0632\u0647 \u062F\u0633\u062A\u0631\u0633\u06CC \u0628\u0647 \u0645\u06A9\u0627\u0646 \u0641\u0639\u0644\u06CC \u0634\u0645\u0627 \u0631\u0627 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u062F. \u0622\u06CC\u0627 \u0627\u062C\u0627\u0632\u0647 \u0645\u06CC\u200C\u062F\u0647\u06CC\u062F")), /*#__PURE__*/_react["default"].createElement(_core.DialogActions, null, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    onClick: function onClick() {
      return setOpen(false);
    },
    color: "primary"
  }, "\u0628\u0644\u0647"), /*#__PURE__*/_react["default"].createElement(_core.Button, {
    onClick: function onClick() {
      return setOpen(false);
    },
    color: "primary",
    autoFocus: true
  }, "\u062E\u06CC\u0631"))));
};

exports.Story2 = Story2;
Story2.story = {
  name: 'RTL'
};

var Transition = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_core.Slide, _extends({
    direction: "up",
    ref: ref
  }, props));
});

var Story3 = function Story3() {
  var _React$useState5 = _react["default"].useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      open = _React$useState6[0],
      setOpen = _React$useState6[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Open Modal"), /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    },
    fullScreen: true,
    TransitionComponent: Transition,
    className: "fullscreen-with-transition-modal"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "fullScreen Modal"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOpen(false);
    }
  }, "Close"))));
};

exports.Story3 = Story3;
Story3.story = {
  name: 'fullScreen with Transition'
};

var Story4 = function Story4() {
  var _React$useState7 = _react["default"].useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      open = _React$useState8[0],
      setOpen = _React$useState8[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Open Modal"), /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    },
    fullWidth: true,
    PaperComponent: function PaperComponent(props) {
      return /*#__PURE__*/_react["default"].createElement(_reactDraggable["default"], {
        handle: "#drag-hook",
        cancel: '[class*="MuiDialogContent-root"]'
      }, /*#__PURE__*/_react["default"].createElement(_core.Paper, props));
    }
  }, "Draggable Modal", /*#__PURE__*/_react["default"].createElement("div", {
    id: "drag-hook",
    style: {
      backgroundColor: '#00ff00',
      padding: '30px',
      margin: 'auto',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Drag Hook"), /*#__PURE__*/_react["default"].createElement("p", null, "It could be a title-bar"))));
};

exports.Story4 = Story4;
Story4.story = {
  name: 'draggable'
};

var Story5 = function Story5() {
  var _React$useState9 = _react["default"].useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      open = _React$useState10[0],
      setOpen = _React$useState10[1];

  var _React$useState11 = _react["default"].useState('paper'),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      scroll = _React$useState12[0],
      setScroll = _React$useState12[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    value: scroll,
    onChange: function onChange(e) {
      return setScroll(e.target.value);
    },
    title: "scroll"
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: "paper"
  }, "paper (default)"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "body"
  }, "body")), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "open modal"), /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    },
    scroll: scroll
  }, _toConsumableArray(new Array(500)).map(function () {
    return "lorem ipsum dolor sit amet";
  }).join(' ')));
};

exports.Story5 = Story5;
Story5.story = {
  name: 'scroll types'
};

var Story0 = function Story0() {
  return /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
    open: (0, _addonKnobs["boolean"])('open', false),
    fullWidth: (0, _addonKnobs["boolean"])('fullWidth', false),
    fullScreen: (0, _addonKnobs["boolean"])('fullScreen', false),
    maxWidth: (0, _addonKnobs.select)('maxWidth', [false, 'xs', 'sm', 'md', 'lg', 'xl'], 'sm')
  }, "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645");
};

exports.Story0 = Story0;
Story0.story = {
  name: 'addon knobs'
};