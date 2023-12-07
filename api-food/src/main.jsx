import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./components/style.css";
import Meal from "./components/Meal";

// //Establecer rutas de acceso
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Meal />,
  },
]);

//router provider espera recibir las rutas de acceso
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
