import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BackToHome } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api";
import MyCard from "../../components/MyCard";
import { useSelector } from "react-redux";
import { theme } from "../../themes";

export default function Category() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const cartData = useSelector((state) => state.cart.cartData);
  const navigate = useNavigate();
  useEffect(() => {
    api.product
      .getByCategory(category)
      .then((response) => setProducts(response.data.data));
  }, [category]);
  return (
    <Container>
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
        {products?.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item._id}>
            <MyCard
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              bestSeller={item.bestSeller}
              inCart={
                cartData?.find((product) => product.product_id._id === item._id)
                  ? true
                  : false
              }
              onClick={() => navigate("/" + item._id)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
