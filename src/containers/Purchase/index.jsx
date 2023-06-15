import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { BackToHome } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../utils/consts";
import { api } from "../../api";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { fetchCartData } from "../../redux/reducers/cartSlice";

function Purchase() {
  const cartData = useSelector((state) => state.cart.cartData);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <BackToHome />
      {/* <Typography variant="h5" sx={{ mb: 5 }}>
        Bill
      </Typography> */}
      <Container
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <Box
          sx={{
            flexDirection: "column",
            border: "1px solid #ccc",
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          {cartData.map((item) => (
            <Box
              sx={{
                display: "flex",
                padding: "10px",
              }}
              key={item.product_id._id}
            >
              <Box
                component="img"
                src={
                  item.product_id.image &&
                  BASE_URL + "/" + item.product_id.image
                }
                sx={{
                  height: 80,
                  objectFit: "contain",
                  width: "20%",
                }}
              />
              <Box sx={{ width: "80%" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {item.product_id.name}
                </Box>
                <Typography variant="caption">
                  {item.product_id.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            flexDirection: "column",
            borderRadius: 2,
            boxShadow: 2,
            padding: "10px",
            width: "100%",
          }}
        >
          {cartData.map((item) => (
            <Box
              key={item.product_id._id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px",
              }}
            >
              <Typography>{item.product_id.name}</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {item.product_id.price}
              </Box>
            </Box>
          ))}
        </Box>

        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={() =>
            api.order
              .create(user.token)
              .then((response) => {
                enqueueSnackbar(response.data.message, { variant: "success" });
                navigate("/orders");
                dispatch(fetchCartData(user.token));
              })
              .catch((error) => {
                enqueueSnackbar(error.message, { variant: "error" });
              })
          }
        >{`Pay ${cartData.reduce((total, item) => {
          return total + item.product_id.price * item.qty;
        }, 0)}`}</Button>
      </Container>
    </>
  );
}

export default Purchase;