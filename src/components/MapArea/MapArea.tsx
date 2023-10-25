import React, { useEffect } from "react";
import "./map-area.scss";

import Contest from "../Contest/Contest";
import { ContestStyle, LoadingShapesSpinner, Map, MapAreaContainer, MapCoordinates } from "./mapArea.styled";
import { CircularProgress } from "@mui/material";

interface LatLng {
  lat: number;
  lng: number;
}

export interface MapAreaProps {
  id: string;
  loadingMap: boolean;
  loadingShapes: boolean;
  toggleFullScreen: boolean;
  fullScreen: boolean;
  toggleContest: boolean;
  contest: boolean;
  changeConstest: () => void;
  changeFullScreen: () => void;
  height?: string;
  latlng?: LatLng;
  minHeight?: string;
}

const MapArea: React.FC<MapAreaProps> = ({
  id,
  loadingMap,
  loadingShapes,
  toggleFullScreen,
  fullScreen,
  toggleContest,
  contest,
  changeConstest,
  changeFullScreen,
  height,
  latlng,
  minHeight,
}) => {
  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, [id]);

  return (
    <MapAreaContainer
      style={{
        height: height ? height : "auto",
        minHeight: minHeight ? minHeight : 0,
      }}
    >
      <Map id={id}/>
      {toggleContest && (
        <ContestStyle>
          <Contest contest={contest} onClick={() => changeConstest()} />
        </ContestStyle>
      )}
      {latlng && latlng.lat && latlng.lng && (
        <MapCoordinates>
          {latlng.lat.toFixed(6)}, {latlng.lng.toFixed(6)}
        </MapCoordinates>
      )}
      {loadingShapes && (
        <LoadingShapesSpinner>
          <div>Carregando...</div>
          <CircularProgress size="sm" color="primary" />
        </LoadingShapesSpinner>
      )}
    </MapAreaContainer>
  );
};

export default MapArea;
