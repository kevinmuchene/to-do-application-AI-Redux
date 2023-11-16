import React, { useState, useEffect } from "react";
import { Box, Button, Container, Typography, Alert, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import ToDoItem from "./ToDoItem";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Link } from "react-router-dom";
import { DialogComponent } from "./resuable/DialogComponent";
import { ToDo } from "../common/interfaces/Interfaces";
import ChecklistIcon from "@mui/icons-material/Checklist";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useAppSelector } from "./redux/Hooks";
import { selectTodo } from "./redux/slices/toDoSlice";

import { TodoStatus } from "../common/enums/enums";
import TestComponent from "./TipsDialog";

export default function ToDoListWrapper() {
  const toDos = useAppSelector(selectTodo);
  // console.log(toDos);

  const [open, setOpen] = React.useState<boolean>(false);
  const [tipsModalOpen, setTipsModalOpen] = React.useState<boolean>(false);
  const [modalToDoList, setModalToDoList] = useState<ToDo[]>([]);
  const [doneOrDeleted, setDoneOrDeleted] = useState<string>("");
  const [activeToDos, setActiveToDos] = useState<ToDo[]>([]);
  const [tipsId, setTipsId] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    filterActiveToDos();
  }, [toDos]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleTipsModalClickOpen = (id: string) => {
    setStatus(true);
    setTipsModalOpen(true);
    setTipsId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleTipsModalClose = () => {
    setTipsModalOpen(false);
  };

  const filterActiveToDos = () => {
    const activeToDos = toDos.filter(
      (toDo) => toDo.status === TodoStatus.Active
    );

    setActiveToDos(activeToDos);
  };

  const filterCompletedToDos = () => {
    const completedToDos = toDos.filter(
      (toDo) => toDo.status === TodoStatus.Completed
    );
    setModalToDoList(completedToDos);
    setDoneOrDeleted("done");
  };

  const filterDeletedToDos = () => {
    const deletedToDos = toDos.filter(
      (toDo) => toDo.status === TodoStatus.Deleted
    );
    setModalToDoList(deletedToDos);
    setDoneOrDeleted("deleted");
  };

  return (
    <Container sx={{ marginTop: "2em" }}>
      <DialogComponent
        open={open}
        handleClose={handleClose}
        modalToDoList={modalToDoList}
        doneOrDeleted={doneOrDeleted}
      />
      {status && (
        <TestComponent
          tipId={tipsId}
          open={tipsModalOpen}
          handleClose={handleTipsModalClose}
        />
      )}
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
                    filterCompletedToDos();
                  }}
                  startIcon={<ChecklistIcon />}
                >
                  Done ToDo's
                </Button>
              </Grid>
              <Grid item>
                <Link to="/add_todo">
                  <Button
                    variant="outlined"
                    color="warning"
                    sx={{ marginBottom: "1em" }}
                    startIcon={<AddIcon />}
                  >
                    Add ToDo | Meetings To-Do
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
                    filterDeletedToDos();
                  }}
                  startIcon={<DeleteForeverIcon />}
                >
                  Deleted ToDo's
                </Button>
              </Grid>
            </Grid>

            {activeToDos.length !== 0 ? (
              activeToDos.map((todo, index) => (
                <ToDoItem
                  key={index}
                  todo={todo}
                  handleTipsModalClickOpen={handleTipsModalClickOpen}
                />
              ))
            ) : (
              <Alert variant="filled" severity="warning">
                You Don't Have Any ToDos.
              </Alert>
            )}
          </Container>
        </Paper>
      </Box>
    </Container>
  );
}
