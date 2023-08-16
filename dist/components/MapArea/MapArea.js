"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./map-area.scss");
const Contest_1 = __importDefault(require("../Contest/Contest"));
const mapArea_styled_1 = require("./mapArea.styled");
const material_1 = require("@mui/material");
const MapArea = ({ id, loadingMap, loadingShapes, toggleFullScreen, fullScreen, toggleContest, contest, changeConstest, changeFullScreen, height, latlng, minHeight, }) => {
    (0, react_1.useEffect)(() => {
        return () => {
            console.log("cleaned up");
        };
    }, [id]);
    return (react_1.default.createElement(mapArea_styled_1.MapAreaContainer, { style: {
            height: height ? height : "auto",
            minHeight: minHeight ? minHeight : 0,
        } },
        react_1.default.createElement(mapArea_styled_1.Map, { id: id }),
        toggleContest && (react_1.default.createElement(mapArea_styled_1.ContestStyle, null,
            react_1.default.createElement(Contest_1.default, { contest: contest, onClick: () => changeConstest() }))),
        latlng && latlng.lat && latlng.lng && (react_1.default.createElement(mapArea_styled_1.MapCoordinates, null,
            latlng.lat.toFixed(6),
            ", ",
            latlng.lng.toFixed(6))),
        loadingShapes && (react_1.default.createElement(mapArea_styled_1.LoadingShapesSpinner, null,
            react_1.default.createElement("div", null, "Carregando..."),
            react_1.default.createElement(material_1.CircularProgress, { size: "sm", color: "primary" })))));
};
exports.default = MapArea;
//# sourceMappingURL=MapArea.js.map