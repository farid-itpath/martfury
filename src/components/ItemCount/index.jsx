import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { TextField } from "@mui/material";

export default function ItemCount(props) {
  const {count, setCount} = props
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button
        onClick={() => setCount(count - 1)}
        disabled={count < 2 ? true : false}
      >
        -
      </Button>
      <TextField
        variant="outlined"
        value={count}
        onChange={(e)=>setCount(e.target.value)}
        sx={{width:50}}
      />
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </ButtonGroup>
  );
}
