import * as React from "react";
import { List, Grid, Stack } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from "@mui/icons-material/Done";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ToDoItem() {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <Grid container justifyContent="flex-end" alignItems={"flex-end"}>
            <Grid item xs={12} sm="auto" alignSelf="flex-end">
              <MyComponent />
            </Grid>
          </Grid>
        }
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography color={"secondary"}>Brunch this weekend?</Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                " — I'll be in your neighborhood doing errands this…—
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {" — Do you have Paris recommendations? Have you ever…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {" — Do you have Paris recommendations? Have you ever…"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

function MyComponent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile) {
    // For mobile devices, stack the icons vertically
    return (
      <Stack spacing={1} alignItems="center">
        <IconButton edge="end" aria-label="calendar">
          <CalendarMonthIcon sx={{ color: "purple" }} />
        </IconButton>
        <Typography variant="caption">06/21/2023</Typography>
        <IconButton edge="end" aria-label="done">
          <DoneIcon sx={{ color: "green" }} />
        </IconButton>
        <IconButton edge="end" aria-label="cancel">
          <CancelIcon sx={{ color: "red" }} />
        </IconButton>
      </Stack>
    );
  } else {
    // For larger devices, use the original layout
    return (
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Stack alignItems="center" direction="row" spacing={1}>
            <IconButton edge="end" aria-label="calendar">
              <CalendarMonthIcon sx={{ color: "purple" }} />
            </IconButton>
            <Typography variant="caption">06/21/2023</Typography>
          </Stack>
        </Grid>
        <Grid item>
          <IconButton edge="end" aria-label="done">
            <DoneIcon sx={{ color: "green" }} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton edge="end" aria-label="cancel">
            <CancelIcon sx={{ color: "red" }} />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
}
