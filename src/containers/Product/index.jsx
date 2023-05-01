import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { Products } from "../../utils/data";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import {
  BackToHome,
  ItemCount,
  MyRating,
  MyTabs,
  ReviewItem,
} from "../../components";
import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { enqueueSnackbar } from "notistack";

export default function Product() {
  const [count, setCount] = React.useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const { id } = useParams();
  const product = Products.find((item) => {
    return item.id === parseInt(id);
  });
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
              image={product.image}
              component="img"
            />
            {/* <CardActions sx={{ padding: 0 }}>
              <Button variant="outlined" fullWidth>
                <AddShoppingCartIcon />
              </Button>
              <Button variant="contained" fullWidth>
                Buy Now
              </Button>
            </CardActions> */}
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
                  disabled={count > 9 ? true : false}
                  onClick={() => {
                    enqueueSnackbar("Item added to cart!", {
                      variant: "success",
                    });
                    setAddedToCart(!addedToCart);
                  }}
                >
                  <AddShoppingCartIcon />
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  color="error"
                  disabled={count > 9 ? true : false}
                  onClick={() => {
                    enqueueSnackbar("Item removed from cart!", {
                      variant: "error",
                    });
                    setAddedToCart(!addedToCart);
                  }}
                >
                  <RemoveShoppingCartIcon />
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
