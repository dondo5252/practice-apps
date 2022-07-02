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

var F1 = /*#__PURE__*/function (_React$Component) {
  _inherits(F1, _React$Component);

  var _super = _createSuper(F1);

  function F1(props) {
    var _this;

    _classCallCheck(this, F1);

    _this = _super.call(this, props);
    _this.state = {
      name: '',
      email: '',
      password: ''
    };
    _this.handleNameChange = _this.handleNameChange.bind(_assertThisInitialized(_this));
    _this.handleEmailChange = _this.handleEmailChange.bind(_assertThisInitialized(_this));
    _this.handlePasswordChange = _this.handlePasswordChange.bind(_assertThisInitialized(_this));
    _this.handleNextClick = _this.handleNextClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(F1, [{
    key: "handleNameChange",
    value: function handleNameChange(event) {
      event.preventDefault();
      this.setState({
        name: event.target.value
      });
      console.log(this.state.name);
    }
  }, {
    key: "handleEmailChange",
    value: function handleEmailChange(event) {
      event.preventDefault();
      this.setState({
        email: event.target.value
      });
      console.log(this.state.email);
    }
  }, {
    key: "handlePasswordChange",
    value: function handlePasswordChange(event) {
      event.preventDefault();
      this.setState({
        password: event.target.value
      });
      console.log(this.state.password);
    }
  }, {
    key: "handleNextClick",
    value: function handleNextClick(event) {
      event.preventDefault();
      this.props.update(this.state.name, this.state.email, this.state.password);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: this.state.name,
        placeholder: "Enter your name...",
        onChange: this.handleNameChange
      }), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: this.state.email,
        placeholder: "Enter your email...",
        onChange: this.handleEmailChange
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: this.state.password,
        placeholder: "Enter your password...",
        onChange: this.handlePasswordChange
      })), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.handleNextClick
      }, "Next")));
    }
  }]);

  return F1;
}(_react["default"].Component);

var _default = F1;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGMSIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZU5hbWVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJoYW5kbGVQYXNzd29yZENoYW5nZSIsImhhbmRsZU5leHRDbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY2xpZW50L3NyYy9jb21wb25lbnRzL0YxLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEYxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKVxuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgICB9XG4gICAgICB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UgPSB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgdGhpcy5oYW5kbGVFbWFpbENoYW5nZSA9IHRoaXMuaGFuZGxlRW1haWxDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgdGhpcy5oYW5kbGVQYXNzd29yZENoYW5nZSA9IHRoaXMuaGFuZGxlUGFzc3dvcmRDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgdGhpcy5oYW5kbGVOZXh0Q2xpY2sgPSB0aGlzLmhhbmRsZU5leHRDbGljay5iaW5kKHRoaXMpXG5cbiAgfVxuXG4gIGhhbmRsZU5hbWVDaGFuZ2UgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuc2V0U3RhdGUoe25hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5uYW1lKVxuICB9XG5cbiAgaGFuZGxlRW1haWxDaGFuZ2UgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuc2V0U3RhdGUoe2VtYWlsOiBldmVudC50YXJnZXQudmFsdWV9KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZW1haWwpXG4gIH1cblxuICBoYW5kbGVQYXNzd29yZENoYW5nZSAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5wYXNzd29yZClcbiAgfVxuXG4gIGhhbmRsZU5leHRDbGljayAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5wcm9wcy51cGRhdGUodGhpcy5zdGF0ZS5uYW1lLCB0aGlzLnN0YXRlLmVtYWlsLCB0aGlzLnN0YXRlLnBhc3N3b3JkKVxuICB9XG5cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWUuLi5cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVOYW1lQ2hhbmdlfT48L2lucHV0PlxuICAgICAgICAgIDxkaXYvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWwuLi5cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbWFpbENoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmQuLi5cIm9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlfT48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVOZXh0Q2xpY2t9Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEYxOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxFOzs7OztFQUNKLFlBQWFDLEtBQWIsRUFBb0I7SUFBQTs7SUFBQTs7SUFDbEIsMEJBQU9BLEtBQVA7SUFDRSxNQUFLQyxLQUFMLEdBQWE7TUFDWEMsSUFBSSxFQUFFLEVBREs7TUFFWEMsS0FBSyxFQUFFLEVBRkk7TUFHWEMsUUFBUSxFQUFFO0lBSEMsQ0FBYjtJQUtBLE1BQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0QiwrQkFBeEI7SUFDQSxNQUFLQyxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1QkQsSUFBdkIsK0JBQXpCO0lBQ0EsTUFBS0Usb0JBQUwsR0FBNEIsTUFBS0Esb0JBQUwsQ0FBMEJGLElBQTFCLCtCQUE1QjtJQUNBLE1BQUtHLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkgsSUFBckIsK0JBQXZCO0lBVmdCO0VBWW5COzs7O1dBRUQsMEJBQWtCSSxLQUFsQixFQUF5QjtNQUN2QkEsS0FBSyxDQUFDQyxjQUFOO01BQ0EsS0FBS0MsUUFBTCxDQUFjO1FBQUNWLElBQUksRUFBRVEsS0FBSyxDQUFDRyxNQUFOLENBQWFDO01BQXBCLENBQWQ7TUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS2YsS0FBTCxDQUFXQyxJQUF2QjtJQUNEOzs7V0FFRCwyQkFBbUJRLEtBQW5CLEVBQTBCO01BQ3hCQSxLQUFLLENBQUNDLGNBQU47TUFDQSxLQUFLQyxRQUFMLENBQWM7UUFBQ1QsS0FBSyxFQUFFTyxLQUFLLENBQUNHLE1BQU4sQ0FBYUM7TUFBckIsQ0FBZDtNQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLZixLQUFMLENBQVdFLEtBQXZCO0lBQ0Q7OztXQUVELDhCQUFzQk8sS0FBdEIsRUFBNkI7TUFDM0JBLEtBQUssQ0FBQ0MsY0FBTjtNQUNBLEtBQUtDLFFBQUwsQ0FBYztRQUFDUixRQUFRLEVBQUVNLEtBQUssQ0FBQ0csTUFBTixDQUFhQztNQUF4QixDQUFkO01BQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtmLEtBQUwsQ0FBV0csUUFBdkI7SUFDRDs7O1dBRUQseUJBQWlCTSxLQUFqQixFQUF3QjtNQUN0QkEsS0FBSyxDQUFDQyxjQUFOO01BQ0EsS0FBS1gsS0FBTCxDQUFXaUIsTUFBWCxDQUFrQixLQUFLaEIsS0FBTCxDQUFXQyxJQUE3QixFQUFtQyxLQUFLRCxLQUFMLENBQVdFLEtBQTlDLEVBQXFELEtBQUtGLEtBQUwsQ0FBV0csUUFBaEU7SUFDRDs7O1dBR0Qsa0JBQVU7TUFDUixvQkFDRSwwREFDSSwwREFDQTtRQUFPLElBQUksRUFBQyxNQUFaO1FBQW1CLEtBQUssRUFBRSxLQUFLSCxLQUFMLENBQVdDLElBQXJDO1FBQTJDLFdBQVcsRUFBQyxvQkFBdkQ7UUFBNEUsUUFBUSxFQUFFLEtBQUtHO01BQTNGLEVBREEsZUFFQSw0Q0FGQSxlQUdBO1FBQU8sSUFBSSxFQUFDLE1BQVo7UUFBbUIsS0FBSyxFQUFFLEtBQUtKLEtBQUwsQ0FBV0UsS0FBckM7UUFBNEMsV0FBVyxFQUFDLHFCQUF4RDtRQUE4RSxRQUFRLEVBQUUsS0FBS0k7TUFBN0YsRUFIQSxlQUlBLDBEQUNBO1FBQU8sSUFBSSxFQUFDLE1BQVo7UUFBbUIsS0FBSyxFQUFFLEtBQUtOLEtBQUwsQ0FBV0csUUFBckM7UUFBK0MsV0FBVyxFQUFDLHdCQUEzRDtRQUFtRixRQUFRLEVBQUUsS0FBS0k7TUFBbEcsRUFEQSxDQUpBLGVBT0E7UUFBUSxPQUFPLEVBQUUsS0FBS0M7TUFBdEIsVUFQQSxDQURKLENBREY7SUFhRDs7OztFQXJEY1MsaUJBQUEsQ0FBTUMsUzs7ZUF1RFJwQixFIn0=