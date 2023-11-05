import { ReactNode } from "react";

export interface ToDo {
  id: string;
  description: string;
  dateCreated: string;
  title: string;
}

export interface TodoContextProps {
  listOfTodos: ToDo[];
  setListOfTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

export interface TodoProviderProps {
  children: ReactNode; // This is the type for children
}
