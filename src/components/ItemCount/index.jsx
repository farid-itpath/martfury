import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateCartItem } from "../../redux/reducers/cartSlice";

export default function ItemCount(props) {
  const { productId } = props;
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.cartData);
  const cartItem = cart.find((item) => item.product_id === productId);
  const [count, setCount] = React.useState(cartItem?.qty);
  const dispatch = useDispatch();
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button
        onClick={() => {
          setCount(parseInt(count) - 1);
          dispatch(
            updateCartItem({
              cartId: cartItem.id,
              token: user.token,
              qty: parseInt(count) - 1,
            })
          );
        }}
        disabled={count < 2 ? true : false}
      >
        -
      </Button>
      <TextField
        variant="outlined"
        value={count}
        onChange={(e) => {
          setCount(e.target.value);
          dispatch(
            updateCartItem({
              cartId: cartItem.id,
              token: user.token,
              qty: e.target.value,
            })
          );
        }}
        sx={{ width: 100 }}
      />
      <Button
        onClick={() => {
          setCount(parseInt(count) + 1);
          dispatch(
            updateCartItem({
              cartId: cartItem.id,
              token: user.token,
              qty: parseInt(count) + 1,
            })
          );
        }}
      >
        +
      </Button>
    </ButtonGroup>
  );
}
