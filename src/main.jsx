import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Global } from "./globalStyle";
import { JobProvider } from "./context/productsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JobProvider>
      <Global />
      <RouterProvider router={router} />
    </JobProvider>
  </React.StrictMode>
);
