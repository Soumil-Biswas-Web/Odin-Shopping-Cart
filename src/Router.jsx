import { createBrowserRouter } from "react-router-dom";

import App from './App.jsx'

import Home from "./Content/Home.jsx";
import Shop from "./Content/Shop.jsx";
import Cart from "./Content/Cart.jsx";

export const router = createBrowserRouter([
    {
      path: "/Odin-Shopping-Cart/",
      element: <App />,
      children: [
        {
            index: true,
            element: <Home />,
            loader: Home.loader,
        },
        {
            path: "shop",
            element: <Shop />,
            loader: Shop.loader,
        },
        {
            path: "cart",
            element: <Cart />,
            loader: Cart.loader,
        },
      ]
    },
  ]);