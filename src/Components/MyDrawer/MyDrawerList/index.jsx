import LabelIcon from "@mui/icons-material/Label";
import {
  Badge,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export default function MyDrawerList(props) {
  const { title, data } = props;
  return (
    <Box>
      <Typography
        variant="h6"
        color="primary"
        sx={{
          textDecoration: "underline",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data.icon}
        <Box sx={{ px: 2 }}>{title}</Box>
      </Typography>
      <List>
        {data.list.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Typography color={"primary"}>
                  <LabelIcon />
                </Typography>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
