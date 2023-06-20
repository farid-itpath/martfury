import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@emotion/react";
import { DrawerContext } from "../../App";
import { createContext, useContext, useState } from "react";
import { AppBar } from "@mui/material";
import { DRAWER_WIDTH } from "../../utils/consts";
import MySearchBox from "./MySearchBox";
import MySpeedDial from "./MySpeedDial";
import MyProfileMenu from "./MyProfileMenu";
import MyIconButtonGroup from "./MyIconButtonGroup";
import { useSelector } from "react-redux";

export const AnchorElContext = createContext();
export default function MyAppBar() {
  const theme = useTheme();
  const { open, setOpen } = useContext(DrawerContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const cartData = useSelector((state) => state.cart.cartData);
  return (
    <AppBar
      position="fixed"
      sx={{
        width: open ? `calc(100% - ${DRAWER_WIDTH})` : "100%",
        backgroundColor: theme.palette.background.dark,
      }}
      open={open}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(true)}
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
            color: theme.palette.primary.contrastText,
            fontWeight: "bold",
          }}
        >
          mart
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            display: { xs: "none", sm: "block" },
            fontWeight: "bold",
            color: theme.palette.secondary.contrastText,
          }}
        >
          fury
        </Typography>
        <MySearchBox />
        <Box sx={{ flexGrow: 1 }} />
        <AnchorElContext.Provider value={{ anchorEl, setAnchorEl }}>
          <MyIconButtonGroup cartProductsCount={cartData?.length} />
          <MyProfileMenu cartProductsCount={cartData?.length} />
        </AnchorElContext.Provider>
      </Toolbar>
      <MySpeedDial />
    </AppBar>
  );
}
