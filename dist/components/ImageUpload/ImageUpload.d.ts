import React from "react";
import "react-image-lightbox/style.css";
type FileI = {
    name: string;
    size: number;
    type: string;
    lastModified: number;
};
export interface ImageUploadProps {
    multiple?: boolean;
    thumbSize: number;
    addButtonText?: string;
    maxSizeInMB?: number;
    maxFiles?: number;
    onFileChange?: (files: string[] | null) => void;
    onFilesUpdate?: (files: FileI[] | null) => void;
    reverse?: boolean;
}
declare const ImageUpload: React.FC<ImageUploadProps>;
export default ImageUpload;
