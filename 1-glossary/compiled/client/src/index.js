"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _AddWord = _interopRequireDefault(require("./AddWord.jsx"));

var _DefinitionList = _interopRequireDefault(require("./DefinitionList.jsx"));

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
      definitions: [],
      current: [] //{practice: test, hello:goodbye}

    };
    _this.addWord = _this.addWord.bind(_assertThisInitialized(_this));
    _this.updateDefinitions = _this.updateDefinitions.bind(_assertThisInitialized(_this));
    _this["delete"] = _this["delete"].bind(_assertThisInitialized(_this));
    _this.deleteDef = _this.deleteDef.bind(_assertThisInitialized(_this)); // this.getDefinitions = this.getDefinitions.bind(this)

    return _this;
  } //Create
  //Read
  //Update
  //Delete
  //////UPPPPDATE


  _createClass(App, [{
    key: "updateDefinitions",
    value: function updateDefinitions() {
      var _this2 = this;

      axios.get('/glossary').then(function (response) {
        _this2.setState({
          definitions: response.data
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateDefinitions();
    } ///////CREATE

  }, {
    key: "addWord",
    value: function addWord(wordAdded, defAdded) {
      axios.post('/glossary', {
        word: wordAdded,
        definition: defAdded
      }).then(function (response) {
        console.log(response);
        this.updateDefinitions();
      })["catch"](function (error) {
        console.log(error);
      });
    } //delete

  }, {
    key: "delete",
    value: function _delete(wordToDelete) {
      var copydelete = this.state.definitions.slice();

      for (var i = 0; i < copydelete.length; i++) {
        var currObj = copydelete[i]; // console.log(wordToDelete, " equals " , currObj.word)

        if (wordToDelete === currObj.word) {
          // console.log( "before",copydelete)
          copydelete.splice(i, 1); // console.log( "after",copydelete)

          this.setState({
            definitions: copydelete
          });
        }
      }
    }
  }, {
    key: "deleteDef",
    value: function deleteDef(deleteword, deletedef) {
      var _this3 = this;

      axios["delete"]('/glossary', {
        data: {
          word: deleteword,
          definition: deletedef
        }
      }).then(function (response) {
        _this3.updateDefinitions();
      })["catch"](function (error) {
        // handle error
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "Glossary"), /*#__PURE__*/_react["default"].createElement(_AddWord["default"], {
        addWord: this.addWord,
        update: this.updateDefinitions
      }), /*#__PURE__*/_react["default"].createElement(_DefinitionList["default"], {
        glossary: this.state.definitions,
        deleteDef: this.deleteDef
      }));
    }
  }]);

  return App;
}(_react["default"].Component);

(0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(App, null), document.getElementById('root')); // update local storage
// updateDefinitions (addWord, addDef) {
//   let copy = this.state.definitions.slice()
//   copy.push({word:addWord, definition:addDef})
//   this.setState({definitions: copy})
//   }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZGVmaW5pdGlvbnMiLCJjdXJyZW50IiwiYWRkV29yZCIsImJpbmQiLCJ1cGRhdGVEZWZpbml0aW9ucyIsImRlbGV0ZURlZiIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsInNldFN0YXRlIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIndvcmRBZGRlZCIsImRlZkFkZGVkIiwicG9zdCIsIndvcmQiLCJkZWZpbml0aW9uIiwid29yZFRvRGVsZXRlIiwiY29weWRlbGV0ZSIsInNsaWNlIiwiaSIsImxlbmd0aCIsImN1cnJPYmoiLCJzcGxpY2UiLCJkZWxldGV3b3JkIiwiZGVsZXRlZGVmIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vY2xpZW50L3NyYy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBBZGRXb3JkIGZyb20gXCIuL0FkZFdvcmQuanN4XCJcbmltcG9ydCBEZWZpbml0aW9uTGlzdCBmcm9tIFwiLi9EZWZpbml0aW9uTGlzdC5qc3hcIlxuXG5jb25zdCBheGlvcyA9IHJlcXVpcmUgKCdheGlvcycpO1xuXG4gY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRlZmluaXRpb25zIDogW10sXG4gICAgICBjdXJyZW50OiBbXSAvL3twcmFjdGljZTogdGVzdCwgaGVsbG86Z29vZGJ5ZX1cbiAgICB9XG4gICAgdGhpcy5hZGRXb3JkID0gdGhpcy5hZGRXb3JkLmJpbmQodGhpcylcbiAgICB0aGlzLnVwZGF0ZURlZmluaXRpb25zID0gdGhpcy51cGRhdGVEZWZpbml0aW9ucy5iaW5kKHRoaXMpXG4gICAgdGhpcy5kZWxldGUgPSB0aGlzLmRlbGV0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5kZWxldGVEZWYgPSB0aGlzLmRlbGV0ZURlZi5iaW5kKHRoaXMpXG4gICAgLy8gdGhpcy5nZXREZWZpbml0aW9ucyA9IHRoaXMuZ2V0RGVmaW5pdGlvbnMuYmluZCh0aGlzKVxuXG4gIH1cblxuICAvL0NyZWF0ZVxuICAvL1JlYWRcbiAgLy9VcGRhdGVcbiAgLy9EZWxldGVcblxuLy8vLy8vVVBQUFBEQVRFXG4gIHVwZGF0ZURlZmluaXRpb25zICgpIHtcbiAgICBheGlvcy5nZXQoJy9nbG9zc2FyeScpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtkZWZpbml0aW9uczogcmVzcG9uc2UuZGF0YX0pXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVEZWZpbml0aW9ucygpXG59XG5cblxuXG5cbi8vLy8vLy9DUkVBVEVcbiAgYWRkV29yZCh3b3JkQWRkZWQsIGRlZkFkZGVkKSB7XG4gICAgYXhpb3MucG9zdCgnL2dsb3NzYXJ5Jywge1xuICAgICAgd29yZDogd29yZEFkZGVkLFxuICAgICAgZGVmaW5pdGlvbjogZGVmQWRkZWRcbiAgICB9IClcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgdGhpcy51cGRhdGVEZWZpbml0aW9ucyAoKVxuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pXG4gIH1cblxuLy9kZWxldGVcbmRlbGV0ZSh3b3JkVG9EZWxldGUpIHtcbiAgbGV0IGNvcHlkZWxldGUgPSB0aGlzLnN0YXRlLmRlZmluaXRpb25zLnNsaWNlKCk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNvcHlkZWxldGUubGVuZ3RoO2krKykge1xuICAgICAgdmFyIGN1cnJPYmogPSBjb3B5ZGVsZXRlW2ldXG4gICAgICAvLyBjb25zb2xlLmxvZyh3b3JkVG9EZWxldGUsIFwiIGVxdWFscyBcIiAsIGN1cnJPYmoud29yZClcbiAgICAgIGlmICh3b3JkVG9EZWxldGUgPT09IGN1cnJPYmoud29yZCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJiZWZvcmVcIixjb3B5ZGVsZXRlKVxuICAgICAgICBjb3B5ZGVsZXRlLnNwbGljZShpLCAxKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJhZnRlclwiLGNvcHlkZWxldGUpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RlZmluaXRpb25zOiBjb3B5ZGVsZXRlfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG5kZWxldGVEZWYoZGVsZXRld29yZCwgZGVsZXRlZGVmKSB7XG4gIGF4aW9zLmRlbGV0ZSgnL2dsb3NzYXJ5Jywge2RhdGE6IHt3b3JkOiBkZWxldGV3b3JkLCBkZWZpbml0aW9uOiBkZWxldGVkZWZ9fSlcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgdGhpcy51cGRhdGVEZWZpbml0aW9ucygpXG4gIH0pXG4gIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH0pXG59XG5cblxucmVuZGVyKCkge1xuICByZXR1cm4oXG4gIDxkaXY+XG4gICAgPHA+R2xvc3Nhcnk8L3A+XG4gICAgICA8QWRkV29yZCBhZGRXb3JkPXt0aGlzLmFkZFdvcmR9IHVwZGF0ZT17dGhpcy51cGRhdGVEZWZpbml0aW9uc30gLz5cbiAgICAgIDxEZWZpbml0aW9uTGlzdCBnbG9zc2FyeT17dGhpcy5zdGF0ZS5kZWZpbml0aW9uc30gZGVsZXRlRGVmPXt0aGlzLmRlbGV0ZURlZn0gLz5cbiAgPC9kaXY+XG4gIClcbn07XG59XG5cbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKVxuXG5cbi8vIHVwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gIC8vIHVwZGF0ZURlZmluaXRpb25zIChhZGRXb3JkLCBhZGREZWYpIHtcbiAgLy8gICBsZXQgY29weSA9IHRoaXMuc3RhdGUuZGVmaW5pdGlvbnMuc2xpY2UoKVxuICAvLyAgIGNvcHkucHVzaCh7d29yZDphZGRXb3JkLCBkZWZpbml0aW9uOmFkZERlZn0pXG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7ZGVmaW5pdGlvbnM6IGNvcHl9KVxuICAvLyAgIH0iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxPQUFPLENBQUUsT0FBRixDQUFyQjs7SUFFT0MsRzs7Ozs7RUFDTCxhQUFZQyxLQUFaLEVBQW1CO0lBQUE7O0lBQUE7O0lBQ2pCLDBCQUFNQSxLQUFOO0lBQ0EsTUFBS0MsS0FBTCxHQUFhO01BQ1hDLFdBQVcsRUFBRyxFQURIO01BRVhDLE9BQU8sRUFBRSxFQUZFLENBRUM7O0lBRkQsQ0FBYjtJQUlBLE1BQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFDLElBQWIsK0JBQWY7SUFDQSxNQUFLQyxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1QkQsSUFBdkIsK0JBQXpCO0lBQ0Esa0JBQWMsZ0JBQVlBLElBQVosK0JBQWQ7SUFDQSxNQUFLRSxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUYsSUFBZiwrQkFBakIsQ0FUaUIsQ0FVakI7O0lBVmlCO0VBWWxCLEMsQ0FFRDtFQUNBO0VBQ0E7RUFDQTtFQUVGOzs7OztXQUNFLDZCQUFxQjtNQUFBOztNQUNuQlIsS0FBSyxDQUFDVyxHQUFOLENBQVUsV0FBVixFQUNDQyxJQURELENBQ00sVUFBQ0MsUUFBRCxFQUFj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