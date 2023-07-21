"use strict";
// src/components/CustomDataGrid.tsx
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
exports.DataTable = void 0;
const react_1 = __importDefault(require("react"));
const x_data_grid_1 = require("@mui/x-data-grid");
const Wrapper_1 = __importDefault(require("./Wrapper"));
const DataTable = (_a) => {
    var { columns, rows } = _a, rest = __rest(_a, ["columns", "rows"]);
    return (react_1.default.createElement(Wrapper_1.default, null,
        react_1.default.createElement(x_data_grid_1.DataGrid, Object.assign({ rows: rows, columns: columns }, rest))));
};
exports.DataTable = DataTable;
exports.default = exports.DataTable;
//# sourceMappingURL=DataTable.js.map