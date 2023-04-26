import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { Products } from "../../utils/data";
import { useTheme } from "@emotion/react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function Product() {
  const theme = useTheme();
  const [searchParams] = useSearchParams();
  const product = Products.find((item) => item.id == searchParams.get("id"));
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card>
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image={product.image}
              alt="green iguana"
              sx={{ maxHeight: 500, padding: 1, objectFit: "contain" }}
            />
          </CardActionArea>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography gutterBottom variant="h4" component="div">
                {product.name}
              </Typography>
              <Typography gutterBottom variant="body1" component="div">
                {product.description}
              </Typography>
            </Box>
            <Typography variant="h6" component="span">
              Price: $ {product.price}
            </Typography>
          </CardContent>
        </Box>
        <Divider />
        <CardActions
          sx={{ display: "flex", justifyContent: "space-around", padding: 0 }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              backgroundColor: theme.palette.primary.main,
              width: "50%",
              paddingY: 1,
              color: theme.palette.primary.contrastText,
            }}
          >
            Buy Now
          </Typography>
          <AddShoppingCartIcon
            color="primary"
            sx={{
              width: "50%",
              "&:hover": {
                color: theme.palette.secondary.main,
              },
            }}
          />
        </CardActions>
      </Card>
    </Container>
  );
}
