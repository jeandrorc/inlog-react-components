import React, { ReactNode, MouseEvent, useState } from "react";
import {
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import Logo, { LogoProps } from "../Logo/Logo";
import {
  BaseHeader,
  CenterArea,
  LeftArea,
  PageTitle,
  RightArea,
  RightMenuButtonWrapper,
} from "./Header.styled";

import InputSearch, { InputSearchProps } from "../InputSearch/InputSearch";
import MenuButton from "./MenuButton/MenuButton";
import DrawerMenu, { DrawerMenuProps } from "../DrawerMenu/DrawerMenu";
import MenuAction, { MenuActionProps } from "./MenuAction/MenuAction";

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

const Header: React.FC<HeaderProps> = ({
  logoPros,
  onMenuClick,
  showSearch,
  inputSearchProps,
  SearchComponent,
  menuOptions,
  RightActionsComponent,
  drawerMenuProps,
  hideMenuButton = false,
  pageTitle,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false); // New state for Drawer open/close

  // New handler for Drawer open/close
  const handleDrawerOpenClose = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <BaseHeader position="static">
      <Toolbar>
        <LeftArea>
          <RightMenuButtonWrapper>
            {!hideMenuButton && (
              <MenuButton onMenuClick={onMenuClick || handleDrawerOpenClose} />
            )}
          </RightMenuButtonWrapper>
          <Logo {...logoPros} />
          {PageTitle && <PageTitle variant="h1">{pageTitle}</PageTitle>}
        </LeftArea>
        <CenterArea>
          {showSearch && !SearchComponent && (
            <InputSearch {...inputSearchProps} />
          )}
        </CenterArea>
        <RightArea>
          { menuOptions?.map(option => <MenuAction {...option}/>)}
          {RightActionsComponent && <>{RightActionsComponent}</>}
        </RightArea>
      </Toolbar>
      <DrawerMenu
        {...drawerMenuProps}
        open={drawerOpen}
        onClose={handleDrawerOpenClose}
      />
    </BaseHeader>
  );
};

export default Header;
