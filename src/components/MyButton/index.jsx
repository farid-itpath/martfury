import Button from "@mui/material/Button";
import { theme } from "../../themes";

export default function MyButton(props) {
  const { type, title, onClick, disabled } = props;
  return (
    <Button
      variant={type === "primary" ? "contained" : "outlined"}
      sx={{
        // backgroundColor: theme.palette.primary.main,
        ":hover": { backgroundColor: theme.palette.primary.main },
        margin: 2,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </Button>
  );
}
