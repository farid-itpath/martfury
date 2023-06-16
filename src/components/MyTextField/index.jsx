import Box from "@mui/material/Box";
import { theme } from "../../themes";
import { TextField, Typography } from "@mui/material";

export default function MyTextField(props) {
  const { label, onChange, onBlur, error, value } = props;
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
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <Typography sx={{ color: theme.palette.error.light }}>{error}</Typography>
    </Box>
  );
}
