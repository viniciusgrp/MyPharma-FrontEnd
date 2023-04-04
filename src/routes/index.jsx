import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/home";
import { Product } from "../pages/Product/product";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
]);
