"use strict";
// src/stories/CustomDataGrid.stories.tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const DataTable_1 = __importDefault(require("../../components/DataTable/DataTable"));
exports.default = {
    title: 'Example/DataTable/basic',
    component: DataTable_1.default,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
const Template = (args) => react_1.default.createElement(DataTable_1.default, Object.assign({}, args));
exports.Primary = Template.bind({});
exports.Primary.args = {
    columns: [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
    ],
    rows: [
        { id: 1, firstName: 'John', lastName: 'Doe' },
        { id: 2, firstName: 'Jane', lastName: 'Doe' },
    ],
};
//# sourceMappingURL=DataTable.stories.js.map