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
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData, removeFromCart } from "../../redux/reducers/cartSlice";
import { enqueueSnackbar } from "notistack";
import { BASE_URL } from "../../utils/consts";

export default function CartTable(props) {
  const { header, data } = props;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
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
              key={row.product_id._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell sx={{ display: "flex" }}>
                <Box
                  component="img"
                  src={
                    row.product_id.image &&
                    BASE_URL + "/" + row.product_id.image
                  }
                  sx={{ height: 80, width: 80, objectFit: "contain" }}
                />
                <Box>
                  <Typography variant="body1">{row.product_id.name}</Typography>
                  <Typography variant="subtitle2">
                    $ {row.product_id.price}
                  </Typography>
                  <Typography
                    onClick={() =>
                      dispatch(
                        removeFromCart({
                          product_id: row.product_id._id,
                          token: user.token,
                        })
                      ).then((response) =>
                        dispatch(
                          fetchCartData(user.token),
                          enqueueSnackbar(response.payload.data.message, {
                            variant: "error",
                          })
                        )
                      )
                    }
                    variant="caption"
                    sx={{ color: "red", display: "block" }}
                  >
                    Remove
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <ItemCount productId={row.product_id._id} />
              </TableCell>
              <TableCell>{row.qty * row.product_id.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
