import React from "react";

// npm i react-router-dom
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import NotFound from "./components/notFound/notFound";
import Layout from "./layout/layout/layout";
import ProductPage from "./components/productPage/productPage";
import { ProductProvider } from "./contexts/productsContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProductProvider>
          <Layout />
        </ProductProvider>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/product/:id",
          element: <ProductPage />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },

    {},
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
