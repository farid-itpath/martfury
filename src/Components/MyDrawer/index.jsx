import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DrawerContext } from "../../App";
import { useContext } from "react";
import { Categories } from "../../utils/data";
import { useMediaQuery } from "@mui/material";
import MyDrawerList from "./MyDrawerList";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MyDrawer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const drawerWidth = matches ? "100%" : 240;

  const { open, setOpen } = useContext(DrawerContext);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box flexGrow={1}>
            <Typography variant="h5" color="primary" fontWeight={"bold"}>
              Categories
            </Typography>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <MyDrawerList title="Clothing" data={Categories.clothing} />
        <Divider />
        <MyDrawerList title="Furniture" data={Categories.furniture} />

        <Divider />
        <MyDrawerList title="Electronics" data={Categories.electronics} />
      </Drawer>
    </Box>
  );
}
