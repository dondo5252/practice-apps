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
      event.preventDefault();
      console.log(this.state.value);
      this.props.addWord(this.state.value, this.state.definition);
      this.props.update(this.state.value, this.state.definition); // this.setState = ({
      //   value: '',
      //   definition: ''
      // })

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBZGRXb3JkIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiZGVmaW5pdGlvbiIsImFkZG9uQ2xpY2siLCJiaW5kIiwiaGFuZGxlQ2hhbmdlV29yZCIsImhhbmRsZUNoYW5nZURlZiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiYWRkV29yZCIsInVwZGF0ZSIsInRhcmdldCIsInNldFN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9jbGllbnQvc3JjL0FkZFdvcmQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmNsYXNzIEFkZFdvcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIGRlZmluaXRpb246ICcnXG4gICAgfVxuICAgIHRoaXMuYWRkb25DbGljayA9IHRoaXMuYWRkb25DbGljay5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2VXb3JkID0gdGhpcy5oYW5kbGVDaGFuZ2VXb3JkLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUNoYW5nZURlZiA9IHRoaXMuaGFuZGxlQ2hhbmdlRGVmLmJpbmQodGhpcylcbiAgfVxuXG5hZGRvbkNsaWNrKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudmFsdWUpXG4gIHRoaXMucHJvcHMuYWRkV29yZCh0aGlzLnN0YXRlLnZhbHVlLCB0aGlzLnN0YXRlLmRlZmluaXRpb24pXG4gIHRoaXMucHJvcHMudXBkYXRlKHRoaXMuc3RhdGUudmFsdWUsIHRoaXMuc3RhdGUuZGVmaW5pdGlvbilcbiAgLy8gdGhpcy5zZXRTdGF0ZSA9ICh7XG4gIC8vICAgdmFsdWU6ICcnLFxuICAvLyAgIGRlZmluaXRpb246ICcnXG4gIC8vIH0pXG4gIGNvbnNvbGUubG9nKCdDb21wbGV0ZScpXG59XG5oYW5kbGVDaGFuZ2VXb3JkKGV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xufVxuaGFuZGxlQ2hhbmdlRGVmKGV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgdGhpcy5zZXRTdGF0ZSh7ZGVmaW5pdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG59XG5cblxucmVuZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB3b3JkIHRvIGFkZFwiXG4gICAgICAgIHZhbHVlID0ge3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVdvcmR9XG4gICAgICAgID48L2lucHV0PlxuICAgICAgPC9mb3JtPlxuICAgICAgPGZvcm0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZGVmaW5pdGlvblwiXG4gICAgICAgIHZhbHVlID0ge3RoaXMuc3RhdGUuZGVmaW5pdGlvbn1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlRGVmfVxuICAgICAgICA+PC9pbnB1dD48YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkb25DbGlja31cbiAgICAgICAgPkFkZCBXb3JkPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cbn1cbmV4cG9ydCBkZWZhdWx0IEFkZFdvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDTUEsTzs7Ozs7RUFDSixpQkFBYUMsS0FBYixFQUFvQjtJQUFBOztJQUFBOztJQUNsQiwwQkFBTUEsS0FBTjtJQUNBLE1BQUtDLEtBQUwsR0FBYTtNQUNYQyxLQUFLLEVBQUUsRUFESTtNQUVYQyxVQUFVLEVBQUU7SUFGRCxDQUFiO0lBSUEsTUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQiwrQkFBbEI7SUFDQSxNQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkQsSUFBdEIsK0JBQXhCO0lBQ0EsTUFBS0UsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCRixJQUFyQiwrQkFBdkI7SUFSa0I7RUFTbkI7Ozs7V0FFSCxvQkFBV0csS0FBWCxFQUFrQjtNQUNoQkEsS0FBSyxDQUFDQyxjQUFOO01BQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtWLEtBQUwsQ0FBV0MsS0FBdkI7TUFDQSxLQUFLRixLQUFMLENBQVdZLE9BQVgsQ0FBbUIsS0FBS1gsS0FBTCxDQUFXQyxLQUE5QixFQUFxQyxLQUFLRCxLQUFMLENBQVdFLFVBQWhEO01BQ0EsS0FBS0gsS0FBTCxDQUFXYSxNQUFYLENBQWtCLEtBQUtaLEtBQUwsQ0FBV0MsS0FBN0IsRUFBb0MsS0FBS0QsS0FBTCxDQUFXRSxVQUEvQyxFQUpnQixDQUtoQjtNQUNBO01BQ0E7TUFDQTs7TUFDQU8sT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtJQUNEOzs7V0FDRCwwQkFBaUJILEtBQWpCLEVBQXdCO01BQ3RCRSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBSyxDQUFDTSxNQUFOLENBQWFaLEtBQXpCO01BQ0EsS0FBS2EsUUFBTCxDQUFjO1FBQUNiLEtBQUssRUFBRU0sS0FBSyxDQUFDTSxNQUFOLENBQWFaO01BQXJCLENBQWQ7SUFDRDs7O1dBQ0QseUJBQWdCTSxLQUFoQixFQUF1QjtNQUNyQkUsT0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQUssQ0FBQ00sTUFBTixDQUFhWixLQUF6QjtNQUNBLEtBQUthLFFBQUwsQ0FBYztRQUFDWixVQUFVLEVBQUVLLEtBQUssQ0FBQ00sTUFBTixDQUFhWjtNQUExQixDQUFkO0lBQ0Q7OztXQUdELGtCQUFTO01BQ1Asb0JBQ0UsMERBQ0UsMkRBQ0U7UUFDQSxJQUFJLEVBQUMsTUFETDtRQUVBLFdBQVcsRUFBQyxtQkFGWjtRQUdBLEtBQUssRUFBSSxLQUFLRCxLQUFMLENBQVdDLEtBSHBCO1FBSUEsUUFBUSxFQUFFLEtBQUtJO01BSmYsRUFERixDQURGLGVBU0UsMkRBQ0U7UUFDQSxJQUFJLEVBQUMsTUFETDtRQUVBLFdBQVcsRUFBQyxrQkFGWjtRQUdBLEtBQUssRUFBSSxLQUFLTCxLQUFMLENBQVdFLFVBSHBCO1FBSUEsUUFBUSxFQUFFLEtBQUtJO01BSmYsRUFERixlQU1XO1FBQ1QsT0FBTyxFQUFFLEtBQUtIO01BREwsY0FOWCxDQVRGLENBREY7SUFzQkQ7Ozs7RUF4RHFCWSxpQkFBQSxDQUFNQyxTOztlQTBEYmxCLE8ifQ==