import styled from "@emotion/styled";

export const LightBoxContainer = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  padding: 50px;
  box-sizing: border-box;
`;

export const ImageSlide = styled.img`
  max-width: 100%;
  max-height: 80vh;
  margin: auto;
  display: block;
`;

export const NavigationButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
  padding: 10px;
  z-index: 1001;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }
`;
