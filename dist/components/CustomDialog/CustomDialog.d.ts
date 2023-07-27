import React from "react";
export interface DialogButton {
    label: string;
    action: () => void;
}
export interface CustomDialogProps {
    open: boolean;
    title?: string;
    content?: React.ReactNode;
    actionButtons?: DialogButton[];
    customComponent?: React.ReactNode;
    onClose?: () => void;
}
declare const CustomDialog: React.FC<CustomDialogProps>;
export default CustomDialog;
