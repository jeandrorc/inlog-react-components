"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogHeader = exports.Row = exports.Subtitle = exports.Title = exports.StyledDialog = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const material_1 = require("@mui/material");
exports.StyledDialog = (0, styled_1.default)(material_1.Dialog) `
  .MuiDialog-paper {
    min-width: ${(props) => props.minWidth || "70vw"};
    min-height: ${(props) => props.minHeight || "70vh"};
  }
  .MuiDialogContent-root {
    display: flex;
    flex-direction: column;
  }
`;
exports.Title = styled_1.default.h4 ``;
exports.Subtitle = styled_1.default.h6 ``;
exports.Row = styled_1.default.div `
  display: flex;
  align-items: center;
`;
exports.DialogHeader = styled_1.default.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
`;
//# sourceMappingURL=Modal.styled.js.map