import React, { useState, useContext, useEffect } from "react";
import { List, Grid, Stack, Alert } from "@mui/material";
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
import { TodoContext } from "../context/TodoContext";

export default function ToDoItem({ todo }) {
  const { id, dateCreated, title, description } = todo;
  const { listOfTodos, setListOfTodos } = useContext(TodoContext);
  const [successAlert, setSuccessAlert] = useState<boolean>(false);
  const [deleteSuccessAlert, setDeleteSuccessAlert] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessAlert(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [successAlert]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDeleteSuccessAlert(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [deleteSuccessAlert]);

  const deleteTodo = (id: string) => {
    let myTodos = listOfTodos.filter((todo) => todo.id !== id);
    updateToDo(myTodos);
    // console.log(myTodos);
    setDeleteSuccessAlert(true);
  };

  const doneTodo = (id: string) => {
    let myTodos = listOfTodos.filter((todo) => todo.id !== id);
    updateToDo(myTodos);
    setSuccessAlert(true);
    // console.log(myTodos);
  };

  const updateToDo = (newTodo: ToDo) => {
    setListOfTodos(() => newTodo);
  };

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {successAlert && (
        <Alert severity="success" variant="filled">
          Thats right, awesome. Get it done!!
        </Alert>
      )}
      {deleteSuccessAlert && (
        <Alert severity="warning" variant="filled">
          Hope you got it done!! No need to procastinate :)
        </Alert>
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

function MyComponent({ date, deleteTodo, id, doneTodo }) {
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
}
