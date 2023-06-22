import { useTheme } from "@emotion/react";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

export default function MyButton(props) {
  const { type, title, onClick, disabled, endIcon, status } = props;
  const isDark = useSelector((state) => state.theme.isDark);
  const theme = useTheme();
  return (
    <Button
      variant={type === "primary" ? "contained" : "outlined"}
      sx={{
        margin: 2,
        backgroundColor: status === "danger" && theme.palette.error.main,
        color:
          type === "primary"
            ? isDark
              ? theme.palette.primary.contrastText
              : theme.palette.secondary.contrastText
            : theme.palette.primary,
        ":hover": {
          backgroundColor: status === "danger" && theme.palette.error.main,
        },
      }}
      onClick={onClick}
      disabled={disabled}
      endIcon={endIcon}
    >
      {title}
    </Button>
  );
}
