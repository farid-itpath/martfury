import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default function BackToHome() {
  const navigate = useNavigate();
  return (
    <Box sx={{ height: 50, alignSelf: "self-start" }}>
      <Button onClick={() => navigate("/")}>
        <ArrowBackIosIcon />
      </Button>
    </Box>
  );
}
