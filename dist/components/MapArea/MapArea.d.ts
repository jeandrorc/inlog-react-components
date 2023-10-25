import React from "react";
import "./map-area.scss";
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
declare const MapArea: React.FC<MapAreaProps>;
export default MapArea;
