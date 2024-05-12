// import { useState } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const MyOrders = () => {
    const [items, setItems] = useState([])
    // const myOrders = useLoaderData();
    // const [orders, setOrders] = useState([]);
    // const {
    //     name,
    //     price,
    //     orderQuantity,
    //     buyerName,
    //     email,
    //     date,
    //     image,
    //     foodDescription,
    //     chef,
    //     origin,
    //     category,
    //     available,
    // } = myOrders;
    // setOrders(myOrders);
    // console.log(myOrders);
    
    useEffect(() => {
        getData()
      }, [])
    
      const getData = async () => {
        const { data } = await axios(`http://localhost:5000/orders`)
        setItems(data)
      }


    const handleDelete = async id => {
        try {
          const { data } = await axios.delete(`http://localhost:5000/order/${id}`)
          console.log(data)
          toast.success('Delete Successful')
    
          getData()
        } catch (err) {
          console.log(err.message)
          toast.error(err.message)
        }
      }
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
                        {items.map((order) => (
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
                                    <span
                                        className="badge badge-ghost badge-sm"
                                        title={order.foodDescription}
                                    >
                                        {order.foodDescription
                                            .split("")
                                            .slice(0, 30)
                                            .join("")}
                                        <span>...</span>
                                    </span>
                                </td>
                                <td>{order.orderQuantity}</td>
                                <td>{order.chef}</td>
                                <td>{order.date}</td>
                                <td>{order.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(order._id)} className="btn btn-ghost btn-xs">
                                        Remove
                                    </button>
                                </th>
                            </tr>
                        ))}
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
