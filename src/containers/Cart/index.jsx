import { Box, Button, Container, Typography } from "@mui/material";
import BackToHome from "../../components/BackToHome";
import CartTable from "../../components/CartTable";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../../redux/reducers/cartSlice";

export default function Cart() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [total] = useState(0);
  const cartData = useSelector((state) => state.cart.cartData);
  useEffect(() => {
    dispatch(fetchCartData({ userId: user.user.id, token: user.token }));
  }, []);

  return (
    <Container
      sx={{
        minHeight: "100vh",
      }}
    >
      <BackToHome />
      <CartTable header={["Product", "Quantity", "Price"]} data={cartData} />
      <Box sx={{ padding: 5 }}>
        <Typography variant="h5" sx={{ mb: 5 }}>
          Bill
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: "30vh",
          }}
        >
          <Box>
            <Typography variant="body1">Total Amount</Typography>
            <Typography variant="body1">Discount Applied</Typography>
            <Typography variant="h6">Payable Amount</Typography>
          </Box>
          <Box>
            <Typography variant="body1">$ {total}</Typography>
            <Typography variant="body1" color={"error"}>
              - $ {total * 0.025}
            </Typography>
            <Typography variant="h6">{total - total * 0.025}</Typography>
          </Box>
        </Box>
        <Button variant="contained" sx={{ width: "100%" }}>
          Checkout
        </Button>
      </Box>
    </Container>
  );
}
