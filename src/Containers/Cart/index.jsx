import { Box, Container, Divider, Typography } from "@mui/material";
import { TempCart } from "../../utils/data";
import { useTheme } from "@emotion/react";

export default function Cart() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box>
        {TempCart.map((item) => {
          return (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: 1
              }}
            >
              <Box
                component="img"
                src={item.image}
                sx={{ height: 100, width: "30%" }}
              ></Box>
              <Box component="div">{item.name}</Box>
              <Box component="div">$ {item.price}</Box>
            </Box>
          );
        })}
        <Box sx={{display:'flex', mt:1}}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              backgroundColor: theme.palette.primary.main,
              width: "50%",
              paddingY: 1,
              color: theme.palette.primary.contrastText,
              borderRadius: 3,
            }}
          >
            Checkout
          </Typography>
          <Typography
            variant="caption"
            component="div"
            sx={{
              width: "50%",
              paddingY: 1,
            }}
          >
            Total $ 2000
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
