import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import React from "react";

interface DialogButton {
  label: string;
  action: () => void;
}

interface CustomDialogProps {
  open: boolean;
  title?: string;
  content?: React.ReactNode;
  actionButtons?: DialogButton[];
  customComponent?: React.ReactNode;
  onClose?: () => void;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  open = false,
  title,
  content,
  actionButtons,
  customComponent,
  onClose,
  ...dialogProps
}) => {
  return (
    <Dialog onClose={onClose} open={open} {...dialogProps} maxWidth="lg">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {typeof content === "string" ? <p>{content}</p> : content}
      </DialogContent>
      <DialogActions>
        {actionButtons?.map((button, index) => (
          <Button onClick={button.action} key={index}>
            {button.label}
          </Button>
        ))}
        {customComponent}
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
