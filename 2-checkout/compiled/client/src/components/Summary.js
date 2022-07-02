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

var Summary = /*#__PURE__*/function (_React$Component) {
  _inherits(Summary, _React$Component);

  var _super = _createSuper(Summary);

  function Summary(props) {
    var _this;

    _classCallCheck(this, Summary);

    _this = _super.call(this, props);
    _this.state = {};
    _this.handlePurchaseClick = _this.handlePurchaseClick.bind(_assertThisInitialized(_this));
    console.log(props.post);
    return _this;
  }

  _createClass(Summary, [{
    key: "handlePurchaseClick",
    value: function handlePurchaseClick(event) {
      event.preventDefault();
      this.props.post();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "Information Summary"), /*#__PURE__*/_react["default"].createElement("h5", null, "name: ", this.props.info.name), /*#__PURE__*/_react["default"].createElement("h5", null, "email: ", this.props.info.email), /*#__PURE__*/_react["default"].createElement("h5", null, "password: ", this.props.info.password), /*#__PURE__*/_react["default"].createElement("h5", null, "Address line one: ", this.props.info.lineOne), /*#__PURE__*/_react["default"].createElement("h5", null, "Address line two: ", this.props.info.lineTwo), /*#__PURE__*/_react["default"].createElement("h5", null, "State: ", this.props.info.state), /*#__PURE__*/_react["default"].createElement("h5", null, "Zip code: ", this.props.info.zip), /*#__PURE__*/_react["default"].createElement("h5", null, "Phone Number: ", this.props.info.phoneNum), /*#__PURE__*/_react["default"].createElement("h5", null, "Credit Card: ", this.props.info.name), /*#__PURE__*/_react["default"].createElement("h5", null, "Expiration: ", this.props.info.name), /*#__PURE__*/_react["default"].createElement("h5", null, "CVV: ", this.props.info.CVV), /*#__PURE__*/_react["default"].createElement("h5", null, "Zip code: ", this.props.info.billingZip), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.handlePurchaseClick
      }, "Purchase"));
    }
  }]);

  return Summary;
}(_react["default"].Component);

var _default = Summary;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTdW1tYXJ5IiwicHJvcHMiLCJzdGF0ZSIsImhhbmRsZVB1cmNoYXNlQ2xpY2siLCJiaW5kIiwiY29uc29sZSIsImxvZyIsInBvc3QiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaW5mbyIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwibGluZU9uZSIsImxpbmVUd28iLCJ6aXAiLCJwaG9uZU51bSIsIkNWViIsImJpbGxpbmdaaXAiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9TdW1tYXJ5LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5jbGFzcyBTdW1tYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlciAocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICB9XG4gICAgdGhpcy5oYW5kbGVQdXJjaGFzZUNsaWNrID0gdGhpcy5oYW5kbGVQdXJjaGFzZUNsaWNrLmJpbmQodGhpcylcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5wb3N0KVxuXG4gIH1cblxuICBoYW5kbGVQdXJjaGFzZUNsaWNrIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5wb3N0KClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPkluZm9ybWF0aW9uIFN1bW1hcnk8L3A+XG4gICAgICAgIDxoNT5uYW1lOiB7dGhpcy5wcm9wcy5pbmZvLm5hbWV9PC9oNT5cbiAgICAgICAgPGg1PmVtYWlsOiB7dGhpcy5wcm9wcy5pbmZvLmVtYWlsfTwvaDU+XG4gICAgICAgIDxoNT5wYXNzd29yZDoge3RoaXMucHJvcHMuaW5mby5wYXNzd29yZH08L2g1PlxuICAgICAgICA8aDU+QWRkcmVzcyBsaW5lIG9uZToge3RoaXMucHJvcHMuaW5mby5saW5lT25lfTwvaDU+XG4gICAgICAgIDxoNT5BZGRyZXNzIGxpbmUgdHdvOiB7dGhpcy5wcm9wcy5pbmZvLmxpbmVUd299PC9oNT5cbiAgICAgICAgPGg1PlN0YXRlOiB7dGhpcy5wcm9wcy5pbmZvLnN0YXRlfTwvaDU+XG4gICAgICAgIDxoNT5aaXAgY29kZToge3RoaXMucHJvcHMuaW5mby56aXB9PC9oNT5cbiAgICAgICAgPGg1PlBob25lIE51bWJlcjoge3RoaXMucHJvcHMuaW5mby5waG9uZU51bX08L2g1PlxuICAgICAgICA8aDU+Q3JlZGl0IENhcmQ6IHt0aGlzLnByb3BzLmluZm8ubmFtZX08L2g1PlxuICAgICAgICA8aDU+RXhwaXJhdGlvbjoge3RoaXMucHJvcHMuaW5mby5uYW1lfTwvaDU+XG4gICAgICAgIDxoNT5DVlY6IHt0aGlzLnByb3BzLmluZm8uQ1ZWfTwvaDU+XG4gICAgICAgIDxoNT5aaXAgY29kZToge3RoaXMucHJvcHMuaW5mby5iaWxsaW5nWmlwfTwvaDU+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVQdXJjaGFzZUNsaWNrfT5QdXJjaGFzZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFN1bW1hcnk7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ01BLE87Ozs7O0VBQ0osaUJBQVlDLEtBQVosRUFBbUI7SUFBQTs7SUFBQTs7SUFDakIsMEJBQU9BLEtBQVA7SUFDQSxNQUFLQyxLQUFMLEdBQWEsRUFBYjtJQUdBLE1BQUtDLG1CQUFMLEdBQTJCLE1BQUtBLG1CQUFMLENBQXlCQyxJQUF6QiwrQkFBM0I7SUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlMLEtBQUssQ0FBQ00sSUFBbEI7SUFOaUI7RUFRbEI7Ozs7V0FFRCw2QkFBcUJDLEtBQXJCLEVBQTRCO01BQzFCQSxLQUFLLENBQUNDLGNBQU47TUFDQSxLQUFLUixLQUFMLENBQVdNLElBQVg7SUFDRDs7O1dBRUQsa0JBQVU7TUFDUixvQkFDRSwwREFDRSxpRUFERixlQUVFLHNEQUFXLEtBQUtOLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQkMsSUFBM0IsQ0FGRixlQUdFLHVEQUFZLEtBQUtWLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQkUsS0FBNUIsQ0FIRixlQUlFLDBEQUFlLEtBQUtYLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQkcsUUFBL0IsQ0FKRixlQUtFLGtFQUF1QixLQUFLWixLQUFMLENBQVdTLElBQVgsQ0FBZ0JJLE9BQXZDLENBTEYsZUFNRSxrRUFBdUIsS0FBS2IsS0FBTCxDQUFXUyxJQUFYLENBQWdCSyxPQUF2QyxDQU5GLGVBT0UsdURBQVksS0FBS2QsS0FBTCxDQUFXUyxJQUFYLENBQWdCUixLQUE1QixDQVBGLGVBUUUsMERBQWUsS0FBS0QsS0FBTCxDQUFXUyxJQUFYLENBQWdCTSxHQUEvQixDQVJGLGVBU0UsOERBQW1CLEtBQUtmLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQk8sUUFBbkMsQ0FURixlQVVFLDZEQUFrQixLQUFLaEIsS0FBTCxDQUFXUyxJQUFYLENBQWdCQyxJQUFsQyxDQVZGLGVBV0UsNERBQWlCLEtBQUtWLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQkMsSUFBakMsQ0FYRixlQVlFLHFEQUFVLEtBQUtWLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQlEsR0FBMUIsQ0FaRixlQWFFLDBEQUFlLEtBQUtqQixLQUFMLENBQVdTLElBQVgsQ0FBZ0JTLFVBQS9CLENBYkYsZUFjRTtRQUFRLE9BQU8sRUFBRSxLQUFLaEI7TUFBdEIsY0FkRixDQURGO0lBa0JEOzs7O0VBbkNtQmlCLGlCQUFBLENBQU1DLFM7O2VBc0NickIsTyJ9