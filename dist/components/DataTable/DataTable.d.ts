import React from "react";
import { DataGridProps, GridColDef } from "@mui/x-data-grid";
export interface DataTableProps extends DataGridProps {
    columns: GridColDef[];
    rows: any[];
}
export declare const DataTable: React.FC<DataTableProps>;
export default DataTable;
