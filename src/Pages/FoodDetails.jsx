import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";


const FoodDetails = () => {
    const food = useLoaderData();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const {_id, food_name, food_image, food_category, price, made_by, food_origin, description, quantity} = food
    console.log(food);
    return (

<div className="card-body rounded-3xl mx-1 my-1 glass lg:my-5  lg:mx-5 lg:card-side bg-base-100 shadow-2xl gap-10 ">
                <figure className="items-center flex">
                    <img className="rounded-3xl" src={food_image} alt="Album" />
                </figure>

                <div className=" lg:w-1/2 lg:space-y-2">
                    <div >
                        <h2 className=" text-4xl">{food_name}</h2>
                        <p className="py-5">{food_category}</p>
                    </div>

                    <div>
                        <h1 className="font-bold">Origin</h1>
                        <p className="text-lg">{food_origin}</p>
                    </div>
                    <div>
                        <h1 className="font-bold ">Chef </h1>
                        <p className="text-lg">{made_by}</p>
                    </div>

                    <div>
                        <h1 className="font-bold ">Description</h1>
                        <p className="text-lg">{description}</p>
                    </div>

                    <div>
                        <h1 className="font-bold ">Price</h1>
                        <p className="text-lg">
                            {price}{" "}
                            {/* <span className="text-sm">per year</span> */}
                        </p>
                    </div>

                    <div>
                        <h1 className="font-bold">Quantity</h1>
                        <p className="text-xl">
                            {} <span className="text-sm">{quantity}</span>
                        </p>
                    </div>

                    <div className="card-actions justify-end">
                        <Link to={`/purchase/${_id}`}>
                            <button className="btn btn-primary">Purchase</button>
                        </Link>
                    </div>
                </div>
            </div>
    );
};

export default FoodDetails;