/* eslint-disable react/jsx-pascal-case */
import React from "react";
// npm i react-router-dom
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LocationProvider } from "./context/LocationContext";
import Home from "./pages/home/home";
import Details from "./pages/details/details";
import NotFound from "./pages/notFound/notFound";
import LayoutHome from "./layout/LayoutHome";
import Layout_Auth from "./layout/auth/Layout_Auth";
import Login from "./pages/auth/login/login";
import Register from "./pages/auth/register/register";
import Layout_Admin from "./layout/admin/Layout_Admin";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <LocationProvider>
          <LayoutHome />
        </LocationProvider>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/details/:id",
          element: <Details />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    {
      path: "/auth",
      element: <Layout_Auth />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },

    // TODO:
    /*
      create admin page, admin list, admin list item
    */
    {
      path: "/admin",
      element: <Layout_Admin />,
      children: [],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
