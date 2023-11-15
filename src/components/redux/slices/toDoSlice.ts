import { ToDo, ToDoState } from "../../../common/interfaces/Interfaces";
import { todos } from "../../../dummydata/todolist";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { TodoStatus } from "../../../common/enums/enums";

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

    completedTodo: (state, action: PayloadAction<string>) => {

      const updatedToDos = state.toDos.map(todo => (

        todo.id === action.payload ? {...todo, status: TodoStatus.Completed} : todo
      ))
      
      state.toDos = updatedToDos;
    },

    deleteToDo: (state, action: PayloadAction<string>) => {
      
      const updatedToDos = state.toDos.map(todo => (
        todo.id === action.payload ? {...todo, status: TodoStatus.Deleted} : todo
      ))
      
      state.toDos = updatedToDos;
    },
  },
});

export const { addToDo, deleteToDo, completedTodo } = toDoSlice.actions;

export const selectTodo = (state: RootState) => state.todo.toDos;

export default toDoSlice.reducer;
