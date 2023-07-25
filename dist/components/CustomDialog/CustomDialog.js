"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const CustomDialog = (_a) => {
    var { open = false, title, content, actionButtons, customComponent, onClose } = _a, dialogProps = __rest(_a, ["open", "title", "content", "actionButtons", "customComponent", "onClose"]);
    return (react_1.default.createElement(material_1.Dialog, Object.assign({ onClose: onClose, open: open }, dialogProps, { maxWidth: "lg" }),
        react_1.default.createElement(material_1.DialogTitle, null, title),
        react_1.default.createElement(material_1.DialogContent, null, typeof content === "string" ? react_1.default.createElement("p", null, content) : content),
        react_1.default.createElement(material_1.DialogActions, null, actionButtons === null || actionButtons === void 0 ? void 0 :
            actionButtons.map((button, index) => (react_1.default.createElement(material_1.Button, { onClick: button.action, key: index }, button.label))),
            customComponent)));
};
exports.default = CustomDialog;
//# sourceMappingURL=CustomDialog.js.map