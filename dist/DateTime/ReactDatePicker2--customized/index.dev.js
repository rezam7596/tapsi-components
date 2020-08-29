"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Calendar", {
  enumerable: true,
  get: function get() {
    return _Calendar.Calendar;
  }
});
exports["default"] = void 0;

require("./styles/style.scss");

var _momentJalaali = _interopRequireDefault(require("moment-jalaali"));

var _DatePicker = _interopRequireDefault(require("./components/DatePicker"));

var _Calendar = require("./components/Calendar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_momentJalaali["default"].loadPersian({
  dialect: 'persian-modern'
});

var _default = _DatePicker["default"];
exports["default"] = _default;