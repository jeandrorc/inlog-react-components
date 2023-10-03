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
const react_1 = __importStar(require("react"));
const DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
const DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
const DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const Fullscreen_1 = __importDefault(require("@mui/icons-material/Fullscreen"));
const FullscreenExit_1 = __importDefault(require("@mui/icons-material/FullscreenExit"));
const Close_1 = __importDefault(require("@mui/icons-material/Close"));
const CircularProgress_1 = __importDefault(require("@mui/material/CircularProgress"));
const react_draggable_1 = __importDefault(require("react-draggable"));
const material_1 = require("@mui/material");
const Modal_styled_1 = require("./Modal.styled");
const DraggableDialog = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (react_1.default.createElement(react_draggable_1.default, null,
        react_1.default.createElement(material_1.Paper, Object.assign({}, props), children)));
};
const Modal = (0, react_1.forwardRef)((props, ref) => {
    const { title, subtitle, actions = [], loading = false, draggable = false, onCLose, hideTopButtons, noPadding, } = props;
    const [open, setOpen] = (0, react_1.useState)(false);
    const [fullScreen, setFullScreen] = (0, react_1.useState)(false);
    const handleToggleFullscreen = () => {
        setFullScreen(!fullScreen);
    };
    const handleClose = () => {
        setOpen(false);
        setFullScreen(false);
        if (onCLose) {
            onCLose();
        }
    };
    (0, react_1.useImperativeHandle)(ref, () => ({
        openModal: () => setOpen(true),
        closeModal: () => setOpen(false),
    }));
    return (react_1.default.createElement(Modal_styled_1.StyledDialog, { maxWidth: "lg", open: open, onClose: handleClose, fullScreen: fullScreen, PaperComponent: draggable ? DraggableDialog : undefined, minHeight: props.minHeight, minWidth: props.minWidth, noPadding: noPadding },
        react_1.default.createElement(Modal_styled_1.DialogHeader, null,
            react_1.default.createElement(DialogTitle_1.default, null, title),
            react_1.default.createElement(Modal_styled_1.Row, null,
                react_1.default.createElement(Modal_styled_1.Subtitle, null, subtitle),
                !hideTopButtons && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(IconButton_1.default, { onClick: handleToggleFullscreen }, fullScreen ? react_1.default.createElement(FullscreenExit_1.default, null) : react_1.default.createElement(Fullscreen_1.default, null)),
                    react_1.default.createElement(IconButton_1.default, { onClick: handleClose },
                        react_1.default.createElement(Close_1.default, null)))))),
        react_1.default.createElement(DialogContent_1.default, { className: "RootContent" },
            loading && (react_1.default.createElement(Modal_styled_1.LoadingRoot, null,
                react_1.default.createElement(CircularProgress_1.default, null))),
            open && props.children),
        react_1.default.createElement(DialogActions_1.default, null, actions.map((action) => {
            if (typeof action.label === 'string') {
                return (react_1.default.createElement(material_1.Button, { className: action.className, style: action.customStyle, key: `moda-action-button-${action.id}`, onClick: action.onClick, color: action.color }, action.label));
            }
            return (react_1.default.createElement("div", { className: action.className, style: action.customStyle, key: `moda-action-button-${action.id}`, onClick: action.onClick, color: action.color }, action.label));
        }))));
});
exports.default = Modal;
//# sourceMappingURL=Modal.js.map