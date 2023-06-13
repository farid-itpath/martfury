import { Grid } from "@mui/material";
import MyCard from "../../components/MyCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../components";
import { fetchProducts } from "../../redux/reducers/productSlice";
import { fetchCartData } from "../../redux/reducers/cartSlice";
export default function Home() {
  const user = useSelector((state) => state.auth.user);
  const products = useSelector((state) => state.product.products);
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading] = useState(false);
  const handleOnClick = (id) => {
    navigate("/" + id);
  };
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCartData(user.token));
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Grid container spacing={2} my={2}>
        {products.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
              <MyCard
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
                onClick={() => handleOnClick(item._id)}
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
