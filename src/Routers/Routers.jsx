import { createBrowserRouter } from "react-router-dom";

import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";
import MyProfile from "../Pages/MyProfile";
import PrivateRoutes from "../components/PrivateRoutes";

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
        }
      ]
    },
  ]);

export default Router;