// src/stories/CustomDataGrid.stories.tsx

import React from 'react';
import { Story, Meta } from '@storybook/react';
import DataTable, { DataTableProps } from '../../components/DataTable/DataTable';

export default {
  title: 'Example/DataTable/basic',
  component: DataTable,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<DataTableProps> = (args) => <DataTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
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
