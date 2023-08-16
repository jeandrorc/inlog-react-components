"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingShapesSpinner = exports.ContestStyle = exports.ToggleFullScreenStyle = exports.MapCoordinates = exports.Map = exports.MapAreaContainer = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const constants_1 = require("../../constants");
exports.MapAreaContainer = styled_1.default.div `
  background: #e0f2f1; // Substitua por suas próprias cores
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${constants_1.colors.white};
  background-size: cover;
  z-index: 0;
  position: relative;
  border-bottom: none;
`;
exports.Map = styled_1.default.div `
  height: 100%;
  width: 100%;
`;
exports.MapCoordinates = styled_1.default.div `
  position: absolute;
  z-index: 9999999;
  color: ${constants_1.colors.primary};
  background: rgba(255, 255, 255, 0.8);
  padding: 5px;
  border-radius: 5px;
  top: 5px;
  right: 5px;
`;
exports.ToggleFullScreenStyle = styled_1.default.div `
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 999;
`;
exports.ContestStyle = styled_1.default.div `
  position: absolute;
  right: 10px;
  top: 50px;
  z-index: 999;
`;
exports.LoadingShapesSpinner = styled_1.default.div `
  position: absolute;
  z-index: 9999999;
  color: ${constants_1.colors.primary};
  background: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  border-radius: 5px;
  left: 5px;
  bottom: 5px;
  display: flex;
  align-items: center;

  > div {
    margin-right: 5px;
  }
`;
//# sourceMappingURL=mapArea.styled.js.map