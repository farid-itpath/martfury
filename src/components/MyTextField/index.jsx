import Box from "@mui/material/Box";
import { TextField, Typography, useTheme } from "@mui/material";

export default function MyTextField(props) {
  const { label, onChange, onBlur, error, value } = props;
  const theme = useTheme();
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
        InputProps={{
          style: {
            color: theme.palette.primary.contrastText,
          },
        }}
        InputLabelProps={{
          style: {
            color: theme.palette.primary.contrastText,
          },
        }}
      />
      <Typography sx={{ color: theme.palette.error.light }}>{error}</Typography>
    </Box>
  );
}
