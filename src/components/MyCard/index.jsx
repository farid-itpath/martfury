import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  CardActionArea,
  CardActions,
  Divider,
  useTheme,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../../redux/reducers/cartSlice";
import { BASE_URL } from "../../utils/consts";
import { api } from "../../api";
import { showSuccess } from "../../utils/helper";
import { useEffect, useState } from "react";
import MyButton from "../MyButton";
import DescriptionIcon from "@mui/icons-material/Description";

export default function MyCard(props) {
  const { name, price, image, onClick, inCart, bestSeller } = props;
  const theme = useTheme();
  const [addedToCart, setAddedToCart] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setAddedToCart(inCart);
  }, [inCart]);

  return (
    <Card sx={{ backgroundColor: theme.palette.background.light }}>
      <CardActionArea>
        {bestSeller && (
          <Typography
            component="span"
            sx={{
              backgroundColor: theme.palette.error.main,
              color: "white",
              borderBottomRightRadius: 10,
              position: "absolute",
              top: 10,
              paddingX: 2,
            }}
          >
            Best Seller
          </Typography>
        )}
        <CardMedia
          component="img"
          image={BASE_URL + "/" + image}
          sx={{ height: 200, objectFit: "contain", cursor: "pointer" }}
        />
      </CardActionArea>
      <Divider />
      <CardContent
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "context-menu",
        }}
        onClick={onClick}
      >
        <Box sx={{ flexDirection: "column" }}>
          <Typography
            variant="subtitle2"
            component="div"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            component="span"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            $ {price}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-around"  }}>
        <MyButton
          title="View"
          type="primary"
          endIcon={<DescriptionIcon />}
          onClick={onClick}
        />
        {addedToCart ? (
          <MyButton
            title="remove"
            type="primary"
            status="danger"
            endIcon={<RemoveShoppingCartIcon />}
            onClick={() => {
              api.cart
                .remove({
                  product_id: props.id,
                  token: user.token,
                })
                .then((response) => {
                  showSuccess(response.data.message);
                  dispatch(fetchCartData(user.token));
                });
              setAddedToCart(!addedToCart);
            }}
          />
        ) : (
          <MyButton
            title="Add"
            type="primary"
            endIcon={<AddShoppingCartIcon />}
            onClick={() => {
              api.cart
                .add({
                  product_id: props.id,
                  token: user.token,
                })
                .then((response) => {
                  showSuccess(response.data.message);
                  dispatch(fetchCartData(user.token));
                });
              setAddedToCart(!addedToCart);
            }}
          />
        )}
      </CardActions>
    </Card>
  );
}
