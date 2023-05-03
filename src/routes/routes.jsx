import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Blog from "../components/Blog/Blog";
import ChefRecipes from "../components/ChefRecipes/ChefRecipes";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import TestCompo from "../components/ChefRecipes/TestCompo";
import Profile from "../components/Profile/Profile";
import PriveteRoutes from "../privete/PriveteRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch(`https://chef-server-one.vercel.app/chefs`)
            }, {
                path: 'login',
                element: <Login />
            }, {
                path: 'register',
                element: <Register />
            }, {
                path: 'blog',
                element: <Blog />
            }, {
                path: 'profile',
                element: <PriveteRoutes><Profile /></PriveteRoutes>
            }, {
                path: 'chef-recipes/:id',
                element: <PriveteRoutes><ChefRecipes /></PriveteRoutes>,
                loader: ({ params }) => fetch(`https://chef-server-bzaman-tk.vercel.app/chef-recipe/${params.id}`)
            }
        ]

    }
])

export default router; 