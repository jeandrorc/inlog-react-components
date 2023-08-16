import React, { ReactNode } from "react";
export type ModalAction = {
    id: number;
    label: string;
    color: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    className?: string;
    customStyle?: React.CSSProperties;
    onClick: () => void;
};
export type ModalProps = {
    title: string;
    subtitle?: string;
    actions?: ModalAction[];
    loading?: boolean;
    draggable?: boolean;
    children?: ReactNode;
    minHeight?: number | string;
    minWidth?: number | string;
    onCLose?: () => void;
};
export type ModalHandle = {
    openModal: () => void;
    closeModal: () => void;
};
declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<any>>;
export default Modal;
