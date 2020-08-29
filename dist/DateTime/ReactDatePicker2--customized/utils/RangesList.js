"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _momentJalaali = _interopRequireDefault(require("moment-jalaali"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MomentRange = require('moment-range');

var extendedMoment = MomentRange.extendMoment(_momentJalaali["default"]);

var RangesList = /*#__PURE__*/function () {
  function RangesList(ranges) {
    var _this = this;

    _classCallCheck(this, RangesList);

    this.ranges = [];

    if (ranges) {
      ranges.forEach(function (item) {
        _this.validateRangeObject(item);

        var range = extendedMoment.range(item.start, item.end); // include start

        var start = range.start.add(-1, 'days');

        _this.ranges.push({
          color: item.color,
          range: range,
          disabled: !!item.disabled
        });
      });
    }
  }

  _createClass(RangesList, [{
    key: "getDayState",
    value: function getDayState(day) {
      var disabled = this.ranges.some(function (x) {
        return x.disabled && x.range.contains(day);
      });
      var colors = this.ranges.filter(function (x) {
        return x.color && x.range.contains(day);
      }).map(function (x) {
        return x.color;
      });
      return {
        disabled: disabled,
        colors: colors
      };
    }
  }, {
    key: "validateRangeObject",
    value: function validateRangeObject(range) {
      if (!('start' in range)) throw "'start' property is a required property of 'range' object.\n            range object: ".concat(JSON.stringify(range));
      if (!('end' in range)) throw "'end' property is a required property of 'range' object.\n            range object: ".concat(JSON.stringify(range));
    }
  }]);

  return RangesList;
}();

exports["default"] = RangesList;