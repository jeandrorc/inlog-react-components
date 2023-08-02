import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  Ref,
  ReactNode,
} from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";
import Draggable from "react-draggable";
import { Button, Paper, PaperProps } from "@mui/material";
import { DialogHeader, Row, StyledDialog, Subtitle } from "./Modal.styled";

export type ModalAction = {
  id: number;
  label: string;
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
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
};

export type ModalHandle = {
  openModal: () => void;
  closeModal: () => void;
};

const DraggableDialog = ({ children, ...props }: PaperProps) => {
  return (
    <Draggable>
      <Paper {...props}>{children}</Paper>
    </Draggable>
  );
};

const Modal = forwardRef((props: ModalProps, ref: Ref<any>) => {
  const {
    title,
    subtitle,
    actions = [],
    loading = false,
    draggable = false,
  } = props;
  const [open, setOpen] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  const handleToggleFullscreen = () => {
    setFullScreen(!fullScreen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    openModal: () => setOpen(true),
    closeModal: () => setOpen(false),
  }));

  return (
    <StyledDialog
      maxWidth="lg"
      open={open}
      onClose={handleClose}
      fullScreen={fullScreen}
      PaperComponent={draggable ? DraggableDialog : undefined}
      minHeight={props.minHeight}
      minWidth={props.minWidth}
    >
      <DialogHeader>
        <DialogTitle>
          {title}
        </DialogTitle>
        <Row>
          <Subtitle>{subtitle}</Subtitle>
          <IconButton onClick={handleToggleFullscreen}>
            {fullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </IconButton>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Row>
      </DialogHeader>

      <DialogContent>
        {loading ? <CircularProgress /> : props.children}
      </DialogContent>
      <DialogActions>
        {actions.map((action, index) => (
          <Button
            className={action.className}
            style={action.customStyle}
            key={`moda-action-button-${action.id}`}
            onClick={action.onClick}
            color={action.color}
          >
            {action.label}
          </Button>
        ))}
      </DialogActions>
    </StyledDialog>
  );
});

export default Modal;
