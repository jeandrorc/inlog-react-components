import React, { useEffect, useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // estilos para o lightbox
import {
  ImageListSlider,
  ImageUploaderButton,
  ImageUploaderContainer,
  ImageUploaderPreviewContainer,
  Thumbnail,
} from "./ImageUpload.styled";
import { IconButton } from "@mui/material";
import { RemoveCircle } from "@mui/icons-material";

export interface ImageUploadProps {
  multiple?: boolean;
  thumbSize: number;
  addButtonText?: string;
  maxSizeInMB?: number;
  maxFiles?: number;
  onFileChange?: (files: string[] | null) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  multiple = false,
  thumbSize,
  addButtonText = "Adicionar",
  maxSizeInMB,
  maxFiles,
  onFileChange,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [pictures, setPictures] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    if (onFileChange) onFileChange(pictures);
  }, [pictures]);

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
      for (let i = 0; i < event.target.files.length; i++) {
        const file = event.target.files[i];
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
    setPictures([...pictures, ...urls]);
    // limpar os arquivos do input
    if (event.target) event.target.value = "";
  };

  const removeImage = (index: number) => {
    const newPictures = [...pictures];
    newPictures.splice(index, 1);
    setPictures(newPictures);
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
          {pictures.map((picture, index) => (
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
        {isOpen && (
          <Lightbox
            imageLoadErrorMessage="Não foi possível carregar a imagem."
            mainSrc={pictures[photoIndex]}
            nextSrc={pictures[(photoIndex + 1) % pictures.length]}
            prevSrc={
              pictures[(photoIndex + pictures.length - 1) % pictures.length]
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex(
                (photoIndex + pictures.length - 1) % pictures.length
              )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % pictures.length)
            }
          />
        )}
      </ImageUploaderPreviewContainer>
    </ImageUploaderContainer>
  );
};

export default ImageUpload;
