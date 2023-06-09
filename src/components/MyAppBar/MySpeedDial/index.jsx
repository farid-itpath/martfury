import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import ProfilePhoto from "./../../../assets/images/myphoto.jpeg";
import { useNavigate } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useDispatch } from "react-redux";
import { createUser } from "../../../redux/reducers/authSlice";

const actions = [
  { icon: <PersonIcon />, name: "Profile", url: "profile" },
  { icon: <ShoppingBasketIcon />, name: "orders", url: "orders" },
  { icon: <LogoutIcon />, name: "Logout", url: "login" },
];

export default function MySpeedDial() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Box sx={{ transform: "translateX(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "fixed", top: 16, right: 16 }}
        icon={
          <Box
            component="img"
            src={ProfilePhoto}
            sx={{ height: "100%", borderRadius: 50 }}
          />
        }
        direction="down"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              navigate(action.url);
              action.name === "Logout" &&
                (() => {
                  dispatch(createUser(null));
                  localStorage.clear();
                })();
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
