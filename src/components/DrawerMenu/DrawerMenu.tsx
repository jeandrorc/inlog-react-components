import React, { FC } from "react";
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  IconButton,
  Avatar,
  Divider,
  ListItemButton,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box } from "@mui/system";
import { DrawerBody } from "./DrawerMenu.styled";

export type MenuItem = {
  text: string;
  icon?: JSX.Element;
  onClick?: () => void;
};

export type UserOption = {
  name: string;
  avatar?: string;
  options: MenuItem[];
};

export type DrawerMenuProps = {
  open: boolean;
  onClose: () => void;
  anchor?: "left" | "right";
  menuItems?: MenuItem[];
  userOption?: UserOption;
  drawerWidth?: number;
};

const DrawerMenu: FC<DrawerMenuProps> = ({
  open,
  onClose,
  anchor = "left",
  menuItems,
  userOption,
  drawerWidth,
}) => {
  return (
    <Drawer
      variant="temporary"
      anchor={anchor}
      open={open}
      onClose={onClose}
      PaperProps={{ style: { width: drawerWidth } }}
    >
      <Box
        sx={{
          width: drawerWidth,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1
        }}
      >
        <DrawerBody>
          <IconButton onClick={onClose}>
            {anchor === "left" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <Divider />
          <List>
            {menuItems?.map((item, index) => (
              <ListItemButton key={index} onClick={item.onClick}>
                {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}
          </List>
        </DrawerBody>

        <div>
          <Divider />
          <Box p={1} display="flex" alignItems="center">
            {userOption?.avatar && (
              <Avatar alt={userOption.name} src={userOption.avatar} sx={{ marginRight: 1 }} />
            )}
            <ListItemText primary={userOption?.name} />
          </Box>
          <List>
            {userOption?.options.map((option, index) => (
              <ListItemButton key={index} onClick={option.onClick}>
                {option.icon && <ListItemIcon>{option.icon}</ListItemIcon>}
                <ListItemText primary={option.text} />
              </ListItemButton>
            ))}
          </List>
        </div>
      </Box>
    </Drawer>
  );
};

export default DrawerMenu;
