import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { BackToHome, MyRating, MyTabs, ReviewItem } from "../../components";
import React, { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  fetchCartData,
  removeFromCart,
} from "../../redux/reducers/cartSlice";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/consts";

export default function Product() {
  const { id } = useParams();
  const user = useSelector((state) => state.auth.user);

  const product = useFetch({
    initialUrl: `/api/product/getproductbyid/${id}`,
  }).data?.data.Product;

  const dispatch = useDispatch();

  const [addedToCart, setAddedToCart] = useState(false);

  const cartData = useSelector((state) => state.cart.cartData);

  useEffect(() => {
    dispatch(fetchCartData(user.token));
  }, [dispatch, user.token]);

  useEffect(() => {
    cartData?.find((item) => item.product_id._id === id)
      ? setAddedToCart(true)
      : setAddedToCart(false);
  }, [cartData,id]);

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackToHome />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia
              sx={{ height: 200, padding: 1, objectFit: "contain" }}
              image={product?.image && BASE_URL + "/" + product?.image}
              component="img"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="h6">{product?.name}</Typography>
            <Divider />
            <MyRating value={product?.rating} />
            <Typography variant="caption">4 Reviews</Typography>
            <Divider />
            <Box
              sx={{ display: "flex", justifyContent: "space-around", my: 2 }}
            >
              {addedToCart ? (
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    dispatch(
                      removeFromCart({
                        product_id: id,
                        token: user.token,
                      })
                    ).then((response) =>
                      enqueueSnackbar(response.payload.data.message, {
                        variant: "error",
                      })
                    );
                    setAddedToCart(!addedToCart);
                  }}
                >
                  <RemoveShoppingCartIcon />
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  onClick={() => {
                    dispatch(
                      addToCart({
                        product_id: id,
                        token: user.token,
                      })
                    ).then((response) =>
                      enqueueSnackbar(response.payload.data.message, {
                        variant: "success",
                      })
                    );
                    setAddedToCart(!addedToCart);
                  }}
                >
                  <AddShoppingCartIcon />
                </Button>
              )}
            </Box>
            <Divider />
            {/* {count < 10 ? (
              <Typography variant="body1" color={theme.palette.success.main}>
                In Stock
              </Typography>
            ) : (
              <Typography variant="body1" color="error">
                Out of Stock
              </Typography>
            )} */}
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: 2, width: "100%" }}>
        <MyTabs description={product?.description} review={<ReviewItem />} />
      </Box>
    </Container>
  );
}
