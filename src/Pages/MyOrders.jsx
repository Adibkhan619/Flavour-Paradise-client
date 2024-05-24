// import { useState } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
// import { useLoaderData } from "react-router-dom";

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
        const { data } = await axios(`https://b9a11-server-side-adibkhan619.vercel.app/orders`)
        setItems(data)
      }

    const handleDelete = async id => {
        try {
          const { data } = await axios.delete(`https://b9a11-server-side-adibkhan619.vercel.app/order/${id}`)
          console.log(data)
          toast.success('Delete Successful')
    
          getData()
        } catch (err) {
          console.log(err.message)
          toast.error(err.message)
        }
      }
    return (
        <Fade>
            <div className="lg:mx-10">
            <Helmet>
                <title>Flavour Paradise | My Orders</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category & Description</th>
                            <th>Quantity</th>
                            <th>Made by</th>
                            <th>Date</th>
                            <th>Price (One)</th>
                            <th>Total Price</th>
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
                                <td>{order.price*order.orderQuantity}</td>
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
                            <th>Category & Description</th>
                            <th>Quantity</th>
                            <th>Made by</th>
                            <th>Date</th>
                            <th>Price (One)</th>
                            <th>Total Price</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        </Fade>
    );
};

export default MyOrders;
