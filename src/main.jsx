import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import AddProduct from "./Pages/AddProduct.jsx";
import Login from "./Pages/Login.jsx";
import Brand from "./Components/Brand.jsx";
import Details from "./Components/Details.jsx";
import Update from "./Components/Update.jsx";
import MyCart from "./Components/MyCart.jsx";
import Register from "./Components/Register.jsx";
import AuthProvider from "./Components/AuthProvider.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import CarDetails from "./Components/carDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://assignment10-server-peach.vercel.app/info"),
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
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch("https://assignment10-server-peach.vercel.app/car"),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment10-server-peach.vercel.app/car/${params.id}`
          ),
      },
      {
        path: "/carDetails/:id",
        element: (
          <PrivateRoute>
            <CarDetails></CarDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment10-server-peach.vercel.app/car/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
