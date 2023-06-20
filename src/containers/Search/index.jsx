import { Box, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { BackToHome } from "../../components";
import { api } from "../../api";
import { BASE_URL } from "../../utils/consts";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [products, setProducts] = useState([]);
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Container>
      <BackToHome />
      <TextField
        placeholder="Search"
        sx={{
          width: "100%",
          marginBottom: 5,
          input: { color: theme.palette.primary.contrastText },
        }}
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
            borderBottom: 1,
            marginY: 5,
          }}
          onClick={() => navigate("/" + item._id)}
        >
          <Box sx={{ width: "33%", textAlign: "center" }}>
            <Box
              component="img"
              src={BASE_URL + "/" + item.image}
              sx={{
                height: 80,
                width: 80,
                borderRadius: 5,
                objectFit: "contain",
              }}
            />
          </Box>
          <Typography
            sx={{
              width: "33%",
              textAlign: "center",
              color: theme.palette.primary.contrastText,
            }}
          >
            {item.name}
          </Typography>
          <Typography
            sx={{
              width: "33%",
              textAlign: "center",
              color: theme.palette.primary.contrastText,
            }}
          >
            {item.price}
          </Typography>
        </Box>
      ))}
    </Container>
  );
}
