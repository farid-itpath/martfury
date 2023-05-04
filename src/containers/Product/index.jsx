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
import {
  BackToHome,
  ItemCount,
  MyRating,
  MyTabs,
  ReviewItem,
} from "../../components";
import React, { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { enqueueSnackbar } from "notistack";
import { api } from "../../api";

export default function Product() {
  const [count, setCount] = React.useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    api.product
      .getProductById(id)
      .then((response) => setProduct(response.data.product))
      .catch((e) => console.log("Server Error --- ", e));
  }, []);

  useEffect(() => {
    api.cart
      .get(localStorage.getItem("loggedInUser"))
      .then((response) =>
        response.data.usercart.find((item) => item.product_id === parseInt(id))
          ? setAddedToCart(true)
          : setAddedToCart(false)
      );
  }, []);

  const theme = useTheme();
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
              image={
                product.image &&
                "https://ecommerceserver-4zw1.onrender.com/" + product.image
              }
              component="img"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="h6">{product.name}</Typography>
            <Divider />
            <MyRating value={product.rating} />
            <Typography variant="caption">4 Reviews</Typography>
            <Divider />
            <Box
              sx={{ display: "flex", justifyContent: "space-around", my: 2 }}
            >
              <ItemCount count={count} setCount={setCount} />
              {addedToCart ? (
                <Button
                  variant="outlined"
                  color="error"
                  disabled={count > 9 ? true : false}
                  onClick={() => {
                    enqueueSnackbar("Item removed from cart!", {
                      variant: "error",
                    });
                    api.cart.remove(localStorage.getItem("loggedInUser"), id);
                    setAddedToCart(!addedToCart);
                  }}
                >
                  <RemoveShoppingCartIcon />
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  disabled={count > 9 ? true : false}
                  onClick={() => {
                    enqueueSnackbar("Item added to cart!", {
                      variant: "success",
                    });
                    api.cart.add({
                      user_id: localStorage.getItem("loggedInUser"),
                      product_id: id,
                    });
                    setAddedToCart(!addedToCart);
                  }}
                >
                  <AddShoppingCartIcon />
                </Button>
              )}
            </Box>
            <Divider />
            {count < 10 ? (
              <Typography variant="body1" color={theme.palette.success.main}>
                In Stock
              </Typography>
            ) : (
              <Typography variant="body1" color="error">
                Out of Stock
              </Typography>
            )}
            <Divider />
            <Typography variant="h5">$ {product.price * count}</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: 2, width: "100%" }}>
        <MyTabs description={product.description} review={<ReviewItem />} />
      </Box>
    </Container>
  );
}
