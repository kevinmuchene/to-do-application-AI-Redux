import React from "react";
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
import { MyComponentProps, ToDo } from "../common/interfaces/Interfaces";
import { useTodoOperations } from "./customhooks/useTodoOperations";
import { CustomAlert } from "./resuable/CustomAlert";

export default function ToDoItem({ todo }: { todo: ToDo }) {
  const { id, dateCreated, title, description } = todo;

  const { deleteTodo, doneTodo, successAlert, deleteAlert } =
    useTodoOperations();

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {successAlert && (
        <CustomAlert
          severity="success"
          variant="filled"
          message={"Thats right, awesome. Get it done!!"}
        />
      )}
      {deleteAlert && (
        <CustomAlert
          severity="warning"
          variant="filled"
          message={"Hope you got it done!! No need to procastinate :)"}
        />
      )}

      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <Grid container justifyContent="flex-end" alignItems={"flex-end"}>
            <Grid item xs={12} sm="auto" alignSelf="flex-end">
              <MyComponent
                date={dateCreated}
                deleteTodo={deleteTodo}
                id={id}
                doneTodo={doneTodo}
              />
            </Grid>
          </Grid>
        }
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" />
        </ListItemAvatar>
        <ListItemText
          primary={<Typography color={"secondary"}>{title}</Typography>}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {description}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />
    </List>
  );
}

const MyComponent: React.FC<MyComponentProps> = ({
  date,
  deleteTodo,
  id,
  doneTodo,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile) {
    // For mobile devices, stack the icons vertically
    return (
      <Stack spacing={1} alignItems="center">
        <IconButton edge="end" aria-label="calendar">
          <CalendarMonthIcon sx={{ color: "purple" }} />
        </IconButton>
        <Typography variant="caption">{date}</Typography>
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
            <Typography variant="caption">{date}</Typography>
          </Stack>
        </Grid>
        <Grid item>
          <IconButton edge="end" aria-label="done" onClick={() => doneTodo(id)}>
            <DoneIcon sx={{ color: "green" }} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            edge="end"
            aria-label="cancel"
            onClick={() => deleteTodo(id)}
          >
            <CancelIcon sx={{ color: "red" }} />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
};
