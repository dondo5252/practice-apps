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
      var defPrompt = prompt("Change the definition for ".concat(this.props.value.word, "!"));
      console.log(defPrompt, "prompt");
      this.props.patch({
        word: this.props.value.word,
        definition: defPrompt
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, "-", this.props.value.word, ": ", this.props.value.definition, /*#__PURE__*/_react["default"].createElement("button", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZpbml0aW9uTGlzdEVudHJ5IiwicHJvcHMiLCJoYW5kbGVkZWxldGVDbGljayIsImJpbmQiLCJoYW5kbGVFZGl0Q2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGVsZXRlRGVmIiwidmFsdWUiLCJ3b3JkIiwiZGVmaW5pdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJkZWZQcm9tcHQiLCJwcm9tcHQiLCJwYXRjaCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vY2xpZW50L3NyYy9EZWZpbml0aW9uTGlzdEVudHJ5LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIERlZmluaXRpb25MaXN0RW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZWRlbGV0ZUNsaWNrID0gdGhpcy5oYW5kbGVkZWxldGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRWRpdENsaWNrID0gdGhpcy5oYW5kbGVFZGl0Q2xpY2suYmluZCh0aGlzKVxuXG4gIH1cblxuICBoYW5kbGVkZWxldGVDbGljayAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuZGVsZXRlRGVmKHRoaXMucHJvcHMudmFsdWUud29yZCwgdGhpcy5wcm9wcy52YWx1ZS5kZWZpbml0aW9uKVxuICAgIGNvbnNvbGUubG9nKCB0aGlzLnByb3BzLnZhbHVlLndvcmQsICdkZWxldGVkIG9uIGNsaWNrJylcbiAgfVxuICBoYW5kbGVFZGl0Q2xpY2sgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgZGVmUHJvbXB0ID0gcHJvbXB0KGBDaGFuZ2UgdGhlIGRlZmluaXRpb24gZm9yICR7dGhpcy5wcm9wcy52YWx1ZS53b3JkfSFgKVxuICAgIGNvbnNvbGUubG9nKGRlZlByb21wdCwgXCJwcm9tcHRcIilcbiAgICB0aGlzLnByb3BzLnBhdGNoKHt3b3JkOiB0aGlzLnByb3BzLnZhbHVlLndvcmQsIGRlZmluaXRpb246IGRlZlByb21wdH0pXG4gIH1cblxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+LXt0aGlzLnByb3BzLnZhbHVlLndvcmR9OiB7dGhpcy5wcm9wcy52YWx1ZS5kZWZpbml0aW9ufVxuICAgICAgIDxidXR0b24gb25DbGljaz0ge3RoaXMuaGFuZGxlRWRpdENsaWNrfT5FZGl0IDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZWRlbGV0ZUNsaWNrfT5EZWxldGU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWZpbml0aW9uTGlzdEVudHJ5OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxtQjs7Ozs7RUFDSiw2QkFBWUMsS0FBWixFQUFtQjtJQUFBOztJQUFBOztJQUNqQiwwQkFBTUEsS0FBTjtJQUNBLE1BQUtDLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCQyxJQUF2QiwrQkFBekI7SUFDQSxNQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJELElBQXJCLCtCQUF2QjtJQUhpQjtFQUtsQjs7OztXQUVELDJCQUFtQkUsS0FBbkIsRUFBMEI7TUFDeEJBLEtBQUssQ0FBQ0MsY0FBTjtNQUNBLEtBQUtMLEtBQUwsQ0FBV00sU0FBWCxDQUFxQixLQUFLTixLQUFMLENBQVdPLEtBQVgsQ0FBaUJDLElBQXRDLEVBQTRDLEtBQUtSLEtBQUwsQ0FBV08sS0FBWCxDQUFpQkUsVUFBN0Q7TUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQWEsS0FBS1gsS0FBTCxDQUFXTyxLQUFYLENBQWlCQyxJQUE5QixFQUFvQyxrQkFBcEM7SUFDRDs7O1dBQ0QseUJBQWlCSixLQUFqQixFQUF3QjtNQUN0QkEsS0FBSyxDQUFDQyxjQUFOO01BQ0EsSUFBSU8sU0FBUyxHQUFHQyxNQUFNLHFDQUE4QixLQUFLYixLQUFMLENBQVdPLEtBQVgsQ0FBaUJDLElBQS9DLE9BQXRCO01BQ0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxTQUFaLEVBQXVCLFFBQXZCO01BQ0EsS0FBS1osS0FBTCxDQUFXYyxLQUFYLENBQWlCO1FBQUNOLElBQUksRUFBRSxLQUFLUixLQUFMLENBQVdPLEtBQVgsQ0FBaUJDLElBQXhCO1FBQThCQyxVQUFVLEVBQUVHO01BQTFDLENBQWpCO0lBQ0Q7OztXQUdELGtCQUFVO01BQ1Isb0JBQ0Usa0RBQU8sS0FBS1osS0FBTCxDQUFXTyxLQUFYLENBQWlCQyxJQUF4QixRQUFnQyxLQUFLUixLQUFMLENBQVdPLEtBQVgsQ0FBaUJFLFVBQWpELGVBQ0M7UUFBUSxPQUFPLEVBQUcsS0FBS047TUFBdkIsV0FERCxlQUVBO1FBQVEsT0FBTyxFQUFFLEtBQUtGO01BQXRCLFlBRkEsQ0FERjtJQU1EOzs7O0VBNUIrQmMsaUJBQUEsQ0FBTUMsUzs7ZUErQnpCakIsbUIifQ==