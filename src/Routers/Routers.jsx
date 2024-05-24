import { createBrowserRouter } from "react-router-dom";

import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";
import PrivateRoutes from "../components/PrivateRoutes";
import FoodDetails from "../Pages/FoodDetails";
import Purchase from "../Pages/Purchase";
import AddFood from "../Pages/AddFood";
import MyAddedFood from "../Pages/MyAddedFood";
import MyOrders from "../Pages/MyOrders";
import UpdateMyAddedFood from "../Pages/UpdateMyAddedFood";
import TopFoodDetails from "../Pages/TopFoodDetails";
import Error from "../Pages/Error";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/allFoods",
                element: <AllFoods></AllFoods>,
            },
            {
                path: "/gallery",
                element: (
                    // <PrivateRoutes></PrivateRoutes>
                    <Gallery></Gallery>
                ),
                loader: () =>
                    fetch("https://b9a11-server-side-adibkhan619.vercel.app/gallery"),
            },
            {
                path: "/foods/:id",
                element: <FoodDetails></FoodDetails>,
                loader: ({ params }) =>
                    fetch(
                        `https://b9a11-server-side-adibkhan619.vercel.app/foods/${params.id}`
                    ),
            },
            {
                path: "/purchase/:id",
                element: (
                    <PrivateRoutes>
                        <Purchase></Purchase>
                    </PrivateRoutes>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://b9a11-server-side-adibkhan619.vercel.app/foods/${params.id}`
                    ),
            },
            {
                path: "/addFood",
                element: (
                    <PrivateRoutes>
                        <AddFood></AddFood>
                    </PrivateRoutes>
                ),
            },
            {
                path: "/food/:email",
                element: (
                    <PrivateRoutes>
                        <MyAddedFood></MyAddedFood>
                    </PrivateRoutes>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://b9a11-server-side-adibkhan619.vercel.app/food/${params.email}`
                    ),
            },
            {
                path: "/myOrders",
                element: (
                    <PrivateRoutes>
                        <MyOrders></MyOrders>
                    </PrivateRoutes>
                ),
                loader: () =>
                    fetch("https://b9a11-server-side-adibkhan619.vercel.app/orders"),
            },
            {
                path: "/update/:id",
                element: (
                    <PrivateRoutes>
                        <UpdateMyAddedFood></UpdateMyAddedFood>
                    </PrivateRoutes>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://b9a11-server-side-adibkhan619.vercel.app/foods/${params.id}`
                    ),
            },
            {
                path: "/orders/:id",
                element: <TopFoodDetails></TopFoodDetails>,
                loader: ({ params }) =>
                    fetch(
                        `https://b9a11-server-side-adibkhan619.vercel.app/orders/${params.id}`
                    ),
            },
        ],
    },
]);

export default Router;
