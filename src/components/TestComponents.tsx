import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "./redux/Hooks";
import { selectTodo, addToDo } from "./redux/slices/toDoSlice";
import { deleteToDoAndAddToDeleted } from "./redux/thunks/deleteToDoAndAddToDeleted";
import { selectDeletedTodos } from "./redux/slices/deleteToDosSlice";
import { deletedToDoAndAddToDoneTods } from "./redux/thunks/deleteToDoAndAddToDoneTodos";
import { selectDoneTodos } from "./redux/slices/doneToDosSlice";

export function TestComponents() {
  const toDos = useAppSelector(selectTodo);
  const deleteToDos = useAppSelector(selectDeletedTodos);
  const doneToDos = useAppSelector(selectDoneTodos);
  const dispatch = useAppDispatch();

  console.log(toDos);
  console.log(deleteToDos);
  console.log(doneToDos);

  const addTodoFunc = () => {
    const todo = {
      id: "32sdfi93sfd93rf",
      title: "Clean my room",
      description: "The room should always be clean",
      dateCreated: "11-02-2023",
    };

    return todo;
  };

  return (
    <>
      <h1>Hello from Mars!</h1>

      <Button onClick={() => dispatch(addToDo(addTodoFunc()))}>
        {" "}
        Add Todo
      </Button>
      <Button
        onClick={() =>
          // dispatch(deleteToDo("2c5f16a9-ac2b-4f89-9f92-efef78f5a642"))
          dispatch(
            deleteToDoAndAddToDeleted("2c5f16a9-ac2b-4f89-9f92-efef78f5a642")
          )
        }
      >
        {" "}
        Delete Todo
      </Button>

      <Button
        onClick={() =>
          dispatch(
            deletedToDoAndAddToDoneTods("8c5f16a9-ac2b-4f89-9f92-efef78f5a642")
          )
        }
      >
        Add done tods
      </Button>
    </>
  );
}
