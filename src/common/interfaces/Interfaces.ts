export interface ToDo {
  id: string;
  description: string;
  dateCreated: string;
  title: string;
  status: "ACTIVE"|"COMPELETED" | "DELETED";
}

export interface AlertProps {
  severity: "error" | "warning" | "info" | "success";
  variant: "filled" | "outlined" | "standard";
  message: string;
}

export interface MyComponentProps {
  date: string;
  deleteTodo: (id: string) => void;
  id: string;
  completedTodos: (id: string) => void;
}

export interface DialogComponentProps {
  open: boolean;
  handleClose: () => void;
  modalToDoList: ToDo[];
  doneOrDeleted: string;
}

export interface DeletedToDoState {
  deletedToDos: ToDo[];
}

export interface DoneTodosState {
  doneTodos: ToDo[];
}

export interface ToDoState {
  toDos: ToDo[];
}
