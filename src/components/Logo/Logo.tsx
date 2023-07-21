import React from "react";
import { FooterLogo, HeaderLogo } from "./Logo.styled";
const image = require("../../assets/images/logo.png");

/**
 * Tipos de propriedades para o componente Logo.
 *
 * @typedef {Object} LogoProps
 * @property {("header"|"footer")=} variant - Indica se o logo é para o cabeçalho ou rodapé.
 * @property {string=} alt - O texto alternativo para o logo.
 * @property {string=} link - O URL para o qual o logo deve apontar.
 */
export type LogoProps = {
  variant?: "header" | "footer";
  alt?: string;
  link?: string;
  linkAs?: React.ReactNode;
};

/**
 * Componente que renderiza a imagem do logo.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {string} [props.alt="inlog"] - O texto alternativo para o logo.
 * @returns {React.ElementType} O elemento do logo.
 */
const Image = ({ alt = "inlog" }) => {
  return <img title="Inlog" src={image} alt={alt} />;
};

/**
 * Componente que renderiza o logo de acordo com a variante e o link.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {string} [props.variant="header"] - Indica se o logo é para o cabeçalho ou rodapé.
 * @param {string=} props.alt - O texto alternativo para o logo.
 * @param {string=} props.link - O URL para o qual o logo deve apontar.
 * @returns {React.ElementType} O elemento do logo.
 */
const RenderLogo = ({
  alt,
  variant = "header",
  link = "/",
}: Partial<LogoProps>) => {
  switch (variant) {
    case "footer":
      return (
        <FooterLogo>
          {link ? (
            <a href={link}>
              <Image alt={alt} />
            </a>
          ) : (
            <Image alt={alt} />
          )}
        </FooterLogo>
      );
    case "header":
    default:
      return (
        <HeaderLogo>
          {link ? (
            <a href={link}>
              <Image alt={alt} />
            </a>
          ) : (
            <Image alt={alt} />
          )}
        </HeaderLogo>
      );
  }
};

/**
 * Componente Logo que renderiza o logo de acordo com as propriedades recebidas.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {("header"|"footer")=} props.variant - Indica se o logo é para o cabeçalho ou rodapé.
 * @param {string=} props.alt - O texto alternativo para o logo.
 * @param {string=} props.link - O URL para o qual o logo deve apontar.
 * @returns {React.ElementType} O elemento do logo.
 */
const Logo: React.FC<LogoProps> = ({ variant, alt, link }) => {
  return <RenderLogo variant={variant} alt={alt} link={link} />;
};

export default Logo;
