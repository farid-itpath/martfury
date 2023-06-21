import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderHistory } from "../../redux/reducers/orderSlice";
import {
  Box,
  CircularProgress,
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
import { useTheme } from "@emotion/react";
import { extractDateComponents } from "../../utils/helper";

export default function Orders() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const orderHistory = useSelector((state) => state.order.orderHistory);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const loading = useSelector((state) => state.order.isLoading);
  const theme = useTheme();
  useEffect(() => {
    dispatch(fetchOrderHistory(user.token));
  }, [dispatch, user.token]);
  return (
    <Container>
      <BackToHome />
      <TableContainer
        component={Paper}
        sx={{ backgroundColor: theme.palette.background.light }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: theme.palette.primary.contrastText,
                }}
              >
                ID
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.primary.contrastText,
                }}
              >
                Date
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.primary.contrastText,
                }}
              >
                Items
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.primary.contrastText,
                }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderHistory?.map((item) => (
              <TableRow key={item.order._id}>
                <TableCell
                  sx={{
                    color: theme.palette.primary.contrastText,
                  }}
                >
                  {item.order._id}
                </TableCell>
                <TableCell
                  sx={{
                    color: theme.palette.primary.contrastText,
                  }}
                >
                  {extractDateComponents(item.order.createdAt)}
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      textDecorationLine: "underline",
                      ":hover": { color: "blue" },
                      color: theme.palette.primary.contrastText,
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
      {loading && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <Modal open={showModal} setOpen={setShowModal} data={modalData} />
    </Container>
  );
}
