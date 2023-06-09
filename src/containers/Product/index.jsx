import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/material";
import { useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { BackToHome, MyRating, MyTabs, ReviewItem } from "../../components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../../redux/reducers/cartSlice";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/consts";
import MyCard from "../../components/MyCard";
import { fetchBestSellers } from "../../redux/reducers/productSlice";
import { api } from "../../api";
import { showSuccess } from "../../utils/helper";

export default function Product() {
  const theme = useTheme();
  const { id } = useParams();
  const user = useSelector((state) => state.auth.user);

  const { data, isLoading } = useFetch({
    initialUrl: `/api/product/getproductbyid/${id}`,
  });

  const dispatch = useDispatch();

  const [addedToCart, setAddedToCart] = useState(false);

  const cartData = useSelector((state) => state.cart.cartData);
  const bestSellers = useSelector((state) => state.product.bestSellers);
  useEffect(() => {
    dispatch(fetchCartData(user.token));
    dispatch(fetchBestSellers());
  }, [dispatch, user.token]);

  useEffect(() => {
    cartData?.find((item) => item.product_id._id === id)
      ? setAddedToCart(true)
      : setAddedToCart(false);
  }, [cartData, id]);

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <BackToHome />
      <Grid container spacing={4} sx={{ marginTop: 10 }}>
        <Grid item xs={12} sm={6}>
          {isLoading ? (
            <Skeleton variant="rounded" height={200} animation="wave" />
          ) : (
            <Card>
              <CardMedia
                sx={{ height: 200, padding: 1, objectFit: "contain" }}
                image={
                  data.data.Product.image &&
                  BASE_URL + "/" + data.data.Product.image
                }
                component="img"
              />
            </Card>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            {data ? (
              <Typography
                variant="h6"
                sx={{ color: theme.palette.primary.contrastText }}
              >
                {data.data.Product.name}
              </Typography>
            ) : (
              <Skeleton
                variant="text"
                sx={{ fontSize: "2rem" }}
                animation="wave"
              />
            )}
            <Divider
              sx={{ backgroundColor: theme.palette.primary.contrastText }}
            />
            {data ? (
              <MyRating value={data.data.Product.rating} />
            ) : (
              <Skeleton variant="rounded" height={20} animation="wave" />
            )}
            <Typography
              variant="caption"
              sx={{ color: theme.palette.primary.contrastText }}
            >
              4 Reviews
            </Typography>
            <Divider
              sx={{ backgroundColor: theme.palette.primary.contrastText }}
            />
            <Box
              sx={{ display: "flex", justifyContent: "space-around", my: 2 }}
            >
              {addedToCart ? (
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    api.cart
                      .remove({
                        product_id: id,
                        token: user.token,
                      })
                      .then((response) => {
                        showSuccess(response.data.message);
                        dispatch(fetchCartData(user.token));
                      });
                    setAddedToCart(!addedToCart);
                  }}
                >
                  Remove from Cart
                  <RemoveShoppingCartIcon />
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  onClick={() => {
                    api.cart
                      .add({
                        product_id: id,
                        token: user.token,
                      })
                      .then((response) => {
                        showSuccess(response.data.message);
                        dispatch(fetchCartData(user.token));
                      });
                    setAddedToCart(!addedToCart);
                  }}
                >
                  Add to Cart
                  <AddShoppingCartIcon />
                </Button>
              )}
            </Box>
            <Divider
              sx={{ backgroundColor: theme.palette.primary.contrastText }}
            />
            {data?.data.Product.stock > 0 ? (
              <Typography variant="body1" color={theme.palette.success.main}>
                In Stock
              </Typography>
            ) : (
              <Typography variant="body1" color="error">
                Out of Stock
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          mt: 2,
          width: "100%",
          backgroundColor: theme.palette.background.light,
        }}
      >
        <MyTabs
          description={data?.data.Product.description}
          review={<ReviewItem />}
        />
      </Box>
      <Typography
        variant="h3"
        sx={{
          color: theme.palette.primary.main,
          fontWeight: "bold",
          marginTop: 10,
          textAlign: "center",
        }}
      >
        Our Best Sellers
      </Typography>
      <Grid container spacing={4}>
        {bestSellers.map((item) => (
          <Grid item xs={12} sm={6} key={item._id}>
            <MyCard
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
              bestSeller={true}
              inCart={
                cartData?.find((product) => product.product_id._id === item._id)
                  ? true
                  : false
              }
              onClick={() => window.location.assign("/" + item._id)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
