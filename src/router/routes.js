import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import Main from "../Layout/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
]);

export default routes;
