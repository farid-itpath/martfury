import Button from "@mui/material/Button";
import { theme } from "../../themes";

export default function MyButton(props) {
  const { type, title } = props;
  return (
    <Button
      variant={type === "primary" ? "contained" : "outlined"}
      sx={{
        backgroundColor: theme.palette.primary.main,
        ":hover": { backgroundColor: theme.palette.primary.main },
        margin: 2,
      }}
    >
      {title}
    </Button>
  );
}
