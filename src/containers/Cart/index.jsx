import { Box, Button, Container, Divider, Typography } from "@mui/material";
import BackToHome from "../../components/BackToHome";
import CartTable from "../../components/CartTable";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../../redux/reducers/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const cartData = useSelector((state) => state.cart.cartData);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchCartData(user.token));
  }, [dispatch, user.token]);

  useEffect(() => {
    cartData.length !== 0 &&
      setTotal(
        cartData.reduce(
          (sum, item) =>
            sum + parseInt(item.qty) * parseInt(item.product_id.price),
          0
        )
      );
  }, [cartData]);

  return (
    <Container
      sx={{
        minHeight: "100vh",
      }}
    >
      <BackToHome />
      <CartTable header={["Product", "Quantity", "Price"]} data={cartData} />
      <Box sx={{ padding: 5 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: "30vh",
            backgroundColor: "#cccccc",
            padding: 5,
            borderRadius: 10,
            marginBottom: 5,
          }}
        >
          <Box>
            <Typography variant="body1">Total Amount</Typography>
            <Typography variant="body1">Discount Applied</Typography>
            <Divider />
            <Typography variant="h6">Payable Amount</Typography>
          </Box>
          <Box>
            <Typography variant="body1">$ {total}</Typography>
            <Typography variant="body1" color={"error"}>
              - $ {parseFloat(total * 0.025).toFixed(2)}
            </Typography>
            <Divider />
            <Typography variant="h6">
              {parseFloat(total - total * 0.025).toFixed(2)}
            </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={() => navigate("/purchase")}
        >
          Checkout
        </Button>
      </Box>
    </Container>
  );
}
