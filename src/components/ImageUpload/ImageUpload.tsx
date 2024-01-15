import React, { useEffect, useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

import {
  ImageListSlider,
  ImageUploaderButton,
  ImageUploaderContainer,
  ImageUploaderPreviewContainer,
  Thumbnail,
} from "./ImageUpload.styled";
import { IconButton } from "@mui/material";
import { RemoveCircle } from "@mui/icons-material";

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

const getFileInformation = (file: File)  => {
  return {
    name: file.name,
    size: file.size,
    type: file.type,
    lastModified: file.lastModified,
    url: URL.createObjectURL(file)
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
  reverse,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [pictures, setPictures] = useState<string[]>([]);
  const [files, setFiles] = useState<FileI[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const sortPictures = reverse ? [...pictures].reverse() : pictures;

  useEffect(() => {
    if (onFileChange) onFileChange(pictures);
  }, [pictures]);

  useEffect(() => {
    if (onFilesUpdate) onFilesUpdate(files);
  }, [files]);

  const onClickFile = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

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
    const urls = filesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    const fileInfoArray = filesArray.map((file) => {
      return getFileInformation(file);  // Obter informações do arquivo e armazená-las
    });
    
    setPictures([...pictures, ...urls]);
    setFiles([...files, ...fileInfoArray]);
    // limpar os arquivos do input
    if (event.target) event.target.value = "";
  };

  const removeImage = (index: number) => {
    const newPictures = [...pictures];
    const newFiles = [...files];
    newPictures.splice(index, 1);
    newFiles.splice(index, 1);
    setPictures(newPictures);
    setFiles(newFiles);
  };

  return (
    <ImageUploaderContainer minHeight={thumbSize}>
      <ImageUploaderButton onClick={onClickFile}>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          multiple={multiple}
        />
        <AddPhotoAlternateIcon />
        {addButtonText}
      </ImageUploaderButton>
      <ImageUploaderPreviewContainer>
        <ImageListSlider>
          {sortPictures.map((picture, index) => (
            <Thumbnail key={`${JSON.stringify(picture)}`}>
              <img
                onClick={() => {
                  setIsOpen(true);
                  setPhotoIndex(index);
                }}
                src={picture}
                style={{ height: thumbSize, width: thumbSize }}
                alt=""
              />
              <IconButton onClick={() => removeImage(index)}>
                <RemoveCircle color="warning" />
              </IconButton>
            </Thumbnail>
          ))}
        </ImageListSlider>
        {/* {isOpen && (
          <Lightbox
            imageLoadErrorMessage="Não foi possível carregar a imagem."
            mainSrc={sortPictures[photoIndex]}
            nextSrc={sortPictures[(photoIndex + 1) % sortPictures.length]}
            prevSrc={
              sortPictures[
                (photoIndex + sortPictures.length - 1) % sortPictures.length
              ]
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex(
                (photoIndex + sortPictures.length - 1) % sortPictures.length
              )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % sortPictures.length)
            }
          />
        )} */}
      </ImageUploaderPreviewContainer>
    </ImageUploaderContainer>
  );
};

export default ImageUpload;
