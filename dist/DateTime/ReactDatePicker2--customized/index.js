"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _withStyles = _interopRequireDefault(require("isomorphic-style-loader/lib/withStyles"));

var _styleMin = _interopRequireDefault(require("./style.min.css"));

var _momentJalaali = _interopRequireDefault(require("moment-jalaali"));

var _DatePicker = _interopRequireDefault(require("./components/DatePicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_momentJalaali["default"].loadPersian({
  dialect: 'persian-modern'
});

var _default = (0, _withStyles["default"])(_styleMin["default"])(_DatePicker["default"]);

exports["default"] = _default;