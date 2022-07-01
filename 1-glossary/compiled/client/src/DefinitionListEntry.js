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

var DefinitionListEntry = /*#__PURE__*/function (_React$Component) {
  _inherits(DefinitionListEntry, _React$Component);

  var _super = _createSuper(DefinitionListEntry);

  function DefinitionListEntry(props) {
    var _this;

    _classCallCheck(this, DefinitionListEntry);

    _this = _super.call(this, props);
    _this.handledeleteClick = _this.handledeleteClick.bind(_assertThisInitialized(_this));
    _this.handleEditClick = _this.handleEditClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DefinitionListEntry, [{
    key: "handledeleteClick",
    value: function handledeleteClick(event) {
      event.preventDefault();
      this.props.deleteDef(this.props.value.word, this.props.value.definition);
      console.log(this.props.value.word, 'deleted on click');
    }
  }, {
    key: "handleEditClick",
    value: function handleEditClick(event) {
      event.preventDefault();
      var sign = prompt('Change the definition!');
      console.log(sign, 'SIGGGNN');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, this.props.value.word, ": ", this.props.value.definition, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.handleEditClick
      }, "Edit "), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.handledeleteClick
      }, "Delete"));
    }
  }]);

  return DefinitionListEntry;
}(_react["default"].Component);

var _default = DefinitionListEntry;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZpbml0aW9uTGlzdEVudHJ5IiwicHJvcHMiLCJoYW5kbGVkZWxldGVDbGljayIsImJpbmQiLCJoYW5kbGVFZGl0Q2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGVsZXRlRGVmIiwidmFsdWUiLCJ3b3JkIiwiZGVmaW5pdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJzaWduIiwicHJvbXB0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9jbGllbnQvc3JjL0RlZmluaXRpb25MaXN0RW50cnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgRGVmaW5pdGlvbkxpc3RFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlZGVsZXRlQ2xpY2sgPSB0aGlzLmhhbmRsZWRlbGV0ZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVFZGl0Q2xpY2sgPSB0aGlzLmhhbmRsZUVkaXRDbGljay5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVkZWxldGVDbGljayAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuZGVsZXRlRGVmKHRoaXMucHJvcHMudmFsdWUud29yZCwgdGhpcy5wcm9wcy52YWx1ZS5kZWZpbml0aW9uKVxuICAgIGNvbnNvbGUubG9nKCB0aGlzLnByb3BzLnZhbHVlLndvcmQsICdkZWxldGVkIG9uIGNsaWNrJylcbiAgfVxuICBoYW5kbGVFZGl0Q2xpY2sgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgc2lnbiA9IHByb21wdCgnQ2hhbmdlIHRoZSBkZWZpbml0aW9uIScpXG4gICAgY29uc29sZS5sb2coc2lnbiwgJ1NJR0dHTk4nKVxuXG5cbiAgfVxuXG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2Pnt0aGlzLnByb3BzLnZhbHVlLndvcmR9OiB7dGhpcy5wcm9wcy52YWx1ZS5kZWZpbml0aW9ufVxuICAgICAgIDxidXR0b24gb25DbGljaz0ge3RoaXMuaGFuZGxlRWRpdENsaWNrfT5FZGl0IDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZWRlbGV0ZUNsaWNrfT5EZWxldGU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlZmluaXRpb25MaXN0RW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsbUI7Ozs7O0VBQ0osNkJBQVlDLEtBQVosRUFBbUI7SUFBQTs7SUFBQTs7SUFDakIsMEJBQU1BLEtBQU47SUFDQSxNQUFLQyxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1QkMsSUFBdkIsK0JBQXpCO0lBQ0EsTUFBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCRCxJQUFyQiwrQkFBdkI7SUFIaUI7RUFJbEI7Ozs7V0FFRCwyQkFBbUJFLEtBQW5CLEVBQTBCO01BQ3hCQSxLQUFLLENBQUNDLGNBQU47TUFDQSxLQUFLTCxLQUFMLENBQVdNLFNBQVgsQ0FBcUIsS0FBS04sS0FBTCxDQUFXTyxLQUFYLENBQWlCQyxJQUF0QyxFQUE0QyxLQUFLUixLQUFMLENBQVdPLEtBQVgsQ0FBaUJFLFVBQTdEO01BQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLEtBQUtYLEtBQUwsQ0FBV08sS0FBWCxDQUFpQkMsSUFBOUIsRUFBb0Msa0JBQXBDO0lBQ0Q7OztXQUNELHlCQUFpQkosS0FBakIsRUFBd0I7TUFDdEJBLEtBQUssQ0FBQ0MsY0FBTjtNQUNBLElBQUlPLElBQUksR0FBR0MsTUFBTSxDQUFDLHdCQUFELENBQWpCO01BQ0FILE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFaLEVBQWtCLFNBQWxCO0lBR0Q7OztXQUdELGtCQUFVO01BQ1Isb0JBRUUsNkNBQU0sS0FBS1osS0FBTCxDQUFXTyxLQUFYLENBQWlCQyxJQUF2QixRQUErQixLQUFLUixLQUFMLENBQVdPLEtBQVgsQ0FBaUJFLFVBQWhELGVBQ0M7UUFBUSxPQUFPLEVBQUcsS0FBS047TUFBdkIsV0FERCxlQUVBO1FBQVEsT0FBTyxFQUFFLEtBQUtGO01BQXRCLFlBRkEsQ0FGRjtJQVFEOzs7O0VBOUIrQmEsaUJBQUEsQ0FBTUMsUzs7ZUFpQ3pCaEIsbUIifQ==