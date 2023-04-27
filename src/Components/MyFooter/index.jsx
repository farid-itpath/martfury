import { Box, Typography } from "@mui/material";
import { theme } from "../../themes";
import { useContext } from "react";
import { DrawerContext } from "../../App";
import { DRAWER_WIDTH } from "../../utils/consts";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function MyFooter() {
  const { open } = useContext(DrawerContext);
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      backgroundColor={theme.palette.primary.main}
      sx={{
        width: open ? `calc(100% - ${DRAWER_WIDTH})` : "100%",
        marginLeft: open ? `${DRAWER_WIDTH}` : 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Box display={"flex"}>
          <Typography
            variant="h6"
            component="div"
            sx={{
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
            sx={{
              fontWeight: "bold",
              color: "white",
            }}
          >
            fury
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Typography fontSize={10}>Copyright &copy; 2023</Typography>
          <Typography fontSize={10} sx={{ textDecoration: "underline" }}>
            Privacy and Policy
          </Typography>
        </Box>
      </Box>
      <Box>
        <FacebookIcon
          sx={{
            marginX: 1,
            ":hover": {
              color: theme.palette.primary.contrastText,
            },
          }}
        />
        <YouTubeIcon
          sx={{
            marginX: 1,
            ":hover": {
              color: theme.palette.primary.contrastText,
            },
          }}
        />
        <InstagramIcon
          sx={{
            marginX: 1,
            ":hover": {
              color: theme.palette.primary.contrastText,
            },
          }}
        />
        <TwitterIcon
          sx={{
            marginX: 1,
            ":hover": {
              color: theme.palette.primary.contrastText,
            },
          }}
        />
      </Box>
    </Box>
  );
}
