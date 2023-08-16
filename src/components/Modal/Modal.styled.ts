import styled from "@emotion/styled";
import { Dialog } from "@mui/material";

export const StyledDialog = styled(Dialog)<{
  minHeight?: string | number;
  minWidth?: string | number;
}>`
  .MuiDialog-paper {
    min-width: ${(props) => props.minWidth || "70vw"};
    min-height: ${(props) => props.minHeight || "70vh"};
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
`;
