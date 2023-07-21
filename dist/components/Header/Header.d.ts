import React, { ReactNode } from "react";
import { LogoProps } from "../Logo/Logo";
import { InputSearchProps } from "../InputSearch/InputSearch";
import { DrawerMenuProps } from "../DrawerMenu/DrawerMenu";
import { MenuActionProps } from "./MenuAction/MenuAction";
export interface HeaderProps {
    logoPros: LogoProps;
    onMenuClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    showSearch?: boolean;
    inputSearchProps?: InputSearchProps;
    SearchComponent?: ReactNode;
    menuOptions?: MenuActionProps[];
    RightActionsComponent?: ReactNode;
    drawerMenuProps?: Partial<DrawerMenuProps>;
    hideMenuButton?: boolean;
    pageTitle?: string;
}
declare const Header: React.FC<HeaderProps>;
export default Header;
