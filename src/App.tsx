// import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AddToDo from "./components/AddToDo";
import ToDoListWrapper from "./components/ToDoListWrapper";
import RootLayout from "./components/RootLayout";
import { TodoProvider } from "./context/TodoContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<ToDoListWrapper />} />
        <Route path="/add_to_do" element={<AddToDo />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <TodoProvider>
      <RouterProvider router={router}></RouterProvider>
    </TodoProvider>
  );
}

export default App;
