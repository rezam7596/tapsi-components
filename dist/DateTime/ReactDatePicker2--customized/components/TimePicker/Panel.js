"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _momentJalaali = _interopRequireDefault(require("moment-jalaali"));

var _Header = _interopRequireDefault(require("./Header"));

var _Combobox = _interopRequireDefault(require("./Combobox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function noop() {}

function generateOptions(length, disabledOptions, hideDisabledOptions) {
  var arr = [];

  for (var value = 0; value < length; value++) {
    if (!disabledOptions || disabledOptions.indexOf(value) < 0 || !hideDisabledOptions) {
      arr.push(value);
    }
  }

  return arr;
}

var Panel = /*#__PURE__*/function (_React$Component) {
  _inherits(Panel, _React$Component);

  var _super = _createSuper(Panel);

  function Panel(props) {
    var _this;

    _classCallCheck(this, Panel);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onChange", function (newValue) {
      _this.setState({
        value: newValue
      });

      _this.props.onChange(newValue);
    });

    _defineProperty(_assertThisInitialized(_this), "onClear", function () {
      _this.props.onClear();
    });

    _defineProperty(_assertThisInitialized(_this), "onCurrentSelectPanelChange", function (currentSelectPanel) {
      _this.setState({
        currentSelectPanel: currentSelectPanel
      });
    });

    _this.state = {
      value: _this.props.value,
      selectionRange: []
    };
    return _this;
  }

  _createClass(Panel, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var value = nextProps.value;

      if (value) {
        this.setState({
          value: value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isGregorian = _this$props.isGregorian,
          formatter = _this$props.formatter,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          placeholder = _this$props.placeholder,
          disabledHours = _this$props.disabledHours,
          disabledMinutes = _this$props.disabledMinutes,
          disabledSeconds = _this$props.disabledSeconds,
          hideDisabledOptions = _this$props.hideDisabledOptions,
          allowEmpty = _this$props.allowEmpty,
          showHour = _this$props.showHour,
          showSecond = _this$props.showSecond,
          showAMPM = _this$props.showAMPM,
          format = _this$props.format,
          defaultOpenValue = _this$props.defaultOpenValue,
          clearText = _this$props.clearText,
          onEsc = _this$props.onEsc;
      var _this$state = this.state,
          value = _this$state.value,
          currentSelectPanel = _this$state.currentSelectPanel;
      var disabledHourOptions = disabledHours();
      var disabledMinuteOptions = disabledMinutes(value ? value.hour() : null);
      var disabledSecondOptions = disabledSeconds(value ? value.hour() : null, value ? value.minute() : null);
      var hourOptions = generateOptions(24, disabledHourOptions, hideDisabledOptions);
      var minuteOptions = generateOptions(60, disabledMinuteOptions, hideDisabledOptions);
      var secondOptions = generateOptions(60, disabledSecondOptions, hideDisabledOptions);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-inner ").concat(className)
      }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
        clearText: clearText,
        prefixCls: prefixCls,
        defaultOpenValue: defaultOpenValue,
        value: value,
        currentSelectPanel: currentSelectPanel,
        onEsc: onEsc,
        format: format,
        placeholder: placeholder,
        hourOptions: hourOptions,
        minuteOptions: minuteOptions,
        secondOptions: secondOptions,
        disabledHours: disabledHours,
        disabledMinutes: disabledMinutes,
        disabledSeconds: disabledSeconds,
        onChange: this.onChange,
        onClear: this.onClear,
        allowEmpty: allowEmpty
      }), /*#__PURE__*/_react["default"].createElement(_Combobox["default"], {
        isGregorian: isGregorian,
        formatter: formatter,
        prefixCls: prefixCls,
        value: value,
        defaultOpenValue: defaultOpenValue,
        format: format,
        onChange: this.onChange,
        showAMPM: showAMPM,
        showHour: showHour,
        showSecond: showSecond,
        hourOptions: hourOptions,
        minuteOptions: minuteOptions,
        secondOptions: secondOptions,
        disabledHours: disabledHours,
        disabledMinutes: disabledMinutes,
        disabledSeconds: disabledSeconds,
        onCurrentSelectPanelChange: this.onCurrentSelectPanelChange
      }));
    }
  }]);

  return Panel;
}(_react["default"].Component);

_defineProperty(Panel, "propTypes", {
  clearText: _propTypes["default"].string,
  prefixCls: _propTypes["default"].string,
  defaultOpenValue: _propTypes["default"].object,
  value: _propTypes["default"].object,
  placeholder: _propTypes["default"].string,
  format: _propTypes["default"].string,
  disabledHours: _propTypes["default"].func,
  disabledMinutes: _propTypes["default"].func,
  disabledSeconds: _propTypes["default"].func,
  hideDisabledOptions: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onEsc: _propTypes["default"].func,
  allowEmpty: _propTypes["default"].bool,
  showHour: _propTypes["default"].bool,
  showSecond: _propTypes["default"].bool,
  onClear: _propTypes["default"].func,
  showAMPM: _propTypes["default"].bool,
  isGregorian: _propTypes["default"].bool
});

_defineProperty(Panel, "defaultProps", {
  prefixCls: 'rc-time-picker-panel',
  onChange: noop,
  onClear: noop,
  defaultOpenValue: (0, _momentJalaali["default"])()
});

var _default = Panel;
exports["default"] = _default;