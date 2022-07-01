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

var AddWord = /*#__PURE__*/function (_React$Component) {
  _inherits(AddWord, _React$Component);

  var _super = _createSuper(AddWord);

  function AddWord(props) {
    var _this;

    _classCallCheck(this, AddWord);

    _this = _super.call(this, props);
    _this.state = {
      value: '',
      definition: ''
    };
    _this.addonClick = _this.addonClick.bind(_assertThisInitialized(_this));
    _this.handleChangeWord = _this.handleChangeWord.bind(_assertThisInitialized(_this));
    _this.handleChangeDef = _this.handleChangeDef.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AddWord, [{
    key: "addonClick",
    value: function addonClick(event) {
      //if word already exists
      event.preventDefault();
      console.log(this.state.value);
      this.props.addWord(this.state.value, this.state.definition);
      this.props.update(this.state.value, this.state.definition);
      this.setState({
        value: '',
        definition: ''
      });
      console.log('Complete');
    }
  }, {
    key: "handleChangeWord",
    value: function handleChangeWord(event) {
      console.log(event.target.value);
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "handleChangeDef",
    value: function handleChangeDef(event) {
      console.log(event.target.value);
      this.setState({
        definition: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        placeholder: "Enter word to add",
        value: this.state.value,
        onChange: this.handleChangeWord
      })), /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        placeholder: "Enter definition",
        value: this.state.definition,
        onChange: this.handleChangeDef
      }), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.addonClick
      }, "Add Word")));
    }
  }]);

  return AddWord;
}(_react["default"].Component);

var _default = AddWord;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBZGRXb3JkIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiZGVmaW5pdGlvbiIsImFkZG9uQ2xpY2siLCJiaW5kIiwiaGFuZGxlQ2hhbmdlV29yZCIsImhhbmRsZUNoYW5nZURlZiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiYWRkV29yZCIsInVwZGF0ZSIsInNldFN0YXRlIiwidGFyZ2V0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9jbGllbnQvc3JjL0FkZFdvcmQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmNsYXNzIEFkZFdvcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIGRlZmluaXRpb246ICcnXG4gICAgfVxuICAgIHRoaXMuYWRkb25DbGljayA9IHRoaXMuYWRkb25DbGljay5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2VXb3JkID0gdGhpcy5oYW5kbGVDaGFuZ2VXb3JkLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUNoYW5nZURlZiA9IHRoaXMuaGFuZGxlQ2hhbmdlRGVmLmJpbmQodGhpcylcbiAgfVxuXG5hZGRvbkNsaWNrKGV2ZW50KSB7XG4gIC8vaWYgd29yZCBhbHJlYWR5IGV4aXN0c1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlKVxuICB0aGlzLnByb3BzLmFkZFdvcmQodGhpcy5zdGF0ZS52YWx1ZSwgdGhpcy5zdGF0ZS5kZWZpbml0aW9uKVxuICB0aGlzLnByb3BzLnVwZGF0ZSh0aGlzLnN0YXRlLnZhbHVlLCB0aGlzLnN0YXRlLmRlZmluaXRpb24pXG4gIHRoaXMuc2V0U3RhdGUoe1xuICAgIHZhbHVlOiAnJyxcbiAgICBkZWZpbml0aW9uOiAnJ1xuICB9KVxuICBjb25zb2xlLmxvZygnQ29tcGxldGUnKVxufVxuaGFuZGxlQ2hhbmdlV29yZChldmVudCkge1xuICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpXG4gIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KTtcbn1cbmhhbmRsZUNoYW5nZURlZihldmVudCkge1xuICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpXG4gIHRoaXMuc2V0U3RhdGUoe2RlZmluaXRpb246IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xufVxuXG5cbnJlbmRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgd29yZCB0byBhZGRcIlxuICAgICAgICB2YWx1ZSA9IHt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VXb3JkfVxuICAgICAgICA+PC9pbnB1dD5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxmb3JtPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGRlZmluaXRpb25cIlxuICAgICAgICB2YWx1ZSA9IHt0aGlzLnN0YXRlLmRlZmluaXRpb259XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZURlZn1cbiAgICAgICAgPjwvaW5wdXQ+PGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZG9uQ2xpY2t9XG4gICAgICAgID5BZGQgV29yZDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG59XG5leHBvcnQgZGVmYXVsdCBBZGRXb3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ01BLE87Ozs7O0VBQ0osaUJBQWFDLEtBQWIsRUFBb0I7SUFBQTs7SUFBQTs7SUFDbEIsMEJBQU1BLEtBQU47SUFDQSxNQUFLQyxLQUFMLEdBQWE7TUFDWEMsS0FBSyxFQUFFLEVBREk7TUFFWEMsVUFBVSxFQUFFO0lBRkQsQ0FBYjtJQUlBLE1BQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsK0JBQWxCO0lBQ0EsTUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JELElBQXRCLCtCQUF4QjtJQUNBLE1BQUtFLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkYsSUFBckIsK0JBQXZCO0lBUmtCO0VBU25COzs7O1dBRUgsb0JBQVdHLEtBQVgsRUFBa0I7TUFDaEI7TUFDQUEsS0FBSyxDQUFDQyxjQUFOO01BQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtWLEtBQUwsQ0FBV0MsS0FBdkI7TUFDQSxLQUFLRixLQUFMLENBQVdZLE9BQVgsQ0FBbUIsS0FBS1gsS0FBTCxDQUFXQyxLQUE5QixFQUFxQyxLQUFLRCxLQUFMLENBQVdFLFVBQWhEO01BQ0EsS0FBS0gsS0FBTCxDQUFXYSxNQUFYLENBQWtCLEtBQUtaLEtBQUwsQ0FBV0MsS0FBN0IsRUFBb0MsS0FBS0QsS0FBTCxDQUFXRSxVQUEvQztNQUNBLEtBQUtXLFFBQUwsQ0FBYztRQUNaWixLQUFLLEVBQUUsRUFESztRQUVaQyxVQUFVLEVBQUU7TUFGQSxDQUFkO01BSUFPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7SUFDRDs7O1dBQ0QsMEJBQWlCSCxLQUFqQixFQUF3QjtNQUN0QkUsT0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQUssQ0FBQ08sTUFBTixDQUFhYixLQUF6QjtNQUNBLEtBQUtZLFFBQUwsQ0FBYztRQUFDWixLQUFLLEVBQUVNLEtBQUssQ0FBQ08sTUFBTixDQUFhYjtNQUFyQixDQUFkO0lBQ0Q7OztXQUNELHlCQUFnQk0sS0FBaEIsRUFBdUI7TUFDckJFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFLLENBQUNPLE1BQU4sQ0FBYWIsS0FBekI7TUFDQSxLQUFLWSxRQUFMLENBQWM7UUFBQ1gsVUFBVSxFQUFFSyxLQUFLLENBQUNPLE1BQU4sQ0FBYWI7TUFBMUIsQ0FBZDtJQUNEOzs7V0FHRCxrQkFBUztNQUNQLG9CQUNFLDBEQUNFLDJEQUNFO1FBQ0EsSUFBSSxFQUFDLE1BREw7UUFFQSxXQUFXLEVBQUMsbUJBRlo7UUFHQSxLQUFLLEVBQUksS0FBS0QsS0FBTCxDQUFXQyxLQUhwQjtRQUlBLFFBQVEsRUFBRSxLQUFLSTtNQUpmLEVBREYsQ0FERixlQVNFLDJEQUNFO1FBQ0EsSUFBSSxFQUFDLE1BREw7UUFFQSxXQUFXLEVBQUMsa0JBRlo7UUFHQSxLQUFLLEVBQUksS0FBS0wsS0FBTCxDQUFXRSxVQUhwQjtRQUlBLFFBQVEsRUFBRSxLQUFLSTtNQUpmLEVBREYsZUFNVztRQUNULE9BQU8sRUFBRSxLQUFLSDtNQURMLGNBTlgsQ0FURixDQURGO0lBc0JEOzs7O0VBekRxQlksaUJBQUEsQ0FBTUMsUzs7ZUEyRGJsQixPIn0=