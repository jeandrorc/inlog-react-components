"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = __importStar(require("react"));
const MenuAction_styled_1 = require("./MenuAction.styled");
const Dialog_1 = __importDefault(require("../../Dialog/Dialog"));
const MenuAction = ({ menuOptions, type, ModalComponent, icon, subtitle, title, }) => {
    const [anchorEl, setAnchorEl] = (0, react_1.useState)(null);
    const [modalOpen, setModalOpen] = (0, react_1.useState)(false);
    const handleClick = (event) => {
        if (type === "menu") {
            setAnchorEl(event.currentTarget);
        }
        else if (type === "modal") {
            setModalOpen(true);
        }
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleModalClose = () => {
        setModalOpen(false);
    };
    const renderButtonMenu = () => {
        if (icon && !title && !subtitle) {
            return (react_1.default.createElement(material_1.IconButton, { edge: "end", onClick: handleClick }, icon));
        }
        if (title && subtitle && !icon) {
            return (react_1.default.createElement(MenuAction_styled_1.MenuItemRoot, { onClick: handleClick, className: "MenuItem-root button-withRows" },
                react_1.default.createElement("div", { className: "MenuItem-body" },
                    react_1.default.createElement(material_1.Typography, { className: "Menu-item-button-title", variant: "h4" }, title),
                    react_1.default.createElement(material_1.Typography, { className: "Menu-item-button-subTitle", variant: "h6" }, subtitle))));
        }
        return (react_1.default.createElement(MenuAction_styled_1.MenuItemRoot, { onClick: handleClick, className: "MenuItem-root button-withRows", endIcon: icon && icon },
            react_1.default.createElement("div", { className: "MenuItem-body" },
                react_1.default.createElement(material_1.Typography, { className: "Menu-item-button-title", variant: "h4" }, title),
                react_1.default.createElement(material_1.Typography, { className: "Menu-item-button-subTitle", variant: "h6" }, subtitle))));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        !title && !subtitle && icon ? (react_1.default.createElement(MenuAction_styled_1.MenuItemRoot, { type: "button", onClick: handleClick }, icon)) : (react_1.default.createElement(MenuAction_styled_1.MenuItemRoot, { onClick: handleClick, className: "MenuItem-root button-withRows", endIcon: icon && icon },
            react_1.default.createElement("div", { className: "MenuItem-body" },
                react_1.default.createElement(material_1.Typography, { className: "Menu-item-button-title", variant: "h4", textTransform: "none" }, title),
                react_1.default.createElement(material_1.Typography, { className: "Menu-item-button-subTitle", variant: "h6", textTransform: "none" }, subtitle)))),
        type === "menu" && (react_1.default.createElement(material_1.Menu, { anchorEl: anchorEl, keepMounted: true, open: Boolean(anchorEl), onClose: handleMenuClose }, menuOptions === null || menuOptions === void 0 ? void 0 : menuOptions.map(({ label, menuItemProps, icon }) => (react_1.default.createElement(material_1.MenuItem, Object.assign({}, menuItemProps),
            icon && icon,
            label))))),
        type === "modal" && ModalComponent && (react_1.default.createElement(Dialog_1.default, { title: title, content: ModalComponent, open: modalOpen, onClose: handleModalClose }))));
};
exports.default = MenuAction;
//# sourceMappingURL=MenuAction.js.map