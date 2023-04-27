import React, { useContext } from "react";
import { Box } from "@mui/material";

import { AnchorElContext } from "..";
import MyIconButton from "../MyIconButton";
import { ButtonIcons } from "../../../utils/data";

export default function MyIconButtonGroup() {
  const { setAnchorEl } = useContext(AnchorElContext);
  const menuId = "primary-search-account-menu";
  return (
    <Box sx={{ display: { xs: "none", md: "flex" }}}>
      {ButtonIcons.map((item) => {
        return (
          <MyIconButton
            key={item.id}
            badgeContent={item.badgeContent}
            icon={item.icon}
            url={item.url}
          />
        );
      })}
    </Box>
  );
}
