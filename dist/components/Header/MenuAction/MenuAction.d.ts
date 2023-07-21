import { MenuItemProps } from "@mui/material";
import React from "react";
export type MenuOption = {
    label: string;
    icon?: string | React.ReactNode;
    menuItemProps: Partial<MenuItemProps>;
};
export type MenuActionProps = {
    menuOptions?: MenuOption[];
    icon?: React.ReactNode;
    title?: string;
    subtitle?: string;
    type: "menu" | "modal";
    ModalComponent?: React.ReactNode;
};
declare const MenuAction: React.FC<MenuActionProps>;
export default MenuAction;
