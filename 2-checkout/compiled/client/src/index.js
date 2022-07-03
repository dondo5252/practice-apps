"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _F = _interopRequireDefault(require("./components/F1.jsx"));

var _F2 = _interopRequireDefault(require("./components/F2.jsx"));

var _F3 = _interopRequireDefault(require("./components/F3.jsx"));

var _Summary = _interopRequireDefault(require("./components/Summary.jsx"));

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
      count: 1,
      name: '',
      email: '',
      password: '',
      lineOne: '',
      lineTwo: '',
      state: '',
      zip: '',
      phoneNum: '',
      CCNum: '',
      expDate: '',
      CVV: '',
      billingZip: ''
    };
    _this.updateF1 = _this.updateF1.bind(_assertThisInitialized(_this));
    _this.updateF2 = _this.updateF2.bind(_assertThisInitialized(_this));
    _this.updateF3 = _this.updateF3.bind(_assertThisInitialized(_this));
    _this.checkout = _this.checkout.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "updateF1",
    value: function updateF1(nameUpdate, emailUpdate, passwordUpdate) {
      this.setState({
        count: 2,
        name: nameUpdate,
        email: emailUpdate,
        password: passwordUpdate
      });
    }
  }, {
    key: "updateF2",
    value: function updateF2(lineOneUpdate, lineTwoUpdate, stateUpdate, zipUpdate, phoneNumUpdate) {
      this.setState({
        count: 3,
        lineOne: lineOneUpdate,
        lineTwo: lineTwoUpdate,
        state: stateUpdate,
        zip: zipUpdate,
        phoneNum: phoneNumUpdate
      }); //setState
    }
  }, {
    key: "updateF3",
    value: function updateF3(CCNumUpdate, expDateUpdate, CVVUpdate, billingZipUpdate) {
      //setState
      this.setState({
        count: 4,
        CCNum: CCNumUpdate,
        expDate: expDateUpdate,
        CVV: CVVUpdate,
        billingZip: billingZipUpdate
      }); // console.log(this.state)
      // console.log(CCNumUpdate, expDateUpdate, CVVUpdate, billingZipUpdate, 'innvoookkkedddd update f3')
    }
  }, {
    key: "checkout",
    value: function checkout() {
      var _this2 = this;

      axios.post('/checkout', {
        s_id: document.cookie,
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        lineOne: this.state.lineOne,
        lineTwo: this.state.lineTwo,
        state: this.state.state,
        zip: this.state.zip,
        phoneNum: this.state.phoneNum,
        CCNum: this.state.CCNum,
        expDate: this.state.expDate,
        CVV: this.state.CVV,
        billingZip: this.state.billingZip
      }).then(function (response) {
        console.log(response, 'rerurn on client side');

        _this2.setState({
          count: 1,
          name: '',
          email: '',
          password: '',
          lineOne: '',
          lineTwo: '',
          state: '',
          zip: '',
          phoneNum: '',
          CCNum: '',
          expDate: '',
          CVV: '',
          billingZip: ''
        });
      })["catch"](function (error) {
        console.log(error, "errrooorr posting from client side");
      });
    }
  }, {
    key: "render",
    value: function render() {
      var page;

      if (this.state.count === 1) {
        page = /*#__PURE__*/_react["default"].createElement(_F["default"], {
          update: this.updateF1
        });
      } else if (this.state.count === 2) {
        page = /*#__PURE__*/_react["default"].createElement(_F2["default"], {
          update: this.updateF2
        });
      } else if (this.state.count === 3) {
        page = /*#__PURE__*/_react["default"].createElement(_F3["default"], {
          update: this.updateF3
        });
      } else if (this.state.count === 4) {
        page = /*#__PURE__*/_react["default"].createElement(_Summary["default"], {
          post: this.checkout,
          info: this.state
        });
      }

      console.log(document.cookie);
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Checkout!"), /*#__PURE__*/_react["default"].createElement("div", null, page), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("code", null, "Page Cookie: ", JSON.stringify(document.cookie, undefined, "\t"))));
    }
  }]);

  return App;
}(_react["default"].Component);

(0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(App, null), document.getElementById("root"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiY291bnQiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImxpbmVPbmUiLCJsaW5lVHdvIiwiemlwIiwicGhvbmVOdW0iLCJDQ051bSIsImV4cERhdGUiLCJDVlYiLCJiaWxsaW5nWmlwIiwidXBkYXRlRjEiLCJiaW5kIiwidXBkYXRlRjIiLCJ1cGRhdGVGMyIsImNoZWNrb3V0IiwibmFtZVVwZGF0ZSIsImVtYWlsVXBkYXRlIiwicGFzc3dvcmRVcGRhdGUiLCJzZXRTdGF0ZSIsImxpbmVPbmVVcGRhdGUiLCJsaW5lVHdvVXBkYXRlIiwic3RhdGVVcGRhdGUiLCJ6aXBVcGRhdGUiLCJwaG9uZU51bVVwZGF0ZSIsIkNDTnVtVXBkYXRlIiwiZXhwRGF0ZVVwZGF0ZSIsIkNWVlVwZGF0ZSIsImJpbGxpbmdaaXBVcGRhdGUiLCJwb3N0Iiwic19pZCIsImRvY3VtZW50IiwiY29va2llIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicGFnZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1bmRlZmluZWQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vY2xpZW50L3NyYy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEYxIGZyb20gXCIuL2NvbXBvbmVudHMvRjEuanN4XCJcbmltcG9ydCBGMiBmcm9tIFwiLi9jb21wb25lbnRzL0YyLmpzeFwiXG5pbXBvcnQgRjMgZnJvbSBcIi4vY29tcG9uZW50cy9GMy5qc3hcIlxuaW1wb3J0IFN1bW1hcnkgZnJvbSBcIi4vY29tcG9uZW50cy9TdW1tYXJ5LmpzeFwiXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY291bnQ6IDEsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGxpbmVPbmU6ICcnLFxuICAgICAgbGluZVR3bzogJycsXG4gICAgICBzdGF0ZTogJycsXG4gICAgICB6aXA6ICcnLFxuICAgICAgcGhvbmVOdW06ICcnLFxuICAgICAgQ0NOdW06ICcnLFxuICAgICAgZXhwRGF0ZTogJycsXG4gICAgICBDVlY6ICcnLFxuICAgICAgYmlsbGluZ1ppcDogJydcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUYxID0gdGhpcy51cGRhdGVGMS5iaW5kKHRoaXMpXG4gICAgdGhpcy51cGRhdGVGMiA9IHRoaXMudXBkYXRlRjIuYmluZCh0aGlzKVxuICAgIHRoaXMudXBkYXRlRjMgPSB0aGlzLnVwZGF0ZUYzLmJpbmQodGhpcylcbiAgICB0aGlzLmNoZWNrb3V0ID0gdGhpcy5jaGVja291dC5iaW5kKHRoaXMpXG4gIH1cblxuXG4gIHVwZGF0ZUYxIChuYW1lVXBkYXRlLCBlbWFpbFVwZGF0ZSwgcGFzc3dvcmRVcGRhdGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjb3VudDogMiwgbmFtZTogbmFtZVVwZGF0ZSwgZW1haWw6IGVtYWlsVXBkYXRlLCBwYXNzd29yZDogcGFzc3dvcmRVcGRhdGV9KVxuICB9XG5cbiAgdXBkYXRlRjIgKGxpbmVPbmVVcGRhdGUsIGxpbmVUd29VcGRhdGUsIHN0YXRlVXBkYXRlLCB6aXBVcGRhdGUsIHBob25lTnVtVXBkYXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y291bnQ6IDMsICBsaW5lT25lOiBsaW5lT25lVXBkYXRlLCBsaW5lVHdvOiBsaW5lVHdvVXBkYXRlLCBzdGF0ZTogc3RhdGVVcGRhdGUsIHppcDogemlwVXBkYXRlLCBwaG9uZU51bTogcGhvbmVOdW1VcGRhdGV9KVxuICAgIC8vc2V0U3RhdGVcbiAgICB9XG4gIHVwZGF0ZUYzIChDQ051bVVwZGF0ZSwgZXhwRGF0ZVVwZGF0ZSwgQ1ZWVXBkYXRlLCBiaWxsaW5nWmlwVXBkYXRlKSB7XG4gICAgLy9zZXRTdGF0ZVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y291bnQ6IDQsIENDTnVtOiBDQ051bVVwZGF0ZSwgZXhwRGF0ZTogZXhwRGF0ZVVwZGF0ZSwgQ1ZWOiBDVlZVcGRhdGUsIGJpbGxpbmdaaXA6IGJpbGxpbmdaaXBVcGRhdGV9KVxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKENDTnVtVXBkYXRlLCBleHBEYXRlVXBkYXRlLCBDVlZVcGRhdGUsIGJpbGxpbmdaaXBVcGRhdGUsICdpbm52b29va2trZWRkZGQgdXBkYXRlIGYzJylcbiAgICB9XG5cbiAgICBjaGVja291dCAoKSB7XG4gICAgICBheGlvcy5wb3N0KCcvY2hlY2tvdXQnLCB7XG4gICAgICAgIHNfaWQ6IGRvY3VtZW50LmNvb2tpZSxcbiAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5uYW1lLFxuICAgICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmQsXG4gICAgICAgIGxpbmVPbmU6IHRoaXMuc3RhdGUubGluZU9uZSxcbiAgICAgICAgbGluZVR3bzogdGhpcy5zdGF0ZS5saW5lVHdvLFxuICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZS5zdGF0ZSxcbiAgICAgICAgemlwOiB0aGlzLnN0YXRlLnppcCxcbiAgICAgICAgcGhvbmVOdW06IHRoaXMuc3RhdGUucGhvbmVOdW0sXG4gICAgICAgIENDTnVtOiB0aGlzLnN0YXRlLkNDTnVtLFxuICAgICAgICBleHBEYXRlOiB0aGlzLnN0YXRlLmV4cERhdGUsXG4gICAgICAgIENWVjogdGhpcy5zdGF0ZS5DVlYsXG4gICAgICAgIGJpbGxpbmdaaXA6IHRoaXMuc3RhdGUuYmlsbGluZ1ppcFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSwncmVydXJuIG9uIGNsaWVudCBzaWRlJyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgbGluZU9uZTogJycsXG4gICAgICAgICAgbGluZVR3bzogJycsXG4gICAgICAgICAgc3RhdGU6ICcnLFxuICAgICAgICAgIHppcDogJycsXG4gICAgICAgICAgcGhvbmVOdW06ICcnLFxuICAgICAgICAgIENDTnVtOiAnJyxcbiAgICAgICAgICBleHBEYXRlOiAnJyxcbiAgICAgICAgICBDVlY6ICcnLFxuICAgICAgICAgIGJpbGxpbmdaaXA6ICcnfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBcImVycnJvb29yciBwb3N0aW5nIGZyb20gY2xpZW50IHNpZGVcIik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBwYWdlO1xuICAgIGlmKHRoaXMuc3RhdGUuY291bnQgPT09IDEpIHtcbiAgICAgIHBhZ2UgPSA8RjEgdXBkYXRlPXt0aGlzLnVwZGF0ZUYxfS8+XG4gICAgfSBlbHNlIGlmKHRoaXMuc3RhdGUuY291bnQgPT09IDIpIHtcbiAgICAgIHBhZ2UgPSA8RjIgdXBkYXRlPXt0aGlzLnVwZGF0ZUYyfS8+XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmNvdW50ID09PSAzKSB7XG4gICAgICBwYWdlID0gPEYzIHVwZGF0ZT17dGhpcy51cGRhdGVGM30vPlxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jb3VudCA9PT0gNCkge1xuICAgICAgcGFnZSA9IDxTdW1tYXJ5IHBvc3Q9e3RoaXMuY2hlY2tvdXR9IGluZm89e3RoaXMuc3RhdGV9Lz5cbiAgICB9XG5cbiAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmNvb2tpZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+Q2hlY2tvdXQhPC9oMT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7cGFnZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxjb2RlPlBhZ2UgQ29va2llOiB7SlNPTi5zdHJpbmdpZnkoZG9jdW1lbnQuY29va2llLCB1bmRlZmluZWQsIFwiXFx0XCIpfTwvY29kZT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9O1xufVxucmVuZGVyKDxBcHAvPixkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpXG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHQyxPQUFPLENBQUMsT0FBRCxDQUFyQjs7SUFHTUMsRzs7Ozs7RUFDSixhQUFZQyxLQUFaLEVBQW1CO0lBQUE7O0lBQUE7O0lBQ2pCLDBCQUFNQSxLQUFOO0lBQ0EsTUFBS0MsS0FBTCxHQUFhO01BQ1hDLEtBQUssRUFBRSxDQURJO01BRVhDLElBQUksRUFBRSxFQUZLO01BR1hDLEtBQUssRUFBRSxFQUhJO01BSVhDLFFBQVEsRUFBRSxFQUpDO01BS1hDLE9BQU8sRUFBRSxFQUxFO01BTVhDLE9BQU8sRUFBRSxFQU5FO01BT1hOLEtBQUssRUFBRSxFQVBJO01BUVhPLEdBQUcsRUFBRSxFQVJNO01BU1hDLFFBQVEsRUFBRSxFQVRDO01BVVhDLEtBQUssRUFBRSxFQVZJO01BV1hDLE9BQU8sRUFBRSxFQVhFO01BWVhDLEdBQUcsRUFBRSxFQVpNO01BYVhDLFVBQVUsRUFBRTtJQWJELENBQWI7SUFnQkEsTUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsK0JBQWhCO0lBQ0EsTUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNELElBQWQsK0JBQWhCO0lBQ0EsTUFBS0UsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNGLElBQWQsK0JBQWhCO0lBQ0EsTUFBS0csUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNILElBQWQsK0JBQWhCO0lBckJpQjtFQXNCbEI7Ozs7V0FHRCxrQkFBVUksVUFBVixFQUFzQkMsV0FBdEIsRUFBbUNDLGNBQW5DLEVBQW1EO01BQ2pELEtBQUtDLFFBQUwsQ0FBYztRQUFDcEIsS0FBSyxFQUFFLENBQVI7UUFBV0MsSUFBSSxFQUFFZ0IsVUFBakI7UUFBNkJmLEtBQUssRUFBRWdCLFdBQXBDO1FBQWlEZixRQUFRLEVBQUVnQjtNQUEzRCxDQUFkO0lBQ0Q7OztXQUVELGtCQUFVRSxhQUFWLEVBQXlCQyxhQUF6QixFQUF3Q0MsV0FBeEMsRUFBcURDLFNBQXJELEVBQWdFQyxjQUFoRSxFQUFnRjtNQUM5RSxLQUFLTCxRQUFMLENBQWM7UUFBQ3BCLEtBQUssRUFBRSxDQUFSO1FBQVlJLE9BQU8sRUFBRWlCLGFBQXJCO1FBQW9DaEIsT0FBTyxFQUFFaUIsYUFBN0M7UUFBNER2QixLQUFLLEVBQUV3QixXQUFuRTtRQUFnRmpCLEdBQUcsRUFBRWtCLFNBQXJGO1FBQWdHakIsUUFBUSxFQUFFa0I7TUFBMUcsQ0FBZCxFQUQ4RSxDQUU5RTtJQUNDOzs7V0FDSCxrQkFBVUMsV0FBVixFQUF1QkMsYUFBdkIsRUFBc0NDLFNBQXRDLEVBQWlEQyxnQkFBakQsRUFBbUU7TUFDakU7TUFDRSxLQUFLVCxRQUFMLENBQWM7UUFBQ3BCLEtBQUssRUFBRSxDQUFSO1FBQVdRLEtBQUssRUFBRWtCLFdBQWxCO1FBQStCakIsT0FBTyxFQUFFa0IsYUFBeEM7UUFBdURqQixHQUFHLEVBQUVrQixTQUE1RDtRQUF1RWpCLFVBQVUsRUFBRWtCO01BQW5GLENBQWQsRUFGK0QsQ0FHL0Q7TUFDQTtJQUNEOzs7V0FFRCxvQkFBWTtNQUFBOztNQUNWbEMsS0FBSyxDQUFDbUMsSUFBTixDQUFXLFdBQVgsRUFBd0I7UUFDdEJDLElBQUksRUFBRUMsUUFBUSxDQUFDQyxNQURPO1FBRXRCaEMsSUFBSSxFQUFFLEtBQUtGLEtBQUwsQ0FBV0UsSUFGSztRQUd0QkMsS0FBSyxFQUFFLEtBQUtILEtBQUwsQ0FBV0csS0FISTtRQUl0QkMsUUFBUSxFQUFFLEtBQUtKLEtBQUwsQ0FBV0ksUUFKQztRQUt0QkMsT0FBTyxFQUFFLEtBQUtMLEtBQUwsQ0FBV0ssT0FMRTtRQU10QkMsT0FBTyxFQUFFLEtBQUtOLEtBQUwsQ0FBV00sT0FORTtRQU90Qk4sS0FBSyxFQUFFLEtBQUtBLEtBQUwsQ0FBV0EsS0FQSTtRQVF0Qk8sR0FBRyxFQUFFLEtBQUtQLEtBQUwsQ0FBV08sR0FSTTtRQVN0QkMsUUFBUSxFQUFFLEtBQUtSLEtBQUwsQ0FBV1EsUUFUQztRQVV0QkMsS0FBSyxFQUFFLEtBQUtULEtBQUwsQ0FBV1MsS0FWSTtRQVd0QkMsT0FBTyxFQUFFLEtBQUtWLEtBQUwsQ0FBV1UsT0FYRTtRQVl0QkMsR0FBRyxFQUFFLEtBQUtYLEtBQUwsQ0FBV1csR0FaTTtRQWF0QkMsVUFBVSxFQUFFLEtBQUtaLEtBQUwsQ0FBV1k7TUFiRCxDQUF4QixFQWVDdUIsSUFmRCxDQWVNLFVBQUNDLFFBQUQsRUFBYztRQUNsQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVosRUFBcUIsdUJBQXJCOztRQUNBLE1BQUksQ0FBQ2YsUUFBTCxDQUFjO1VBQ1pwQixLQUFLLEVBQUUsQ0FESztVQUVaQyxJQUFJLEVBQUUsRUFGTTtVQUdaQyxLQUFLLEVBQUUsRUFISztVQUlaQyxRQUFRLEVBQUUsRUFKRTtVQUtaQyxPQUFPLEVBQUUsRUFMRztVQU1aQyxPQUFPLEVBQUUsRUFORztVQU9aTixLQUFLLEVBQUUsRUFQSztVQVFaTyxHQUFHLEVBQUUsRUFSTztVQVNaQyxRQUFRLEVBQUUsRUFURTtVQVVaQyxLQUFLLEVBQUUsRUFWSztVQVdaQyxPQUFPLEVBQUUsRUFYRztVQVlaQyxHQUFHLEVBQUUsRUFaTztVQWFaQyxVQUFVLEVBQUU7UUFiQSxDQUFkO01BY0QsQ0EvQkQsV0FnQ08sVUFBQzJCLEtBQUQsRUFBVztRQUNoQkYsT0FBTyxDQUFDQyxHQUFSLENBQVlDLEtBQVosRUFBbUIsb0NBQW5CO01BQ0QsQ0FsQ0Q7SUFtQ0Q7OztXQUVILGtCQUFTO01BQ1AsSUFBSUMsSUFBSjs7TUFDQSxJQUFHLEtBQUt4QyxLQUFMLENBQVdDLEtBQVgsS0FBcUIsQ0FBeEIsRUFBMkI7UUFDekJ1QyxJQUFJLGdCQUFHLGdDQUFDLGFBQUQ7VUFBSSxNQUFNLEVBQUUsS0FBSzNCO1FBQWpCLEVBQVA7TUFDRCxDQUZELE1BRU8sSUFBRyxLQUFLYixLQUFMLENBQVdDLEtBQVgsS0FBcUIsQ0FBeEIsRUFBMkI7UUFDaEN1QyxJQUFJLGdCQUFHLGdDQUFDLGNBQUQ7VUFBSSxNQUFNLEVBQUUsS0FBS3pCO1FBQWpCLEVBQVA7TUFDRCxDQUZNLE1BRUEsSUFBSSxLQUFLZixLQUFMLENBQVdDLEtBQVgsS0FBcUIsQ0FBekIsRUFBNEI7UUFDakN1QyxJQUFJLGdCQUFHLGdDQUFDLGNBQUQ7VUFBSSxNQUFNLEVBQUUsS0FBS3hCO1FBQWpCLEVBQVA7TUFDRCxDQUZNLE1BRUEsSUFBSSxLQUFLaEIsS0FBTCxDQUFXQyxLQUFYLEtBQXFCLENBQXpCLEVBQTRCO1FBQ2pDdUMsSUFBSSxnQkFBRyxnQ0FBQyxtQkFBRDtVQUFTLElBQUksRUFBRSxLQUFLdkIsUUFBcEI7VUFBOEIsSUFBSSxFQUFFLEtBQUtqQjtRQUF6QyxFQUFQO01BQ0Q7O01BRUZxQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsUUFBUSxDQUFDQyxNQUFyQjtNQUVDLG9CQUNFLDBEQUNFLHdEQURGLGVBRUUsNkNBQ0dNLElBREgsQ0FGRixlQUtFLHdEQUNFLCtEQUFvQkMsSUFBSSxDQUFDQyxTQUFMLENBQWVULFFBQVEsQ0FBQ0MsTUFBeEIsRUFBZ0NTLFNBQWhDLEVBQTJDLElBQTNDLENBQXBCLENBREYsQ0FMRixDQURGO0lBV0Q7Ozs7RUF4R2VDLGlCQUFBLENBQU1DLFM7O0FBMEd4QixJQUFBQyxnQkFBQSxnQkFBTyxnQ0FBQyxHQUFELE9BQVAsRUFBY2IsUUFBUSxDQUFDYyxjQUFULENBQXdCLE1BQXhCLENBQWQifQ==