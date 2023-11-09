import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDo } from "../../../common/interfaces/Interfaces";
import { doneList } from "../../../dummydata/todolist";
import { RootState } from "../Store";

export interface DoneTodosState {
  doneTodos: ToDo[];
}

const initialState: DoneTodosState = {
  doneTodos: doneList,
};

export const doneToDosSlice = createSlice({
  name: "doneTodos",
  initialState,
  reducers: {
    addDoneTodos: (state, action: PayloadAction<ToDo>) => {
      state.doneTodos.unshift(action.payload);
    },
  },
});

export const { addDoneTodos } = doneToDosSlice.actions;

export const selectDoneTodos = (state: RootState) => state.doneToDos.doneTodos;

export default doneToDosSlice.reducer;
