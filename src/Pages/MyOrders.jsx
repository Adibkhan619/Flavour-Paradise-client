import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyOrders = () => {
    const myOrders = useLoaderData();
    // const [orders, setOrders] = useState([]);
    const {
        name,
        price,
        orderQuantity,
        buyerName,
        email,
        date,
        image,
        foodDescription,
        chef,
        origin,
        category,
        available,
    } = myOrders;
    // setOrders(myOrders);
    console.log(myOrders);
    return (
    <div className="lg:mx-10">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Made by</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
{
                    myOrders.map(order => (
<tr key={order._id}>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src={order.image}
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            {order.name}
                                        </div>
                                        <div className="text-sm opacity-50">
                                            {order.origin}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                               {order.category}
                                <br />
                                <span className="badge badge-ghost badge-sm" title={order.foodDescription}>
                                    {(order.foodDescription).split("").slice(0, 30).join("")}<span>...</span>
                                </span>
                            </td>
                            <td>{order.orderQuantity}</td>
                            <td>{order.chef}</td>
                            <td>{order.date}</td>
                            <td>{order.price}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">
                                    Remove
                                </button>
                            </th>
                        </tr>
                    ))
        }


        
                        {/* row 1 */}
                        
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                        <th>Name</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Made by</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
