import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default function BackToHome() {
  const navigate = useNavigate();
  return (
    <Button
      sx={{ position: "absolute", top: 80, left: { xs: 20, md: 260 } }}
      onClick={() => navigate("/")}
    >
      <ArrowBackIosIcon />
    </Button>
  );
}
