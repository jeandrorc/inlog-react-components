import { FC } from "react";
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
declare const DrawerMenu: FC<DrawerMenuProps>;
export default DrawerMenu;
