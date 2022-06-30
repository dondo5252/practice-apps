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
      definitions: [] //{practice: test, hello:goodbye}

    };
    _this.addWord = _this.addWord.bind(_assertThisInitialized(_this));
    _this.updateDefinitions = _this.updateDefinitions.bind(_assertThisInitialized(_this));
    _this["delete"] = _this["delete"].bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "updateDefinitions",
    value: function updateDefinitions(addWord, addDef) {
      var copy = this.state.definitions.slice();
      copy.push({
        word: addWord,
        definition: addDef
      });
      this.setState({
        definitions: copy
      });
    }
  }, {
    key: "delete",
    value: function _delete(wordToDelete) {
      var copydelete = this.state.definitions.slice();

      for (var i = 0; i < copydelete.length; i++) {
        var currObj = copydelete[i];
        console.log(wordToDelete, " equals ", currObj.word);

        if (wordToDelete === currObj.word) {
          console.log("before", copydelete);
          copydelete.splice(i, 1);
          console.log("after", copydelete);
          this.setState({
            definitions: copydelete
          });
        }
      }
    }
  }, {
    key: "addWord",
    value: function addWord(wordAdded, defAdded) {
      axios.post('/glossary', {
        word: wordAdded,
        definition: defAdded
      }).then(function (response) {
        console.log('RESPPPONSE', response);
      })["catch"](function (error) {
        console.log(error);
      }); //  .then(function () {
      //    change state?
      //  });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "Glossary"), /*#__PURE__*/_react["default"].createElement(_AddWord["default"], {
        addWord: this.addWord,
        update: this.updateDefinitions
      }), /*#__PURE__*/_react["default"].createElement(_DefinitionList["default"], {
        glossary: this.state.definitions,
        "delete": this["delete"]
      }));
    }
  }]);

  return App;
}(_react["default"].Component);

(0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZGVmaW5pdGlvbnMiLCJhZGRXb3JkIiwiYmluZCIsInVwZGF0ZURlZmluaXRpb25zIiwiYWRkRGVmIiwiY29weSIsInNsaWNlIiwicHVzaCIsIndvcmQiLCJkZWZpbml0aW9uIiwic2V0U3RhdGUiLCJ3b3JkVG9EZWxldGUiLCJjb3B5ZGVsZXRlIiwiaSIsImxlbmd0aCIsImN1cnJPYmoiLCJjb25zb2xlIiwibG9nIiwic3BsaWNlIiwid29yZEFkZGVkIiwiZGVmQWRkZWQiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiZXJyb3IiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9jbGllbnQvc3JjL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEFkZFdvcmQgZnJvbSBcIi4vQWRkV29yZC5qc3hcIlxuaW1wb3J0IERlZmluaXRpb25MaXN0IGZyb20gXCIuL0RlZmluaXRpb25MaXN0LmpzeFwiXG5cbmNvbnN0IGF4aW9zID0gcmVxdWlyZSAoJ2F4aW9zJyk7XG5cbiBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGVmaW5pdGlvbnMgOiBbXS8ve3ByYWN0aWNlOiB0ZXN0LCBoZWxsbzpnb29kYnllfVxuICAgIH1cblxuICAgIHRoaXMuYWRkV29yZCA9IHRoaXMuYWRkV29yZC5iaW5kKHRoaXMpXG4gICAgdGhpcy51cGRhdGVEZWZpbml0aW9ucyA9IHRoaXMudXBkYXRlRGVmaW5pdGlvbnMuYmluZCh0aGlzKVxuICAgIHRoaXMuZGVsZXRlID0gdGhpcy5kZWxldGUuYmluZCh0aGlzKVxuICB9XG5cbiAgdXBkYXRlRGVmaW5pdGlvbnMgKGFkZFdvcmQsIGFkZERlZikge1xuICAgIGxldCBjb3B5ID0gdGhpcy5zdGF0ZS5kZWZpbml0aW9ucy5zbGljZSgpXG4gICAgY29weS5wdXNoKHt3b3JkOmFkZFdvcmQsIGRlZmluaXRpb246YWRkRGVmfSlcbiAgICB0aGlzLnNldFN0YXRlKHtkZWZpbml0aW9uczogY29weX0pXG4gICAgfVxuXG4gIGRlbGV0ZSh3b3JkVG9EZWxldGUpIHtcbiAgICBsZXQgY29weWRlbGV0ZSA9IHRoaXMuc3RhdGUuZGVmaW5pdGlvbnMuc2xpY2UoKTtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb3B5ZGVsZXRlLmxlbmd0aDtpKyspIHtcbiAgICAgICAgdmFyIGN1cnJPYmogPSBjb3B5ZGVsZXRlW2ldXG4gICAgICAgIGNvbnNvbGUubG9nKHdvcmRUb0RlbGV0ZSwgXCIgZXF1YWxzIFwiICwgY3Vyck9iai53b3JkKVxuICAgICAgICBpZiAod29yZFRvRGVsZXRlID09PSBjdXJyT2JqLndvcmQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyggXCJiZWZvcmVcIixjb3B5ZGVsZXRlKVxuICAgICAgICAgIGNvcHlkZWxldGUuc3BsaWNlKGksIDEpXG4gICAgICAgICAgY29uc29sZS5sb2coIFwiYWZ0ZXJcIixjb3B5ZGVsZXRlKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RlZmluaXRpb25zOiBjb3B5ZGVsZXRlfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICBhZGRXb3JkKHdvcmRBZGRlZCwgZGVmQWRkZWQpIHtcbiAgICBheGlvcy5wb3N0KCcvZ2xvc3NhcnknLCB7XG4gICAgICB3b3JkOiB3b3JkQWRkZWQsXG4gICAgICBkZWZpbml0aW9uOiBkZWZBZGRlZFxuICAgIH0gKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgY29uc29sZS5sb2coJ1JFU1BQUE9OU0UnLCByZXNwb25zZSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSlcbiAgICAvLyAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgIC8vICAgIGNoYW5nZSBzdGF0ZT9cbiAgICAvLyAgfSk7XG4gIH1cblxuXG5cbnJlbmRlcigpIHtcbiAgcmV0dXJuKFxuICA8ZGl2PlxuICAgIDxwPkdsb3NzYXJ5PC9wPlxuICAgICAgPEFkZFdvcmQgYWRkV29yZD17dGhpcy5hZGRXb3JkfSB1cGRhdGU9e3RoaXMudXBkYXRlRGVmaW5pdGlvbnN9IC8+XG4gICAgICA8RGVmaW5pdGlvbkxpc3QgZ2xvc3Nhcnk9e3RoaXMuc3RhdGUuZGVmaW5pdGlvbnN9IGRlbGV0ZT17dGhpcy5kZWxldGV9Lz5cbiAgPC9kaXY+XG4gIClcbn07XG59XG5cbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKVxuIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLEtBQUssR0FBR0MsT0FBTyxDQUFFLE9BQUYsQ0FBckI7O0lBRU9DLEc7Ozs7O0VBQ0wsYUFBWUMsS0FBWixFQUFtQjtJQUFBOztJQUFBOztJQUNqQiwwQkFBTUEsS0FBTjtJQUNBLE1BQUtDLEtBQUwsR0FBYTtNQUNYQyxXQUFXLEVBQUcsRUFESCxDQUNLOztJQURMLENBQWI7SUFJQSxNQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhQyxJQUFiLCtCQUFmO0lBQ0EsTUFBS0MsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJELElBQXZCLCtCQUF6QjtJQUNBLGtCQUFjLGdCQUFZQSxJQUFaLCtCQUFkO0lBUmlCO0VBU2xCOzs7O1dBRUQsMkJBQW1CRCxPQUFuQixFQUE0QkcsTUFBNUIsRUFBb0M7TUFDbEMsSUFBSUMsSUFBSSxHQUFHLEtBQUtOLEtBQUwsQ0FBV0MsV0FBWCxDQUF1Qk0sS0FBdkIsRUFBWDtNQUNBRCxJQUFJLENBQUNFLElBQUwsQ0FBVTtRQUFDQyxJQUFJLEVBQUNQLE9BQU47UUFBZVEsVUFBVSxFQUFDTDtNQUExQixDQUFWO01BQ0EsS0FBS00sUUFBTCxDQUFjO1FBQUNWLFdBQVcsRUFBRUs7TUFBZCxDQUFkO0lBQ0M7OztXQUVILGlCQUFPTSxZQUFQLEVBQXFCO01BQ25CLElBQUlDLFVBQVUsR0FBRyxLQUFLYixLQUFMLENBQVdDLFdBQVgsQ0FBdUJNLEtBQXZCLEVBQWpCOztNQUNFLEtBQUksSUFBSU8sQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHRCxVQUFVLENBQUNFLE1BQTlCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO1FBQ3hDLElBQUlFLE9BQU8sR0FBR0gsVUFBVSxDQUFDQyxDQUFELENBQXhCO1FBQ0FHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixZQUFaLEVBQTBCLFVBQTFCLEVBQXVDSSxPQUFPLENBQUNQLElBQS9DOztRQUNBLElBQUlHLFlBQVksS0FBS0ksT0FBTyxDQUFDUCxJQUE3QixFQUFtQztVQUNqQ1EsT0FBTyxDQUFDQyxHQUFSLENBQWEsUUFBYixFQUFzQkwsVUFBdEI7VUFDQUEsVUFBVSxDQUFDTSxNQUFYLENBQWtCTCxDQUFsQixFQUFxQixDQUFyQjtVQUNBRyxPQUFPLENBQUNDLEdBQVIsQ0FBYSxPQUFiLEVBQXFCTCxVQUFyQjtVQUNBLEtBQUtGLFFBQUwsQ0FBYztZQUFDVixXQUFXLEVBQUVZO1VBQWQsQ0FBZDtRQUNEO01BQ0Y7SUFDRjs7O1dBRUgsaUJBQVFPLFNBQVIsRUFBbUJDLFFBQW5CLEVBQTZCO01BQzNCekIsS0FBSyxDQUFDMEIsSUFBTixDQUFXLFdBQVgsRUFBd0I7UUFDdEJiLElBQUksRUFBRVcsU0FEZ0I7UUFFdEJWLFVBQVUsRUFBRVc7TUFGVSxDQUF4QixFQUlDRSxJQUpELENBSU0sVUFBVUMsUUFBVixFQUFvQjtRQUN4QlAsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQk0sUUFBMUI7TUFDRCxDQU5ELFdBT08sVUFBVUMsS0FBVixFQUFpQjtRQUN0QlIsT0FBTyxDQUFDQyxHQUFSLENBQVlPLEtBQVo7TUFDRCxDQVRELEVBRDJCLENBVzNCO01BQ0E7TUFDQTtJQUNEOzs7V0FJSCxrQkFBUztNQUNQLG9CQUNBLDBEQUNFLHNEQURGLGVBRUksZ0NBQUMsbUJBQUQ7UUFBUyxPQUFPLEVBQUUsS0FBS3ZCLE9BQXZCO1FBQWdDLE1BQU0sRUFBRSxLQUFLRTtNQUE3QyxFQUZKLGVBR0ksZ0NBQUMsMEJBQUQ7UUFBZ0IsUUFBUSxFQUFFLEtBQUtKLEtBQUwsQ0FBV0MsV0FBckM7UUFBa0QsVUFBUTtNQUExRCxFQUhKLENBREE7SUFPRDs7OztFQTFEa0J5QixpQkFBQSxDQUFNQyxTOztBQTZEekIsSUFBQUMsZ0JBQUEsZ0JBQU8sZ0NBQUMsR0FBRCxPQUFQLEVBQWdCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBaEIifQ==