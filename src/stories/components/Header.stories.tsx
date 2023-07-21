// src/stories/CustomDataGrid.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Header, { HeaderProps } from "../../components/Header";
import { DrawerMenuProps } from "../../components/DrawerMenu/DrawerMenu";
import { ImportContacts } from "@mui/icons-material";
import Close from "@mui/icons-material/Close";

const meta: Meta<HeaderProps> = {
  component: Header,
  argTypes: {
    showSearch: { type: "boolean", default: false },
  },
};

export default meta;

type Story = StoryObj<HeaderProps>;

const drawerMenuProps : Partial<DrawerMenuProps> = {
  drawerWidth: 400,
  userOption: {
    name: "Jhon Doe",
    avatar: "https://avatars.githubusercontent.com/u/1203842?v=4",
    options: [
      {
        text: "Profile",
        onClick: () => alert("Profile"),
        icon: <ImportContacts/>,
      },
      {
        text: "Logout",
        onClick: () => alert("Logout"),
        icon: <Close/>,
      }
    ]
  },
  menuItems: [
    { text: "Item 1", onClick: () => alert("Item 1"), icon: <ImportContacts/> },
    { text: "Item 2", onClick: () => alert("Item 2") },
    { text: "Item 3", onClick: () => alert("Item 3") },
  ],
}

export const Primary: Story = {
  render: () => <Header drawerMenuProps={drawerMenuProps} logoPros={{ link: "/" }} />,
  name: "Header",
};

export const WithSearch: Story = {
  render: () => (
    <Header
      logoPros={{ link: "/", variant: "header" }}
      inputSearchProps={{
        onBlur: async (value) => {
          await handleSearch(value);
        },
      }}
      showSearch
      drawerMenuProps={drawerMenuProps}
      pageTitle="Aplicação"
    />
  ),
  name: "Header with search",
};

async function handleSearch(value: string) {
  const response = await simulateApiCall(value, 3000);
  alert(`Search for ${response}`);
}

function simulateApiCall<T>(response: T, delay = 2000): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(response), delay));
}
