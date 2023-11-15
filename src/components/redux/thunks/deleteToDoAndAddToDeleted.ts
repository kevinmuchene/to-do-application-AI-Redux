import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { deleteToDo } from "../slices/toDoSlice";
import { addDeleteToDo } from "../slices/deleteToDosSlice";

export const deleteToDoAndAddToDeleted = createAsyncThunk(
  "todos/deleteToDoAndAddToDeleted",
  async (todoId: string, { dispatch, getState }) => {
    const state: RootState = getState();

    const todoToDelete = state.todo.toDos.find((todo) => todo.id === todoId);

    if (todoToDelete) {
      dispatch(deleteToDo(todoId));
      dispatch(addDeleteToDo(todoToDelete));
    }
  }
);
