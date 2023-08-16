"use strict";
// src/stories/CustomDataGrid.stories.tsx
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
exports.Primary = void 0;
const react_1 = __importStar(require("react"));
const Modal_1 = __importDefault(require("../../components/Modal/Modal"));
const material_1 = require("@mui/material");
const meta = {
    component: Modal_1.default,
    argTypes: {
        children: { type: "symbol", default: "Modal" },
    },
};
exports.default = meta;
const Template = (args) => {
    const modalRef = (0, react_1.useRef)(null);
    const handleOpen = () => {
        if (modalRef.current) {
            modalRef.current.openModal();
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Button, { variant: "contained", color: "primary", onClick: handleOpen }, "Open Modal"),
        react_1.default.createElement(Modal_1.default, Object.assign({ ref: modalRef }, args),
            react_1.default.createElement(material_1.Container, null,
                react_1.default.createElement(material_1.Grid, { container: true },
                    react_1.default.createElement(material_1.Grid, { item: true, xs: 12 },
                        react_1.default.createElement("h1", null, "Conteudo do modal")))))));
};
exports.Primary = Template.bind({});
exports.Primary.args = {
    title: "Modal Title",
    subtitle: "Modal Subtitle",
    draggable: false,
    children: "This is the content of the Modal.",
    actions: [
        {
            label: "Submit",
            color: "info",
            id: 1,
            onClick: () => {
                alert("You clicked the close modal button!");
            },
        },
    ],
};
//# sourceMappingURL=Modal.stories.js.map