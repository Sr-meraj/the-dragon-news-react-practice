import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../Layouts/Main";
import NewsDetailLayout from "../Layouts/NewsDetailLayout";
import LoginLayout from "../Layouts/LoginLayout";
import Category from "../Pages/Home/Category/Category";
import Login from "../Pages/Login and Register/Login";
import Register from "../Pages/Login and Register/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Pages/Shared/Terms/Terms";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='category/0'></Navigate>,
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'terms',
                element: <Terms />
            },
        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category />,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
            },
        ]
    }, {
        path: 'news',
        element: <NewsDetailLayout />,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><NewsDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`),
            }
        ]
    },

])


export default router