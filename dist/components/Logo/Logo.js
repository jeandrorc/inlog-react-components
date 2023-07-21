"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Logo_styled_1 = require("./Logo.styled");
const image = require("../../assets/images/logo.png");
/**
 * Componente que renderiza a imagem do logo.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {string} [props.alt="inlog"] - O texto alternativo para o logo.
 * @returns {React.ElementType} O elemento do logo.
 */
const Image = ({ alt = "inlog" }) => {
    return react_1.default.createElement("img", { title: "Inlog", src: image, alt: alt });
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
const RenderLogo = ({ alt, variant = "header", link = "/", }) => {
    switch (variant) {
        case "footer":
            return (react_1.default.createElement(Logo_styled_1.FooterLogo, null, link ? (react_1.default.createElement("a", { href: link },
                react_1.default.createElement(Image, { alt: alt }))) : (react_1.default.createElement(Image, { alt: alt }))));
        case "header":
        default:
            return (react_1.default.createElement(Logo_styled_1.HeaderLogo, null, link ? (react_1.default.createElement("a", { href: link },
                react_1.default.createElement(Image, { alt: alt }))) : (react_1.default.createElement(Image, { alt: alt }))));
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
const Logo = ({ variant, alt, link }) => {
    return react_1.default.createElement(RenderLogo, { variant: variant, alt: alt, link: link });
};
exports.default = Logo;
//# sourceMappingURL=Logo.js.map