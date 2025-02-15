import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import NotFoundPage from "../Pages/NotFoundpage";
import CategoryCard from "../Components/CategoryCard";
import CategoryDetails from "../Components/CategoryDetails";
import Chart from "../Pages/Chart";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <NotFoundPage></NotFoundPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../TabList.json'),
                children: [
                    {
                        path: '/',
                        element: <CategoryCard></CategoryCard>,
                        loader: () => fetch('../Product.json'),
                    },

                    {
                        path: '/category/:category',
                        element: <CategoryCard></CategoryCard>,
                        loader: () => fetch('../Product.json'),
                    },

                    
                    
                    

                ],




            },
            {
                path: '/details/:id',
                element: <CategoryDetails></CategoryDetails>,
                loader: () => fetch('../Product.json'),
                
            },

            {
                path:'/Statistics',
                element:<Chart></Chart>
            },

           
          
            




        ]

    }
])

export default routes;


