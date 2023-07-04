import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/homePage";
import UserPage from "./pages/userPage";
import AddUserPage from "./pages/addUserpage";
import NavBarWrapper from "./components/navBarWrapper";
import UpdateUserPage from "./pages/updateUserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBarWrapper />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/users",
        element: <UserPage />,
      },
      {
        path: "/users/addUser",
        element: <AddUserPage />,
      },
      {
        path: "/users/updateUsers",
        element: <UpdateUserPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
