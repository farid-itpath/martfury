import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { Products } from "../../utils/data";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { MyRating, MyTabs } from "../../components";

export default function Product() {
  const { id } = useParams();
  const product = Products.find((item) => {
    return item.id === parseInt(id);
  });
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
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia
              sx={{ height: 200, padding: 1, objectFit: "contain" }}
              image={product.image}
              component="img"
            />
            <CardActions sx={{ padding: 0 }}>
              <Button variant="outlined" fullWidth>
                <AddShoppingCartIcon />
              </Button>
              <Button variant="contained" fullWidth>
                Buy Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="h6">{product.name}</Typography>
            <MyRating value={product.rating} />
            <Typography variant="h5" sx={{ textAlign: "left" }}>
              $ {product.price}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: 2, width: "100%" }}>
        <MyTabs description={product.description} review={product.review} />
      </Box>
    </Container>
  );
}
