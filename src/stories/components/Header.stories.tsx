// src/stories/CustomDataGrid.stories.tsx

import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DrawerMenuProps } from "../../components/DrawerMenu/DrawerMenu";
import { ImportContacts, OpenInBrowser, OpenInNew } from "@mui/icons-material";
import Close from "@mui/icons-material/Close";
import {
  Avatar,
  Box,
  MenuItem,
  Typography,
} from "@mui/material";
import Header, { HeaderProps } from "../../components/Header/Header";

const meta: Meta<HeaderProps> = {
  component: Header,
  argTypes: {
    showSearch: { type: "boolean", default: false },
  },
};

export default meta;

type Story = StoryObj<HeaderProps>;

const drawerMenuProps: Partial<DrawerMenuProps> = {
  drawerWidth: 400,
  userOption: {
    name: "Jhon Doe",
    avatar: "https://avatars.githubusercontent.com/u/1203842?v=4",
    options: [
      {
        text: "Profile",
        onClick: () => alert("Profile"),
        icon: <ImportContacts />,
      },
      {
        text: "Logout",
        onClick: () => alert("Logout"),
        icon: <Close />,
      },
    ],
  },
  menuItems: [
    {
      text: "Item 1",
      onClick: () => alert("Item 1"),
      icon: <ImportContacts />,
    },
    { text: "Item 2", onClick: () => alert("Item 2") },
    { text: "Item 3", onClick: () => alert("Item 3") },
  ],
};

export const Primary: Story = {
  render: () => (
    <Header drawerMenuProps={drawerMenuProps} logoPros={{ link: "/" }} />
  ),
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
      menuOptions={[
        {
          type: "modal",
          icon: <OpenInBrowser />,
          title: "Abrir com Modal",
          subtitle: "subtitle",
          ModalComponent: <div>Modal content</div>,
        },
        {
          type: "modal",
          title: "Abrir com Modal 2",
          subtitle: "subtitle 2",
          ModalComponent: (
            <Box sx={{ width: 900, height: "50vh" }}>
              <Typography>Modal dialog</Typography>
            </Box>
          ),
        },
        {
          type: "menu",
          icon: <OpenInNew />,
          title: "Abrir menu",
          menuOptions: [
            {
              label: "Item 1",
              icon: <Avatar alt="Jhon Doe" />,
              menuItemProps: {
                onClick: () => alert("abrir opcao"),
              },
            },
          ],
        },
        {
          type: "modal",
          icon: <OpenInBrowser color="error" />,
          ModalComponent: <div>Modal content</div>,
        },
      ]}
      RightActionsComponent={
        <>
          <MenuItem>
            <Avatar alt="Jhon Doe" />
          </MenuItem>
        </>
      }
    />
  ),
  name: "Header with search",
};


const branches = [
  {
    label: "Sustentare Feira de Santana",
    value: 1
  },
  {
    label: "Sustentare Salvador",
    value: 2
  },
  {
    label: "Sustentare Lauro de Freitas",
    value: 3
  }
]

const BranchSelectorComponent: React.FC = () => {
  const [branch, setBranch] = useState(branches[0].value)

  const onChange = (value: string) => {
    setBranch(Number(value))
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
      <Typography>Branch:</Typography>
      <select value={branch} onChange={(event) => onChange(event.target.value)}>
        {branches.map((branch) => (
          <option key={branch.value} value={branch.value}>{branch.label}</option>
        ))}
      </select>
    </Box>
  )
}


const applications = [
  {
    label: "Aplicação 1",
    value: 1
  },
  {
    label: "Aplicação 2",
    value: 2
  },
  {
    label: "Aplicação 3",
    value: 3
  }
]

const ChangeTitleComponent: React.FC = () => {
  const [title, setTitle] = useState(applications[0].value)


  const onChange = (value: string) => {
    setTitle(Number(value));
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
       <select value={title} onChange={(event) => onChange(event.target.value)}>
        {applications.map((app) => (
          <option key={app.value} value={app.value}>{app.label}</option>
        ))}
      </select>
    </Box>
  )
}


export const WithCenterComponent: Story = {


  render: () => (
    <Header
      logoPros={{ link: "/", variant: "header" }}
      inputSearchProps={{
        onBlur: async (value) => {
          await handleSearch(value);
        },
      }}
      drawerMenuProps={drawerMenuProps}
      pageTitle={<ChangeTitleComponent/>}
      hideMenuButton
      CenterComponent={<BranchSelectorComponent/>}
      menuOptions={[
        {
          type: "menu",
          icon: <Avatar alt="Jhon Doe" />,
          title: "Abrir menu",
          menuOptions: [
            {
              label: "Item 1",
              icon: <Avatar alt="Jhon Doe" />,
              menuItemProps: {
                onClick: () => alert("abrir opcao"),
              },
            },
          ],
        }
      ]}
    />
  ),
  name: "Header with center component",
}

async function handleSearch(value: string) {
  const response = await simulateApiCall(value, 3000);
  alert(`Search for ${response}`);
}

function simulateApiCall<T>(response: T, delay = 2000): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(response), delay));
}
