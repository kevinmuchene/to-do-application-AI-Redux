import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/toDoSlice";
import deletedToDosReducer from "./slices/deleteToDosSlice";
import doneToDosReducer from "./slices/doneToDosSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    deletedToDos: deletedToDosReducer,
    doneToDos: doneToDosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
