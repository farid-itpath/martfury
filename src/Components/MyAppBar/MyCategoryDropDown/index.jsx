import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "@emotion/styled";
import { alpha } from "@mui/material";

function BasicSelect() {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="All"
          onChange={handleChange}
        >
          <MenuItem value={10}>Electronics</MenuItem>
          <MenuItem value={20}>Furniture</MenuItem>
          <MenuItem value={30}>Wearables</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export const MyCategoryDropDown = styled(BasicSelect)(({ theme }) => ({
  // position: "relative",
  // borderRadius: theme.shape.borderRadius,
  // backgroundColor: 'white',
  // "&:hover": {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  // marginRight: theme.spacing(2),
  // marginLeft: 0,
  // width: "100%",
  // [theme.breakpoints.up("sm")]: {
  //   marginLeft: theme.spacing(3),
  //   width: "auto",
  // },
}));
