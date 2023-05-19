import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Divider,
  IconButton,
  Tooltip,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { theme } from "../../themes";
import { useSnackbar } from "notistack";
import { api } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/reducers/cartSlice";

export default function MyCard(props) {
  const { name, price, image, onClick, inCart } = props;
  const { enqueueSnackbar } = useSnackbar();
  const [addedToCart, setAddedToCart] = React.useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setAddedToCart(inCart);
  }, [inCart]);

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={"https://ecommerceserver-4zw1.onrender.com/" + image}
          sx={{ height: 200, padding: 1, objectFit: "contain" }}
        />
      </CardActionArea>
      <Divider />
      <CardContent
        sx={{ whiteSpace: "nowrap", overflow: "hidden" }}
        onClick={onClick}
      >
        <Typography variant="subtitle2" component="div">
          {name}
        </Typography>
        <Typography variant="subtitle1" component="span">
          $ {price}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained">Buy</Button>
        {addedToCart ? (
          <IconButton
            onClick={() => {
              enqueueSnackbar("Item removed from cart.", { variant: "error" });
              // api.cart.remove(user.user.id, props.id, user.token);
              dispatch(
                removeFromCart({
                  user_id: user.user.id,
                  product_id: props.id,
                  token: user.token,
                })
              );
              setAddedToCart(!addedToCart);
            }}
          >
            <Tooltip title="Remove from Cart">
              <RemoveShoppingCartIcon
                color="error"
                sx={{
                  "&:hover": {
                    color: theme.palette.secondary.main,
                  },
                }}
              />
            </Tooltip>
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              enqueueSnackbar("Item added to cart.", { variant: "success" });
              dispatch(
                addToCart({
                  user_id: user.user.id,
                  product_id: props.id,
                  token: user.token,
                })
              );
              setAddedToCart(!addedToCart);
            }}
          >
            <Tooltip title="Add to Cart">
              <AddShoppingCartIcon
                color="primary"
                sx={{
                  "&:hover": {
                    color: theme.palette.secondary.main,
                  },
                }}
              />
            </Tooltip>
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
