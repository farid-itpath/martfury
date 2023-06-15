import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { BASE_URL } from "../../utils/consts";
export default function Modal(props) {
  const { open, setOpen, data } = props;
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Order ID: {data.order?._id}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description"></DialogContentText>
        {data.orderDetails?.map((item) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginY: "10px",
              gap: "20px",
            }}
            key={item.product_id._id}
          >
            <Box
              component="img"
              src={BASE_URL + "/" + item.product_id.image}
              sx={{ height: 80, width: 80 }}
            />
            <Box>{item.product_id.name}</Box>
            <Box>{item.product_id.price}</Box>
          </Box>
        ))}
        <Typography
          component="span"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontWeight: "bold",
          }}
        >
          <p>Amount Paid</p>
          {data.orderDetails?.reduce(
            (total, item) => (total += item.product_id.price),
            0
          )}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => console.log("print invoice")}>
          Print Invoice
        </Button>
      </DialogActions>
    </Dialog>
  );
}
