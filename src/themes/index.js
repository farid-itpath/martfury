import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fdb701",
      contrastText: "#fff",
    },
    secondary: {
      main: "#000",
      contrastText: "#fff",
    },
    tertiary: {
      main: "#fff",
      contrastText: '#000'
    },
    success: {
      main: "#2e7d32"
    }
  },
});
