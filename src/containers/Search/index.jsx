import { Box, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { BackToHome } from "../../components";
import { api } from "../../api";
import { BASE_URL } from "../../utils/consts";

export default function Search() {
  const [products, setProducts] = useState([]);
  return (
    <Container>
      <BackToHome />
      <TextField
        placeholder="Search"
        sx={{ width: "100%" , marginBottom:5}}
        autoFocus
        onChange={(e) => {
          e.target.value.length === 0
            ? setProducts([])
            : api.product
                .search(e.target.value)
                .then((response) => setProducts(response.data.data.product));
        }}
      />
      {products?.map((item) => (
        <Box
          key={item._id}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            border: 1,
            borderRadius: '5px',
          }}
        >
          <Box
            component="img"
            src={BASE_URL + "/" + item.image}
            sx={{ height: 80, width: 80 }}
          />
          <Typography>{item.name}</Typography>
          <Typography>{item.price}</Typography>
        </Box>
      ))}
    </Container>
  );
}
