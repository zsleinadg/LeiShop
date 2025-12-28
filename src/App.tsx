
import Home from "./pages/home";
import Cart from "./pages/cart";
import Layout from "./components/Layout";
import { createBrowserRouter } from "react-router";
import Products from "./pages/products";
import NotFound from "./pages/notFound";

export const router = createBrowserRouter([
  {
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/products/:id",
        element: <Products/>
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ]
  }
])