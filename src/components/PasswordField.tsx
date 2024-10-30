import { useState } from "react";
import { IconButton, TextField, TextFieldProps } from "@mui/material";
import HidePasswordIcon from "../assets/HidePassword.svg?react";
import ShowPasswordIcon from "../assets/ShowPassword.svg?react";

type PasswordFieldProps = TextFieldProps & {
  success?: boolean;
};

const getIconColor = (error?: boolean, success?: boolean) => {
  if (error) {
    return {
      fill: "#FF8080",
    };
  }

  if (success) {
    return {
      fill: "#27B274",
    };
  }

  return {};
};

export const PasswordField = ({ success, ...props }: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () =>
    setShowPassword((showPassword) => !showPassword);

  const Icon = showPassword ? ShowPasswordIcon : HidePasswordIcon;

  const textFieldType = showPassword ? "text" : "password";

  return (
    <TextField
      {...props}
      type={textFieldType}
      slotProps={{
        input: {
          endAdornment: (
            <IconButton
              onClick={togglePasswordVisibility}
              color={props.error ? "error" : "primary"}
            >
              <Icon {...getIconColor(props.error, success)} />
            </IconButton>
          ),
        },
      }}
    />
  );
};
