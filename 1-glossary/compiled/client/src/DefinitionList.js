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
      "delete": props["delete"]
    });
  }));
};

var _default = DefinitionList;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZpbml0aW9uTGlzdCIsInByb3BzIiwiZ2xvc3NhcnkiLCJtYXAiLCJkZWZpbml0aW9uIiwiaW5kZXgiXSwic291cmNlcyI6WyIuLi8uLi8uLi9jbGllbnQvc3JjL0RlZmluaXRpb25MaXN0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGVmaW5pdGlvbkxpc3RFbnRyeSBmcm9tIFwiLi9EZWZpbml0aW9uTGlzdEVudHJ5LmpzeFwiXG5cbnZhciBEZWZpbml0aW9uTGlzdCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAge3Byb3BzLmdsb3NzYXJ5Lm1hcCgoZGVmaW5pdGlvbiwgaW5kZXgpID0+XG4gICAgIDxEZWZpbml0aW9uTGlzdEVudHJ5IGtleT17aW5kZXh9ICB2YWx1ZT17ZGVmaW5pdGlvbn0gZGVsZXRlPXtwcm9wcy5kZWxldGV9Lz5cbiAgICAgKX1cbiAgICA8L3VsPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBEZWZpbml0aW9uTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUEsSUFBSUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7RUFDOUIsb0JBQ0UsNENBQ0VBLEtBQUssQ0FBQ0MsUUFBTixDQUFlQyxHQUFmLENBQW1CLFVBQUNDLFVBQUQsRUFBYUMsS0FBYjtJQUFBLG9CQUNwQixnQ0FBQywrQkFBRDtNQUFxQixHQUFHLEVBQUVBLEtBQTFCO01BQWtDLEtBQUssRUFBRUQsVUFBekM7TUFBcUQsVUFBUUgsS0FBSztJQUFsRSxFQURvQjtFQUFBLENBQW5CLENBREYsQ0FERjtBQU9ELENBUkQ7O2VBU2VELGMifQ==