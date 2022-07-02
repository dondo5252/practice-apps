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

var Search = /*#__PURE__*/function (_React$Component) {
  _inherits(Search, _React$Component);

  var _super = _createSuper(Search);

  function Search(props) {
    var _this;

    _classCallCheck(this, Search);

    _this = _super.call(this, props);
    _this.state = {
      value: ''
    };
    _this.handleSearchChange = _this.handleSearchChange.bind(_assertThisInitialized(_this));
    _this.onClickSearch = _this.onClickSearch.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Search, [{
    key: "handleSearchChange",
    value: function handleSearchChange(event) {
      event.preventDefault();
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "onClickSearch",
    value: function onClickSearch(event) {
      console.log(this.state.value);
      event.preventDefault();

      if (!this.state.value) {
        alert('Please enter a word to search!');
      } else {
        this.props.search(this.state.value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("label", null, "Search Word:", /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: this.state.value,
        onChange: this.handleSearchChange,
        placeholder: "Search a word..."
      }), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.onClickSearch
      }, "Search")));
    }
  }]);

  return Search;
}(_react["default"].Component);

var _default = Search;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTZWFyY2giLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJiaW5kIiwib25DbGlja1NlYXJjaCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsInNlYXJjaCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vY2xpZW50L3NyYy9TZWFyY2guanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt2YWx1ZTogJyd9XG4gICAgdGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlYXJjaENoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkNsaWNrU2VhcmNoID0gdGhpcy5vbkNsaWNrU2VhcmNoLmJpbmQodGhpcylcbiAgfVxuXG5cblxuICBoYW5kbGVTZWFyY2hDaGFuZ2UoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KVxuICB9XG5cbiAgb25DbGlja1NlYXJjaChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudmFsdWUpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZighdGhpcy5zdGF0ZS52YWx1ZSkge1xuICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBhIHdvcmQgdG8gc2VhcmNoIScpXG4gICAgfSBlbHNlIHtcbiAgICB0aGlzLnByb3BzLnNlYXJjaCh0aGlzLnN0YXRlLnZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgIFNlYXJjaCBXb3JkOlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaENoYW5nZX0gcGxhY2Vob2xkZXI9XCJTZWFyY2ggYSB3b3JkLi4uXCIvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25DbGlja1NlYXJjaH0+U2VhcmNoPC9idXR0b24+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE07Ozs7O0VBQ0osZ0JBQVlDLEtBQVosRUFBbUI7SUFBQTs7SUFBQTs7SUFDakIsMEJBQU1BLEtBQU47SUFDQSxNQUFLQyxLQUFMLEdBQWE7TUFBQ0MsS0FBSyxFQUFFO0lBQVIsQ0FBYjtJQUNBLE1BQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCQyxJQUF4QiwrQkFBMUI7SUFDQSxNQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJELElBQW5CLCtCQUFyQjtJQUppQjtFQUtsQjs7OztXQUlELDRCQUFtQkUsS0FBbkIsRUFBMEI7TUFDeEJBLEtBQUssQ0FBQ0MsY0FBTjtNQUNBLEtBQUtDLFFBQUwsQ0FBYztRQUFDTixLQUFLLEVBQUVJLEtBQUssQ0FBQ0csTUFBTixDQUFhUDtNQUFyQixDQUFkO0lBQ0Q7OztXQUVELHVCQUFjSSxLQUFkLEVBQXFCO01BQ25CSSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLVixLQUFMLENBQVdDLEtBQXZCO01BQ0FJLEtBQUssQ0FBQ0MsY0FBTjs7TUFDQSxJQUFHLENBQUMsS0FBS04sS0FBTCxDQUFXQyxLQUFmLEVBQXNCO1FBQ3BCVSxLQUFLLENBQUMsZ0NBQUQsQ0FBTDtNQUNELENBRkQsTUFFTztRQUNQLEtBQUtaLEtBQUwsQ0FBV2EsTUFBWCxDQUFrQixLQUFLWixLQUFMLENBQVdDLEtBQTdCO01BQ0M7SUFDRjs7O1dBRUQsa0JBQVM7TUFDUCxvQkFDRSwyREFDRSw0RUFFQTtRQUFPLElBQUksRUFBQyxNQUFaO1FBQW1CLEtBQUssRUFBRSxLQUFLRCxLQUFMLENBQVdDLEtBQXJDO1FBQTRDLFFBQVEsRUFBRSxLQUFLQyxrQkFBM0Q7UUFBK0UsV0FBVyxFQUFDO01BQTNGLEVBRkEsZUFHQTtRQUFRLE9BQU8sRUFBRSxLQUFLRTtNQUF0QixZQUhBLENBREYsQ0FERjtJQVNEOzs7O0VBbkNrQlMsaUJBQUEsQ0FBTUMsUzs7ZUFxQ1poQixNIn0=