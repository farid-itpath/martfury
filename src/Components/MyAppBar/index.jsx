import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@emotion/react";
import { DrawerContext } from "../../App";
import { useContext } from "react";
import { AppBar } from "@mui/material";
import { DRAWER_WIDTH } from "../../utils/consts";
import MySearchBox from "./MySearchBox";
import MySpeedDial from "./MySpeedDial";
import MyProfileMenu from "./MyProfileMenu";
import MyIconButtonGroup from "./MyIconButtonGroup";

export const AnchorElContext = React.createContext();
export default function MyAppBar() {
  const theme = useTheme();
  const { open, setOpen } = useContext(DrawerContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar
        position="fixed"
        sx={{ width: open ? `calc(100% - ${DRAWER_WIDTH})` : "100%" }}
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              color: theme.palette.secondary.main,
              fontWeight: "bold",
            }}
          >
            mart
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, fontWeight: "bold" }}
          >
            fury
          </Typography>
          <MySearchBox />
          <Box sx={{ flexGrow: 1 }} />
          <AnchorElContext.Provider value={{ anchorEl, setAnchorEl }}>
            <MyIconButtonGroup />
            <MyProfileMenu />
          </AnchorElContext.Provider>
        </Toolbar>
        <MySpeedDial />
      </AppBar>
    </Box>
  );
}
