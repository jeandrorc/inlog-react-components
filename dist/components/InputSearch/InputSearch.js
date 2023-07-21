"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const Search_1 = __importDefault(require("@mui/icons-material/Search"));
const Close_1 = __importDefault(require("@mui/icons-material/Close"));
const InputSearch_styled_1 = require("./InputSearch.styled");
const InputSearch = ({ onChange, onBlur, actionButtonText, actionButtonAction, onFocus, loading, placeholder, textFieldProps }) => {
    const [searchText, setSearchText] = react_1.default.useState("");
    const handleClearClick = () => {
        setSearchText("");
    };
    return (react_1.default.createElement(InputSearch_styled_1.BaseInputSearch, null,
        react_1.default.createElement(material_1.TextField, Object.assign({}, textFieldProps, { onFocus: onFocus, multiline: false, variant: "outlined", placeholder: placeholder || "Search", value: searchText, onChange: (e) => {
                setSearchText(e.target.value);
                onChange && onChange(e.target.value);
            }, onBlur: () => onBlur && onBlur(searchText), InputProps: {
                startAdornment: (react_1.default.createElement(material_1.InputAdornment, { position: "start" }, loading ? (react_1.default.createElement(material_1.CircularProgress, { size: 20 })) : (react_1.default.createElement(material_1.IconButton, { edge: "end", onClick: () => onChange && onChange(searchText) },
                    react_1.default.createElement(Search_1.default, null))))),
                endAdornment: searchText && !loading && (react_1.default.createElement(material_1.InputAdornment, { position: "end" },
                    react_1.default.createElement(material_1.IconButton, { edge: "end", onClick: handleClearClick },
                        react_1.default.createElement(Close_1.default, null)))),
            } })),
        actionButtonAction && actionButtonText && (react_1.default.createElement(material_1.Button, { variant: "contained", color: "primary", onClick: () => actionButtonAction && actionButtonAction(searchText) }, actionButtonText))));
};
exports.default = InputSearch;
//# sourceMappingURL=InputSearch.js.map