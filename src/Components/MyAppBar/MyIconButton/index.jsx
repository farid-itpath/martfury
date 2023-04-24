import { Badge, IconButton } from "@mui/material";

export default function MyIconButton(props) {
    const { badgeContent, icon, onClick } = props;
    return (
      <IconButton size="large" color="inherit" onClick={onClick}>
        <Badge badgeContent={badgeContent} color="error">
          {icon}
        </Badge>
      </IconButton>
    );
  }