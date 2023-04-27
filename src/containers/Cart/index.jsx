import { Box, Button, Container, Typography } from "@mui/material";
import { TempCart } from "../../utils/data";

export default function Cart() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box>
        {TempCart.map((item) => {
          return (
            <Box key={item.id} sx={{ display: "flex", borderBottom: 1 }}>
              <Box
                component="img"
                src={item.image}
                sx={{ height: 100, width: "30%" }}
              />
              <Box
                sx={{
                  width: "70%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    flexDirection: "column",
                  }}
                >
                  <Typography>{item.name}</Typography>
                  <Typography>Rating: 5</Typography>
                </Box>
                <Box>
                  <Box>Quantity: 4</Box>
                  <Box>Price: $ {item.price}</Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box width={"50%"}>
        <Typography variant="h5" sx={{ mb: 5 }}>
          Bill
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: "30vh",
          }}
        >
          <Box>
            <Typography variant="body1">Total Amount</Typography>
            <Typography variant="body1">Discount Applied</Typography>
            <Typography variant="h6">Payable Amount</Typography>
          </Box>
          <Box>
            <Typography variant="body1">$ 2000</Typography>
            <Typography variant="body1" color={"error"}>
              - $ 400
            </Typography>
            <Typography variant="h6">$ 1600</Typography>
          </Box>
        </Box>
        <Button variant="contained" sx={{ width: "100%" }}>
          Checkout
        </Button>
      </Box>
    </Container>
  );
}
