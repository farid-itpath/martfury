import { Outlet } from "react-router-dom";
import { MyAppBar, MyDrawer, MyFooter } from "../../components";
import { Box, Container, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { DrawerContext } from "../../App";
import { DRAWER_WIDTH } from "../../utils/consts";
import { theme } from "../../themes";
import { useTheme } from "@emotion/react";

export default function Layout() {
  const appTheme = useTheme();
  const { open } = useContext(DrawerContext);
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <MyAppBar />
      <MyDrawer />
      <Container
        maxWidth="false"
        sx={{
          minHeight: "100vh",
          width: open && matches ? `calc(100% - ${DRAWER_WIDTH})` : "100%",
          marginLeft: open && matches ? `${DRAWER_WIDTH}` : 0,
        }}
      >
        <Box sx={appTheme.mixins.toolbar} />
        <Outlet />
      </Container>
      <MyFooter />
    </>
  );
}
