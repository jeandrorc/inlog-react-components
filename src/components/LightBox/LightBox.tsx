import React, { useEffect, useState } from "react";
import {
  ImageSlide,
  LightBoxContainer,
  NavigationButton,
} from "./LightBox.styled";

interface LightBoxProps {
  images: string[]; // Array de URLs das imagens
  isOpen: boolean; // Se o lightbox está aberto
  onClose: () => void; // Função para fechar o lightbox
  imageIndex?: number; // Index da imagem a ser exibida
}

const LightBox: React.FC<LightBoxProps> = ({
  images,
  isOpen,
  onClose,
  imageIndex = 0,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(imageIndex);

  useEffect(() => {
    setCurrentImageIndex(imageIndex);
  }, [imageIndex]);

  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  if (!isOpen) {
    return null;
  }

  return (
    <LightBoxContainer isOpen={isOpen} onClick={onClose}>
      <NavigationButton
        className="prev"
        onClick={(event) => {
          stopPropagation(event);
          showPrevImage();
        }}
      >
        &#10094;
      </NavigationButton>
      <ImageSlide
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex}`}
      />
      <NavigationButton
        className="next"
        onClick={(event) => {
          stopPropagation(event);
          showNextImage();
        }}
      >
        &#10095;
      </NavigationButton>
    </LightBoxContainer>
  );
};

export default LightBox;
