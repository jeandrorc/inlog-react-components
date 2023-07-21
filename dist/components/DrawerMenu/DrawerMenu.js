"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const ChevronLeft_1 = __importDefault(require("@mui/icons-material/ChevronLeft"));
const ChevronRight_1 = __importDefault(require("@mui/icons-material/ChevronRight"));
const system_1 = require("@mui/system");
const DrawerMenu_styled_1 = require("./DrawerMenu.styled");
const DrawerMenu = ({ open, onClose, anchor = "left", menuItems, userOption, drawerWidth, }) => {
    return (react_1.default.createElement(material_1.Drawer, { variant: "temporary", anchor: anchor, open: open, onClose: onClose, PaperProps: { style: { width: drawerWidth } } },
        react_1.default.createElement(system_1.Box, { sx: {
                width: drawerWidth,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flex: 1
            } },
            react_1.default.createElement(DrawerMenu_styled_1.DrawerBody, null,
                react_1.default.createElement(material_1.IconButton, { onClick: onClose }, anchor === "left" ? react_1.default.createElement(ChevronLeft_1.default, null) : react_1.default.createElement(ChevronRight_1.default, null)),
                react_1.default.createElement(material_1.Divider, null),
                react_1.default.createElement(material_1.List, null, menuItems === null || menuItems === void 0 ? void 0 : menuItems.map((item, index) => (react_1.default.createElement(material_1.ListItemButton, { key: index, onClick: item.onClick },
                    item.icon && react_1.default.createElement(material_1.ListItemIcon, null, item.icon),
                    react_1.default.createElement(material_1.ListItemText, { primary: item.text })))))),
            react_1.default.createElement("div", null,
                react_1.default.createElement(material_1.Divider, null),
                react_1.default.createElement(system_1.Box, { p: 1, display: "flex", alignItems: "center" },
                    (userOption === null || userOption === void 0 ? void 0 : userOption.avatar) && (react_1.default.createElement(material_1.Avatar, { alt: userOption.name, src: userOption.avatar, sx: { marginRight: 1 } })),
                    react_1.default.createElement(material_1.ListItemText, { primary: userOption === null || userOption === void 0 ? void 0 : userOption.name })),
                react_1.default.createElement(material_1.List, null, userOption === null || userOption === void 0 ? void 0 : userOption.options.map((option, index) => (react_1.default.createElement(material_1.ListItemButton, { key: index, onClick: option.onClick },
                    option.icon && react_1.default.createElement(material_1.ListItemIcon, null, option.icon),
                    react_1.default.createElement(material_1.ListItemText, { primary: option.text })))))))));
};
exports.default = DrawerMenu;
//# sourceMappingURL=DrawerMenu.js.map