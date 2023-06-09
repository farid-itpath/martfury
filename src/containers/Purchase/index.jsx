import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BackToHome, MyButton } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../utils/consts";
import { api } from "../../api";
import { enqueueSnackbar } from "notistack";
import { fetchOrderHistory } from "../../redux/reducers/orderSlice";

function Purchase() {
  const cartData = useSelector((state) => state.cart.cartData);
  const user = useSelector((state) => state.auth.user);
  const [history, getHistory] = useState([]);
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
        }}
      >
        {cartData.map((item) => (
          <Box
            sx={{ display: "flex", gap: { md: "200px", sm: "100px" } }}
            key={item.product_id.id}
          >
            <Box sx={{ display: "flex" }}>
              <Box
                component="img"
                src={
                  item.product_id.image &&
                  BASE_URL + "/" + item.product_id.image
                }
                sx={{ height: 80, width: 80, objectFit: "contain" }}
              />
              <Box>{item.product_id.name}</Box>
            </Box>
            <Box>{item.product_id.price}</Box>
          </Box>
        ))}

        <MyButton
          title={`Pay ${cartData.reduce((total, item) => {
            return total + item.product_id.price * item.qty;
          }, 0)}`}
          type="primary"
          onClick={() =>
            api.order
              .create(user.token)
              .then((response) => {
                enqueueSnackbar(response.data.message, { variant: "success" });
              })
              .catch((error) => {
                enqueueSnackbar(error.message, { variant: "error" });
              })
          }
        />
        <MyButton
          title="list history"
          type="primary"
          onClick={() => dispatch(fetchOrderHistory(user.token))}
        />
      </Container>
    </>
  );
}

export default Purchase;
