// import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";

export default function MyButton(props) {
  const { type, title, onClick, disabled } = props;
  // const theme = useTheme();
  return (
    <Button
      variant={type === "primary" ? "contained" : "outlined"}
      sx={{
        // ":hover": { backgroundColor: theme.palette.primary.main },
        margin: 2,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </Button>
  );
}
