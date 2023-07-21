/// <reference types="react" />
export declare const BaseHeader: import("@emotion/styled").StyledComponent<{
    classes?: Partial<import("@mui/material").AppBarClasses> | undefined;
    color?: import("@mui/types").OverridableStringUnion<"transparent" | import("@mui/material").PropTypes.Color, import("@mui/material").AppBarPropsColorOverrides> | undefined;
    enableColorOnDark?: boolean | undefined;
    position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
    sx?: import("@mui/system").SxProps<import("@mui/material").Theme> | undefined;
} & Omit<{
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").PaperClasses> | undefined;
    elevation?: number | undefined;
    square?: boolean | undefined;
    sx?: import("@mui/system").SxProps<import("@mui/material").Theme> | undefined;
    variant?: import("@mui/types").OverridableStringUnion<"elevation" | "outlined", import("@mui/material").PaperPropsVariantOverrides> | undefined;
}, "color" | "position" | "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    ref?: import("react").RefObject<HTMLElement> | ((instance: HTMLElement | null) => void) | null | undefined;
}, "variant" | "square" | "color" | "position" | "children" | "elevation" | "sx" | keyof import("@mui/material/OverridableComponent").CommonProps | "enableColorOnDark"> & {
    theme?: import("@emotion/react").Theme | undefined;
}, {}, {}>;
export declare const RightMenuButtonWrapper: import("@emotion/styled").StyledComponent<import("@mui/system").SystemProps<import("@mui/system").Theme> & {
    children?: import("react").ReactNode;
    component?: import("react").ElementType<any> | undefined;
    ref?: import("react").Ref<unknown> | undefined;
    sx?: import("@mui/system").SxProps<import("@mui/system").Theme> | undefined;
} & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, "children" | "ref" | ("flex" | "height" | "width" | "left" | "top" | "alignContent" | "alignItems" | "alignSelf" | "border" | "borderBottom" | "borderColor" | "borderLeft" | "borderRadius" | "borderRight" | "borderTop" | "bottom" | "boxShadow" | "boxSizing" | "color" | "columnGap" | "display" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "gap" | "gridArea" | "gridAutoColumns" | "gridAutoFlow" | "gridAutoRows" | "gridColumn" | "gridRow" | "gridTemplateAreas" | "gridTemplateColumns" | "gridTemplateRows" | "justifyContent" | "justifyItems" | "justifySelf" | "letterSpacing" | "lineHeight" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "order" | "overflow" | "padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "position" | "right" | "rowGap" | "textAlign" | "textOverflow" | "textTransform" | "visibility" | "whiteSpace" | "zIndex" | "p" | "bgcolor" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "marginX" | "my" | "marginY" | "pt" | "pr" | "pb" | "pl" | "px" | "paddingX" | "py" | "paddingY" | "typography" | "displayPrint") | "component" | "sx"> & {
    theme?: import("@emotion/react").Theme | undefined;
}, {}, {}>;
export declare const LeftArea: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const RightArea: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const CenterArea: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const PageTitle: import("@emotion/styled").StyledComponent<import("@mui/system").SystemProps<import("@mui/material").Theme> & {
    align?: "center" | "left" | "right" | "inherit" | "justify" | undefined;
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").TypographyClasses> | undefined;
    gutterBottom?: boolean | undefined;
    noWrap?: boolean | undefined;
    paragraph?: boolean | undefined;
    sx?: import("@mui/system").SxProps<import("@mui/material").Theme> | undefined;
    variant?: import("@mui/types").OverridableStringUnion<"inherit" | import("@mui/material").TypographyVariant, import("@mui/material").TypographyPropsVariantOverrides> | undefined;
    variantMapping?: Partial<Record<import("@mui/types").OverridableStringUnion<"inherit" | import("@mui/material").TypographyVariant, import("@mui/material").TypographyPropsVariantOverrides>, string>> | undefined;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
    ref?: ((instance: HTMLSpanElement | null) => void) | import("react").RefObject<HTMLSpanElement> | null | undefined;
}, "variant" | "children" | "align" | ("flex" | "height" | "width" | "left" | "top" | "alignContent" | "alignItems" | "alignSelf" | "border" | "borderBottom" | "borderColor" | "borderLeft" | "borderRadius" | "borderRight" | "borderTop" | "bottom" | "boxShadow" | "boxSizing" | "color" | "columnGap" | "display" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "gap" | "gridArea" | "gridAutoColumns" | "gridAutoFlow" | "gridAutoRows" | "gridColumn" | "gridRow" | "gridTemplateAreas" | "gridTemplateColumns" | "gridTemplateRows" | "justifyContent" | "justifyItems" | "justifySelf" | "letterSpacing" | "lineHeight" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "order" | "overflow" | "padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "position" | "right" | "rowGap" | "textAlign" | "textOverflow" | "textTransform" | "visibility" | "whiteSpace" | "zIndex" | "p" | "bgcolor" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "marginX" | "my" | "marginY" | "pt" | "pr" | "pb" | "pl" | "px" | "paddingX" | "py" | "paddingY" | "typography" | "displayPrint") | "sx" | keyof import("@mui/material/OverridableComponent").CommonProps | "gutterBottom" | "noWrap" | "paragraph" | "variantMapping"> & {
    theme?: import("@emotion/react").Theme | undefined;
}, {}, {}>;
