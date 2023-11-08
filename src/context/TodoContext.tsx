import { createContext, useState } from "react";
import { deletedTodos, doneList, todos } from "../dummydata/todolist";
import {
  ToDo,
  TodoContextProps,
  TodoProviderProps,
} from "../common/interfaces/Interfaces";

export const TodoContext = createContext<TodoContextProps>({
  listOfTodos: [],
  setListOfTodos: () => {},
  listOfDoneTodos: [],
  setListOfDoneTodos: () => {},
  listOfDeletedTodos: [],
  setListOfDeletedTodos: () => {},
});

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [listOfTodos, setListOfTodos] = useState<ToDo[]>(todos);
  const [listOfDoneTodos, setListOfDoneTodos] = useState<ToDo[]>(doneList);
  const [listOfDeletedTodos, setListOfDeletedTodos] =
    useState<ToDo[]>(deletedTodos);

  return (
    <TodoContext.Provider
      value={{
        listOfTodos,
        setListOfTodos,
        listOfDoneTodos,
        setListOfDoneTodos,
        listOfDeletedTodos,
        setListOfDeletedTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
