/// <reference types="react" />
export declare const MenuItemRoot: import("@emotion/styled").StyledComponent<{
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").ButtonClasses> | undefined;
    color?: import("@mui/types").OverridableStringUnion<"error" | "inherit" | "success" | "info" | "warning" | "primary" | "secondary", import("@mui/material").ButtonPropsColorOverrides> | undefined;
    disabled?: boolean | undefined;
    disableElevation?: boolean | undefined;
    disableFocusRipple?: boolean | undefined;
    endIcon?: import("react").ReactNode;
    fullWidth?: boolean | undefined;
    href?: string | undefined;
    size?: import("@mui/types").OverridableStringUnion<"small" | "medium" | "large", import("@mui/material").ButtonPropsSizeOverrides> | undefined;
    startIcon?: import("react").ReactNode;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    variant?: import("@mui/types").OverridableStringUnion<"text" | "outlined" | "contained", import("@mui/material").ButtonPropsVariantOverrides> | undefined;
} & Omit<{
    action?: import("react").Ref<import("@mui/material").ButtonBaseActions> | undefined;
    centerRipple?: boolean | undefined;
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").ButtonBaseClasses> | undefined;
    disabled?: boolean | undefined;
    disableRipple?: boolean | undefined;
    disableTouchRipple?: boolean | undefined;
    focusRipple?: boolean | undefined;
    focusVisibleClassName?: string | undefined;
    LinkComponent?: import("react").ElementType<any> | undefined;
    onFocusVisible?: import("react").FocusEventHandler<any> | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    tabIndex?: number | undefined;
    TouchRippleProps?: Partial<import("@mui/material/ButtonBase/TouchRipple").TouchRippleProps> | undefined;
    touchRippleRef?: import("react").Ref<import("@mui/material/ButtonBase/TouchRipple").TouchRippleActions> | undefined;
}, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}, "variant" | "color" | "action" | "children" | "tabIndex" | "disabled" | "size" | "href" | "sx" | keyof import("@mui/material/OverridableComponent").CommonProps | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableFocusRipple" | "disableElevation" | "fullWidth" | "endIcon" | "startIcon"> & {
    theme?: import("@emotion/react").Theme | undefined;
} & {
    component?: import("react").ElementType<any> | undefined;
}, {}, {}>;
