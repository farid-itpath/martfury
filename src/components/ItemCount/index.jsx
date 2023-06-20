import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { TextField, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../../redux/reducers/cartSlice";
import { api } from "../../api";
import { useState } from "react";

export default function ItemCount(props) {
  const { productId } = props;
  const theme = useTheme();
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.cartData);
  const cartItem = cart.find((item) => item.product_id._id === productId);
  const [count, setCount] = useState(cartItem?.qty);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button
          onClick={() => {
            setCount(parseInt(count) - 1);
            setLoading(true);
            setError(false);
            api.cart
              .update({
                cartId: cartItem._id,
                token: user.token,
                qty: parseInt(count) - 1,
              })
              .then(() => dispatch(fetchCartData(user.token)))
              .finally(() => setLoading(false));
          }}
          disabled={count < 2 || loading ? true : false}
        >
          -
        </Button>
        <TextField
          variant="outlined"
          value={count}
          onChange={(e) => {
            if (/^0*?[1-9]\d*$/.test(e.target.value)) {
              const v =
                parseInt(e.target.value) < 0
                  ? parseInt(e.target.value) * -1
                  : e.target.value;
              setCount(v);
              api.cart
                .update({
                  cartId: cartItem._id,
                  token: user.token,
                  qty: v,
                })
                .then(() => dispatch(fetchCartData(user.token)));
              setError(false);
            } else {
              setError("Enter valid number!");
            }
          }}
          sx={{
            width: 100,
            input: { color: theme.palette.primary.contrastText },
          }}
        />
        <Button
          onClick={() => {
            setCount(parseInt(count) + 1);
            setLoading(true);
            setError(false);
            api.cart
              .update({
                cartId: cartItem._id,
                token: user.token,
                qty: parseInt(count) + 1,
              })
              .then(() => dispatch(fetchCartData(user.token)))
              .finally(() => setLoading(false));
          }}
          disabled={loading}
        >
          +
        </Button>
      </ButtonGroup>
      {error && (
        <Typography
          sx={{ color: theme.palette.error.light, textAlign: "center" }}
        >
          {error}
        </Typography>
      )}
    </>
  );
}
