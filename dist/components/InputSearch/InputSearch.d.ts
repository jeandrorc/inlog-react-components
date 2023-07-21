import { FC } from "react";
import { TextFieldProps } from "@mui/material";
export interface InputSearchProps {
    onChange?: (value: string) => void;
    onBlur?: (value: string) => void;
    actionButtonText?: string;
    actionButtonAction?: (value: string) => void;
    placeholder?: string;
    onFocus?: () => void;
    loading?: boolean;
    textFieldProps?: TextFieldProps;
}
declare const InputSearch: FC<InputSearchProps>;
export default InputSearch;
