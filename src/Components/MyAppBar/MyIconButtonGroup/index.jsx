import React, { useContext } from "react";
import { Badge, Box, IconButton } from "@mui/material";

import { AnchorElContext } from "..";
import MyIconButton from "../MyIconButton";
import { ButtonIcons } from "../../../utils/data";

export default function MyIconButtonGroup() {
  const { setAnchorEl } = useContext(AnchorElContext);
  const menuId = "primary-search-account-menu";
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      {ButtonIcons.map(item=>{
        return <MyIconButton key={item.id} badgeContent={item.badgeContent} icon={item.icon} onClick={item.name == 'profile' ? handleProfileMenuOpen: null}/>
      })}
    </Box>
  );
}
