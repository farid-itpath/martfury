import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import BackToHome from "../../components/BackToHome";
import CartTable from "../../components/CartTable";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../../redux/reducers/cartSlice";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../../assets/images/emptycart.svg";

export default function Cart() {
  const theme = useTheme();
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
      <Box sx={{ padding: 5 }}>
        {cartData.length > 0 ? (
          <>
            <CartTable
              header={["Product", "Quantity", "Price"]}
              data={cartData}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "30vh",
                backgroundColor: "#cccccc",
                padding: 5,
                borderRadius: 10,
                marginBottom: 5,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}
                >
                  Total Amount
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ flexGrow: 1, textAlign: "center" }}
                >
                  $ {parseFloat(total).toFixed(2)}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}
                >
                  Discount Applied
                </Typography>
                <Typography
                  variant="body1"
                  color={"error"}
                  sx={{ flexGrow: 1, textAlign: "center" }}
                >
                  - $ {parseFloat(total * 0.025).toFixed(2)}
                </Typography>
              </Box>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}
                >
                  Payable Amount
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ flexGrow: 1, textAlign: "center" }}
                >
                  $ {parseFloat(total - total * 0.025).toFixed(2)}
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
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={EmptyCart}
              sx={{ height: { xs: 120, sm: 200, md: 300 } }}
            />
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontWeight: "bold",
                textAlign: "center",
                fontSize: { sm: 50 },
              }}
            >
              Your cart is empty!
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}
