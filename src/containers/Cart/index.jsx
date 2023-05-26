import { Box, Button, Container, Divider, Typography } from "@mui/material";
import BackToHome from "../../components/BackToHome";
import CartTable from "../../components/CartTable";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../../redux/reducers/cartSlice";

export default function Cart() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const cartData = useSelector((state) => state.cart.cartData);
  useEffect(() => {
    dispatch(fetchCartData({ userId: user.user.id, token: user.token }));
    // setTotal(ca)
  }, []);

  useEffect(() => {
    cartData.length !== 0 &&
      setTotal(
        cartData.reduce(
          (sum, item) =>
            sum + parseInt(item.qty) * parseInt(item.Product.price),
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
        <Typography variant="h5" sx={{ mb: 5 }}>
          Bill
        </Typography>
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
            <Divider />
            <Typography variant="body1">Discount Applied</Typography>
            <Typography variant="h6">Payable Amount</Typography>
          </Box>
          <Box>
            <Typography variant="body1">$ {total}</Typography>
            <Divider />
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
