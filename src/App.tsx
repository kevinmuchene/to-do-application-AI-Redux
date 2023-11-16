import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import ToDoListWrapper from "./components/ToDoListWrapper";
import RootLayout from "./components/RootLayout";

import TodoExtractTab from "./components/TodoExtractTab";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<ToDoListWrapper />} />
        <Route path="/add_todo" element={<TodoExtractTab />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      {/* <TestComponent /> */}
    </>
  );
}

export default App;
