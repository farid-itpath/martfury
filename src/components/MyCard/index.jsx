import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
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
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  fetchCartData,
  removeFromCart,
} from "../../redux/reducers/cartSlice";
import { BASE_URL } from "../../utils/consts";

export default function MyCard(props) {
  const { name, price, image, onClick, inCart, bestSeller } = props;
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
          sx={{ height: 200, padding: 1, objectFit: "contain" }}
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
        }}
        onClick={onClick}
      >
        <Box sx={{ flexDirection: "column" }}>
          <Typography variant="subtitle2" component="div">
            {name}
          </Typography>
          <Typography variant="subtitle1" component="span">
            $ {price}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" onClick={onClick}>
          Buy
        </Button>
        {addedToCart ? (
          <IconButton
            onClick={() => {
              dispatch(
                removeFromCart({
                  product_id: props.id,
                  token: user.token,
                })
              ).then((response) => {
                enqueueSnackbar(response.payload.data.message, {
                  variant: "error",
                });
                dispatch(fetchCartData(user.token));
              });
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
              dispatch(
                addToCart({
                  product_id: props.id,
                  token: user.token,
                })
              ).then((response) => {
                dispatch(fetchCartData(user.token));
                enqueueSnackbar(response.payload.data.message, {
                  variant: "success",
                });
              });
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
