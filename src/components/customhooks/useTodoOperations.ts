import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { useAlert } from "./useAlert";

export const useTodoOperations = () => {
  const { listOfTodos, setListOfTodos } = useContext(TodoContext);

  const [successAlert, setSuccessAlert] = useAlert(false);
  const [deleteAlert, setDeleteAlert] = useAlert(false);

  const deleteTodo = (id: string) => {
    const updatedTodos = listOfTodos.filter((todo) => todo.id !== id);
    setListOfTodos(updatedTodos);
    setDeleteAlert(true);
  };

  const doneTodo = (id: string) => {
    const updatedTodos = listOfTodos.filter((todo) => todo.id !== id);
    setListOfTodos(updatedTodos);
    setSuccessAlert(true);
  };

  return {
    deleteTodo,
    doneTodo,
    successAlert,
    deleteAlert,
  };
};
