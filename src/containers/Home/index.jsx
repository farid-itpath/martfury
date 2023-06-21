import { Box, Grid, Skeleton } from "@mui/material";
import MyCard from "../../components/MyCard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../components";
import { fetchProducts } from "../../redux/reducers/productSlice";
import { fetchCartData } from "../../redux/reducers/cartSlice";
export default function Home() {
  const user = useSelector((state) => state.auth.user);
  const products = useSelector((state) => state.product.products);
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productLoading = useSelector((state) => state.product.isLoading);
  const cartLoading = useSelector((state) => state.cart.isLoading);
  const handleOnClick = (id) => {
    navigate("/" + id);
  };
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCartData(user.token));
  }, [dispatch, user.token]);

  return (
    <>
      {(productLoading || cartLoading) && <Loader />}
      <Grid container spacing={2} my={2}>
        {products.length === 0
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
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
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Skeleton variant="rounded" height={36} width={64} />
                  <Skeleton variant="rounded" height={36} width={64} />
                </Box>
              </Grid>
            ))
          : products.map((item) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
                  <MyCard
                    id={item._id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    onClick={() => handleOnClick(item._id)}
                    bestSeller={item.bestSeller}
                    category={item.category}
                    inCart={
                      cartData?.find(
                        (product) => product.product_id._id === item._id
                      )
                        ? true
                        : false
                    }
                  />
                </Grid>
              );
            })}
      </Grid>
    </>
  );
}
