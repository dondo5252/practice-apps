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
    console.log(props, 'prrroooopppppsss');
    _this.handledeleteClick = _this.handledeleteClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DefinitionListEntry, [{
    key: "handledeleteClick",
    value: function handledeleteClick(event) {
      event.preventDefault();
      this.props["delete"](this.props.value.word);
      console.log(this.props.value.word, 'deleted on click');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, this.props.value.word, ": ", this.props.value.definition, /*#__PURE__*/_react["default"].createElement("button", null, "Edit"), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.handledeleteClick
      }, "Delete"));
    }
  }]);

  return DefinitionListEntry;
}(_react["default"].Component);

var _default = DefinitionListEntry;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZpbml0aW9uTGlzdEVudHJ5IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlZGVsZXRlQ2xpY2siLCJiaW5kIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwid29yZCIsImRlZmluaXRpb24iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvRGVmaW5pdGlvbkxpc3RFbnRyeS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBEZWZpbml0aW9uTGlzdEVudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc29sZS5sb2cocHJvcHMsJ3BycnJvb29vcHBwcHBzc3MnKVxuICAgIHRoaXMuaGFuZGxlZGVsZXRlQ2xpY2sgPSB0aGlzLmhhbmRsZWRlbGV0ZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVkZWxldGVDbGljayAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuZGVsZXRlKHRoaXMucHJvcHMudmFsdWUud29yZClcbiAgICBjb25zb2xlLmxvZyggdGhpcy5wcm9wcy52YWx1ZS53b3JkLCAnZGVsZXRlZCBvbiBjbGljaycpXG4gIH1cblxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdj57dGhpcy5wcm9wcy52YWx1ZS53b3JkfToge3RoaXMucHJvcHMudmFsdWUuZGVmaW5pdGlvbn1cbiAgICAgICA8YnV0dG9uPkVkaXQ8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVkZWxldGVDbGlja30+RGVsZXRlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWZpbml0aW9uTGlzdEVudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLG1COzs7OztFQUNKLDZCQUFZQyxLQUFaLEVBQW1CO0lBQUE7O0lBQUE7O0lBQ2pCLDBCQUFNQSxLQUFOO0lBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLEVBQWtCLGtCQUFsQjtJQUNBLE1BQUtHLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCQyxJQUF2QiwrQkFBekI7SUFIaUI7RUFJbEI7Ozs7V0FFRCwyQkFBbUJDLEtBQW5CLEVBQTBCO01BQ3hCQSxLQUFLLENBQUNDLGNBQU47TUFDQSxLQUFLTixLQUFMLFdBQWtCLEtBQUtBLEtBQUwsQ0FBV08sS0FBWCxDQUFpQkMsSUFBbkM7TUFDQVAsT0FBTyxDQUFDQyxHQUFSLENBQWEsS0FBS0YsS0FBTCxDQUFXTyxLQUFYLENBQWlCQyxJQUE5QixFQUFvQyxrQkFBcEM7SUFDRDs7O1dBR0Qsa0JBQVU7TUFDUixvQkFFRSw2Q0FBTSxLQUFLUixLQUFMLENBQVdPLEtBQVgsQ0FBaUJDLElBQXZCLFFBQStCLEtBQUtSLEtBQUwsQ0FBV08sS0FBWCxDQUFpQkUsVUFBaEQsZUFDQyx1REFERCxlQUVBO1FBQVEsT0FBTyxFQUFFLEtBQUtOO01BQXRCLFlBRkEsQ0FGRjtJQVFEOzs7O0VBdkIrQk8saUJBQUEsQ0FBTUMsUzs7ZUEwQnpCWixtQiJ9