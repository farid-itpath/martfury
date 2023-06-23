import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#fdb701",
      contrastText: "#000",
    },
    secondary: {
      main: "#000",
      contrastText: "#fff",
    },
    tertiary: {
      main: "#fff",
      contrastText: "#000",
    },
    success: {
      main: "#2e7d32",
    },
    background: {
      footer: "#fdb701",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fdb701",
      contrastText: "#fff",
    },
    secondary: {
      main: "#000",
      contrastText: "#fdb701",
    },
    background: {
      main: "#2a2a2a",
      dark: "#202125",
      light: "#444448",
      footer: "#202125",
    },
  },
});
