import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Badge,
  Box,
  Button,
  CardActionArea,
  CardActions,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { theme } from "../../themes";

export default function MyCard(props) {
  const { name, image } = props;
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image.sony}
          alt="green iguana"
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained">Buy</Button>
        <AddShoppingCartIcon color="primary" sx={{'&:hover':{
          color:theme.palette.secondary.main
        }}}/>
      </CardActions>
    </Card>
  );
}
