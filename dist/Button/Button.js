"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("isomorphic-style-loader/lib/withStyles"));

var _core = require("@material-ui/core");

var _Button = _interopRequireDefault(require("./Button.scss"));

var constants = _interopRequireWildcard(require("./constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Button(_ref) {
  var children = _ref.children,
      loading = _ref.loading,
      disabled = _ref.disabled,
      loadingAndDisabled = _ref.loadingAndDisabled,
      theme = _ref.theme,
      className = _ref.className,
      variant = _ref.variant,
      size = _ref.size,
      classes = _ref.classes,
      restProps = _objectWithoutProperties(_ref, ["children", "loading", "disabled", "loadingAndDisabled", "theme", "className", "variant", "size", "classes"]);

  return /*#__PURE__*/_react["default"].createElement(_core.Button, _extends({
    variant: variant,
    size: size,
    classes: _objectSpread(_objectSpread({}, classes), {}, {
      root: "shared-component-button ".concat(className, " ").concat(theme, " ").concat(classes.root || ''),
      disabled: "shared-component-disabled ".concat(classes.disabled || ''),
      outlined: "shared-components-button-outlined ".concat(classes.outlined || ''),
      text: "shared-components-button-text ".concat(classes.text || '')
    }),
    disabled: loadingAndDisabled || disabled
  }, restProps), loadingAndDisabled || loading ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      visibility: 'hidden'
    }
  }, children), /*#__PURE__*/_react["default"].createElement(_core.CircularProgress, {
    className: "shared-component-button-loading",
    size: 24,
    color: "inherit"
  })) : children);
}

Button.propTypes = {
  children: _propTypes["default"].node.isRequired,
  loading: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  loadingAndDisabled: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  theme: _propTypes["default"].oneOf(Object.values(constants.buttonThemes)),
  variant: _propTypes["default"].oneOf(Object.values(constants.buttonVariants)),
  size: _propTypes["default"].oneOf(Object.values(constants.buttonSizes)),
  classes: _propTypes["default"].object
};
Button.defaultProps = {
  loading: false,
  disabled: false,
  loadingAndDisabled: false,
  theme: constants.buttonThemes.THEME_1,
  className: '',
  variant: constants.buttonVariants.CONTAINED,
  size: constants.buttonSizes.MEDIUM,
  classes: {}
};

var _default = (0, _withStyles["default"])(_Button["default"])(Button);

exports["default"] = _default;