import React from "react";
import "react-image-lightbox/style.css";
export interface ImageUploadProps {
    multiple?: boolean;
    thumbSize: number;
    addButtonText?: string;
    maxSizeInMB?: number;
    maxFiles?: number;
    onFileChange?: (files: string[] | null) => void;
    reverse?: boolean;
}
declare const ImageUpload: React.FC<ImageUploadProps>;
export default ImageUpload;
