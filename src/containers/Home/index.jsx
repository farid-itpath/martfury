import { Grid } from "@mui/material";
import { Products } from "../../utils/data";
import MyCard from "../../components/MyCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../api";

export default function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState([]);
  const handleOnClick = (id) => {
    navigate("/" + id);
  };

  useEffect(() => {
    api.product
      .get()
      .then((response) => {
        setProducts(response.data.productlist);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    api.cart
      .get(localStorage.getItem("loggedInUser"))
      .then((response) => setCartData(response.data.usercart))
      .catch((e) => console.log("Server Error ---- ", e));
  }, []);

  return (
    <>
      <Grid container spacing={2} my={2}>
        {products.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <MyCard
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                onClick={() => handleOnClick(item.id)}
                inCart={
                  cartData.find((product) => product.product_id === item.id)
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
