import styled from "@emotion/styled";
import { Dialog } from "@mui/material";

export const StyledDialog = styled(Dialog)<{
  minHeight?: string | number;
  minWidth?: string | number;
  noPadding?: boolean;
}>`
  .MuiDialog-paper {
    min-width: ${(props) => props.minWidth || "70vw"};
    min-height: ${(props) => props.minHeight || "70vh"};
  }
  .MuiDialogContent-root {
    display: flex;
    flex-direction: column;
  }
  .RootContent {
    position: relative;
    padding: ${(props) => (props.noPadding ? 0 : "20px 24px")};
  }
`;
export const Title = styled.h4``;
export const Subtitle = styled.h6``;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const DialogHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  padding-right: 15px;
`;

export const LoadingRoot = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
`;
