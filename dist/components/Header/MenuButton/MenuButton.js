"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const Menu_1 = __importDefault(require("@mui/icons-material/Menu"));
const MenuButton = ({ onMenuClick }) => {
    return (react_1.default.createElement(material_1.IconButton, { edge: "start", onClick: onMenuClick },
        react_1.default.createElement(Menu_1.default, { color: "primary" })));
};
exports.default = MenuButton;
//# sourceMappingURL=MenuButton.js.map