"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterLogo = exports.HeaderLogo = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
exports.HeaderLogo = styled_1.default.div `
  height: 40px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
exports.FooterLogo = styled_1.default.div `
  width: 100px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
//# sourceMappingURL=Logo.styled.js.map