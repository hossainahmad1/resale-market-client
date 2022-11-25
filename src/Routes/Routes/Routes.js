import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Blog from "../../Pages/Blog/Blog";
import Categories from "../../Pages/Categories/Categories/Categories";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/categories/:brand',
                element: <Categories></Categories>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.brand}`)
            }
        ]
    }
])
export default router;