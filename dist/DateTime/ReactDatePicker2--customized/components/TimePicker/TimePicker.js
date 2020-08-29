"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rcTrigger = _interopRequireDefault(require("rc-trigger"));

var _momentJalaali = _interopRequireDefault(require("moment-jalaali"));

var _Panel = _interopRequireDefault(require("./Panel"));

var _placements = _interopRequireDefault(require("./placements"));

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

function refFn(field, component) {
  this[field] = component;
}

var Picker = /*#__PURE__*/function (_React$Component) {
  _inherits(Picker, _React$Component);

  var _super = _createSuper(Picker);

  function Picker(props) {
    var _this;

    _classCallCheck(this, Picker);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setOpen", function (open, callback) {
      var _this$props = _this.props,
          onOpen = _this$props.onOpen,
          onClose = _this$props.onClose;

      if (_this.state.open !== open) {
        _this.setState({
          open: open
        }, callback);

        var event = {
          open: open
        };

        if (open) {
          onOpen(event);
        } else {
          onClose(event);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPanelChange", function (value) {
      _this.setValue(value);
    });

    _defineProperty(_assertThisInitialized(_this), "onPanelClear", function () {
      _this.setValue(null);

      _this.setOpen(false);
    });

    _defineProperty(_assertThisInitialized(_this), "onVisibleChange", function (open) {
      _this.setOpen(open);
    });

    _defineProperty(_assertThisInitialized(_this), "onEsc", function () {
      _this.setOpen(false);

      _this.picker.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e) {
      if (e.keyCode === 40) {
        _this.setOpen(true);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setValue", function (value) {
      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }

      _this.props.onChange(value);
    });

    _defineProperty(_assertThisInitialized(_this), "getFormat", function () {
      var format = _this.props.format;

      if (_this.props.format) {
        format = _this.props.format;
      } else if (!_this.props.showSecond) {
        format = 'HH:mm';
      } else if (!_this.props.showHour) {
        format = 'mm:ss';
      } else {
        format = 'HH:mm:ss';
      }

      if (_this.props.showAMPM) {
        format = "".concat(format.replace('HH', 'hh'), " A");
      }

      return format;
    });

    _defineProperty(_assertThisInitialized(_this), "getPanelElement", function () {
      var _this$props2 = _this.props,
          prefixCls = _this$props2.prefixCls,
          placeholder = _this$props2.placeholder,
          disabledHours = _this$props2.disabledHours,
          disabledMinutes = _this$props2.disabledMinutes,
          disabledSeconds = _this$props2.disabledSeconds,
          hideDisabledOptions = _this$props2.hideDisabledOptions,
          allowEmpty = _this$props2.allowEmpty,
          showHour = _this$props2.showHour,
          showSecond = _this$props2.showSecond,
          showAMPM = _this$props2.showAMPM,
          defaultOpenValue = _this$props2.defaultOpenValue,
          clearText = _this$props2.clearText,
          isGregorian = _this$props2.isGregorian;
      return /*#__PURE__*/_react["default"].createElement(_Panel["default"], {
        isGregorian: isGregorian,
        clearText: clearText,
        prefixCls: "".concat(prefixCls, "-panel"),
        ref: function ref(refs) {
          _this.savePanelRef = refs;
        },
        value: _this.state.value,
        onChange: _this.onPanelChange,
        onClear: _this.onPanelClear,
        defaultOpenValue: defaultOpenValue,
        showHour: showHour,
        onEsc: _this.onEsc,
        showSecond: showSecond,
        showAMPM: showAMPM,
        allowEmpty: true,
        format: _this.getFormat(),
        placeholder: placeholder,
        disabledHours: disabledHours,
        disabledMinutes: disabledMinutes,
        disabledSeconds: disabledSeconds,
        hideDisabledOptions: hideDisabledOptions
      });
    });

    _this.savePanelRef = refFn.bind(_assertThisInitialized(_this), 'panelInstance');

    var _this$props3 = _this.props,
        defaultOpen = _this$props3.defaultOpen,
        defaultValue = _this$props3.defaultValue,
        _this$props3$open = _this$props3.open,
        _open = _this$props3$open === void 0 ? defaultOpen : _this$props3$open,
        _this$props3$value = _this$props3.value,
        _value = _this$props3$value === void 0 ? defaultValue : _this$props3$value;

    _this.state = {
      open: _open,
      value: _value
    };
    return _this;
  }

  _createClass(Picker, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var value = nextProps.value,
          open = nextProps.open;

      if ('value' in nextProps) {
        this.setState({
          value: value
        });
      }

      if (open !== undefined) {
        this.setState({
          open: open
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          panelClassName = _this$props4.panelClassName,
          prefixCls = _this$props4.prefixCls,
          placeholder = _this$props4.placeholder,
          placement = _this$props4.placement,
          align = _this$props4.align,
          disabled = _this$props4.disabled,
          transitionName = _this$props4.transitionName,
          style = _this$props4.style,
          className = _this$props4.className,
          showHour = _this$props4.showHour,
          showSecond = _this$props4.showSecond,
          getPopupContainer = _this$props4.getPopupContainer;
      var _this$state = this.state,
          open = _this$state.open,
          value = _this$state.value;
      var popupClassName;

      if (!showHour || !showSecond) {
        popupClassName = "".concat(prefixCls, "-panel-narrow");
      }

      return /*#__PURE__*/_react["default"].createElement(_rcTrigger["default"], {
        prefixCls: "".concat(prefixCls, "-panel  ").concat(panelClassName),
        popupClassName: popupClassName,
        popup: this.getPanelElement(),
        popupAlign: align,
        builtinPlacements: _placements["default"],
        popupPlacement: placement,
        action: disabled ? [] : ['click'],
        destroyPopupOnHide: true,
        getPopupContainer: getPopupContainer,
        popupTransitionName: transitionName,
        popupVisible: open,
        onPopupVisibleChange: this.onVisibleChange
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "".concat(prefixCls, " ").concat(className),
        style: style
      }, /*#__PURE__*/_react["default"].createElement("input", {
        className: "".concat(prefixCls, "-input"),
        ref: function ref(refs) {
          _this2.picker = refs;
        },
        type: "text",
        placeholder: placeholder,
        readOnly: true,
        onKeyDown: this.onKeyDown,
        disabled: disabled,
        value: value && value.format(this.getFormat()) || ''
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: "".concat(prefixCls, "-icon")
      })));
    }
  }]);

  return Picker;
}(_react["default"].Component);

_defineProperty(Picker, "propTypes", {
  prefixCls: _propTypes["default"].string,
  clearText: _propTypes["default"].string,
  value: _propTypes["default"].object,
  defaultOpenValue: _propTypes["default"].object,
  disabled: _propTypes["default"].bool,
  allowEmpty: _propTypes["default"].bool,
  defaultValue: _propTypes["default"].object,
  open: _propTypes["default"].bool,
  defaultOpen: _propTypes["default"].bool,
  align: _propTypes["default"].object,
  placement: _propTypes["default"].any,
  transitionName: _propTypes["default"].string,
  getPopupContainer: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  format: _propTypes["default"].string,
  showHour: _propTypes["default"].bool,
  style: _propTypes["default"].object,
  className: _propTypes["default"].string,
  showSecond: _propTypes["default"].bool,
  disabledHours: _propTypes["default"].func,
  disabledMinutes: _propTypes["default"].func,
  disabledSeconds: _propTypes["default"].func,
  hideDisabledOptions: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onOpen: _propTypes["default"].func,
  onClose: _propTypes["default"].func,
  showAMPM: _propTypes["default"].bool,
  panelClassName: _propTypes["default"].string,
  isGregorian: _propTypes["default"].bool
});

_defineProperty(Picker, "defaultProps", {
  clearText: 'clear',
  prefixCls: 'rc-time-picker',
  defaultOpen: false,
  style: {},
  className: '',
  align: {},
  defaultOpenValue: (0, _momentJalaali["default"])(),
  allowEmpty: true,
  showHour: true,
  showSecond: true,
  disabledHours: noop,
  disabledMinutes: noop,
  disabledSeconds: noop,
  hideDisabledOptions: false,
  placement: 'bottomLeft',
  onChange: noop,
  onOpen: noop,
  onClose: noop
});

var _default = Picker;
exports["default"] = _default;