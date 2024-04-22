import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/notFound/notFound";
import Home from "./pages/Home/Home";
import LayoutHome from "./layout/LayoutHome";
import { QuizProvider } from "./context/QuizContext";
import LayoutAuth from "./layout/LayoutAuth";
import Login from "./pages/auth/login/login";
import Register from "./pages/auth/register/register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <QuizProvider>
          <LayoutHome />
        </QuizProvider>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    {
      path: "/auth",
      element: <LayoutAuth />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
