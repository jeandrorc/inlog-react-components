import styled from "@emotion/styled";
import { colors } from "../../constants";

export const MapAreaContainer = styled.div`
  background: #e0f2f1; // Substitua por suas próprias cores
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  background-size: cover;
  z-index: 0;
  position: relative;
  border-bottom: none;
`;

export const Map = styled.div`
  height: 100%;
  width: 100%;
`;

export const MapCoordinates = styled.div`
  position: absolute;
  z-index: 9999999;
  color: ${colors.primary};
  background: rgba(255, 255, 255, 0.8);
  padding: 5px;
  border-radius: 5px;
  top: 5px;
  right: 5px;
`;

export const ToggleFullScreenStyle = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 999;
`;

export const ContestStyle = styled.div`
  position: absolute;
  right: 10px;
  top: 50px;
  z-index: 999;
`;

export const LoadingShapesSpinner = styled.div`
  position: absolute;
  z-index: 9999999;
  color: ${colors.primary};
  background: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  border-radius: 5px;
  left: 5px;
  bottom: 5px;
  display: flex;
  align-items: center;

  > div {
    margin-right: 5px;
  }
`;
