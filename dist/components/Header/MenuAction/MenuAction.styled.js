"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemRoot = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const material_1 = require("@mui/material");
const colors_1 = __importDefault(require("../../../constants/colors"));
exports.MenuItemRoot = (0, styled_1.default)(material_1.Button) `
  .MenuItem-body {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    h4 {
        font-size: 14px;
        color: ${colors_1.default.primaryLight}
    }
    h6 {
        font-size: 12px;
        color: ${colors_1.default.gray600}
    }
  }
`;
//# sourceMappingURL=MenuAction.styled.js.map