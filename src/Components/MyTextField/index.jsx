import Box from "@mui/material/Box";
import { theme } from "../../themes";
import { TextField } from "@mui/material";

export default function MyTextField(props) {
  const { label } = props;
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        sx={{ ":focus-visible": { outlineStyle: theme.palette.primary.main } }}
      />
    </Box>
  );
}
