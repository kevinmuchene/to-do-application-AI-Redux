import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { deleteToDo } from "../slices/toDoSlice";
import { addDoneTodos } from "../slices/doneToDosSlice";

export const deletedToDoAndAddToDoneTods = createAsyncThunk(
  "todos/deletedToDoAndAddToDoneTodos",

  async (todoId: string, { dispatch, getState }) => {
    const state: RootState = getState();

    const todoToDelete = state.todo.toDos.find((todo) => todo.id === todoId);

    if (todoToDelete) {
      dispatch(deleteToDo(todoId));
      dispatch(addDoneTodos(todoToDelete));
    }
  }
);
