import { DeletedToDoState, ToDo } from "../../../common/interfaces/Interfaces";
import { deletedTodos } from "../../../dummydata/todolist";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

const initialState: DeletedToDoState = {
  deletedToDos: deletedTodos,
};

export const deleteToDoSlice = createSlice({
  name: "deletedTodos",
  initialState,
  reducers: {
    addDeleteToDo: (state, action: PayloadAction<ToDo>) => {
      state.deletedToDos.unshift(action.payload);
    },
  },
});

export const { addDeleteToDo } = deleteToDoSlice.actions;
export const selectDeletedTodos = (state: RootState) =>
  state.deletedToDos.deletedToDos;

export default deleteToDoSlice.reducer;
