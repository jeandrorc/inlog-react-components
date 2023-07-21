import React, { ReactNode, MouseEvent, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  InputBase,
  Avatar,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Logo, { LogoProps } from "../Logo/Logo";
import {
  BaseHeader,
  CenterArea,
  LeftArea,
  PageTitle,
  RightArea,
  RightMenuButtonWrapper,
} from "./Header.styled";
import colors from "../../constants/colors";
import InputSearch, { InputSearchProps } from "../InputSearch/InputSearch";
import MenuButton from "./MenuButton/MenuButton";
import DrawerMenu, { DrawerMenuProps } from "../DrawerMenu/DrawerMenu";

export interface HeaderProps {
  logoPros: LogoProps;
  onMenuClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  showSearch?: boolean;
  inputSearchProps?: InputSearchProps;
  SearchComponent?: ReactNode;
  avatarMenuOptions?: string[];
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
  avatarMenuOptions,
  RightActionsComponent,
  drawerMenuProps,
  hideMenuButton = false,
  pageTitle,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false); // New state for Drawer open/close

  const handleAvatarMenuClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAvatarMenuClose = () => {
    setAnchorEl(null);
  };

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
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleAvatarMenuClick}
          >
            <Avatar />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleAvatarMenuClose}
          >
            {avatarMenuOptions?.map((option, index) => (
              <MenuItem key={index} onClick={handleAvatarMenuClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
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
