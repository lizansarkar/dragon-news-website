import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";
import MainLayout from "../pages/MainLayout";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter (
    [
        {
            path: "/",
            element: <Home></Home>,
            children: [
                {
                    path:"",
                    element: <MainLayout></MainLayout>
                },
                {
                    path:"/category/:id",
                    element: <CategoryNews></CategoryNews>
                },
            ]
        },
        {
            path: "auth",
            element: <h2>Authentication layout</h2>
        },
        {
            path: "news",
            element: <h2>News layout</h2>
        },
        {
            path: "/*",
            element: <h2>Error page</h2>
        },
    ]
)

export default router;