import React, { FC } from "react";
import {
  IconButton,
  InputAdornment,
  TextField,
  Button,
  CircularProgress,
  TextFieldProps,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { BaseInputSearch } from "./InputSearch.styled";

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

const InputSearch: FC<InputSearchProps> = ({
  onChange,
  onBlur,
  actionButtonText,
  actionButtonAction,
  onFocus,
  loading,
  placeholder,
  textFieldProps
}) => {
  const [searchText, setSearchText] = React.useState<string>("");

  const handleClearClick = () => {
    setSearchText("");
  };

  return (
    <BaseInputSearch>
      <TextField
        {...textFieldProps}
        onFocus={onFocus}
        multiline={false}
        variant="outlined"
        placeholder={placeholder || "Search"}
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          onChange && onChange(e.target.value);
        }}
        onBlur={() => onBlur && onBlur(searchText)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {loading ? (
                <CircularProgress size={20} />
              ) : (
                <IconButton
                  edge="end"
                  onClick={() => onChange && onChange(searchText)}
                >
                  <SearchIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
          endAdornment: searchText && !loading && (
            <InputAdornment position="end">
              <IconButton edge="end" onClick={handleClearClick}>
                <CloseIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {actionButtonAction && actionButtonText && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => actionButtonAction && actionButtonAction(searchText)}
        >
          {actionButtonText}
        </Button>
      )}
    </BaseInputSearch>
  );
};

export default InputSearch;
