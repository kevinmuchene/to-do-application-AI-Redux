import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { useAlert } from "./useAlert";

export const useTodoOperations = () => {
  const {
    listOfTodos,
    setListOfTodos,
    setListOfDoneTodos,
    setListOfDeletedTodos,
  } = useContext(TodoContext);

  const [successAlert, setSuccessAlert] = useAlert(false);
  const [deleteAlert, setDeleteAlert] = useAlert(false);

  const deleteTodo = (id: string) => {
    const updatedTodos = listOfTodos.filter((todo) => todo.id !== id);
    listOfDeletedTodos(id);
    setListOfTodos(updatedTodos);
    setDeleteAlert(true);
  };

  const doneTodo = (id: string) => {
    const updatedTodos = listOfTodos.filter((todo) => todo.id !== id);
    setListOfTodos(updatedTodos);
    listOfDoneTodos(id);
    setSuccessAlert(true);
  };

  const listOfDoneTodos = (id: string) => {
    const doneToDo = listOfTodos.filter((todo) => todo.id === id);

    setListOfDoneTodos((prevTodo) => [...prevTodo, ...doneToDo]);
  };

  const listOfDeletedTodos = (id: string) => {
    const deletedToDo = listOfTodos.filter((todo) => todo.id === id);

    setListOfDeletedTodos((prevTodo) => [...prevTodo, ...deletedToDo]);
  };

  return {
    deleteTodo,
    doneTodo,
    successAlert,
    deleteAlert,
  };
};
