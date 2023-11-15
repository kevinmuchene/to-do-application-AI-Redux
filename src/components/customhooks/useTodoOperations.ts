import { useAlert } from "./useAlert";
import { useAppDispatch } from "../redux/Hooks";
import { deletedToDoAndAddToDoneTods } from "../redux/thunks/deleteToDoAndAddToDoneTodos";
import { deleteToDoAndAddToDeleted } from "../redux/thunks/deleteToDoAndAddToDeleted";

export const useTodoOperations = () => {
  const dispatch = useAppDispatch();

  const [successAlert, setSuccessAlert] = useAlert(false);
  const [deleteAlert, setDeleteAlert] = useAlert(false);

  const deleteTodos = (id: string) => {
    dispatch(deleteToDoAndAddToDeleted(id));
    setDeleteAlert(true);
  };

  const doneTodo = (id: string) => {
    dispatch(deletedToDoAndAddToDoneTods(id));
    setSuccessAlert(true);
  };

  return {
    deleteTodos,
    doneTodo,
    successAlert,
    deleteAlert,
  };
};
