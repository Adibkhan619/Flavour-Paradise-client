import { useLoaderData } from "react-router-dom";


const MyAddedFood = () => {

    const food = useLoaderData()
    console.log(food);

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



    return (
        <div>
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
                            {/* <th>Date</th> */}
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
{
                    food.map(food => (
<tr key={food._id}>
                            <td className="w-[500px]">
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className=" w-48 h-32">
                                            <img className="w-16 h-32 rounded-lg"
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
                                <span className="badge badge-ghost badge-sm" title={food.description}>
                                    
                                    <span>{(food.description).split("").slice(0, 30).join("")}</span>
                                </span>
                            </td>
                            <td>{food.order_count}</td>
                            <td>{food.made_by}</td>
                            {/* <td>{order.date}</td> */}
                            <td>{food.price}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">
                                    Remove
                                </button>
                            </th>
                        </tr>
                    ))
        }                       
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                        <th>Name</th>
                            <th>Category</th>
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
    );
};

export default MyAddedFood;