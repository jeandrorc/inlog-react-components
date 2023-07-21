import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export interface MenuButtonProps {
  onMenuClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onMenuClick }) => {
  return (
    <IconButton edge="start" onClick={onMenuClick}>
      <MenuIcon color="primary" />
    </IconButton>
  );
};

export default MenuButton;
