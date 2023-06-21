import { useTheme } from "@emotion/react";
import Button from "@mui/material/Button";

export default function MyButton(props) {
  const { type, title, onClick, disabled, endIcon, status } = props;
  const theme = useTheme();
  return (
    <Button
      variant={type === "primary" ? "contained" : "outlined"}
      sx={{
        margin: 2,
        backgroundColor: status === "danger" && theme.palette.error.main,
        color: theme.palette.secondary.contrastText,
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
