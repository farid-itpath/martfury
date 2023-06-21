import {
  Box,
  Container,
  Grid,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { BackToHome } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api";
import MyCard from "../../components/MyCard";
import { useSelector } from "react-redux";

export default function Category() {
  const theme = useTheme();
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const cartData = useSelector((state) => state.cart.cartData);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    api.product
      .getByCategory(category)
      .then((response) => setProducts(response.data.data))
      .finally(() => setLoading(false));
  }, [category]);
  return (
    <>
      <Container
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <BackToHome />
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: theme.palette.primary.main,
          }}
        >
          {category}
        </Typography>

        <Grid container spacing={4}>
          {products.length === 0 || loading
            ? [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item}>
                  <Skeleton variant="rounded" height={200} animation="wave" />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "2rem" }}
                    animation="wave"
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "2rem" }}
                    animation="wave"
                  />
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Skeleton variant="rounded" height={36} width={64} />
                    <Skeleton variant="rounded" height={36} width={64} />
                  </Box>
                </Grid>
              ))
            : products.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item._id}>
                  <MyCard
                    id={item._id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    bestSeller={item.bestSeller}
                    inCart={
                      cartData?.find(
                        (product) => product.product_id._id === item._id
                      )
                        ? true
                        : false
                    }
                    onClick={() => navigate("/" + item._id)}
                  />
                </Grid>
              ))}
        </Grid>
      </Container>
    </>
  );
}
