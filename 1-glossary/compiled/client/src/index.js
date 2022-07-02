"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _AddWord = _interopRequireDefault(require("./AddWord.jsx"));

var _DefinitionList = _interopRequireDefault(require("./DefinitionList.jsx"));

var _Search = _interopRequireDefault(require("./Search.jsx"));

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
    _this.addWord = _this.addWord.bind(_assertThisInitialized(_this));
    _this.updateDefinitions = _this.updateDefinitions.bind(_assertThisInitialized(_this));
    _this.deleteDef = _this.deleteDef.bind(_assertThisInitialized(_this));
    _this.patchyPatch = _this.patchyPatch.bind(_assertThisInitialized(_this));
    _this.filterSearch = _this.filterSearch.bind(_assertThisInitialized(_this)); // this.delete = this.delete.bind(this)
    // this.getDefinitions = this.getDefinitions.bind(this)

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

      return axios.get('/glossary').then(function (response) {
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
    }
  }, {
    key: "patchyPatch",
    value: function patchyPatch(wordObj) {
      var _this3 = this;

      console.log('patched');
      return axios.patch('/glossary', wordObj).then(function (response) {
        console.log(response);

        _this3.updateDefinitions();
      })["catch"](function (error) {
        console.log(error);
      });
    } ///////CREATE

  }, {
    key: "addWord",
    value: function addWord(wordAdded, defAdded) {
      var _this4 = this;

      return axios.post('/glossary', {
        word: wordAdded,
        definition: defAdded
      }).then(function (response) {
        _this4.updateDefinitions();
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "deleteDef",
    value: function deleteDef(deleteword, deletedef) {
      var _this5 = this;

      return axios["delete"]('/glossary', {
        data: {
          word: deleteword,
          definition: deletedef
        }
      }).then(function (response) {
        _this5.updateDefinitions();
      })["catch"](function (error) {
        // handle error
        console.log(error);
      });
    } //filterSearch

  }, {
    key: "filterSearch",
    value: function filterSearch(wordSearched) {
      var container = [];
      var copy = this.state.definitions.slice();

      for (var i = 0; i < copy.length; i++) {
        var currWord = copy[i].word;
        if (currWord.toLowerCase().includes(wordSearched.toLowerCase())) container.push(copy[i]);
        console.log(container, "container");
        this.setState({
          definitions: container
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Glossary"), /*#__PURE__*/_react["default"].createElement(_Search["default"], {
        search: this.filterSearch
      }), /*#__PURE__*/_react["default"].createElement(_AddWord["default"], {
        addWord: this.addWord,
        update: this.updateDefinitions
      }), /*#__PURE__*/_react["default"].createElement(_DefinitionList["default"], {
        glossary: this.state.definitions,
        deleteDef: this.deleteDef,
        patch: this.patchyPatch
      }));
    }
  }]);

  return App;
}(_react["default"].Component);

(0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZGVmaW5pdGlvbnMiLCJhZGRXb3JkIiwiYmluZCIsInVwZGF0ZURlZmluaXRpb25zIiwiZGVsZXRlRGVmIiwicGF0Y2h5UGF0Y2giLCJmaWx0ZXJTZWFyY2giLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzZXRTdGF0ZSIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ3b3JkT2JqIiwicGF0Y2giLCJ3b3JkQWRkZWQiLCJkZWZBZGRlZCIsInBvc3QiLCJ3b3JkIiwiZGVmaW5pdGlvbiIsImRlbGV0ZXdvcmQiLCJkZWxldGVkZWYiLCJ3b3JkU2VhcmNoZWQiLCJjb250YWluZXIiLCJjb3B5Iiwic2xpY2UiLCJpIiwibGVuZ3RoIiwiY3VycldvcmQiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwicHVzaCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7cmVuZGVyfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQWRkV29yZCBmcm9tIFwiLi9BZGRXb3JkLmpzeFwiXG5pbXBvcnQgRGVmaW5pdGlvbkxpc3QgZnJvbSBcIi4vRGVmaW5pdGlvbkxpc3QuanN4XCJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vU2VhcmNoLmpzeFwiXG5cbmNvbnN0IGF4aW9zID0gcmVxdWlyZSAoJ2F4aW9zJyk7XG5cbiBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGVmaW5pdGlvbnMgOiBbXVxuICAgIH1cbiAgICB0aGlzLmFkZFdvcmQgPSB0aGlzLmFkZFdvcmQuYmluZCh0aGlzKVxuICAgIHRoaXMudXBkYXRlRGVmaW5pdGlvbnMgPSB0aGlzLnVwZGF0ZURlZmluaXRpb25zLmJpbmQodGhpcylcbiAgICB0aGlzLmRlbGV0ZURlZiA9IHRoaXMuZGVsZXRlRGVmLmJpbmQodGhpcylcbiAgICB0aGlzLnBhdGNoeVBhdGNoID0gdGhpcy5wYXRjaHlQYXRjaC5iaW5kKHRoaXMpXG4gICAgdGhpcy5maWx0ZXJTZWFyY2ggPSB0aGlzLmZpbHRlclNlYXJjaC5iaW5kKHRoaXMpXG4gICAgLy8gdGhpcy5kZWxldGUgPSB0aGlzLmRlbGV0ZS5iaW5kKHRoaXMpXG4gICAgLy8gdGhpcy5nZXREZWZpbml0aW9ucyA9IHRoaXMuZ2V0RGVmaW5pdGlvbnMuYmluZCh0aGlzKVxuXG4gIH1cblxuICAvL0NyZWF0ZVxuICAvL1JlYWRcbiAgLy9VcGRhdGVcbiAgLy9EZWxldGVcblxuLy8vLy8vVVBQUFBEQVRFXG4gIHVwZGF0ZURlZmluaXRpb25zICgpIHtcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvZ2xvc3NhcnknKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGVmaW5pdGlvbnM6IHJlc3BvbnNlLmRhdGF9KVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlRGVmaW5pdGlvbnMoKVxuXG4gIH1cblxuICBwYXRjaHlQYXRjaCAod29yZE9iaikge1xuICAgIGNvbnNvbGUubG9nKCdwYXRjaGVkJylcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goJy9nbG9zc2FyeScsIHdvcmRPYmopXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgIHRoaXMudXBkYXRlRGVmaW5pdGlvbnMoKVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pXG4gIH1cblxuXG4vLy8vLy8vQ1JFQVRFXG4gIGFkZFdvcmQod29yZEFkZGVkLCBkZWZBZGRlZCkge1xuICAgIHJldHVybiBheGlvcy5wb3N0KCcvZ2xvc3NhcnknLCB7XG4gICAgICB3b3JkOiB3b3JkQWRkZWQsXG4gICAgICBkZWZpbml0aW9uOiBkZWZBZGRlZFxuICAgIH0gKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVEZWZpbml0aW9ucyAoKVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pXG4gIH1cblxuXG5cblxuZGVsZXRlRGVmKGRlbGV0ZXdvcmQsIGRlbGV0ZWRlZikge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKCcvZ2xvc3NhcnknLCB7ZGF0YToge3dvcmQ6IGRlbGV0ZXdvcmQsIGRlZmluaXRpb246IGRlbGV0ZWRlZn19KVxuICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICB0aGlzLnVwZGF0ZURlZmluaXRpb25zKClcbiAgfSlcbiAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vIGhhbmRsZSBlcnJvclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfSlcbn1cbi8vZmlsdGVyU2VhcmNoXG5maWx0ZXJTZWFyY2god29yZFNlYXJjaGVkKSB7XG4gIHZhciBjb250YWluZXIgPSBbXVxuICB2YXIgY29weSA9IHRoaXMuc3RhdGUuZGVmaW5pdGlvbnMuc2xpY2UoKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY29weS5sZW5ndGg7aSsrKSB7XG4gICAgICB2YXIgY3VycldvcmQgPSBjb3B5W2ldLndvcmQ7XG4gICAgICBpZihjdXJyV29yZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHdvcmRTZWFyY2hlZC50b0xvd2VyQ2FzZSgpKSlcbiAgICAgICAgY29udGFpbmVyLnB1c2goY29weVtpXSlcbiAgICAgICAgY29uc29sZS5sb2coY29udGFpbmVyLCBcImNvbnRhaW5lclwiKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkZWZpbml0aW9uczogY29udGFpbmVyfSlcbiAgICB9XG59XG5cblxucmVuZGVyKCkge1xuICByZXR1cm4oXG4gIDxkaXY+XG4gICAgPGgxPkdsb3NzYXJ5PC9oMT5cbiAgICAgIDxTZWFyY2ggc2VhcmNoPXt0aGlzLmZpbHRlclNlYXJjaH0vPlxuICAgICAgPEFkZFdvcmQgYWRkV29yZD17dGhpcy5hZGRXb3JkfSB1cGRhdGU9e3RoaXMudXBkYXRlRGVmaW5pdGlvbnN9IC8+XG4gICAgICA8RGVmaW5pdGlvbkxpc3QgZ2xvc3Nhcnk9e3RoaXMuc3RhdGUuZGVmaW5pdGlvbnN9IGRlbGV0ZURlZj17dGhpcy5kZWxldGVEZWZ9IHBhdGNoPXt0aGlzLnBhdGNoeVBhdGNofS8+XG4gIDwvZGl2PlxuICApXG59O1xufVxuXG5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSlcblxuXG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxPQUFPLENBQUUsT0FBRixDQUFyQjs7SUFFT0MsRzs7Ozs7RUFDTCxhQUFZQyxLQUFaLEVBQW1CO0lBQUE7O0lBQUE7O0lBQ2pCLDBCQUFNQSxLQUFOO0lBQ0EsTUFBS0MsS0FBTCxHQUFhO01BQ1hDLFdBQVcsRUFBRztJQURILENBQWI7SUFHQSxNQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhQyxJQUFiLCtCQUFmO0lBQ0EsTUFBS0MsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJELElBQXZCLCtCQUF6QjtJQUNBLE1BQUtFLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlRixJQUFmLCtCQUFqQjtJQUNBLE1BQUtHLFdBQUws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