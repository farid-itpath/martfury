import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderHistory } from "../../redux/reducers/orderSlice";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import BackToHome from "../../components/BackToHome";
import { BASE_URL } from "../../utils/consts";

export default function Orders() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const orderHistory = useSelector((state) => state.order.orderHistory);
  //   console.log("orderHistory", orderHistory[0].orderDetails[0].order_id)
  useEffect(() => {
    dispatch(fetchOrderHistory(user.token));
  }, [dispatch, user.token]);
  //   return <div>{orderHistory?.map(item=>console.log('item', item))}</div>;
  return (
    <Container>
      <BackToHome />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#aaa" }}>
              <TableCell>ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Items</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderHistory?.map((item, index) => (
              <TableRow key={item.order._id}>
                <TableCell>{item.order._id}</TableCell>
                <TableCell>{item.order.createdAt}</TableCell>
                <TableCell style={{ display: "flex", flexDirection: "column" }}>
                  {item.orderDetails.map((product) => (
                    <image
                      src={BASE_URL + "/" + product.product_id.image}
                      alt="image"
                      style={{ height: 50, width: 50 }}
                      key={product.product_id._id}
                    />
                  ))}
                  {/* {item.orderDetails.map((product) => product.product_id.image)} */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
