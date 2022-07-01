"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _DefinitionListEntry = _interopRequireDefault(require("./DefinitionListEntry.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DefinitionList = function DefinitionList(props) {
  return /*#__PURE__*/_react["default"].createElement("ul", null, props.glossary.map(function (definition, index) {
    return /*#__PURE__*/_react["default"].createElement(_DefinitionListEntry["default"], {
      key: index,
      value: definition,
      deleteDef: props.deleteDef,
      patch: props.patch
    });
  }));
};

var _default = DefinitionList;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZpbml0aW9uTGlzdCIsInByb3BzIiwiZ2xvc3NhcnkiLCJtYXAiLCJkZWZpbml0aW9uIiwiaW5kZXgiLCJkZWxldGVEZWYiLCJwYXRjaCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvRGVmaW5pdGlvbkxpc3QuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEZWZpbml0aW9uTGlzdEVudHJ5IGZyb20gXCIuL0RlZmluaXRpb25MaXN0RW50cnkuanN4XCJcblxudmFyIERlZmluaXRpb25MaXN0ID0gKHByb3BzKSA9PiB7XG5cblxuICByZXR1cm4gKFxuXG4gICAgPHVsPlxuICAgICB7cHJvcHMuZ2xvc3NhcnkubWFwKChkZWZpbml0aW9uLCBpbmRleCkgPT5cbiAgICAgPERlZmluaXRpb25MaXN0RW50cnkga2V5PXtpbmRleH0gIHZhbHVlPXtkZWZpbml0aW9ufSBkZWxldGVEZWY9e3Byb3BzLmRlbGV0ZURlZn0gcGF0Y2g9e3Byb3BzLnBhdGNofS8+XG4gICAgICl9XG4gICAgPC91bD5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgRGVmaW5pdGlvbkxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQUlBLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFXO0VBRzlCLG9CQUVFLDRDQUNFQSxLQUFLLENBQUNDLFFBQU4sQ0FBZUMsR0FBZixDQUFtQixVQUFDQyxVQUFELEVBQWFDLEtBQWI7SUFBQSxvQkFDcEIsZ0NBQUMsK0JBQUQ7TUFBcUIsR0FBRyxFQUFFQSxLQUExQjtNQUFrQyxLQUFLLEVBQUVELFVBQXpDO01BQXFELFNBQVMsRUFBRUgsS0FBSyxDQUFDSyxTQUF0RTtNQUFpRixLQUFLLEVBQUVMLEtBQUssQ0FBQ007SUFBOUYsRUFEb0I7RUFBQSxDQUFuQixDQURGLENBRkY7QUFRRCxDQVhEOztlQVllUCxjIn0=