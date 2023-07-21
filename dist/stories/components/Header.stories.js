"use strict";
// src/stories/CustomDataGrid.stories.tsx
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithSearch = exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const Header_1 = __importDefault(require("../../components/Header"));
const icons_material_1 = require("@mui/icons-material");
const Close_1 = __importDefault(require("@mui/icons-material/Close"));
const meta = {
    component: Header_1.default,
    argTypes: {
        showSearch: { type: "boolean", default: false },
    },
};
exports.default = meta;
const drawerMenuProps = {
    drawerWidth: 400,
    userOption: {
        name: "Jhon Doe",
        avatar: "https://avatars.githubusercontent.com/u/1203842?v=4",
        options: [
            {
                text: "Profile",
                onClick: () => alert("Profile"),
                icon: react_1.default.createElement(icons_material_1.ImportContacts, null),
            },
            {
                text: "Logout",
                onClick: () => alert("Logout"),
                icon: react_1.default.createElement(Close_1.default, null),
            }
        ]
    },
    menuItems: [
        { text: "Item 1", onClick: () => alert("Item 1"), icon: react_1.default.createElement(icons_material_1.ImportContacts, null) },
        { text: "Item 2", onClick: () => alert("Item 2") },
        { text: "Item 3", onClick: () => alert("Item 3") },
    ],
};
exports.Primary = {
    render: () => react_1.default.createElement(Header_1.default, { drawerMenuProps: drawerMenuProps, logoPros: { link: "/" } }),
    name: "Header",
};
exports.WithSearch = {
    render: () => (react_1.default.createElement(Header_1.default, { logoPros: { link: "/", variant: "header" }, inputSearchProps: {
            onBlur: (value) => __awaiter(void 0, void 0, void 0, function* () {
                yield handleSearch(value);
            }),
        }, showSearch: true, drawerMenuProps: drawerMenuProps, pageTitle: "Aplica\u00E7\u00E3o" })),
    name: "Header with search",
};
function handleSearch(value) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield simulateApiCall(value, 3000);
        alert(`Search for ${response}`);
    });
}
function simulateApiCall(response, delay = 2000) {
    return new Promise((resolve) => setTimeout(() => resolve(response), delay));
}
//# sourceMappingURL=Header.stories.js.map