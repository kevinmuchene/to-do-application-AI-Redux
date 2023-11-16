import { useAlert } from "./useAlert";
import { useAppDispatch } from "../redux/Hooks";
import {  completedTodo, deleteToDo } from "../redux/slices/toDoSlice";

export const useTodoOperations = () => {
  const dispatch = useAppDispatch();

  const [successAlert, setSuccessAlert] = useAlert(false);
  const [deleteAlert, setDeleteAlert] = useAlert(false);

  const deleteTodos = (id: string) => {
    dispatch(deleteToDo(id));
    setDeleteAlert(true);
  };

  const completedTodos = (id: string) => {
    dispatch(completedTodo(id));
    setSuccessAlert(true);
  };

  // const tipsByAI = (id: string) => {
  //   dispatch(addAITip(id))
  // }

  return {
    deleteTodos,
    completedTodos,
    // tipsByAI,
    successAlert,
    deleteAlert,
  };
};
