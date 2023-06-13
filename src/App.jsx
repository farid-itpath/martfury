import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { theme } from "./themes";
import { createContext, useEffect, useState } from "react";
import { SnackbarProvider } from "notistack";
export const DrawerContext = createContext();
function App() {
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(matches);
  useEffect(() => {
    setOpen(matches);
  }, [matches]);
  return (
    <ThemeProvider theme={theme}>
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
