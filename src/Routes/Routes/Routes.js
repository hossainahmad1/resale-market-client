import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import CategoriesIphone from "../../Pages/Categories/Categories/CategoriesIphone";
import CategoriesSamsung from "../../Pages/Categories/CategoriesSamsung/CategoriesSamsung";
import CategoriesVivo from "../../Pages/Categories/CategoriesVivo/CategoriesVivo";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";



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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/categorisiphone',
                element:<CategoriesIphone></CategoriesIphone>,
                loader:({params}) => fetch(`http://localhost:5000/categories/${params.brand}`)
            },
            {
                path: '/categorissamsung',
                element:<CategoriesSamsung></CategoriesSamsung>
            },
            {
                path: '/categorisvivo',
                element:<CategoriesVivo></CategoriesVivo>
            },
        ]
    }
])
export default router;