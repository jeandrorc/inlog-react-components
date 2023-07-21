import React from "react";
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
 * Componente Logo que renderiza o logo de acordo com as propriedades recebidas.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {("header"|"footer")=} props.variant - Indica se o logo é para o cabeçalho ou rodapé.
 * @param {string=} props.alt - O texto alternativo para o logo.
 * @param {string=} props.link - O URL para o qual o logo deve apontar.
 * @returns {React.ElementType} O elemento do logo.
 */
declare const Logo: React.FC<LogoProps>;
export default Logo;
