import {
  Menu,
  MenuItem,
  MenuItemProps,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { MenuItemRoot } from "./MenuAction.styled";
import CustomDialog from "../../CustomDialog/CustomDialog";

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

const MenuAction: React.FC<MenuActionProps> = ({
  menuOptions,
  type,
  ModalComponent,
  icon,
  subtitle,
  title,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (type === "menu") {
      setAnchorEl(event.currentTarget);
    } else if (type === "modal") {
      setModalOpen(true);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      {!title && !subtitle && icon ? (
        <MenuItemRoot type="button" onClick={handleClick}>
          {icon}
        </MenuItemRoot>
      ) : (
        <MenuItemRoot
          onClick={handleClick}
          className="MenuItem-root button-withRows"
          endIcon={icon && icon}
        >
          <div className="MenuItem-body">
            <Typography
              className="Menu-item-button-title"
              variant="h4"
              textTransform="none"
            >
              {title}
            </Typography>
            <Typography
              className="Menu-item-button-subTitle"
              variant="h6"
              textTransform="none"
            >
              {subtitle}
            </Typography>
          </div>
        </MenuItemRoot>
      )}

      {type === "menu" && (
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {menuOptions?.map(({ label, menuItemProps, icon }) => (
            <MenuItem {...menuItemProps}>
              {!!icon && icon}
              {label}
            </MenuItem>
          ))}
        </Menu>
      )}
      {type === "modal" && ModalComponent && (
        <CustomDialog title={title} content={ModalComponent} open={modalOpen} onClose={handleModalClose}/>
      )}
    </>
  );
};

export default MenuAction;
