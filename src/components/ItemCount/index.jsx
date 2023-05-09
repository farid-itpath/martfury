import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, set } from "../../redux/reducers/counterSlice";

export default function ItemCount(props) {
  // const { count, setCount } = props;
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button
        onClick={() => dispatch(decrement())}
        disabled={count < 2 ? true : false}
      >
        -
      </Button>
      <TextField
        variant="outlined"
        value={count}
        onChange={(e) => dispatch(set(e.target.value))}
        sx={{ width: 50 }}
      />
      <Button onClick={() => dispatch(increment())}>+</Button>
    </ButtonGroup>
  );
}
