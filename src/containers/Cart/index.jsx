import { Box, Button, Container, Typography } from "@mui/material";
import { TempCart } from "../../utils/data";
import BackToHome from "../../components/BackToHome";
import CartTable from "../../components/CartTable";
import { useEffect, useState } from "react";
import { api } from "../../api";

export default function Cart() {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    api.cart
      .get(localStorage.getItem("loggedInUser"))
      .then((response) => setCartData(response.data.usercart))
      .catch((e) => console.log("server error --- ", e));
  }, []);

  return (
    <Container
      sx={{
        minHeight: "100vh",
      }}
    >
      <BackToHome />
      <CartTable header={["Product", "Quantity", "Price"]} data={cartData} />
      <Box width={"50%"}>
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
            <Typography variant="body1">$ 2000</Typography>
            <Typography variant="body1" color={"error"}>
              - $ 400
            </Typography>
            <Typography variant="h6">$ 1600</Typography>
          </Box>
        </Box>
        <Button variant="contained" sx={{ width: "100%" }}>
          Checkout
        </Button>
      </Box>
    </Container>
  );
}
