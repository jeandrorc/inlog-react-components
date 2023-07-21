import React from "react";
export interface MenuButtonProps {
    onMenuClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const MenuButton: React.FC<MenuButtonProps>;
export default MenuButton;
