"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Calendar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _momentJalaali = _interopRequireDefault(require("moment-jalaali"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _DaysViewHeading = _interopRequireDefault(require("./DaysViewHeading"));

var _DaysOfWeek = _interopRequireDefault(require("./DaysOfWeek"));

var _MonthSelector = _interopRequireDefault(require("./MonthSelector"));

var _Day = _interopRequireDefault(require("./Day"));

var _momentHelper = require("../utils/moment-helper");

var _DefaultStyles = require("./DefaultStyles");

var _RangesList = _interopRequireDefault(require("../utils/RangesList"));

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

var Calendar = /*#__PURE__*/function (_Component) {
  _inherits(Calendar, _Component);

  var _super = _createSuper(Calendar);

  function Calendar() {
    var _this;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      month: _this.props.defaultMonth || _this.props.selectedDay || (0, _momentJalaali["default"])(_this.props.min),
      selectedDay: _this.props.selectedDay || _this.props.value || (0, _momentJalaali["default"])(),
      mode: 'days',
      isGregorian: _this.props.isGregorian,
      ranges: new _RangesList["default"](_this.props.ranges)
    });

    _defineProperty(_assertThisInitialized(_this), "setMode", function (mode) {
      _this.setState({
        mode: mode
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setMonth", function (month) {
      var onMonthChange = _this.props.onMonthChange;

      _this.setState({
        month: month
      });

      if (onMonthChange) {
        onMonthChange(month);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setType", function (type) {
      _this.setState({
        type: type
      });
    });

    _defineProperty(_assertThisInitialized(_this), "nextMonth", function () {
      var isGregorian = _this.state.isGregorian;
      var monthFormat = isGregorian ? 'Month' : 'jMonth';

      _this.setState({
        month: _this.state.month.clone().add(1, monthFormat)
      }, function () {
        return _this.props.onMonthChange && _this.props.onMonthChange(_this.state.month);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "prevMonth", function () {
      var isGregorian = _this.state.isGregorian;
      var monthFormat = isGregorian ? 'Month' : 'jMonth';

      _this.setState({
        month: _this.state.month.clone().subtract(1, monthFormat)
      }, function () {
        return _this.props.onMonthChange && _this.props.onMonthChange(_this.state.month);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectDay", function (selectedDay) {
      var _this$state = _this.state,
          month = _this$state.month,
          isGregorian = _this$state.isGregorian;
      var yearMonthFormat = isGregorian ? 'YYYYMM' : 'jYYYYjMM'; // Because there's no `m1.isSame(m2, 'jMonth')`

      if (selectedDay.format(yearMonthFormat) !== month.format(yearMonthFormat)) {
        _this.setState({
          month: selectedDay
        });
      }

      _this.setState({
        selectedDay: selectedDay
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOnDay", function (selectedDay) {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          onChange = _this$props.onChange;

      _this.selectDay(selectedDay);

      if (onSelect) {
        onSelect(selectedDay);
      }

      if (onChange) onChange(selectedDay);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (event) {
      if (_this.props.onClickOutside) {
        _this.props.onClickOutside(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "days", null);

    _defineProperty(_assertThisInitialized(_this), "lastRenderedMonth", null);

    _defineProperty(_assertThisInitialized(_this), "renderMonthSelector", function () {
      var _this$state2 = _this.state,
          month = _this$state2.month,
          isGregorian = _this$state2.isGregorian;
      var styles = _this.props.styles;
      return /*#__PURE__*/_react["default"].createElement(_MonthSelector["default"], {
        styles: styles,
        isGregorian: isGregorian,
        selectedMonth: month
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderDays", function () {
      var _this$state3 = _this.state,
          month = _this$state3.month,
          selectedDay = _this$state3.selectedDay,
          isGregorian = _this$state3.isGregorian;
      var _this$props2 = _this.props,
          children = _this$props2.children,
          min = _this$props2.min,
          max = _this$props2.max,
          styles = _this$props2.styles,
          outsideClickIgnoreClass = _this$props2.outsideClickIgnoreClass;
      var days;

      if (_this.lastRenderedMonth === month) {
        days = _this.days;
      } else {
        days = (0, _momentHelper.getDaysOfMonth)(month, isGregorian);
        _this.days = days;
        _this.lastRenderedMonth = month;
      }

      var monthFormat = isGregorian ? 'MM' : 'jMM';
      var dateFormat = isGregorian ? 'YYYYMMDD' : 'jYYYYjMMjDD';
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: _this.props.calendarClass
      }, children, /*#__PURE__*/_react["default"].createElement(_DaysViewHeading["default"], {
        timePicker: _this.props.timePicker,
        isGregorian: isGregorian,
        styles: styles,
        month: month
      }), /*#__PURE__*/_react["default"].createElement(_DaysOfWeek["default"], {
        styles: styles,
        isGregorian: isGregorian
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: styles.dayPickerContainer
      }, days.map(function (day) {
        var isCurrentMonth = day.format(monthFormat) === month.format(monthFormat);
        var selected = selectedDay ? selectedDay.isSame(day, 'day') : false;
        var key = day.format(dateFormat);
        var isToday = (0, _momentHelper.checkToday)(day.format('YYYYMMDD')); // disabling by old min-max props

        var disabled = (min ? day.isBefore(min) : false) || (max ? day.isAfter(max) : false); // new method for disabling and highlighting the ranges of days

        var dayState = _this.state.ranges.getDayState(day);

        return /*#__PURE__*/_react["default"].createElement(_Day["default"], {
          isGregorian: isGregorian,
          key: key,
          onClick: _this.handleClickOnDay,
          day: day,
          isToday: isToday,
          colors: dayState.colors,
          disabled: disabled || dayState.disabled // disabled by old method or new range method
          ,
          selected: selected,
          isCurrentMonth: isCurrentMonth,
          styles: styles
        });
      })));
    });

    return _this;
  }

  _createClass(Calendar, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        nextMonth: this.nextMonth.bind(this),
        prevMonth: this.prevMonth.bind(this),
        setCalendarMode: this.setMode.bind(this),
        setMonth: this.setMonth.bind(this),
        setType: this.setMonth.bind(this)
      };
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(_ref) {
      var selectedDay = _ref.selectedDay,
          defaultMonth = _ref.defaultMonth,
          min = _ref.min,
          isGregorian = _ref.isGregorian,
          ranges = _ref.ranges;

      if (typeof isGregorian !== 'undefined' && isGregorian !== this.state.isGregorian) {
        this.setState({
          isGregorian: isGregorian
        });
      }

      if (this.props.selectedDay !== selectedDay) {
        this.selectDay(selectedDay || (0, _momentJalaali["default"])());
      } else if (defaultMonth && this.props.defaultMonth !== defaultMonth && this.state.month === this.props.defaultMonth) {
        this.setMonth(defaultMonth);
      } else if (min && this.props.min !== min && this.state.month.isSame(this.props.min)) {
        this.setMonth(min.clone());
      }

      if (JSON.stringify(this.props.ranges) !== JSON.stringify(ranges)) {
        this.setState({
          ranges: new _RangesList["default"](ranges)
        });
      }
    }
  }, {
    key: "changeCalendarMode",
    value: function changeCalendarMode() {
      this.props.toggleMode();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          selectedDay = _this$props3.selectedDay,
          min = _this$props3.min,
          max = _this$props3.max,
          onClickOutside = _this$props3.onClickOutside,
          outsideClickIgnoreClass = _this$props3.outsideClickIgnoreClass,
          styles = _this$props3.styles,
          className = _this$props3.className,
          showTodayButton = _this$props3.showTodayButton;
      var _this$state4 = this.state,
          mode = _this$state4.mode,
          isGregorian = _this$state4.isGregorian;
      var jalaaliClassName = isGregorian ? '' : 'jalaali ';
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(styles.calendarContainer, " ").concat(jalaaliClassName).concat(className)
      }, this.props.showToggleButton && /*#__PURE__*/_react["default"].createElement("button", {
        className: "calendarButton toggleButton",
        type: "button",
        onClick: this.changeCalendarMode.bind(this)
      }, isGregorian ? this.props.toggleButtonText[0] : this.props.toggleButtonText[1]), mode === 'monthSelector' ? this.renderMonthSelector() : this.renderDays(), showTodayButton && /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "calendarButton selectToday",
        onClick: function onClick() {
          return _this2.handleClickOnDay((0, _momentJalaali["default"])());
        }
      }, isGregorian ? 'today' : 'امروز'));
    }
  }]);

  return Calendar;
}(_react.Component);

exports.Calendar = Calendar;

_defineProperty(Calendar, "propTypes", {
  min: _propTypes["default"].object,
  max: _propTypes["default"].object,
  styles: _propTypes["default"].object,
  selectedDay: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  defaultMonth: _propTypes["default"].object,
  onSelect: _propTypes["default"].func,
  onMonthChange: _propTypes["default"].func,
  onClickOutside: _propTypes["default"].func,
  containerProps: _propTypes["default"].object,
  isGregorian: _propTypes["default"].bool,
  calendarClass: _propTypes["default"].string,
  showToggleButton: _propTypes["default"].bool,
  toggleButtonText: _propTypes["default"].any,
  showTodayButton: _propTypes["default"].bool
});

_defineProperty(Calendar, "childContextTypes", {
  nextMonth: _propTypes["default"].func.isRequired,
  prevMonth: _propTypes["default"].func.isRequired,
  setCalendarMode: _propTypes["default"].func.isRequired,
  setMonth: _propTypes["default"].func.isRequired,
  setType: _propTypes["default"].func.isRequired
});

_defineProperty(Calendar, "defaultProps", {
  styles: _DefaultStyles.defaultStyles,
  containerProps: {},
  isGregorian: true,
  showToggleButton: false,
  showTodayButton: true,
  toggleButtonText: ['تاریخ شمسی', 'تاریخ میلادی']
});

var _default = (0, _reactOnclickoutside["default"])(Calendar);

exports["default"] = _default;