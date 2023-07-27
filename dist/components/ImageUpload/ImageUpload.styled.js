"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUploaderButton = exports.Thumbnail = exports.ImageListSlider = exports.ImageUploaderPreviewContainer = exports.ImageUploaderContainer = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const colors_1 = require("../../constants/colors");
const material_1 = require("@mui/material");
exports.ImageUploaderContainer = styled_1.default.div `
  display: flex;
  flex-direction: row;
  border: 1px solid ${colors_1.colors.gray100};
  background-color: ${colors_1.colors.grayPastel};
  min-height: ${({ minHeight }) => minHeight ? `${minHeight + 10}px` : "inherit"};
  padding: 18px;
  .image-uploader {
    width: "auto" !important;
  }
`;
exports.ImageUploaderPreviewContainer = styled_1.default.div `
  display: flex;
  flex: 1;
  max-width: 100%;
  align-items: center;
  overflow-y: auto;
`;
exports.ImageListSlider = styled_1.default.div `
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow-x: auto;
`;
exports.Thumbnail = (0, styled_1.default)(material_1.CardMedia) `
  position: relative;
  margin: auto 12px;
  button {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
exports.ImageUploaderButton = (0, styled_1.default)(material_1.Button) `
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  border: 1px dashed ${colors_1.colors.grayLight};
  padding: 12px;
  input {
    display: none;
  }
`;
//# sourceMappingURL=ImageUpload.styled.js.map