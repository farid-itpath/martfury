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
  Divider,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { theme } from "../../themes";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function MyCard(props) {
  const { name, price, image, onClick } = props;
  return (
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt="green iguana"
          sx={{height: 200, padding: 1, objectFit: 'contain'}}
        />
      </CardActionArea>
      <Divider/>
      <CardContent sx={{display:'flex', justifyContent: 'space-between'}} onClick={onClick}>
        <Typography variant="body1" component="div">
          {name}
        </Typography>
        <Typography variant="body1" component="span">
          $ {price}
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
