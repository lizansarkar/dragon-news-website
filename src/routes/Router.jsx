import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";
import MainLayout from "../pages/MainLayout";
import CategoryNews from "../pages/CategoryNews";
import About from "../pages/About";
import Career from "../pages/Career";
import Login from "../layouts/authentication-pages/Login";
import Register from "../layouts/authentication-pages/Register";
import AuthLayout from "../layouts/authentication-pages/AuthLayout";
import NewsDetail from "../pages/NewsDetail";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <MainLayout></MainLayout>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news-detail/:id",
    element: (
      <PrivateRoute>
        <NewsDetail></NewsDetail>
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
  },
  {
    path: "/*",
    element: <h2>Error page</h2>,
  },
]);

export default router;
