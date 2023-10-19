import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home.jsx';
import AddProduct from './Pages/AddProduct.jsx';
import MyCart from './Pages/MyCart.jsx';
import Login from './Pages/Login.jsx';
import Brand from './Components/Brand.jsx';
import Details from './Components/Details.jsx';
import Update from './Components/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
        loader: () => fetch("http://localhost:4000/car"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/brand",
        element: <Brand></Brand>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch("http://localhost:4000/car"),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/car/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
