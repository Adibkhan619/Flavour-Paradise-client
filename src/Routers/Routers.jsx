import { createBrowserRouter } from "react-router-dom";

import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";
import MyProfile from "../Pages/MyProfile";
import PrivateRoutes from "../components/PrivateRoutes";
import FoodDetails from "../Pages/FoodDetails";
import Purchase from "../Pages/Purchase";
import AddFood from "../Pages/AddFood";
import MyAddedFood from "../Pages/MyAddedFood";
import MyOrders from "../Pages/MyOrders";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path:"/register",
            element: <Register></Register>
        },
        {
            path: "/allFoods",
            element: <AllFoods></AllFoods>
        },
        {
            path: "/gallery",
            element: <PrivateRoutes><Gallery></Gallery></PrivateRoutes>
        },
        {
            path: "/myProfile",
            element: <MyProfile></MyProfile>
        },
        {
            path: "/foods/:id",
            element: <FoodDetails></FoodDetails>,
            loader: ({params}) => fetch( `http://localhost:5000/foods/${params.id}`) 
        },
        {
            path: "/purchase/:id",
            element: <PrivateRoutes><Purchase></Purchase></PrivateRoutes>,
            loader: ({params}) => fetch( `http://localhost:5000/foods/${params.id}`) 
        },
        {
            path:"/addFood",
            element:<PrivateRoutes><AddFood></AddFood></PrivateRoutes>
        },
        {
            path: "/food/:email",
            element: <PrivateRoutes><MyAddedFood></MyAddedFood></PrivateRoutes>,
            loader: ({params}) => fetch(`http://localhost:5000/food/${params.email}`)
        },
        {
            path: "/myOrders",
            element: <PrivateRoutes><MyOrders></MyOrders></PrivateRoutes>,
            loader: () => fetch('http://localhost:5000/orders')
        }
      ]
    },
  ]);

export default Router;