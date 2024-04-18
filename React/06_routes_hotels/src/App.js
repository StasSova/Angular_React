import React from "react";
// npm i react-router-dom
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LocationProvider } from "./context/LocationContext";
import Home from "./pages/home/home";
import Details from "./pages/details/details";
import NotFound from "./pages/notFound/notFound";
import LayoutHome from "./layout/LayoutHome";

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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
