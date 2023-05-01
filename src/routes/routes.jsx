import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Blog from "../components/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <div><h2>Hi Error</h2></div>,
        children: [
            {
                index: true,
                element: <Home />
            }, {
                path: 'login',
                element: <Login />
            }, {
                path: 'register',
                element: <Register />
            }, {
                path: 'blog',
                element: <Blog />
            }
        ]

    }
])

export default router; 