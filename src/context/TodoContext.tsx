import { createContext, useState } from "react";
import { todos } from "../dummydata/todolist";
import {
  TodoContextProps,
  TodoProviderProps,
} from "../common/interfaces/ToDoInterface";

export const TodoContext = createContext<TodoContextProps>({
  listOfTodos: [],
  setListOfTodos: () => {},
});

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [listOfTodos, setListOfTodos] = useState(todos);

  return (
    <TodoContext.Provider value={{ listOfTodos, setListOfTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
