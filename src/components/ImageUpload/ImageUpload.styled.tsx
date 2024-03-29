import styled from "@emotion/styled";
import { colors } from "../../constants/colors";
import { Button, CardMedia } from "@mui/material";

export const ImageUploaderContainer = styled.div<{
  minHeight: number;
}>`
  display: flex;
  flex-direction: row;
  border: 1px dashed ${colors.gray900};
  background-color: ${colors.grayPastel};
  min-height: ${({ minHeight }) =>
    minHeight ? `${minHeight + 10}px` : "inherit"};
  padding: 18px;
  .image-uploader {
    width: "auto" !important;
  }
`;
export const ImageUploaderPreviewContainer = styled.div`
  display: flex;
  flex: 1;
  max-width: 100%;
  align-items: center;
  overflow-y: auto;
`;

export const ImageThumbnailActionContainer = styled.button<{ height: number, width: number}>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`

export const ImageListSlider = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow-x: auto;
  gap: 1em;
`;
export const Thumbnail = styled(CardMedia)`
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .button-remove {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export const ImageUploaderButton = styled(Button)`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  border: 1px dashed ${colors.grayLight};
  padding: 12px;
  input {
    display: none;
  }
`;
