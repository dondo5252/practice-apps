"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var F3 = /*#__PURE__*/function (_React$Component) {
  _inherits(F3, _React$Component);

  var _super = _createSuper(F3);

  function F3(props) {
    var _this;

    _classCallCheck(this, F3);

    _this = _super.call(this, props);
    _this.state = {
      CCNum: '',
      expDate: '',
      CVV: '',
      billingZip: ''
    };
    _this.handleCCNumChange = _this.handleCCNumChange.bind(_assertThisInitialized(_this));
    _this.handleexpDateChange = _this.handleexpDateChange.bind(_assertThisInitialized(_this));
    _this.handleCVVChange = _this.handleCVVChange.bind(_assertThisInitialized(_this));
    _this.handlebillingZipChange = _this.handlebillingZipChange.bind(_assertThisInitialized(_this));
    _this.handleF3NextClick = _this.handleF3NextClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(F3, [{
    key: "handleCCNumChange",
    value: function handleCCNumChange(event) {
      event.preventDefault();
      this.setState({
        CCNum: event.target.value
      });
      console.log(this.state.CCNum);
    }
  }, {
    key: "handleexpDateChange",
    value: function handleexpDateChange(event) {
      event.preventDefault();
      this.setState({
        expDate: event.target.value
      });
      console.log(this.state.expDate);
    }
  }, {
    key: "handleCVVChange",
    value: function handleCVVChange(event) {
      event.preventDefault();
      this.setState({
        CVV: event.target.value
      });
      console.log(this.state.CVV);
    }
  }, {
    key: "handlebillingZipChange",
    value: function handlebillingZipChange(event) {
      event.preventDefault();
      this.setState({
        billingZip: event.target.value
      });
      console.log(this.state.billingZip);
    }
  }, {
    key: "handleF3NextClick",
    value: function handleF3NextClick(event) {
      event.preventDefault();
      console.log(this.state.CCNum, this.state.expDate, this.state.CVV, this.state.billingZip, 'testtttttt');
      this.props.update(this.state.CCNum, this.state.expDate, this.state.CVV, this.state.billingZip);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: this.state.CCNum,
        placeholder: "Credit card number...",
        onChange: this.handleCCNumChange
      })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: this.state.expDate,
        placeholder: "Expiration date...",
        onChange: this.handleexpDateChange
      })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: this.state.CVV,
        placeholder: "Enter your CVV...",
        onChange: this.handleCVVChange
      })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: this.state.billingZip,
        placeholder: "Billing zip...",
        onChange: this.handlebillingZipChange
      })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.handleF3NextClick
      }, "Next")));
    }
  }]);

  return F3;
}(_react["default"].Component);

var _default = F3;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGMyIsInByb3BzIiwic3RhdGUiLCJDQ051bSIsImV4cERhdGUiLCJDVlYiLCJiaWxsaW5nWmlwIiwiaGFuZGxlQ0NOdW1DaGFuZ2UiLCJiaW5kIiwiaGFuZGxlZXhwRGF0ZUNoYW5nZSIsImhhbmRsZUNWVkNoYW5nZSIsImhhbmRsZWJpbGxpbmdaaXBDaGFuZ2UiLCJoYW5kbGVGM05leHRDbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY2xpZW50L3NyYy9jb21wb25lbnRzL0YzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEYzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKVxuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgQ0NOdW06ICcnLFxuICAgICAgICBleHBEYXRlOiAnJyxcbiAgICAgICAgQ1ZWOiAnJyxcbiAgICAgICAgYmlsbGluZ1ppcDogJydcbiAgICAgIH1cbiAgICAgIHRoaXMuaGFuZGxlQ0NOdW1DaGFuZ2UgPSB0aGlzLmhhbmRsZUNDTnVtQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgIHRoaXMuaGFuZGxlZXhwRGF0ZUNoYW5nZSA9IHRoaXMuaGFuZGxlZXhwRGF0ZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgICB0aGlzLmhhbmRsZUNWVkNoYW5nZSA9IHRoaXMuaGFuZGxlQ1ZWQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgIHRoaXMuaGFuZGxlYmlsbGluZ1ppcENoYW5nZSA9IHRoaXMuaGFuZGxlYmlsbGluZ1ppcENoYW5nZS5iaW5kKHRoaXMpXG4gICAgICB0aGlzLmhhbmRsZUYzTmV4dENsaWNrID0gdGhpcy5oYW5kbGVGM05leHRDbGljay5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVDQ051bUNoYW5nZSAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5zZXRTdGF0ZSh7Q0NOdW06IGV2ZW50LnRhcmdldC52YWx1ZX0pXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5DQ051bSlcbiAgfVxuXG4gIGhhbmRsZWV4cERhdGVDaGFuZ2UgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuc2V0U3RhdGUoe2V4cERhdGU6IGV2ZW50LnRhcmdldC52YWx1ZX0pXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5leHBEYXRlKVxuICB9XG5cbiAgaGFuZGxlQ1ZWQ2hhbmdlIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnNldFN0YXRlKHtDVlY6IGV2ZW50LnRhcmdldC52YWx1ZX0pXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5DVlYpXG4gIH1cblxuICBoYW5kbGViaWxsaW5nWmlwQ2hhbmdlIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnNldFN0YXRlKHtiaWxsaW5nWmlwOiBldmVudC50YXJnZXQudmFsdWV9KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYmlsbGluZ1ppcClcbiAgfVxuXG4gIGhhbmRsZUYzTmV4dENsaWNrIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLkNDTnVtLCB0aGlzLnN0YXRlLmV4cERhdGUsIHRoaXMuc3RhdGUuQ1ZWLCB0aGlzLnN0YXRlLmJpbGxpbmdaaXAsICAgJ3Rlc3R0dHR0dHQnKVxuICAgIHRoaXMucHJvcHMudXBkYXRlKHRoaXMuc3RhdGUuQ0NOdW0sIHRoaXMuc3RhdGUuZXhwRGF0ZSwgdGhpcy5zdGF0ZS5DVlYsIHRoaXMuc3RhdGUuYmlsbGluZ1ppcClcbiAgfVxuXG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuQ0NOdW19IHBsYWNlaG9sZGVyPVwiQ3JlZGl0IGNhcmQgbnVtYmVyLi4uXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ0NOdW1DaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmV4cERhdGV9IHBsYWNlaG9sZGVyPVwiRXhwaXJhdGlvbiBkYXRlLi4uXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlZXhwRGF0ZUNoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuQ1ZWfSBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgQ1ZWLi4uXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ1ZWQ2hhbmdlfT48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5iaWxsaW5nWmlwfSBwbGFjZWhvbGRlcj1cIkJpbGxpbmcgemlwLi4uXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlYmlsbGluZ1ppcENoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUYzTmV4dENsaWNrfT5OZXh0PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5l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