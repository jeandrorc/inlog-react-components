"use strict";
// src/stories/CustomDataGrid.stories.tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("../../components");
const meta = {
    component: components_1.ImageUpload,
    argTypes: {
        multiple: { type: "boolean", default: true },
        thumbSize: { type: "number", default: 300 },
    },
};
exports.default = meta;
exports.Primary = {
    render: () => (react_1.default.createElement(components_1.ImageUpload, { reverse: true, multiple: true, thumbSize: 100, onFilesUpdate: (files) => console.log("Files" + JSON.stringify(files)), onFileChange: (files) => console.log("files blob" + JSON.stringify(files, null, 2)) })),
    name: "Image Upload Multple",
};
//# sourceMappingURL=ImageUploader.stories.js.map