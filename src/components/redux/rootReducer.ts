import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./slices/toDoSlice";

export const rootReducer = combineReducers({
  todo: todoReducer,
});
