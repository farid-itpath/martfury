import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import "./App.css";
import AppRoutes from "./routes";
import { theme } from "./themes";
import { createContext, useEffect, useState } from "react";
import { SnackbarProvider } from "notistack";
export const DrawerContext = createContext();
export const UserContext = createContext();
function App() {
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(matches);
  const [loggedInUser, setLoggedInUser] = useState();
  useEffect(() => {
    setOpen(matches);
  }, [matches]);
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider>
        <DrawerContext.Provider value={{ open, setOpen }}>
          <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            <div className="App">
              <AppRoutes />
            </div>
          </UserContext.Provider>
        </DrawerContext.Provider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
