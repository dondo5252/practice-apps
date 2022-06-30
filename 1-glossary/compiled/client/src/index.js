"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

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

var axios = require('axios');

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
      definitions: []
    };
    return _this;
  }

  _createClass(App, [{
    key: "search",
    value: function search(searchWord) {
      axios.post('/glossary', {
        word: 'searchedword',
        //replace with searchedword
        definition: 'not a CAT!'
      }).then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      }); // .then(function () {
      //   ///change state?
      // });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "Hello, World!"));
    }
  }]);

  return App;
}(_react["default"].Component);

(0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZGVmaW5pdGlvbnMiLCJzZWFyY2hXb3JkIiwicG9zdCIsIndvcmQiLCJkZWZpbml0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vY2xpZW50L3NyYy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gXCJyZWFjdC1kb21cIjtcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSAoJ2F4aW9zJyk7XG5cbiBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGVmaW5pdGlvbnMgOiBbXVxuICAgIH1cbiAgfVxuICBzZWFyY2goc2VhcmNoV29yZCkge1xuICAgIGF4aW9zLnBvc3QoJy9nbG9zc2FyeScsIHtcbiAgICAgIHdvcmQ6ICdzZWFyY2hlZHdvcmQnLC8vcmVwbGFjZSB3aXRoIHNlYXJjaGVkd29yZFxuICAgICAgZGVmaW5pdGlvbjogJ25vdCBhIENBVCEnXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxuICAgIC8vIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgIC8vL2NoYW5nZSBzdGF0ZT9cbiAgICAvLyB9KTtcbiAgfVxucmVuZGVyKCkge1xuXG4gIHJldHVybihcbiAgPGRpdj5cbiAgICA8cD5IZWxsbywgV29ybGQhPC9wPlxuICA8L2Rpdj5cbiAgKVxufTtcbn1cbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKVxuIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLEtBQUssR0FBR0MsT0FBTyxDQUFFLE9BQUYsQ0FBckI7O0lBRU9DLEc7Ozs7O0VBQ0wsYUFBWUMsS0FBWixFQUFtQjtJQUFBOztJQUFBOztJQUNqQiwwQkFBTUEsS0FBTjtJQUNBLE1BQUtDLEtBQUwsR0FBYTtNQUNYQyxXQUFXLEVBQUc7SUFESCxDQUFiO0lBRmlCO0VBS2xCOzs7O1dBQ0QsZ0JBQU9DLFVBQVAsRUFBbUI7TUFDakJOLEtBQUssQ0FBQ08sSUFBTixDQUFXLFdBQVgsRUFBd0I7UUFDdEJDLElBQUksRUFBRSxjQURnQjtRQUNEO1FBQ3JCQyxVQUFVLEVBQUU7TUFGVSxDQUF4QixFQUlDQyxJQUpELENBSU0sVUFBVUMsUUFBVixFQUFvQjtRQUN4QkMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7TUFDRCxDQU5ELFdBT08sVUFBVUcsS0FBVixFQUFpQjtRQUN0QkYsT0FBTyxDQUFDQyxHQUFSLENBQVlDLEtBQVo7TUFDRCxDQVRELEVBRGlCLENBV2pCO01BQ0E7TUFDQTtJQUNEOzs7V0FDSCxrQkFBUztNQUVQLG9CQUNBLDBEQUNFLDJEQURGLENBREE7SUFLRDs7OztFQTdCa0JDLGlCQUFBLENBQU1DLFM7O0FBK0J6QixJQUFBQyxnQkFBQSxnQkFBTyxnQ0FBQyxHQUFELE9BQVAsRUFBZ0JDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFoQiJ9