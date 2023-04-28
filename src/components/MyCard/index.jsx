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
export default function MyCard(props) {
  const { name, price, image, onClick } = props;
  const { enqueueSnackbar } = useSnackbar();
  const [addedToCart, setAddedToCart] = React.useState(false);
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          sx={{ height: 200, padding: 1, objectFit: "contain" }}
        />
      </CardActionArea>
      <Divider />
      <CardContent
        sx={{ display: "flex", justifyContent: "space-between" }}
        onClick={onClick}
      >
        <Typography variant="body1" component="div">
          {name}
        </Typography>
        <Typography variant="body1" component="span">
          $ {price}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained">Buy</Button>
        {addedToCart ? (
          <IconButton
            onClick={() => {
              enqueueSnackbar("Item removed from cart.", { variant: "error" });
              console.log("clicked");
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
              console.log("clicked");
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
