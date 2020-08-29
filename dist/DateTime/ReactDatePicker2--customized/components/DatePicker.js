"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _momentJalaali = _interopRequireDefault(require("moment-jalaali"));

var _reactTether = _interopRequireDefault(require("react-tether"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _Calendar = _interopRequireDefault(require("./Calendar"));

var _CustomTimePicker = _interopRequireDefault(require("./CustomTimePicker"));

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

var outsideClickIgnoreClass = 'ignore--click--outside';

var DatePicker = /*#__PURE__*/function (_Component) {
  _inherits(DatePicker, _Component);

  var _super = _createSuper(DatePicker);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _super.call(this, props); // create a ref to store the textInput DOM element

    _defineProperty(_assertThisInitialized(_this), "setOpen", function (isOpen) {
      _this.setState({
        isOpen: isOpen
      });

      if (_this.props.onOpen) {
        _this.props.onOpen(isOpen);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleMode", function () {
      var isGregorian = !_this.state.isGregorian;
      var nextPropsInputFormat = _this.props.inputFormat;
      var nextPropsInputJalaaliFormat = _this.props.inputJalaaliFormat;

      _this.setState({
        isGregorian: isGregorian,
        inputValue: _this.getValue(_this.props.value, isGregorian, _this.props.timePicker)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      _this.setOpen(true);
    });

    _defineProperty(_assertThisInitialized(_this), "renderInput", function (ref) {
      var _this$state = _this.state,
          isOpen = _this$state.isOpen,
          inputValue = _this$state.inputValue,
          isGregorian = _this$state.isGregorian;
      var className = (0, _classnames2["default"])(_this.props.className, _defineProperty({}, outsideClickIgnoreClass, isOpen));
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: ref
      }, /*#__PURE__*/_react["default"].createElement("input", {
        placeholder: _this.props.placeholder,
        className: "datepicker-input ".concat(className),
        type: "text",
        ref: function ref(inst) {
          _this.input = inst;
        },
        onFocus: _this.handleFocus.bind(_assertThisInitialized(_this)),
        onChange: _this.handleInputChange.bind(_assertThisInitialized(_this)),
        onClick: _this.handleInputClick.bind(_assertThisInitialized(_this)),
        value: isGregorian ? inputValue : _this.toPersianDigits(inputValue),
        readOnly: _this.props.inputReadOnly === true,
        disabled: _this.props.disabled
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderCalendar", function () {
      var _this$state2 = _this.state,
          momentValue = _this$state2.momentValue,
          isGregorian = _this$state2.isGregorian,
          TimePicker = _this$state2.timePickerComponent;
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          min = _this$props.min,
          max = _this$props.max,
          defaultMonth = _this$props.defaultMonth,
          styles = _this$props.styles,
          calendarContainerProps = _this$props.calendarContainerProps,
          ranges = _this$props.ranges;
      return /*#__PURE__*/_react["default"].createElement(_Calendar["default"], {
        toggleMode: _this.toggleMode,
        ranges: ranges,
        min: min,
        max: max,
        selectedDay: momentValue,
        defaultMonth: defaultMonth,
        onSelect: _this.handleSelectDay.bind(_assertThisInitialized(_this)),
        onClickOutside: _this.handleClickOutsideCalendar.bind(_assertThisInitialized(_this)),
        outsideClickIgnoreClass: outsideClickIgnoreClass,
        styles: styles,
        containerProps: calendarContainerProps,
        isGregorian: isGregorian,
        calendarClass: _this.props.calendarClass ? _this.props.calendarClass : '',
        showToggleButton: _this.props.showToggleButton,
        toggleButtonText: _this.props.toggleButtonText,
        showTodayButton: _this.props.showTodayButton,
        timePicker: TimePicker ? /*#__PURE__*/_react["default"].createElement(TimePicker, {
          outsideClickIgnoreClass: outsideClickIgnoreClass,
          isGregorian: isGregorian,
          min: min,
          max: max,
          momentValue: momentValue,
          setMomentValue: _this.setMomentValue.bind(_assertThisInitialized(_this))
        }) : null
      });
    });

    _this.textInput = /*#__PURE__*/_react["default"].createRef();
    _this.state = {
      isOpen: false,
      momentValue: _this.props.defaultValue || null,
      inputValue: _this.getValue(_this.props.defaultValue, _this.props.isGregorian, _this.props.timePicker),
      inputJalaaliFormat: _this.props.inputJalaaliFormat || _this.getInputFormat(false, _this.props.timePicker),
      inputFormat: _this.props.inputFormat || _this.getInputFormat(true, _this.props.timePicker),
      isGregorian: _this.props.isGregorian,
      timePicker: _this.props.timePicker,
      timePickerComponent: _this.props.timePicker ? _CustomTimePicker["default"] : undefined
    };
    return _this;
  }

  _createClass(DatePicker, [{
    key: "getInputFormat",
    value: function getInputFormat(isGregorian, timePicker) {
      if (timePicker) return isGregorian ? 'YYYY/M/D hh:mm A' : 'jYYYY/jM/jD hh:mm A';
      return isGregorian ? 'YYYY/M/D' : 'jYYYY/jM/jD';
    }
  }, {
    key: "getValue",
    value: function getValue(inputValue, isGregorian, timePicker) {
      if (!inputValue) return '';
      var inputFormat = this.state.inputFormat;
      var inputJalaaliFormat = this.state.inputJalaaliFormat;
      if (!inputFormat) inputFormat = this.getInputFormat(isGregorian, timePicker);
      if (!inputJalaaliFormat) inputJalaaliFormat = this.getInputFormat(isGregorian, timePicker);
      return isGregorian ? inputValue.locale('es').format(inputFormat) : inputValue.locale('fa').format(inputJalaaliFormat);
    }
  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      if (this.props.value) {
        this.setMomentValue(this.props.value);
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if ('value' in nextProps && nextProps.value !== this.props.value) {
        this.setMomentValue(nextProps.value);
      }

      if ('isGregorian' in nextProps && nextProps.isGregorian !== this.props.isGregorian) {
        var nextPropsInputFormat = nextProps.inputFormat;
        var nextPropsInputJalaaliFormat = nextProps.inputJalaaliFormat;
        this.setState({
          isGregorian: nextProps.isGregorian,
          inputValue: this.getValue(nextProps.value, nextProps.isGregorian, nextProps.timePicker),
          inputFormat: nextPropsInputFormat || this.state.inputFormat,
          inputJalaaliFormat: nextPropsInputJalaaliFormat || this.state.inputJalaaliFormat
        });
      }

      if ('timePicker' in nextProps && nextProps.timePicker !== this.props.timePicker) {
        this.setState({
          timePicker: nextProps.timePicker,
          timePickerComponent: this.props.timePicker ? _CustomTimePicker["default"] : undefined
        });
      }
    }
  }, {
    key: "setMomentValue",
    value: function setMomentValue(momentValue) {
      var _this$state3 = this.state,
          inputFormat = _this$state3.inputFormat,
          isGregorian = _this$state3.isGregorian,
          timePicker = _this$state3.timePicker;

      if (this.props.onChange) {
        this.props.onChange(momentValue);
      }

      var inputValue = this.getValue(momentValue, isGregorian, timePicker);
      this.setState({
        momentValue: momentValue,
        inputValue: inputValue
      });
    }
  }, {
    key: "handleClickOutsideCalendar",
    value: function handleClickOutsideCalendar() {
      this.setOpen(false);
    }
  }, {
    key: "toEnglishDigits",
    value: function toEnglishDigits(str) {
      if (!str) return str;
      var regex1 = /[\u0660-\u0669]/g;
      var regex2 = /[\u06f0-\u06f9]/g;
      return str.replace(regex1, function (c) {
        return c.charCodeAt(0) - 0x0660;
      }).replace(regex2, function (c) {
        return c.charCodeAt(0) - 0x06f0;
      });
    }
  }, {
    key: "toPersianDigits",
    value: function toPersianDigits(str) {
      if (!str) return str;
      var regex = /[0-9]/g;
      var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
      return str.replace(regex, function (w) {
        return id[+w];
      });
    }
  }, {
    key: "handleSelectDay",
    value: function handleSelectDay(selectedDay) {
      var oldValue = this.state.momentValue;
      var momentValue = selectedDay.clone();

      if (oldValue) {
        momentValue = momentValue.set({
          hour: oldValue.hours(),
          minute: oldValue.minutes(),
          second: oldValue.seconds()
        });
      }

      this.setOpen(false);
      this.setMomentValue(momentValue);
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var _this$state4 = this.state,
          inputFormat = _this$state4.inputFormat,
          inputJalaaliFormat = _this$state4.inputJalaaliFormat,
          isGregorian = _this$state4.isGregorian;
      var inputValue = this.toEnglishDigits(event.target.value);
      var currentInputFormat = isGregorian ? inputFormat : inputJalaaliFormat;
      var momentValue = (0, _momentJalaali["default"])(inputValue, currentInputFormat);

      if (momentValue.isValid()) {
        this.setState({
          momentValue: momentValue
        });
      }

      var isUserClearInput = inputValue === '';

      if (this.props.onChange) {
        if (isUserClearInput) {
          this.props.onChange('');
        }
      }

      this.setState({
        inputValue: inputValue
      });
    }
  }, {
    key: "handleInputClick",
    value: function handleInputClick() {
      if (!this.props.disabled) {
        this.setOpen(true);
      }
    }
  }, {
    key: "removeDate",
    value: function removeDate() {
      var onChange = this.props.onChange;

      if (onChange) {
        onChange('');
      }

      this.setState({
        input: '',
        inputValue: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderCalendar();
    }
  }]);

  return DatePicker;
}(_react.Component);

exports["default"] = DatePicker;

_defineProperty(DatePicker, "propTypes", {
  value: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  defaultValue: _propTypes["default"].object,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  children: _propTypes["default"].node,
  min: _propTypes["default"].object,
  max: _propTypes["default"].object,
  defaultMonth: _propTypes["default"].object,
  inputFormat: _propTypes["default"].string,
  inputJalaaliFormat: _propTypes["default"].string,
  removable: _propTypes["default"].bool,
  styles: _propTypes["default"].object,
  calendarStyles: _propTypes["default"].object,
  calendarContainerProps: _propTypes["default"].object,
  isGregorian: _propTypes["default"].bool,
  // jalaali or gregorian
  timePicker: _propTypes["default"].bool,
  calendarClass: _propTypes["default"].string,
  datePickerClass: _propTypes["default"].string,
  tetherAttachment: _propTypes["default"].string,
  inputReadOnly: _propTypes["default"].bool,
  ranges: _propTypes["default"].array,
  showToggleButton: _propTypes["default"].bool,
  toggleButtonText: _propTypes["default"].any,
  showTodayButton: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string
});

_defineProperty(DatePicker, "defaultProps", {
  styles: undefined,
  calendarContainerProps: {},
  isGregorian: true,
  timePicker: true,
  showTodayButton: true,
  placeholder: ''
});