"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountDiv = exports.ContestDiv = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const colors_1 = require("../../constants/colors");
exports.ContestDiv = styled_1.default.div `
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 2px;
    background-color: ${colors_1.colors.primary};
    border: 2px solid ${colors_1.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;

    .count {
        position: absolute;
        height: 18px;
        min-width: 18px;
        right: calc(100% - 9px);
        bottom: -9px;
        padding: 5px;
        border-radius: 9px;
        font-size: 14px;
        background-color: ${colors_1.colors.danger};
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${colors_1.colors.white};
    }
`;
exports.CountDiv = styled_1.default.div `
    background-color: ${props => props.success ? colors_1.colors.success : colors_1.colors.danger};
`;
//# sourceMappingURL=Contest.styled.js.map