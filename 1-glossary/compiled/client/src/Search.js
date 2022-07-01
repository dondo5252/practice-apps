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
      this.props.search(this.state.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTZWFyY2giLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJiaW5kIiwib25DbGlja1NlYXJjaCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJzZWFyY2giLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvU2VhcmNoLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7dmFsdWU6ICcnfVxuICAgIHRoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlID0gdGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25DbGlja1NlYXJjaCA9IHRoaXMub25DbGlja1NlYXJjaC5iaW5kKHRoaXMpXG4gIH1cblxuXG5cbiAgaGFuZGxlU2VhcmNoQ2hhbmdlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSlcbiAgfVxuXG4gIG9uQ2xpY2tTZWFyY2goZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5zZWFyY2godGhpcy5zdGF0ZS52YWx1ZSlcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgU2VhcmNoIFdvcmQ6XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhIHdvcmQuLi5cIi8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkNsaWNrU2VhcmNofT5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsTTs7Ozs7RUFDSixnQkFBWUMsS0FBWixFQUFtQjtJQUFBOztJQUFBOztJQUNqQiwwQkFBTUEsS0FBTjtJQUNBLE1BQUtDLEtBQUwsR0FBYTtNQUFDQyxLQUFLLEVBQUU7SUFBUixDQUFiO0lBQ0EsTUFBS0Msa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JDLElBQXhCLCtCQUExQjtJQUNBLE1BQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkQsSUFBbkIsK0JBQXJCO0lBSmlCO0VBS2xCOzs7O1dBSUQsNEJBQW1CRSxLQUFuQixFQUEwQjtNQUN4QkEsS0FBSyxDQUFDQyxjQUFOO01BQ0EsS0FBS0MsUUFBTCxDQUFjO1FBQUNOLEtBQUssRUFBRUksS0FBSyxDQUFDRyxNQUFOLENBQWFQO01BQXJCLENBQWQ7SUFDRDs7O1dBRUQsdUJBQWNJLEtBQWQsRUFBcUI7TUFDbkJJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtWLEtBQUwsQ0FBV0MsS0FBdkI7TUFDQUksS0FBSyxDQUFDQyxjQUFOO01BQ0EsS0FBS1AsS0FBTCxDQUFXWSxNQUFYLENBQWtCLEtBQUtYLEtBQUwsQ0FBV0MsS0FBN0I7SUFFRDs7O1dBRUQsa0JBQVM7TUFDUCxvQkFDRSwyREFDRSw0RUFFQTtRQUFPLElBQUksRUFBQyxNQUFaO1FBQW1CLEtBQUssRUFBRSxLQUFLRCxLQUFMLENBQVdDLEtBQXJDO1FBQTRDLFFBQVEsRUFBRSxLQUFLQyxrQkFBM0Q7UUFBK0UsV0FBVyxFQUFDO01BQTNGLEVBRkEsZUFHQTtRQUFRLE9BQU8sRUFBRSxLQUFLRTtNQUF0QixZQUhBLENBREYsQ0FERjtJQVNEOzs7O0VBaENrQlEsaUJBQUEsQ0FBTUMsUzs7ZUFrQ1pmLE0ifQ==