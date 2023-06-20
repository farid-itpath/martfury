import {
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { lightTheme, darkTheme } from "./themes";
import { createContext, useEffect, useState } from "react";
import { SnackbarProvider } from "notistack";
import { useSelector } from "react-redux";
export const DrawerContext = createContext();
function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(matches);
  const isDark = useSelector((state) => state.theme.isDark);
  useEffect(() => {
    setOpen(matches);
  }, [matches]);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <SnackbarProvider>
        <DrawerContext.Provider value={{ open, setOpen }}>
          <div className="App">
            <AppRoutes />
          </div>
        </DrawerContext.Provider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
