import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import MyRating from "../MyRating";
import { useTheme } from "@emotion/react";

export default function ReviewItem() {
  const theme = useTheme();
  return (
    <List>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Ali Connors"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color={theme.palette.primary.contrastText}
              >
                {
                  "I absolutely love my new [product name]! It has exceeded my expectations in every way."
                }
              </Typography>
            </React.Fragment>
          }
          sx={{ color: theme.palette.primary.contrastText }}
        />
        <MyRating value={3} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Jennifer"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color={theme.palette.primary.contrastText}
              >
                {
                  "I highly recommend [product name] to anyone looking for a reliable and high-quality solution. It's definitely worth the investment!"
                }
              </Typography>
            </React.Fragment>
          }
          sx={{ color: theme.palette.primary.contrastText }}
        />
        <MyRating value={2} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sandra Adams"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color={theme.palette.primary.contrastText}
              >
                {
                  "I am extremely satisfied with my purchase of [product name]. It has made a significant difference in my daily life and I couldn't be happier with my decision."
                }
              </Typography>
            </React.Fragment>
          }
          sx={{ color: theme.palette.primary.contrastText }}
        />
        <MyRating value={5} />
      </ListItem>
    </List>
  );
}
