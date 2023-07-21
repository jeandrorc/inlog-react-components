"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageTitle = exports.CenterArea = exports.RightArea = exports.LeftArea = exports.RightMenuButtonWrapper = exports.BaseHeader = void 0;
const system_1 = require("@mui/system");
const colors_1 = __importDefault(require("../../constants/colors"));
const styled_1 = __importDefault(require("@emotion/styled"));
const material_1 = require("@mui/material");
exports.BaseHeader = (0, styled_1.default)(material_1.AppBar) `
  height: 50px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid ${colors_1.default.borderColor};
  .MuiToolbar-root {
    flex: 1;
    padding-right: 0;
  }
`;
exports.RightMenuButtonWrapper = (0, styled_1.default)(system_1.Box) `
  margin-right: 10px;
`;
exports.LeftArea = styled_1.default.div `
  display: flex;
`;
exports.RightArea = styled_1.default.div `
  display: flex;
`;
exports.CenterArea = styled_1.default.div `
  flex-grow: 1;
  padding: 0 10px;
`;
exports.PageTitle = (0, styled_1.default)(material_1.Typography) `
    color: ${colors_1.default.gray};
    margin: auto 12px;
    font-size: 18px;
    padding-left: 10px;
    margin-left: 10px;
    border-left: 1px solid rgb(204, 204, 204);
`;
//# sourceMappingURL=Header.styled.js.map