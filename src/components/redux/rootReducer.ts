import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./slices/toDoSlice";
import deletedToDosReducer from "./slices/deleteToDosSlice";
import doneToDosReducer from "./slices/doneToDosSlice";

export const rootReducer = combineReducers({
  todo: todoReducer,
  deletedToDos: deletedToDosReducer,
  doneToDos: doneToDosReducer,
});
