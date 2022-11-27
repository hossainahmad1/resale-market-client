import { createBrowserRouter } from "react-router-dom"
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main"
import Blog from "../../Pages/Blog/Blog";
import Categories from "../../Pages/Categories/Categories/Categories";
import AddToProducts from "../../Pages/DashBoard/AddToProducts/AddToProducts";
import AllBuyer from "../../Pages/DashBoard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/DashBoard/AllSeller/AllSeller";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import MyAllProducts from "../../Pages/DashBoard/MyAllProducts/MyAllProducts";
import MyProducts from "../../Pages/DashBoard/MyProducts/MyProducts";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
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
                element: <PrivateRoute><Categories></Categories></PrivateRoute>,
                loader: ({ params }) => fetch(`https://final-project-server-two.vercel.app/categories/${params.brand}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/addtoproducts',
                element: <AddToProducts></AddToProducts>
            },
            {
                path: '/dashboard/myallproducts',
                element: <MyAllProducts></MyAllProducts>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/allseller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AllBuyer></AllBuyer>,
                loader: ({ params }) => fetch(`https://final-project-server-two.vercel.app/buyers/${params.select}`)
            },
        ]
    },
])
export default router;