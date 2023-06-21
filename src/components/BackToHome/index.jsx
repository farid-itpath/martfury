import { Box, Button, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useTheme } from "@emotion/react";
export default function BackToHome() {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        position: "sticky",
        top: useMediaQuery(theme.breakpoints.up("sm")) ? 64 : 56,
        zIndex: 999,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
      }}
    >
      <Button onClick={() => navigate(-1)}>
        <ArrowBackIosIcon sx={{ color: "white" }} />
      </Button>
    </Box>
  );
}
