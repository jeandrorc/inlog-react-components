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
const AddPhotoAlternate_1 = __importDefault(require("@mui/icons-material/AddPhotoAlternate"));
const react_image_lightbox_1 = __importDefault(require("react-image-lightbox"));
require("react-image-lightbox/style.css");
const ImageUpload_styled_1 = require("./ImageUpload.styled");
const material_1 = require("@mui/material");
const icons_material_1 = require("@mui/icons-material");
const getFileInformation = (file) => {
    return {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
        url: URL.createObjectURL(file)
    };
};
const ImageUpload = ({ multiple = false, thumbSize, addButtonText = "Adicionar", maxSizeInMB, maxFiles, onFileChange, onFilesUpdate, reverse, }) => {
    const inputRef = react_1.default.useRef(null);
    const [pictures, setPictures] = (0, react_1.useState)([]);
    const [files, setFiles] = (0, react_1.useState)([]);
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [photoIndex, setPhotoIndex] = (0, react_1.useState)(0);
    const sortPictures = reverse ? [...pictures].reverse() : pictures;
    (0, react_1.useEffect)(() => {
        if (onFileChange)
            onFileChange(pictures);
    }, [pictures]);
    (0, react_1.useEffect)(() => {
        if (onFilesUpdate)
            onFilesUpdate(files);
    }, [files]);
    const onClickFile = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };
    const handleFileChange = (event) => {
        if (!event.target.files)
            return;
        if (maxFiles && event.target.files.length > maxFiles) {
            alert(`Você pode enviar no máximo ${maxFiles} arquivo(s) por vez.`);
            return;
        }
        if (maxSizeInMB) {
            for (const file of Array.from(event.target.files)) {
                if (file.size / 1024 / 1024 > maxSizeInMB) {
                    alert(`Arquivos devem ter no máximo ${maxSizeInMB} MB.`);
                    return;
                }
            }
        }
        const filesArray = Array.from(event.target.files);
        const urls = filesArray.map((file) => {
            return URL.createObjectURL(file);
        });
        const fileInfoArray = filesArray.map((file) => {
            return getFileInformation(file); // Obter informações do arquivo e armazená-las
        });
        setPictures([...pictures, ...urls]);
        setFiles([...files, ...fileInfoArray]);
        // limpar os arquivos do input
        if (event.target)
            event.target.value = "";
    };
    const removeImage = (index) => {
        const newPictures = [...pictures];
        const newFiles = [...files];
        newPictures.splice(index, 1);
        newFiles.splice(index, 1);
        setPictures(newPictures);
        setFiles(newFiles);
    };
    return (react_1.default.createElement(ImageUpload_styled_1.ImageUploaderContainer, { minHeight: thumbSize },
        react_1.default.createElement(ImageUpload_styled_1.ImageUploaderButton, { onClick: onClickFile },
            react_1.default.createElement("input", { ref: inputRef, type: "file", accept: "image/*", onChange: handleFileChange, multiple: multiple }),
            react_1.default.createElement(AddPhotoAlternate_1.default, null),
            addButtonText),
        react_1.default.createElement(ImageUpload_styled_1.ImageUploaderPreviewContainer, null,
            react_1.default.createElement(ImageUpload_styled_1.ImageListSlider, null, sortPictures.map((picture, index) => (react_1.default.createElement(ImageUpload_styled_1.Thumbnail, { key: `${JSON.stringify(picture)}` },
                react_1.default.createElement("img", { onClick: () => {
                        setIsOpen(true);
                        setPhotoIndex(index);
                    }, src: picture, style: { height: thumbSize, width: thumbSize }, alt: "" }),
                react_1.default.createElement(material_1.IconButton, { onClick: () => removeImage(index) },
                    react_1.default.createElement(icons_material_1.RemoveCircle, { color: "warning" })))))),
            isOpen && (react_1.default.createElement(react_image_lightbox_1.default, { imageLoadErrorMessage: "N\u00E3o foi poss\u00EDvel carregar a imagem.", mainSrc: sortPictures[photoIndex], nextSrc: sortPictures[(photoIndex + 1) % sortPictures.length], prevSrc: sortPictures[(photoIndex + sortPictures.length - 1) % sortPictures.length], onCloseRequest: () => setIsOpen(false), onMovePrevRequest: () => setPhotoIndex((photoIndex + sortPictures.length - 1) % sortPictures.length), onMoveNextRequest: () => setPhotoIndex((photoIndex + 1) % sortPictures.length) })))));
};
exports.default = ImageUpload;
//# sourceMappingURL=ImageUpload.js.map