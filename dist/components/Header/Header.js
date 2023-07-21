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
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const Logo_1 = __importDefault(require("../Logo/Logo"));
const Header_styled_1 = require("./Header.styled");
const InputSearch_1 = __importDefault(require("../InputSearch/InputSearch"));
const MenuButton_1 = __importDefault(require("./MenuButton/MenuButton"));
const DrawerMenu_1 = __importDefault(require("../DrawerMenu/DrawerMenu"));
const MenuAction_1 = __importDefault(require("./MenuAction/MenuAction"));
const Header = ({ logoPros, onMenuClick, showSearch, inputSearchProps, SearchComponent, menuOptions, RightActionsComponent, drawerMenuProps, hideMenuButton = false, pageTitle, }) => {
    const [drawerOpen, setDrawerOpen] = (0, react_1.useState)(false); // New state for Drawer open/close
    // New handler for Drawer open/close
    const handleDrawerOpenClose = () => {
        setDrawerOpen(!drawerOpen);
    };
    return (react_1.default.createElement(Header_styled_1.BaseHeader, { position: "static" },
        react_1.default.createElement(material_1.Toolbar, null,
            react_1.default.createElement(Header_styled_1.LeftArea, null,
                react_1.default.createElement(Header_styled_1.RightMenuButtonWrapper, null, !hideMenuButton && (react_1.default.createElement(MenuButton_1.default, { onMenuClick: onMenuClick || handleDrawerOpenClose }))),
                react_1.default.createElement(Logo_1.default, Object.assign({}, logoPros)),
                Header_styled_1.PageTitle && react_1.default.createElement(Header_styled_1.PageTitle, { variant: "h1" }, pageTitle)),
            react_1.default.createElement(Header_styled_1.CenterArea, null, showSearch && !SearchComponent && (react_1.default.createElement(InputSearch_1.default, Object.assign({}, inputSearchProps)))),
            react_1.default.createElement(Header_styled_1.RightArea, null, menuOptions === null || menuOptions === void 0 ? void 0 :
                menuOptions.map(option => react_1.default.createElement(MenuAction_1.default, Object.assign({}, option))),
                RightActionsComponent && react_1.default.createElement(react_1.default.Fragment, null, RightActionsComponent))),
        react_1.default.createElement(DrawerMenu_1.default, Object.assign({}, drawerMenuProps, { open: drawerOpen, onClose: handleDrawerOpenClose }))));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map