import axios from "axios";
import { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const MyAddedFood = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    // const food = useLoaderData()
    // console.log(food);
    // const  {
    //     // _id,
    //     food_name,
    //     food_image,
    //     food_category,
    //     price,
    //     made_by,
    //     food_origin,
    //     email,
    //     description,
    //     quantity,
    //     order_count,
    // } = food;
    // console.log(food);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const { data } = await axios(
            `https://b9a11-server-side-adibkhan619.vercel.app/food/${user.email}`
        );
        setItems(data);
    };

    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(
                `https://b9a11-server-side-adibkhan619.vercel.app/foods/${id}`
            );
            console.log(data);
            toast.success("Delete Successful");

            getData();
        } catch (err) {
            console.log(err.message);
            toast.error(err.message);
        }
    };

    return (
        <Fade>
            <div>
            <Helmet>
                <title>Flavour Paradise | My Foods</title>
            </Helmet>
            <div className="lg:mx-10 mt-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Category & Description</th>
                                <th>Quantity</th>
                                <th>Made by</th>
                                {/* <th>Date</th> */}
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((food) => (
                                <tr key={food._id}>
                                    <td className="w-[500px]">
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className=" w-48 h-32">
                                                    <img
                                                        className="w-16 h-32 rounded-lg"
                                                        src={food.food_image}
                                                        alt="Avatar Tailwind CSS Component"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-2xl">
                                                    {food.food_name}
                                                </div>
                                                <div className="text-sm opacity-50">
                                                    {food.food_origin}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {food.food_category}
                                        <br />
                                        <span
                                            className="badge badge-ghost badge-sm"
                                            title={food.description}
                                        >
                                            <span>
                                                {food.description
                                                    .split("")
                                                    .slice(0, 30)
                                                    .join("")}
                                            </span>
                                        </span>
                                    </td>
                                    <td>{food.order_count}</td>
                                    <td>{food.made_by}</td>
                                    {/* <td>{order.date}</td> */}
                                    <td>{food.price}</td>
                                    <th className="text-center">
                                        <button
                                            onClick={() =>
                                                handleDelete(food._id)
                                            }
                                            className="btn btn-ghost btn-xs mr-5"
                                        >
                                            Remove
                                        </button>
                                        <Link to={`/update/${food._id}`}><button
                                           className="btn btn-ghost btn-xs">
                                           Update
                                       </button></Link>
                                    </th>
                                    
                                </tr>
                            ))}
                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Category & Description</th>
                                <th>Quantity</th>
                                <th>Made by</th>
                                {/* <th>Date</th> */}
                                <th>Price</th>
                                <th></th>
                                

                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
        </Fade>
    );
};

export default MyAddedFood;
