"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _momentJalaali = _interopRequireDefault(require("moment-jalaali"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _super.call(this, props);
    var _this$props = _this.props,
        value = _this$props.value,
        format = _this$props.format;
    _this.state = {
      str: value && value.format(format) || '',
      invalid: false
    };
    _this.onClear = _this.onClear.bind(_assertThisInitialized(_this));
    _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Header, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var value = nextProps.value,
          format = nextProps.format;
      this.setState({
        str: value && value.format(format) || '',
        invalid: false
      });
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(event) {
      var str = event.target.value;
      this.setState({
        str: str
      });
      var _this$props2 = this.props,
          format = _this$props2.format,
          hourOptions = _this$props2.hourOptions,
          minuteOptions = _this$props2.minuteOptions,
          secondOptions = _this$props2.secondOptions,
          disabledHours = _this$props2.disabledHours,
          disabledMinutes = _this$props2.disabledMinutes,
          disabledSeconds = _this$props2.disabledSeconds,
          onChange = _this$props2.onChange,
          allowEmpty = _this$props2.allowEmpty;

      if (str) {
        var originalValue = this.props.value;
        var value = this.getProtoValue().clone();
        var parsed = (0, _momentJalaali["default"])(str, format, true);

        if (!parsed.isValid()) {
          this.setState({
            invalid: true
          });
          return;
        }

        value.hour(parsed.hour()).minute(parsed.minute()).second(parsed.second()); // if time value not allowed, response warning.

        if (hourOptions.indexOf(value.hour()) < 0 || minuteOptions.indexOf(value.minute()) < 0 || secondOptions.indexOf(value.second()) < 0) {
          this.setState({
            invalid: true
          });
          return;
        } // if time value is disabled, response warning.


        var disabledHourOptions = disabledHours();
        var disabledMinuteOptions = disabledMinutes(value.hour());
        var disabledSecondOptions = disabledSeconds(value.hour(), value.minute());

        if (disabledHourOptions && disabledHourOptions.indexOf(value.hour()) >= 0 || disabledMinuteOptions && disabledMinuteOptions.indexOf(value.minute()) >= 0 || disabledSecondOptions && disabledSecondOptions.indexOf(value.second()) >= 0) {
          this.setState({
            invalid: true
          });
          return;
        }

        if (originalValue) {
          if (originalValue.hour() !== value.hour() || originalValue.minute() !== value.minute() || originalValue.second() !== value.second()) {
            // keep other fields for rc-calendar
            var changedValue = originalValue.clone();
            changedValue.hour(value.hour());
            changedValue.minute(value.minute());
            changedValue.second(value.second());
            onChange(changedValue);
          }
        } else if (originalValue !== value) {
          onChange(value);
        }
      } else if (allowEmpty) {
        onChange(null);
      } else {
        this.setState({
          invalid: true
        });
        return;
      }

      this.setState({
        invalid: false
      });
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      if (e.keyCode === 27) {
        this.props.onEsc();
      }
    }
  }, {
    key: "onClear",
    value: function onClear() {
      this.setState({
        str: ''
      });
      this.props.onClear();
    }
  }, {
    key: "getClearButton",
    value: function getClearButton() {
      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          allowEmpty = _this$props3.allowEmpty;

      if (!allowEmpty) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement("a", {
        className: "".concat(prefixCls, "-clear-btn"),
        role: "button",
        title: this.props.clearText,
        onMouseDown: this.onClear
      });
    }
  }, {
    key: "getProtoValue",
    value: function getProtoValue() {
      return this.props.value || this.props.defaultOpenValue;
    }
  }, {
    key: "getInput",
    value: function getInput() {
      var _this2 = this;

      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          placeholder = _this$props4.placeholder;
      var _this$state = this.state,
          invalid = _this$state.invalid,
          str = _this$state.str;
      var invalidClass = invalid ? "".concat(prefixCls, "-input-invalid") : '';
      return /*#__PURE__*/_react["default"].createElement("input", {
        className: "".concat(prefixCls, "-input  ").concat(invalidClass),
        ref: function ref(inst) {
          _this2.input = inst;
        },
        onKeyDown: this.onKeyDown,
        value: str,
        placeholder: placeholder,
        onChange: this.onInputChange
      });
    }
  }, {
    key: "render",
    value: function render() {
      var prefixCls = this.props.prefixCls;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-input-wrap")
      }, this.getInput(), this.getClearButton());
    }
  }]);

  return Header;
}(_react["default"].Component);

_defineProperty(Header, "propTypes", {
  format: _propTypes["default"].string,
  prefixCls: _propTypes["default"].string,
  disabledDate: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  clearText: _propTypes["default"].string,
  value: _propTypes["default"].object,
  hourOptions: _propTypes["default"].array,
  minuteOptions: _propTypes["default"].array,
  secondOptions: _propTypes["default"].array,
  disabledHours: _propTypes["default"].func,
  disabledMinutes: _propTypes["default"].func,
  disabledSeconds: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onClear: _propTypes["default"].func,
  onEsc: _propTypes["default"].func,
  allowEmpty: _propTypes["default"].bool,
  defaultOpenValue: _propTypes["default"].object,
  currentSelectPanel: _propTypes["default"].string
});

var _default = Header;
exports["default"] = _default;