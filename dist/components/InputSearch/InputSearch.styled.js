"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseInputSearch = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
exports.BaseInputSearch = styled_1.default.div `
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto 10px;
  .MuiInputBase-root {
    padding-left: 0;
    input {
      padding: 8px 12px;
    }
  }
`;
//# sourceMappingURL=InputSearch.styled.js.map