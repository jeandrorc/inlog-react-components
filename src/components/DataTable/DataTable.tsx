// src/components/CustomDataGrid.tsx

import React from "react";
import { DataGrid, DataGridProps, GridColDef } from "@mui/x-data-grid";
import Wrapper from "./Wrapper";

export interface DataTableProps extends DataGridProps {
  columns: GridColDef[];
  rows: any[];
}

export const DataTable: React.FC<DataTableProps> = ({
  columns,
  rows,
  ...rest
}) => {
  return (
    <Wrapper>
      <DataGrid rows={rows} columns={columns} {...rest} />
    </Wrapper>
  );
};

export default DataTable;
