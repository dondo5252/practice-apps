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
      console.log(event.target.value);
    }
  }, {
    key: "handleEmailChange",
    value: function handleEmailChange(event) {
      event.preventDefault();
      this.setState({
        name: event.target.value
      });
      console.log(event.target.value);
    }
  }, {
    key: "handlePasswordChange",
    value: function handlePasswordChange(event) {
      event.preventDefault();
      this.setState({
        name: event.target.value
      });
      console.log(event.target.value);
    }
  }, {
    key: "handleNextClick",
    value: function handleNextClick(event) {
      event.preventDefault();
      updateF1(this.state.name, this.state.email, this.state.password);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: this.state.name,
        onChange: this.handleNameChange
      }), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: this.state.name,
        onChange: this.handleEmailChange
      }), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: this.state.name,
        onChange: this.handlePasswordChange
      }), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.handleNextClick
      }, "Next")));
    }
  }]);

  return F1;
}(_react["default"].Component);

var _default = F1;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGMSIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZU5hbWVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJoYW5kbGVQYXNzd29yZENoYW5nZSIsImhhbmRsZU5leHRDbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZUYxIiwiUmVhY3QiLCJDb21wb25lbnQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9jbGllbnQvc3JjL0YxLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEYxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKVxuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgICB9XG4gICAgICB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UgPSB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgdGhpcy5oYW5kbGVFbWFpbENoYW5nZSA9IHRoaXMuaGFuZGxlRW1haWxDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgdGhpcy5oYW5kbGVQYXNzd29yZENoYW5nZSA9IHRoaXMuaGFuZGxlUGFzc3dvcmRDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgdGhpcy5oYW5kbGVOZXh0Q2xpY2sgPSB0aGlzLmhhbmRsZU5leHRDbGljay5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVOYW1lQ2hhbmdlIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnNldFN0YXRlKHtuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KVxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGhhbmRsZUVtYWlsQ2hhbmdlIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnNldFN0YXRlKHtuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KVxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGhhbmRsZVBhc3N3b3JkQ2hhbmdlIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnNldFN0YXRlKHtuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KVxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGhhbmRsZU5leHRDbGljayAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlRjEodGhpcy5zdGF0ZS5uYW1lLCB0aGlzLnN0YXRlLmVtYWlsLCB0aGlzLnN0YXRlLnBhc3N3b3JkKVxuICB9XG5cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5hbWVDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlRW1haWxDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGFzc3dvcmRDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZU5leHRDbGlja30+TmV4dDwvYnV0dG9uPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRjE7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEU7Ozs7O0VBQ0osWUFBYUMsS0FBYixFQUFvQjtJQUFBOztJQUFBOztJQUNsQiwwQkFBT0EsS0FBUDtJQUNFLE1BQUtDLEtBQUwsR0FBYTtNQUNYQyxJQUFJLEVBQUUsRUFESztNQUVYQyxLQUFLLEVBQUUsRUFGSTtNQUdYQyxRQUFRLEVBQUU7SUFIQyxDQUFiO0lBS0EsTUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLCtCQUF4QjtJQUNBLE1BQUtDLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCRCxJQUF2QiwrQkFBekI7SUFDQSxNQUFLRSxvQkFBTCxHQUE0QixNQUFLQSxvQkFBTCxDQUEwQkYsSUFBMUIsK0JBQTVCO0lBQ0EsTUFBS0csZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCSCxJQUFyQiwrQkFBdkI7SUFWZ0I7RUFXbkI7Ozs7V0FFRCwwQkFBa0JJLEtBQWxCLEVBQXlCO01BQ3ZCQSxLQUFLLENBQUNDLGNBQU47TUFDQSxLQUFLQyxRQUFMLENBQWM7UUFBQ1YsSUFBSSxFQUFFUSxLQUFLLENBQUNHLE1BQU4sQ0FBYUM7TUFBcEIsQ0FBZDtNQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sS0FBSyxDQUFDRyxNQUFOLENBQWFDLEtBQXpCO0lBQ0Q7OztXQUVELDJCQUFtQkosS0FBbkIsRUFBMEI7TUFDeEJBLEtBQUssQ0FBQ0MsY0FBTjtNQUNBLEtBQUtDLFFBQUwsQ0FBYztRQUFDVixJQUFJLEVBQUVRLEtBQUssQ0FBQ0csTUFBTixDQUFhQztNQUFwQixDQUFkO01BQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsS0FBekI7SUFDRDs7O1dBRUQsOEJBQXNCSixLQUF0QixFQUE2QjtNQUMzQkEsS0FBSyxDQUFDQyxjQUFOO01BQ0EsS0FBS0MsUUFBTCxDQUFjO1FBQUNWLElBQUksRUFBRVEsS0FBSyxDQUFDRyxNQUFOLENBQWFDO01BQXBCLENBQWQ7TUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlOLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxLQUF6QjtJQUNEOzs7V0FFRCx5QkFBaUJKLEtBQWpCLEVBQXdCO01BQ3RCQSxLQUFLLENBQUNDLGNBQU47TUFDQU0sUUFBUSxDQUFDLEtBQUtoQixLQUFMLENBQVdDLElBQVosRUFBa0IsS0FBS0QsS0FBTCxDQUFXRSxLQUE3QixFQUFvQyxLQUFLRixLQUFMLENBQVdHLFFBQS9DLENBQVI7SUFDRDs7O1dBR0Qsa0JBQVU7TUFDUixvQkFDRSwyREFDRSw0REFDRTtRQUFPLElBQUksRUFBQyxNQUFaO1FBQW1CLEtBQUssRUFBRSxLQUFLSCxLQUFMLENBQVdDLElBQXJDO1FBQTJDLFFBQVEsRUFBRSxLQUFLRztNQUExRCxFQURGLGVBRUU7UUFBTyxJQUFJLEVBQUMsTUFBWjtRQUFtQixLQUFLLEVBQUUsS0FBS0osS0FBTCxDQUFXQyxJQUFyQztRQUEyQyxRQUFRLEVBQUUsS0FBS0s7TUFBMUQsRUFGRixlQUdFO1FBQU8sSUFBSSxFQUFDLE1BQVo7UUFBbUIsS0FBSyxFQUFFLEtBQUtOLEtBQUwsQ0FBV0MsSUFBckM7UUFBMkMsUUFBUSxFQUFFLEtBQUtNO01BQTFELEVBSEYsZUFJRTtRQUFRLE9BQU8sRUFBRSxLQUFLQztNQUF0QixVQUpGLENBREYsQ0FERjtJQVVEOzs7O0VBakRjUyxpQkFBQSxDQUFNQyxTOztlQW1EUnBCLEUifQ==