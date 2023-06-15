import React, { useEffect, useState } from "react";
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
  Typography,
} from "@mui/material";
import BackToHome from "../../components/BackToHome";
import { Modal } from "../../components";

export default function Orders() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const orderHistory = useSelector((state) => state.order.orderHistory);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  useEffect(() => {
    dispatch(fetchOrderHistory(user.token));
  }, [dispatch, user.token]);
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
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderHistory?.map((item, index) => (
              <TableRow key={item.order._id}>
                <TableCell>{item.order._id}</TableCell>
                <TableCell>{item.order.createdAt}</TableCell>
                {/* <TableCell style={{ display: "flex", flexDirection: "column" }}>
                  {item.orderDetails.map((product) => (
                    <Box
                      component="img"
                      src={BASE_URL + "/" + product.product_id.image}
                      alt="image"
                      style={{ height: 50, width: 50 }}
                      key={product.product_id._id}
                    />
                  ))}
                </TableCell> */}
                <TableCell>
                  <Typography
                    sx={{
                      textDecorationLine: "underline",
                      ":hover": { color: "blue" },
                    }}
                    onClick={() => {
                      setShowModal(true);
                      setModalData(item);
                    }}
                  >
                    Show Details
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    component="span"
                    sx={{
                      backgroundColor: "lightgreen",
                      padding: "3px",
                      borderRadius: "5px",
                    }}
                  >
                    Order Placed
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={showModal} setOpen={setShowModal} data={modalData} />
    </Container>
  );
}
