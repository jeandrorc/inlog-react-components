import React, { useEffect, useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

import { v4 as uuidv4 } from 'uuid';

import {
  ImageListSlider,
  ImageThumbnailActionContainer,
  ImageUploaderButton,
  ImageUploaderContainer,
  ImageUploaderPreviewContainer,
  Thumbnail,
} from "./ImageUpload.styled";
import { IconButton } from "@mui/material";
import { RemoveCircle } from "@mui/icons-material";
import LightBox from "../LightBox";

type FileI = {
  uuid: string;
  name: string;
  size: number;
  type: string;
  url: string;
  lastModified: number;
  local: boolean;
};

type FileFromServerI  = {
  uuid: string;
  name: string;
  url: string;
  lastModified: number;
}
export interface ImageUploadProps {
  multiple?: boolean;
  thumbSize: number;
  addButtonText?: string;
  maxSizeInMB?: number;
  maxFiles?: number;
  onFileChange?: (files: string[] | null) => void;
  onFilesUpdate?: (files: FileI[] | null) => void;
  initialFiles? :FileFromServerI[];
  reverse?: boolean;
  containerClassName?: string;
  imageUploaderButtonClassName?: string
  imageUploaderPreviewContainerClassName?: string
  imageThumbnailActionContainerClassName?: string
  imageListSliderClassName?: string
  thumbnailClassName?: string,
  uploadIcon?: React.ReactNode
}

const getFileInformation = (file: File) => {
  return {
    uuid: uuidv4(),
    name: file.name,
    size: file.size,
    type: file.type,
    lastModified: file.lastModified,
    url: URL.createObjectURL(file),
    local: true,
  } as FileI;
};

const ImageUpload: React.FC<ImageUploadProps> = ({
  multiple = false,
  thumbSize,
  addButtonText = "Adicionar",
  maxSizeInMB,
  maxFiles,
  onFileChange,
  onFilesUpdate,
  initialFiles,
  reverse,
  containerClassName,
  imageUploaderButtonClassName,
  imageUploaderPreviewContainerClassName,
  imageThumbnailActionContainerClassName,
  imageListSliderClassName,
  thumbnailClassName,
  uploadIcon
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<FileI[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const sortPictures = reverse ? [...files].reverse() : files;
  const picturesUrls = sortPictures.map((file) => file.url);

  useEffect(() => {
    if (onFileChange) onFileChange(picturesUrls);
  }, [picturesUrls]);

  useEffect(() => {
    if (onFilesUpdate) onFilesUpdate(files);
  }, [files]);

  const onClickFile = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  useEffect(() => {
    if (initialFiles) {
      // Converte os arquivos iniciais para o formato FileI
      const initialFilesFormatted: FileI[] = initialFiles.map((file) => ({
        ...file,
        size: 0, // Supondo que não temos essa informação do servidor
        type: 'image/*', // Supondo que todos são imagens, ajuste conforme necessário
        local: false, // Indica que o arquivo não está no cliente
      }));

      setFiles(initialFilesFormatted);
    }
  }, [initialFiles]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

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

    const fileInfoArray = filesArray.map((file) => {
      return getFileInformation(file); // Obter informações do arquivo e armazená-las
    });

    setFiles([...files, ...fileInfoArray]);
    // limpar os arquivos do input
    if (event.target) event.target.value = "";
  };

  const removeImage = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  return (
    <ImageUploaderContainer className={containerClassName} minHeight={thumbSize}>
      <ImageUploaderButton className={imageUploaderButtonClassName} onClick={onClickFile}>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          multiple={multiple}
        />
        {uploadIcon ?? <AddPhotoAlternateIcon />}
        {addButtonText}
      </ImageUploaderButton>
      <ImageUploaderPreviewContainer className={imageUploaderPreviewContainerClassName}>
        <ImageListSlider className={imageListSliderClassName}>
          {picturesUrls.map((picture, index) => (
            <Thumbnail className={thumbnailClassName} key={`${files[index].name}-${files[index].lastModified}`}>
              <ImageThumbnailActionContainer
                className={imageThumbnailActionContainerClassName}
                height={thumbSize}
                width={thumbSize}
                tabIndex={0} // Torna o div focável
                onClick={() => {
                  setIsOpen(true);
                  setPhotoIndex(index);
                }}
                onKeyDown={(event) => {
                  // Adiciona um manipulador de eventos de teclado
                  if (event.key === "Enter" || event.key === " ") {
                    setIsOpen(true);
                    setPhotoIndex(index);
                  }
                }}
              >
                <img
                  src={picture}
                  alt={`Imagem ${index}`}
                />
              </ImageThumbnailActionContainer>

              <IconButton className="button-remove" onClick={() => removeImage(index)}>
                <RemoveCircle color="warning" />
              </IconButton>
            </Thumbnail>
          ))}
        </ImageListSlider>
        <LightBox
          images={picturesUrls}
          imageIndex={photoIndex}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </ImageUploaderPreviewContainer>
    </ImageUploaderContainer>
  );
};

export default ImageUpload;
