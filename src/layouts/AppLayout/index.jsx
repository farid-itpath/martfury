import { Outlet } from "react-router-dom";
import { MyAppBar, MyDrawer, MyFooter } from "../../Components";
import { Container, useMediaQuery } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { DrawerContext } from "../../App";
import { DRAWER_WIDTH } from "../../utils/consts";
import { theme } from "../../themes";

export default function Layout() {
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
          width: open && matches ?  `calc(100% - ${DRAWER_WIDTH})` : "100%",
          marginLeft: open && matches ? `${DRAWER_WIDTH}` : 0,
        }}
      >
        <Outlet />
      </Container>
      <MyFooter />
    </>
  );
}
