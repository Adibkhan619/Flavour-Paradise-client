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
        }
      ]
    },
  ]);

export default Router;