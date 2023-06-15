import React from "react";
import { Box } from "@mui/material";

import { ButtonIcons } from "../../../utils/data";
import MyIconButton from "../MyIconButton";

export default function MyIconButtonGroup(props) {
  const { cartProductsCount } = props;
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      {ButtonIcons.map((item) => {
        return (
          <MyIconButton
            key={item.id}
            badgeContent={item.name === "cart" ? cartProductsCount : 0}
            icon={item.icon}
            url={item.url}
          />
        );
      })}
    </Box>
  );
}
