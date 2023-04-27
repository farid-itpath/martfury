import { Badge, IconButton, styled } from "@mui/material";
import { Link } from "react-router-dom";
const RedirectTo = styled(Link)(({ theme }) => ({
  color: "white",
  [theme.breakpoints.down("md")]: {
    color: theme.palette.primary.main,
  },
}));

export default function MyIconButton(props) {
  const { badgeContent, icon, url } = props;
  return (
    <IconButton size="large" color="error">
      <RedirectTo to={url} sx={{ color: "white" }}>
        <Badge badgeContent={badgeContent} color="error">
          {icon}
        </Badge>
      </RedirectTo>
    </IconButton>
  );
}
