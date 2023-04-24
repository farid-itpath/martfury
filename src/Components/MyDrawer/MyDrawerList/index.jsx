import LabelIcon from "@mui/icons-material/Label";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

export default function MyDrawerList(props) {
  const { title, data } = props;
  const Icon = data.icon
  return (
    <Box>
      <Typography
        variant="h6"
        color="primary"
        sx={{ textDecoration: "underline", display: "flex", justifyContent:"center", alignItems:"center"}}
        >
        
        <Icon/>
        <Box sx={{px:2}}>{title}</Box>
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
