import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./router/routes";

const App = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
