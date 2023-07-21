import styled from "@emotion/styled";
import { Button, ButtonProps, IconButton } from "@mui/material";
import colors from "../../../constants/colors";

export const MenuItemRoot = styled(Button)<ButtonProps>`
  .MenuItem-body {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    h4 {
        font-size: 14px;
        color: ${colors.primaryLight}
    }
    h6 {
        font-size: 12px;
        color: ${colors.gray600}
    }
  }
`;
