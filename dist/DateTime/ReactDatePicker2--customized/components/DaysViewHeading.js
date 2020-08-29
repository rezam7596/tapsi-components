"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var Heading = /*#__PURE__*/function (_Component) {
  _inherits(Heading, _Component);

  var _super = _createSuper(Heading);

  function Heading() {
    _classCallCheck(this, Heading);

    return _super.apply(this, arguments);
  }

  _createClass(Heading, [{
    key: "handleMonthClick",
    value: function handleMonthClick(event) {
      var setCalendarMode = this.context.setCalendarMode;
      event.preventDefault();
      setCalendarMode('monthSelector');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$context = this.context,
          nextMonth = _this$context.nextMonth,
          prevMonth = _this$context.prevMonth;
      var _this$props = this.props,
          month = _this$props.month,
          styles = _this$props.styles;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: styles.heading
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: styles.title,
        onClick: this.handleMonthClick.bind(this)
      }, this.props.isGregorian ? month.locale('en').format('MMMM YYYY') : (0, _persian.persianNumber)(month.locale('fa').format('jMMMM jYYYY'))), this.props.timePicker, !this.props.isGregorian && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        title: "\u0645\u0627\u0647 \u0642\u0628\u0644",
        className: styles.prev,
        onClick: prevMonth,
        dangerouslySetInnerHTML: _assets.rightArrow
      }), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        title: "\u0645\u0627\u0647 \u0628\u0639\u062F",
        className: styles.next,
        onClick: nextMonth,
        dangerouslySetInnerHTML: _assets.leftArrow
      })), this.props.isGregorian && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        title: "prev month",
        className: styles.next,
        onClick: prevMonth,
        dangerouslySetInnerHTML: _assets.leftArrow
      }), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        title: "next month",
        className: styles.prev,
        onClick: nextMonth,
        dangerouslySetInnerHTML: _assets.rightArrow
      })));
    }
  }]);

  return Heading;
}(_react.Component);

exports["default"] = Heading;

_defineProperty(Heading, "propTypes", {
  month: _propTypes["default"].object.isRequired,
  isGregorian: _propTypes["default"].bool
});

_defineProperty(Heading, "contextTypes", {
  styles: _propTypes["default"].object,
  nextMonth: _propTypes["default"].func.isRequired,
  prevMonth: _propTypes["default"].func.isRequired,
  setCalendarMode: _propTypes["default"].func.isRequired
});