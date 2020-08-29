"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _momentJalaali = _interopRequireDefault(require("moment-jalaali"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _MonthsViewHeading = _interopRequireDefault(require("./MonthsViewHeading"));

var _persian = require("../utils/persian");

var _assets = require("../utils/assets");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// List of months
var monthsJalaali = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
var monthsGregorian = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var MonthSelector = /*#__PURE__*/function (_Component) {
  _inherits(MonthSelector, _Component);

  var _super = _createSuper(MonthSelector);

  function MonthSelector() {
    var _this;

    _classCallCheck(this, MonthSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      year: _this.props.selectedMonth
    });

    return _this;
  }

  _createClass(MonthSelector, [{
    key: "nextYear",
    value: function nextYear() {
      this.setState({
        year: this.state.year.clone().add(1, 'year')
      });
    }
  }, {
    key: "prevYear",
    value: function prevYear() {
      this.setState({
        year: this.state.year.clone().subtract(1, 'year')
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(key) {
      var _this$context = this.context,
          setMonth = _this$context.setMonth,
          setCalendarMode = _this$context.setCalendarMode;
      var isGregorian = this.props.isGregorian;
      var monthYearFormat = isGregorian ? 'M-YYYY' : 'jM-jYYYY';
      setMonth((0, _momentJalaali["default"])(key, monthYearFormat));
      setCalendarMode('days');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var year = this.state.year;
      var _this$props = this.props,
          selectedMonth = _this$props.selectedMonth,
          styles = _this$props.styles,
          isGregorian = _this$props.isGregorian;
      var yearFormat = isGregorian ? 'YYYY' : 'jYYYY';
      var monthYearFormat = isGregorian ? 'M-YYYY' : 'jM-jYYYY';
      var months = isGregorian ? monthsGregorian : monthsJalaali;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "month-selector"
      }, /*#__PURE__*/_react["default"].createElement(_MonthsViewHeading["default"], {
        isGregorian: isGregorian,
        styles: styles,
        year: year,
        onNextYear: this.nextYear.bind(this),
        onPrevYear: this.prevYear.bind(this)
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: styles.monthsList
      }, months.map(function (name, key) {
        var buttonFingerprint = "".concat(key + 1, "-").concat(year.format(yearFormat));
        var selectedMonthFingerprint = selectedMonth.format(monthYearFormat);
        var isCurrent = selectedMonthFingerprint === buttonFingerprint;
        var className = (0, _classnames2["default"])(styles.monthWrapper, _defineProperty({}, styles.selected, isCurrent));
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: key,
          className: className
        }, /*#__PURE__*/_react["default"].createElement("button", {
          onClick: _this2.handleClick.bind(_this2, buttonFingerprint)
        }, name));
      })));
    }
  }]);

  return MonthSelector;
}(_react.Component);

exports["default"] = MonthSelector;

_defineProperty(MonthSelector, "propTypes", {
  styles: _propTypes["default"].object,
  selectedMonth: _propTypes["default"].object.isRequired,
  isGregorian: _propTypes["default"].bool
});

_defineProperty(MonthSelector, "contextTypes", {
  setCalendarMode: _propTypes["default"].func.isRequired,
  setMonth: _propTypes["default"].func.isRequired
});