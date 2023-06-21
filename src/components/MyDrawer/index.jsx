import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { DrawerContext } from "../../App";
import { useContext } from "react";
import { Categories } from "../../utils/data";
import { useMediaQuery } from "@mui/material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LabelIcon from "@mui/icons-material/Label";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: theme.palette.background.dark,
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Box flexGrow={1}>
          <Typography
            variant="h5"
            color="primary"
            fontWeight={"bold"}
            sx={{ color: theme.palette.primary.contrastText }}
          >
            Categories
          </Typography>
        </Box>
        <IconButton
          onClick={handleDrawerClose}
          sx={{ color: theme.palette.primary.contrastText }}
        >
          <CloseIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {Categories.map((text) => (
          <ListItem
            key={text}
            disablePadding
            onClick={() => navigate(`/category/${text}`)}
          >
            <ListItemButton>
              <ListItemIcon>
                <Typography color={"primary"}>
                  <LabelIcon />
                </Typography>
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ color: theme.palette.primary.contrastText }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
