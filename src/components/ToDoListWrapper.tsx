import React from "react";

import { Box, Button, Container, Typography, Alert, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import ToDoItem from "./ToDoItem";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { DialogComponent } from "./resuable/DialogComponent";
import { ToDo } from "../common/interfaces/Interfaces";
import ChecklistIcon from "@mui/icons-material/Checklist";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function ToDoListWrapper() {
  const { listOfTodos, listOfDoneTodos, listOfDeletedTodos } =
    useContext(TodoContext);

  const [open, setOpen] = React.useState<boolean>(false);
  const [modalToDoList, setModalToDoList] = React.useState<ToDo[]>([]);
  const [doneOrDeleted, setDoneOrDeleted] = React.useState<string>("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setModalDoneTodos = () => {
    setModalToDoList(listOfDoneTodos);
    setDoneOrDeleted("done");
  };

  const setModalDeletedTodos = () => {
    setModalToDoList(listOfDeletedTodos);
    setDoneOrDeleted("deleted");
  };

  // console.log(listOfDoneTodos);
  // console.log(listOfDeletedTodos);

  return (
    <Container sx={{ marginTop: "2em" }}>
      <DialogComponent
        open={open}
        handleClose={handleClose}
        modalToDoList={modalToDoList}
        doneOrDeleted={doneOrDeleted}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          textAlign: "center",
          margin: "1em",
        }}
      >
        <div>
          <Typography component={"span"}>
            <DoneAllIcon sx={{ color: "purple" }} />
          </Typography>
          <Typography
            color="purple"
            align="center"
            variant="h5"
            component={"span"}
          >
            Get-It-Done
          </Typography>
        </div>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "100%",
            maxHeight: "80vh",
            overflow: "auto",
            backgroundColor: "#ACE1AF",

            overflowY: "scroll", // Activate scrollbar for overflow
            "&::-webkit-scrollbar": {
              width: "10px", // Width of the scrollbar
            },
            "&::-webkit-scrollbar-track": {
              boxShadow: "inset 0 0 5px grey", // Styling for the track
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "purple", // Color of the scrollbar thumb
              borderRadius: "10px",
              "&:hover": {
                background: "#b5651d", // Color of the thumb on hover
              },
            },
          },
        }}
      >
        <Paper elevation={5}>
          <Container sx={{ marginTop: "2em", marginBottom: "2em" }}>
            <Grid
              container
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Grid item>
                <Button
                  variant="outlined"
                  color="success"
                  sx={{ marginBottom: "1em" }}
                  onClick={() => {
                    handleClickOpen();
                    setModalDoneTodos();
                  }}
                  startIcon={<ChecklistIcon />}
                >
                  Done ToDo's
                </Button>
              </Grid>
              <Grid item>
                <Link to="/add_to_do">
                  <Button
                    variant="outlined"
                    color="warning"
                    sx={{ marginBottom: "1em" }}
                    startIcon={<AddIcon />}
                  >
                    Add ToDo
                  </Button>
                </Link>
              </Grid>

              <Grid item>
                <Button
                  variant="outlined"
                  color="error"
                  sx={{ marginBottom: "1em" }}
                  onClick={() => {
                    handleClickOpen();
                    setModalDeletedTodos();
                  }}
                  startIcon={<DeleteForeverIcon />}
                >
                  Deleted ToDo's
                </Button>
              </Grid>
            </Grid>

            {listOfTodos.length !== 0 ? (
              listOfTodos.map((todo, index) => (
                <ToDoItem key={index} todo={todo} />
              ))
            ) : (
              <Alert variant="filled" severity="warning">
                You Don't Have Any ToDos, Add - To Get Them Done!! Or View
                Completed | Deleted
              </Alert>
            )}
          </Container>
        </Paper>
      </Box>
    </Container>
  );
}
