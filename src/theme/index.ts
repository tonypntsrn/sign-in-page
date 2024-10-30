import { createTheme } from "@mui/material";

const spacing = 4;

const colors = {
  white: "#FFFFFF",
  main: "#4A4E71",
  success: "#27B274",
  error: "#FF8080",
  errorLight: "#FDEFEE",
  mainLight: "#6F91BC",
};

export const theme = createTheme({
  spacing,
  shape: {
    borderRadius: spacing * 2.5,
  },
  palette: {
    primary: {
      main: colors.main,
      light: colors.mainLight,
    },
    error: {
      main: colors.error,
    },
  },
  typography: {
    body1: {
      fontSize: "16px",
      lineHeight: "19.36px",
      fontWeight: 400,
      color: colors.main,
    },
    h5: {
      fontSize: "28px",
      lineHeight: "28px",
      fontWeight: 700,
    },
    caption: {
      fontSize: "13px",
      lineHeight: "18px",
      fontWeight: 400,
    },
    button: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "14px",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          height: "48px",
          textTransform: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: "48px",
          background: colors.white,
          borderRadius: `${spacing * 2.5}px`,
          "& .MuiInputBase-input::placeholder": {
            color: colors.mainLight,
            opacity: 1,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: 0,
          },
          "&.Mui-focused": {
            "& .MuiInputBase-input::placeholder": {
              color: colors.main,
              opacity: 1,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: `1px solid ${colors.mainLight}`,
            },
          },
          "&.MuiInputBase-colorSuccess": {
            color: colors.success,
            "& .MuiOutlinedInput-notchedOutline": {
              border: `1px solid ${colors.success}`,
            },
          },
          "&.Mui-error": {
            color: colors.error,
            background: colors.errorLight,
            "& .MuiOutlinedInput-notchedOutline": {
              border: `1px solid ${colors.error}`,
            },
            "& .MuiInputBase-input::placeholder": {
              color: colors.error,
              opacity: 1,
            },
          },
        },
      },
    },
  },
});
