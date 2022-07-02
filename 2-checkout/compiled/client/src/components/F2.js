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

var F2 = /*#__PURE__*/function (_React$Component) {
  _inherits(F2, _React$Component);

  var _super = _createSuper(F2);

  function F2(props) {
    var _this;

    _classCallCheck(this, F2);

    _this = _super.call(this, props);
    _this.state = {
      lineOne: '',
      lineTwo: '',
      state: '',
      zip: '',
      phoneNum: ''
    };
    _this.handlelineOneChange = _this.handlelineOneChange.bind(_assertThisInitialized(_this));
    _this.handlelineTwoChange = _this.handlelineTwoChange.bind(_assertThisInitialized(_this));
    _this.handleStateChange = _this.handleStateChange.bind(_assertThisInitialized(_this));
    _this.handleZipChange = _this.handleZipChange.bind(_assertThisInitialized(_this));
    _this.handlePhoneNumChange = _this.handlePhoneNumChange.bind(_assertThisInitialized(_this));
    _this.handleF2NextClick = _this.handleF2NextClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(F2, [{
    key: "handlelineOneChange",
    value: function handlelineOneChange(event) {
      event.preventDefault();
      this.setState({
        lineOne: event.target.value
      });
      console.log(this.state.lineOne);
    }
  }, {
    key: "handlelineTwoChange",
    value: function handlelineTwoChange(event) {
      event.preventDefault();
      this.setState({
        lineTwo: event.target.value
      });
      console.log(this.state.lineTwo);
    }
  }, {
    key: "handleStateChange",
    value: function handleStateChange(event) {
      event.preventDefault();
      this.setState({
        state: event.target.value
      });
      console.log(this.state.state);
    }
  }, {
    key: "handleZipChange",
    value: function handleZipChange(event) {
      event.preventDefault();
      this.setState({
        zip: event.target.value
      });
      console.log(this.state.zip);
    }
  }, {
    key: "handlePhoneNumChange",
    value: function handlePhoneNumChange(event) {
      event.preventDefault();
      this.setState({
        phoneNum: event.target.value
      });
      console.log(this.state.phoneNum);
    }
  }, {
    key: "handleF2NextClick",
    value: function handleF2NextClick(event) {
      event.preventDefault();
      this.props.update(this.state.lineOne, this.state.lineTwo, this.state.state, this.state.zip, this.state.phoneNum);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: this.state.lineOne,
        placeholder: "Address line one...",
        onChange: this.handlelineOneChange
      })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: this.state.lineTwo,
        placeholder: "Address line two...",
        onChange: this.handlelineTwoChange
      })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: this.state.state,
        placeholder: "State...",
        onChange: this.handleStateChange
      })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: this.state.zip,
        placeholder: "Zip code...",
        onChange: this.handleZipChange
      })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: this.state.phoneNum,
        placeholder: "Phone number...",
        onChange: this.handlePhoneNumChange
      })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.handleF2NextClick
      }, "Next")));
    }
  }]);

  return F2;
}(_react["default"].Component);

var _default = F2;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGMiIsInByb3BzIiwic3RhdGUiLCJsaW5lT25lIiwibGluZVR3byIsInppcCIsInBob25lTnVtIiwiaGFuZGxlbGluZU9uZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVsaW5lVHdvQ2hhbmdlIiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJoYW5kbGVaaXBDaGFuZ2UiLCJoYW5kbGVQaG9uZU51bUNoYW5nZSIsImhhbmRsZUYyTmV4dENsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvRjIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgRjIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlciAocHJvcHMpXG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBsaW5lT25lOiAnJyxcbiAgICAgICAgbGluZVR3bzogJycsXG4gICAgICAgIHN0YXRlOiAnJyxcbiAgICAgICAgemlwOiAnJyxcbiAgICAgICAgcGhvbmVOdW06ICcnXG4gICAgICB9XG4gICAgICB0aGlzLmhhbmRsZWxpbmVPbmVDaGFuZ2UgPSB0aGlzLmhhbmRsZWxpbmVPbmVDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgdGhpcy5oYW5kbGVsaW5lVHdvQ2hhbmdlID0gdGhpcy5oYW5kbGVsaW5lVHdvQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgIHRoaXMuaGFuZGxlU3RhdGVDaGFuZ2UgPSB0aGlzLmhhbmRsZVN0YXRlQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgIHRoaXMuaGFuZGxlWmlwQ2hhbmdlID0gdGhpcy5oYW5kbGVaaXBDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgdGhpcy5oYW5kbGVQaG9uZU51bUNoYW5nZSA9IHRoaXMuaGFuZGxlUGhvbmVOdW1DaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgdGhpcy5oYW5kbGVGMk5leHRDbGljayA9IHRoaXMuaGFuZGxlRjJOZXh0Q2xpY2suYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlbGluZU9uZUNoYW5nZSAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5zZXRTdGF0ZSh7bGluZU9uZTogZXZlbnQudGFyZ2V0LnZhbHVlfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmxpbmVPbmUpXG4gIH1cblxuICBoYW5kbGVsaW5lVHdvQ2hhbmdlIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnNldFN0YXRlKHtsaW5lVHdvOiBldmVudC50YXJnZXQudmFsdWV9KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubGluZVR3bylcbiAgfVxuXG4gIGhhbmRsZVN0YXRlQ2hhbmdlIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnNldFN0YXRlKHtzdGF0ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnN0YXRlKVxuICB9XG5cbiAgaGFuZGxlWmlwQ2hhbmdlIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnNldFN0YXRlKHt6aXA6IGV2ZW50LnRhcmdldC52YWx1ZX0pXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS56aXApXG4gIH1cblxuICBoYW5kbGVQaG9uZU51bUNoYW5nZSAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5zZXRTdGF0ZSh7cGhvbmVOdW06IGV2ZW50LnRhcmdldC52YWx1ZX0pXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5waG9uZU51bSlcbiAgfVxuXG4gIGhhbmRsZUYyTmV4dENsaWNrIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnByb3BzLnVwZGF0ZSh0aGlzLnN0YXRlLmxpbmVPbmUsIHRoaXMuc3RhdGUubGluZVR3bywgdGhpcy5zdGF0ZS5zdGF0ZSwgdGhpcy5zdGF0ZS56aXAsIHRoaXMuc3RhdGUucGhvbmVOdW0pXG4gIH1cblxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmxpbmVPbmV9IHBsYWNlaG9sZGVyPVwiQWRkcmVzcyBsaW5lIG9uZS4uLlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZWxpbmVPbmVDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmxpbmVUd299IHBsYWNlaG9sZGVyPVwiQWRkcmVzcyBsaW5lIHR3by4uLlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZWxpbmVUd29DaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnN0YXRlfSBwbGFjZWhvbGRlcj1cIlN0YXRlLi4uXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3RhdGVDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnppcH0gcGxhY2Vob2xkZXI9XCJaaXAgY29kZS4uLlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVppcENoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUucGhvbmVOdW19IHBsYWNlaG9sZGVyPVwiUGhvbmUgbnVtYmVyLi4uXCJvbkNoYW5nZT17dGhpcy5oYW5kbGVQaG9uZU51bUNoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUYyTmV4dENsaWNrfT5OZXh0PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBGMjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsRTs7Ozs7RUFDSixZQUFhQyxLQUFiLEVBQW9CO0lBQUE7O0lBQUE7O0lBQ2xCLDBCQUFPQSxLQUFQO0lBQ0UsTUFBS0MsS0FBTCxHQUFhO01BQ1hDLE9BQU8sRUFBRSxFQURFO01BRVhDLE9BQU8sRUFBRSxFQUZFO01BR1hGLEtBQUssRUFBRSxFQUhJO01BSVhHLEdBQUcsRUFBRSxFQUpNO01BS1hDLFFBQVEsRUFBRTtJQUxDLENBQWI7SUFPQSxNQUFLQyxtQkFBTCxHQUEyQixNQUFLQSxtQkFBTCxDQUF5QkMsSUFBekIsK0JBQTNCO0lBQ0EsTUFBS0MsbUJBQUwsR0FBMkIsTUFBS0EsbUJBQUwsQ0FBeUJELElBQXpCLCtCQUEzQjtJQUNBLE1BQUtFLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCRixJQUF2QiwrQkFBekI7SUFDQSxNQUFLRyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJILElBQXJCLCtCQUF2QjtJQUNBLE1BQUtJLG9CQUFMLEdBQTRCLE1BQUtBLG9CQUFMLENBQTBCSixJQUExQiwrQkFBNUI7SUFDQSxNQUFLSyxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1QkwsSUFB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