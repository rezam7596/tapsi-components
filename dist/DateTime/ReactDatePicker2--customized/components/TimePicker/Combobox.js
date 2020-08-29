"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Select = _interopRequireDefault(require("./Select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var pad = function pad(value) {
  return value < 10 ? "0".concat(value) : "".concat(value);
};

var formatOption = function formatOption(option, disabledOptions) {
  var value = pad(option);
  var disabled = false;

  if (disabledOptions && disabledOptions.indexOf(option) >= 0) {
    disabled = true;
  }

  return {
    value: value,
    disabled: disabled
  };
};

var Combobox = /*#__PURE__*/function (_React$Component) {
  _inherits(Combobox, _React$Component);

  var _super = _createSuper(Combobox);

  function Combobox() {
    var _this;

    _classCallCheck(this, Combobox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onItemChange", function (type, itemValue) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          defaultOpenValue = _this$props.defaultOpenValue;
      var value = (_this.props.value || defaultOpenValue).clone();

      if (type === 'hour') {
        value.hour(itemValue);
      } else if (type === 'minute') {
        value.minute(itemValue);
      } else if (type === 'second') {
        value.second(itemValue);
      } else {
        var actualPeriod = value.format('A');

        if (actualPeriod !== itemValue) {
          var hour24style = value.hour();
          var hour12style = hour24style < 12 ? hour24style : hour24style - 12;

          if (itemValue === 'PM') {
            value.hour(hour12style + 12);
          } else {
            value.hour(hour12style);
          }
        }
      }

      onChange(value);
    });

    _defineProperty(_assertThisInitialized(_this), "onEnterSelectPanel", function (range) {
      _this.props.onCurrentSelectPanelChange(range);
    });

    _defineProperty(_assertThisInitialized(_this), "getHourSelect", function (hour) {
      var _this$props2 = _this.props,
          prefixCls = _this$props2.prefixCls,
          showAMPM = _this$props2.showAMPM,
          disabledHours = _this$props2.disabledHours,
          showHour = _this$props2.showHour;

      if (!showHour) {
        return null;
      }

      var disabledOptions = disabledHours();
      var hourOptions = _this.props.hourOptions;
      var formattedOptions = hourOptions.map(function (option) {
        return formatOption(option, disabledOptions);
      });

      if (showAMPM) {
        hourOptions = hourOptions.filter(function (value) {
          return hour < 12 ? value < 12 : value >= 12;
        });
        formattedOptions = formattedOptions.map(function (option) {
          return _objectSpread(_objectSpread({}, option), {}, {
            label: option.value <= 12 ? option.value : pad(option.value - 12)
          });
        }).filter(function (_ref) {
          var value = _ref.value;
          return hour < 12 ? Number(value) < 12 : Number(value) >= 12;
        });
      }

      return /*#__PURE__*/_react["default"].createElement(_Select["default"], {
        prefixCls: prefixCls,
        options: formattedOptions,
        selectedIndex: hourOptions.indexOf(hour),
        type: "hour",
        onSelect: _this.onItemChange,
        onMouseEnter: _this.onEnterSelectPanel.bind(_assertThisInitialized(_this), 'hour')
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getMinuteSelect", function (minute) {
      var _this$props3 = _this.props,
          prefixCls = _this$props3.prefixCls,
          minuteOptions = _this$props3.minuteOptions,
          disabledMinutes = _this$props3.disabledMinutes,
          defaultOpenValue = _this$props3.defaultOpenValue;
      var value = _this.props.value || defaultOpenValue;
      var disabledOptions = disabledMinutes(value.hour());
      return /*#__PURE__*/_react["default"].createElement(_Select["default"], {
        prefixCls: prefixCls,
        options: minuteOptions.map(function (option) {
          return formatOption(option, disabledOptions);
        }),
        selectedIndex: minuteOptions.indexOf(minute),
        type: "minute",
        onSelect: _this.onItemChange,
        onMouseEnter: _this.onEnterSelectPanel.bind(_assertThisInitialized(_this), 'minute')
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getSecondSelect", function (second) {
      var _this$props4 = _this.props,
          prefixCls = _this$props4.prefixCls,
          secondOptions = _this$props4.secondOptions,
          disabledSeconds = _this$props4.disabledSeconds,
          showSecond = _this$props4.showSecond,
          defaultOpenValue = _this$props4.defaultOpenValue;

      if (!showSecond) {
        return null;
      }

      var value = _this.props.value || defaultOpenValue;
      var disabledOptions = disabledSeconds(value.hour(), value.minute());
      return /*#__PURE__*/_react["default"].createElement(_Select["default"], {
        prefixCls: prefixCls,
        options: secondOptions.map(function (option) {
          return formatOption(option, disabledOptions);
        }),
        selectedIndex: secondOptions.indexOf(second),
        type: "second",
        onSelect: _this.onItemChange,
        onMouseEnter: _this.onEnterSelectPanel.bind(_assertThisInitialized(_this), 'second')
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getAMPMSelect", function (period) {
      var _this$props5 = _this.props,
          prefixCls = _this$props5.prefixCls,
          showAMPM = _this$props5.showAMPM,
          defaultOpenValue = _this$props5.defaultOpenValue,
          isGregorian = _this$props5.isGregorian;

      if (!showAMPM) {
        return null;
      }

      var options = [{
        value: 'AM',
        label: isGregorian ? 'AM' : 'ق.ظ'
      }, {
        value: 'PM',
        label: isGregorian ? 'PM' : 'ب.ظ'
      }];
      return /*#__PURE__*/_react["default"].createElement(_Select["default"], {
        prefixCls: prefixCls,
        options: options,
        selectedIndex: period === 'AM' ? 0 : 1,
        type: "period",
        onSelect: _this.onItemChange,
        onMouseEnter: _this.onEnterSelectPanel.bind(_assertThisInitialized(_this), 'period')
      });
    });

    return _this;
  }

  _createClass(Combobox, [{
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          prefixCls = _this$props6.prefixCls,
          defaultOpenValue = _this$props6.defaultOpenValue;
      var value = this.props.value || defaultOpenValue;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-combobox")
      }, this.getHourSelect(value.hour()), this.getMinuteSelect(value.minute()), this.getSecondSelect(value.second()), this.getAMPMSelect(value.hour() < 12 ? 'AM' : 'PM'));
    }
  }]);

  return Combobox;
}(_react["default"].Component);

_defineProperty(Combobox, "propTypes", {
  format: _propTypes["default"].string,
  defaultOpenValue: _propTypes["default"].object,
  prefixCls: _propTypes["default"].string,
  value: _propTypes["default"].object,
  onChange: _propTypes["default"].func,
  showHour: _propTypes["default"].bool,
  showSecond: _propTypes["default"].bool,
  hourOptions: _propTypes["default"].array,
  minuteOptions: _propTypes["default"].array,
  secondOptions: _propTypes["default"].array,
  disabledHours: _propTypes["default"].func,
  disabledMinutes: _propTypes["default"].func,
  disabledSeconds: _propTypes["default"].func,
  onCurrentSelectPanelChange: _propTypes["default"].func,
  isGregorian: _propTypes["default"].bool
});

var _default = Combobox;
exports["default"] = _default;