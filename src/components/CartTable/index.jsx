import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import ItemCount from "../ItemCount";

export default function CartTable(props) {
  const { header, data } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {header.map((item, index) => (
              <TableCell key={index} component="th">
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell sx={{ display: "flex" }}>
                <Box
                  component="img"
                  src={
                    row.Product.image &&
                    "https://ecommerceserver-4zw1.onrender.com/" +
                      row.Product.image
                  }
                  sx={{ height: 80, width: 80, objectFit: "contain" }}
                />
                <Box>
                  <Typography variant="body1">{row.Product.name}</Typography>
                  <Typography variant="subtitle2">
                    $ {row.Product.price}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "red", display: "block" }}
                  >
                    Remove
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <ItemCount productId={row.product_id} />
              </TableCell>
              <TableCell>{row.qty * row.Product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
