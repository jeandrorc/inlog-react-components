import { css } from "@emotion/react";
import { Box } from "@mui/system";
import colors from "../../constants/colors";
import styled from "@emotion/styled";
import { AppBar, Typography, TypographyProps } from "@mui/material";

export const BaseHeader = styled(AppBar)`
  height: 50px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid ${colors.borderColor};
  .MuiToolbar-root {
    flex: 1;
    padding-right: 0;
  }
`;

export const RightMenuButtonWrapper = styled(Box)`
  margin-right: 10px;
`;

export const LeftArea = styled.div`
  display: flex;
  gap: 1em;
`;
export const RightArea = styled.div`
  display: flex;
`;
export const CenterArea = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 0 10px;
  flex-direction: row;
  gap: 2em;
  align-items: center;
  justify-content: center;
`;

export const PageTitle = styled(Typography)<TypographyProps>`
    color: ${colors.gray};
    margin: auto 12px;
    font-size: 18px;
    padding-left: 10px;
    margin-left: 10px;
    border-left: 1px solid rgb(204, 204, 204);
`;