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
  styled,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { theme } from "../../themes";
import { useSnackbar } from "notistack";
import { UserContext } from "../../App";
import { api } from "../../api";

const ProductName = styled("div")({
  // display:'inline-block',
  // width: 50,
  overflow: "hidden",
  "::after": {
    content: `'...'`,
  },
});

export default function MyCard(props) {
  const { name, price, image, onClick, inCart } = props;
  const { enqueueSnackbar } = useSnackbar();
  const [addedToCart, setAddedToCart] = React.useState(false);
  const { loggedInUser } = React.useContext(UserContext);

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
        {/* <ProductName>{name}</ProductName> */}
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
              api.cart.remove(localStorage.getItem("loggedInUser"), props.id);
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
              api.cart.add({ user_id: loggedInUser, product_id: props.id });
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
