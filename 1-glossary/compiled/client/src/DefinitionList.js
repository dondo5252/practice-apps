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
      deleteDef: props.deleteDef
    });
  }));
};

var _default = DefinitionList;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZpbml0aW9uTGlzdCIsInByb3BzIiwiZ2xvc3NhcnkiLCJtYXAiLCJkZWZpbml0aW9uIiwiaW5kZXgiLCJkZWxldGVEZWYiXSwic291cmNlcyI6WyIuLi8uLi8uLi9jbGllbnQvc3JjL0RlZmluaXRpb25MaXN0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGVmaW5pdGlvbkxpc3RFbnRyeSBmcm9tIFwiLi9EZWZpbml0aW9uTGlzdEVudHJ5LmpzeFwiXG5cbnZhciBEZWZpbml0aW9uTGlzdCA9IChwcm9wcykgPT4ge1xuXG5cbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgIHtwcm9wcy5nbG9zc2FyeS5tYXAoKGRlZmluaXRpb24sIGluZGV4KSA9PlxuICAgICA8RGVmaW5pdGlvbkxpc3RFbnRyeSBrZXk9e2luZGV4fSAgdmFsdWU9e2RlZmluaXRpb259IGRlbGV0ZURlZj17cHJvcHMuZGVsZXRlRGVmfS8+XG4gICAgICl9XG4gICAgPC91bD5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgRGVmaW5pdGlvbkxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQUlBLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFXO0VBRzlCLG9CQUNFLDRDQUNFQSxLQUFLLENBQUNDLFFBQU4sQ0FBZUMsR0FBZixDQUFtQixVQUFDQyxVQUFELEVBQWFDLEtBQWI7SUFBQSxvQkFDcEIsZ0NBQUMsK0JBQUQ7TUFBcUIsR0FBRyxFQUFFQSxLQUExQjtNQUFrQyxLQUFLLEVBQUVELFVBQXpDO01BQXFELFNBQVMsRUFBRUgsS0FBSyxDQUFDSztJQUF0RSxFQURvQjtFQUFBLENBQW5CLENBREYsQ0FERjtBQU9ELENBVkQ7O2VBV2VOLGMifQ==