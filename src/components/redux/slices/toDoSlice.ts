import { ToDo, ToDoState } from "../../../common/interfaces/Interfaces";
import { todos } from "../../../dummydata/todolist";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

const initialState: ToDoState = {
  toDos: todos,
};

export const toDoSlice = createSlice({
  name: "todo",

  initialState,

  reducers: {
    addToDo: (state, action: PayloadAction<ToDo>) => {
      state.toDos.unshift(action.payload);
    },
    deleteToDo: (state, action: PayloadAction<string>) => {
      state.toDos = state.toDos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addToDo, deleteToDo } = toDoSlice.actions;

export const selectTodo = (state: RootState) => state.todo.toDos;

export default toDoSlice.reducer;
