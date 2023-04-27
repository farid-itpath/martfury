import React, { useContext } from "react";
import { AnchorElContext } from "..";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";

import MyIconButton from "../MyIconButton";
import { useNavigate } from "react-router-dom";
import { ButtonIcons } from "../../../utils/data";

export default function MyProfileMenu() {
  const { anchorEl, setAnchorEl } = useContext(AnchorElContext);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const navigate = useNavigate();

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          navigate("/profile");
          handleMenuClose();
        }}
      >
        Profile
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {ButtonIcons.map((item) => {
        return (
          <MenuItem
            key={item.id}
            onClick={() => {
              navigate(item.url)
            }}
          >
            <MyIconButton badgeContent={item.badgeContent} icon={item.icon} />
            <Typography variant="h6">{item.name.toUpperCase()}</Typography>
          </MenuItem>
        );
      })}
    </Menu>
  );

  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
      >
        <MoreIcon />
      </IconButton>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
